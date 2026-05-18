---
document_type: per-page-frontend-focus
page_id: faq
route: /faq
auth: public
data_source: static
priority: supporting
build_stage: 4-page-design
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
content_keys_used:
  - faq.hero.eyebrow
  - faq.hero.headline
  - faq.hero.subheadline
  - faq.main.heading
  - faq.cta.heading
---

## 1. Page definition
- User intent: remove booking friction by answering common questions fast
- Conversion outcome: move hesitant users to call or quote
- Primary CTA: brand.phone.href
- Secondary CTA: /quote

## 2. Sections in visual order
### Section 1 - Utility opener
- purpose: explain that this route exists to remove uncertainty
- required content slots: friction summary, conversion pair
- draft copy: faq.hero.headline, faq.hero.subheadline
- layout blueprint: compact utility intro with trust-support strip
- surface style: clean paper intro with minimal media
- interaction: call and quote actions visible immediately
- responsive: no visual complexity added on mobile
- motion: minimal text reveal only

### Section 2 - Core question groups
- purpose: group questions by booking, pricing posture, timing, and service area
- required content slots: objection handling, pricing posture, response expectations
- draft copy: faq.main.heading, faq.main.body
- layout blueprint: grouped disclosure stacks with short category labels
- surface style: dense paper panels for utility clarity
- interaction: keyboard-safe accordion behavior
- responsive: groups stack vertically on mobile
- motion: accordion reveal only

### Section 3 - Still-not-sure reassurance
- purpose: turn lingering hesitation into a simple action
- required content slots: trust cue, reassurance copy, contact pathway
- draft copy: one short note that phone is best for urgent clarification and quote form is best for planned jobs
- layout blueprint: compact reassurance strip
- surface style: inset support band
- interaction: paired actions below the note
- responsive: call action first on mobile
- motion: CTA emphasis only

### Section 4 - Final CTA band
- purpose: close the route with clear next steps
- required content slots: phone and quote paths
- draft copy: faq.cta.heading, faq.cta.body
- layout blueprint: compact split band
- surface style: primary band with low-noise support row
- interaction: call first, quote second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton disclosure rows
- empty: fallback to contact route and short reassurance copy
- error: preserve call and quote actions
- success: grouped questions visible with direct next step
- offline: call path dominant

## 4. Accessibility plan
- landmarks: main and support region
- heading outline: H1 then grouped H2 sections
- focus behavior: accordion controls keyboard-navigable with clear state labels
- contrast: dense utility panels remain readable

## 5. SEO and metadata
- title: "Electrical FAQ | Electrical Service Provider AU"
- description: "Get quick answers on bookings, response times, service areas, and electrical quote requests."
- og fields: utility-led layout with trust cue
- canonical: /faq

## 6. Performance plan
- LCP target: under 2.4s
- hero media strategy: none required
- route JS budget: minimal
- below-fold defer: not applicable

## 7. Analytics and conversion path
- key events: faq_expand, faq_call_click, faq_quote_click
- primary path: answer found -> call
- secondary path: answer found -> quote
