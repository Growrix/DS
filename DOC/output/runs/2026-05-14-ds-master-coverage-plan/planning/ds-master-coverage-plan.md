# DS Master Coverage Plan — Locked

**Status:** DRAFT-PENDING-LOCK (user to review and convert to LOCKED)
**Owner agent:** `DS_Frontend_developer` (planning phase)
**Date:** 2026-05-14
**Supersedes:** all prior ad-hoc DS variant additions
**Canonical DS:** `Frontend-Master_DS/` (read-only)
**Output workspace:** `DOC/output/runs/2026-05-14-ds-master-coverage-plan/`

---

## 1. Executive summary

The DS currently exposes **28 section variants** across **15 kinds × 8 archetypes** (120 possible cells, only **20 filled — 17 % coverage**). Coverage is heavily skewed: `modern-saas` holds 17 of 28 variants; five archetypes have zero wireframes.

This plan locks one systematic target so the DS reaches **professional-agency breadth without chaos**: a defined variation taxonomy per kind, archetype tiering, a coverage matrix, naming discipline (already enforced by the contract emitter), a visual quality rubric, and a four-phase delivery sequence.

**Locked targets after this plan ships:**

- **~152 section variants** (up from 28) — every kind ≥ 10 variants, distributed so every archetype is usable.
- **24 wireframes** (up from 5) — every archetype has at minimum a landing wireframe plus its two most relevant page purposes.
- **All existing alignment defects in current variants fixed.**
- **Zero net edits to canonical DS foundation tokens** (kept stable; new visual range comes from compositional layouts, not new tokens).
- **Zero new section kinds** (the 15 existing kinds are the locked vocabulary).
- **Zero new archetypes** (the 8 existing archetypes are the locked vocabulary).
- **Verify chain stays green at every phase boundary** (typecheck, lint --max-warnings 0, test, build, ds:audit, ds:a11y, ds:contract).

---

## 2. Current state (ground truth from `generated/ds.contract.json`)

### 2.1 Counts

| Surface | Current | Target | Delta |
|---|---:|---:|---:|
| Section kinds | 15 | 15 | 0 (locked) |
| Section variants | 28 | 152 | +124 |
| Archetypes | 8 | 8 | 0 (locked) |
| Wireframes | 5 | 24 | +19 |
| Motion presets | 8 | 8 | 0 (sufficient) |
| Themes | 2 | 2 | 0 (sufficient) |
| Site presets | 2 | 2+ | depends on demand |

### 2.2 Variants by archetype today

| Archetype | Variants today |
|---|---:|
| modern-saas | 17 |
| editorial-premium | 3 |
| local-business-trust | 2 |
| bold-consumer | 2 |
| startup-conversion | 1 |
| dashboard-ops | 1 |
| ai-product | 1 |
| portfolio-craft | 1 |

### 2.3 Variants by kind today (sparse)

| Kind | Variants | Status |
|---|---:|---|
| hero | 6 | partial |
| features | 4 | partial |
| cta | 4 | partial |
| pricing | 3 | partial |
| blogList | 1 | sparse |
| testimonials | 1 | sparse |
| faq | 1 | sparse |
| newsletter | 1 | sparse |
| stats-band | 1 | sparse |
| process-steps | 1 | sparse |
| logo-cloud | 1 | sparse |
| case-studies | 1 | sparse |
| team | 1 | sparse |
| contact | 1 | sparse |
| footer-content | 1 | sparse |

### 2.4 Wireframes today

| Archetype | Wireframes |
|---|---|
| modern-saas | landing, pricing, 404 |
| editorial-premium | blog-index |
| local-business-trust | contact |
| bold-consumer | **none** |
| ai-product | **none** |
| startup-conversion | **none** |
| dashboard-ops | **none** |
| portfolio-craft | **none** |

---

## 3. Locked decisions

The following decisions are LOCKED for the duration of this plan. Any change requires re-locking the plan.

