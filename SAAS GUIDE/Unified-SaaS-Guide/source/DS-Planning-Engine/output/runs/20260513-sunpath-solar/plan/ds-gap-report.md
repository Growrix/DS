# DS Gap Report — SunPath Solar

**Run ID:** 20260513-sunpath-solar
**DS Contract Version:** 1.0
**Archetype:** `local-business-trust`
**Generated:** 2026-05-13

---

## Summary

| Metric | Count |
|---|---|
| Total sections planned | 35 |
| Sections with exact archetype match | 7 (all `process-steps-vertical`) |
| Sections using cross-archetype fallback | 28 |
| CRITICAL gaps (kind not in DS) | 2 |
| HIGH gaps (no cross-archetype fallback) | 0 |
| MEDIUM gaps (fallback available) | 7 |
| Lock status | `needs_ds_extension` |

---

## CRITICAL Gaps — Kind Not in DS

These section kinds are needed for the brief but do not exist at all in `ds.contract.json`. No fallback is possible within the DS.

---

### GAP-001 · `form-card` · CRITICAL

| Field | Value |
|---|---|
| **Kind** | `form-card` |
| **Severity** | CRITICAL |
| **Needed for** | `/contact` (primary lead capture), embedded callbacks on all pages |
| **DS status** | Kind does not exist in contract |
| **Fallback used** | `cta` (`cta-full-bleed`) with `tel:` CTA + email link. Third-party embed (HubSpot / Jotform) as island component outside DS section system. |
| **Impact** | Lead capture is the primary business goal. Without a native `form-card` section, the contact page cannot contain a self-contained embedded form within the DS rendering pipeline. Third-party embed works operationally but is outside DS token/motion scope. |
| **Recommended DS variant** | `form-card-two-column` for `local-business-trust` — warm-tone, two-column layout (form left, contact details right), 25ch max per input label, no-jargon field labels, accessible |
| **Effort estimate** | Medium (1 new kind + 1 variant) |

---

### GAP-002 · `faq` · CRITICAL

| Field | Value |
|---|---|
| **Kind** | `faq` |
| **Severity** | CRITICAL |
| **Needed for** | `/how-it-works`, `/residential`, `/commercial` (solar buyer objection handling) |
| **DS status** | Kind does not exist in contract |
| **Fallback used** | `features` (`features-split-alternating`) with Q&A copy framed as "Questions We Hear Every Day" — functional but visually treated as feature rows rather than accordion. |
| **Impact** | Solar buyers have high pre-purchase anxiety. A native FAQ accordion reduces cognitive load and improves SEO (FAQ schema markup). The features fallback works but loses the scannable Q+A format. |
| **Recommended DS variant** | `faq-accordion` for `local-business-trust` — expandable Q+A rows, warm tone, accessible keyboard navigation, FAQ schema JSON-LD support |
| **Effort estimate** | Medium (1 new kind + 1 variant) |

---

## MEDIUM Gaps — Archetype-Native Variant Missing, Cross-Archetype Fallback Used

The `local-business-trust` archetype has only **one** native variant in the DS (`process-steps-vertical`). All other planned kinds use cross-archetype fallbacks. The fallbacks are functional and visually coherent — but they are not tuned to local-business-trust's warm, photographic, trust-first aesthetic.

---

### GAP-003 · `hero` for `local-business-trust` · MEDIUM

| Field | Value |
|---|---|
| **Kind** | `hero` |
| **Archetype** | `local-business-trust` |
| **Severity** | MEDIUM |
| **Needed for** | All 6 pages |
| **Fallback variant** | `hero-editorial-premium-1` (archetype: `editorial-premium`) |
| **Fallback suitability** | HIGH — `editorial-premium` permits `fullBleedPhotograph: true` and `scrollDrivenScale: true`, which align closely with local-business-trust photographic conventions. The main difference is type placement (editorial: lower-left type panel vs local-trust: centred or upper-left). Functionally excellent fallback. |
| **Recommended native variant** | `hero-local-trust-photo` — full-bleed Australian residential/commercial photography, prominent phone number display, centred or upper-left type panel, 5-star badge overlay optional, `rise-soft` + `fade-in` motion |
| **Effort estimate** | Low-Medium (new variant within existing `hero` kind) |

---

### GAP-004 · `features` for `local-business-trust` · MEDIUM

| Field | Value |
|---|---|
| **Kind** | `features` |
| **Archetype** | `local-business-trust` |
| **Severity** | MEDIUM |
| **Needed for** | All 6 pages (core layout section) |
| **Fallback variant** | `features-split-alternating` (archetype: `editorial-premium`) |
| **Fallback suitability** | HIGH — Split alternating is photographic and structured. Matches local-business-trust content shape well. Minor aesthetic delta: editorial spacing is slightly more generous than local-trust comfortable density. |
| **Recommended native variant** | `features-split-local` — same split alternating structure but with trust-badge overlay capability, tighter vertical rhythm, and warm earth-tone dividers |
| **Effort estimate** | Low (new variant within existing `features` kind) |

---

### GAP-005 · `testimonials` for `local-business-trust` · MEDIUM

