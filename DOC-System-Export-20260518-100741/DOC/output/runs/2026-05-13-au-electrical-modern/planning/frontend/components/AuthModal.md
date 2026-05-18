---
document_type: component-spec
component: AuthModal
component_class: organism
file_path: src/components/overlays/AuthModal.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - auth.modal.title_sign_in
  - auth.modal.title_sign_up
  - auth.modal.switch_to_sign_in
  - auth.modal.switch_to_sign_up
planning_status: draft_assumption_led
---

## Purpose
AuthModal is the primary authentication surface triggered from the header. It keeps sign-in and sign-up flows in an overlay so marketing journeys are not interrupted.

## Variants
- sign-in modal
- sign-up modal

## Props
```ts
{
  open: boolean,
  mode: 'sign-in' | 'sign-up',
  onClose: () => void,
  onSwitchMode: (nextMode: 'sign-in' | 'sign-up') => void,
}
```

## States
- closed
- opening
- open sign-in
- open sign-up
- closing

## Accessibility
- semantic element: dialog
- ARIA: aria-modal, labelled by modal title, described by contextual helper copy if present
- keyboard: Esc closes, focus trap active while open, focus returns to trigger on close

## Responsive Behavior
- mobile: full-height sheet with sticky close and mode-switch actions
- tablet: centered panel with comfortable padding
- desktop: modal panel with blurred backdrop and visible context framing

## Motion
- AnimatePresence-style backdrop fade with panel slide-scale entrance
- reduced motion uses opacity plus minimal translate only

## Composition examples
- Header sign-in CTA on all public routes
- Mobile header toolbar fallback auth entry

## Forbidden uses
- Do not force navigation to /sign-in or /sign-up for mode switching inside the modal
- Do not hide the close action below the fold on mobile

## Test plan
- open from header, switch modes in place, escape to close, focus return to trigger

## Related
- AuthFormCard.md
- SiteHeader.md
