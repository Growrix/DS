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
- `src/app/api/template-attach-status/route.ts`
- `src/lib/foundation-attach.ts`

## Current state
- visible UI baseline preserved from the imported runtime
- required footer attribution normalized to Growrix OS
- Foundation attachment remains optional through `FOUNDATION_BASE_URL`
- follow-up content and legal-link completion remains a continuation step