| Field | Value |
|---|---|
| **Kind** | `testimonials` |
| **Archetype** | `local-business-trust` |
| **Severity** | MEDIUM |
| **Needed for** | Home, Residential, Commercial pages |
| **Fallback variant** | `testimonials-marquee` (archetype: `modern-saas`) |
| **Fallback suitability** | MEDIUM — Marquee infinite scroll works, but the modern-saas card styling (clean, neutral) is slightly misaligned with local-business-trust's warm, handshake aesthetic. A grid layout with larger avatar and suburb display would be more trust-forward. |
| **Recommended native variant** | `testimonials-grid-local` — 3-column grid, photo avatar, first-name + suburb prominently displayed, star rating optional, warm background tint |
| **Effort estimate** | Medium (new variant within existing `testimonials` kind) |

---

### GAP-006 · `cta` for `local-business-trust` · MEDIUM

| Field | Value |
|---|---|
| **Kind** | `cta` |
| **Archetype** | `local-business-trust` |
| **Severity** | MEDIUM |
| **Needed for** | All 6 pages (page-close section) |
| **Fallback variant** | `cta-full-bleed` (archetype: `bold-consumer`) |
| **Fallback suitability** | MEDIUM — Full bleed CTA is bold and high-conversion. Bold-consumer archetype is more aggressive than local-trust; the main aesthetic delta is accent colour temperature (bold: saturated; local-trust: warm earth). DS token system will mediate this through archetype theming. Functionally strong fallback. |
| **Recommended native variant** | `cta-trust-band` — full-width, warm tone, phone number prominently displayed alongside CTA button, optional "no-obligation" trust copy beneath button |
| **Effort estimate** | Low (new variant within existing `cta` kind) |

---

### GAP-007 · `stats-band` for `local-business-trust` · MEDIUM

| Field | Value |
|---|---|
| **Kind** | `stats-band` |
| **Archetype** | `local-business-trust` |
| **Severity** | MEDIUM |
| **Needed for** | Home, Residential, Commercial, Projects, About pages |
| **Fallback variant** | `stats-band-4col` (archetype: `modern-saas`) |
| **Fallback suitability** | HIGH — 4-column stat layout is archetype-neutral. The main aesthetic delta is background (modern-saas: dark/neutral; local-trust: light/warm). DS theme tokens will mediate this well. |
| **Recommended native variant** | None critical — `stats-band-4col` is suitable as a long-term fallback for this archetype. Low priority. |
| **Effort estimate** | Low (if needed — can defer) |

---

### GAP-008 · `logo-cloud` for `local-business-trust` · MEDIUM

| Field | Value |
|---|---|
| **Kind** | `logo-cloud` |
| **Archetype** | `local-business-trust` |
| **Severity** | MEDIUM |
| **Needed for** | Home, About pages |
| **Fallback variant** | `logo-cloud-grid` (archetype: `modern-saas`) |
| **Fallback suitability** | HIGH — Greyscale grid is archetype-neutral and works well for accreditation logos. Suitable long-term fallback. |
| **Recommended native variant** | None critical — `logo-cloud-grid` is suitable. Low priority. |
| **Effort estimate** | Low (if needed — can defer) |

---

### GAP-009 · `case-studies` for `local-business-trust` · MEDIUM

| Field | Value |
|---|---|
| **Kind** | `case-studies` |
| **Archetype** | `local-business-trust` |
| **Severity** | MEDIUM |
| **Needed for** | Commercial, Projects pages |
| **Fallback variant** | `case-studies-grid` (archetype: `portfolio-craft`) |
| **Fallback suitability** | HIGH — 2-column grid with media, tags, and title is a strong pattern for project showcases regardless of archetype. The portfolio-craft styling (spacious, curated) works well with photographic installation evidence. |
| **Recommended native variant** | None critical — `case-studies-grid` is suitable. Low priority. |
| **Effort estimate** | Low (if needed — can defer) |

---

## Advisory Gaps (not planned, but recommended for future DS cycles)

| Kind | Why relevant | Priority |
|---|---|---|
| `team` | About page team section with photos — high trust signal for local businesses | High |
| `locations` | Suburb/state service area map or list — important for local SEO | Medium |
| `newsletter` | Email capture for solar tips + rebate updates | Low |
| `blog-list` | Solar insights + rebate news content hub | Low |

---

## Recommended DS Extension Priority (for next DS cycle)

1. **HIGH — Build `form-card` kind** — single highest-impact DS gap for lead gen sites
2. **HIGH — Build `faq` kind** — high-trust, high-SEO impact for local services
3. **MEDIUM — Build `hero-local-trust-photo` variant** — completes the `local-business-trust` archetype hero
4. **MEDIUM — Build `testimonials-grid-local` variant** — better trust-signal layout than marquee for local businesses
5. **LOW — Build `cta-trust-band` variant** — archetype-native page-close CTA with phone prominence
6. **LOW — Build `team` kind** — frequently needed for local-business-trust, agency, and portfolio sites

---

## Next Steps

1. Proceed to DS extension cycle to build `form-card` and `faq` kinds.
2. After DS extension: re-run `DS_site_planner` with `Option C — Continuation` from this run folder (phases 5–8 only).
3. Operator may approve `partial_coverage` override for the MEDIUM gaps to unblock the executor now, accepting cross-archetype fallback variants as-is.
4. If operator approves partial_coverage: update `plan.lock.json → operator_overrides[]` with rationale and re-run verifier.
