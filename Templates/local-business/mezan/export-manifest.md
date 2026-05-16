# Export Manifest - Mezan Imported Template

## Export root
- `Templates/local-business/mezan/`

## Included runtime artifacts
- imported Next.js runtime normalized from `Claude Frontend/mezan-nextjs/mezan`
- runtime docs: `README.md`, `RUN.md`, `ENV.example`, `dev-server-checklist.md`
- import evidence: `.import/import-report.md`
- audit record: `.audit/frontend-self-audit.md`
- attach manifest: `template.manifest.json`

## Modes
- Standalone fallback mode works without `Foundation-Core`.
- Attached mode uses `FOUNDATION_BASE_URL` and the contract at `../../../Foundation-Core/docs/contracts/frontend-attach-contract.json`.