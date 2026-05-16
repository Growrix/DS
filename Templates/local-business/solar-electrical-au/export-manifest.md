# Export Manifest - Solar Electrical AU

## Runtime root
- `Templates/local-business/solar-electrical-au/`

## Included artifacts
- imported runtime baseline preserved under `src/`
- Foundation attach contract endpoint at `/api/template-attach-status`
- template metadata in `template.manifest.json`
- import and audit reports under `.import/` and `.audit/`
- operator docs: `RUN.md`, `ENV.example`, `dev-server-checklist.md`

## Post-export bootstrap
1. Enter `Templates/local-business/solar-electrical-au/`.
2. Run `npm install`.
3. Copy `ENV.example` to `.env.local` when testing attached mode.
4. Run `npm run dev`.
5. Probe `/`, `/about`, `/projects`, `/contact`, and `/api/template-attach-status`.
6. Run `npm run verify`.

## Portability status
- source-local artifacts were stripped during import
- runtime remains bootable from its own root in fallback mode
- Foundation integration remains optional via `FOUNDATION_BASE_URL`
