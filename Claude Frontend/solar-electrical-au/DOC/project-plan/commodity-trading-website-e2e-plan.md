# Commodity Trading Website E2E Plan

## 0. Guide-Backed Decision Map

| Decision Area | Required Framework Guide Files | Minimum Project Outputs |
|---|---|---|
| Product scope, surfaces, roles, and workflows | `DOC/framework/guide/product/product-requirements.md`, `DOC/framework/guide/architecture/system-architecture.md`, `DOC/framework/guide/architecture/module-boundaries.md` | `DOC/project-plan/shared-contracts/`, root `ai-context.yaml`, root `README.md` |
| Shared contracts and sequencing | `DOC/framework/guide/architecture/contract-first-delivery.md`, `DOC/framework/guide/architecture/system-architecture.md`, `DOC/framework/guide/ai/ai-context.yaml` | `DOC/project-plan/shared-contracts/`, this artifact |
| Frontend UX, design system, accessibility, and error UX | `DOC/framework/guide/frontend/frontend-rules-and-design-system.md`, `DOC/framework/guide/frontend/frontend-architecture.md`, `DOC/framework/guide/frontend/frontend-performance-and-analytics.md` | `DOC/project-plan/frontend/`, `DOC/project-plan/admin-dashboard/` |
| CMS, editorial operations, and publishing | `DOC/framework/guide/product/product-requirements.md`, `DOC/framework/guide/frontend/frontend-architecture.md`, `DOC/framework/guide/process/deployment-and-environments.md` | `DOC/project-plan/cms-content-operations/`, `DOC/project-plan/frontend/`, `DOC/project-plan/backend/` |
| Backend, jobs, storage, and integrations | `DOC/framework/guide/backend/backend-architecture.md`, `DOC/framework/guide/backend/queue-payments-and-integrations.md`, `DOC/framework/guide/backend/file-delivery-and-storage.md`, `DOC/framework/guide/backend/backend-observability-and-reliability.md` | `DOC/project-plan/backend/`, `DOC/project-plan/integrations/`, `DOC/project-plan/supabase/` |
| API, data, retention, and events | `DOC/framework/guide/api/api-design.md`, `DOC/framework/guide/data/data-model.md`, `DOC/framework/guide/process/privacy-retention-and-compliance.md` | `DOC/project-plan/api-and-data/`, `DOC/project-plan/supabase/` |
| Security, privacy, abuse protection, and governance | `DOC/framework/guide/backend/auth-authorization-and-rls.md`, `DOC/framework/guide/operations/security-and-operations.md`, `DOC/framework/guide/operations/platform-governance-and-controls.md`, `DOC/framework/guide/process/privacy-retention-and-compliance.md`, `DOC/framework/guide/process/incident-response.md` | `DOC/project-plan/security/`, `DOC/project-plan/shared-contracts/` |
| Environments, release control, monitoring, and rollback | `DOC/framework/guide/process/deployment-and-environments.md`, `DOC/framework/guide/backend/backend-observability-and-reliability.md`, `DOC/framework/guide/operations/security-and-operations.md` | `DOC/project-plan/devops/`, `DOC/project-plan/tasks/` |
| Analytics, search, testing, and release evidence | `DOC/framework/guide/frontend/frontend-performance-and-analytics.md`, `DOC/framework/guide/quality/testing-strategy.md`, `DOC/framework/guide/quality/qa-and-release-gates.md` | `DOC/project-plan/analytics/`, `DOC/project-plan/search/`, `DOC/project-plan/qa/` |

## 1. Artifact Metadata

- Canonical artifact path: `DOC/project-plan/commodity-trading-website-e2e-plan.md`
- Affected downstream role docs: shared-contracts, frontend, backend, api-and-data, admin-dashboard, cms-content-operations, supabase, security, devops, analytics, search, integrations, qa, tasks
- Planning request source: `DOC/master-plan/plan.md`
- Planning mode: Fresh
- Status: Active canonical baseline
- Last updated: 2026-04-29
- Guide files consulted: product requirements, contract-first delivery, system architecture, module boundaries, frontend architecture, frontend design system, frontend performance and analytics, backend architecture, auth and RLS, queue-payments-integrations, file delivery and storage, API design, data model, security and operations, platform governance and controls, deployment and environments, privacy-retention-compliance, testing strategy, QA and release gates
- Existing project artifacts audited: `DOC/master-plan/plan.md`, framework roles, framework prompts, framework execution constitution, partial `DOC/project-plan/` placeholders
- Owners and reviewers: Product, Content Ops, Engineering, Commercial Operations, Compliance
- Scope labels or tags: B2B, commodity-trading, marketing-site, CMS, lead-generation, supplier-onboarding, fresh-plan

## 2. Project Folder And File Materialization Contract

### Always Create Or Refresh

- `DOC/project-plan/ai-context.yaml`
- `DOC/project-plan/README.md`
- `DOC/project-plan/tasks/ai-context.yaml`
- `DOC/project-plan/tasks/tasks.md`
- `DOC/project-plan/commodity-trading-website-e2e-plan.md`

### Core Project Folders

