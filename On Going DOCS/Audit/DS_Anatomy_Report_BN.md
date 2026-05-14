# Frontend-Master_DS Anatomy Report (বাংলা)

## 1) রিপোর্টের উদ্দেশ্য
এই রিপোর্টের লক্ষ্য হলো `Frontend-Master_DS` কে এমনভাবে বোঝানো যাতে নতুন plan এ fresh execution করার সময় বোঝা যায়:
- কোন folder/framework layer কী কাজ করে
- কোন file runtime-critical, কোনটা support/contract
- কোথায় change করলে system-level impact পড়ে

---

## 2) High-Level Architecture Map

### A. Runtime Entry Layer
- `src/app/` → Next.js App Router entrypoint
- `src/site/` → active preset registry + site config selection
- `src/ds/` → Design System primitives → components → composition → platform rendering engine

### B. Machine Contract Layer
- `generated/ds.contract.json` → DS-এর machine-readable capability registry (variants, archetypes, themes, presets)

### C. Quality/Automation Layer
- `scripts/ds-audit.mjs` → DS audit checks

---

## 3) Folder-by-Folder + File-by-File (Operational)

## 3.1 `src/app/` (Minimal Generic Startup Structure)
এই layer এখন clean রাখা হয়েছে যাতে DS generic থাকে এবং future plan clone-এ fresh build করা যায়।

### Files
1. `src/app/globals.css`
- App-level global CSS hooks
- DS base styles load করার wrapper surface

2. `src/app/layout.tsx`
- Root HTML shell
- font bootstrap
- `ThemeInitScript` inject করে initial theme hydration ঠিক করে
- skip-link accessibility entry

3. `src/app/route-map.ts`
- centralized route constants
- link/push consistency
- app navigation references-এর single source

### Marketing Segment
4. `src/app/(marketing)/layout.tsx`
- `PublicSiteShell` wrapper
- active preset-এর `config` apply করে header/footer/support/nav render

5. `src/app/(marketing)/page.tsx`
- root `/` route
- `ACTIVE_SITE_PRESET.pages.home` render করে

6. `src/app/(marketing)/[...slug]/page.tsx`
- dynamic catch-all marketing page resolver
- preset page keys (`about`, `howItWorks` ইত্যাদি) → URL slug map
- matched page না পেলে `notFound()`

> সিদ্ধান্ত: hardcoded page folders না রেখে catch-all strategy রাখা হয়েছে যাতে DS generic থাকে, project-specific pages clone runtime-এ generate হয়।

---

## 3.2 `src/site/` (Site Assembly Layer)

1. `src/site/index.ts`
- available presets register করে
- `ACTIVE_SITE_PRESET` নির্বাচন করে
- runtime rendering সবসময় এখানকার active preset follow করে

2. `src/site/README.md`
- site preset integration notes

3. `src/site/presets/modernSaasStartup.ts`
- reference preset (generic)

4. `src/site/presets/solarInstallation.ts`
- reference preset (generic/local-service example)

---

## 3.3 `generated/` (Machine Contract)

1. `generated/ds.contract.json`
- DS কি কি পারে তার contract:
  - section variants
  - archetype mapping
  - theme/motion support
  - preset-level metadata
- planner/executor deterministic selection এই file ধরে করে

---

## 3.4 `scripts/` (Automation)

1. `scripts/ds-audit.mjs`
- DS consistency, registry sanity, composition checks
- verify chain-এর audit step

---

## 3.5 `src/ds/` (Design System Core)

## 3.5.1 Root Files
1. `src/ds/index.ts`
- DS public exports barrel
- app/preset runtime এই endpoint থেকে import করে

2. `src/ds/icons.ts`
- icon registry/export surface

3. `src/ds/DESIGN-SYSTEM-ANATOMY.md`
- internal design-system anatomy notes

4. `src/ds/DS-COVERAGE-CHECKLIST.md`
- DS coverage checklist

5. `src/ds/SEMANTIC-CLASSES-REGISTRY.md`
- semantic class mapping docs

## 3.5.2 `src/ds/primitives/`
Atomic building blocks:
- `Button.tsx`, `Input.tsx`, `Textarea.tsx`, `Select.tsx`, `Checkbox.tsx`, `Radio.tsx`, `Switch.tsx`
- `Container.tsx`, `Grid.tsx`, `Stack.tsx`, `Spacer.tsx`, `Divider.tsx`
- `Text.tsx`, `Spinner.tsx`, `Avatar.tsx`, `RangeSlider.tsx`
- test: `__tests__/primitives.test.tsx`

Role:
- token-aware lowest-level UI components
- higher components/composition layer এ reuse

## 3.5.3 `src/ds/components/`
Reusable business/UI components (large library):
- Navigation/layout UI: `AppBar.tsx`, `BottomNav.tsx`, `Breadcrumbs.tsx`, `MegaMenu.tsx`
- Feedback/status: `Alert.tsx`, `Badge.tsx`, `Toast.tsx`, `Skeleton.tsx`, `Status.tsx`
- Content/display: `Card.tsx`, `IconCard.tsx`, `ImageCard.tsx`, `Section.tsx`, `SectionHeader.tsx`
- Data widgets: `DataTable.tsx`, `DataGrid.tsx`, `Charts.tsx`, `MetricCard.tsx`, `Sparkline.tsx`
- Interaction: `Accordion.tsx`, `Tabs.tsx`, `Popover.tsx`, `Tooltip.tsx`, `Modal.tsx`, `Drawer.tsx`
- Forms/helpers: `Field.tsx`, `FormHelpers.tsx`, `TagInput.tsx`, `MultiSelect.tsx`, `DateTimePickers.tsx`
- Media/marketing: `Carousel.tsx`, `ResponsiveImage.tsx`, `VideoPlayer.tsx`, `Marketing.tsx`, `PublicBlocks.tsx`
- tests:
  - `__tests__/components.test.tsx`
  - `__tests__/data-components.test.tsx`
  - keyboard a11y suites

