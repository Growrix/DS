# Copilot Workspace Instructions

Keep the public `.github/agents` surface low-chaos and system-oriented.

## Source Of Truth
- Canonical planning and execution rules live in `DOC/`.
- `.github/agents` is the public workspace agent surface for VS Code Copilot.
- VS Code documents agent discovery at `.github/agents`, but does not clearly guarantee recursive folder loading. Keep public agent files flat for discovery safety.
- Reduce picker confusion with scoped agent names, `user-invocable: false` on legacy agents, and grouped README/catalog guidance.

## Operating Rules
- For screenshot-first frontend work use:
	- `phase1-site-replication` -> `phase2-frontend-planning` -> `phase2-frontend-completion` -> `phase3-frontend-polish`
	- use this as the default lane when the source of truth is screenshots or an existing site's visual shell
- Keep the root `.github/agents` folder as the authoritative daily picker surface.
	- treat imported bundles such as `Replicator/` as isolated reference packages unless you are explicitly working inside that subsystem
- For the stable DOC system use:
	- `frontend_planner` -> `backend_planner` -> `frontend_developer` / `backend_developer`
- Keep DOC planning brief-first.
	- until a dedicated screenshot-to-DOC bridge exists, do not treat the screenshot-first lane as a direct substitute for `frontend_planner` outputs consumed by `backend_planner`
- For the Foundation + template system use:
	- `foundation_planner` -> `foundation_developer` -> `template_import_attacher` -> `template_post_import_continuation` -> `template_deployment_operator`
	- use `Claude_Frontend_Agent` only for screenshot-first template creation directly into `Templates/` or for visual continuation work inside the Foundation/template lane
- Use the Foundation + template system after a frontend is already complete enough to import or attach.
- For the DS system use:
	- `DS_site_planner` -> `DS_Frontend_developer`
	- do not use the DS lane as the default answer for screenshot replication work
- Keep factory experiments and the legacy ongoing execution orchestrator hidden from the picker unless explicitly debugging that lane.
- Do not invent integrations, routes, env vars, or schema fields that are absent from DOC knowledge files.
- Keep Frontend-Master_DS as generic canonical DS; do not write project-specific routes/pages/presets into canonical DS runtime paths.
- For DS execution, implement and run project-specific changes only inside DOC/output/runs/<timestamp>/codegen/<project-slug>/ clones.

## Visibility Rules
- Prefer agents whose picker names are prefixed by system: `[Foundation]`, `[Template]`, `[DS]`, and `[Meta]`.
- Treat `[Legacy]` agents as hidden workflow artifacts, not normal entrypoints.

## Artifact Output
Write generated artifacts under DOC/output/runs/<timestamp>/ with subfolders:
- planning/
- specs/
- reports/
- codegen/