| Folder | Minimum Files | Required When | Notes |
|---|---|---|---|
| `DOC/project-plan/shared-contracts/` | `ai-context.yaml`, `README.md`, `system-blueprint.md` | Always | System-wide route, content, entity, and workflow invariants. |
| `DOC/project-plan/frontend/` | `ai-context.yaml`, `README.md`, `frontend-plan.md`, `page-*.md` | Always | Public site IA, templates, UI state rules, accessibility, and component governance. Frontend planning is not complete without separate page docs for each core route and reusable dynamic template. |
| `DOC/project-plan/backend/` | `ai-context.yaml`, `README.md`, `backend-plan.md` | Always | Inquiry orchestration, upload processing, webhooks, notifications, and jobs. |
| `DOC/project-plan/api-and-data/` | `ai-context.yaml`, `README.md`, `api-data-plan.md` | Always | API groups, schemas, persistence, retention, and event contracts. |
| `DOC/project-plan/security/` | `ai-context.yaml`, `README.md`, `security-plan.md` | Always | Access control, privacy, rate limits, auditability, and incident posture. |
| `DOC/project-plan/devops/` | `ai-context.yaml`, `README.md`, `devops-plan.md` | Always | Environments, CI/CD, observability, rollback, and recovery. |
| `DOC/project-plan/qa/` | `ai-context.yaml`, `README.md`, `qa-plan.md` | Always | Test layers, release gates, and validation evidence. |

### Conditional Project Folders

| Folder | Decision | Notes |
|---|---|---|
| `DOC/project-plan/admin-dashboard/` | Create now | Required to document why a bespoke admin UI is deferred and what operator surfaces still exist. |
| `DOC/project-plan/supabase/` | Create now | Supabase owns Postgres, Storage, auth posture, and form-intake persistence. |
| `DOC/project-plan/cms-content-operations/` | Create now | Site is content-bearing and needs explicit editorial workflow and preview rules. |
| `DOC/project-plan/integrations/` | Create now | Sanity, Supabase, Resend, analytics, error monitoring, and future CRM handoff need explicit ownership. |
| `DOC/project-plan/analytics/` | Create now | Traffic growth and commercial conversion measurement are core to the scope. |
| `DOC/project-plan/search/` | Create now | Product discovery and insight search are part of the public information architecture. |

### Materialization Rules

- Root `ai-context.yaml` routes future work to this artifact first, then to role-specific docs.
- Root `README.md` names the active plan, folder ownership, and read order.
- Every created folder must state what it owns, what it explicitly does not own, and which guides governed its decisions.
- The task tracker is updated only after all role docs exist.
- The frontend folder must contain `frontend-plan.md` and separate page-level markdown files for each core page and reusable dynamic template in scope.

## 3. Planning Mode And Objective

- Planning mode: Fresh
- Why this mode fits the request: The repo contains framework documentation and a completed master plan, but no product implementation or prior project-specific planning set.
- Scope boundaries: Public website, content operations, inquiry flows, supplier onboarding, partnership intake, trust center, analytics, search, internal operations, and release governance.
- Explicit non-goals: Live trading execution platform, authenticated customer portal, supplier self-service portal, payment checkout, bespoke CRM replacement, and mobile app.
- Success definition: A builder can implement the site from `DOC/project-plan/` without guessing IA, content model, CMS workflow, data ownership, integrations, or release gates.
- Current implementation compatibility requirements: Preserve framework docs, use the master plan as the product source brief, normalize the partial placeholder project-plan folder, and avoid inventing reuse from non-existent app code.
- Known constraints from budget, team, timeline, or platform: No app code exists yet, phase 1 should optimize for content scale and qualified inquiry handling, and internal operations should stay lean unless workflow complexity proves otherwise.

## 4. Current-State Audit

### Tracker Status

- Done: Master plan exists in `DOC/master-plan/plan.md`; framework guidance and role system exist.
- Partial: `DOC/project-plan/shared-contracts/`, `frontend/`, `backend/`, and `api-and-data/` were created as placeholders but were not canonical.
- Blocked: No canonical project-plan root entrypoint, no task tracker, no downstream security, ops, or QA docs.
- Not started: Role-specific planning set, CMS operations docs, analytics, search, integrations, Supabase, and release governance.

### Existing Documentation Inventory

- Root routing docs already present: none in `DOC/project-plan/` before this pass.
- Existing project-plan folders already present: shared-contracts, frontend, backend, api-and-data placeholders only.
- Existing project docs that must be reused: `DOC/master-plan/plan.md`, framework guides and prompts.
- Existing project docs that are stale or conflicting: Placeholder `DOC/project-plan/*/README.md` files were insufficient and not implementation-ready.

### Existing Codebase Inventory

- Reusable routes: none
- Reusable layouts and shells: none
- Reusable sections and components: none
- Reusable data or store modules: none
- Existing API handlers and contracts: none
- Existing CMS or Studio schemas: none
- Existing admin or operator flows: none beyond documentation intent
- Existing integrations already wired: none
- Existing observability, analytics, or release tooling: none beyond documentation framework

### Reuse-First Delta Map

- Reuse without changes: Framework guides, execution constitution, role system, and the master plan as the product source brief.
- Extend carefully: Partial project-plan folders and the E2E planning template.
- Refactor in place: Planner routing and orchestration prompts so master-plan input cannot be mistaken for planning completion.
- Net-new additions that are truly required: Canonical root project-plan docs, role-specific plans, task tracker, CMS operations docs, analytics/search plans, integrations plan, and Supabase plan.
- Items rejected to avoid architecture drift: Bespoke admin dashboard in phase 1, portal-style authenticated user area, payment checkout, and realtime collaboration features.

## 5. Scope, Surfaces, Roles, And Access Model

### Surface Map

