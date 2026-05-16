# Security Plan

## Security Boundary Model

- Public pages are anonymous and read-only except for documented form submissions.
- Sanity editorial users authenticate through workspace roles.
- Any internal ops read surface requires authenticated internal roles and scoped access.
- Supplier attachments, partner documents, and internal notes remain private at all times unless an explicit publication workflow exists.

## Access Control Rules

- Hidden routes are never treated as security.
- Public inquiry submission endpoints accept anonymous writes only through validated server-side handlers.
- Internal status changes, note creation, and attachment review require authenticated internal actors.
- Publish, unpublish, and policy updates require role-based approval.

## Abuse Protection

- Apply per-IP rate limits to all public submission endpoints.
- Add captcha or equivalent bot protection to supplier and partnership forms.
- Restrict attachment file types, sizes, and counts.
- Monitor for repeated submission failures, upload anomalies, and suspicious bursts.

## Data Protection And Privacy

- Minimize personal data collection to what is needed for commercial follow-up.
- Do not log secrets, attachment contents, or unredacted free-text form content.
- Treat supplier documents as sensitive business information.
- Keep privacy disclosures, cookie handling, and consent messaging aligned with actual data flows.

## Retention Rules

- General inquiry records: 24 months unless legal or commercial need extends retention.
- Supplier registrations and attachments: active review or relationship window plus documented compliance retention.
- Analytics events: retain only as needed for reporting and optimization.
- Audit events: retain according to operational and legal needs.

## Auditability

- Capture actor, timestamp, record, and action for publish events and internal status changes.
- Track attachment downloads or reviews if those actions expose sensitive supplier data.
- Record secret rotations and provider configuration changes through ops process.

## Incident Priorities

- Severity 1: data exposure, inquiry-loss conditions, provider credential exposure, or broken protected-route access.
- Severity 2: degraded form handling, repeated email delivery failures, or search/index inconsistencies that materially harm conversion.

## Launch Checklist

- Rate limits configured
- Upload validation enforced
- Secrets environment-scoped
- Private storage policies reviewed
- Publish and internal actions auditable
- Retention windows documented