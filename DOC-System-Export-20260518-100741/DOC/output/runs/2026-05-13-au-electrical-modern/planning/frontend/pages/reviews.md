---
document_type: per-page-frontend-focus
page_id: reviews
route: /reviews
auth: public
data_source: cms
priority: supporting
build_stage: 4-page-design
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
content_keys_used:
  - reviews.hero.eyebrow
  - reviews.hero.headline
  - reviews.hero.subheadline
  - reviews.main.heading
  - reviews.cta.heading
---

## 1. Page definition
- User intent: validate trust through customer voice and review consistency
- Conversion outcome: call or quote request after proof review
- Primary CTA: brand.phone.href
- Secondary CTA: /quote

## 2. Sections in visual order
### Section 1 - Testimonial-forward opener
- purpose: put social proof at the start of the route
- required content slots: rating cue, review framing, action pair
- draft copy: reviews.hero.headline, reviews.hero.subheadline
- layout blueprint: rating-led opener with one featured testimonial
- surface style: calm paper plus inset proof strip
- interaction: source links optional but not required for conversion
- responsive: featured review remains above fold on mobile
- motion: review-card cascade

### Section 2 - Review clusters
- purpose: show consistency across job types and audiences
- required content slots: customer voice, service context, source confidence
- draft copy: reviews.main.heading, reviews.main.body
- layout blueprint: grouped review cards by homeowner, business, and urgent work themes
- surface style: dense paper card system
- interaction: cards can expand for full text later
- responsive: stacked review cards mobile
- motion: restrained reveal only

### Section 3 - Trust summary and next step
- purpose: connect reviews back to clear action
- required content slots: trust signal cluster, response promise, CTA pair
- draft copy: a short summary that converts praise into booking confidence
- layout blueprint: proof summary strip followed by action row
- surface style: inset summary band
- interaction: call and quote both visible
- responsive: call appears first on mobile
- motion: CTA emphasis only

### Section 4 - Final CTA band
- purpose: capture visitors after proof validation
- required content slots: call path and quote path
- draft copy: reviews.cta.heading, reviews.cta.body
- layout blueprint: compact split band
- surface style: primary band with proof cue chips
- interaction: call first, quote second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton review cards
- empty: fallback to trust strip and projects route
- error: preserve contact pathways
- success: at least one featured review and cluster visible
- offline: call remains dominant

## 4. Accessibility plan
- landmarks: main and supporting proof region
- heading outline: H1 then H2 sections
- focus behavior: testimonial cards reachable in reading order
- contrast: rating chips and proof panels remain AA-compliant

## 5. SEO and metadata
- title: "Electrical Reviews | Electrical Service Provider AU"
- description: "Read customer reviews and testimonials before calling or requesting an electrical quote."
- og fields: rating-led visual and testimonial focus
- canonical: /reviews

## 6. Performance plan
- LCP target: under 2.5s
- hero media strategy: text-led, minimal media
- route JS budget: low
- below-fold defer: extended review lists deferred if needed

## 7. Analytics and conversion path
- key events: review_expand, reviews_call_click, reviews_quote_click
- primary path: review validation -> call
- secondary path: review validation -> quote