| # | Decision | Rationale |
|---|---|---|
| D1 | **Scope = 10 variants per kind, distributed across archetypes** (≈152 total). Not 2-3 per cell × 120 cells. | Practical agency breadth without combinatorial explosion. |
| D2 | **Keep foundation tokens, motion presets, archetype registry unchanged.** New visual range comes from compositional layouts, type rhythm, media use, and effect combinations — not new tokens. | Avoids contract churn; preserves existing dependents; concentrates effort on composition layer where the user is dissatisfied. |
| D3 | **Wireframe target = 24** (every archetype gets landing + 2 most-relevant purposes). | Unblocks site generation for every archetype while keeping the matrix maintainable. |
| D4 | **Phasing = four phases (P0 → P3) with verify-chain gate between each.** | Each phase ships independently so quality regressions surface early. |
| D5 | **Archetype tiering** — Tier 1 receives full variant set first; Tier 2 follows. Tier 1: `modern-saas`, `editorial-premium`, `bold-consumer`, `ai-product`. Tier 2: `startup-conversion`, `local-business-trust`, `dashboard-ops`, `portfolio-craft`. | Tier 1 covers the four most common agency briefs; Tier 2 is specialist. |
| D6 | **Naming convention re-affirmed:** `<kind>-<archetype>-<descriptor-kebab>`. Variant id never renamed once published. | Already enforced by `_registry.ts`; this plan does not change it. |
| D7 | **No new section kinds, no new archetypes, no new motion presets.** Gaps in those surfaces are out of scope. | Keeps blast radius bounded; the variant gap is the actual problem. |
| D8 | **Output target for codegen = continued clone under `DOC/output/runs/.../codegen/`**, NOT canonical DS edits. | DS lockdown rule. New variants are still authored as files under `Frontend-Master_DS/src/ds/composition/sections/variants/<kind>/` because variant authoring is an extensible surface — but **planning and verification** drive every commit. |

---

## 4. Variation taxonomy — the anti-chaos system

Each section kind has a **variation axis matrix**. Every new variant is positioned on one or more axes; two variants in the same kind cannot occupy identical positions on every axis. This is the rule that prevents chaos.

### 4.1 Hero (target ≥ 10 variants total)

Axes:
- **Layout:** split-left-content / split-right-content / centered / stacked-vertical / overlay-on-media / asymmetric-bento
- **Media:** none / illustration / screenshot / video-loop / photo-bleed / animated-mesh / code-terminal
- **CTA shape:** dual-button / button-plus-form / button-plus-pricing-stub / button-plus-trust-strip
- **Density:** compact / comfortable / full-bleed / extended
- **Effect:** flat / layered-noise / glassmorphism / gradient-mesh / scroll-scale / parallax-photo / animated-border

**Minimum 10 hero variants distributed across archetypes** (target distribution in §5).

### 4.2 Features (target ≥ 10)

Axes:
- **Grid:** 3-col / 4-col / 2-col-tall / bento-asymmetric / vertical-stack / horizontal-scroll
- **Visual:** icon-only / icon+text / icon+illustration / screenshot-per-feature / tabbed-detail / accordion-detail
- **Hierarchy:** flat / categorized / comparison-table / timeline / stepper

### 4.3 Testimonials (target ≥ 10)

Axes:
- **Layout:** marquee-horizontal / grid-3x2 / single-large-quote / stacked-cards / split-with-avatar-grid / vertical-stepper / pinned-with-rotator / inline-pull-quotes / wall-of-love / video-thumbnails
- **Density:** compact / spacious / full-bleed
- **Trust signals:** logo+name / avatar+name+role / company+rating / video / case-study-link

### 4.4 FAQ (target ≥ 10)

Axes:
- **Pattern:** single-column-accordion / two-column-accordion / categorized-tabs / inline-anchored-list / side-nav + content / search-driven / cards-grid / expandable-sections / mega-faq-with-toc / chat-style
- **Density:** compact / comfortable / extended

### 4.5 BlogList (target ≥ 10)

Axes:
- **Layout:** editorial-stack / 3-col-card-grid / 2-col-with-featured / horizontal-scroll / magazine-mosaic / image-led / minimal-list / dense-table / with-sidebar-filters / authors-foregrounded
- **Image:** none / thumbnail / hero-image-per-card / hover-reveal / aspect-ratio variants

### 4.6 CTA (target ≥ 10)

Axes:
- **Layout:** centered-banner / split-with-form / banner-strip / floating-card / full-bleed-photo / gradient-mesh / sticky-bottom / inline-mid-page / multi-CTA-grid / video-bg
- **Action:** single-button / dual-button / button+form / button+phone / button+chat / button+download

### 4.7 Newsletter (target ≥ 10)

Axes:
- **Layout:** inline-bar / split-with-illustration / centered-card / footer-attached / sticky-corner / modal-trigger-zone / multi-list-subscribe / preference-driven / lead-magnet-attached / archive-list-with-form
- **Field count:** email-only / email+name / email+role+company / segment-toggle

