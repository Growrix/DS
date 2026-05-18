---
document_type: per-page-frontend-focus
page_id: ev-charger-installation
route: /ev-charger-installation
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
  - ev.hero.eyebrow
  - ev.hero.headline
  - ev.hero.subheadline
  - ev.main.heading
  - ev.cta.heading
---

## 1. Page definition
- User intent: understand EV charger installation fit, confidence, and next steps
- Conversion outcome: quote request for home or business charging install
- Primary CTA: /quote
- Secondary CTA: brand.phone.href

## 2. Sections in visual order
### Section 1 - Future-ready opener
- purpose: position the service as practical, modern, and trustworthy
- required content slots: capability map, home and business fit, trust cluster
- draft copy: ev.hero.headline, ev.hero.subheadline
- layout blueprint: media-led split with cleaner, more airy rhythm than other specialist routes
- surface style: paper plus overlay media frame
- interaction: quote action prioritized, call secondary
- responsive: copy and CTA appear before media on mobile
- motion: media-frame-first then copy reveal

### Section 2 - Charger use-case map
- purpose: help users identify the right install context
- required content slots: home charging, commercial or fleet context, property considerations
- draft copy: ev.main.heading, ev.main.body
- layout blueprint: use-case cards with icon and practical notes
- surface style: elevated modern cards with restrained accent usage
- interaction: each card supports the same quote path
- responsive: stacked cards mobile, no hover dependency
- motion: hover lift where appropriate

### Section 3 - Installation process and reassurance
- purpose: explain assessment, electrical fit, and installation path clearly
- required content slots: process disclosure, safety reassurance, practical expectations
- draft copy: explain site review, charging needs, cabling path, and commissioning in plain terms
- layout blueprint: step rail with supporting proof panel
- surface style: inset timeline and paper proof card
- interaction: proof panel can link to projects later
- responsive: process stays linear on mobile
- motion: step reveal only

### Section 4 - FAQ and confidence block
- purpose: address cost posture, compatibility, and property-type concerns
- required content slots: objection handling and customer voice
- draft copy: concise answers and one short reassurance quote
- layout blueprint: accordion plus compact proof card
- surface style: paper panels with low visual noise
- interaction: CTA remains visible below the accordion
- responsive: first answer visible quickly on mobile
- motion: accordion reveal

### Section 5 - Final CTA band
- purpose: turn curiosity into action
- required content slots: quote path, call fallback
- draft copy: ev.cta.heading, ev.cta.body
- layout blueprint: split band with one primary action cluster
- surface style: primary band with lighter support chips
- interaction: quote first, call second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton use-case cards and process strip
- empty: fallback to simplified service explanation and quote CTA
- error: preserve phone and quote actions
- success: clear install-fit story and next step
- offline: call option becomes primary visual action

## 4. Accessibility plan
- landmarks: main, FAQ support region
- heading outline: H1 then H2 blocks
- focus behavior: cards and CTAs follow user decision sequence
- contrast: modern accent usage stays below overload threshold and preserves AA

## 5. SEO and metadata
- title: "EV Charger Installation | Electrical Service Provider AU"
- description: "Request an EV charger installation quote for your home or business with clear next steps and practical advice."
- og fields: EV install imagery with clean trust-led framing
- canonical: /ev-charger-installation

## 6. Performance plan
- LCP target: under 2.6s
- hero media strategy: single optimized charger installation image
- route JS budget: low
- below-fold defer: supporting proof elements can defer

## 7. Analytics and conversion path
- key events: ev_quote_click, ev_usecase_select, ev_call_click
- primary path: use-case -> quote
- secondary path: direct quote from hero
