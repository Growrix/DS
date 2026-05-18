# SunPath Solar — Planning Run

**Run ID:** `20260513-sunpath-solar`
**Status:** `needs_ds_extension`
**Generated:** 2026-05-13
**Planner:** DS_site_planner v1
**DS Contract:** Frontend-Master_DS/generated/ds.contract.json v1.0

---

## What Was Planned

A 7-page lead-generation website for **SunPath Solar**, an Australian solar installation company targeting residential and commercial property owners across NSW, VIC, QLD, WA, and SA.

- **Archetype:** `local-business-trust` — warm, photographic, trust-first
- **Theme:** `light`
- **Locale:** `en-AU`
- **Primary CTA:** "Get Your Free Quote" → `/contact`
- **Motion hint:** `rise-soft` (entrance) + `fade-in` (content reveals)

---

## Pages

| Route | Title | Sections |
|---|---|---|
| `/` | Home | hero, stats-band, features, process-steps, testimonials, logo-cloud, cta |
| `/residential` | Residential Solar | hero, features, stats-band, process-steps, testimonials, cta |
| `/commercial` | Commercial Solar | hero, features, stats-band, case-studies, testimonials, cta |
| `/how-it-works` | How It Works | hero, process-steps, features, cta |
| `/projects` | Projects | hero, case-studies, stats-band, cta |
| `/about` | About | hero, features, stats-band, logo-cloud, cta |
| `/contact` | Get a Quote | hero, features, cta |

**Total:** 35 sections across 7 pages

---

## Artefacts

| File | Description |
|---|---|
| [plan/brief.json](plan/brief.json) | Locked intake — project identity, brand, contact data |
| [plan/site-plan.json](plan/site-plan.json) | Machine-readable plan — consumed by DS_Frontend_developer |
| [plan/content-library.json](plan/content-library.json) | All copy, labels, CTA text, image alt text — en-AU locale |
| [plan/ds-gap-report.md](plan/ds-gap-report.md) | Full gap analysis — 2 critical advisory, 7 medium |
| [plan/plan.lock.json](plan/plan.lock.json) | Lock status, summary, next steps |
| [plan/pages/home.plan.md](plan/pages/home.plan.md) | Per-section brief for Home |
| [plan/pages/residential.plan.md](plan/pages/residential.plan.md) | Per-section brief for Residential |
| [plan/pages/commercial.plan.md](plan/pages/commercial.plan.md) | Per-section brief for Commercial |
| [plan/pages/how-it-works.plan.md](plan/pages/how-it-works.plan.md) | Per-section brief for How It Works |
| [plan/pages/projects.plan.md](plan/pages/projects.plan.md) | Per-section brief for Projects |
| [plan/pages/about.plan.md](plan/pages/about.plan.md) | Per-section brief for About |
| [plan/pages/contact.plan.md](plan/pages/contact.plan.md) | Per-section brief for Contact |

---

## DS Gap Summary

| Gap ID | Kind | Severity | Fallback Used | Recommendation |
|---|---|---|---|---|
| GAP-001 | `form-card` | CRITICAL (advisory) | `cta` + third-party embed | Build `form-card-two-column` for `local-business-trust` |
| GAP-002 | `faq` | CRITICAL (advisory) | `features` with Q+A copy | Build `faq-accordion` for `local-business-trust` |
| GAP-003 | `hero` (archetype) | MEDIUM | `hero-editorial-premium-1` | Build `hero-local-trust-photo` |
| GAP-004 | `features` (archetype) | MEDIUM | `features-split-alternating` | Build `features-split-local` |
| GAP-005 | `testimonials` (archetype) | MEDIUM | `testimonials-marquee` | Build `testimonials-grid-local` |
| GAP-006 | `cta` (archetype) | MEDIUM | `cta-full-bleed` | Build `cta-trust-band` |
| GAP-007 | `stats-band` (archetype) | MEDIUM | `stats-band-4col` | Defer — fallback is high-suitability |
| GAP-008 | `logo-cloud` (archetype) | MEDIUM | `logo-cloud-grid` | Defer — fallback is high-suitability |
| GAP-009 | `case-studies` (archetype) | MEDIUM | `case-studies-grid` | Defer — fallback is high-suitability |

> **Note on CRITICAL advisory gaps:** `form-card` and `faq` were not planned as sections (no DS kind exists). The CRITICAL label is advisory — it flags that the brief's natural requirements cannot be fully served by the DS today. The plan is executable without them.

---

## Lock Status: `needs_ds_extension`

**Why:** The `local-business-trust` archetype has only 1 native DS variant (`process-steps-vertical`). All hero and primary CTA sections use cross-archetype fallbacks, which triggers the auto-gate condition.

### To Unblock — Two Options

**Option A (recommended):** Extend the DS. Build `form-card` + `faq` kinds and `hero-local-trust-photo` variant. Re-run planner in continuation mode from Phase 5.

**Option B (unblock now):** Operator approves `partial_coverage`:
1. Add a rationale entry to `plan/plan.lock.json → operator_overrides[]`.
2. Re-run the verifier: `node DS-Planning-Engine/scripts/verify-plan.mjs DS-Planning-Engine/output/runs/20260513-sunpath-solar`
3. Invoke `DS_Frontend_developer` with:

```json
{
  "plan_source":  "DS-Planning-Engine/output/runs/20260513-sunpath-solar",
  "plan_format":  "ds-native",
  "project_slug": "sunpath-solar",
  "ds_root":      "../Frontend-Master_DS",
  "constraints": {
    "package_manager":        "npm",
    "fail_on_gaps":           false,
    "allow_partial_coverage": true,
    "skip_verify":            false
  }
}
```

---

## Company Details (update before publish)

> All contact data below is placeholder — replace with actual client values before handing off to DS_Frontend_developer.

| Field | Placeholder value |
|---|---|
| Company name | SunPath Solar |
| Phone | 1300 786 765 |
| Email | info@sunpathsolar.com.au |
| Address | Level 1, 42 George Street, Sydney NSW 2000 |
| Service areas | NSW, VIC, QLD, WA, SA |
| ABN | 12 345 678 901 |

---

## Verify

```bash
node DS-Planning-Engine/scripts/verify-plan.mjs DS-Planning-Engine/output/runs/20260513-sunpath-solar
```

Expected current result: exits 1 (needs_ds_extension — auto-gate triggered by no native hero/cta variant for local-business-trust). After operator partial_coverage approval: exits 0.
