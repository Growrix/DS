# Dev Server Checklist - Solar Electrical AU Imported Template

## Runtime root
- Use `Templates/local-business/solar-electrical-au/`.
- Do not run `npm run dev` from a parent workspace root.

## Install
- Run `npm install`.

## Environment
- Copy `ENV.example` to `.env.local` for Foundation attachment testing.
- Set `FOUNDATION_BASE_URL` to the running Foundation Core URL.

## Startup
- Run `npm run dev` from this runtime root.
- Allow Next.js to auto-select the next available port when `3000` or `3001` is occupied.
- Post-import mandatory check: after normalization, build, and attach wiring, run `npm run dev` and verify live routes.

## Smoke routes
- `/`
- `/about`
- `/projects`
- `/contact`
- `/api/template-attach-status`
