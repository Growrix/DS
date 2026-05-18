# Agent Entry Points (Copilot / VS Code)

This folder is the public agent surface for VS Code Copilot in this workspace. The picker is intentionally system-scoped:

- `Phase 1-3` for screenshot-first frontend replication, completion, and polish
- `[Foundation]` for Foundation-Core runtime work
- `[Template]` for screenshot-template, import, continuation, and deployment work
- `[DS]` for DS-native planning and execution
- `[Meta]` for audit and governance
- `[Legacy]` for hidden historical factory lanes

Canonical definitions live in `DOC/agents/`, except `DS_site_planner`, whose canonical source lives in `DS-Planning-Engine/agents/`. Public files stay flat in `.github/agents/` because VS Code documents discovery at this root but does not clearly guarantee recursive subfolder loading.

---

## Public systems

### Screenshot-First Frontend workflow

`Phase 1 Site Replication Agent` -> `Phase 2 Frontend Planning Agent` -> `Phase 2 Frontend Completion Agent` -> `Phase 3 Frontend Polish Agent`

Use this as the default frontend lane when the source of truth is screenshot packs, reference captures, or an existing site's visual shell. This lane owns visual replication, rebrand, missing route/state completion, and final presentation polish for projects built under `FRONTEND DEV/`.

### Stable DOC workflow

`frontend_planner` -> `backend_planner` -> `frontend_developer` / `backend_developer`

Use this for the normal brief-first project workflow under `DOC/` and `web/`.

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

### Screenshot-first frontend system

- `Phase 1 Site Replication Agent`: rebuild a site from screenshots into `FRONTEND DEV/<project>/`
- `Phase 2 Frontend Planning Agent`: audit the replicated shell and produce the route/state/rebrand backlog
- `Phase 2 Frontend Completion Agent`: implement the missing routes, flows, and owned branding without restarting the replica
- `Phase 3 Frontend Polish Agent`: finish motion, accessibility, responsive tuning, and presentation cleanup after phase-2 truthfulness is complete

### Foundation + template system

- `[Foundation] Planner`: plan the reusable runtime and attach contract
- `[Foundation] Developer`: build `Foundation-Core/`
- `[Template] Screenshot Frontend Agent`: build a screenshot-first template directly into `Templates/` when you are intentionally entering the Foundation/template lane
- `[Template] Import Attacher`: normalize and attach an imported frontend runtime
- `[Template] Post-Import Continuation`: close remaining eligible merge gaps after import/attach
- `[Template] Deployment Operator`: prepare and verify Vercel deployment, env, and subdomain rollout

### DS system

- `[DS] Site Planner`: DS-native planning and gap analysis
- `[DS] Frontend Developer`: assemble a project-specific DS output clone

### Meta system

- `[Meta] System Architect`: factory-level system governance and audit

---

## Current boundaries

- The screenshot-first frontend lane is the default path for screenshot-driven visual work.
- `frontend_planner` remains the canonical producer for the frontend planning bundle consumed by `backend_planner`.
- A dedicated screenshot-to-DOC bridge is not yet formalized, so do not assume phase 1-3 outputs can be fed directly into `backend_planner` without a translation step.
- `Replicator/` remains an imported isolated bundle and reference package; the root `.github/agents` folder is the authoritative daily picker surface for this repo.

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
