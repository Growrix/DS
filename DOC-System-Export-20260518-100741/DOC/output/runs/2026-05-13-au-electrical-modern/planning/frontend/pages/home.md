---
document_type: per-page-frontend-focus
page_id: home
route: /
auth: public
data_source: mixed
priority: flagship
build_stage: 4-page-design
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
content_keys_used:
  - home.hero.eyebrow
  - home.hero.headline
  - home.hero.subheadline
  - home.trust.heading
  - home.split.heading
  - home.services.heading
  - home.proof.heading
  - home.process.heading
  - home.faq.heading
  - home.cta.heading
---

## 1. Page definition
- User intent: quickly decide whether this electrical business is trustworthy, local, and relevant
- Conversion outcome: phone call first, quote request second
- Primary CTA: home.hero.cta_primary -> call action
- Secondary CTA: home.hero.cta_secondary -> /quote

## 2. Sections in visual order
### Section 1 - Full-bleed opener
- purpose: establish locality, credibility, and immediate action path
- required content slots: locality outcome statement, trust signal cluster, multi-channel conversion
- draft copy: headline from home.hero.headline, subheadline from home.hero.subheadline, CTA labels from home.hero.cta_primary and home.hero.cta_secondary
- layout blueprint: desktop asymmetric 7/5 split with proof rail, tablet stacked split, mobile single-column with CTA cluster above media
- surface style: overlay-backed media with dark trust chips and high-contrast text
- interaction: phone CTA leads, quote CTA secondary, trust chips non-modal
- responsive: proof rail collapses below CTA on mobile
- motion: restrained-cinematic stagger, reduced to immediate reveal

### Section 2 - Rating and trust strip
- purpose: prove credibility without forcing extra scrolling
- required content slots: review aggregate, response promise, license and service-area cues
- draft copy: heading from home.trust.heading, support line from home.trust.body
- layout blueprint: inset horizontal strip desktop, two-row grid tablet, stacked chips mobile
- surface style: inset surface with crisp borders
- interaction: proof items may deep-link to reviews or contact
- responsive: keep phone and response promise visible in first row on small screens
- motion: section reveal with optional metric count-up

### Section 3 - Residential vs commercial decision block
- purpose: route distinct audiences into the right path fast
- required content slots: capability map, user-type split, alternate CTAs
- draft copy: heading from home.split.heading, body from home.split.body
- layout blueprint: desktop dual-panel comparison, tablet stacked cards, mobile swipe-safe vertical stack
- surface style: paper plus panel with one warmer residential side and one sharper commercial side
- interaction: each panel links deeper to route-specific pages
- responsive: no hover-only reveal; all panel summaries visible by default
- motion: hover lift only on supported devices

### Section 4 - Specialist services overview
- purpose: capture search-intent visitors who land on home
- required content slots: capability map for switchboards, EV chargers, smoke alarms, emergency, maintenance
- draft copy: heading from home.services.heading, body from home.services.body
- layout blueprint: 3-up grid desktop, 2-up tablet, stacked cards mobile
- surface style: elevated service panels with category icons
- interaction: each item links to its specialist route
- responsive: card action hint remains visible on touch devices
- motion: grid cascade on entry, reduced to static reveal

### Section 5 - Featured outcomes and project proof
- purpose: show completed work and results rather than generic claims
- required content slots: local proof, customer voice, project outcomes
- draft copy: heading from home.proof.heading, body from home.proof.body
- layout blueprint: feature project panel plus supporting proof cards desktop, stacked highlight mobile
- surface style: paper plus overlay image panels
- interaction: project surfaces deep-link to /projects
- responsive: first project summary visible above fold continuation on mobile
- motion: image-grid cascade with reduced-motion fade

### Section 6 - Process and response expectations
- purpose: reduce uncertainty after conversion intent appears
- required content slots: process disclosure, response timing, reassurance copy
- draft copy: heading from home.process.heading, body from home.process.body
- layout blueprint: timeline strip desktop, stepped cards tablet, stacked sequence mobile
- surface style: inset panels with number markers
- interaction: each step may anchor to quote or contact route
- responsive: compress copy length before reducing step count
- motion: sequential reveal, reduced to static ordered list

### Section 7 - FAQ and objection handling
- purpose: answer friction points around timing, scope, and service area
- required content slots: objection handling, pricing posture, response expectations
- draft copy: heading from home.faq.heading, body from home.faq.body
- layout blueprint: two-column FAQ desktop, single-column mobile
- surface style: clean paper panels with strong border separation
- interaction: disclosure behavior with quote CTA preserved below
- responsive: keep at least first two answers visible without excessive scrolling
- motion: accordion reveal with reduced instant open

### Section 8 - Final CTA band
- purpose: close the route with simple action choice
- required content slots: multi-channel conversion, response reassurance
- draft copy: heading from home.cta.heading, body from home.cta.body
- layout blueprint: centered split copy and actions desktop, stacked mobile
- surface style: primary-surface band with lighter inset action cards
- interaction: call first, quote second
- responsive: call action remains first in source order and visual order
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton for trust strip, service cards, proof cards, and FAQ blocks
- empty: if proof content is unavailable, fall back to review aggregate and stronger trust copy
- error: preserve phone and quote CTA with explanatory recovery message
- success: all sections render with no hidden conversion path
- offline: quote CTA changes to call-fallback emphasis

## 4. Accessibility plan
- landmarks: header, main, complementary proof region, footer
- heading outline: one H1, section H2s, FAQ H3 triggers
- focus behavior: skip-link lands before opener text; CTA order preserved
- contrast: hero text and chips must meet AA over actual media and overlays

## 5. SEO and metadata
- title: seo.home.title
- description: seo.home.description
- og fields: use hero framing and trust-led summary
- canonical: /

## 6. Performance plan
- LCP target: under 2.5s on mid-range mobile
- hero media strategy: one optimized 16:9 image with fallback
- route JS budget: low marketing payload with deferred proof grids
- below-fold defer: proof imagery and deeper review surfaces can lazy-load

## 7. Analytics and conversion path
- key events: hero_call_click, hero_quote_click, audience_split_select, featured_project_open, final_cta_click
- primary path: hero -> call
- secondary path: specialist service -> quote