- Public surfaces: Home, About, Products, Industries, Capabilities, Markets and Origins, Insights, Partner With Us, Trust Center, Contact, utility pages.
- Authenticated end-user surfaces: None in phase 1.
- Admin or operator surfaces: Sanity Studio, internal commercial-review workflow, content approval workflow, lightweight inquiry management views.
- Internal-only tooling surfaces: Supplier document review, inquiry triage, analytics dashboards, deployment monitoring.
- Mobile-specific surfaces if any: Responsive public website only; no native app scope.

### Personas And Roles

- Primary user types: Buyers, suppliers, strategic partners, journalists or researchers, and prospective employees.
- Operational roles: Content editor, content approver, commercial operations lead, compliance reviewer, marketing analyst, engineering owner.
- Support or moderation roles: Internal operations, security/compliance, and web content operations.
- Permission boundaries: Public users can browse and submit forms; editors manage content drafts; approvers publish; commercial ops access inquiry records; engineers manage deployments and secrets.

### Authentication, Authorization, And Tenancy

- Auth provider and session model: Public site anonymous; Sanity workspace authentication for editors; Supabase Auth for internal operational tooling if a custom ops surface is introduced.
- RBAC or policy model: Role-based editorial permissions in Sanity; role-based database and dashboard access for any internal operational records.
- Protected route strategy: Sanity Studio and any internal ops routes behind authenticated access; public pages remain anonymous.
- Multi-tenancy isolation model: Single-company operations, no customer-tenant model in phase 1.
- Tenant-aware data partitioning rules: Not applicable for public browsing; inquiry records are segmented by record ownership and internal role.
- Entitlements, quotas, or plan enforcement: No customer billing entitlements at launch; abuse quotas and per-endpoint throttles apply to public forms.
- Auditability requirements for privileged actions: Content publish, content unpublish, inquiry status changes, document download, and secret rotation events must be attributable.

Decision sources:
- `DOC/framework/guide/backend/auth-authorization-and-rls.md`
- `DOC/framework/guide/operations/security-and-operations.md`
- `DOC/framework/guide/operations/platform-governance-and-controls.md`

## 6. Product, Content, CMS, And Search Strategy

### Product Scope Summary

- Core user journeys: Discover products and capabilities, validate trust, navigate to relevant commodity pages, and submit a qualified inquiry.
- Revenue or conversion journeys: Request a quote, submit a sourcing request, register as a supplier, request a strategic partnership conversation, subscribe for insights.
- Admin or support journeys: Create and publish content, review inbound inquiries, validate supplier documentation, monitor growth and quality signals.

### Content Surfaces

- Blog: Yes, as the `Insights` hub with market updates, explainers, and regulatory/logistics analysis.
- Services or marketing pages: Yes, as `Capabilities`, `Industries`, `Markets and Origins`, and trust-led evergreen pages.
- Catalog or shop: Product catalog only; no ecommerce checkout in phase 1.
- Case studies or proof: Yes, with anonymized case studies and trade-corridor proof.
- FAQ, help, or trust content: Yes, centralized in the Trust Center and product-level FAQ blocks.

### CMS And Editorial Operations

- CMS decision and justification: Sanity CMS is required now because the site has content-heavy marketing, insights, case studies, trust assets, market pages, and product families that need structured editorial governance and preview.
- Document types, field groups, and validation: Global settings, navigation, footer, homepage modules, sector pages, commodity families, product pages, industries, capabilities, origin markets, destination markets, trade corridors, insight articles, case studies, FAQs, policies, team profiles, office locations, CTA modules, downloadable assets.
- Taxonomies and references: Sector, family, product tags, industries, origin regions, destination regions, trade-corridor tags, insight topics, SEO tags.
- Slug, preview, draft, review, and publish workflow: Editors create drafts, approvers review, publish triggers Next.js revalidation, preview uses token-protected draft mode, archived content remains recoverable.
- Editorial ownership and permissions: Editors draft content, approvers publish, compliance reviews policy and trust pages, commercial ops reviews supplier-facing copy.
- Revalidation, cache invalidation, or publish propagation rules: Sanity webhook triggers route and tag-based revalidation for changed documents, sitemap refresh, and related listing updates.
- What belongs in CMS vs admin-dashboard vs code: CMS owns all public content and reusable CTAs; admin-dashboard is deferred and limited to future ops tooling; code owns layout primitives, validation logic, integration adapters, and protected env configuration.

### Search And Indexing

- Search surfaces in scope: Sitewide search for products, insights, capabilities, markets, and FAQs.
- Indexing model: Launch with statically generated search documents plus Sanity-backed query surfaces; external search provider is deferred.
- Search provider or internal search design: Internal indexed JSON or edge-generated search backed by Sanity data and route metadata.
- Query performance expectations: Sub-200ms client-side filtering for pre-indexed search payloads and fast SSR page retrieval for canonical pages.
- Content discovery and SEO interactions: Search pages must reinforce SEO through clean taxonomy pages and internal linking, not create duplicate thin results pages.

Decision sources:
- `DOC/framework/guide/product/product-requirements.md`
- `DOC/framework/guide/frontend/frontend-architecture.md`
- `DOC/framework/guide/frontend/frontend-performance-and-analytics.md`
- `DOC/framework/guide/process/deployment-and-environments.md`

## 7. Platform Decision Matrix

