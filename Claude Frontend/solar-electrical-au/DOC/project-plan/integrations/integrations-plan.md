# Integrations Plan

## Active Providers

| Provider | Owner | Purpose | Failure Handling | Kill Switch / Fallback |
|---|---|---|---|---|
| Sanity | Content Ops + Engineering | Structured content, preview, publish webhooks | Retry revalidation, manual republish, webhook alerting | Disable webhook processing and republish manually |
| Supabase | Engineering | Operational DB, storage, optional internal auth | Retry writes where safe, restore from backups, monitor storage policy failures | Temporary fallback to inbox-led inquiry handling for severe outages |
| Resend | Engineering + Commercial Ops | Transactional notification delivery | Retry job, surface alert, manual follow-up | Disable send path and rely on direct internal triage |
| Sentry | Engineering | Error monitoring and release diagnostics | Service degradation does not block core flows | Temporarily rely on platform logs |
| Analytics provider | Marketing + Engineering | Funnel and content performance measurement | Drop non-critical events safely | Disable tracking in config without blocking user flows |

## Deferred Providers

- CRM sync provider
- Calendar scheduling provider
- Dedicated search provider
- Lark or internal chat provider
- S3 as alternate storage backend

## Secret Ownership

- All provider keys are environment-scoped.
- Engineering owns provisioning and rotation.
- Content Ops owns Sanity editorial access, not deployment secrets.
- Commercial Ops never receives raw service credentials.

## Integration Order

1. Sanity preview and publish webhook
2. Supabase data and storage access
3. Resend notification flow
4. Sentry instrumentation
5. Analytics instrumentation
6. Optional future CRM or calendar handoff

## Operational Rules

- Persist durable records before non-critical follow-up actions.
- Log provider correlation identifiers where available.
- Treat repeated failure patterns as operational incidents, not silent background noise.