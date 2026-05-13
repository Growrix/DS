# Industry Pattern: Modern SaaS

## pattern_id
`modern-saas`

## business_types_covered
`modern-saas`, `startup` — B2B SaaS products, developer tools, productivity apps, workflow platforms, early-stage startups with a freemium or trial CTA

## recommended_archetype
`modern-saas` (default) or `startup-conversion` (when conversion density > polish)

## default_theme
`dark`

---

## default_site_map

### Routes (10 pages — trim or expand per brief)

| Route | Role | Priority |
|---|---|---|
| `/` | Home — value prop + social proof + conversion | flagship |
| `/features` | Features deep-dive | high |
| `/pricing` | Pricing + plan comparison | high |
| `/customers` | Case studies / customer stories | medium |
| `/docs` | Documentation index (redirect or external) | medium |
| `/blog` | Blog / insights | medium |
| `/about` | Company + team | low |
| `/changelog` | Product changelog | low |
| `/contact` | Enterprise sales / support | medium |
| `/login` | Auth entry (modal or page) | high |

**Minimum viable site (5 pages):** `/`, `/features`, `/pricing`, `/customers`, `/contact`

### Primary nav (desktop header)
```json
[
  { "id": "home", "label": "Home", "href": "/", "icon": "Home" },
  { "id": "features", "label": "Features", "href": "/features", "icon": "Layers" },
  { "id": "pricing", "label": "Pricing", "href": "/pricing", "icon": "Tag" },
  { "id": "customers", "label": "Customers", "href": "/customers", "icon": "Users" },
  { "id": "blog", "label": "Blog", "href": "/blog", "icon": "BookOpen" }
]
```

### Mobile bottom nav (3-5 entries)
```json
[
  { "id": "home", "label": "Home", "href": "/", "icon": "Home" },
  { "id": "features", "label": "Features", "href": "/features", "icon": "Layers" },
  { "id": "pricing", "label": "Pricing", "href": "/pricing", "icon": "Tag" },
  { "id": "customers", "label": "Customers", "href": "/customers", "icon": "Users" },
  { "id": "login", "label": "Sign In", "href": "/login", "icon": "LogIn" }
]
```

### Footer columns (4 columns)
```
Column 1: Product — features, pricing, changelog, roadmap
Column 2: Company — about, blog, careers, press
Column 3: Resources — docs, tutorials, status, API
Column 4: Legal + social — privacy, terms, Twitter/X, GitHub, LinkedIn
```

---

## default_journeys

**Primary conversion path:**
`/ → "Start free trial"` (email CTA in hero + sticky header)

**Secondary conversion path:**
`/ → /pricing → plan selection → checkout / trial signup`

**Awareness-to-trial path:**
`blog → / → /features → /pricing → trial`

**Enterprise path:**
`/ → /customers → /contact` (enterprise sales conversation)

**Social proof shortcut:**
`/ → /customers` (direct social proof validation before pricing)

---

## default_trust_signals

What SaaS visitors need to see to trust the product:

1. **Logo cloud** — recognisable customer brands using the product
2. **Review aggregate** — G2 / Capterra / ProductHunt score + count
3. **Uptime / reliability** — "99.9% uptime SLA" or status link
4. **Data security signals** — SOC2, GDPR, ISO badges where applicable
5. **Customer count / seats** — "10,000+ teams", "500M+ tasks completed"
6. **Case study outcome** — specific customer result ("Acme cut reporting time by 60%")
7. **Free trial / no credit card required** — reduces conversion friction

---

## default_section_kinds_by_page

Uses **DS kind ids only** from `ds.contract.sectionVariants[].kind`.
Sections marked ⚠️ are gap kinds (not yet in DS) — planner records them in `ds_gaps`.

### `/` (home) — flagship page

```
1. hero          ← [value prop + demo CTA / trial signup; logo cloud hint below fold line]
2. logo-cloud    ← [social proof logos — recognisable customers]
3. features      ← [3-4 primary capabilities in bento or split layout]
4. stats-band    ← [key metrics — users, tasks, uptime, review score]
5. testimonials  ← [customer quotes — marquee or 3-col cards]
6. case-studies  ← [1-2 featured customer outcomes]
7. cta           ← [bottom conversion — "Start free trial" full bleed]
```

Gap kinds often needed:
- `pricing` ⚠️ — some SaaS home pages include a pricing section; record gap
- `newsletter` ⚠️ — pre-launch / waitlist sites need this before pricing exists

### `/features` (feature deep-dive)

