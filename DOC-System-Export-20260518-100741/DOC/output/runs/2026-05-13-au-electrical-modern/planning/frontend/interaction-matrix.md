# Interaction Matrix

## Interaction model
This project uses a call-first local-service interaction model with a secondary structured quote path. Every interaction must work on mobile without hover dependency.

| Interaction class | Component or surface | Required state behavior | Keyboard / touch / pointer parity | Motion reference |
|---|---|---|---|---|
| primary conversion | HeroSection CTA | default, hover, focus-visible, active, disabled | click, tap, Enter, Space | press feedback |
| alternate conversion | CTAConversionBand secondary action | visible on all primary routes, never hidden behind disclosure | click, tap, Enter, Space | press feedback |
| navigation | SiteHeader | active route, drawer open, sticky transitions | tab, arrow within nav when grouped, tap, click | header surface transition |
| mobile route switching | MobileBottomNav | active tab, badge state, focus-visible | tap and keyboard only, no hover dependency | nav active fill |
| proof exploration | ServiceCard grids | hover, focus-within, loading skeleton | tap and click open same destination | hover lift |
| quote capture | QuoteFormCard | submitting, validation-error, server-error, offline, success | full keyboard submission and mobile-friendly input order | inline validation appear |
| auth overlay | AuthModal and AuthFormCard | closed, opening, sign-in mode, sign-up mode, submitting, validation-error | Enter, Space, Esc, tab loop, tap, click | modal open or close |
| disclosure | FAQAccordion | closed, opening, open, closing | Enter, Space, Arrow navigation, tap, click | accordion reveal |
| theme change | ThemeSwitcher | default, pressed, disabled | Enter, Space, tap, click | press feedback |
| emergency decision | emergency route hero and CTA band | call action first, quote fallback second | touch-first parity with keyboard reach | emphasis without travel-heavy motion |
| service-area confirmation | area route lookup or coverage list | default, filtering, no-results, confirmed-coverage | tap, click, keyboard input parity | sheet reveal if mobile lookup is used |

## Mobile parity rules
- Call and quote actions remain visible without opening the main navigation.
- No trust proof is hidden behind hover-only interactions.
- Emergency route never requires more than two taps to reach the phone action.

## Form interaction notes
- Preserve field values on validation error.
- Keep postcode and service fields above any optional details.
- Show phone-first fallback when network submission fails.

## Trust interaction notes
- Review and project proof should link or expand only when it helps decision confidence.
- Trust chips are informative, not decorative; they must remain readable over media.
