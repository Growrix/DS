# Archetype Mapping

> How `DS_site_planner` selects one of the 8 DS archetypes from a client brief. This is Phase 3 of the planning workflow.

---

## 1. The 8 DS archetypes (reference)

| Archetype id | Label | Mood | Preferred theme | Density |
|---|---|---|---|---|
| `editorial-premium` | Editorial Premium | Patient, type-led, rewards attention | light | spacious |
| `modern-saas` | Modern SaaS | Confident, efficient, polished without ceremony | dark | comfortable |
| `bold-consumer` | Bold Consumer | Loud, welcoming, energetic participation | dark | comfortable |
| `ai-product` | AI Product | Confident in machinery, motion narrates the system | dark | comfortable |
| `startup-conversion` | Startup Conversion | Direct, every section earns its place | dark | compact |
| `local-business-trust` | Local Business Trust | Handshake credibility, who/where/when/how-quickly | light | comfortable |
| `dashboard-ops` | Dashboard Ops | Tool not advertisement, operator surface data | dark | compact |
| `portfolio-craft` | Portfolio Craft | Curated, each piece earns its own visual breath | light | spacious |

---

## 2. Mapping algorithm (Phase 3)

The planner resolves archetype in this order:

```
Step A — Explicit brief archetype
  If brief.visual_mood or brief.archetype names one of the 8 ids verbatim → use it.

Step B — Business type primary signal
  Map brief.business_type to the primary archetype (see §3).

Step C — Voice + mood secondary signal
  Adjust the Step B result with brief.voice and brief.visual_mood signals (see §4).

Step D — Industry pattern fallback
  If still ambiguous, use the recommended_archetype from the matching industry pattern file.

Step E — Default
  If all signals conflict and no pattern matches → use 'modern-saas' (neutral enough for most cases).
```

Lock the archetype at the end of Phase 3. It does NOT change during Phase 4-8.

---

## 3. Business type → primary archetype table

| `business_type` value | Primary archetype | Rationale |
|---|---|---|
| `local-services` | `local-business-trust` | Trades, plumbers, electricians — trust + locality first |
| `professional-services` | `editorial-premium` | Lawyers, accountants, consultants — measured credibility |
| `modern-saas` | `modern-saas` | B2B SaaS products — polished, modular, demo-forward |
| `ai-product` | `ai-product` | AI/ML products — ambient dark, streaming text, ambient mesh |
| `ecommerce-dtc` | `bold-consumer` | Direct-to-consumer brands — saturated, energetic, product-led |
| `creator-portfolio` | `portfolio-craft` | Designers, photographers, artists — curated, per-case accent |
| `startup` | `startup-conversion` | Early-stage conversion-focused — dense, aggressive CTA |
| `internal-tool` | `dashboard-ops` | Admin panels, dashboards, ops surfaces — tool-first |
| `agency` | `editorial-premium` | Creative agencies — type-led, restrained, premium positioning |
| `other` | (resolved via voice signals in §4) | Default branch |

---

## 4. Voice + visual mood signal adjustments

After the primary archetype is selected, apply these overrides if brief signals conflict:

| Voice / visual mood signal | Overrides to | Condition |
|---|---|---|
| "premium", "editorial", "luxury", "restrained", "long-form", "type-led" | `editorial-premium` | If current archetype is not already `editorial-premium` or `portfolio-craft` |
| "playful", "bold", "energetic", "saturated", "loud", "consumer", "DTC" | `bold-consumer` | If current is not already `bold-consumer` |
| "dark", "AI", "streaming", "ambient", "technical product", "ML" | `ai-product` | If brief explicitly mentions AI/ML product or "streaming" UX |
| "conversion", "startup", "growth", "aggressive CTA", "dense", "no fluff" | `startup-conversion` | If current is not already `startup-conversion` |
| "trust", "local", "community", "trade", "handshake", "photographic + warm" | `local-business-trust` | If current is not already `local-business-trust` |
| "curated", "portfolio", "craft", "per-case", "photographer", "minimal" | `portfolio-craft` | If current is not already `portfolio-craft` |
| "dashboard", "internal", "operator", "tool", "data-dense", "no marketing" | `dashboard-ops` | If brief explicitly targets authenticated operators not external customers |
| "SaaS", "product", "B2B", "modular", "polished", "feature-rich" | `modern-saas` | Generic SaaS signal when no more specific archetype wins |

Apply at most ONE override. If multiple signals conflict, use the stronger one (the one most explicitly stated in the brief). If still tied, prefer the business_type primary archetype from §3.

---

## 5. Full mapping examples

### Example A — Local electrician (au-electrical brief)
```
business_type: local-services           → primary: local-business-trust
voice: "modern-trustworthy"             → no override (trust-compatible)
visual_mood: "documentary photography" → local-business-trust supports fullBleedPhotograph: true ✅
result: local-business-trust
theme_default: light (archetype preference)
```

### Example B — B2B SaaS project management tool
```
business_type: modern-saas             → primary: modern-saas
voice: "confident, efficient"          → no override
visual_mood: "clean, card-based"       → modern-saas density: comfortable ✅
result: modern-saas
theme_default: dark
```

### Example C — AI writing assistant product
```
business_type: ai-product              → primary: ai-product
voice: "intelligent, streaming, ambient" → ai-product override ✅ (confirms)
visual_mood: "dark, ambient mesh, ambient glow"
result: ai-product
theme_default: dark (ai-product is dark-native; override NOT allowed)
```

### Example D — Premium law firm
```
business_type: professional-services   → primary: editorial-premium
voice: "authoritative, measured"       → editorial-premium ✅
visual_mood: "restrained, type-led"
result: editorial-premium
theme_default: light
```

### Example E — Consumer DTC sneaker brand
```
business_type: ecommerce-dtc           → primary: bold-consumer
voice: "energetic, youth-forward"      → bold-consumer ✅
visual_mood: "saturated, oversized type"
result: bold-consumer
theme_default: dark
```

### Example F — Creative design studio
```
business_type: agency                  → primary: editorial-premium
voice: "curated, per-project accent"   → override: portfolio-craft ✅
visual_mood: "minimal, each-case-own-breath"
result: portfolio-craft (override wins — more specific signal)
theme_default: light
```

---

## 6. Archetype lock is immutable after Phase 3

Once locked, the archetype does not change. If a per-page section seems to need a different archetype:
- The planner uses `archetype_override` on that page (null = uses global; non-null = uses page override).
- Page-level overrides are intentional cross-archetype moves for variety.
- They are not fallbacks for gap situations (gaps are handled by the gap mechanism, not overrides).

---

## 7. Outputting the archetype decision

The planner documents its archetype selection in `brief.json`:

```json
{
  "archetype_resolution": {
    "selected": "local-business-trust",
    "primary_signal": "business_type: local-services",
    "voice_override": null,
    "confidence": "high",
    "rationale": "Local service site targeting homeowners in Greater Sydney. Trust + locality + speed-of-response are the primary visitor needs. local-business-trust archetype's photographic, warm, credibility-first posture matches directly."
  }
}
```

Low confidence (when signals conflict) MUST be surfaced in `open_questions` so the operator can confirm.
