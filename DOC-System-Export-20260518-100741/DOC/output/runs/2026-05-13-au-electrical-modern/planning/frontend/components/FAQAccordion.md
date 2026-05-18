---
document_type: component-spec
component: FAQAccordion
component_class: organism
file_path: src/components/sections/FAQAccordion.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - faq.*
planning_status: draft_assumption_led
---

## Purpose
FAQAccordion reduces friction around timing, pricing posture, safety, and service scope while preserving a clear next action.

## Variants
- standard FAQ list
- emergency FAQ list
- commercial operations FAQ list

## Props
```ts
{
  items: Array<{
    questionKey: string,
    answerKey: string,
  }>,
  singleOpen?: boolean,
}
```

## States
- closed
- opening
- open
- closing
- disabled

## Accessibility
- semantic element: disclosure list
- ARIA: button with aria-expanded and aria-controls; panel labelled by trigger
- keyboard: Enter, Space, Arrow navigation when implemented as grouped disclosure

## Responsive Behavior
- mobile: larger touch targets and simpler spacing
- tablet and desktop: denser layout okay if readability holds

## Motion
- accordion reveal with height and opacity
- reduced motion opens instantly

## Composition examples
- Home objection-handling section
- Specialist service detail route

## Forbidden uses
- Do not hide critical legal or pricing disclaimers exclusively in FAQ

## Test plan
- disclosure states and keyboard interactions
- aria-expanded accuracy

## Related
- QuoteFormCard.md
