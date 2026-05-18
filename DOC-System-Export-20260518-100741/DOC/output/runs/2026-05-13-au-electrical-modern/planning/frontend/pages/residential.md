---
document_type: per-page-frontend-focus
page_id: residential
route: /residential
auth: public
data_source: cms
priority: primary
build_stage: 4-page-design
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
content_keys_used:
  - residential.hero.eyebrow
  - residential.hero.headline
  - residential.hero.subheadline
  - residential.main.heading
  - residential.proof.heading
  - residential.cta.heading
---

## 1. Page definition
- User intent: decide if this team is right for work at home
- Conversion outcome: quote request or phone call for domestic electrical work
- Primary CTA: /quote
- Secondary CTA: brand.phone.href

## 2. Sections in visual order
### Section 1 - Homeowner-trust opener
- purpose: connect service scope to familiar household situations
- required content slots: locality outcome statement, capability map, trust signal cluster
- draft copy: residential.hero.headline, residential.hero.subheadline
- layout blueprint: warm split hero with reassurance chips and home-context media
- surface style: paper plus overlay media panel
- interaction: quote first, call second
- responsive: CTA cluster sits above imagery on mobile
- motion: copy-first trust-chip fade

### Section 2 - Common residential jobs
- purpose: show the work types homeowners actually recognise
- required content slots: lighting, fault finding, switchboards, smoke alarms, EV chargers, renovations
- draft copy: residential.main.heading, residential.main.body
- layout blueprint: icon-led card grid
- surface style: elevated cards with softer shadow posture
- interaction: each item deep-links or anchors to quote
- responsive: stacked mobile cards with clear tap targets
- motion: hover lift only where appropriate

### Section 3 - Trust and reassurance block
- purpose: reduce fear around safety, cleanliness, and communication
- required content slots: customer voice, guarantee, privacy, communication promise
- draft copy: residential.proof.heading, residential.proof.body
- layout blueprint: testimonial-led panel with companion trust facts
- surface style: inset reassurance band plus paper quote panel
- interaction: review source links optional
- responsive: proof panel leads on mobile
- motion: light reveal only

### Section 4 - What happens after enquiry
- purpose: make the next steps predictable
- required content slots: process disclosure, response expectations, quote posture
- draft copy: plain-language step summary covering call-back, scope check, and booking path
- layout blueprint: three-step sequence
- surface style: structured inset cards
- interaction: last step routes to quote or call
- responsive: mobile keeps step numbers prominent
- motion: sequential reveal with reduced static steps

### Section 5 - Final CTA band
- purpose: convert reassurance into action
- required content slots: primary and alternate conversion paths
- draft copy: residential.cta.heading, residential.cta.body
- layout blueprint: compact split band
- surface style: primary background with clear action separation
- interaction: quote first, call second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton service cards and testimonial panel
- empty: fallback to quote path with simpler trust copy
- error: show contact fallback with reassuring messaging
- success: all residential categories visible
- offline: call option visually prioritized

## 4. Accessibility plan
- landmarks: main, supporting trust region
- heading outline: H1 then H2 blocks
- focus behavior: cards and actions follow top-to-bottom homeowner journey
- contrast: reassurance chips remain readable over home imagery

## 5. SEO and metadata
- title: seo.residential.title
- description: seo.residential.description
- og fields: residential work imagery
- canonical: /residential

## 6. Performance plan
- LCP target: under 2.5s
- hero media strategy: single optimized domestic-work photo
- route JS budget: low marketing payload
- below-fold defer: review imagery deferred

## 7. Analytics and conversion path
- key events: residential_quote_click, residential_call_click, domestic_service_select
- primary path: service card -> quote
- secondary path: direct call from opener or final band
