# Import Report - Solar Electrical AU

## Source
- source_runtime_root: `Claude Frontend/solar-electrical-au`
- target_output_root: `Templates/local-business/solar-electrical-au`
- import_mode: `import_attach`

## Stripped artifacts
- `.git/`
- `.github/`
- `.claude/`
- `.next/`
- `node_modules/`
- `.venv/`
- `DOC/`
- `.env.local`
- `*.log`

## Normalization added
- Foundation attach status route at `/api/template-attach-status`
- generic runtime merge helpers at `src/lib/foundation-runtime.ts`
- template-local facades at `/api/template/session`, `/api/template/content/*`, `/api/template/forms/*`, and `/api/template/media/upload`
- runtime docs and export docs
- `template.manifest.json`
- `.audit/frontend-self-audit.md`
- required footer attribution to Growrix OS

## Unresolved gaps
- visual parity has not been screenshot-audited against the source package
- placeholder legal links still point to `#` anchors and need client-specific final URLs
- imported page sections still use local template content for most visual blocks; only shell config and forms are actively consuming the merge layer today
- no upload UI or auth-guarded UI exists in the imported runtime yet, so those facades are generated but not visually exercised by the imported pages

## Validation status
- lint: passed (`npm run lint`)
- typecheck: passed (`npm run typecheck`)
- build: passed (`npm run build`)
- smoke: passed (`npm run dev` from `Templates/local-business/solar-electrical-au/`; `/`, `/about`, `/projects`, `/contact`, and `/api/template-attach-status` returned HTTP 200 on the active local port)
- attached-smoke: passed (`FOUNDATION_BASE_URL=http://127.0.0.1:3310`; `/api/template-attach-status` returned `attached`, `/api/template/content/site-config` returned Foundation content, and `/api/template/forms/quote/submit` proxied successfully)
- fallback-smoke: passed (without `FOUNDATION_BASE_URL`; `/api/template-attach-status` returned `mock-fallback`, and `/api/template/forms/quote/submit` returned a local fallback acceptance envelope)
