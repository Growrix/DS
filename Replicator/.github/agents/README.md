# Agent Lanes

This root now exposes two separate workflow lanes.

## Active Frontend Lane
These are the existing agents that drive the current frontend build process and remain unchanged:
- `phase1-site-replication.agent.md`
- `phase2-frontend-planning.agent.md`
- `phase2-frontend-completion.agent.md`
- `phase3-frontend-polish.agent.md`

Use this lane for screenshot replication, frontend completion, and UI polish in the existing site projects.

## Backend & Deploy Lane
These are additive agents for the imported backend/deploy workflow. They operate against the isolated bundle under `Backend & Deploy/` and do not replace the existing frontend lane:
- `phase4-foundation-planning.agent.md`
- `phase4-foundation-development.agent.md`
- `phase5-template-import-attach.agent.md`
- `phase6-post-import-continuation.agent.md`
- `phase7-template-deployment.agent.md`

Use this lane only after a frontend is already complete enough to be imported, attached, continued, and prepared for deployment.

## Safety Rules
- Keep phase1-3 as the default frontend workflow.
- Treat phase4-7 as an opt-in continuation lane.
- Keep backend/deploy artifacts under `Backend & Deploy/` unless the user explicitly asks to promote them into the main root.
- Do not mutate source frontend projects in place during phase5 import/attach work.