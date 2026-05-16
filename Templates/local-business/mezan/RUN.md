# Running Mezan Imported Template

## Runtime root
- Run all commands from `Templates/local-business/mezan/`.

## Commands
- `npm install`
- `npm run dev`
- `npm run dev:linked`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run verify`

## Local modes
- Standalone fallback: run `npm run dev`.
- Attached mode: start `Foundation-Core` on `http://localhost:3000`, copy `ENV.example` to `.env.local`, then run `npm run dev:linked`.

## Attach check
- Open `/api/template-attach-status` to confirm the template reports either `attached` or `mock-fallback`.