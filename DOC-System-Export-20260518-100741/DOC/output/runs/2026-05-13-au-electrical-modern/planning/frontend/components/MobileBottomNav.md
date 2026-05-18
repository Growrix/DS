---
document_type: component-spec
component: MobileBottomNav
component_class: organism
file_path: src/components/navigation/MobileBottomNav.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - navigation.mobile.*
planning_status: draft_assumption_led
---

## Purpose
MobileBottomNav keeps high-intent visitors one tap away from home, services, quote, proof, and contact routes while preserving safe-area spacing.

## Variants
- standard marketing dock
- emergency-aware dock with active contact bias

## Props
```ts
{
  items: Array<{
    labelKey: string,
    href: string,
    icon: string,
    badgeCount?: number,
  }>,
  activePath: string,
}
```

## States
- per item default
- per item active
- per item with-badge
- nav hidden on desktop
- nav reduced-motion safe

## Accessibility
- semantic element: nav
- ARIA: aria-label on container and aria-current on active route
- keyboard: full tab access with clear focus ring

## Responsive Behavior
- mobile only below lg
- tablet and desktop: hidden
- safe-area inset bottom padding always reserved

## Motion
- active tab uses fast fill and subtle scale emphasis
- reduced motion uses fill only

## Composition examples
- marketing routes on mobile
- service detail and quote routes with contact still visible

## Forbidden uses
- Do not exceed five tabs
- Do not replace the call CTA with the dock alone

## Test plan
- active route state
- safe-area spacing
- badge and focus states

## Related
- SiteHeader.md
