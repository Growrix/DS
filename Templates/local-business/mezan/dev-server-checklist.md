# Dev Server Checklist - Mezan Imported Template

## Runtime root
- Use `Templates/local-business/mezan/`.

## Install
- Run `npm install`.

## Environment
- Copy `ENV.example` to `.env.local` when testing Foundation attachment.
- Set `FOUNDATION_BASE_URL` to the running `Foundation-Core` instance.

## Startup modes
- Fallback mode: `npm run dev`
- Attached mode: start `Foundation-Core` first, then run `npm run dev:linked`

## Smoke routes
- `/`
- `/about`
- `/services`
- `/shop`
- `/shop/pipe-wrench`
- `/blog`
- `/contact`
- `/api/template-attach-status`