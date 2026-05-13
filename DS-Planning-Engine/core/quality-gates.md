# Quality Gates

> When a plan locks, when it blocks, and what the verifier checks. These gates are enforced by `scripts/verify-plan.mjs` and are the contract between the planner and the executor.

---

## 1. Plan lifecycle gates

A plan moves through four states. The planner sets the initial state in Phase 8. Only the operator (not the planner, not the executor) can override a status downward (e.g., `needs_ds_extension` → `partial_coverage`).

```
needs_clarification  →  (operator supplies missing data)  →  re-run planner from Phase 2
       ↓
needs_ds_extension   →  (operator builds missing variants in DS)  →  re-run planner from Phase 7
       ↓                                OR
                        (operator accepts fallbacks)  →  override to partial_coverage
       ↓
partial_coverage     →  executor runs with fallbacks → delivers baseline_prototype
       ↓
passed               →  executor runs clean → delivers production_candidate
```

---

## 2. Gate: `passed`

**The plan is fully executable with zero fallbacks.**

Requirements (all must hold simultaneously):

| Check | What it verifies |
|---|---|
| `ds_gaps[].length === 0` | No missing variants, kinds, or archetypes |
| All `section.kind` values exist in DS contract | Closed-world kind check |
| All `section.variant` (if non-null) exist in DS contract | Closed-world variant check |
| `brand.archetype` is one of the 8 enumerated ids | Valid archetype |
| `brand.theme_default` is `"dark"` or `"light"` | Valid theme |
| `mobile_bottom_nav` has 3-5 entries | DS constraint |
| Every content key in `pages[].sections[].content` is present in `content_library` | No orphan keys |
| `footer_attribution.enabled` is a boolean (not absent) | Explicit declaration required |
| `open_questions[].length === 0` | No unresolved questions |
| `brief.json` exists and has non-empty required fields | Brief locked |
| `plan.lock.json` exists with `status: "passed"` | Lock artifact present |

---

## 3. Gate: `needs_ds_extension`

**The plan has gaps that impact critical conversion surfaces.**

Auto-triggered when any of the following is true:
- A `section.kind` needed for the hero section has no DS variant for the selected archetype (even cross-archetype).
- A `section.kind` needed for the primary CTA band has no DS variant at all.
- A `section.kind` needed on the conversion page (`/quote`, `/pricing`, `/contact`) has no DS variant at all (kind entirely absent from contract).
- More than 30% of all planned sections have no DS variant (cross-archetype fallback required).

The planner sets `lock_status: "needs_ds_extension"` and the verifier enforces that `DS_Frontend_developer` must NOT be invoked until the operator resolves this (by building variants or explicitly overriding to `partial_coverage`).

---

## 4. Gate: `partial_coverage`

**The plan has gaps but the operator has chosen to ship with fallbacks.**

This state is ONLY set by the operator — the planner itself never auto-sets `partial_coverage`. The operator overrides by:
1. Reviewing `ds-gap-report.md`.
2. Confirming each accepted gap in `plan.lock.json → operator_overrides[]`.
3. Changing `status` from `needs_ds_extension` to `partial_coverage`.
4. Re-running `verify-plan.mjs` to confirm the override is valid.

The executor then delivers `delivery_class: "baseline_prototype"` — functional but with cross-archetype fallbacks on the flagged sections.

---

## 5. Gate: `needs_clarification`

**The brief is missing fields the planner cannot reasonably infer.**

Auto-triggered when any of the following is absent after Phase 2:
- `project.name` (empty or default value)
- `project.locale` (cannot be inferred from brief language alone if ambiguous)
- `project.business_type` (cannot be inferred)
- `brand.voice` (empty)
- `site_map.primary_nav` (cannot be built without knowing the pages scope)
- `footer_attribution.enabled` (must be explicit)
- The brief has zero service/product/offering information

The planner emits `open_questions[]` listing the exact missing fields and halts at Phase 2. It does not continue to Phase 3-8.

---

## 6. Verifier checks (`verify-plan.mjs`)

The verifier runs these checks in order. First failure stops the run with a non-zero exit code and a human-readable error message.

| # | Check | Pass condition | Failure code |
|---|---|---|---|
| 1 | `site-plan.json` schema validity | Conforms to `templates/site-plan.schema.json` | `SCHEMA_VIOLATION` |
| 2 | `plan.lock.json` schema validity | Conforms to `templates/plan-lock.schema.json` | `LOCK_SCHEMA_VIOLATION` |
| 3 | `brief.json` required fields | All required brief fields are non-empty | `BRIEF_INCOMPLETE` |
| 4 | Kind existence | Every `section.kind` in `pages` resolves in `ds.contract.sectionVariants[].kind` | `UNKNOWN_KIND` |
| 5 | Variant existence | Every non-null `section.variant` resolves in `ds.contract.sectionVariants[].id` | `UNKNOWN_VARIANT` |
| 6 | Variant-kind coherence | Every non-null `section.variant` belongs to the correct `kind` | `VARIANT_KIND_MISMATCH` |
| 7 | Archetype validity | `brand.archetype` is one of the 8 DS archetype ids | `UNKNOWN_ARCHETYPE` |
| 8 | Theme validity | `brand.theme_default` is `"dark"` or `"light"` | `UNKNOWN_THEME` |
| 9 | Mobile nav count | `site_map.mobile_bottom_nav` length is 3-5 | `MOBILE_NAV_COUNT_VIOLATION` |
| 10 | Content library completeness | Every content key referenced in section `content` objects exists in `content_library` | `MISSING_CONTENT_KEY` |
| 11 | Gap vs lock_status coherence | `lock_status === "passed"` iff `ds_gaps[].length === 0` | `GAP_STATUS_MISMATCH` |
| 12 | Open questions vs lock_status | `lock_status === "passed"` iff `open_questions[].length === 0` | `OPEN_QUESTIONS_ON_PASSED` |
| 13 | Pages directory | `pages/` subdirectory exists with `.plan.md` files for every page declared in `site_map` | `MISSING_PAGE_BRIEF` |
| 14 | `content-library.json` exists | File present at run path | `MISSING_CONTENT_LIBRARY` |
| 15 | DS contract read (live) | `../Frontend-Master_DS/generated/ds.contract.json` readable at verify time | `DS_CONTRACT_UNREADABLE` |

---

## 7. Executor preconditions (enforced by `DS_Frontend_developer`)

Even after `verify-plan.mjs` exits 0, the executor enforces its own preconditions:

| Precondition | What the executor checks |
|---|---|
| `lock_status` is `passed` OR `partial_coverage` | Executor refuses `needs_ds_extension` and `needs_clarification` |
| DS contract mtime is valid | If `ds.contract.json` is stale (mtime < `_registry.ts`), executor blocks with `DS_CONTRACT_STALE` |
| `site-plan.json` can be loaded as valid JSON | File is not corrupted |

---

## 8. What happens when verification fails

The verifier emits:
- A concise error block to stdout with: check number, failure code, human description, file path and line (if applicable).
- A structured `verify-result.json` alongside the plan lock file for machine consumption.

The operator fixes the root cause (usually either a planner bug or a missing DS extension) and re-runs the planner or the verifier.

The executor (`DS_Frontend_developer`) must NOT be invoked against a plan that has not passed the verifier gate. This is a hard contract rule in both `AI-AGENT-CONTRACT.md` and `DS_Frontend_developer.agent.md`.