| Capability | Current State | Decision | Required Now / Later / Excluded | Notes |
|---|---|---|---|---|
| Next.js | Not present | Use Next.js App Router for public site, preview, ISR, and route ownership | Required now | Aligns with repo preference and frontend guide |
| React | Not present | Use React for component architecture | Required now | Consumed via Next.js |
| TypeScript | Not present | Use TypeScript across app, content types, APIs, and tests | Required now | Required for maintainable contracts |
| Sanity CMS | Not present | Use Sanity Studio for structured content operations and preview | Required now | Content-heavy scope demands editorial workflow |
| Supabase | Not present | Use Supabase for Postgres, Storage, operational records, and optional internal auth | Required now | Owns inquiry persistence and private uploads |
| PostgreSQL | Not present | Use Supabase Postgres as system of record for inquiries and ops data | Required now | Stable transactional layer |
| Prisma | Not present | Exclude Prisma in phase 1 | Intentionally excluded | Avoid dual ownership with Supabase migrations |
| Lark | Not present | Exclude at launch | Intentionally excluded | Can be added later if commercial ops standardize on it |
| Resend | Not present | Use Resend for transactional inquiry notifications and digests | Required now | Simple, low-friction email ownership |
| Pusher | Not present | Exclude at launch | Intentionally excluded | No realtime customer-facing collaboration in phase 1 |
| S3 | Not present | Defer; use Sanity assets and Supabase Storage first | Deferred | Revisit only for large private asset expansion |
| Search provider | Not present | Start with internal indexed search | Required now without third-party provider | Algolia/Meilisearch deferred until scale justifies it |
| Analytics provider | Not present | Use PostHog or Plausible with final selection before implementation | Required now | Must support funnels and privacy-safe event capture |
| Error monitoring | Not present | Use Sentry | Required now | Supports route, API, and webhook diagnostics |
| Feature flag system | Not present | Start with environment-scoped configuration flags and provider kill switches | Required now in minimal form | Dedicated flag platform deferred |

## 8. Data, API, Events, And Storage Plan

- Source of truth per domain: Sanity for published content and media metadata; Supabase Postgres for inbound inquiries, supplier registrations, newsletter records, audit events, and operational notes; Supabase Storage for private form attachments; Vercel deployment state for runtime configuration.
- Database ownership and schema impact: Fresh schema creation for inquiries, supplier registrations, partnership requests, newsletter subscriptions, audit events, user roles for internal ops, and file metadata.
- Migration or backfill needs: No backfill now; all migrations start from a clean baseline with forward-only migration scripts.
- API boundaries and endpoint groups: Public `POST /api/inquiries/quote`, `POST /api/inquiries/sourcing`, `POST /api/inquiries/supplier`, `POST /api/inquiries/partnership`, `POST /api/subscriptions`, internal `POST /api/revalidate/sanity`, internal ops read endpoints for filtered inquiry queues, optional upload-signing endpoints.
- Versioning and backward-compatibility strategy: Internal version 1, no public external API commitment; breaking internal changes require doc updates before release.
- Event model, webhooks, and async side effects: Sanity publish webhooks for revalidation, internal lead-created events for notifications and analytics, optional CRM-forwarding events, retryable email dispatch, audit events for privileged actions.
- Rate limiting and throttling strategy: Per-IP and per-route throttles on all public forms, stricter limits on supplier registration with file uploads, bot mitigation on repeated failed submissions.
- File or asset storage classes: Public content media in Sanity, private supplier and partnership attachments in Supabase Storage, generated downloadable company files in controlled public storage.
- File lifecycle and retention rules: Quote and sourcing attachments retained for 24 months unless legally required longer, supplier documents retained for active relationship plus compliance window, public media retained until content deletion.
- File or media processing pipeline: Validate type and size before upload, issue signed upload URLs, persist metadata record, review sensitive uploads manually, and trigger async scan or compliance review when required.
- Restore or replay considerations: Sanity webhook replays must be safe and idempotent; inquiry notification jobs must be replayable from durable records; backup exports for operational records run on a scheduled basis.

Decision sources:
- `DOC/framework/guide/data/data-model.md`
- `DOC/framework/guide/api/api-design.md`
- `DOC/framework/guide/backend/file-delivery-and-storage.md`
- `DOC/framework/guide/backend/queue-payments-and-integrations.md`

## 9. Integrations, Billing, And Background Processing

### Integration Plan

| Integration | Purpose | Trigger Points | Owner Surface | Failure / Fallback | Notes |
|---|---|---|---|---|---|
| Sanity | Content modeling, editorial workflow, preview, publish webhooks | Content create, update, publish, unpublish | CMS and frontend | Draft mode fallback, manual republish, webhook replay | Required now |
| Supabase | Inquiry data, storage, audit records | Form submissions, file uploads, internal ops reads | Backend and api-and-data | Queue retry for writes, storage retry, backup and restore plan | Required now |
| Resend | Transactional email and digest delivery | New inquiry, supplier registration, editorial alerts, daily digest | Backend and integrations | Retry with logged failure and ops alert | Required now |
| Sentry | Error and performance monitoring | Client errors, API failures, webhook failures | DevOps and frontend/backend | Alerting plus manual incident response | Required now |
| Analytics provider | Funnel measurement and content performance | Page views, CTA clicks, form starts, form submits | Analytics and frontend | Graceful no-op if blocked, rely on server logs for critical forms | Required now |
| Lark | Internal messaging | None | Integrations | Not applicable | Excluded at launch |
| Pusher | Realtime messaging | None | Integrations | Not applicable | Excluded at launch |
| S3 | Large-scale asset storage | None initially | Integrations | Not applicable | Deferred |
| Payments | Monetized flows | None initially | Integrations | Not applicable | Excluded at launch |
| Calendar | Scheduling meetings | Optional post-launch | Integrations | Manual scheduling fallback | Deferred |

### Billing And Subscription

