---
document_type: component-spec
component: ServiceCard
component_class: molecule
file_path: src/components/sections/ServiceCard.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - services.cards.*
  - home.services.*
planning_status: draft_assumption_led
---

## Purpose
ServiceCard summarizes a service outcome, who it is for, and the next best action. It is used in the flagship, services, residential, and commercial routes.

## Variants
- default trust card
- commercial-focused card
- emergency-highlight card
- compliance-focused card

## Props
```ts
{
  variant: 'default' | 'commercial' | 'emergency' | 'compliance',
  titleKey: string,
  bodyKey: string,
  href: string,
  statKey?: string,
  badgeKey?: string,
  iconName?: string,
}
```

## States
- default: elevated surface with clear title, icon, and action hint
- hover: shadow.2 and border emphasis
- focus-within: visible ring around whole card
- selected: stronger border and accent-left marker when route-matched
- loading: skeleton mirrors title, body, and action layout
- disabled: non-interactive, muted text, no hover lift

## Accessibility
- semantic element: article containing a full-card link or explicit CTA link
- ARIA: linked heading id, icon marked decorative unless meaningful
- keyboard: full-card focus only if semantics remain clear

## Responsive Behavior
- mobile: full-width stack, large tap target, shorter copy lines
- tablet: two-column grid
- desktop: varied grids based on route signature

## Motion
- hover lift using motion.duration.fast
- reduced motion removes lift and keeps border/shadow change only

## Composition examples
- Home -> service capability grid
- Services -> specialist service grid
- Residential -> domestic work cluster
- Commercial -> sector capability grid

## Forbidden uses
- Do not stuff long paragraphs into this component
- Do not reuse identical card rhythm on every route; page composition must vary

## Test plan
- hover, focus-within, loading, and selected states
- link semantics and heading association

## Related
- HeroSection.md
- CTAConversionBand.md
