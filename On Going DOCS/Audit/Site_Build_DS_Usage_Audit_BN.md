# Site Build DS Usage Audit (SunPath Solar) — বাংলা

## 1) রিপোর্টের উদ্দেশ্য
এই রিপোর্টে দেখানো হয়েছে SunPath Solar site build করতে ঠিক কোন DS files/layers ব্যবহার হয়েছে, যাতে targeted improvement করা যায় (বিশেষ করে hero/section quality)।

---

## 2) Build Scope Context
Run path:
- `DS-Planning-Engine/output/runs/20260513-sunpath-solar/codegen/sunpath-solar/`

এই run-এ site assemble হয়েছে DS preset-driven model দিয়ে।

---

## 3) Project-Specific Files (clone-এর ভিতরে)

### 3.1 Runtime wiring
1. `src/site/presets/sunpathSolar.ts`
- পুরো SunPath page map + section payload + variant selection
- nav/footer/support config

2. `src/site/index.ts`
- `SUNPATH_SOLAR_PRESET` register + active preset swap

3. `src/app/route-map.ts`
- project routes add: `residential`, `commercial`, `howItWorks`, `about`

4. Marketing route files:
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/residential/page.tsx`
- `src/app/(marketing)/commercial/page.tsx`
- `src/app/(marketing)/how-it-works/page.tsx`
- `src/app/(marketing)/projects/page.tsx`
- `src/app/(marketing)/about/page.tsx`
- `src/app/(marketing)/contact/page.tsx`
- compatibility mapping:
  - `src/app/(marketing)/services/page.tsx`
  - `src/app/(marketing)/blog/page.tsx`

---

## 4) DS Engine Files Used by This Site

## 4.1 Platform Rendering Layer
1. `src/ds/platform/PublicPresetPage.tsx`
- page model render entrypoint

2. `src/ds/platform/PublicSiteShell.tsx`
- site shell wrapper

3. `src/ds/platform/PublicSiteHeader.tsx`
- header/nav rendering

4. `src/ds/platform/PublicSiteFooter.tsx`
- footer rendering

5. `src/ds/platform/SupportDock.tsx`
- support CTA/chat dock

6. `src/ds/platform/publicSitePreset.ts`
- preset/page/section type contract

7. `src/ds/platform/siteConfig.ts`
- nav/footer/support config types

## 4.2 Composition Registry + Resolver
1. `src/ds/composition/sections/_registry.ts`
- কোন kind → কোন variant usable

2. `src/ds/composition/sections/_schema.ts`
- variant payload schema

3. `src/ds/composition/sections/_helpers.ts`
- section resolution helpers

4. `src/ds/composition/templates/PageTemplate.tsx`
- section sequence rendering

5. `src/ds/composition/patterns/SectionPattern.tsx`
- common section wrapper pattern

## 4.3 Variants Actually Used in SunPath preset
SunPath preset-এ 35 section এ নিচের variant ids repeatedly ব্যবহৃত:

1. `hero-editorial-premium-1`
- file: `src/ds/composition/sections/variants/hero/hero-editorial-premium-1.tsx`

2. `stats-band-4col`
- file: `src/ds/composition/sections/variants/stats-band/stats-band-4col.tsx`

3. `features-split-alternating`
- file: `src/ds/composition/sections/variants/features/features-split-alternating.tsx`

4. `process-steps-vertical`
- file: `src/ds/composition/sections/variants/process-steps/process-steps-vertical.tsx`

5. `testimonials-marquee`
- file: `src/ds/composition/sections/variants/testimonials/testimonials-marquee.tsx`

6. `logo-cloud-grid`
- file: `src/ds/composition/sections/variants/logo-cloud/logo-cloud-grid.tsx`

7. `cta-full-bleed`
- file: `src/ds/composition/sections/variants/cta/cta-full-bleed.tsx`

8. `case-studies-grid`
- file: `src/ds/composition/sections/variants/case-studies/case-studies-grid.tsx`

## 4.4 Foundation/Theme layer used indirectly
1. `src/ds/foundation/themes/archetypeRegistry.ts`
2. `src/ds/foundation/themes/registry.ts`
3. `src/ds/foundation/themes/theme.ts`
4. `src/ds/foundation/themes/ThemeInitScript.tsx`
5. `src/ds/foundation/tokens/vars.ts`
6. `src/ds/foundation/motion/presets.ts`

## 4.5 Style layer used indirectly
- `src/ds/styles/ds.section-variants.css`
- `src/ds/styles/ds.theme.css`
- `src/ds/styles/ds.tokens.css`
- `src/ds/styles/ds.components.css`
- `src/ds/styles/index.css`

---

## 5) Why visual output felt weak (audit finding)

1. Hero variant fit সমস্যা
- SunPath home hero uses `hero-editorial-premium-1`.
- Local-business trust posture এর জন্য এটা strongest conversion hero না-ও হতে পারে।

2. Variant diversity সীমিত
- বহু page-এ একই variants reuse হয়েছে (hero/features/stats/cta) → visual sameness

3. DS contract সীমাবদ্ধতা
- available variant set থেকেই বাছাই হয়েছে, custom নতুন variant add করা হয়নি

---

## 6) Improvement Priority (পরবর্তী কাজের জন্য)

1. Hero Improvement
- Review and tune:
  - `src/ds/composition/sections/variants/hero/hero-editorial-premium-1.tsx`
  - অথবা local-service optimized hero variant add (registry/schema/contract সহ)

2. Local-business specific section variants
- features/testimonials/cta/process এ local-trust centric visual language add

3. Archetype-aware default resolver উন্নয়ন
- `local-business-trust` archetype-এ stronger default variant ranking

4. Preset authoring policy
- same variant repetition cap define করা (per page and site-wide)

---

## 7) Quick Trace (Request → Renderer)

SunPath request flow:
1. Next route file (`src/app/(marketing)/*/page.tsx`)
2. `PublicPresetPage` call
3. preset page model (`src/site/presets/sunpathSolar.ts`)
4. section resolver (`_registry.ts` + `_schema.ts`)
5. selected variant component render
6. theme/tokens/styles apply

---

## 8) Audit Conclusion
Site build DS-driven ছিল, কিন্তু quality issue মূলত variant-fit ও repetition থেকে এসেছে।
System-level isolation ঠিক করার পর এখন পরবর্তী ধাপে DS variant quality (especially hero) tune করাই logical next action.
