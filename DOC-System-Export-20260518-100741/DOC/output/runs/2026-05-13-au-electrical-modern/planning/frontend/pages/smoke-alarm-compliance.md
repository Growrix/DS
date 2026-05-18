---
document_type: per-page-frontend-focus
page_id: smoke-alarm-compliance
route: /smoke-alarm-compliance
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
  - smoke.hero.eyebrow
  - smoke.hero.headline
  - smoke.hero.subheadline
  - smoke.main.heading
  - smoke.cta.heading
---

## 1. Page definition
- User intent: understand smoke alarm compliance requirements and book support confidently
- Conversion outcome: quote request or call for compliance work
- Primary CTA: /quote
- Secondary CTA: brand.phone.href

## 2. Sections in visual order
### Section 1 - Regulation-aware opener
- purpose: make a compliance topic feel understandable and low-friction
- required content slots: capability map, property-type relevance, trust cluster
- draft copy: smoke.hero.headline, smoke.hero.subheadline
- layout blueprint: centered hero with checklist-style support rail
- surface style: paper plus checklist inset panel
- interaction: quote and call actions visible immediately
- responsive: checklist remains above fold on mobile
- motion: checklist stagger with reduced static reveal

### Section 2 - What compliance support includes
- purpose: clarify service scope for homeowners, landlords, and property managers
- required content slots: property-type fit, service steps, reassurance copy
- draft copy: smoke.main.heading, smoke.main.body
- layout blueprint: service checklist cards grouped by user type
- surface style: clean elevated panels
- interaction: each user-type summary routes toward the same quote path
- responsive: cards stack cleanly on mobile
- motion: restrained entry reveal

### Section 3 - Process and proof
- purpose: show that the work is straightforward and professionally handled
- required content slots: process disclosure, customer reassurance, documentation expectations
- draft copy: explain inspection, upgrade or install, testing, and confirmation steps
- layout blueprint: ordered step strip with proof card
- surface style: inset timeline plus paper proof panel
- interaction: mid-block CTA optional
- responsive: simple stacked steps mobile
- motion: sequential reveal only

### Section 4 - FAQ and objection handling
- purpose: answer timing, scope, and property management concerns
- required content slots: objection handling and pricing posture
- draft copy: plain-language answers on what is checked and how visitors should proceed
- layout blueprint: accordion block with compact support note
- surface style: paper panels
- interaction: CTA held beneath the FAQ cluster
- responsive: first answers remain visible quickly
- motion: accordion reveal

### Section 5 - Final CTA band
- purpose: convert compliance interest into action
- required content slots: quote and call paths
- draft copy: smoke.cta.heading, smoke.cta.body
- layout blueprint: compact split action band
- surface style: primary surface with low-noise support row
- interaction: quote first, call second
- responsive: stacked mobile action order preserved
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton checklist and FAQ blocks
- empty: fallback to basic compliance explainer and contact CTA
- error: preserve phone and quote actions
- success: user-type fit, process, and CTA all visible
- offline: call action prioritized

## 4. Accessibility plan
- landmarks: main and FAQ support region
- heading outline: H1 followed by H2 blocks
- focus behavior: CTA follows explanation flow
- contrast: checklist markers and status labels remain AA-compliant

## 5. SEO and metadata
- title: "Smoke Alarm Compliance | Electrical Service Provider AU"
- description: "Get help with smoke alarm compliance for homes, rentals, and managed properties through a simple quote or call path."
- og fields: checklist-led visual with practical compliance framing
- canonical: /smoke-alarm-compliance

## 6. Performance plan
- LCP target: under 2.6s
- hero media strategy: minimal image or checklist-led hero
- route JS budget: low
- below-fold defer: proof card imagery deferred if present

## 7. Analytics and conversion path
- key events: smoke_quote_click, property_type_select, smoke_call_click
- primary path: checklist -> quote
- secondary path: direct call from opener
