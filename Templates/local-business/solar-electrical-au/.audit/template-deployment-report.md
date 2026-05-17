# Template Deployment Report - Solar Electrical AU

- Date: 2026-05-17
- Template root: `Templates/local-business/solar-electrical-au`
- Platform: `vercel`
- Status: `failed`

## Summary
Pre-deploy validation completed from the normalized template root. Local runtime verification is green, but deployment cannot proceed yet due to unmet lane-gate and external setup prerequisites.

## Validations run
- deploy-readiness: `failed` (gating artifacts incomplete)
- preview-build: `passed` (local `npm run verify` build chain passed)
- production-build: `passed` (local `npm run verify` build chain passed)
- post-deploy-smoke: `not-run` (no live deployment URL yet)

## Local readiness evidence
- Command run from template root: `npm run verify`
- Result: passed
  - lint: passed
  - typecheck: passed
  - build: passed

## Deploy contract assumptions
- Base domain assumption: `growrixos.com`
- Subdomain assumption: `solar-electrical-au`
- Production URL assumption: `https://solar-electrical-au.growrixos.com`
- Preview URL assumption: Vercel default preview URL (project-scoped) until explicit preview alias is configured

## Environment contract
- Required server env var: `FOUNDATION_BASE_URL`
- Scope: server-only (template-local API facades)
- Required in Vercel environments:
  - Preview
  - Production

## Prerequisite audit

### Internal lane-gate blockers
- `TEMPLATE_DEPLOY_CHECKLIST_FAILED`
  - `.audit/post-import-gap-closure.md` is missing in this template root.
  - Mandatory post-import wiring bucket completion is not yet explicitly attested in deployment-facing evidence.

### External setup blockers
- `TEMPLATE_DEPLOY_CHECKLIST_FAILED`
  - `.vercel/project.json` is missing (project linkage not established in this runtime root).
- `TEMPLATE_DEPLOY_DOMAIN_CONTROL_MISSING`
  - Domain ownership and DNS control for `growrixos.com` / `solar-electrical-au.growrixos.com` are not verified in this report.

## Operator commands to unblock
Run from `Templates/local-business/solar-electrical-au/`:

1. `vercel link`
2. `vercel env add FOUNDATION_BASE_URL preview`
3. `vercel env add FOUNDATION_BASE_URL production`
4. `vercel` (preview deploy)
5. `vercel --prod` (production deploy)
6. Attach/alias domain after DNS control is confirmed

## Planned post-deploy smoke checks
- `GET /`
- `GET /about`
- `GET /projects`
- `GET /contact`
- `GET /api/template-attach-status`
- `GET /api/template/session`
- `GET /api/template/content/site-config`
- `POST /api/template/forms/quote/submit`

## Notes
- Vercel CLI is installed and authenticated (`vercel whoami` succeeded).
- This lane intentionally does not add new upload/auth UI or alter Foundation-Core unless a real missing contract requirement is confirmed.