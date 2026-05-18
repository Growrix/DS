# Template Import Attach Execution Spec

## Purpose
Define the governed lane for importing an already-built frontend runtime, normalizing it into the `Templates/` library, and fully merging it with Foundation Core through the existing attach contract without rebuilding the visible UI from scratch.

## Source Of Truth
- The imported frontend runtime is the source of truth for the visible implementation baseline.
- `frontend-attach-contract.json` remains the only allowed integration boundary with Foundation Core.
- The import lane must preserve the imported runtime's public UI unless the user explicitly requests post-import enhancement or completion work.

## Required Inputs
- `source_runtime_root`: extracted local path for the imported frontend runtime.
- `import_manifest`: source name, category, template slug, and any known nested app root.
- Optional `foundation_attach_contract_path`.
- Optional `reference_pack` when the imported runtime also needs screenshot-driven parity validation.

## Required Output Root
- `Templates/<category>/<template-slug>/`

## Required Output Artifacts
- `README.md`
- `RUN.md`
- `ENV.example`
- `dev-server-checklist.md`
- `export-manifest.md`
- `template.manifest.json`
- `reference-inventory.md`
- `copyright-compliance.md`
- `.audit/frontend-self-audit.md`
- `.import/import-report.md`

## Execution Rules
- Import the frontend into a fresh runtime root under `Templates/`; do not mutate the source import in place.
- Strip non-portable baggage from the imported runtime: `.git/`, `.next/`, `node_modules/`, local virtual environments, editor caches, and machine-local logs.
- Preserve the imported visible UI by default. Cosmetic refactors are forbidden during import normalization.
- Normalize scripts, env docs, and runtime metadata so the imported copy boots independently from its own root.
- When Foundation Core is available, attach only through `frontend-attach-contract.json`.
- Generate same-origin template-local facades for enabled auth, content, forms, media, preview, and health modules.
- Wire existing imported frontend surfaces to those facades when corresponding UI already exists, especially navigation/site-config, forms, uploads, and session-aware routes.
- Keep fallback behavior defined for every generated facade so standalone mode remains executable.
- When a repo-default footer attribution is required and no brief override exists, use `Built and Maintained by Growrix OS` linking to `https://www.growrixos.com`.
- Do not couple the imported runtime to `Frontend-Master_DS/` or `DS-Planning-Engine/`.
- Do not silently replace imported routes with generic starter routes.
- Record every file/folder class intentionally excluded during import in `.import/import-report.md`.

## Post-Import Continuation
- Missing pages, copyright cleanup, attribution, content replacement, and enhancement work happen after import normalization.
- The continuation agent may work against the imported template root only after the import report exists and the template boots.

## Validation
- The normalized template must pass lint, typecheck, and build from its own runtime root.
- After import, attach, or merge work, `npm run dev` must be started from the normalized runtime root using the documented checklist, and live smoke probes must pass before the lane can be declared complete.
- If Foundation attachment is enabled, attached mode must be proven live and mock fallback must remain runnable.
- Validation must include at least one real wired backend surface when that surface exists in the imported UI, not only an attach-status route.
- The import report must record source root, target root, stripped artifacts, attach mode, and any unresolved gaps.

## Failure Modes
- `IMPORT_SOURCE_ROOT_MISSING`
- `IMPORT_SOURCE_NOT_NEXT_RUNTIME`
- `IMPORT_TARGET_ALREADY_EXISTS`
- `IMPORT_PORTABILITY_NORMALIZATION_FAILED`
- `IMPORT_ATTACH_CONTRACT_INVALID`
- `IMPORT_RUNTIME_BOOT_FAILED`
- `IMPORT_REPORT_MISSING`