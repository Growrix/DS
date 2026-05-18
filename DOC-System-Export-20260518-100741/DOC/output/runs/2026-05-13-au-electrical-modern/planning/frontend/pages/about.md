---
document_type: per-page-frontend-focus
page_id: about
route: /about
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
  - about.hero.eyebrow
  - about.hero.headline
  - about.hero.subheadline
  - about.main.heading
  - about.cta.heading
---

## 1. Page definition
- User intent: understand who the team is and why their standards are trustworthy
- Conversion outcome: call or quote request after trust-building
- Primary CTA: brand.phone.href
- Secondary CTA: /quote

## 2. Sections in visual order
### Section 1 - Team-and-standards opener
- purpose: humanise the business without becoming vague or sentimental
- required content slots: standards statement, team framing, conversion pair
- draft copy: about.hero.headline, about.hero.subheadline
- layout blueprint: team-and-standards split with portrait-friendly media frame
- surface style: paper plus inset standards card
- interaction: call and quote actions visible without scrolling
- responsive: copy leads, media follows on mobile
- motion: portrait-then-copy reveal

### Section 2 - What builds trust here
- purpose: make business values concrete and usable
- required content slots: workmanship values, communication posture, safety standards
- draft copy: about.main.heading, about.main.body
- layout blueprint: three or four standards panels with direct language
- surface style: elevated cards with restrained accent use
- interaction: optional links to projects or services
- responsive: stacked cards mobile
- motion: restrained card reveal

### Section 3 - Experience and proof cues
- purpose: connect the team story back to real job delivery
- required content slots: project proof, customer voice, service-area reassurance
- draft copy: short proof-led summary with one customer quote or project outcome
- layout blueprint: proof strip with supporting text panel
- surface style: inset proof band plus paper support card
- interaction: proof routes to projects or reviews
- responsive: proof strip becomes vertical stack on mobile
- motion: subtle reveal only

### Section 4 - How the team works
- purpose: show process, responsiveness, and communication discipline
- required content slots: process disclosure and next-step reassurance
- draft copy: concise outline of how calls, quotes, bookings, and handover are handled
- layout blueprint: ordered work-style steps
- surface style: structured inset cards
- interaction: each step can end in quote or contact action
- responsive: stacked steps mobile
- motion: sequential reveal

### Section 5 - Final CTA band
- purpose: convert team trust into contact
- required content slots: phone and quote paths
- draft copy: about.cta.heading, about.cta.body
- layout blueprint: split action band
- surface style: primary band with low-noise trust chips
- interaction: call first, quote second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton standard cards and proof strip
- empty: fallback to simplified team story and contact actions
- error: preserve call and quote paths
- success: standards, proof, and next steps visible
- offline: call path dominant

## 4. Accessibility plan
- landmarks: main and supporting proof region
- heading outline: H1 then H2s in trust-building order
- focus behavior: standards panels and CTAs follow narrative flow
- contrast: portrait overlays and standards cards stay AA-safe

## 5. SEO and metadata
- title: "About the Electrical Team | Electrical Service Provider AU"
- description: "Learn how the team works, what standards they stand behind, and how to contact them for electrical help."
- og fields: authentic team imagery and standards framing
- canonical: /about

## 6. Performance plan
- LCP target: under 2.6s
- hero media strategy: authentic portrait or work-site team image
- route JS budget: low
- below-fold defer: secondary proof elements can defer

## 7. Analytics and conversion path
- key events: about_call_click, about_quote_click, about_proof_route_click
- primary path: team trust -> call
- secondary path: standards -> quote