- Payment provider: None in phase 1.
- Plans, pricing, or monetization model: Off-site commercial sales process driven by qualified inquiries.
- Subscription lifecycle or purchase states: Not applicable for launch.
- Entitlement enforcement points: Not applicable for public visitors; internal feature access enforced by role, not billing.
- Webhook ownership and idempotency: Not applicable at launch.
- Finance and reconciliation visibility: Inquiry attribution and sales-source reporting only.

### Background Jobs And Async Processing

- Queue or job system: Lightweight scheduled jobs and retry queue; implementation can start with platform cron plus durable job table.
- Async jobs in scope: Email delivery retries, daily commercial digest, stale inquiry reminders, sitemap refresh, optional search index refresh, analytics export jobs.
- Retry strategy: Exponential backoff for email and webhook retries with capped attempts and dead-letter logging.
- Dead-letter or failure handling: Persist failed job payload metadata, alert operations for repeated failures, allow manual replay.
- Operational ownership: Engineering owns job infrastructure; commercial ops owns business follow-up for failed inquiry notifications.

Decision sources:
- `DOC/framework/guide/operations/platform-governance-and-controls.md`
- `DOC/framework/guide/backend/queue-payments-and-integrations.md`
- `DOC/framework/guide/backend/backend-observability-and-reliability.md`

## 10. Frontend Governance, UX, Analytics, And Error Strategy

- Route and IA plan: Public route groups mirror the master-plan sitemap, with reusable templates for sectors, product families, products, insight articles, market pages, case studies, trust documents, and conversion pages.
- Layout and shell ownership: Marketing shell owns global header, mega-navigation, footer, trust strip, CTA band, breadcrumb, and SEO scaffolding; special templates own content module assembly.
- Design system governance and component standards: Tokenized design system from day one, with reusable primitives for hero, section header, stat strip, product card, trust badge, corridor map, CTA band, inquiry forms, and article cards.
- Accessibility baseline: WCAG 2.2 AA target, keyboard navigable menus and forms, semantic landmarks, sufficient color contrast, and accessible form errors.
- Localization needs: English-first; content architecture must support future locale fields and market-specific pages without route redesign.
- Error, empty, loading, retry, and fallback UX: Explicit empty states for search and category pages, safe error banners for form failures, draft-preview fallback state, and retryable form submissions for transient network errors.
- Analytics instrumentation and event taxonomy: Track `cta_quote_clicked`, `quote_form_started`, `quote_form_submitted`, `supplier_form_submitted`, `insight_article_viewed`, `product_spec_download_requested`, `market_page_contact_clicked`, and content engagement depth.
- Funnel and product insight requirements: Measure sector landing page conversion, product page assisted conversions, supplier registration completion, insight-to-contact conversion, and regional source performance.
- Sensitive-data exclusions for analytics: Never log free-text form content, uploaded document names, private contact details beyond hashed or redacted identifiers, or internal note fields.

Decision sources:
- `DOC/framework/guide/frontend/frontend-rules-and-design-system.md`
- `DOC/framework/guide/frontend/frontend-architecture.md`
- `DOC/framework/guide/frontend/frontend-performance-and-analytics.md`

## 11. Performance, Caching, Observability, And Reliability

- Performance budgets or targets: Public landing pages target LCP below 2.5s, CLS below 0.1, and lean JavaScript payloads; search and inquiry pages must feel interactive within 200ms after primary content loads.
- Rendering strategy and cache plan: Static generation or ISR for evergreen pages, server rendering for dynamic search and preview, route-tagged cache invalidation on content publish.
- CDN and edge caching strategy: Cache public pages aggressively with explicit revalidation hooks; bypass or minimize cache for preview and submission endpoints.
- Cache invalidation rules: Sanity publish invalidates affected document routes, sector/family listings, sitemap, and search payloads; internal data writes do not invalidate public cache unless related content changes.
- Query and payload performance expectations: Keep search index payloads small, paginate insight archives, optimize product family pages for progressive loading, and avoid client-heavy filtering until necessary.
- Error monitoring platform: Sentry for frontend, backend, and webhook diagnostics.
- Structured logging strategy: Log request IDs, inquiry IDs, document IDs, publish events, provider correlation IDs, and error categories without sensitive payload contents.
- Metrics and dashboards: Track form success rate, email delivery success, Sanity webhook success, cache revalidation success, traffic by sector, and top converting CTA surfaces.
- Alerting and escalation triggers: Repeated form submission failures, repeated email failures, elevated 5xx rates, webhook replay loops, and abnormal bot traffic.
- Session replay or client diagnostics if applicable: Optional, limited to public browsing flows and never on supplier upload or free-text submission screens.
- Reliability objectives or service indicators: Inquiry submission success above 99.5 percent, publish-to-site update latency below five minutes, and monitored degradation paths for non-critical search or analytics failures.

Decision sources:
- `DOC/framework/guide/frontend/frontend-performance-and-analytics.md`
- `DOC/framework/guide/backend/backend-observability-and-reliability.md`
- `DOC/framework/guide/operations/security-and-operations.md`

## 12. Security, Privacy, Compliance, Abuse Protection, And Recovery

