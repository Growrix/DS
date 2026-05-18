---
document_type: component-spec
component: ThemeSwitcher
component_class: molecule
file_path: src/components/ui/ThemeSwitcher.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.theme_switcher.aria_label
  - component.theme_switcher.light_label
  - component.theme_switcher.dark_label
planning_status: draft_assumption_led
---

## Purpose
ThemeSwitcher lets users toggle between light and dark themes without disrupting the lead path. It appears in desktop header actions and the mobile toolbar.

## Variants
- icon-only desktop
- icon-plus-label compact mobile

## Props
```ts
{
  placement: 'header' | 'mobile-toolbar',
  currentTheme: 'light' | 'dark',
  disabled?: boolean,
  labelKey: string,
}
```

## States
- default: surface token with clear outline or fill depending on theme
- hover: shadow.1 plus border emphasis
- focus-visible: color.focus-ring plus shadow.focus
- active: low-distance press feedback using motion.duration.fast
- loading: reserved state shows busy icon only if async persistence is introduced
- disabled: reduced contrast while remaining readable and keyboard-announced

## Accessibility
- semantic element: button
- aria: aria-label, aria-pressed
- focus returns to trigger after modal or drawer closes around it
- keyboard: Space and Enter toggle theme

## Responsive Behavior
- mobile: icon plus short label where space permits
- tablet: icon-first with tooltip or sr-only label
- desktop: icon-only or compact icon-plus-label in CTA row

## Motion
- press feedback and focus halo only
- reduced motion uses color and shadow change, no scale

## Composition examples
- SiteHeader -> ThemeSwitcher beside Call and Quote actions
- Mobile top toolbar -> ThemeSwitcher between logo and call shortcut

## Forbidden uses
- Do not hide inside the menu drawer only
- Do not use as a textual settings row on primary marketing routes

## Test plan
- toggle from light to dark and back
- aria-pressed matches theme state
- focus-visible ring is present

## Related
- SiteHeader.md
- MobileBottomNav.md
