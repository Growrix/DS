# DS Awareness Rules

> How `DS_site_planner` reads and reasons against `Frontend-Master_DS/generated/ds.contract.json`. These rules govern every planning decision that touches DS-exposed types.

---

## 1. Read the contract first — always

**Phase 1 is mandatory.** Before processing any brief field, the planner reads:

```
../Frontend-Master_DS/generated/ds.contract.json
```

From this contract the planner caches:
- `sectionVariants[]` — all available `{ id, kind, archetype, label }`
- `archetypes[]` — all `{ id, label, mood, preferredScheme, density, permissions, motionTemperament, variantIdPrefixes }`
- `motionPresets[]` — all `{ id, label }`
- `themes[]` — all `{ name, colorScheme }` (currently `dark`, `light`)
- `counts` — current totals (for context and reporting)
- `sitePresets[]` — existing reference presets (for cross-archetype pattern reference only)

The planner caches this data in-memory for the duration of the run. It does NOT re-read mid-run.

---

## 2. The closed-world assumption

**The DS is closed-world.** The set of valid kinds, archetypes, motion presets, and themes is exactly what `ds.contract.json` exposes at plan time. Nothing more.

Corollaries:
- A kind not in `sectionVariants[].kind` CANNOT be used in a plan. It goes to `ds_gaps`.
- An archetype not in `archetypes[].id` CANNOT be selected. Archetype resolution picks from the 8 enumerated values.
- A motion preset id not in `motionPresets[].id` CANNOT be referenced. Use the closest id from the contract.
- A theme name not in `themes[].name` CANNOT be used. Only `dark` and `light` exist.

---

## 3. Section kind resolution

When the planner needs a section for a page, it selects a `kind` from the current DS kinds set:

```
current DS kinds = unique values of ds.contract.sectionVariants[].kind
```

At time of writing:
`hero`, `features`, `testimonials`, `cta`, `stats-band`, `process-steps`, `logo-cloud`, `case-studies`

If a brief asks for a section type that doesn't map to any current kind:
- The planner attempts a semantic alias lookup (see §4).
- If no alias works, the planner records a gap and continues (it does NOT invent a kind).

---

## 4. Semantic alias table (brief intent → DS kind)

Planners must map human brief language to DS kind ids. The following aliases are approved:

| Brief language | DS kind | Notes |
|---|---|---|
| "hero", "opener", "above fold", "banner" | `hero` | — |
| "features", "capabilities", "how it works", "services overview" | `features` | Use features or process-steps depending on whether ordered steps or parallel items |
| "process", "steps", "how we work", "workflow" | `process-steps` | Ordered sequential steps |
| "testimonials", "reviews", "social proof", "customers say" | `testimonials` | — |
| "CTA", "call to action", "conversion band", "contact strip", "get started" | `cta` | — |
| "stats", "numbers", "metrics", "trust band", "rating strip" | `stats-band` | — |
| "logos", "partners", "used by", "brands", "clients" | `logo-cloud` | — |
| "case studies", "projects", "portfolio", "work samples", "outcomes" | `case-studies` | — |
| "pricing", "plans", "packages", "tiers" | `pricing` ← **GAP** | Not in DS at time of writing. Record gap with `recommended_variant_id: "pricing-table-3tier"` |
| "FAQ", "frequently asked", "questions" | `faq` ← **GAP** | Not in DS at time of writing. Record gap with `recommended_variant_id: "faq-accordion-categorized"` |
| "blog", "articles", "news", "insights" | `blog-list` ← **GAP** | Not in DS at time of writing. Record gap with `recommended_variant_id: "blog-list-card-grid"` |
| "locations", "service areas", "suburbs", "coverage map" | `locations` ← **GAP** | Not in DS at time of writing. Record gap with `recommended_variant_id: "locations-grid-suburb"` |
| "newsletter", "subscribe", "email signup" | `newsletter` ← **GAP** | Not in DS at time of writing. Record gap with `recommended_variant_id: "newsletter-inline-1col"` |
| "team", "about the team", "meet the crew" | `team` ← **GAP** | Not in DS at time of writing. Record gap with `recommended_variant_id: "team-grid-photo-3col"` |
| "quote form", "contact form", "multi-step form" | `form-card` ← **GAP** | Not in DS at time of writing. Record gap with `recommended_variant_id: "form-card-quote-multistep"` |
| "comparison", "vs", "feature comparison" | `comparison` ← **GAP** | Not in DS at time of writing. Record gap with `recommended_variant_id: "comparison-table-3col"` |

When a gap kind is required, the planner:
1. Records it in `ds_gaps[]` with the recommended variant id, affected pages, effort estimate, and severity.
2. Checks if any existing kind can serve as a fallback (e.g., `features` as a fallback for `faq` in some layouts).
3. Sets `fallback_variant_id` if a reasonable fallback exists; otherwise `null`.
4. Updates `lock_status` to `needs_ds_extension` unless the operator has already opted for `partial_coverage`.

---

