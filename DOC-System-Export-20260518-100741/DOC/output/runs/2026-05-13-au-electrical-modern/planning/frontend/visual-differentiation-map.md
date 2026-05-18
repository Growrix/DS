---
document_type: visual-differentiation-map
project_name: electrical-service-provider-au
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-design
depends_on:
  - master-ui-architecture.md
  - design-system.md
planning_status: draft_assumption_led
---

## 1. Differentiation dimensions
| Dimension | What it captures |
|---|---|
| composition | hero and primary section layout pattern |
| primary_section_rhythm | spacing and density posture |
| motion_temperament | calm-precise or restrained-cinematic with specific choreography |
| surface_stack | paper, panel, inset, overlay layering |
| content_density | spacious, balanced, or dense content posture |

## 2. Per-route visual signature
```yaml
routes:
  - route: /
    creative_latitude: HIGH
    composition: "asymmetric_split_hero with trust rail and residential-commercial decision split"
    primary_section_rhythm: "spacious-irregular"
    motion_temperament: "restrained-cinematic"
    motion_choreography_signature: "eyebrow-then-headline-then-proof-chip stagger"
    surface_stack: "paper+panel+inset+overlay"
    content_density: "spacious"
    visual_signature_hash: "home-asym-split-proof-spacious"

  - route: /services
    creative_latitude: MEDIUM
    composition: "centered_editorial_hero then service-category grid"
    primary_section_rhythm: "balanced-regular"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "headline-first then grid cascade"
    surface_stack: "paper+panel"
    content_density: "balanced"
    visual_signature_hash: "services-centered-grid-balanced"

  - route: /residential
    creative_latitude: LOW
    composition: "warm trust-led split with homeowner examples"
    primary_section_rhythm: "balanced-soft"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "copy-first trust-chip fade"
    surface_stack: "paper+panel+inset"
    content_density: "balanced"
    visual_signature_hash: "resi-soft-trust-balanced"

  - route: /commercial
    creative_latitude: MEDIUM
    composition: "structured capability hero with proof metrics rail"
    primary_section_rhythm: "balanced-dense"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "metrics-then-capability-panel reveal"
    surface_stack: "paper+panel+inset"
    content_density: "balanced-dense"
    visual_signature_hash: "commercial-rail-metrics-dense"

  - route: /emergency-electrician
    creative_latitude: MEDIUM
    composition: "call-first hero with vertical urgency rail"
    primary_section_rhythm: "compact-priority"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "cta-first urgency pulse"
    surface_stack: "paper+overlay"
    content_density: "balanced"
    visual_signature_hash: "emergency-callrail-compact"

  - route: /switchboard-upgrades
    creative_latitude: LOW
    composition: "technical proof hero with compliance explainer blocks"
    primary_section_rhythm: "balanced-regular"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "feature-card stagger"
    surface_stack: "paper+panel"
    content_density: "balanced"
    visual_signature_hash: "switchboard-techproof-balanced"

  - route: /ev-charger-installation
    creative_latitude: LOW
    composition: "future-forward split with device image frame"
    primary_section_rhythm: "balanced-airy"
    motion_temperament: "restrained-cinematic"
    motion_choreography_signature: "media-frame-first then copy reveal"
    surface_stack: "paper+panel+overlay"
    content_density: "balanced"
    visual_signature_hash: "ev-future-split-airy"

  - route: /smoke-alarm-compliance
    creative_latitude: LOW
    composition: "regulation-led centered hero with checklist section"
    primary_section_rhythm: "balanced-regular"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "checklist stagger"
    surface_stack: "paper+panel"
    content_density: "balanced-dense"
    visual_signature_hash: "smoke-checklist-dense"

  - route: /service-areas
    creative_latitude: LOW
    composition: "map-adjacent intro with suburb cluster layout"
    primary_section_rhythm: "balanced-regular"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "area-chip rise"
    surface_stack: "paper+inset"
    content_density: "balanced"
    visual_signature_hash: "areas-cluster-balanced"

  - route: /projects
    creative_latitude: MEDIUM
    composition: "gallery-proof hero with outcome-led project cards"
    primary_section_rhythm: "spacious-proof"
    motion_temperament: "restrained-cinematic"
    motion_choreography_signature: "image-grid cascade"
    surface_stack: "paper+panel+overlay"
    content_density: "balanced"
    visual_signature_hash: "projects-gallery-proof"

  - route: /reviews
    creative_latitude: LOW
    composition: "testimonial-forward intro with source-confidence blocks"
    primary_section_rhythm: "balanced-regular"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "review-card cascade"
    surface_stack: "paper+panel"
    content_density: "balanced-dense"
    visual_signature_hash: "reviews-proof-dense"

  - route: /about
    creative_latitude: LOW
    composition: "team-and-standards split layout"
    primary_section_rhythm: "balanced-soft"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "portrait-then-copy reveal"
    surface_stack: "paper+panel+inset"
    content_density: "balanced"
    visual_signature_hash: "about-team-soft"

  - route: /faq
    creative_latitude: LOW
    composition: "utility intro then disclosure stack"
    primary_section_rhythm: "compact-regular"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "accordion reveal only"
    surface_stack: "paper+panel"
    content_density: "dense"
    visual_signature_hash: "faq-disclosure-dense"

  - route: /contact
    creative_latitude: LOW
    composition: "contact-channel hero with utility panels"
    primary_section_rhythm: "balanced-compact"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "channel-card emphasis"
    surface_stack: "paper+panel+inset"
    content_density: "balanced"
    visual_signature_hash: "contact-channel-balanced"

  - route: /quote
    creative_latitude: MEDIUM
    composition: "form-first split hero with reassurance rail"
    primary_section_rhythm: "balanced-compact"
    motion_temperament: "calm-precise"
    motion_choreography_signature: "form-card-first reveal"
    surface_stack: "paper+panel+inset"
    content_density: "balanced"
    visual_signature_hash: "quote-form-split"
```

