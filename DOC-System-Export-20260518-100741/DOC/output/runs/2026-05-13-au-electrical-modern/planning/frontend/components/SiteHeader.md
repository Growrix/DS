---
document_type: component-spec
component: SiteHeader
component_class: organism
file_path: src/components/navigation/SiteHeader.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - navigation.header.*
  - trust.header.*
  - component.theme_switcher.*
planning_status: draft_assumption_led
---

## Purpose
SiteHeader owns first-screen trust, navigation, and the persistent call and quote hierarchy. It must reduce uncertainty before any scroll.

## Variants
- transparent-at-top flagship header
- solid surface inner-page header
- emergency emphasis header with stronger call hierarchy

## Props
```ts
{
  routeGroup: 'flagship' | 'primary' | 'supporting',
  emergencyMode?: boolean,
  primaryNavRoutes: string[],
  showTopbar?: boolean,
}
```

## States
- default at top: transparent or low-surface hero-compatible treatment
- scroll-down: compact header with preserved call CTA
- scroll-up: restored readable surface and full nav clarity
- mobile-expanded: drawer open with focus trap
- active-route: nav item visibly current
- disabled utility: non-clickable when channel unavailable

## Accessibility
- semantic element: header containing nav and utility region
- ARIA: nav labelled, mobile menu button uses aria-expanded and aria-controls
- keyboard: full navigation accessible without pointer; escape closes drawer

## Responsive Behavior
- mobile: call-first toolbar plus drawer
- tablet: reduced nav count, preserved quote and call actions
- desktop: full nav, topbar, ThemeSwitcher, call and quote actions

## Motion
- header state machine uses motion.duration.base for surface and transform changes
- drawer uses decel slide
- reduced motion swaps travel for opacity and surface swap only

## Composition examples
- Home -> transparent top state over hero image
- Emergency -> solid urgent header with direct call bias

## Forbidden uses
- Do not hide phone number behind the drawer on mobile
- Do not overload the header with tertiary links

## Test plan
- sticky state transitions
- mobile drawer open and close
- active route and keyboard path

## Related
- ThemeSwitcher.md
- MobileBottomNav.md
- SiteFooter.md