## 5. Variant selection algorithm

When a kind is available in the DS, the planner selects the best variant using this priority order:

```
Priority 1 — exact archetype match
  Filter: sectionVariants where kind == target_kind AND archetype == selected_archetype
  If 1 result → use it.
  If multiple results → pick the one whose id prefix matches the archetype's variantIdPrefixes[0].

Priority 2 — cross-archetype match (same kind, mood-compatible archetype)
  Filter: sectionVariants where kind == target_kind
  Rank by: mood compatibility with selected_archetype
  Mood compatibility rules:
    - local-business-trust ↔ editorial-premium (both photographic + restrained)
    - modern-saas ↔ startup-conversion (both product-forward)
    - bold-consumer ↔ startup-conversion (both action-oriented)
    - ai-product ↔ modern-saas (both technical + dark-capable)
    - dashboard-ops ↔ modern-saas (both efficient + modular)
    - portfolio-craft ↔ editorial-premium (both restrained + curated)
  If a compatible match found → use it; mark selection as `cross_archetype_fallback: true`

Priority 3 — any available variant for the kind
  Last resort when no archetype match or mood-compatible match exists.
  Pick the first variant for the kind alphabetically.
  Mark as `cross_archetype_fallback: true` and `low_confidence: true`.
```

When the planner specifies a `variant` id in the plan, it MUST be an id that appears in `ds.contract.json.sectionVariants`. The planner MAY leave `variant: null` to let the executor pick at execution time.

---

## 6. Archetype permissions awareness

Each archetype has a `permissions` object in the contract. The planner MUST respect these when suggesting content that implies visual effects:

```json
"permissions": {
  "gradientMesh": false,
  "glassmorphism": false,
  "fullBleedPhotograph": true,
  ...
}
```

Rules:
- If `fullBleedPhotograph: false`, do NOT suggest a hero variant that relies on a full-bleed background photo.
- If `glassmorphism: false`, do NOT suggest a testimonial or card layout that implies glass panels.
- If `gradientMesh: false`, do NOT suggest a hero that relies on an ambient gradient mesh background.
- If `parallaxMedia: false`, do NOT request parallax photography sections.

This keeps variant content suggestions honest with what the DS actually renders.

---

## 7. Motion temperament → DS motion preset mapping

The archetype declares `motionTemperament[]` as an ordered preference list. The planner may include a `motion_preset_hint` in per-page briefs. It MUST be mapped from the archetype's temperament to a valid `motionPresets[].id`:

| Archetype | Primary motion preset ids (from temperament) |
|---|---|
| `editorial-premium` | `rise-soft`, `stagger-text-60`, `scroll-scale-1.04`, `fade-in` |
| `modern-saas` | `rise-soft`, `stagger-text-60`, `magnetic-hover`, `idle-pulse-once` |
| `bold-consumer` | `rise-soft`, `magnetic-hover`, `idle-pulse-once`, `scroll-scale-1.04` |
| `ai-product` | `reveal-glass`, `stagger-text-60`, `mesh-drift`, `fade-in` |
| `startup-conversion` | `rise-soft`, `idle-pulse-once`, `magnetic-hover` |
| `local-business-trust` | `rise-soft`, `fade-in` |
| `dashboard-ops` | `fade-in`, `magnetic-hover` |
| `portfolio-craft` | `rise-soft`, `scroll-scale-1.04`, `fade-in` |

If the brief requests a motion style not in this table, the planner picks the closest from the archetype's list. It NEVER invents a motion preset id.

---

## 8. Theme selection rules

| Archetype | Default theme | Override allowed? |
|---|---|---|
| `editorial-premium` | `light` | Yes |
| `modern-saas` | `dark` | Yes |
| `bold-consumer` | `dark` | Yes |
| `ai-product` | `dark` | No (archetype is dark-native) |
| `startup-conversion` | `dark` | Yes |
| `local-business-trust` | `light` | Yes |
| `dashboard-ops` | `dark` | Yes |
| `portfolio-craft` | `light` | Yes |

The plan always sets `brand.theme_default`. The DS's theme switcher allows the visitor to override at runtime.

---

## 9. What to do when the DS contract is stale

If `ds.contract.json` has a mtime older than `src/ds/composition/sections/_registry.ts` in the DS, the planner MUST:

1. BLOCK with `DS_CONTRACT_STALE`.
2. Instruct the operator: `cd Frontend-Master_DS && npm run ds:contract`.
3. Re-read the contract after regeneration and continue.

Do NOT plan against a stale contract — gap analysis will be inaccurate.

---

## 10. Contract version logging

Every emitted `site-plan.json` includes:

```json
"ds_dependency": {
  "ds_root": "../Frontend-Master_DS",
  "ds_contract_version": "<version from contract.version>",
  "ds_contract_counts": { ... }
}
```

This records the DS snapshot the plan was authored against. If the DS grows (more variants) and the plan is re-run, the new plan will have updated counts and potentially a shorter `ds_gaps[]`.
