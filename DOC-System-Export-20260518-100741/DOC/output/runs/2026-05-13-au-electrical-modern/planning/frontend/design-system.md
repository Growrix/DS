---
document_type: design-system
project_name: electrical-service-provider-au
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 2-design-foundation
depends_on:
  - master-ui-architecture.md
  - brief.json
recommended_next_reads:
  - component-system.md
  - motion-system.md
planning_status: draft_assumption_led
---

# Design System

## 1. Visual Direction
- Project: Electrical Service Provider AU
- Visual statement: modern local-trade trust system with crisp electric-blue authority, warm conversion accents, and real-world jobsite credibility.
- Adopted archetype: local-business-trust
- Default theme: light-first with full dark-theme parity
- Palette seed: #0F4C81

## 2. Color Tokens
### Light theme
- background: #F6F8FB
- surface: #FFFFFF
- inset: #EAF0F6
- border: #D7E1EC
- text: #102235
- muted: #5E7286
- primary: #0F4C81
- accent: #F2A900
- destructive: #C83A2D
- success: #13795B
- warning: #D97706
- info: #2D6FA3
- focus-ring: #1F7AE0

### Dark theme
- background: #09131D
- surface: #112233
- inset: #163047
- border: #274764
- text: #F4F8FB
- muted: #A9BBCB
- primary: #69A6E3
- accent: #FFC247
- destructive: #F17263
- success: #52C19E
- warning: #F2B24C
- info: #79B7F2
- focus-ring: #8BC2FF

## 3. Theme Logic
- Default theme is light because trust-led local-service sites convert better when readable at a glance.
- Dark theme is opt-in via ThemeSwitcher and persists locally.
- Accent usage cap: keep accent below roughly one sixth of any screen so primary actions stay clear.
- High-contrast mode: preserve solid surface separation, never rely on translucency alone, and increase border clarity before increasing saturation.

## 4. Typography
- Display: Space Grotesk, served from Google Fonts with system sans fallback
- Body: Manrope, served from Google Fonts with system sans fallback
- Mono: IBM Plex Mono
- Display scale: display-1 4rem, display-2 3.25rem, display-3 2.5rem
- Heading scale: h1 3rem, h2 2.25rem, h3 1.75rem, h4 1.375rem, h5 1.125rem
- Body scale: body-lg 1.125rem, body-md 1rem, body-sm 0.9375rem
- Label scale: label-lg 0.9375rem, label-md 0.875rem, caption 0.75rem
- Line-height policy: 1.08 display, 1.2 headings, 1.6 body, 1.45 labels
- Letter-spacing policy: display -0.03em, headings -0.02em, body 0, overline 0.08em
- Weight usage: 400 body, 500 labels, 600 headings, 700 CTA labels, 800 display emphasis

## 5. Spacing System
- Base scale: 8px
- Allowed spacing tokens: 0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120
- Section rhythm: mobile 40, tablet 56, desktop 80
- Card padding: compact 16, standard 24, feature 32
- Header vertical padding: compact on scroll, standard at top

## 6. Layout Tokens
- Containers: sm 640, md 768, lg 1024, xl 1200, 2xl 1360
- Grid columns: mobile 4, tablet 8, desktop 12
- Gutters: mobile 16, tablet 24, desktop 32
- Content alignment defaults: left aligned for trust copy, centered only for selected hero and CTA bands

## 7. Surface System
- Page base: warm-cool light neutral with white content panels
- Elevated: white surface with hairline border and subtle shadow
- Inset: pale blue-grey utility surface for trust strips and form context
- Overlay: dark gradient-backed hero overlays for text and trust chips
- Interactive surfaces: filled primary for main CTA, outline secondary for lower-priority actions

## 8. Radius and Borders
- Radius scale: none 0, xs 4, sm 8, md 12, lg 16, xl 20, 2xl 24, 3xl 32, full 9999
- Button radius: md
- Input radius: md
- Card radius: lg
- Hero panel radius: xl
- Border weights: subtle 1, strong 2

## 9. Shadow and Depth
- Depth 1: quiet elevation for standard cards
- Depth 2: interactive lift for hover-ready proof and service panels
- Depth 3: overlay or modal depth only
- Focus-ring shadow: ring plus outer halo, never color-only
- Decorative heavy shadows are forbidden

## 10. Motion Tokens
- Duration tokens: instant 0ms, fast 140ms, base 220ms, slow 320ms, cinematic 460ms
- Easing tokens: standard cubic-bezier(0.2, 0.8, 0.2, 1), spring cubic-bezier(0.16, 1, 0.3, 1), decel cubic-bezier(0.12, 0.84, 0.32, 1), accel cubic-bezier(0.55, 0, 0.9, 0.2)
- Full choreography lives in motion-system.md

## 11. Breakpoints
- sm: 640
- md: 768
- lg: 1024
- xl: 1280
- 2xl: 1440

## 12. Iconography
- Stroke style: outline-first with selective filled trust badges
- Stroke widths: thin 1.5, base 1.75, bold 2
- Sizes: xs 16, sm 20, md 24, lg 32
- Filled exceptions: emergency badge, trust seal, review star cluster

## 13. Imagery and Media
- Photography direction: real electricians, vans, switchboards, smoke alarm installs, EV charger setups, commercial fit-outs, team-on-site documentation
- Core aspect ratios: 16:9 hero media, 4:3 service proof, 1:1 team and review avatars, 3:2 project thumbnails
- Allowed formats: WebP and AVIF primary, PNG for logos and badges, SVG for icons
- Off-limits imagery: generic smiling-office stock photos, fake call centre imagery, abstract electricity renders with no real work context

## 14. Content Density Rules
- Spacious: hero, CTA bands, emergency reassurance blocks
- Balanced: services, proof, reviews, project index
- Dense: footer, FAQ, commercial capability tables

## 15. Mobile App-Like Rules
- Sticky bottom dock required on marketing pages
- Use sheet behavior for filters or service-area lookup on mobile before using modal
- Minimum tap target: 44
- Sticky call action outranks informational utilities on smaller screens

## 16. Accessibility Tokens & Rules
- Focus ring: color.focus-ring with shadow.focus and 2px minimum visible outline
- Minimum contrast: WCAG AA everywhere, target AAA for body copy on hero overlays where practical
- Reduced motion: transform-heavy movement swaps to opacity-only or static reveal
- Form labels persist above inputs at all times; placeholders are supplemental only

## 17. Theming and Customization
- Brand customization can shift primary hue and accent within trust-safe bounds without changing spacing, motion, or layout primitives
- Commercial vs residential campaigns can swap imagery and proof emphasis while retaining the same token base
- Area pages may add locality-specific accent imagery but not override navigation or CTA hierarchy

## 18. Token Naming and Output
- Token naming uses kebab-case with semantic namespaces
- Tailwind should map semantic classes to token categories, not raw values
- Output files: design-system.md for humans, design-system.tokens.json for execution

## 19. Forbidden Values
- No raw hex, px, or ms values inside implementation components
- No inline style attributes for brand color, spacing, or typography
- No dark-first inversion of trust-critical pages
