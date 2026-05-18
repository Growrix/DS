---
document_type: component-spec
component: QuoteFormCard
component_class: organism
file_path: src/components/forms/QuoteFormCard.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - quote.form.*
  - validation.*
  - errors.*
planning_status: draft_assumption_led
---

## Purpose
QuoteFormCard captures qualified lead details without slowing dispatch or scaring off urgent users. It is the main structured conversion surface on planned-service routes.

## Variants
- compact hero-side form
- full quote page form
- commercial scope form with company field

## Props
```ts
{
  variant: 'compact' | 'full' | 'commercial',
  fields: Array<'name' | 'phone' | 'email' | 'postcode' | 'service' | 'job_summary' | 'company'>,
  submitLabelKey: string,
  successStateKey: string,
}
```

## States
- default
- submitting
- success
- validation-error
- server-error
- offline

## Accessibility
- semantic element: form
- ARIA: field errors connected through aria-describedby, submitting uses aria-busy
- keyboard: predictable tab order and enter-safe submission behavior

## Responsive Behavior
- mobile: single-column, no unnecessary helper clutter above fields
- tablet: optional contextual proof rail beside form
- desktop: can sit in split layout but form itself remains single-column for clarity

## Motion
- inline validation appear, submit state fade, success confirmation toast
- reduced motion keeps only opacity changes

## Composition examples
- Quote route primary surface
- Home or service page secondary capture card

## Forbidden uses
- Do not ask for unnecessary budget or account fields
- Do not require email before phone on urgent flows

## Test plan
- validation, submit, success, server-error, and offline states
- field persistence after validation failure

## Related
- CTAConversionBand.md