- Security boundary summary: Public site remains anonymous, editorial and ops tooling are authenticated, private uploads and inquiry records are access-controlled, and all privileged changes are auditable.
- RLS or policy expectations: Supabase tables for inquiries, supplier registrations, attachments, and internal notes use service-backed writes and restricted read policies for authorized internal roles only.
- Secret handling and rotation: Environment-scoped secrets, least-privilege provider keys, documented rotation cadence, and immediate rotation on exposure.
- Privacy and retention requirements: Consent-aware inquiry capture, minimization of sensitive fields, explicit retention windows for uploads and inquiry records, and deletion/export handling when required.
- Compliance obligations: Cookie/privacy disclosures, sanctions/compliance review for supplier onboarding copy, documented ownership of trade-sensitive supplier documents, and audit trail for policy updates.
- Abuse protection and rate limits: Captcha or bot protection on public forms, per-route throttles, file-type restrictions, and anomaly alerting.
- Moderation or safety controls: Manual review queue for supplier uploads and partnership attachments, no public UGC, editorial approval before any trust asset publication.
- Backup strategy: Supabase automated backups verified, Sanity dataset export schedule documented, and periodic export of inquiry and supplier datasets.
- Disaster recovery or restoration plan: Vercel rollback, Supabase restore procedure, Sanity dataset restore, and manual communication plan for degraded inquiry capture.
- Incident severity model and response expectations: Security incidents, data exposure, or inquiry-loss conditions are Severity 1; degraded publishing, search, or analytics are Severity 2 unless they block core conversion.

Decision sources:
- `DOC/framework/guide/backend/auth-authorization-and-rls.md`
- `DOC/framework/guide/operations/security-and-operations.md`
- `DOC/framework/guide/operations/platform-governance-and-controls.md`
- `DOC/framework/guide/process/privacy-retention-and-compliance.md`

## 13. Environment, CI/CD, Release Control, And Rollback

- Environment model: Local, staging, production.
- Secrets and config isolation: Separate Sanity, Supabase, Resend, analytics, and Sentry keys per environment.
- Build pipeline steps: Lint, typecheck, unit tests, content-schema validation, build, and deploy preview; production deploy after staging validation.
- Test enforcement in CI: PRs must pass lint, typecheck, unit tests, and key integration checks before merge; staging smoke tests required before production promotion.
- Preview deployment strategy: Every PR gets preview deployment with content preview validation and sample form submission test.
- Release triggers and approvals: Protected branch merge plus documented release note and approval from engineering and content owner when schema/content model changes occur.
- Feature flags and kill switches: Environment-based flags for integrations, form gating, preview access, and analytics; provider-level kill switches for email and search.
- Gradual rollout or staged release plan: Release core marketing shell and content model first, then product families and insights, then supplier and partnership flows, then search and reporting enhancements.
- Rollback strategy: Vercel deployment rollback, feature-flag disablement, migration rollback or compensating migration, and temporary form-routing fallback to email inbox if DB-backed intake degrades.
- Post-deploy validation steps: Verify homepage and product pages, preview mode, quote and supplier form submission, email receipt, Sentry health, and analytics event flow.

Decision sources:
- `DOC/framework/guide/process/deployment-and-environments.md`
- `DOC/framework/guide/operations/platform-governance-and-controls.md`
- `DOC/framework/guide/operations/security-and-operations.md`
- `DOC/framework/guide/quality/qa-and-release-gates.md`

## 14. Admin, Internal Operations, And Support Controls

- Admin dashboard scope: No bespoke admin dashboard in phase 1; operators use Sanity Studio for content and lightweight internal ops tooling for inquiry review.
- Moderation or support tooling: Internal lead-triage views, supplier document review flow, email-based escalation, and analytics dashboards.
- Internal override rules: Only approved roles can publish content, mark inquiry status, or access supplier attachments; manual overrides are logged.
- Operator workflows and ownership: Marketing owns editorial calendar and publishing, commercial ops owns inquiry triage and follow-up, compliance reviews supplier-facing policies, engineering owns infrastructure and incident response.
- Escalation and support responsibilities: Commercial ops responds to inbound inquiries, marketing responds to content issues, engineering handles system incidents, compliance handles documentation and supplier-risk review.
- Audit requirements for internal actions: Publish, unpublish, content deletion, inquiry reassignment, attachment download, and retention exceptions require actor attribution.

Decision sources:
- `DOC/framework/guide/operations/platform-governance-and-controls.md`
- `DOC/framework/guide/process/incident-response.md`
- `DOC/framework/guide/product/product-requirements.md`

## 15. Global Site And Platform Invariants

- Reuse the same global header, mega-navigation model, footer, CTA band, and trust strip across all public templates.
- Keep the canonical footer string consistent across all pages: `Copyright {year} [Company Legal Name]. All rights reserved.`
- Public content publication is CMS-governed; operational data never lives in Sanity documents.
- Product taxonomy remains sector -> family -> product, even as new categories are added.
- No page may invent a CTA path that bypasses the documented inquiry endpoints or forms.
- Analytics event names, SEO metadata rules, and structured data patterns must remain centralized and reused.
- Supplier documents and private attachments are never publicly accessible.
- Server-side validation is authoritative for every public write flow.

## 16. E2E Phase Plan

### Shared Contracts

- Guide decision sources: contract-first delivery, system architecture, module boundaries, product requirements
- Folders or files to create or update: root `ai-context.yaml`, root `README.md`, `shared-contracts/README.md`, `shared-contracts/system-blueprint.md`
- Inputs: `DOC/master-plan/plan.md`, framework guides, this artifact
- Required decisions: surface boundaries, route model, entity ownership, operator roles, non-goals, invariants
- Deliverables: system blueprint, route map, lifecycle summary, implementation sequence
- Reuse targets: master plan and framework guide contracts
- Entry criteria: master plan finalized
- Exit criteria: all later role docs can inherit the same route, entity, and workflow definitions
- Risks and fallback: risk of over-scoping internal tooling; fallback is explicit deferral notes instead of implicit promises

