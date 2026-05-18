---
document_type: per-page-frontend-focus
page_id: emergency-electrician
route: /emergency-electrician
auth: public
data_source: static
priority: primary
build_stage: 4-page-design
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
content_keys_used:
  - emergency.hero.eyebrow
  - emergency.hero.headline
  - emergency.hero.subheadline
  - emergency.main.heading
  - emergency.proof.heading
  - emergency.cta.heading
---

## 1. Page definition
- User intent: reach a real person or clear call path fast during an urgent electrical issue
- Conversion outcome: immediate phone call
- Primary CTA: brand.phone.href
- Secondary CTA: /contact

## 2. Sections in visual order
### Section 1 - Call-first opener
- purpose: remove uncertainty and make the emergency path obvious
- required content slots: urgency evidence, response promise, direct conversion
- draft copy: emergency.hero.headline, emergency.hero.subheadline
- layout blueprint: call-first hero with vertical urgency rail desktop and stacked CTA block mobile
- surface style: deeper overlay allowed, with crisp emergency-safe contrast
- interaction: phone action first in source and visual order
- responsive: mobile prioritises call before supporting copy
- motion: CTA-first urgency pulse, reduced to static emphasis

### Section 2 - When to call immediately
- purpose: qualify urgent scenarios and guide safe next action
- required content slots: fault examples, safety guidance, what to prepare before calling
- draft copy: emergency.main.heading, emergency.main.body
- layout blueprint: warning-aware checklist strip with short supporting notes
- surface style: inset warning panels, not alarmist red-heavy treatment
- interaction: call CTA repeated mid-section
- responsive: checklist remains readable as stacked rows
- motion: list reveal only

### Section 3 - Response reassurance and trust
- purpose: reassure visitors that contacting now is the right move
- required content slots: customer voice, trust signal cluster, communication promise
- draft copy: emergency.proof.heading, emergency.proof.body
- layout blueprint: compact proof block with review quote and response expectations
- surface style: paper plus dark-accent trust panel
- interaction: optional deep-link to reviews, but no detour before call path
- responsive: proof remains secondary to phone action
- motion: restrained fade only

### Section 4 - What happens after the call
- purpose: explain triage and next steps without slowing urgency
- required content slots: process disclosure, service-area cue, dispatch expectations
- draft copy: brief triage summary, site attendance expectation, and information needed
- layout blueprint: short step rail or stacked step cards
- surface style: compact inset strip
- interaction: fallback contact option included
- responsive: keep to three short steps on mobile
- motion: sequential reveal optional

### Section 5 - Final CTA band
- purpose: keep the decision binary and immediate
- required content slots: call action and alternate contact path
- draft copy: emergency.cta.heading, emergency.cta.body
- layout blueprint: bold action band with phone dominance
- surface style: primary dark band with contrast-safe action cards
- interaction: call dominant, contact secondary
- responsive: call button stretches full width on mobile
- motion: CTA emphasis only

## 3. Page-level states
- loading: lightweight skeleton only; keep phone action visible even during load
- empty: not applicable, but fallback copy keeps call path alive
- error: show phone and email fallback immediately
- success: call path visible in three places
- offline: call path remains primary and non-network dependent

## 4. Accessibility plan
- landmarks: main and supporting safety guidance region
- heading outline: H1 then H2s only; no complexity under urgency
- focus behavior: first interactive element after skip-link is call CTA
- contrast: hero overlay and emergency chips must exceed AA with margin

## 5. SEO and metadata
- title: seo.emergency.title
- description: seo.emergency.description
- og fields: emergency-safe trust visual, not dramatic hazard imagery
- canonical: /emergency-electrician

## 6. Performance plan
- LCP target: under 2.3s
- hero media strategy: minimal or static image only
- route JS budget: minimal
- below-fold defer: review proof can defer

## 7. Analytics and conversion path
- key events: emergency_call_click, emergency_midpage_call_click, emergency_contact_fallback_click
- primary path: first-screen call click
- secondary path: mid-page reassurance -> call click
