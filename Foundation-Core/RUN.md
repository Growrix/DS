# Foundation Core Runbook

## Runtime root
- Run all install, dev, build, test, and verify commands from `Foundation-Core/`.

## Commands
- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run verify`

## Primary local checks
- Open `/` for the runtime dashboard.
- Open `/api/health` for adapter readiness.
- Open `/api/auth/session` for the normalized session envelope.
- Post to `/api/forms/contact/submit` to validate form intake.

## Delivery note
- This runtime is API-ready out of the box. Add real adapter secrets in `.env.local` to switch from safe fallbacks to configured integrations.