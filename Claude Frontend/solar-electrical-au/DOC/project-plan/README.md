# Project Plan

This folder is the canonical project-specific planning layer for the Commodity Trading Company Website. It translates the strategy in `DOC/master-plan/plan.md` into implementation-ready documentation for frontend, backend, data, CMS, security, operations, analytics, search, and QA.

## Active Canonical Artifacts

- Root AI entrypoint: `DOC/project-plan/ai-context.yaml`
- Root planning artifact: `DOC/project-plan/commodity-trading-website-e2e-plan.md`
- Task tracker: `DOC/project-plan/tasks/tasks.md`

## Planning Mode

- Mode: Fresh planning baseline
- Reason: The repository now contains an in-progress Next.js frontend implementation aligned to the planning layer, while backend, CMS, and integration work remain to be executed.
- Scope: Public marketing site, CMS-backed content operations, inquiry and supplier intake, operator workflows, analytics, search, security, and release governance.

## Folder Map

- `shared-contracts/`: system blueprint, route contract, domain invariants, lifecycle rules
- `frontend/`: master frontend architecture plus page-by-page section planning, component governance, accessibility, and UX states
- `backend/`: server-side workflows, integrations, upload processing, email dispatch, and operational services
- `api-and-data/`: API contracts, persistence model, event contracts, data retention, and migration rules
- `admin-dashboard/`: internal operator surface decisions and deferred bespoke admin strategy
- `cms-content-operations/`: Sanity content model, editorial workflow, preview, revalidation, and governance
- `supabase/`: Postgres schema ownership, storage, auth posture, and deployment model
- `security/`: privacy, access control, abuse protection, auditability, and incident posture
- `devops/`: environments, CI/CD, monitoring, rollout, rollback, and recovery
- `analytics/`: event taxonomy, funnels, and reporting plan
- `search/`: site search, SEO discovery surfaces, and indexing plan
- `integrations/`: Sanity, Supabase, Resend, analytics, error monitoring, and deferred providers
- `qa/`: test layers, release gates, and evidence requirements
- `tasks/`: implementation sequencing and tracked milestones

## Read Order

1. `DOC/project-plan/ai-context.yaml`
2. `DOC/project-plan/commodity-trading-website-e2e-plan.md`
3. `DOC/project-plan/shared-contracts/README.md`
4. `DOC/project-plan/cms-content-operations/README.md`
5. `DOC/project-plan/frontend/README.md`
6. `DOC/project-plan/backend/README.md`
7. `DOC/project-plan/api-and-data/README.md`
8. `DOC/project-plan/security/README.md`
9. `DOC/project-plan/devops/README.md`
10. `DOC/project-plan/qa/README.md`
11. `DOC/project-plan/tasks/tasks.md`

## Current Scope Decisions

- Next.js, React, and TypeScript are required now.
- Sanity CMS is required now for public content operations.
- Supabase Postgres and Storage are required now for inquiry records, supplier documents, and operational auditability.
- Prisma is intentionally excluded for this phase to avoid dual-schema ownership.
- No custom customer portal or transaction-heavy dashboard is included in phase 1.
- A custom internal admin dashboard is deferred; Sanity Studio plus lightweight internal workflows cover the first release.