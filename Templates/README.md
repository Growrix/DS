# Templates Library

All screenshot-driven template outputs live in this directory.

## Path Convention
- `Templates/<category>/<template-slug>/`

## Rules
- Each template must be a standalone runtime root.
- Each template must include its own `RUN.md`, `ENV.example`, `dev-server-checklist.md`, and `export-manifest.md`.
- Runtime dependency on `Frontend-Master_DS/` is forbidden for this lane.

## Current starter
- `Templates/foundation-attached-starter/` is the executable reference starter for the new attach-contract lane.