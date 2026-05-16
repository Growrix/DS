# Export Manifest

## Required bundle
- `Foundation-Core/`

## Runtime root contract
- The exported runtime root is `Foundation-Core/`.
- Run `npm install`, `npm run dev`, `npm run build`, `npm run smoke:runtime`, and `npm run verify` from that directory.

## Post-export bootstrap
1. Enter `Foundation-Core/`.
2. Run `npm install`.
3. Copy `ENV.example` to `.env.local` and fill in secrets.
4. Run `npm run dev`.
5. Probe `/`, `/api/health`, and `/api/content/pages/home`.
6. Run `npm run build && npm run smoke:runtime`.

## Validation criteria
- The dev server boots from the exported location.
- The runtime dashboard loads.
- The health API responds.
- The managed runtime smoke harness passes.
- No repo-relative imports are required.