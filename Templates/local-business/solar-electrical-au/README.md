# Solar Electrical AU Imported Template

## Purpose
- preserve an already-built frontend runtime as the implementation baseline
- normalize it into `Templates/local-business/solar-electrical-au/`
- keep standalone fallback mode bootable
- expose Foundation attach status through `/api/template-attach-status`

## Import source
- `Claude Frontend/solar-electrical-au`

## Key files
- `template.manifest.json`
- `.import/import-report.md`
- `.audit/frontend-self-audit.md`
- `src/lib/foundation-runtime.ts`
- `src/app/api/template-attach-status/route.ts`
- `src/app/api/template/**`

## Current state
- visible UI baseline preserved from the imported runtime
- required footer attribution normalized to Growrix OS
- Foundation merge facades now exist for session, content, forms, and media through `/api/template/**`
- Global shell content and contact form are wired to the Foundation merge layer while standalone fallback remains runnable
- Foundation attachment remains optional through `FOUNDATION_BASE_URL`
- follow-up content and legal-link completion remains a continuation step