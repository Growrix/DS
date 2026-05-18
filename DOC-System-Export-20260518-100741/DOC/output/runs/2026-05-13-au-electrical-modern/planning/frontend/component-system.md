---
document_type: component-system
project_name: electrical-service-provider-au
build_stage: 3-component-foundation
depends_on:
  - master-ui-architecture.md
  - design-system.md
recommended_next_reads:
  - motion-system.md
  - pages/
planning_status: draft_assumption_led
---

# Component System

## 1. Strategy
Reusable product-grade components only. This project uses the primitive kit for layout and behavior, then layers a small shared set of trust-led local-service components on top.

Composition model:
- primitives live in src/components/primitives/
- shared molecules and organisms live in src/components/ui/, src/components/navigation/, src/components/sections/, and src/components/forms/
- route-specific proof grids and area blocks stay page-composed when differentiation demands it

## 2. Atoms list
- No project-specific atoms beyond the primitive kit; Button, Pressable, TextField, Disclosure, Stack, Frame, Surface, Grid, MediaFrame, Cluster, Trail, and Reveal are generated from the planner's primitive layer.

## 3. Molecules list
- [ThemeSwitcher](components/ThemeSwitcher.md)
- [ServiceCard](components/ServiceCard.md)
- [AuthFormCard](components/AuthFormCard.md)

## 4. Organisms list
- [SiteHeader](components/SiteHeader.md)
- [AuthModal](components/AuthModal.md)
- [MobileBottomNav](components/MobileBottomNav.md)
- [HeroSection](components/HeroSection.md)
- [TrustStrip](components/TrustStrip.md)
- [QuoteFormCard](components/QuoteFormCard.md)
- [FAQAccordion](components/FAQAccordion.md)
- [CTAConversionBand](components/CTAConversionBand.md)
- [SiteFooter](components/SiteFooter.md)

## 5. Shared Accessibility Rules
- Follow accessibility-rules.md for semantic landmarks, skip-links, and focus policy
- All phone and quote entry points remain keyboard reachable within the first tab sequence
- Hero trust chips must preserve contrast over real imagery in both themes
- Mobile bottom navigation must remain fully usable without hover states
- Auth modal must trap focus, restore focus to the trigger, and support in-place mode switching without route change

## 6. Responsive Behavior Rules
- Header simplifies before it hides information; call action is preserved on small screens
- Hero sections collapse to single-column priority order: trust, message, CTA, then media
- Service cards stack vertically on mobile and split into balanced grids on tablet and desktop
- QuoteFormCard never becomes a two-step funnel on mobile
- Auth modal becomes a full-height sheet on small screens while keeping close and mode-switch actions visible

## 7. State Management Guidance
- Quote form progress is preserved on temporary navigation and validation errors
- Service-area filters or suburb lookup states are URL-synced when introduced
- Theme state is client-persisted locally
- Contact intent state should bias toward call-first on emergency routes and quote-first on planned-service routes
- Auth mode state switches in-modal by default and falls back to /sign-in or /sign-up only for direct route entry

## 8. Why this pattern fits
Australian electrical lead-gen sites win when they feel faster, clearer, and more trustworthy than the average trades template. This component set is intentionally narrow: it prioritizes fast pathfinding, trust proof, and repeatable conversion blocks without flattening route identity.

The shared set also leaves room for route-specific differentiation. Home, Emergency, Commercial, and Projects should not feel like the same shell with different headlines. Shared components solve recurring trust and conversion tasks; page-composed sections create the visual distinction.
