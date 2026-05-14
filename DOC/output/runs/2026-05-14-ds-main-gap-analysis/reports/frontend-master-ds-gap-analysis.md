# Frontend-Master_DS Gap Analysis

Date: 2026-05-14
Scope: canonical `Frontend-Master_DS/src` analysis only. No canonical DS edits were made by this report.

## 1. Canonical Source Cleanup Tracker

Current `src` is not clean factory state. It still contains site-specific delivery surfaces:

- `src/app/(marketing)/layout.tsx` renders `PublicSiteShell` with `ACTIVE_SITE_PRESET`.
- `src/app/(marketing)/page.tsx` renders `ACTIVE_SITE_PRESET.pages.home`.
- `src/app/(marketing)/[...slug]/page.tsx` maps arbitrary slugs to active preset pages and falls into generated 404 when not found.
- `src/app/route-map.ts` contains site route names: home, services, projects, blog, contact.
- `src/site/index.ts` imports and activates example presets.
- `src/site/presets/solarInstallation.ts` is a complete SolarBright example site.
- `src/site/presets/modernSaasStartup.ts` is a complete Cadence example site.
- `src/app/preview/**` currently contains canonical preview routes, but the desired rule is no preview in canonical DS.

Required clean-factory target:

- Keep `src/ds/**` as the DS core.
- Keep `src/app/layout.tsx` and `src/app/globals.css` because Next needs the shell and DS CSS import.
- Remove canonical `(marketing)` routes from the DS root.
- Remove canonical `src/app/preview/**` routes from the DS root. Preview should be generated only in run-scoped clones after DS updates.
- Replace `src/site/index.ts` with an empty export surface: `SITE_PRESETS = {}` only. Do not export `ACTIVE_SITE_PRESET` from canonical factory.
- Remove or archive `src/site/presets/*.ts` example sites outside canonical runtime. Since the user asked for no sites in canonical `src`, these should not remain under `src/site/presets`.
- Replace `src/site/README.md` with factory instructions: per-project presets are created only in clones.
- Keep `src/features` and `src/flows` only if they are documented empty extension boundaries; they currently export no behavior.

Contract impact:

- `generated/ds.contract.json.counts.presets` should become `0` after `npm run ds:contract`.
- `ds-contract.gen.test.ts` currently allows zero site presets, but still requires variants, archetypes, motion presets, themes, and wireframes.

## 2. Route / 404 Tracker

Current state:

- There is no custom `src/app/not-found.tsx`.
- There is no custom `src/app/error.tsx`.
- There is no custom `src/app/loading.tsx`.
- The generated `_not-found` route appears because dynamic marketing routes call `notFound()`.
- DS contract declares wireframe purpose `404`, but there are zero 404 wireframes.

Required DS work:

- Add at least one registered `404` wireframe per archetype, or at minimum a default cross-site 404 pattern for each archetype family.
- Add reusable section variants that make 404 pages possible without hard-coded route pages: likely `hero`, `cta`, and optionally `footer-content`.
- Preview clones should expose `/preview/wireframes/<404-wireframe-id>` after each 404 wireframe lands.

## 3. Contract Coverage Snapshot

Current contract counts:

- Variants: 23
- Archetypes: 8
- Motion presets: 8
- Themes: 2
- Site presets: 2
- Wireframes: 2
- Declared section kinds: 15
- Declared wireframe purposes: 8

Implemented variants by kind:

| Kind | Count | Status |
|---|---:|---|
| hero | 6 | usable but not all archetypes |
| features | 4 | usable but not all archetypes |
| testimonials | 1 | sparse |
| faq | 1 | sparse |
| blogList | 0 | missing |
| cta | 4 | usable but no default |
| newsletter | 0 | missing |
| stats-band | 1 | sparse |
| process-steps | 1 | sparse |
| logo-cloud | 1 | sparse |
| case-studies | 1 | sparse |
| pricing | 3 | usable for modern-saas only |
| team | 0 | missing |
| contact | 0 | missing |
| footer-content | 0 | missing |

