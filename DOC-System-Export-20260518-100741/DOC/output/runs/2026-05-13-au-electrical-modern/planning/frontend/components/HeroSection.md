---
document_type: component-spec
component: HeroSection
component_class: organism
file_path: src/components/sections/HeroSection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - home.hero.*
  - services.hero.*
  - emergency.hero.*
  - commercial.hero.*
planning_status: draft_assumption_led
---

## Purpose
HeroSection is the route opener and primary conversion anchor. It must immediately communicate locality, service fit, and the next best action.

## Variants
- flagship asymmetric split
- services editorial center
- emergency call-first rail
- commercial capability split

## Props
```ts
{
  routeId: string,
  eyebrowKey: string,
  titleKey: string,
  bodyKey: string,
  primaryCtaKey: string,
  primaryHref: string,
  secondaryCtaKey?: string,
  secondaryHref?: string,
  mediaSlot: string,
  trustChipKeys?: string[],
  statKeys?: string[],
}
```

## States
- default: full-bleed hero with trust chips and CTA hierarchy
- with-stats: metric strip or trust counters present
- urgency mode: stronger call bias and reassurance copy
- media-fallback: gradient-backed surface when imagery fails
- reduced-motion: static text reveal fallback

## Accessibility
- semantic element: section with labeled heading
- ARIA: decorative media hidden, trust chips remain readable text
- keyboard: primary CTA appears before secondary CTA and media extras

## Responsive Behavior
- mobile: text and CTA stack first, media follows
- tablet: controlled split or layered stack
- desktop: route-specific composition per differentiation map

## Motion
- staggered text reveal, trust-chip fade, optional metric count-up
- reduced motion uses immediate reveal and static metrics

## Composition examples
- Home -> locality plus review-backed trust opener
- Commercial -> proof-forward capability opener
- Emergency -> direct-response hero with safety-first copy

## Forbidden uses
- Do not ship a narrow boxed hero
- Do not repeat the same hero composition across Home, Emergency, and Commercial

## Test plan
- contrast over media
- CTA order and route-specific variants
- fallback when media fails

## Related
- TrustStrip.md
- CTAConversionBand.md
