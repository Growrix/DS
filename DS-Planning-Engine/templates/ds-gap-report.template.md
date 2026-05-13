---
document_type: ds-gap-report
version: 1
project_slug: <kebab-case slug>
generated_by: DS_site_planner v1
ds_contract_version: <version>
---

# DS Gap Report — <Project Name>

> Generated during Phase 7 of `DS_site_planner`. Lists every variant the plan needs that does NOT currently exist in `Frontend-Master_DS/generated/ds.contract.json`. Use this as the input for DS extension work, OR override to `partial_coverage` and accept fallbacks.

---

## Summary

- **Total gaps:** `<n>`
- **Critical gaps (conversion-impacting):** `<n>`
- **Pages affected:** `<n>` of `<total>`
- **Suggested lock status:** `<passed | needs_ds_extension | partial_coverage | needs_clarification>`

---

## Gaps

For each gap, the planner records:

### `<index>. kind: <section-kind> · archetype: <archetype-id>`

- **Pages affected:** `<list of routes>`
- **Recommended variant id:** `<kebab-case id, e.g. hero-local-business-trust-1>`
- **Effort estimate:** `<approximate time to build via DS extension flow>`
- **Fallback variant available:** `<variant-id | none>`
- **Severity:** `<critical | high | medium | low>`
- **Why critical (if critical):** `<one sentence — usually because the variant sits on a conversion-critical surface like hero or primary CTA>`
- **Notes:** `<any additional context — e.g., "planner asked for trust chips with photo background; closest DS variant doesn't include trust chips">`

---

## Recommended actions

### Option A — Build the missing variants (preferred when launching matters)

For each gap, follow the DS extension flow in `../Frontend-Master_DS/AI-AGENT-CONTRACT.md §2.a`:

1. Create `src/ds/composition/sections/variants/<kind>/<variant-id>.tsx`
2. Append scoped CSS in `src/ds/styles/ds.section-variants.css`
3. Add 1 import + 1 entry to `SECTION_REGISTRY` in `_registry.ts`
4. Run `npm run ds:contract`
5. Run `npm run verify`

Then re-invoke `DS_site_planner` against the same brief; the gap report should now be empty and lock status should be `passed`.

### Option B — Accept fallback variants (faster shipping)

For each gap with a `fallback_variant_id`, the planner can override `lock_status` from `needs_ds_extension` to `partial_coverage`. The executor will use the fallback variant. The deliverable is classified as `baseline_prototype`, not `production_candidate`. Sub-optimal but shippable.

### Option C — Reduce scope (when a gap is non-essential)

If a gap is on a non-essential page (e.g., `/quote` form-card variant missing), the operator can choose to omit that page from the launch and re-add it once the variant exists.

---

## Determinism note

Re-running the planner against the same brief + same DS contract MUST produce a byte-identical gap report (excluding `generated_at` timestamps). If two runs differ, the planner has a non-determinism bug — file under `system_architect DETERMINISM` mode.