### 4.8 Stats-band (target ≥ 10)

Axes:
- **Layout:** 4-col-row / 3-col-row / 2x2-grid / split-with-label / horizontal-strip / animated-counter-grid / big-number-single / progress-bar-band / chart-strip / before-after
- **Visual:** numbers-only / icon+number / number+sparkline / number+delta

### 4.9 Process-steps (target ≥ 10)

Axes:
- **Layout:** vertical-numbered / horizontal-numbered / connected-arrows / cards-with-step-number / zigzag-alternating / timeline / stepper-with-progress / accordion-steps / illustration-per-step / video-per-step
- **Density:** compact / spacious

### 4.10 Logo-cloud (target ≥ 10)

Axes:
- **Layout:** grid-equal / marquee-horizontal / 2-row-marquee / random-positions / categorized-rows / pinned-with-rotator / sparse-with-label / dense-grid / mono-treatment / per-row-headers
- **Style:** mono / color / grayscale-color-on-hover

### 4.11 Case-studies (target ≥ 10)

Axes:
- **Layout:** grid / list / featured+grid / horizontal-scroll / mosaic / split-image-text / accordion-with-results / metric-foregrounded / filterable-grid / chronological-timeline

### 4.12 Pricing (target ≥ 10)

Axes:
- **Layout:** 3-tier-cards / 4-tier-cards / comparison-table / toggle-billing / slider-driven / single-tier-CTA / enterprise-contact / freemium-emphasized / pay-as-you-go / quote-only
- **Highlighting:** flat / popular-tier-elevated / annotated-feature-rows

### 4.13 Team (target ≥ 10)

Axes:
- **Layout:** directory-grid / leadership-then-team / org-chart / horizontal-scroll / single-spotlight / department-grouped / role-filtered / cards-with-bio-modal / minimal-list / quote-per-person

### 4.14 Contact (target ≥ 10)

Axes:
- **Layout:** split-form-info / centered-form / multi-channel-grid / map-led / form+faq / appointment-booking / inline-fields-only / dense-form / minimal-info-only / office-list

### 4.15 Footer-content (target ≥ 10)

Axes:
- **Layout:** columns-classic / mega-footer / minimal-strip / centered-stack / split-brand-links / nav-then-legal / newsletter-attached / app-store-attached / social-foregrounded / legal-only

---

## 5. Coverage matrix (archetype × kind, target variant counts)

Cells are **target variant counts** per (kind, archetype). Total per row reaches the ≥10 threshold for that kind. Cells marked `–` are intentionally empty (not idiomatic for that archetype).

| Kind \ Archetype | mod-saas | editorial | bold-cons | ai-prod | startup-conv | local-biz | dashboard | portfolio | **Total** |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| hero | 3 | 2 | 2 | 2 | 1 | 1 | 1 | 1 | **13** |
| features | 3 | 2 | 1 | 2 | 1 | 1 | 1 | 1 | **12** |
| testimonials | 2 | 2 | 2 | 1 | 1 | 1 | – | 1 | **10** |
| faq | 2 | 2 | 1 | 2 | 1 | 1 | 1 | – | **10** |
| blogList | 2 | 3 | 1 | 1 | 1 | 1 | – | 1 | **10** |
| cta | 2 | 2 | 2 | 1 | 2 | 1 | – | – | **10** |
| newsletter | 2 | 2 | 1 | 1 | 2 | 1 | – | 1 | **10** |
| stats-band | 2 | 1 | 1 | 2 | 1 | 1 | 2 | – | **10** |
| process-steps | 2 | 1 | 1 | 1 | 1 | 2 | 1 | 1 | **10** |
| logo-cloud | 2 | 1 | 2 | 1 | 2 | 1 | – | 1 | **10** |
| case-studies | 1 | 2 | 1 | 1 | – | 1 | – | 4 | **10** |
| pricing | 4 | 1 | 1 | 2 | 1 | – | 1 | – | **10** |
| team | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | **10** |
| contact | 2 | 1 | 1 | 1 | 1 | 3 | – | 1 | **10** |
| footer-content | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | **10** |
| **Total per archetype** | **33** | **26** | **19** | **20** | **17** | **17** | **8** | **14** | **152** |

Notes:
- `dashboard-ops` is intentionally lighter (8 variants) — it does not sell to consumers; cta/blog/newsletter/logo-cloud are not idiomatic.
- `portfolio-craft` over-indexes on `case-studies` (4) — its native use case.
- `local-business-trust` over-indexes on `contact` (3) — its native use case.

