---
document_type: per-page-frontend-focus
page_id: services
route: /services
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
  - services.hero.eyebrow
  - services.hero.headline
  - services.hero.subheadline
  - services.main.heading
  - services.proof.heading
  - services.cta.heading
---

## 1. Page definition
- User intent: understand service breadth and choose the right next route or contact action
- Conversion outcome: route user to residential, commercial, or specialist service inquiry
- Primary CTA: brand.phone.href
- Secondary CTA: /quote

## 2. Sections in visual order
### Section 1 - Category-led opener
- purpose: explain the service architecture quickly
- required content slots: capability map, locality statement, multi-channel conversion
- draft copy: services.hero.headline, services.hero.subheadline
- layout blueprint: centered editorial hero with compact trust line below
- surface style: paper plus subtle overlay frame
- interaction: call and quote remain visible beside or below intro
- responsive: hero condenses to single-column without losing category cues
- motion: headline-first then grid cascade

### Section 2 - Service category map
- purpose: segment the service universe into understandable groups
- required content slots: residential, commercial, emergency, specialist upgrades
- draft copy: services.main.heading, services.main.body
- layout blueprint: 2x2 anchor cards desktop, stacked cards mobile
- surface style: elevated category cards
- interaction: every category routes deeper
- responsive: summaries stay visible before tap
- motion: card stagger on entry

### Section 3 - Proof and trust block
- purpose: reinforce why the team is credible across service types
- required content slots: customer voice, response promise, workmanship reassurance
- draft copy: services.proof.heading, services.proof.body
- layout blueprint: one featured quote panel plus stacked trust facts
- surface style: inset plus paper cards
- interaction: proof links out to reviews or projects
- responsive: featured quote remains first on mobile
- motion: restrained reveal only

### Section 4 - Process and expectations
- purpose: clarify what happens after enquiry
- required content slots: process disclosure, pricing posture, response expectations
- draft copy: practical timeline and what information the team needs to quote correctly
- layout blueprint: 4-step sequence desktop, stacked step cards mobile
- surface style: clean inset timeline
- interaction: final step points to quote route
- responsive: copy trims before visual structure changes
- motion: sequential reveal with reduced static list

### Section 5 - Final CTA band
- purpose: convert service browsers into action
- required content slots: call path, quote path, reassurance copy
- draft copy: services.cta.heading, services.cta.body
- layout blueprint: compact split band desktop, stacked actions mobile
- surface style: primary band with support chip row
- interaction: call first for uncertain users, quote second for planned jobs
- responsive: action order preserved
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton cards for category map and proof panels
- empty: if service content is incomplete, fallback to major routes only
- error: service list failure still preserves contact actions
- success: all core categories visible
- offline: quote action remains but call path becomes visually dominant

## 4. Accessibility plan
- landmarks: main service overview and supplementary proof region
- heading outline: H1 for opener, H2 per major section
- focus behavior: category cards are reachable in logical order
- contrast: trust strip and CTA band must meet AA in both themes

## 5. SEO and metadata
- title: seo.services.title
- description: seo.services.description
- og fields: service category overview imagery
- canonical: /services

## 6. Performance plan
- LCP target: under 2.5s
- hero media strategy: lightweight, non-video image panel
- route JS budget: modest; keep category map server-rendered where possible
- below-fold defer: deeper proof imagery deferred

## 7. Analytics and conversion path
- key events: category_select, services_call_click, services_quote_click, proof_route_click
- primary path: category select -> service detail -> quote or call
- secondary path: direct call from services overview
