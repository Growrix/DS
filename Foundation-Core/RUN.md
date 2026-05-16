# Foundation Core Runbook

## Runtime root
- Run all install, dev, build, test, and verify commands from `Foundation-Core/`.

## Commands
- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run test:integration`
- `npm run build`
- `npm run smoke:runtime`
- `npm run verify`

## Primary local checks
- Open `/` for the runtime dashboard.
- Open `/api/health` for adapter readiness.
- Open `/api/auth/session` for the normalized session envelope.
- Post to `/api/forms/contact/submit` to validate form intake.

## E2E proof
- `npm run test` now covers both unit and route-level integration tests.
- `npm run smoke:runtime` boots a managed production server from `Foundation-Core/` and probes `/`, `/api/health`, `/api/auth/session`, `/api/content/pages/home`, `/api/content/site-config`, `/api/forms/contact/submit`, `/api/media/upload`, and `/api/preview/enable`.
- `npm run verify` now includes the live runtime smoke step after build.

## Delivery note
- This runtime is API-ready out of the box. Add real adapter secrets in `.env.local` to switch from safe fallbacks to configured integrations.