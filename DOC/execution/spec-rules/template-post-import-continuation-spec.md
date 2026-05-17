# Template Post-Import Continuation Spec

## Purpose
Define the governed lane for the work that follows `template_import_attacher`: audit unresolved merge gaps, close eligible frontend/backend wiring gaps inside the normalized template root, and leave the template ready for deployment work.

## Required inputs
- Existing normalized template root under `Templates/<category>/<template-slug>/`
- `.import/import-report.md`
- `.audit/frontend-self-audit.md`
- `template.manifest.json`
- Optional `frontend-attach-contract.json`

## Required outputs
- Refreshed template runtime under the same root
- `.audit/post-import-gap-closure.md`
- Refreshed `.audit/frontend-self-audit.md`

## Gap classes
Every unresolved item discovered during continuation must be classified as exactly one of:
- `wired`
- `missing_wiring`
- `missing_ui_surface`
- `client_optional`
- `missing_foundation_contract`

## Execution rules
- Preserve the imported public UI baseline; continuation closes wiring gaps rather than redesigning the product.
- Wire enabled contract modules only through template-local same-origin facades.
- Close eligible gaps where the imported runtime already has the corresponding surface or clearly implies it.
- Do not add new auth, upload, billing, or analytics UI unless the surface already exists or the user explicitly requests it.
- Standalone fallback mode must remain runnable for every wired surface.
- Every remaining unresolved item must appear in the gap-closure report with its classification and recommended next owner.

## Validation
- Lint, typecheck, build, and live smoke must pass from the normalized template root.
- Both attached mode and fallback mode must be proven for the wired surfaces.
- At least one real wired contract surface beyond attach-status must be validated when such a surface exists in the imported runtime.

## Failure modes
- `POST_IMPORT_REPORT_MISSING`
- `POST_IMPORT_GAP_CLASSIFICATION_FAILED`
- `POST_IMPORT_ELIGIBLE_GAP_LEFT_OPEN`
- `POST_IMPORT_VALIDATION_FAILED`