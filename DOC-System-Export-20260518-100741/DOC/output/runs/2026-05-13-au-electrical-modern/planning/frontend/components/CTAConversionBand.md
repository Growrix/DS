---
document_type: component-spec
component: CTAConversionBand
component_class: organism
file_path: src/components/sections/CTAConversionBand.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - cta.*
  - contact.*
planning_status: draft_assumption_led
---

## Purpose
CTAConversionBand closes a route with a simple, trustworthy choice: call now or request a quote. It appears on nearly every public route.

## Variants
- primary call-plus-quote band
- emergency call-dominant band
- commercial assessment band

## Props
```ts
{
  titleKey: string,
  bodyKey: string,
  primaryCtaKey: string,
  primaryHref: string,
  secondaryCtaKey?: string,
  secondaryHref?: string,
  urgencyStyle?: 'standard' | 'emergency' | 'commercial',
}
```

## States
- default
- with-secondary-action
- with-contact-chip
- compact

## Accessibility
- semantic element: section
- ARIA: CTA labels can override via aria-label keys where necessary
- keyboard: CTA order follows urgency hierarchy

## Responsive Behavior
- mobile: stacked CTAs with call first
- desktop: split copy and actions or centered band depending on route signature

## Motion
- section reveal and CTA press feedback only
- reduced motion removes reveal travel

## Composition examples
- End of service pages
- Mid-page on emergency route

## Forbidden uses
- Do not overload with more than two primary actions
- Do not bury the phone action below tertiary links

## Test plan
- CTA hierarchy and responsive stack
- contrast in both themes

## Related
- HeroSection.md
- QuoteFormCard.md