## 3. Pair-wise delta matrix
```yaml
deltas:
  - pair: [/, /services]
    different_dimensions: [composition, primary_section_rhythm, motion_temperament, surface_stack, content_density]
    same_dimensions: []
    summary: "Home is asymmetric and spacious with layered trust proof; Services is centered and grid-led with calmer regular rhythm."
    audit_pass: true

  - pair: [/, /commercial]
    different_dimensions: [composition, primary_section_rhythm, motion_choreography_signature, content_density]
    same_dimensions: [motion_temperament]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Home uses eyebrow-led stagger; Commercial uses metrics-then-capability reveal."
    summary: "Commercial shifts from emotional trust to structured operational proof."
    audit_pass: true

  - pair: [/, /emergency-electrician]
    different_dimensions: [composition, primary_section_rhythm, surface_stack, content_density]
    same_dimensions: [motion_temperament]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Emergency prioritises CTA-first urgency pulse; Home opens with trust-led stagger."
    summary: "Emergency is compact and call-dominant; Home is broader and more exploratory."
    audit_pass: true

  - pair: [/, /projects]
    different_dimensions: [composition, primary_section_rhythm, motion_choreography_signature]
    same_dimensions: [motion_temperament, surface_stack, content_density]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Projects uses image-grid cascade rather than trust-chip-first motion."
    summary: "Projects is proof-gallery led, while Home is trust-and-choice led."
    audit_pass: true

  - pair: [/, /quote]
    different_dimensions: [composition, primary_section_rhythm, content_density]
    same_dimensions: [motion_temperament, surface_stack]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Quote reveals form first; Home reveals trust and message first."
    summary: "Quote compresses the decision path around form completion."
    audit_pass: true

  - pair: [/services, /commercial]
    different_dimensions: [composition, primary_section_rhythm, surface_stack, content_density]
    same_dimensions: [motion_temperament]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Services uses grid cascade; Commercial uses metrics-then-capability reveal."
    summary: "Commercial feels more operational and denser than the broader services overview."
    audit_pass: true

  - pair: [/services, /emergency-electrician]
    different_dimensions: [composition, primary_section_rhythm, surface_stack]
    same_dimensions: [motion_temperament, content_density]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Emergency leads with CTA urgency; Services leads with information structure."
    summary: "Emergency strips away exploration in favour of immediate action."
    audit_pass: true

  - pair: [/services, /projects]
    different_dimensions: [composition, primary_section_rhythm, motion_temperament, surface_stack]
    same_dimensions: [content_density]
    summary: "Projects uses proof-gallery storytelling while Services stays category-led."
    audit_pass: true

  - pair: [/services, /quote]
    different_dimensions: [composition, primary_section_rhythm, surface_stack]
    same_dimensions: [motion_temperament, content_density]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Quote foregrounds form reveal; Services foregrounds category grid reveal."
    summary: "Quote is operationally narrower and more decision-focused."
    audit_pass: true

  - pair: [/commercial, /emergency-electrician]
    different_dimensions: [composition, primary_section_rhythm, surface_stack, content_density]
    same_dimensions: [motion_temperament]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Commercial reveals metrics and sectors; Emergency reveals call action and reassurance."
    summary: "Commercial is proof-heavy and scheduled; Emergency is urgent and compressed."
    audit_pass: true

  - pair: [/commercial, /projects]
    different_dimensions: [composition, primary_section_rhythm, motion_temperament, content_density]
    same_dimensions: [surface_stack]
    summary: "Commercial focuses on operational fit while Projects focuses on visual proof and outcomes."
    audit_pass: true

  - pair: [/commercial, /quote]
    different_dimensions: [composition, primary_section_rhythm, content_density]
    same_dimensions: [motion_temperament, surface_stack]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Commercial reveals metrics; Quote reveals form confidence."
    summary: "Commercial persuades; Quote captures."
    audit_pass: true

  - pair: [/emergency-electrician, /projects]
    different_dimensions: [composition, primary_section_rhythm, motion_temperament, surface_stack]
    same_dimensions: [content_density]
    summary: "Emergency is direct-response; Projects is visual proof exploration."
    audit_pass: true

  - pair: [/emergency-electrician, /quote]
    different_dimensions: [composition, primary_section_rhythm, surface_stack]
    same_dimensions: [motion_temperament, content_density]
    different_within_same_temperament:
      - dimension: motion_choreography_signature
        delta: "Emergency elevates the phone action first; Quote elevates the form card first."
    summary: "Both convert quickly, but through different primary actions."
    audit_pass: true

  - pair: [/projects, /quote]
    different_dimensions: [composition, primary_section_rhythm, motion_temperament, surface_stack]
    same_dimensions: [content_density]
    summary: "Projects is image-led proof storytelling; Quote is reassurance plus form completion."
    audit_pass: true
```

## 4. Hash uniqueness check
```yaml
uniqueness_check:
  high_latitude_routes:
    - route: /
      hash: "home-asym-split-proof-spacious"
  duplicates_detected: false
  status: passed
```

## 5. Forbidden duplications
- No high-latitude duplication detected.
- Medium-latitude routes each differ by at least three dimensions or by different choreography signatures when temperament is shared.
