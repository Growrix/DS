# API And Data Plan

## API Surface

### Public Write Endpoints

- `POST /api/inquiries/quote`
- `POST /api/inquiries/sourcing`
- `POST /api/inquiries/supplier`
- `POST /api/inquiries/partnership`
- `POST /api/subscriptions/newsletter`
- `POST /api/uploads/sign` for approved attachment flows

### Internal Or Protected Endpoints

- `POST /api/revalidate/sanity`
- `GET /api/internal/inquiries`
- `GET /api/internal/suppliers`
- `PATCH /api/internal/inquiries/:id/status`
- `PATCH /api/internal/suppliers/:id/status`

## Envelope Rules

### Success

```json
{
  "data": {
    "id": "uuid",
    "status": "submitted"
  },
  "meta": {
    "message": "Request received"
  }
}
```

### Error

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "Required fields are missing or invalid.",
    "details": {}
  }
}
```

## Persistence Model

### Core Tables

- `quote_inquiries`
- `sourcing_requests`
- `supplier_registrations`
- `partnership_requests`
- `newsletter_subscriptions`
- `file_attachments`
- `audit_events`
- `internal_users`
- `internal_notes`
- `notification_jobs`

### Shared Fields

- UUID primary key
- `status`
- `created_at`
- `updated_at`
- actor or owner references where applicable
- source channel and routing metadata

## Status Models

### Quote, Sourcing, And Partnership

- `submitted`
- `acknowledged`
- `qualified`
- `in_review`
- `closed_won`
- `closed_lost`
- `archived`

### Supplier Registrations

- `submitted`
- `documents_review`
- `approved`
- `rejected`
- `archived`

### Notification Jobs

- `pending`
- `processing`
- `delivered`
- `failed`
- `dead_lettered`

## Retention Rules

- Quote, sourcing, and partnership records: 24 months minimum unless legal retention needs extend them.
- Supplier registrations and attachments: retain for active evaluation or supplier relationship plus compliance retention window.
- Newsletter subscriptions: retain until unsubscribe or deletion request.
- Audit events: retain according to operational and compliance requirements.
- Raw provider payloads: keep only as long as necessary for debugging and reconciliation.

## Event Contract

- `inquiry.created`
- `supplier_registration.created`
- `supplier_registration.status_changed`
- `newsletter_subscription.created`
- `content.published`
- `content.revalidation_requested`
- `content.revalidation_failed`
- `notification.failed`

## Data Rules

- Free-text notes from operators never reach public responses.
- Attachment metadata is stored separately from access credentials.
- Internal list endpoints require role-based access and scoped filtering.
- Any future CRM sync consumes normalized internal events rather than reading public form payloads directly.