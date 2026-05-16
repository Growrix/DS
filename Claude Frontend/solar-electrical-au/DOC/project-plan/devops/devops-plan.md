# DevOps Plan

## Environment Model

- Local for development and schema iteration
- Staging for integrated CMS, DB, storage, email, and analytics validation
- Production for live traffic

## Deployment Pipeline

1. Run lint, typecheck, unit tests, and content-schema validation.
2. Build preview deployment.
3. Run smoke tests for public routes and form flows.
4. Promote to staging.
5. Run staging checks for publish, inquiry, upload, and notification flows.
6. Promote to production with monitoring active.

## Observability Stack

- Sentry for frontend and backend errors
- Structured application logs for form and publish workflows
- Health checks or uptime monitoring for critical endpoints
- Metrics dashboard for conversion flow health, webhook success, and email delivery success

## Alerting

- Elevated 5xx rate on public submission endpoints
- Repeated email send failures
- Failed Sanity webhook or revalidation loops
- Unexpected drop in form conversion success rate
- Storage upload authorization failures

## Rollout Strategy

- Launch the marketing shell and CMS first.
- Add product families and insights once content operations are stable.
- Release supplier and partnership flows after security and attachment handling are verified.
- Roll out search and enhanced analytics after baseline content volume exists.

## Rollback Strategy

- Vercel deployment rollback for frontend regressions
- Feature-flag or env-toggle disablement for integrations
- Compensating or rollback migration for schema defects
- Temporary fallback to direct inbox handling if inquiry persistence degrades

## Backup And Recovery

- Verify Supabase automated backups
- Document Sanity dataset export cadence
- Keep recovery runbook for DB restore, deployment rollback, and provider key rotation

## Release Gate Requirements

- No production deploy without staging validation of publish and inquiry flows
- No launch without Sentry and alert destinations configured
- No schema change without migration review and rollback notes