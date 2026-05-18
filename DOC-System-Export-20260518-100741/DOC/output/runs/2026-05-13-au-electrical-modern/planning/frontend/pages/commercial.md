---
document_type: per-page-frontend-focus
page_id: commercial
route: /commercial
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
  - commercial.hero.eyebrow
  - commercial.hero.headline
  - commercial.hero.subheadline
  - commercial.main.heading
  - commercial.proof.heading
  - commercial.cta.heading
---

## 1. Page definition
- User intent: verify this provider can handle business, strata, or scheduled works professionally
- Conversion outcome: assessment call or qualified commercial enquiry
- Primary CTA: /quote
- Secondary CTA: brand.phone.href

## 2. Sections in visual order
### Section 1 - Capability opener
- purpose: position the business as dependable for commercial environments
- required content slots: sector relevance, compliance tone, multi-channel conversion
- draft copy: commercial.hero.headline, commercial.hero.subheadline
- layout blueprint: structured split hero with metrics rail and site image
- surface style: paper plus inset metrics and a sharper visual hierarchy than residential
- interaction: assessment route and call route both visible
- responsive: metrics collapse into chips on mobile
- motion: metrics-then-capability reveal

### Section 2 - Sector and scope map
- purpose: show where the team fits operationally
- required content slots: sector examples, maintenance, fit-outs, upgrades, scheduled works
- draft copy: commercial.main.heading, commercial.main.body
- layout blueprint: sector cards plus scope rows
- surface style: denser panel system than home or residential
- interaction: each sector routes to contact or quote with prefilled context later
- responsive: cards stack without losing proof labels
- motion: restrained card cascade

### Section 3 - Proof that matters to business buyers
- purpose: reinforce reliability and communication discipline
- required content slots: customer voice, project outcomes, response commitment
- draft copy: commercial.proof.heading, commercial.proof.body
- layout blueprint: featured case summary with secondary proof stats
- surface style: inset case panel and paper stat cards
- interaction: deep-link to projects or contact
- responsive: case summary leads on mobile
- motion: proof panel fade and metric emphasis

### Section 4 - Engagement model and expectations
- purpose: clarify how enquiries, site checks, and scheduled works are handled
- required content slots: process disclosure, availability posture, pricing posture
- draft copy: explain call-back, scope validation, site attendance, and documentation expectations
- layout blueprint: ordered operational timeline with side notes
- surface style: structured inset strip
- interaction: mid-section assessment CTA available
- responsive: timeline collapses into numbered stack
- motion: sequential reveal only

### Section 5 - Final CTA band
- purpose: convert trust into commercial contact
- required content slots: assessment CTA, direct phone fallback
- draft copy: commercial.cta.heading, commercial.cta.body
- layout blueprint: split band with one stronger business-action card
- surface style: darker primary treatment allowed, still trust-safe
- interaction: quote first, call second
- responsive: stacked actions with business-oriented copy preserved
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton sector cards and featured case panel
- empty: fallback to direct contact plus sector summary
- error: preserve phone and contact pathway
- success: proof and scope both visible
- offline: direct call path visually amplified

## 4. Accessibility plan
- landmarks: main, proof region, supporting process region
- heading outline: one H1 with clear H2 sequence
- focus behavior: sector cards, CTA, and proof links follow reading logic
- contrast: denser commercial panels maintain AA across themes

## 5. SEO and metadata
- title: seo.commercial.title
- description: seo.commercial.description
- og fields: commercial site or fit-out proof imagery
- canonical: /commercial

## 6. Performance plan
- LCP target: under 2.7s
- hero media strategy: optimized site image, no video
- route JS budget: low to moderate
- below-fold defer: secondary proof imagery deferred

## 7. Analytics and conversion path
- key events: commercial_assessment_click, sector_select, case_proof_click, commercial_call_click
- primary path: sector -> assessment enquiry
- secondary path: direct call after proof review