---

## 6. Wireframe coverage targets

Each archetype gets a landing wireframe + 2 most-relevant purposes. **24 wireframes total** (up from 5).

| Archetype | Wireframes | Purposes |
|---|---:|---|
| modern-saas | 4 (existing) +0 | landing, pricing, 404, **about** (new) |
| editorial-premium | 1 (existing) +2 | blog-index, **landing**, **about** |
| bold-consumer | 0 +3 | **landing**, **pricing**, **contact** |
| ai-product | 0 +3 | **landing**, **pricing**, **about** |
| startup-conversion | 0 +3 | **landing**, **pricing**, **contact** |
| local-business-trust | 1 (existing) +2 | contact, **landing**, **about** |
| dashboard-ops | 0 +3 | **landing**, **auth**, **pricing** |
| portfolio-craft | 0 +3 | **landing**, **case-study-index**, **about** |

Each wireframe MUST use variants whose `archetype` field equals the wireframe's archetype (cross-archetype assembly remains forbidden — Safety Doctrine Rule 4).

---

## 7. Visual quality rubric

Every variant authored under this plan MUST pass these checks before registration:

1. **Token discipline.** Zero raw color/spacing/duration values. All visual values come from `--ds-color-*`, `--ds-space-*`, `--ds-radius-*`, `--ds-shadow-*`, `--ds-duration-*`, `--ds-easing-*`.
2. **Alignment math.** Section root uses `sv-section-root` baseline; inner content uses a documented max-width token; CTAs align to a 4 px optical baseline.
3. **Theme parity.** Both `dark` and `light` themes render without color contrast failures (verified by `ds:a11y`).
4. **Motion budget.** Variant declares all motion presets it uses; declared presets MUST appear in `archetype.motionTemperament`.
5. **Effect permissions.** Effects used MUST be permitted by the archetype (`ds.contract.json` validates this at build time).
6. **Reduced-motion fallback.** Any variant using motion MUST collapse to a static render when `prefers-reduced-motion: reduce`.
7. **Semantic markup.** Heading level honours the section's place in the page (variant component does not hardcode `h1`).
8. **Responsive cadence.** Variant lays out cleanly at 360 / 768 / 1024 / 1440 / 1920 px without horizontal scroll or overlap.
9. **Empty-state grace.** Optional content slots (kicker, trust chips, media) MUST render gracefully when absent.
10. **Description writing.** Variant `description` uses measurable phrasing — banned vocabulary: *clean, modern, polished, beautiful, stunning*.

---

## 8. Alignment defect catalog (Phase 0 deliverable)

Before any new variant authoring, **Phase 0** sweeps the existing 28 variants for alignment defects flagged by the user. The catalog will live at `DOC/output/runs/<timestamp>/reports/alignment-defects.md` with one entry per defective variant:

```
variant: hero-modern-saas-bento-right
defect: right-column screenshot overflows section padding at 1024 px
fix: constrain media to inner grid width; add overflow:hidden on inner panel
verification: visual diff at 1024 / 1440 in /preview/sections/hero-modern-saas-bento-right
```

The sweep uses the live preview at `http://localhost:3100/preview/sections` and `/preview/wireframes` as the inspection surface.

---

## 9. Phase plan

### Phase 0 — Audit & alignment cleanup (no new variants)

Deliverables:
- `reports/alignment-defects.md` (catalog of every defective existing variant)
- Fixes for each cataloged defect, applied to canonical DS variant source
- Verify chain green
- Commit: `fix(ds): align existing section variants per defect catalog`

Gate: `ds:audit`, `ds:a11y`, `ds:contract` green; live preview spot-checked at 4 breakpoints.

### Phase 1 — Tier-1 archetype completion

Target: `modern-saas` (33), `editorial-premium` (26), `bold-consumer` (19), `ai-product` (20). Authors **+82 net variants** (98 total - 16 existing in Tier 1).

Order within phase:
1. modern-saas: fill all kind gaps to row targets
2. editorial-premium: fill all kind gaps
3. bold-consumer: fill all kind gaps
4. ai-product: fill all kind gaps

Per-batch commits (one commit per archetype). Verify chain between batches.

### Phase 2 — Tier-2 archetype completion

