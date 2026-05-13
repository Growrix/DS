# Planning Protocol

> What a valid plan MUST contain, and why each piece exists. This is the canonical reference for `DS_site_planner` and any future planning agent in this engine.

---

## 1. The plan is a contract, not a draft

The `site-plan.json` emitted by the planner is the **handoff contract** to `DS_Frontend_developer`. It is consumed verbatim: every field, kind, archetype, motion preset, and theme name must already exist in the DS contract, or the plan is invalid. The planner does not draft suggestions — it locks decisions.

---

## 2. Required content of every plan

Every plan MUST contain (per `templates/site-plan.schema.json`):

### `project` — identity
- `name`, `slug` (kebab-case), `locale`, `business_type`, `audience`

### `brand` — visual posture
- `archetype` (one of DS's 8)
- `theme_default` (`dark` | `light`)
- `voice` (free-form description used for content generation)
- `palette_accent_override` (optional hex)
- `font_override` (optional)
- `footer_attribution` (required object; `enabled` controls whether attribution renders)

### `site_map` — structural shape
- `primary_nav` (list of `{ id, label, href, icon? }`)
- `mobile_bottom_nav` (3-5 entries — DS contract requires this range)
- `footer_columns` (list of `{ id, title, links: [{ label, href }] }`)

### `pages` — composition per route
- Map from page-id to page object
- Each page declares `id`, `route`, `sections[]`
- Each section declares `id`, `kind` (mandatory, must exist in DS contract), `variant` (optional id; if null the executor picks default), `content` (kind-specific shape)

### `content_library` — copy + locale strings
- Either flat key→string map, or nested per-locale
- Every content key referenced by `pages[].sections[].content` MUST be present

### `ds_dependency` — provenance
- `ds_root`, `ds_contract_version`, `ds_contract_counts`
- Records the DS snapshot the plan was authored against

### `ds_gaps` — gap report inline
- Array of gap entries (mirrors `ds-gap-report.md`)
- Empty when `lock_status === "passed"`; non-empty otherwise

### `lock_status` — sign-off
- One of: `passed`, `needs_ds_extension`, `partial_coverage`, `needs_clarification`

### `open_questions` (optional)
- Anything the planner could not autonomously resolve

---

## 3. The 8-phase workflow

Every plan run MUST execute these phases in order. Skipping a phase or running out of order invalidates the plan.

| Phase | Owns | Outputs |
|---|---|---|
| 1. DS awareness | Load + cache DS contract | (in-memory; no artifact) |
| 2. Brief intake | Convert raw brief to `brief.json` (LOCKED) | `brief.json` |
| 3. Archetype + theme resolution | Map brief mood/business → DS archetype + theme | (inline in `brand`) |
| 4. Site structure | Apply industry pattern; emit nav + footer | (inline in `site_map`) |
| 5. Per-page composition | Pick section kinds + (optionally) variants per page | `pages/<route>.plan.md` per route |
| 6. Content library | Generate copy for every content key | `content-library.json` |
| 7. DS gap analysis | Walk every `(kind, archetype)` tuple; identify gaps | `ds-gap-report.md` |
| 8. Plan finalisation | Emit `site-plan.json` + `plan.lock.json` + `README.md` | the canonical handoff |

---

## 4. Determinism contract

- Same brief + same DS contract → byte-identical `site-plan.json` (excluding `generated_at` timestamps).
- Same brief + DIFFERENT DS contract → DIFFERENT plan; gap report may shrink as DS grows.
- The planner MUST NOT call non-deterministic external services without recording inputs.
- Re-running a plan against the same brief is the planner's verification mode.

---

## 5. Idempotency contract

- Re-running the planner against a brief that already produced a `passed` plan returns the SAME `site-plan.json` (idempotent).
- Re-running after the DS extends (more variants registered) MAY produce a different plan (different variant selections), but a `passed` plan from a prior run remains executable.

---

## 6. Anti-patterns (planner MUST NOT)

1. **Invent kinds.** Section `kind` MUST exist in `ds.contract.json.sectionVariants[].kind`. The kinds set is closed-world per the DS.
2. **Invent variant ids.** When specifying a variant, it MUST exist in `ds.contract.json.sectionVariants[].id`.
3. **Invent archetypes.** One of DS's 8 archetypes, full stop. If the brief seems to need a new archetype, that's a `needs_ds_extension` not a planner workaround.
4. **Invent motion presets.** Reference motion by id from `ds.contract.json.motionPresets[].id` only.
5. **Invent themes.** `dark` or `light`. Period.
6. **Invent component names.** The planner does not declare `ServiceCard` / `HeroSection` / etc. — those are DS-internal. Section `kind` is the unit of expression.
7. **Invent design tokens.** Brand layer accepts an optional `palette_accent_override` hex, but does not author full token sets.
8. **Lock `passed` when gaps exist.** `lock_status === "passed"` implies `ds_gaps[].length === 0`. Always. Enforced by the schema and the verifier.
9. **Skip phases.** Each phase produces a documented artifact and gates the next.
10. **Write outside the run folder.** Output is confined to `output/runs/<timestamp>-<project-slug>/plan/`.

---

## 7. What a "good" plan looks like

A reviewer (human or `system_architect`) auditing a plan should be able to answer YES to all of these:

- [ ] Every `section.kind` resolves in DS contract
- [ ] Every `section.variant` (if non-null) resolves in DS contract for the right kind
- [ ] Every page has `>= 1` section
- [ ] `brand.archetype` is one of the 8 enums
- [ ] `brand.theme_default` is `dark` or `light`
- [ ] `mobile_bottom_nav` has 3-5 entries
- [ ] `content_library` has entries for every content key referenced
- [ ] `ds_gaps` aligns with `lock_status` (empty iff `passed`)
- [ ] `footer_attribution.enabled` is explicit (true/false), not absent
- [ ] No raw hex / px / ms values anywhere in `content` (those belong in DS tokens, not in plans)
- [ ] `open_questions` empty when `lock_status === "passed"`

---

## 8. Plan lifecycle

```
Phase 2 emits brief.json (LOCKED)        ── brief stops changing
        ↓
Phase 8 emits plan.lock.json + site-plan.json
        ↓
verify-plan.mjs gate
        ↓
Operator reviews ds-gap-report.md
        ↓
   ┌─────────────────────────────┬───────────────────────────────┐
   │                             │                                 │
status: passed              status: needs_ds_extension      status: partial_coverage
   ↓                             ↓                                 ↓
DS_Frontend_developer       Build variants → re-run         DS_Frontend_developer
runs cleanly                 planner (loop until passed)     runs with fallbacks
   ↓                                                              ↓
production_candidate                                          baseline_prototype
   ↓                                                              ↓
Ship                                                          Ship (or iterate)
```

---

## 9. Forward compatibility

When the DS adds new variants, archetypes, motion presets, or kinds:
- The planner's behaviour changes automatically (new options surface on re-run).
- The plan SCHEMA does not change.
- Existing plans remain valid — they reference fewer variants than DS now offers but everything they reference still exists.

When the DS REMOVES a variant (it shouldn't, but if it does):
- Existing plans referencing the removed variant will fail at `verify-plan.mjs` (good — surface the breakage immediately).
- Planner reruns will not select the removed variant.

This is why DS variant ids are a **public contract** — once published, immortal until major version bump.
