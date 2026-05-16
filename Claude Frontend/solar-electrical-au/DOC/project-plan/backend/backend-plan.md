# Backend Plan

## Goal

Provide a reliable server layer for public inquiry capture, private attachment handling, transactional notifications, CMS publish hooks, and low-friction operational follow-up.

## Service Boundaries

### Inquiry Intake Service

- Validates quote, sourcing, supplier, and partnership submissions
- Normalizes payloads into durable Supabase records
- Emits internal events for notifications and analytics

### Attachment Service

- Issues signed upload permissions for approved file types
- Stores metadata and ownership references
- Enforces private-by-default access

### Notification Service

- Sends confirmation emails to visitors where appropriate
- Sends commercial alert emails and digests to operators
- Retries failed deliveries without duplicating inquiry records

### Content Revalidation Service

- Receives trusted CMS webhooks
- Revalidates affected routes and listing caches
- Records publish events for observability

### Reporting And Job Service

- Runs stale-inquiry reminders, digest generation, and optional export jobs
- Tracks retry state and failure exhaustion

## Workflow Contracts

### Quote And Sourcing Requests

1. Validate request payload.
2. Persist record and attachment metadata.
3. Emit audit event.
4. Trigger operator notification.
5. Return safe success envelope to the visitor.

### Supplier Registration

1. Validate supplier identity, region, product, and document metadata.
2. Store files privately.
3. Persist registration in `submitted` state.
4. Notify compliance and commercial review owners.
5. Expose no public access to attachments.

### Content Publish

1. Verify webhook signature.
2. Normalize changed document references.
3. Revalidate affected routes, search payloads, and sitemap.
4. Log result and retry on transient failure.

## Failure Handling

- Failed email send: retain inquiry as accepted, flag notification failure, retry asynchronously.
- Failed attachment upload: do not accept submission as complete until required upload metadata is valid.
- Failed webhook processing: leave content unchanged on site, retry revalidation, and alert on repeated failure.
- Failed analytics event: do not block primary form submission.

## Operational Guardrails

- No public write endpoint bypasses server-side validation.
- No provider callback mutates state without idempotent checks.
- No private upload becomes public through storage misconfiguration.
- No content-revalidation endpoint is callable without trusted verification.

## Phase 1 Exclusions

- Payments and billing flows
- Realtime operator consoles
- Authenticated customer workspaces

## Build Sequence

1. Form submission endpoints and Supabase persistence
2. Attachment signing and storage policy
3. Resend notification layer
4. Sanity webhook and revalidation path
5. Scheduled jobs and failure dashboards