# Foundation Self Audit

## Status
- `lint`: passed
- `typecheck`: passed
- `test`: passed
- `build`: passed
- `smoke:runtime`: passed

## Runtime evidence
- Foundation dashboard route exists at `/`
- Health route exists at `/api/health`
- Session route exists at `/api/auth/session`
- Content page route exists at `/api/content/pages/[slug]`
- Lead intake route exists at `/api/forms/[formId]/submit`
- Media upload route exists at `/api/media/upload`
- Preview route exists at `/api/preview/enable`
- Integration route coverage exists at `tests/integration/api-routes.integration.test.ts`
- Managed live smoke harness exists at `scripts/runtime-smoke.mjs`

## Notes
- Optional adapters remain safe fallbacks until env values are supplied.
- Export portability docs are present: `RUN.md`, `ENV.example`, `dev-server-checklist.md`, `export-manifest.md`.
- `npm run verify` now includes route integration coverage and a managed live runtime smoke pass.
- Attached-mode smoke with a real template root and `FOUNDATION_BASE_URL` is still the next release-readiness gap.