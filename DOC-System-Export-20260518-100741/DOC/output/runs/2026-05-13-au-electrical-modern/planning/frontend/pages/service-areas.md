---
document_type: per-page-frontend-focus
page_id: service-areas
route: /service-areas
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
  - areas.hero.eyebrow
  - areas.hero.headline
  - areas.hero.subheadline
  - areas.main.heading
  - areas.cta.heading
---

## 1. Page definition
- User intent: confirm suburb or postcode coverage before contacting the business
- Conversion outcome: call or quote request with area context
- Primary CTA: brand.phone.href
- Secondary CTA: /quote

## 2. Sections in visual order
### Section 1 - Locality opener
- purpose: tell visitors the business serves their area and how to confirm coverage
- required content slots: service area statement, locality reassurance, conversion pair
- draft copy: areas.hero.headline, areas.hero.subheadline
- layout blueprint: map-adjacent intro with suburb cue rail
- surface style: inset locality frame with clean editorial spacing
- interaction: call and quote visible immediately
- responsive: locality cues collapse into stacked chips on mobile
- motion: area-chip rise with reduced static reveal

### Section 2 - Coverage structure
- purpose: help visitors scan where the business works without dense paragraphs
- required content slots: suburb clusters, metro coverage logic, postcode confirmation path
- draft copy: areas.main.heading, areas.main.body
- layout blueprint: clustered location groups with a supporting note column
- surface style: paper plus inset cluster panels
- interaction: each location group can link to deeper local landing pages later
- responsive: stacked clusters on mobile with quick-scan headings
- motion: restrained cluster fade

### Section 3 - Work types by area
- purpose: connect geography with relevant service demand
- required content slots: homeowner and business service cues, urgent versus planned work
- draft copy: explain that coverage includes homes, commercial sites, maintenance, and urgent faults where applicable
- layout blueprint: two-part split between residential and business demand examples
- surface style: balanced paper cards
- interaction: each path routes to service or quote pages
- responsive: no hover-dependent state
- motion: subtle card emphasis only

### Section 4 - Area confidence and FAQs
- purpose: answer uncertainty about travel, timing, and route priority
- required content slots: response expectations, suburb confirmation, objection handling
- draft copy: short answers on how coverage is confirmed and when a call is the fastest path
- layout blueprint: compact FAQ plus confirmation note panel
- surface style: clean paper stack
- interaction: call CTA repeated below the FAQs
- responsive: key answers surfaced early on mobile
- motion: accordion reveal where used

### Section 5 - Final CTA band
- purpose: close the route with one clear coverage-confirmation action
- required content slots: phone path and quote path with suburb context
- draft copy: areas.cta.heading, areas.cta.body
- layout blueprint: split action band
- surface style: primary band with supportive locality chips
- interaction: call first, quote second
- responsive: stacked actions mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: skeleton suburb clusters and FAQ blocks
- empty: fallback to a general metro coverage statement and phone CTA
- error: preserve contact paths and simplified area summary
- success: locality cues and next steps both clear
- offline: phone path becomes dominant

## 4. Accessibility plan
- landmarks: main and FAQ support region
- heading outline: H1 then H2 sections
- focus behavior: location groups are navigable in reading order
- contrast: cluster chips and primary band maintain AA in both themes

## 5. SEO and metadata
- title: "Service Areas | Electrical Service Provider AU"
- description: "Check whether your suburb or postcode is covered and contact the team for electrical help or a quote."
- og fields: locality-led visual and suburb confidence messaging
- canonical: /service-areas

## 6. Performance plan
- LCP target: under 2.6s
- hero media strategy: light locality frame or static map-adjacent graphic
- route JS budget: low
- below-fold defer: extended suburb lists can defer or paginate later

## 7. Analytics and conversion path
- key events: area_call_click, area_quote_click, area_cluster_select
- primary path: confirm area -> call
- secondary path: area route -> quote
