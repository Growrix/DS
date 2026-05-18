# Dev Server Checklist - Mezan Imported Template

## Runtime root
- Use `Templates/local-business/mezan/`.
- Do not run `npm run dev` or `npm run dev:linked` from `F:\PROJECTS\DS` or any parent workspace root.

## Install
- Run `npm install`.

## Environment
- Copy `ENV.example` to `.env.local` when testing Foundation attachment.
- Set `FOUNDATION_BASE_URL` to the running `Foundation-Core` instance.

## Startup modes
- Fallback mode: `npm run dev`
- Attached mode: start `Foundation-Core` first, then run `npm run dev:linked`
- If `3001` is busy, use `npx next dev --port 3002` for local smoke testing or clear the conflicting process before retrying `npm run dev:linked`.
- Post-build/import mandatory check: run `npm run dev` from this runtime root and confirm the live app responds before handoff.

## Smoke routes
- `/`
- `/about`
- `/services`
- `/shop`
- `/shop/pipe-wrench`
- `/blog`
- `/contact`
- `/api/template-attach-status`