Section kinds with zero registry variants:

- blogList
- newsletter
- team
- contact
- footer-content

Sparse section kinds with only one variant:

- testimonials
- faq
- stats-band
- process-steps
- logo-cloud
- case-studies

Kinds missing `isDefault: true` default variants:

- hero
- features
- testimonials
- faq
- blogList
- cta
- newsletter
- pricing
- team
- contact
- footer-content

## 4. Archetype Coverage Tracker

Implemented variants by archetype:

| Archetype | Count | Status |
|---|---:|---|
| editorial-premium | 2 | too thin |
| modern-saas | 16 | strongest coverage |
| bold-consumer | 2 | too thin |
| ai-product | 1 | too thin |
| startup-conversion | 0 | missing entirely |
| local-business-trust | 1 | too thin |
| dashboard-ops | 0 | missing entirely |
| portfolio-craft | 1 | too thin |

Zero-variant archetypes:

- startup-conversion
- dashboard-ops

Missing archetype-kind pairs:

- Strict full coverage target is 8 archetypes x 15 section kinds = 120 pairs.
- Current implementation covers 15 pairs at most.
- Missing pairs: 105.

Priority interpretation:

- Do not implement all 120 blindly in one pass.
- Build a minimum site-complete kit for every archetype first: hero, features, testimonials, faq, cta, stats-band, contact, footer-content, 404-capable composition.
- Then fill specialized page kinds: pricing, blogList, newsletter, case-studies, team, logo-cloud, process-steps.

## 5. Wireframe Coverage Tracker

Current registered wireframes:

| Wireframe | Archetype | Purpose | Sections |
|---|---|---|---:|
| page-modern-saas-landing | modern-saas | landing | 8 |
| page-modern-saas-pricing | modern-saas | pricing | 5 |

Declared wireframe purposes:

- landing
- pricing
- about
- contact
- blog-index
- case-study-index
- auth
- 404

Strict full wireframe target:

- 8 archetypes x 8 purposes = 64 wireframes.
- Current wireframes: 2.
- Missing wireframe pairs: 62.

Highest-priority missing wireframes:

- page-editorial-premium-landing
- page-bold-consumer-landing
- page-ai-product-landing
- page-startup-conversion-landing
- page-local-business-trust-landing
- page-dashboard-ops-landing
- page-portfolio-craft-landing
- page-modern-saas-about
- page-modern-saas-contact
- page-modern-saas-blog-index
- page-modern-saas-case-study-index
- page-modern-saas-auth
- page-modern-saas-404

## 6. Renderer / Fallback Tracker

`PublicPresetPage` currently renders variants in this order:

1. Explicit section variant id.
2. Default registry variant for kind.
3. Legacy built-in fallback for hero, features, testimonials, faq, blogList, cta, newsletter.
4. Missing-surface card for stats-band, process-steps, logo-cloud, case-studies, pricing, team, contact, footer-content.

Gaps:

- Several declared kinds still rely on legacy non-registry fallbacks, which is risky for retrieval-oriented site generation.
- `blogList` and `newsletter` can render via legacy fallbacks but have no registry variants, so agents cannot select them contract-first.
- `team`, `contact`, and `footer-content` have content schema but no renderer variants.
- Defaults are missing for many kinds, so fallback behavior is inconsistent.

Required work:

- Promote every declared section kind to at least one registered DS variant.
- Add defaults for every section kind.
- Reduce or remove legacy fallback dependency after all kinds are registry-backed.

## 7. Component / Preview Coverage Tracker

Canonical DS module inventory:

- 16 primitives
- 63 components
- 4 layouts
- 5 widgets
- 3 visuals
- 9 runtime surfaces across mobile/tablet/web
- 100 TSX modules total in these families

Current canonical preview state:

- Only wireframe preview routes exist in canonical DS.
- Component-level visual demo coverage is not canonicalized.
- The run-scoped clone created earlier exposes inventory cards, but not full interactive stories for all 100 modules.