```
1. hero          ← [compact — "Everything you need to..." header + lede]
2. features      ← [grid or split layout of feature groups]
3. features      ← [second features block for secondary capability group]
4. stats-band    ← [performance / scale metrics]
5. testimonials  ← [feature-specific customer quotes]
6. cta           ← [conversion band — trial / demo]
```

Gap kinds often needed:
- `comparison` ⚠️ — feature comparison table vs alternatives

### `/pricing` (pricing + plans)

```
1. hero          ← [compact — "Simple, transparent pricing"]
2. stats-band    ← [trust — "no credit card required", "cancel anytime"]
3. cta           ← [bottom — enterprise CTA / contact sales]
```

Gap kinds needed:
- `pricing` ⚠️ — the primary content of this page; entire page is blocked without it
- `faq` ⚠️ — billing FAQ; often essential on the pricing page

### `/customers` (case studies / stories)

```
1. hero          ← [compact — "Trusted by teams at..." + logo cloud]
2. logo-cloud    ← [extended customer logo grid]
3. case-studies  ← [customer story cards — full grid]
4. testimonials  ← [long-form quotes]
5. cta           ← [conversion band]
```

### `/blog` (blog index)

```
1. hero          ← [compact — "Insights from the [Brand] team"]
2. cta           ← [newsletter subscription band or trial CTA at bottom]
```

Gap kinds needed:
- `blog-list` ⚠️ — the primary content of this page; entire page is blocked without it

### `/about` (company + team)

```
1. hero          ← [compact — company story / mission statement]
2. stats-band    ← [founding year, team size, customers, ARR or growth signal]
3. features      ← [values / principles]
4. logo-cloud    ← [investors / press logos]
5. cta           ← [careers CTA or product CTA]
```

Gap kinds often needed:
- `team` ⚠️ — founder / leadership grid

### `/contact` (enterprise sales / support)

```
1. hero          ← [compact — "Talk to Sales" / "Get in touch"]
2. features      ← [enterprise features / SLA highlights]
3. stats-band    ← [trust signals for enterprise]
4. cta           ← [secondary CTA band]
```

Gap kinds often needed:
- `form-card` ⚠️ — contact / sales inquiry form

---

## forbidden_patterns

Modern SaaS sites MUST NOT use the following:

1. **No wall-of-text hero** — hero headline must be ≤ 12 words. The subheadline handles nuance.
2. **No pricing hidden behind a sales call** — if pricing exists in the brief, `/pricing` must be navigable. "Contact us for pricing" is only acceptable for enterprise-only products.
3. **No trust signals from before the company existed** — no fake founding dates, no inflated user counts.
4. **No overly warm/photographic archetype** (`local-business-trust`, `editorial-premium` for type-heavy layout) without adjusting for the technical audience.
5. **No heavy parallax** — `modern-saas` archetype does not have `parallaxMedia` permission.
6. **No feature lists without hierarchy** — features sections must use bento or split layout (visual hierarchy), not flat unordered lists.
7. **No empty pricing page** — if the brief includes `/pricing`, the `pricing` section kind is required. Do NOT ship `/pricing` with only a CTA and no plan comparison.
8. **No generic CTAs** — "Click here", "Learn more", "Submit" are forbidden. CTA labels must be outcome-specific ("Start free trial", "See it in action", "Book a demo").

---

## notes

- **Trial CTA vs demo CTA.** If the product has a freemium or free trial tier, use "Start free trial" as primary. If the product is enterprise-only or demo-required, use "Book a demo". The brief MUST specify which — planner adds this to `open_questions` if absent.
- **Pricing page is high-stakes.** The `pricing` section kind is not yet in DS. Proactively record this gap as `critical` severity when `/pricing` is in the site map — it blocks a conversion-critical page.
- **Logo cloud placement matters.** On the home page, the logo cloud should appear immediately below or beside the hero (above fold on desktop). It is a primary trust signal that reduces bounce.
- **SaaS vs startup distinction.** If the brief emphasises rapid conversion over polish (early-stage, waitlist, or launch day), consider `startup-conversion` archetype instead of `modern-saas`. The key signal is density preference: `startup-conversion` is compact/aggressive; `modern-saas` is comfortable/polished.
- **Auth modal vs auth page.** The DS has an auth modal pattern (shared surface). For SaaS, `/login` can either be a dedicated auth page or trigger the modal. Planner records this as a shared_surface decision in `site_map`.
- **Changelog + docs are usually external.** Don't plan full DS-rendered `/changelog` or `/docs` if the product uses a third-party (GitBook, Notion, Linear etc.). Mark as external link in nav, not a planned DS page.
