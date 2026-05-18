---
document_type: per-page-frontend-focus
page_id: quote
route: /quote
auth: public
data_source: mixed
priority: primary
build_stage: 4-page-design
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
content_keys_used:
  - quote.hero.eyebrow
  - quote.hero.headline
  - quote.hero.subheadline
  - quote.main.heading
  - quote.cta.heading
---

## 1. Page definition
- User intent: submit a qualified enquiry with minimal friction
- Conversion outcome: successful quote request submission
- Primary CTA: component.quote_form.submit
- Secondary CTA: brand.phone.href

## 2. Sections in visual order
### Section 1 - Form-first opener
- purpose: reassure users they only need to submit the basics
- required content slots: short-form promise, trust cluster, conversion pair
- draft copy: quote.hero.headline, quote.hero.subheadline
- layout blueprint: form-first split with reassurance rail and no decorative clutter
- surface style: paper plus inset reassurance column
- interaction: form visible above fold, call fallback beside it
- responsive: form leads immediately on mobile, reassurance follows
- motion: form-card-first reveal with reduced static mount

### Section 2 - Short quote form surface
- purpose: capture service type, contact details, postcode, and short job summary
- required content slots: form labels, validation copy, privacy reassurance, success copy
- draft copy: quote.main.heading, quote.main.body
- layout blueprint: compact single-column form with grouped practical fields
- surface style: elevated paper form surface with strong focus treatment
- interaction: validation inline, success state non-disruptive, phone fallback always available
- responsive: large touch targets and input order optimized for mobile keyboards
- motion: inline validation appear only

### Section 3 - What happens next
- purpose: reduce anxiety after submission
- required content slots: response expectations, triage or quoting posture, privacy reassurance
- draft copy: explain when the team will call back, what may be clarified, and how urgent jobs should call instead
- layout blueprint: simple three-step response strip
- surface style: inset process band
- interaction: phone fallback repeated for urgent cases
- responsive: stacked steps mobile
- motion: restrained sequential reveal

### Section 4 - Trust and FAQ support
- purpose: handle last-minute hesitation without derailing form completion
- required content slots: trust signal cluster, short FAQ, customer reassurance
- draft copy: short answers on information needed, suburb confirmation, and response timing
- layout blueprint: compact FAQ beside or below trust chips
- surface style: paper support block
- interaction: disclosure pattern if needed, but form stays primary
- responsive: support block follows form and process on mobile
- motion: accordion reveal only where needed

### Section 5 - Alternate contact CTA band
- purpose: keep a no-form path for high-intent callers
- required content slots: call path and service-hours reassurance
- draft copy: quote.cta.heading, quote.cta.body
- layout blueprint: compact secondary action band
- surface style: primary band with phone-forward action card
- interaction: call path strongest after form
- responsive: full-width phone action mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: form skeleton only if server-rendered data is delayed; call fallback visible immediately
- empty: not applicable
- error: preserve entered values and show phone fallback clearly
- success: component.quote_form.success_title and component.quote_form.success_body shown inline
- offline: disable submission and promote phone path

## 4. Accessibility plan
- landmarks: main and supporting FAQ region
- heading outline: H1 then H2 sections
- focus behavior: errors announced, first invalid field focused, success state announced politely
- contrast: form field borders, focus ring, and inline errors exceed AA and visible focus standards

## 5. SEO and metadata
- title: seo.quote.title
- description: seo.quote.description
- og fields: form-first trust framing
- canonical: /quote

## 6. Performance plan
- LCP target: under 2.3s
- hero media strategy: none or minimal supporting image
- route JS budget: low to moderate because of client-side validation
- below-fold defer: FAQ support can defer if necessary

## 7. Analytics and conversion path
- key events: quote_form_start, quote_form_submit, quote_form_success, quote_call_fallback_click
- primary path: form submit -> success
- secondary path: phone fallback
