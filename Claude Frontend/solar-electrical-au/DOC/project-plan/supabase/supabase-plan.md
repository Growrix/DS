# Supabase Plan

## Why Supabase Is Required Now

The site needs a durable operational record for quote requests, sourcing requests, supplier registrations, attachment metadata, notifications, and auditability. Sanity is the right tool for public content, but not for operational lead data.

## Database Ownership

Supabase Postgres owns:

- inquiry records
- supplier registrations
- partnership requests
- newsletter subscriptions
- attachment metadata
- audit events
- internal notes
- notification job state

## Storage Ownership

Supabase Storage owns:

- supplier documents
- partnership attachments
- internal review files if required

Public marketing assets and editorial images stay in Sanity assets, not in Supabase Storage.

## Auth Posture

- Public form submission endpoints are anonymous but server-mediated.
- No public end-user account model exists in phase 1.
- If internal ops routes are added, Supabase Auth can support restricted internal users with role-backed access.

## Migration Strategy

- Use forward-only SQL migrations.
- Version all schema changes in source control.
- Document rollback or compensating migration steps for every non-trivial schema change.
- Do not introduce Prisma in phase 1.

## RLS And Access Rules

- Internal read tables require authenticated internal roles if exposed through app routes.
- Public visitors never read directly from operational tables.
- Service-role writes are restricted to trusted server execution only.

## Environment Strategy

- Separate projects for local, staging, and production where practical.
- Isolated service-role and anon keys per environment.
- Storage bucket policies reviewed per environment before launch.

## Backup And Recovery

- Verify automated Postgres backups.
- Periodically export critical operational datasets.
- Keep restore procedures documented in DevOps and Security docs.