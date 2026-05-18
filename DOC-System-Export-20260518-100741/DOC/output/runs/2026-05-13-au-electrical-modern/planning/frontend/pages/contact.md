---
document_type: per-page-frontend-focus
page_id: contact
route: /contact
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
  - contact.hero.eyebrow
  - contact.hero.headline
  - contact.hero.subheadline
  - contact.main.heading
  - contact.cta.heading
---

## 1. Page definition
- User intent: reach the business through the fastest or most appropriate contact path
- Conversion outcome: phone call first, alternate message or quote second
- Primary CTA: brand.phone.href
- Secondary CTA: /quote

## 2. Sections in visual order
### Section 1 - Contact-channel opener
- purpose: make the right communication path obvious immediately
- required content slots: phone, hours, email, service area cue, CTA pair
- draft copy: contact.hero.headline, contact.hero.subheadline
- layout blueprint: contact-channel split with utility panels and strong phone priority
- surface style: paper plus inset utility cards
- interaction: phone CTA highest emphasis; quote CTA secondary
- responsive: phone, hours, and service area appear before secondary details on mobile
- motion: channel-card emphasis with reduced static reveal

### Section 2 - Direct contact options
- purpose: show exactly how to get in touch and what each path is for
- required content slots: phone, hours, email, service area confirmation, urgency cue
- draft copy: contact.main.heading, contact.main.body
- layout blueprint: three or four utility panels with one stronger primary contact panel
- surface style: elevated cards with clear hierarchy
- interaction: tap-to-call, tap-to-email, route to quote
- responsive: full-width contact panels mobile
- motion: restrained panel reveal

### Section 3 - Quote and enquiry support
- purpose: explain when to call versus when to use the quote form
- required content slots: conversion guidance, privacy reassurance, response expectations
- draft copy: short guidance on urgent calls versus planned work quote requests
- layout blueprint: split note panel with supporting trust chips
- surface style: inset guidance band
- interaction: deep-link to quote route
- responsive: stacked layout mobile
- motion: subtle reveal only

### Section 4 - Service area confirmation and FAQ
- purpose: reduce last-mile uncertainty before action
- required content slots: suburb confirmation guidance, response expectations, objection handling
- draft copy: short answers about coverage and callback timing
- layout blueprint: compact FAQ plus area confirmation note
- surface style: clean paper stack
- interaction: call CTA repeated beneath this block
- responsive: key answers surface early on mobile
- motion: accordion reveal where needed

### Section 5 - Final CTA band
- purpose: reinforce the fastest action path
- required content slots: call path and quote path
- draft copy: contact.cta.heading, contact.cta.body
- layout blueprint: compact split action band
- surface style: primary band with utility cue chips
- interaction: call first, quote second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton contact cards and FAQ blocks
- empty: fallback to phone, email, and service area summary only
- error: preserve phone path no matter what
- success: all contact options visible and prioritised
- offline: phone and email remain primary actions

## 4. Accessibility plan
- landmarks: main and FAQ support region
- heading outline: H1 then H2 sections
- focus behavior: utility panels follow importance order, phone first
- contrast: utility cards and CTA band AA-compliant in both themes

## 5. SEO and metadata
- title: "Contact an Electrician | Electrical Service Provider AU"
- description: "Call, email, or request a quote through the right contact path for urgent or planned electrical work."
- og fields: utility-led contact framing
- canonical: /contact

## 6. Performance plan
- LCP target: under 2.4s
- hero media strategy: no heavy media required
- route JS budget: minimal
- below-fold defer: minimal

## 7. Analytics and conversion path
- key events: contact_call_click, contact_email_click, contact_quote_route_click
- primary path: contact -> call
- secondary path: contact -> quote
