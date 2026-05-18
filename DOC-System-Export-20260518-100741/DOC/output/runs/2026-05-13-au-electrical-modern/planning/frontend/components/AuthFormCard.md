---
document_type: component-spec
component: AuthFormCard
component_class: molecule
file_path: src/components/forms/AuthFormCard.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - auth.modal.title_sign_in
  - auth.modal.title_sign_up
  - auth.modal.switch_to_sign_in
  - auth.modal.switch_to_sign_up
  - auth.form.submit_sign_in
  - auth.form.submit_sign_up
  - validation.*
  - errors.*
planning_status: draft_assumption_led
---

## Purpose
AuthFormCard provides the sign-in and sign-up form body used inside the modal overlay and the fallback standalone auth routes.

## Variants
- sign-in
- sign-up

## Props
```ts
{
  mode: 'sign-in' | 'sign-up',
  onSwitchMode?: (nextMode: 'sign-in' | 'sign-up') => void,
  submitLabelKey: string,
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
- ARIA: field errors connected through aria-describedby, submit uses aria-busy
- keyboard: predictable tab order, Enter-safe submit, and optional mode switch available before submit

## Responsive Behavior
- mobile: full-width form inside bottom or full-height auth sheet
- tablet: centered card with concise helper text
- desktop: compact card that can live inside modal panel or standalone auth page

## Motion
- inline validation appear, submit fade, success confirmation state
- reduced motion keeps opacity changes only

## Composition examples
- AuthModal body on marketing routes
- /sign-in and /sign-up fallback pages

## Forbidden uses
- Do not route-switch between sign-in and sign-up when onSwitchMode is provided
- Do not add marketing upsell copy inside the form body

## Test plan
- sign-in, sign-up, validation, server-error, and keyboard mode switching

## Related
- AuthModal.md
