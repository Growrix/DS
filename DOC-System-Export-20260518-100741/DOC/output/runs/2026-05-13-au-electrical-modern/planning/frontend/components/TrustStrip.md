---
document_type: component-spec
component: TrustStrip
component_class: organism
file_path: src/components/sections/TrustStrip.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - trust.*
  - home.trust.*
planning_status: draft_assumption_led
---

## Purpose
TrustStrip surfaces the proof visitors need before they call: license, review aggregate, years active, response promise, and coverage cues.

## Variants
- review-and-license strip
- response-promise strip
- commercial-compliance strip

## Props
```ts
{
  items: Array<{
    labelKey: string,
    valueKey?: string,
    icon: string,
  }>,
  emphasis: 'rating' | 'response' | 'credentials',
}
```

## States
- default: populated trust items
- loading: skeleton mirrors chips and metric cards
- empty: hides unavailable proof gracefully while preserving layout integrity
- error: fallback to manually confirmed trust points and contact path

## Accessibility
- semantic element: section or complementary region
- ARIA: metric icons decorative unless they add meaning
- keyboard: embedded links remain individually focusable

## Responsive Behavior
- mobile: stacked chips and metrics with readable wrapping
- tablet: two-row cluster
- desktop: horizontal cluster or inset strip depending on route

## Motion
- section reveal and optional count-up for rating or years
- reduced motion shows final values immediately

## Composition examples
- Below hero on Home
- Mid-page reassurance band on service routes

## Forbidden uses
- Do not present unverified licenses or emergency promises
- Do not turn this into an over-decorated logo wall

## Test plan
- metric visibility across breakpoints
- loading and empty states
- contrast in both themes

## Related
- HeroSection.md
- SiteFooter.md