Role:
- feature-level reusable DS components
- composition section variants এগুলো দিয়ে assembled হয়

## 3.5.4 `src/ds/composition/`
Plan/preset driven page assembly engine

### Core
- `composition/index.ts`
- `blocks/MarketingBlocks.ts`
- `blocks/PublicBlocks.ts`
- `patterns/SectionPattern.tsx`
- `templates/PageTemplate.tsx`

### Section Registry & Schema
- `sections/_registry.ts` → কোন kind-এর কোন variant available
- `sections/_schema.ts` → variant content schema/types
- `sections/_helpers.ts` → variant resolution helpers

### Implemented Section Variants
- Hero:
  - `variants/hero/hero-editorial-premium-1.tsx`
  - `variants/hero/hero-modern-saas-split.tsx`
  - `variants/hero/hero-bold-consumer-oversized.tsx`
  - `variants/hero/hero-ai-product-streaming.tsx`
- Features:
  - `variants/features/features-split-alternating.tsx`
  - `variants/features/features-bento-asymmetric.tsx`
- Stats: `variants/stats-band/stats-band-4col.tsx`
- Process: `variants/process-steps/process-steps-vertical.tsx`
- Testimonials: `variants/testimonials/testimonials-marquee.tsx`
- Logo cloud: `variants/logo-cloud/logo-cloud-grid.tsx`
- CTA: `variants/cta/cta-full-bleed.tsx`
- Case studies: `variants/case-studies/case-studies-grid.tsx`

Role:
- preset section model → exact variant component mapping
- DS planning/execution core এখানেই

## 3.5.5 `src/ds/foundation/`
Theme/tokens/motion/a11y kernel

- a11y:
  - `a11y/VisuallyHidden.tsx`
  - `a11y/usePrefersReducedMotion.ts`
- motion:
  - `motion/presets.ts`
  - `motion/tokens.ts`
- themes:
  - `themes/archetypeRegistry.ts`
  - `themes/registry.ts`
  - `themes/theme.ts`
  - `themes/ThemeInitScript.tsx`
  - test: `themes/__tests__/theme.test.ts`
- tokens:
  - `tokens/vars.ts`, `tokens/index.ts`
- semantics:
  - `semantics/registry.ts`

Role:
- design tokens, archetype, motion policy, accessibility primitives

## 3.5.6 `src/ds/platform/`
Public-site runtime renderer

- `PublicPresetPage.tsx` → preset page renderer
- `PublicSiteShell.tsx` → shell wrapper
- `PublicSiteHeader.tsx` → header rendering
- `PublicSiteFooter.tsx` → footer rendering
- `SupportDock.tsx` → support actions/chat dock
- `publicSitePreset.ts` → preset schema/type contract
- `siteConfig.ts` → site config type definitions
- `index.ts` → platform exports

Role:
- app layer এই ফাইলগুলো call করে real site render করে

## 3.5.7 `src/ds/layouts/`
- `PublicShell.tsx`, `DashboardShell.tsx`, `DocsShell.tsx`, `CenteredShell.tsx`
- tests + snapshots

## 3.5.8 `src/ds/runtime/`
Device/runtime shells
- `runtime/web/*`
- `runtime/app/mobile/*`
- `runtime/app/tablet/*`
- mobile sheet tests

## 3.5.9 `src/ds/styles/`
CSS layering files:
- reset/base/tokens/theme/utilities/components/layouts/patterns/section-variants/overrides
- `styles/index.css` aggregator

## 3.5.10 Others
- `src/ds/patterns/*` → async/error boundary patterns
- `src/ds/preview/PreviewPlatform.tsx` → preview tooling
- `src/ds/visuals/*` → decorative visual effects
- `src/ds/widgets/*` → widget abstractions + tests
- `src/ds/utils/*` → utilities (`cx`, keyboard helpers)
- `src/ds/__codegen__/ds-contract.gen.test.ts` → contract generation test

---

## 4) কোন layer change করলে কী impact

1. `src/app/*`
- Routing/shell behavior impact

2. `src/site/*`
- কোন preset active হবে, page registry impact

3. `src/ds/composition/sections/*`
- section variants visual/behavior impact

4. `src/ds/foundation/*`
- global theme/token/motion/a11y impact

5. `generated/ds.contract.json`
- planner/executor variant selection contract impact

---

## 5) Improvement Planning Guidance (পরবর্তী ধাপের জন্য)

1. Hero quality improve করতে প্রথমে target করুন:
- `src/ds/composition/sections/variants/hero/*`
- `src/ds/styles/ds.section-variants.css`
- `src/ds/foundation/themes/archetypeRegistry.ts`

2. Project-specific page behavior optimize করতে canonical app না ছুঁয়ে করুন:
- run clone-এর preset + route generation logic
- DS execution allowlist clone packaging rules

3. System safety gates (already added):
- canonical mutation blocker
- clone runtime blocker
- over-clone blocker

---

## 6) Audit Conclusion
Frontend-Master_DS এখন generic DS runtime + Next startup হিসেবে ব্যবহারযোগ্য।
Project-specific delivery future run-এ clone scope-এ রাখতে হবে; canonical এ নয়।
