# Templates Library

All screenshot-driven template outputs live in this directory.

## Path Convention
- `Templates/<category>/<template-slug>/`

## Rules
- Each template must be a standalone runtime root.
- Each template must include its own `RUN.md`, `ENV.example`, `dev-server-checklist.md`, and `export-manifest.md`.
- Runtime dependency on `Frontend-Master_DS/` is forbidden for this lane.

## Current starter
- `Templates/foundation-attached-starter/` is the historical minimal starter for the attach-contract lane.
- Full import-attach work now requires template-local facades and actual frontend/backend merge wiring as defined by the template import attacher agent and execution specs.