### CMS And Content Operations

- Guide decision sources: product requirements, frontend architecture, deployment and environments
- Folders or files to create or update: `cms-content-operations/README.md`, `cms-content-operations/cms-content-operations-plan.md`, related references in frontend and backend docs
- Inputs: shared contract blueprint, master plan content model needs
- Required decisions: document types, workflow roles, preview, publishing, media ownership, taxonomy
- Deliverables: CMS plan, editorial governance, revalidation workflow, preview model
- Reuse targets: master-plan IA and content surfaces
- Entry criteria: shared contracts define all public surfaces
- Exit criteria: builders know exactly how every public surface is authored and published
- Risks and fallback: overly generic schemas; fallback is explicit document-type ownership and validation rules

### Frontend And Admin Surfaces

- Guide decision sources: frontend architecture, frontend rules and design system, frontend performance and analytics
- Folders or files to create or update: `frontend/README.md`, `frontend/frontend-plan.md`, `frontend/page-*.md`, `admin-dashboard/README.md`, `admin-dashboard/admin-dashboard-plan.md`
- Inputs: shared contracts, CMS plan
- Required decisions: public template set, component governance, responsive behavior, error UX, deferred admin UI boundary
- Deliverables: frontend plan, page-by-page file set with section-level detail, template map, admin-dashboard deferral contract
- Reuse targets: master plan sitemap and page strategy
- Entry criteria: shared contracts and CMS model locked
- Exit criteria: page templates and internal surfaces are explicit with no undocumented states, and each core page or reusable dynamic template has its own markdown file
- Risks and fallback: accidental portal expansion; fallback is documented non-goals and phase gating

### Backend, Jobs, And Integrations

- Guide decision sources: backend architecture, queue-payments-and-integrations, file delivery and storage, backend observability and reliability
- Folders or files to create or update: `backend/README.md`, `backend/backend-plan.md`, `integrations/README.md`, `integrations/integrations-plan.md`
- Inputs: shared contracts, CMS plan, frontend form requirements
- Required decisions: form orchestration, email dispatch, file handling, job retries, provider ownership
- Deliverables: backend plan, integrations matrix, retry and failure rules
- Reuse targets: framework integration safety patterns
- Entry criteria: public write flows defined
- Exit criteria: inquiry, supplier, and partnership flows have authoritative server paths and failure handling
- Risks and fallback: hidden CRM assumptions; fallback is durable intake first, CRM sync later

### API, Data, And Storage

- Guide decision sources: API design, data model, privacy-retention-compliance, auth and RLS
- Folders or files to create or update: `api-and-data/README.md`, `api-and-data/api-data-plan.md`, `supabase/README.md`, `supabase/supabase-plan.md`
- Inputs: shared contracts, backend workflow requirements
- Required decisions: endpoint groups, schema ownership, retention, upload rules, internal read models
- Deliverables: API/data plan, Supabase ownership plan
- Reuse targets: framework API and data conventions
- Entry criteria: backend form and storage expectations are clear
- Exit criteria: data model, API contracts, and retention rules are explicit and testable
- Risks and fallback: schema over-modeling; fallback is lean normalized tables with documented extensibility

### Security, Privacy, And Abuse Protection

- Guide decision sources: auth and RLS, security and operations, platform governance, privacy-retention-compliance
- Folders or files to create or update: `security/README.md`, `security/security-plan.md`
- Inputs: backend, API/data, Supabase, and admin decisions
- Required decisions: access boundaries, retention, throttling, sensitive upload rules, auditability
- Deliverables: security plan and incident posture
- Entry criteria: all public write flows and protected internal surfaces identified
- Exit criteria: every privileged action and sensitive data path has an owner and a control
- Risks and fallback: underestimating supplier document sensitivity; fallback is private storage plus manual review by default

### DevOps, Release Control, And Observability

- Guide decision sources: deployment and environments, backend observability and reliability, security and operations, QA and release gates
- Folders or files to create or update: `devops/README.md`, `devops/devops-plan.md`
- Inputs: backend, integrations, security, analytics requirements
- Required decisions: environments, CI/CD, preview, monitoring, rollback, backup verification
- Deliverables: devops plan, release checklist, observability baseline
- Entry criteria: major integrations and public write flows defined
- Exit criteria: releases can be promoted with clear validation and rollback controls
- Risks and fallback: missing staging parity; fallback is environment parity checklist and pre-production smoke tests

### QA And Validation Governance

- Guide decision sources: testing strategy, QA and release gates, frontend performance and analytics
- Folders or files to create or update: `qa/README.md`, `qa/qa-plan.md`, `analytics/README.md`, `analytics/analytics-plan.md`, `search/README.md`, `search/search-plan.md`, `tasks/tasks.md`
- Inputs: all previous role docs
- Required decisions: test layers, acceptance scenarios, analytics evidence, search validation, release blockers
- Deliverables: QA plan, analytics validation plan, search validation plan, execution tracker
- Entry criteria: route, content, API, and ops contracts are stable
- Exit criteria: there is an unambiguous validation path for launch readiness
- Risks and fallback: unowned validation evidence; fallback is owner-tagged checklist in tasks tracker

## 17. Execution Backlog

