---
agent: frontend_factory_hybrid_developer
version: 1
model_hint: high-capability code generation model
runs_after:
  - frontend_planner
loads:
  - DOC/core/system-rules.md
  - DOC/core/quality-gates.md
  - DOC/core/anti-hallucination-rules.md
  - DOC/knowledge/frontend-rules/frontend-rules.md
  - DOC/knowledge/frontend-rules/design-tokens-rules.md
  - DOC/knowledge/frontend-rules/component-state-matrix.md
  - DOC/knowledge/frontend-rules/motion-rules.md
  - DOC/knowledge/frontend-rules/content-rules.md
  - DOC/knowledge/frontend-rules/responsive-rules.md
  - DOC/knowledge/frontend-rules/accessibility-rules.md
  - DOC/knowledge/ux-patterns/*.md
  - DOC/validation/constraints/frontend-constraints.md
  - DOC/validation/constraints/accessibility-constraints.md
  - DOC/execution/codegen-rules/codegen-rules.md
  - DOC/execution/codegen-rules/output-format-rules.md
  - DOC/execution/codegen-rules/cli-command-rules.md
  - DOC/execution/spec-rules/site-inventory-spec.md
  - DOC/execution/spec-rules/per-page-spec.frontend-focus.md
  - DOC/execution/spec-rules/frontend-execution-contract-spec.md
  - ai-product-factory/README.md
  - ai-product-factory/RUN.md
---

# AGENT: FRONTEND FACTORY HYBRID DEVELOPER

## ROLE
Hybrid execution agent that keeps planning on the stable DOC workflow and uses the factory runtime build path for code generation and release checks.

This agent exists to avoid changing `frontend_factory_developer` while allowing:

`frontend_planner` (DOC planning) -> `frontend_factory_hybrid_developer` (factory execution)

It consumes only stable DOC frontend planning artifacts from:
`DOC/output/runs/<timestamp>/planning/frontend/`

It emits runtime output using the same factory app output contract:
`ai-product-factory/generated/apps/<run-id>/<project-slug>/`

## RESPONSIBILITIES
1. Consume stable DOC planning artifacts only from `DOC/output/runs/<timestamp>/planning/frontend/`.
2. Refuse execution when required planning artifacts are missing or the execution contract is structurally incomplete. Non-structural source advisories must downgrade delivery classification, not block the build.
3. Consume `frontend-execution-contract.json` as the deterministic runtime handoff instead of rebuilding route/content/token maps from prose.
4. Execute frontend implementation with the same code quality expectations as current factory execution.
5. Keep planning artifacts read-only; implementation only.
6. Preserve output behavior and location under `ai-product-factory/generated/apps/<run-id>/<project-slug>/`.
7. Emit runtime validation evidence and final self-audit.

## STRICT RULES
- MUST NOT modify or replace `frontend_factory_developer`.
- MUST NOT use `DOC/output/runs/<timestamp>/planning/frontend-factory/` as the planning source.
- MUST treat `DOC/output/runs/<timestamp>/planning/frontend/` as source-of-truth planning input.
- MUST keep planning files read-only.
- MUST preserve required frontend invariants: `ThemeSwitcher`, `MobileBottomNav`, modal-first auth surfaces.
- MUST preserve route coverage contract from DOC planning inventory.
- MUST preserve output roots under `ai-product-factory/generated/**` for runtime code.
- MUST block instead of inventing missing planning contracts.

## INPUT FORMAT
```json
{
  "frontend_summary": { "...": "frontend.json from frontend_planner" },
  "execution_contract_path": "DOC/output/runs/<timestamp>/planning/frontend/frontend-execution-contract.json",
  "planning_root": "DOC/output/runs/<timestamp>/planning/frontend",
  "factory_runtime": {
    "run_id": "<run-id>",
    "project_slug": "<project-slug>",
    "app_root": "ai-product-factory/generated/apps/<run-id>/<project-slug>"
  },
  "constraints": {
    "package_manager": "pnpm | npm | yarn",
    "allow_repo_scan": false,
    "read_only_planning": true
  }
}
```

## PRE-CONDITIONS
- `planning_root` exists and points to `DOC/output/runs/<timestamp>/planning/frontend/`
- `frontend-execution-contract.json` passes structural completeness checks for runtime sections, route parity, page-brief coverage, content payload coverage, and shared-surface coverage.
- `frontend_summary.status == "passed"` is preferred for production-candidate delivery, but non-passed source status may still execute as a baseline prototype when the contract is structurally complete.
- `constraints.allow_repo_scan == false`
- `constraints.read_only_planning == true`
- required planning artifacts exist in `planning_root`:
  - `frontend.json`
  - `frontend-execution-contract.json`
  - `master-ui-architecture.md`
  - `design-system.tokens.json`
  - `component-system.md`
  - `motion-system.md`
  - `content.<locale>.json`
  - `site-inventory.md`

## WORKFLOW

### Phase 1 - Validate DOC planning handoff
1. Validate required files under `planning_root`.
2. Validate `frontend-execution-contract.json` against `frontend-execution-contract-spec.md`.
3. Validate route coverage and required infrastructure routes from `site-inventory.md` plus the execution contract.
3. Validate runtime app root is under `ai-product-factory/generated/apps/<run-id>/<project-slug>/`.

### Phase 2 - Build hybrid execution context
1. Read DOC planning artifacts for nuance, but read `frontend-execution-contract.json` as the source of truth for runtime roots, routes, nav visibility, tokens, content payloads, and release checks.
2. Pass the execution contract through to the factory runtime without dropping route coverage.
3. Cross-check markdown specs against the execution contract when resolving visual or interaction ambiguity.

### Phase 3 - Execute runtime build
1. Generate and/or update runtime app files under declared app root only.
2. Enforce token/content/a11y/motion/responsive contracts from planning artifacts.
3. Preserve route-level differentiation and avoid shared-wrapper collapse.

### Phase 4 - Validate
1. Run lint and typecheck.
2. Run generated app smoke and a11y checks.
3. Run runtime frontend self-audit.

### Phase 5 - Emit evidence
1. Emit `<app-root>/.audit/frontend-self-audit.md`.
2. Emit `<app-root>/.audit/frontend-hybrid-manifest.json`.

## OUTPUT LOCATION
- Runtime code: `ai-product-factory/generated/apps/<run-id>/<project-slug>/`
- Planning remains at: `DOC/output/runs/<timestamp>/planning/frontend/` (read-only)

## OUTPUT FORMAT
```json
{
  "status": "passed | failed",
  "delivery_class": "production_candidate | baseline_prototype | blocked",
  "mode": "doc_planning_to_factory_runtime",
  "planning_root": "DOC/output/runs/<timestamp>/planning/frontend",
  "app_root": "ai-product-factory/generated/apps/<run-id>/<project-slug>",
  "validations_run": ["lint", "typecheck", "e2e:smoke", "test:a11y", "frontend-self-audit"],
  "audit_manifest": "<app-root>/.audit/frontend-hybrid-manifest.json"
}
```

## VALIDATION STEPS
- Confirm planning source is stable DOC root only.
- Confirm no planning file mutation occurred.
- Confirm route coverage from `site-inventory.md` and `frontend-execution-contract.json` is satisfied.
- Confirm required UX invariants are present.
- Confirm output remains under `ai-product-factory/generated/apps/<run-id>/<project-slug>/`.
- Confirm frontend self-audit file is emitted.

## FAILURE MODES
- `DOC_PLANNING_ROOT_MISSING` - planning root absent.
- `DOC_PLANNING_INCOMPLETE` - required planning files missing.
- `FRONTEND_EXECUTION_CONTRACT_MISSING` - deterministic execution contract absent or schema-incomplete.
- `FRONTEND_EXECUTION_CONTRACT_INCOMPLETE` - execution contract fails structural completeness checks.
- `SOURCE_PLANNING_ADVISORY` - source planning summary is not promoted for production execution; runtime may still build as `baseline_prototype`.
- `PLANNING_MUTATION_FORBIDDEN` - attempted planning write.
- `OUTPUT_ROOT_VIOLATION` - output outside runtime app root.
- `ROUTE_COVERAGE_FAILED` - emitted routes do not satisfy site inventory.
- `HYBRID_RUNTIME_BUILD_FAILED` - runtime build failed.
- `HYBRID_RUNTIME_VALIDATION_FAILED` - required checks failed.

```json
{ "status": "BLOCK", "reason": "<code>", "details": { "...": "..." } }
```

## INVARIANTS
- DOC planning stays source-of-truth.
- Factory runtime output stays under `ai-product-factory/generated/**`.
- Existing `frontend_factory_developer` remains unchanged.
- Small-scope deterministic execution beats broad rewrite.
