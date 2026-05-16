# System Blueprint

## Purpose

This document defines the contract-first system model for the Commodity Trading Company Website. Every later role doc must consume these decisions rather than reinterpret the product independently.

## Product Summary

The phase 1 product is a public, CMS-driven B2B website for a global commodity trading company. Its primary job is to build trust, organize commodity information, and convert serious buyers, suppliers, and strategic partners into qualified commercial conversations.

## Surface Contract

### Public Surface

- Home
- About
- Products
- Industries
- Capabilities
- Markets and Origins
- Insights
- Partner With Us
- Trust Center
- Contact
- Search and utility pages

### Internal Surfaces

- Sanity Studio for content editors and approvers
- Internal inquiry review workflow backed by Supabase records and notifications
- Engineering and analytics dashboards outside the public application runtime

### Explicitly Excluded In Phase 1

- Customer account dashboard
- Supplier self-service portal
- Live trade execution or deal desk UI
- Onsite payments or subscription management
- Custom bespoke admin dashboard beyond minimal internal ops needs

## Route Contract

### Canonical Public Routes

- `/`
- `/about`
- `/products`
- `/products/[sector]`
- `/products/[sector]/[family]`
- `/products/[sector]/[family]/[product]`
- `/industries`
- `/industries/[slug]`
- `/capabilities`
- `/capabilities/[slug]`
- `/markets`
- `/markets/origins/[slug]`
- `/markets/destinations/[slug]`
- `/markets/corridors/[slug]`
- `/insights`
- `/insights/[slug]`
- `/case-studies/[slug]`
- `/partner-with-us`
- `/partner-with-us/buyers`
- `/partner-with-us/suppliers`
- `/partner-with-us/partners`
- `/trust-center`
- `/trust-center/[slug]`
- `/contact`
- `/search`

### Protected Routes

- Sanity Studio route group for editorial users
- Any future internal ops route group must be authenticated and documented before implementation

## Role Boundaries

- Public visitors can browse and submit forms only.
- Editors can draft and update content but do not automatically publish.
- Approvers can publish, unpublish, and schedule content.
- Commercial operations can review inquiry records and supplier submissions.
- Compliance reviewers can access supplier documents and policy content.
- Engineers manage integrations, environments, logs, and deployment controls.

## Domain Contract

### CMS-Owned Content Entities

- global_settings
- navigation
- footer
- homepage
- sector_page
- commodity_family
- product_page
- industry_page
- capability_page
- origin_market
- destination_market
- trade_corridor
- insight_article
- case_study
- faq_item
- policy_page
- office_location
- team_profile
- cta_module
- downloadable_asset

### Operations-Owned Entities

- quote_inquiries
- sourcing_requests
- supplier_registrations
- partnership_requests
- newsletter_subscriptions
- file_attachments
- audit_events
- internal_users
- internal_notes
- outbound_notifications

## Lifecycle State Contract

### Inquiry States

- `submitted`
- `acknowledged`
- `qualified`
- `in_review`
- `closed_won`
- `closed_lost`
- `archived`

### Supplier Registration States

- `submitted`
- `documents_review`
- `approved`
- `rejected`
- `archived`

### Content States

- `draft`
- `review`
- `scheduled`
- `published`
- `archived`

## Source-Of-Truth Rules

- Sanity is authoritative for public editorial content and layout modules.
- Supabase Postgres is authoritative for public form submissions, private attachments, and operational audit trails.
- Next.js application code is authoritative for rendering logic, validation orchestration, and integration adapters.
- Analytics and monitoring tools consume events but never become the authoritative record of operational state.

## Integration Inventory

- Sanity for CMS and preview
- Supabase for Postgres, Storage, and optional internal auth posture
- Resend for transactional email
- Sentry for monitoring and release diagnostics
- Analytics provider for funnel and content performance
- Optional future CRM, calendar, or search-provider integrations only after the base intake model is stable

## Global Invariants

- Product taxonomy always follows sector -> family -> product.
- Public CTAs route into documented inquiry flows only.
- Supplier and partnership attachments remain private by default.
- Publish events must trigger cache revalidation for affected routes.
- The canonical footer text remains `Copyright {year} [Company Legal Name]. All rights reserved.` across all public templates.

## Non-Goals Guardrail

If a future request introduces a portal, pricing, payments, or real-time collaboration, the shared contracts must be updated first. No role-specific doc may smuggle those capabilities into phase 1.

## Implementation Sequence

1. Shared contracts
2. CMS content model and editorial workflow
3. Frontend templates and design-system-backed page planning
4. Backend form orchestration and notification handling
5. API/data and Supabase contract freeze
6. Security and privacy hardening
7. DevOps, analytics, search, and QA gates