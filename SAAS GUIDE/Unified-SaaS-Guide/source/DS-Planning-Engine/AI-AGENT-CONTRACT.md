# AI Agent Contract — DS-Planning-Engine

> Machine-readable counterpart: [`.ai-scope.json`](./.ai-scope.json).
> Companion: [`AGENTS.md`](./AGENTS.md) — first-read entry point.

This contract governs every AI agent that operates on the `DS-Planning-Engine/` folder. It mirrors the lockdown pattern used by `Frontend-Master_DS/` so agents that already know the DS contract get this one for free.

---

## 0. What this engine IS

A DS-bound, DS-aware site planning system. Given a brief, it emits a `site-plan.json` whose every section kind, archetype, motion preset, and theme is guaranteed to exist in the DS contract — OR is flagged as a gap with a recommendation to extend the DS.

This engine **owns the contract** between client briefs and DS execution. The previous (DOC) planner emitted artifacts the executor had to discard; this engine's outputs are directly consumed without translation loss.

---

## 1. What you MUST NOT touch

The following paths are **LOCKED**. Agents must not edit existing files in these paths.

- `AGENTS.md`, `AI-AGENT-CONTRACT.md`, `.ai-scope.json`, `README.md` — the contract itself
- `core/planning-protocol.md` — what a plan must contain
- `core/ds-awareness-rules.md` — how the planner reads the DS contract
- `core/archetype-mapping.md` — business-type → archetype rules
- `core/quality-gates.md` — when a plan locks vs blocks
- `templates/site-plan.schema.json` — authoritative plan shape
- `templates/plan-lock.schema.json` — lock status contract
- `templates/brief-intake.template.md` — intake form
- `templates/ds-gap-report.template.md` — gap report template
- `agents/DS_site_planner.agent.md` — the planner agent spec
- `scripts/verify-plan.mjs` — plan validator
- Any file under `Frontend-Master_DS/`, `DOC/`, `.github/`, or the workspace root configs

Edits to LOCKED files require human approval. They are not part of an agent's normal extension surface.

---

## 2. What you MAY ADD (extension paths)

### 2.a `core/industry-patterns/<industry-slug>.md`

A new industry pattern defines the default site shape for a class of clients (e.g., `local-services`, `modern-saas`, `ecommerce-dtc`). Per the documented convention each file declares:

- `default_site_map`: which routes exist, primary nav, footer columns
- `default_journeys`: typical conversion paths
- `default_trust_signals`: what trust evidence the industry expects
- `default_section_kinds_by_page`: per-page composition starting points (using DS kinds only)
- `recommended_archetype`: which of DS's 8 archetypes fits
- `forbidden_patterns`: what this industry MUST NOT do

To add a new pattern:
1. Create `core/industry-patterns/<slug>.md` following the existing examples.
2. Add an entry to `core/industry-patterns/_index.md`.
3. Run `node scripts/verify-plan.mjs --self-check` (optional sanity).

### 2.b `output/runs/<timestamp>-<project-slug>/`

The planner WRITES here on every invocation. Each run is self-contained; do not edit prior runs after they lock.

---

## 3. Allowed actions

- Reading any file in the engine, in `Frontend-Master_DS/`, or in `DOC/`
- Running the planner agent (`DS_site_planner`)
- Running `scripts/verify-plan.mjs` against any run
- Adding new files under `core/industry-patterns/` per the convention above
- Writing new run output under `output/runs/<timestamp>-<project-slug>/`

---

## 4. Forbidden actions

- Editing LOCKED files (see §1)
- Inventing section kinds not present in the DS contract
- Inventing motion presets not present in the DS contract
- Inventing archetypes not present in the DS contract
- Inventing theme names other than `dark` / `light`
- Emitting a plan with `lock_status: "passed"` when gaps exist in `ds_gaps`
- Modifying any file under `Frontend-Master_DS/` (the DS is locked separately)
- Adding new top-level dependencies to anything without explicit human approval
- Emitting copy that contradicts the brief's `voice` or `forbidden_words`
- Output anywhere outside `output/runs/<timestamp>-<project-slug>/`

---

## 5. Plan lock status — the four states

The planner's `plan.lock.json` MUST set `status` to exactly one of:

| Status | Meaning | Operator next step |
|---|---|---|
| `passed` | Every planned `(kind, archetype)` tuple has a matching DS variant. Plan is fully executable. | Hand off to `DS_Frontend_developer` |
| `needs_ds_extension` | One or more critical sections (hero / primary CTA / pricing on conversion pages / etc.) have no matching DS variant. | Either: (a) build the missing variants in DS via its extension flow, then re-run the planner; (b) override to `partial_coverage` to accept fallbacks |
| `partial_coverage` | Operator opted to ship with cross-archetype fallback variants on flagged sections. | Hand off to `DS_Frontend_developer`. Output is classified `baseline_prototype`, not `production_candidate` |
| `needs_clarification` | The brief is missing required fields the planner cannot infer. | Operator supplies missing data; re-run from Phase 2 |

Mis-marking lock_status is the most severe contract violation. A plan claiming `passed` while `ds_gaps[]` is non-empty MUST be rejected by `verify-plan.mjs`.

---

## 6. Verification gate

Before any plan is handed off to the executor:

```bash
node DS-Planning-Engine/scripts/verify-plan.mjs DS-Planning-Engine/output/runs/<run-id>
```

Exit 0 = plan ready. Non-zero = plan invalid; do not execute.

---

## 7. Why this contract exists

Without it, planning agents reliably:
- Invent component names the executor cannot resolve (this is what broke the DOC → DS handoff)
- Invent design tokens that get silently discarded
- Declare motion catalogs the DS does not implement
- Emit plans that pass-look-OK on paper but produce nothing at execution time
- Drift across invocations even on the same brief

This contract makes the boundary explicit. Plans that respect it execute cleanly. Plans that don't fail the verification gate before they can do damage.

---

## 8. Compatibility promise

- `site-plan.schema.json` is a public contract. Once a field is published, it stays. New fields may be added; existing ones cannot be removed or change shape without a major version bump.
- The four `lock_status` values are public and immutable.
- The 8-phase workflow is the public agent contract; phases may add detail but not remove or reorder.

Breaking this promise breaks every downstream consumer (executor, verifier, future tooling).
