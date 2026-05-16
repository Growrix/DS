# Running Solar Electrical AU Imported Template

## Runtime root
- Run all commands from `Templates/local-business/solar-electrical-au/`.

## Commands
- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run verify`

## Local modes
- Standalone fallback mode: run `npm run dev`.
- Attached mode: start `Foundation-Core` and set `FOUNDATION_BASE_URL` in `.env.local` from `ENV.example`, then run `npm run dev`.
- `npm run dev` uses Next.js automatic port fallback when default ports are occupied.

## Attach check
- Open `/api/template-attach-status` and confirm the route reports either `attached` or `mock-fallback`.