Required preview-after-DS-update work:

- Generate preview only in a clone.
- Preview must include:
  - every section variant visualized individually;
  - every wireframe visualized individually;
  - every exported primitive/component/layout/widget/runtime/visual module with at least one demo state;
  - coverage matrix and missing tracker generated from contract;
  - route checks for all preview links.

## 8. Recommended DS Build Phases

Phase 0 - Clean canonical factory root

- Remove legacy marketing/site preview routes from canonical `src/app`.
- Remove sample site presets from canonical `src/site/presets`.
- Empty the canonical `SITE_PRESETS` registry.
- Regenerate `generated/ds.contract.json` and verify preset count is 0.

Phase 1 - Contract correctness foundations

- Add registry defaults for every currently implemented kind.
- Add missing section variants for zero-variant kinds:
  - blogList
  - newsletter
  - team
  - contact
  - footer-content
- Add a contract audit that fails when a declared kind has no registered variant.
- Add preview audit later in clone, not canonical.

Phase 2 - Site-complete baseline per archetype

For each of the 8 archetypes, ensure these kinds exist:

- hero
- features
- testimonials
- faq
- cta
- stats-band
- contact
- footer-content

This gives every archetype enough DS surface to build a basic complete marketing site.

Phase 3 - Specialized section depth

Add archetype-appropriate variants for:

- pricing
- blogList
- newsletter
- case-studies
- team
- logo-cloud
- process-steps

Priority by archetype:

- modern-saas: pricing, logo-cloud, testimonials, faq, contact, footer-content, auth.
- startup-conversion: hero, pricing, cta, faq, testimonials, stats-band, contact.
- local-business-trust: hero, services/features, testimonials, process, contact, footer-content, 404.
- dashboard-ops: dashboard shell wireframes, data-heavy features, stats-band, auth, 404.
- portfolio-craft: hero, case studies, about/team, contact, footer-content.
- editorial-premium: hero, blogList, newsletter, case studies, about, footer-content.
- ai-product: hero, features, pricing, testimonials, FAQ, auth, 404.
- bold-consumer: hero, features, testimonials, CTA, newsletter, 404.

Phase 4 - Wireframe library

Minimum wave:

- landing wireframe for all 8 archetypes.
- 404 wireframe for all 8 archetypes.
- contact wireframe for all 8 archetypes.

Second wave:

- pricing for modern-saas, ai-product, startup-conversion, dashboard-ops.
- blog-index for editorial-premium, local-business-trust, portfolio-craft, bold-consumer.
- case-study-index for modern-saas, portfolio-craft, local-business-trust, editorial-premium.
- auth for modern-saas, ai-product, startup-conversion, dashboard-ops.

Phase 5 - Clone preview after each DS update

After canonical DS update and verify pass:

- Clone the DS into a new `DOC/output/runs/<timestamp>/codegen/<slug>` folder.
- Build preview routes only inside the clone.
- Preview every variant, wireframe, component, layout, runtime surface, widget, visual, and missing tracker.
- Run full verify in the clone.

## 9. Non-Negotiable Quality Gates

Before any canonical DS update is considered complete:

- `npm run typecheck`
- `npm run lint`
- `npm test`
- `npm run build`
- `npm run ds:audit`
- `npm run ds:a11y`
- `npm run ds:contract`
- `npm run verify`

Additional gates to add:

- Contract fails if any declared section kind has zero variants.
- Contract fails if any implemented section kind has no default variant.
- Wireframe validation remains strict: every wireframe section variant id must exist and match archetype.
- Preview clone fails if any contract variant lacks a visual preview route.

## 10. Execution Boundary

The current DS_Frontend_developer role is allowed to read canonical DS and produce reports, but its safety doctrine forbids direct edits to `Frontend-Master_DS` canonical source. Actual canonical DS mutation should run through the approved planning/execution workflow or a mode explicitly authorized to edit DS core.
