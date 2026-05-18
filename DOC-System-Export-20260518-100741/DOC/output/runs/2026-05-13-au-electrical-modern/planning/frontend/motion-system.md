---
document_type: motion-system
project_name: electrical-service-provider-au
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 2-design-foundation
depends_on:
  - design-system.md
  - component-system.md
recommended_next_reads:
  - pages/
planning_status: draft_assumption_led
---

# Motion System

## 1. Motion Posture
- Duration band: fast 140ms, base 220ms, slow 320ms, cinematic 460ms
- Easing: standard for hover and press, decel for reveals, spring for modal and drawer settling
- Macro motion is reserved for hero reveal, modal transitions, mobile drawer, and section reveal
- Micro motion is used for CTA feedback, trust-card hover, tab activation, and accordion disclosure
- Reduced motion stance: preserve clarity and state change, remove non-essential travel and scale

## 2. Macro Motion Catalog
- Section reveal:
  - duration: motion.duration.slow
  - easing: motion.easing.decel
  - effect: opacity 0 to 1 plus translateY token-small to 0
  - trigger: intersection observer at low threshold
  - stagger: token-fast gap across up to five siblings
  - reduced: instant fade without translation

- Page transition:
  - duration: motion.duration.base
  - easing: motion.easing.standard
  - effect: content crossfade with subtle surface continuity
  - trigger: route change
  - reduced: instant content swap

- Modal open and close:
  - duration: motion.duration.base
  - easing: motion.easing.spring
  - effect: opacity fade plus low-distance scale and rise
  - trigger: AuthModal and contact overlays
  - reduced: opacity only

- Drawer open and close:
  - duration: motion.duration.base
  - easing: motion.easing.decel
  - effect: horizontal slide for menu drawer and vertical sheet slide for filter panels
  - reduced: instant open with opacity fade on backdrop only

- Toast entry and exit:
  - duration: motion.duration.fast
  - easing: motion.easing.standard
  - effect: opacity plus low-distance move from edge
  - reduced: opacity only

## 3. Micro Motion Catalog
- Hover lift:
  - duration: motion.duration.fast
  - easing: motion.easing.standard
  - effect: tiny shadow elevation and border emphasis
  - reduced: shadow and border change only
  - purpose: hierarchy

- Press feedback:
  - duration: motion.duration.fast
  - easing: motion.easing.accel
  - effect: slight compression on CTA and icon actions
  - reduced: background or border change only
  - purpose: feedback

- Focus ring:
  - duration: motion.duration.fast
  - easing: motion.easing.standard
  - effect: focus halo fade-in
  - reduced: same, no transform involved
  - purpose: clarity

- Tab or segmented switch:
  - duration: motion.duration.base
  - easing: motion.easing.spring
  - effect: active pill background slide or scale-emphasis
  - reduced: direct state swap
  - purpose: hierarchy

- Chip selection:
  - duration: motion.duration.fast
  - easing: motion.easing.standard
  - effect: background fill and text emphasis
  - reduced: same
  - purpose: feedback

- Accordion reveal:
  - duration: motion.duration.base
  - easing: motion.easing.decel
  - effect: height and opacity transition
  - reduced: instant expand with no travel
  - purpose: clarity

- Inline validation appear:
  - duration: motion.duration.fast
  - easing: motion.easing.standard
  - effect: opacity and slight rise for helper or error copy
  - reduced: opacity only
  - purpose: feedback

- Count-up:
  - duration: motion.duration.cinematic
  - easing: motion.easing.decel
  - effect: metric count progression for trust stats only
  - reduced: render final number immediately
  - purpose: hierarchy

## 4. Streaming Motion Catalog
- Realtime status pill:
  - duration: motion.duration.fast
  - easing: motion.easing.standard
  - effect: subtle pulse for operational status only when needed
  - reduced: static status dot

## 5. Component-by-Component Motion Declarations
- ThemeSwitcher: press feedback and focus ring
- MobileBottomNav: active tab scale-emphasis and focus ring
- SiteHeader: scroll state transition and CTA emphasis
- HeroSection: staggered text reveal, trust-chip fade, media depth shift
- ServiceCard: hover lift and focus-within border emphasis
- TrustStrip: count-up for rating and years if metrics are present
- ReviewCluster: card reveal cascade on first view
- ProjectProofGrid: staggered reveal and hover depth shift
- QuoteFormCard: inline validation appear, submit state fade, success toast
- FAQAccordion: disclosure reveal
- AuthModal: modal open and close
- CTAConversionBand: button emphasis only, no decorative background motion

## 6. Performance Budget
- Use transform and opacity first
- Avoid continuous ambient animation on trust-led pages
- Keep simultaneous stagger groups short on mobile
- Reserve will-change for modal, drawer, and hero reveal targets only

## 7. Forbidden in this Project
- No scroll-jacking
- No parallax outside selective hero media depth treatment
- No looping decorative electric-line animations
- No autoplay video with sound
- No bouncing CTA buttons

## 8. Reduced-Motion Plan
| Effect | Default | Reduced-Motion Fallback |
|---|---|---|
| Section reveal | fade plus rise | instant fade |
| Hero stagger | staggered text reveal | immediate visible copy |
| Hover lift | shadow plus slight elevation | shadow only |
| Count-up | progressive metric count | final number only |
| Modal open | fade plus scale | fade only |
| Drawer open | slide plus fade | fade with immediate placement |
| Accordion reveal | height plus opacity | instant open |
| Mobile nav active | scale plus fill | fill only |
