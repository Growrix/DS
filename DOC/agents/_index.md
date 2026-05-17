# Agent Registry

This is the canonical registry for the workspace agent systems. It is used by humans for navigation and by system-level governance work for dependency, mirror, and workflow checks.

---

## Public systems at a glance

### Stable DOC workflow

`frontend_planner` -> `backend_planner` -> `frontend_developer` / `backend_developer`

This remains the default general-purpose workflow for `DOC/` planning and `web/` implementation.

### Foundation + template workflow

`foundation_planner` -> `foundation_developer` -> `template_import_attacher` -> `template_post_import_continuation` -> `template_deployment_operator`

Use this when the reusable runtime lives in `Foundation-Core/` and the public site lives in `Templates/<category>/<template-slug>/`.

For screenshot-first template creation, use:

`foundation_planner` -> `foundation_developer` -> `Claude_Frontend_Agent`

### DS workflow

`DS_site_planner` -> `DS_Frontend_developer`

Use this when the project must be planned and assembled against `Frontend-Master_DS/` and `DS-Planning-Engine/`.

### Meta workflow

`system_architect`

Use this for AUDIT, DESIGN, FIX, SMOKE, DETERMINISM, DOCUMENT, and SPEC_DIFF across the agentic system itself.

---

## Public registry

| Agent | Version | System | Phase | Canonical source | Outputs |
|---|---|---|---|---|---|
| `frontend_planner` | 3 | Stable DOC | Planning | `DOC/agents/frontend_planner.agent.md` | frontend planning bundle under `DOC/output/runs/<timestamp>/planning/frontend/` |
| `backend_planner` | 2 | Stable DOC | Planning | `DOC/agents/backend_planner.agent.md` | backend planning bundle under `DOC/output/runs/<timestamp>/planning/backend/` |
| `frontend_developer` | 1 | Stable DOC | Execution | `DOC/agents/frontend_developer.agent.md` | frontend runtime under `web/` |
| `backend_developer` | 1 | Stable DOC | Execution | `DOC/agents/backend_developer.agent.md` | backend/runtime output outside `web/` |
| `system_architect` | 1 | Meta | Governance | `DOC/agents/system_architect.agent.md` | reports under `DOC/output/runs/<timestamp>/reports/` |
| `foundation_planner` | 1 | Foundation + template | Planning | `DOC/agents/foundation_planner.agent.md` | Foundation planning bundle under `DOC/output/runs/<timestamp>/planning/foundation-core/` |
| `foundation_developer` | 1 | Foundation + template | Execution | `DOC/agents/foundation_developer.agent.md` | `Foundation-Core/` runtime |
| `Claude_Frontend_Agent` | 1 | Foundation + template | Execution | `DOC/agents/Claude_Frontend_Agent.agent.md` | screenshot-first or continued template under `Templates/<category>/<template-slug>/` |
| `template_import_attacher` | 1 | Foundation + template | Execution | `DOC/agents/template_import_attacher.agent.md` | normalized import root under `Templates/<category>/<template-slug>/` |
| `template_post_import_continuation` | 1 | Foundation + template | Execution | `DOC/agents/template_post_import_continuation.agent.md` | gap-closure updates and refreshed audits under the same template root |
| `template_deployment_operator` | 1 | Foundation + template | Deployment | `DOC/agents/template_deployment_operator.agent.md` | deployment report and Vercel rollout evidence under the same template root |
| `DS_site_planner` | 1 | DS | Planning | `DS-Planning-Engine/agents/DS_site_planner.agent.md` | DS-native plan under `DS-Planning-Engine/output/runs/<ts>-<slug>/plan/` |
| `DS_Frontend_developer` | 1 | DS | Execution | `DOC/agents/DS_Frontend_developer.agent.md` | project-specific DS clone under `DOC/output/runs/<timestamp>/codegen/<project-slug>/` |

---

## Hidden legacy agents

These agents remain in the repo for benchmarking or historical compatibility, but they are not normal user-facing entrypoints.

| Agent | Canonical source | Status |
|---|---|---|
| `frontend_factory_planner` | `DOC/agents/frontend_factory_planner.agent.md` | hidden legacy |
| `frontend_factory_developer` | `DOC/agents/frontend_factory_developer.agent.md` | hidden legacy |
| `frontend_factory_hybrid_developer` | `DOC/agents/frontend_factory_hybrid_developer.agent.md` | legacy experimental reference |
| `ongoing_execution_orchestrator` | `.github/agents/ongoing_execution_orchestrator.agent.md` | hidden legacy |

---

## Supporting execution rules added for the template lane

| Artifact | Purpose |
|---|---|
| `DOC/execution/spec-rules/template-post-import-continuation-spec.md` | governs the continuation pass after import/attach |
| `DOC/execution/spec-rules/template-vercel-deployment-spec.md` | governs Vercel deployment readiness and rollout |
| `DOC/validation/checklists/template-post-import-gap-closure-checklist.md` | validates continuation completeness |
| `DOC/validation/checklists/template-vercel-deployment-checklist.md` | validates deployment readiness |

---

## Mirror discipline

Public agents mirrored into `.github/agents/` must stay byte-aligned with their canonical source.

Mirrors sourced from `DOC/agents/`:

- `frontend_planner`
- `backend_planner`
- `frontend_developer`
- `backend_developer`
- `system_architect`
- `foundation_planner`
- `foundation_developer`
- `Claude_Frontend_Agent`
- `template_import_attacher`
- `template_post_import_continuation`
- `template_deployment_operator`
- `DS_Frontend_developer`
- `frontend_factory_planner`
- `frontend_factory_developer`

Mirror sourced from `DS-Planning-Engine/agents/`:

- `DS_site_planner`

Legacy note:

- `frontend_factory_hybrid_developer` currently remains a historical special case and is not part of the recommended public workflow.

---

## Maintenance rules

1. Add new public agents to this registry, `.github/agents/README.md`, and the safe `_catalog/` files in the same change.
2. Keep public agent files flat under `.github/agents/` unless recursive discovery is explicitly verified for this workspace configuration.
3. Update handoff chains here whenever an agent is inserted into or removed from a system lane.
4. Hide legacy or experimental public agents with `user-invocable: false` whenever the platform supports it.
