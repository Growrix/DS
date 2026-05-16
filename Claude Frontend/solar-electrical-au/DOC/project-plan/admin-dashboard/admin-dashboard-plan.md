# Admin Dashboard Plan

## Phase 1 Decision

Do not build a bespoke admin dashboard in the initial release. The current scope does not justify a separate internal application when content operations can run through Sanity Studio and commercial follow-up can run through controlled data views and email digests.

## Minimum Internal Capabilities Still Required

- View filtered inquiry records by type and status
- Review supplier submissions and attachments
- Add internal notes and move records through documented statuses
- Receive digest emails and failure alerts
- Audit who changed statuses or published content

## Approved Interim Tooling

- Sanity Studio for content creation and approval
- Supabase-backed internal reads for inquiry review
- Email digests and alerts for operational awareness
- Analytics dashboards for traffic and funnel performance

## Trigger Conditions For A Future Custom Admin UI

- Inquiry volume exceeds lightweight ops capacity
- Teams need richer assignment, SLA, or follow-up workflows
- Compliance review needs guided document-review interfaces
- Manual exports and digests become operational bottlenecks

## Future Guardrail

If a custom admin surface is later added, it must receive its own route contract, auth model, audit rules, and QA plan before implementation begins.