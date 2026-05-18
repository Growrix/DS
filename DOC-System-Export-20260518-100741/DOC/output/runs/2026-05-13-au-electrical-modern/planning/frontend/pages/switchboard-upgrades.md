---
document_type: per-page-frontend-focus
page_id: switchboard-upgrades
route: /switchboard-upgrades
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
  - switchboard.hero.eyebrow
  - switchboard.hero.headline
  - switchboard.hero.subheadline
  - switchboard.main.heading
  - switchboard.cta.heading
---

## 1. Page definition
- User intent: understand whether a switchboard upgrade is needed and who to trust with it
- Conversion outcome: quote request for inspection or upgrade
- Primary CTA: /quote
- Secondary CTA: brand.phone.href

## 2. Sections in visual order
### Section 1 - Technical-proof opener
- purpose: make a potentially technical service feel understandable and important
- required content slots: capability map, risk clarification, trust signals
- draft copy: switchboard.hero.headline, switchboard.hero.subheadline
- layout blueprint: technical image plus explanatory panel split
- surface style: paper plus precision-led card treatment
- interaction: quote and call actions visible in hero
- responsive: explanation panel leads above image on mobile
- motion: feature-card stagger

### Section 2 - Why upgrades matter
- purpose: translate safety and reliability concerns into plain language
- required content slots: common warning signs, compliance orientation, practical value
- draft copy: switchboard.main.heading, switchboard.main.body
- layout blueprint: icon-led explainer grid
- surface style: inset fact cards
- interaction: warning sign items can anchor toward FAQ or quote
- responsive: stacked cards mobile
- motion: restrained reveal only

### Section 3 - Upgrade proof and process
- purpose: show competence and reduce fear around scope
- required content slots: process disclosure, customer voice, reassurance on disruption and handover
- draft copy: explain assessment, recommendation, work, and testing stages
- layout blueprint: four-step process with proof side panel
- surface style: paper plus inset timeline
- interaction: quote CTA after process block
- responsive: timeline compresses cleanly to mobile stack
- motion: sequential reveal with reduced static list

### Section 4 - FAQ and objection handling
- purpose: handle price posture, downtime worries, and property-type fit
- required content slots: objection handling and safety reassurance
- draft copy: concise answers on signs of need, site attendance, and next steps
- layout blueprint: compact accordion block
- surface style: clean paper panels
- interaction: disclosure with preserved CTA below
- responsive: first answers visible quickly
- motion: accordion reveal

### Section 5 - Final CTA band
- purpose: turn technical understanding into action
- required content slots: quote path and call fallback
- draft copy: switchboard.cta.heading, switchboard.cta.body
- layout blueprint: compact action band
- surface style: strong primary band with bright action contrast
- interaction: quote first, call second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton explainer cards and process strip
- empty: fallback to trust copy and quote CTA
- error: preserve call path and simplified service summary
- success: service explanation and next-step clarity visible
- offline: quote action de-emphasized, call amplified

## 4. Accessibility plan
- landmarks: main, FAQ support region
- heading outline: H1 then H2 blocks
- focus behavior: CTA order follows explanation flow
- contrast: technical cards and badges remain readable in both themes

## 5. SEO and metadata
- title: "Switchboard Upgrades | Electrical Service Provider AU"
- description: "Learn when a switchboard upgrade may be needed and request a quote for safer, more reliable power."
- og fields: switchboard proof image and practical value copy
- canonical: /switchboard-upgrades

## 6. Performance plan
- LCP target: under 2.6s
- hero media strategy: single optimized technical image
- route JS budget: low
- below-fold defer: FAQ and supporting proof deferred if needed

## 7. Analytics and conversion path
- key events: switchboard_quote_click, switchboard_warning_sign_click, switchboard_call_click
- primary path: explanation -> quote
- secondary path: direct call from hero
