# Frontend Plan

## Goal

Deliver a high-trust, content-rich B2B website that makes commodity discovery easy, routes visitors into clear conversion paths, and scales through reusable templates rather than page-by-page custom builds.

## Frontend File Delivery Contract

- `frontend-plan.md` is the master architecture file.
- Separate `page-*.md` files are required for each core route and reusable dynamic template in scope.
- Page files carry section-level planning, state coverage, and route-specific conversion behavior.
- `README.md` and `ai-context.yaml` must route builders and later agents to the correct page docs instead of forcing them to scan the whole folder.

## Route And Template Model

### Core Route Groups

- Marketing shell: home, about, capabilities, industries, trust center, contact
- Product discovery shell: sector, family, product detail pages
- Market intelligence shell: insights, case studies, markets and origins
- Conversion shell: partner with us, quote request, sourcing request, supplier registration
- Utility shell: search, privacy, terms, cookies, careers, 404

### Template Inventory

- Homepage template
- Section hub template
- Product family template
- Product detail template
- Industry page template
- Capability page template
- Market page template
- Trade corridor template
- Insight article template
- Case study template
- Trust page template
- Conversion landing template

## Required Page File Coverage

- Home
- About
- Products hub
- Sector template
- Commodity family template
- Product detail template
- Industries hub
- Industry detail template
- Capabilities hub
- Capability detail template
- Markets hub
- Origin market template
- Destination market template
- Trade corridor template
- Insights hub
- Insight article template
- Case study template
- Partner With Us hub
- Request a Quote page
- Sourcing Request page
- Supplier Registration page
- Strategic Partnership page
- Trust Center hub
- Trust document template
- Contact page
- Search page
- Careers page
- Legal page template
- 404 page

## Global Shell Components

- Global header with mega-navigation grouped by Products, Industries, Capabilities, Markets, Insights, and Trust
- Trust strip for certifications, regions served, or sector coverage
- CTA band with segmented buyer, supplier, and partner actions
- Global footer with office info, utility links, and canonical copyright string
- Breadcrumb system for deep content pages

## Page-Level UX Rules

- Every public template must establish trust quickly through proof, scale, or operational clarity.
- Product and market pages must include commercial next-step CTAs, not only informational copy.
- Insight pages must route into product families, market pages, or inquiry CTAs through contextual modules.
- Trust Center pages must reduce procurement friction with visible policies, certificates, and documentation summaries.

## Form UX Contract

### Primary Forms

- Request a Quote
- Sourcing Request
- Supplier Registration
- Strategic Partnership Inquiry
- Newsletter Subscription

### Form Behavior Rules

- Use short-form capture on high-intent pages and expand qualification fields only where needed.
- Preserve progress when a user navigates between sections on long forms.
- Show explicit success, retry, and expected-response states.
- Validate required business fields before submission.
- Never expose internal routing or scoring logic in the UI.

## Design System Implementation Rules

- Build the public site on reusable section patterns and documented primitives.
- Keep visual language authoritative and editorial, not startup-generic.
- Use tokens for color, spacing, typography, and shadows from day one.
- Standardize components for stat strips, trust badges, CTA blocks, accordions, article cards, product cards, and inquiry forms.

## Accessibility And Responsive Rules

- Navigation must be fully keyboard accessible on desktop and mobile.
- Forms require label associations, inline error guidance, and accessible status messaging.
- Tables or specification blocks on product pages need mobile-appropriate stacked layouts.
- Search and filter interfaces must remain operable without hover-only affordances.

## SEO And Performance Rules

- Every page template must reserve slots for metadata, OG data, schema, and breadcrumb data.
- Product and insight templates must support internal linking modules and related-content surfaces.
- Use ISR or static generation for evergreen public routes.
- Avoid heavy client-side filtering until scale requires it; prefer server-rendered or pre-indexed discovery.

## Explicit Phase 1 Exclusions

- Logged-in customer dashboards
- Supplier portal UX
- Real-time chat or negotiation UI
- Customer-specific pricing calculators

## Delivery Sequence

1. Navigation and global shell
2. Homepage and section hubs
3. Product family and product detail templates
4. Market and insight templates
5. Conversion pages and forms
6. Search and supporting utility pages