Target: `startup-conversion` (17), `local-business-trust` (17), `dashboard-ops` (8), `portfolio-craft` (14). Authors **+52 net variants** (56 total - 4 existing in Tier 2).

Same order discipline.

### Phase 3 — Wireframe expansion + site presets

Target: 19 new wireframes (5 existing → 24). Site presets stay at 2 (`modern-saas`, `solar`) unless a project brief demands more.

Verify gate: `ds:contract` validates every wireframe's `sections[].variantId` exists AND shares the wireframe's archetype.

---

## 10. Verification gates (per phase)

Each phase ships ONLY after this chain is green inside the canonical DS:

```
npm run typecheck
npm run lint -- --max-warnings 0
npm run test
npm run build
npm run ds:audit
npm run ds:a11y
npm run ds:contract
```

Additional gates:
- Zero VS Code Problems
- Live preview spot-check at 360 / 768 / 1024 / 1440 px for every newly-registered variant
- Manual visual review against §7 rubric for each new variant
- `generated/ds.contract.json` regenerated and committed

---

## 11. File-layout discipline

New variants land at:
```
Frontend-Master_DS/src/ds/composition/sections/variants/<kind>/<variant-id>.tsx
Frontend-Master_DS/src/ds/composition/sections/variants/<kind>/<variant-id>.css  (when needed)
```

Naming pattern: `<kind>-<archetype>-<descriptor-kebab>`. Examples:
- `hero-editorial-premium-split-photo`
- `testimonials-bold-consumer-marquee-large`
- `pricing-ai-product-toggle-with-usage-meter`

Each new variant requires:
1. New file under `variants/<kind>/` with `<ID>_META` + component export
2. One import + one entry in `_registry.ts` (surgical edit — already permitted)
3. `npm run ds:contract` re-emitted
4. CSS, if used, scoped under `sv-<variant-id>` class prefix

Forbidden:
- New entries in `archetypeRegistry.ts` (Decision D7)
- New entries in `motion/presets.ts` (Decision D7)
- New token values in `tokens/vars.ts` (Decision D2)
- New section kinds in `_schema.ts` (Decision D7)

---

## 12. Acceptance criteria (plan complete when ALL true)

- [ ] `ds.contract.json` reports `variants ≥ 152, wireframes ≥ 24`
- [ ] Every cell in §5 matrix is met or exceeded
- [ ] Every wireframe in §6 exists and passes contract validation
- [ ] §8 alignment defect catalog has every entry closed
- [ ] Verify chain green in canonical DS
- [ ] Verify chain green in latest preview clone under `DOC/output/runs/.../codegen/`
- [ ] `/preview/sections` lists every new variant with working detail route
- [ ] `/preview/wireframes` lists every new wireframe
- [ ] Missing tracker shows 0 sparse kinds, 0 archetypes without wireframes
- [ ] Zero VS Code Problems
- [ ] Plan document marked LOCKED

---

## 13. Out of scope

- New backend/API surfaces (handled by `backend_planner` / `backend_developer`)
- New industries / presets beyond the existing 2 (driven by project briefs, not this plan)
- New section kinds (locked at 15 — D7)
- New archetypes (locked at 8 — D7)
- New motion presets (locked at 8 — D7)
- Token system refresh (locked — D2)
- DS_Frontend_developer agent contract changes
- Frontend-Master_DS build tooling, lint config, jest config

---

## 14. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Variant proliferation creates visual chaos | §4 axis matrix forces every new variant onto a position no existing variant occupies. |
| Effort balloons past one sprint | Phase plan (§9) ships per archetype; each phase is independently shippable. |
| Hidden cross-archetype assembly slips in | `ds:contract` validates `wireframe.sections[].variantId.archetype === wireframe.archetype`. Already enforced. |
| Token drift sneaks in via "just one hex" | `ds:audit` rejects raw values; CI gate green per phase. |
| Alignment defects re-appear after fix | §7 visual rubric is checked as part of every per-variant review. |
| Plan loses authority | This file is the single source of truth; supersede by editing this file + bumping the status line, never by side-channel changes. |

---

## 15. Next action after LOCK

When the user marks this plan LOCKED:

1. Begin Phase 0 in `DOC/output/runs/2026-05-14-ds-master-coverage-plan/codegen/`.
2. First deliverable: `reports/alignment-defects.md` from live preview sweep.
3. First commit: phase-0 alignment fixes.
4. Proceed phase by phase; gate each commit on §10 verify chain.

---

**END OF PLAN — awaiting LOCK.**