1. Finalize shared contracts, owner hint: product plus architecture, dependency: master plan baseline, target docs or files: `shared-contracts/system-blueprint.md`, validation evidence: route map and entity model reviewed.
2. Finalize Sanity content model, owner hint: content ops plus frontend, dependency: shared contracts, target docs or files: `cms-content-operations/cms-content-operations-plan.md`, validation evidence: document inventory and editorial workflow reviewed.
3. Define public template system and page files, owner hint: frontend, dependency: shared contracts and CMS plan, target docs or files: `frontend/frontend-plan.md`, `frontend/page-*.md`, validation evidence: page-template coverage map and page file inventory complete.
4. Freeze intake workflows and provider ownership, owner hint: backend plus integrations, dependency: frontend form requirements, target docs or files: `backend/backend-plan.md`, `integrations/integrations-plan.md`, validation evidence: inquiry lifecycle and failure handling reviewed.
5. Freeze API and persistence model, owner hint: api-and-data plus Supabase, dependency: backend workflow plan, target docs or files: `api-and-data/api-data-plan.md`, `supabase/supabase-plan.md`, validation evidence: table and endpoint inventory reviewed.
6. Lock security and retention controls, owner hint: security plus compliance, dependency: API/data and backend plans, target docs or files: `security/security-plan.md`, validation evidence: rate limits, retention windows, and access boundaries approved.
7. Define observability and deployment gates, owner hint: devops, dependency: backend, integrations, and security, target docs or files: `devops/devops-plan.md`, validation evidence: environment matrix and alerting checklist approved.
8. Define analytics and search rollout, owner hint: analytics plus frontend, dependency: frontend and CMS plan, target docs or files: `analytics/analytics-plan.md`, `search/search-plan.md`, validation evidence: event taxonomy and search surface checklist approved.
9. Freeze QA evidence requirements, owner hint: QA, dependency: all prior plans, target docs or files: `qa/qa-plan.md`, validation evidence: release gate matrix reviewed.
10. Sync the execution tracker, owner hint: planning owner, dependency: all project-plan docs, target docs or files: `tasks/tasks.md`, validation evidence: phase statuses and next steps recorded.

## 18. Release-Gate And Validation Matrix

| Gate | Scope | Blocking? | Owner | Evidence Required |
|---|---|---|---|---|
| Static validation | Lint, typecheck, schema validation, broken link checks | Yes | Engineering | Passing CI logs |
| Unit tests | Form validation, transformation helpers, analytics mappers | Yes | Engineering | Passing unit test suite |
| Integration tests | Inquiry APIs, Sanity revalidation, Resend dispatch, storage upload auth | Yes | Engineering | Passing integration suite |
| UI component tests | Navigation, CTA bands, forms, template modules | Yes | Frontend | Passing component tests or visual review evidence |
| Responsive and mobile validation | Navigation, forms, tables, search | Yes | Frontend plus QA | Device matrix validation |
| End-to-end tests | Quote request, sourcing request, supplier registration, preview, publish flow | Yes | QA | Passing E2E suite in staging |
| SEO validation | Metadata, sitemap, structured data, canonical rules | Yes | Content plus frontend | Crawl report and sample page review |
| Accessibility validation | Keyboard, labels, contrast, focus, announcements | Yes | Frontend plus QA | Automated audit plus manual review |
| Performance validation | Core Web Vitals on critical public pages | Yes | Frontend plus DevOps | Lighthouse or RUM evidence |
| Security validation | Secrets, rate limits, auth boundaries, upload restrictions | Yes | Security plus engineering | Security checklist sign-off |
| Observability readiness | Sentry, logs, alerts, dashboards | Yes | DevOps | Alert and dashboard verification |
| Rollback readiness | Deployment rollback and feature disable paths | Yes | DevOps | Documented rollback test |
| Backup or recovery readiness | Supabase and Sanity recovery posture | Yes | DevOps plus engineering | Backup verification record |
| Regression validation | Core journeys after content model or release changes | Yes | QA | Regression checklist completion |

## 19. Risks, Assumptions, Open Decisions, And Explicit N/A Items

- Risks: Scope can drift into portal or CRM territory; supplier document handling may trigger stronger compliance requirements; search can become too heavy if over-engineered too early.
- Assumptions: Phase 1 is a public B2B website with strong content operations and inquiry capture, not a logged-in trading platform; content and ops teams can work in Sanity and lightweight internal tooling initially.
- Open decisions: Final analytics provider choice, exact captcha provider, whether supplier attachments require automated scanning on day one, and whether calendar scheduling is needed at launch.
- Blockers: None at documentation level.
- Explicitly not applicable sections and why: Customer billing and subscription enforcement are not applicable for phase 1 because monetization happens off-platform through sales-led inquiry follow-up.

## 20. Tracker And Documentation Updates

- Files updated: framework routing docs, root project-plan entrypoint, role-specific planning docs, and task tracker
- New planning artifacts created: this artifact plus role-specific plan files across project-plan
- Downstream role docs updated: shared-contracts, frontend, backend, api-and-data, admin-dashboard, cms-content-operations, supabase, security, devops, analytics, search, integrations, qa
- New folders created: tasks, security, devops, qa, admin-dashboard, cms-content-operations, integrations, analytics, search, supabase
- Root routing updates: `DOC/project-plan/ai-context.yaml` and `DOC/project-plan/README.md`
- Task tracker deltas: fresh baseline tasks added in phase order
- Remaining follow-up docs required before implementation: none within the required project-plan baseline

## 21. Completion Checklist

- Every required section is completed or explicitly marked `Not applicable` with a reason.
- Guide sources are named for each major decision area.
- Root project-plan routing docs are updated.
- Core project-plan folders exist with `ai-context.yaml` and `README.md`.
- Scope-required conditional folders are created or intentionally excluded with reasons.