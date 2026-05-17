# Agent Entry Points (Copilot / VS Code)

This folder is the public agent surface for VS Code Copilot in this workspace. The picker is intentionally system-scoped:

- `[Foundation]` for Foundation-Core runtime work
- `[Template]` for screenshot-template, import, continuation, and deployment work
- `[DS]` for DS-native planning and execution
- `[Meta]` for audit and governance
- `[Legacy]` for hidden historical factory lanes

Canonical definitions live in `DOC/agents/`, except `DS_site_planner`, whose canonical source lives in `DS-Planning-Engine/agents/`. Public files stay flat in `.github/agents/` because VS Code documents discovery at this root but does not clearly guarantee recursive subfolder loading.

---

## Public systems

### Stable DOC workflow

`frontend_planner` -> `backend_planner` -> `frontend_developer` / `backend_developer`

Use this for the normal project workflow under `DOC/` and `web/`.

### Foundation + template workflow

`[Foundation] Planner` -> `[Foundation] Developer` -> `[Template] Import Attacher` -> `[Template] Post-Import Continuation` -> `[Template] Deployment Operator`

Use this when building or importing templates that attach to Foundation-Core.

If the template is screenshot-first rather than import-first, use:

`[Foundation] Planner` -> `[Foundation] Developer` -> `[Template] Screenshot Frontend Agent`

### DS workflow

`[DS] Site Planner` -> `[DS] Frontend Developer`

Use this when the output must be planned and assembled against the DS runtime.

### Meta workflow

`[Meta] System Architect`

Use this for AUDIT, DESIGN, FIX, SMOKE, DETERMINISM, DOCUMENT, and SPEC_DIFF across the agentic system itself.

---

## Recommended entrypoints

### Stable DOC system

- `frontend_planner`: locked frontend planning bundle
- `backend_planner`: backend, integrations, security, ops planning
- `frontend_developer`: frontend implementation in `web/`
- `backend_developer`: backend implementation outside `web/`

### Foundation + template system

- `[Foundation] Planner`: plan the reusable runtime and attach contract
- `[Foundation] Developer`: build `Foundation-Core/`
- `[Template] Screenshot Frontend Agent`: build a screenshot-first template directly into `Templates/`
- `[Template] Import Attacher`: normalize and attach an imported frontend runtime
- `[Template] Post-Import Continuation`: close remaining eligible merge gaps after import/attach
- `[Template] Deployment Operator`: prepare and verify Vercel deployment, env, and subdomain rollout

### DS system

- `[DS] Site Planner`: DS-native planning and gap analysis
- `[DS] Frontend Developer`: assemble a project-specific DS output clone

### Meta system

- `[Meta] System Architect`: factory-level system governance and audit

---

## Hidden legacy agents

These remain in the repo for historical benchmarking but are not normal workflow entrypoints and should stay hidden from the picker when possible.

- `[Legacy] Frontend Factory Planner`
- `[Legacy] Frontend Factory Developer`
- `frontend_factory_hybrid_developer`
- `ongoing_execution_orchestrator`

---

## Safe folder catalog

Human-readable grouping files live under `.github/agents/_catalog/`. They exist only for navigation and must not be used for agent discovery.

---

## Maintenance

- Keep mirrored agent files byte-aligned between their canonical source and `.github/agents/`.
- Update this README whenever a public agent is added, removed, renamed, hidden, or re-routed.
- After structural agent changes, refresh `DOC/agents/_index.md` and the `_catalog/` listings in the same change.
