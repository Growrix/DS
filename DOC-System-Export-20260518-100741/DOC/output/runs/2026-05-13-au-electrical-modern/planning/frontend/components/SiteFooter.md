---
document_type: component-spec
component: SiteFooter
component_class: organism
file_path: src/components/navigation/SiteFooter.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - footer.*
  - trust.*
  - social.*
planning_status: draft_assumption_led
---

## Purpose
SiteFooter reinforces credibility, locality, and alternate conversion paths while holding legal links and attribution.

## Variants
- standard marketing footer
- dense local-trust footer

## Props
```ts
{
  navGroups: Array<{ titleKey: string, links: string[] }>,
  showTrustData: boolean,
  attributionEnabled: boolean,
}
```

## States
- default
- trust-data-complete
- trust-data-partial with placeholders flagged for human replacement
- dark-theme readable state

## Accessibility
- semantic element: footer
- ARIA: footer navigation labelled, social icons include descriptive aria labels
- keyboard: all links preserve visible focus

## Responsive Behavior
- mobile: stacked trust and contact groups with social row below primary contact info
- tablet: two or three columns
- desktop: trust-heavy multi-column layout with bottom attribution bar

## Motion
- minimal hover and focus feedback only
- reduced motion unchanged because no travel is required

## Composition examples
- standard site-wide footer
- denser footer on commercial and quote routes with stronger contact emphasis

## Forbidden uses
- Do not omit business hours, service area cues, or attribution contract
- Do not hide legal links in a collapsed disclosure on desktop

## Test plan
- footer contrast in light and dark themes
- social aria labels and attribution behavior

## Related
- SiteHeader.md
- TrustStrip.md
