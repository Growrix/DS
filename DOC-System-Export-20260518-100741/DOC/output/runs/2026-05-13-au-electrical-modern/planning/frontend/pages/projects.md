---
document_type: per-page-frontend-focus
page_id: projects
route: /projects
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
  - projects.hero.eyebrow
  - projects.hero.headline
  - projects.hero.subheadline
  - projects.main.heading
  - projects.cta.heading
---

## 1. Page definition
- User intent: validate workmanship through completed job examples
- Conversion outcome: move visitors from proof review to quote or call
- Primary CTA: /quote
- Secondary CTA: brand.phone.href

## 2. Sections in visual order
### Section 1 - Proof-led opener
- purpose: frame projects as decision proof, not portfolio vanity
- required content slots: outcome statement, trust framing, CTA pair
- draft copy: projects.hero.headline, projects.hero.subheadline
- layout blueprint: standout project image with supporting outcome tags
- surface style: overlay-backed gallery proof frame
- interaction: primary proof item can deep-link into case detail later
- responsive: first project proof remains visible early on mobile
- motion: image-grid cascade with reduced fade

### Section 2 - Featured project outcomes
- purpose: show challenge, work completed, and result clearly
- required content slots: challenge, scope, result, context
- draft copy: projects.main.heading, projects.main.body
- layout blueprint: featured outcome card plus secondary project stack
- surface style: paper cards with measured image prominence
- interaction: each project panel can expand or link later
- responsive: stacked proof cards mobile
- motion: cascade reveal only

### Section 3 - Trust reinforcement
- purpose: convert proof into broader service confidence
- required content slots: customer voice, workmanship promise, route to relevant service
- draft copy: one customer voice plus practical reassurance on communication and handover
- layout blueprint: testimonial and trust-note split
- surface style: inset quote panel with paper trust card
- interaction: route visitors to services or quote
- responsive: testimonial remains first on mobile
- motion: restrained fade

### Section 4 - Final CTA band
- purpose: turn proof review into a live enquiry
- required content slots: quote path and call path
- draft copy: projects.cta.heading, projects.cta.body
- layout blueprint: compact split action band
- surface style: primary band with proof cue chips
- interaction: quote first, call second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton project cards
- empty: fallback to reviews and trust copy with CTA
- error: preserve quote and call actions
- success: at least one strong project proof item visible
- offline: call remains available

## 4. Accessibility plan
- landmarks: main and supporting proof region
- heading outline: H1 then H2 sections
- focus behavior: project cards follow clear reading order
- contrast: overlays on imagery maintain AA

## 5. SEO and metadata
- title: "Electrical Projects | Electrical Service Provider AU"
- description: "Review recent electrical work and project outcomes for homes and businesses before requesting a quote."
- og fields: project image and outcome tags
- canonical: /projects

## 6. Performance plan
- LCP target: under 2.7s
- hero media strategy: one optimized project image, rest lazy-loaded
- route JS budget: moderate if filters appear later
- below-fold defer: secondary project imagery deferred

## 7. Analytics and conversion path
- key events: project_open, projects_quote_click, projects_call_click
- primary path: project proof -> quote
- secondary path: proof review -> call
