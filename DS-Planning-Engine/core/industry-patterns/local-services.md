# Industry Pattern: Local Services

## pattern_id
`local-services`

## business_types_covered
`local-services` — trades, electricians, plumbers, cleaning companies, pest control, landscaping, HVAC, solar installers, tilers, painters, roofers, handymen

## recommended_archetype
`local-business-trust`

## default_theme
`light`

---

## default_site_map

### Routes (11 pages — trim or expand per brief)

| Route | Role | Priority |
|---|---|---|
| `/` | Home — trust + locality + lead capture | flagship |
| `/services` | Services overview — all offerings | high |
| `/[primary-service]` | Specialist service page 1 (e.g., `/emergency-electrician`) | high |
| `/[secondary-service]` | Specialist service page 2 (e.g., `/switchboard-upgrades`) | high |
| `/projects` | Portfolio / past work | medium |
| `/reviews` | Reviews + testimonials | medium |
| `/service-areas` | Coverage map / suburb listing | medium |
| `/about` | About the business + team trust | medium |
| `/faq` | FAQ + common objections | medium |
| `/contact` | Contact + hours + map | high |
| `/quote` | Quote request form (primary conversion) | high |

**Minimum viable site (5 pages):** `/`, `/services`, `/projects`, `/contact`, `/quote`

### Primary nav (desktop header)
```json
[
  { "id": "home", "label": "Home", "href": "/", "icon": "Home" },
  { "id": "services", "label": "Services", "href": "/services", "icon": "Wrench" },
  { "id": "projects", "label": "Projects", "href": "/projects", "icon": "Image" },
  { "id": "service-areas", "label": "Service Areas", "href": "/service-areas", "icon": "MapPin" },
  { "id": "contact", "label": "Contact", "href": "/contact", "icon": "Phone" }
]
```

### Mobile bottom nav (3-5 entries)
```json
[
  { "id": "home", "label": "Home", "href": "/", "icon": "Home" },
  { "id": "services", "label": "Services", "href": "/services", "icon": "Wrench" },
  { "id": "quote", "label": "Quote", "href": "/quote", "icon": "ClipboardList" },
  { "id": "projects", "label": "Projects", "href": "/projects", "icon": "Image" },
  { "id": "contact", "label": "Contact", "href": "/contact", "icon": "Phone" }
]
```

### Footer columns (3 columns)
```
Column 1: Company — name, tagline, license info
Column 2: Services — list of primary + specialist services
Column 3: Contact — phone, email, hours, service areas tag
```

---

## default_journeys

**Primary conversion path:**
`/ → phone call` (click-to-call CTA in hero + sticky header)

**Secondary conversion path:**
`/ → /quote` → form completion

**Exploration path:**
`/ → /services → /[specialist-page] → /contact`

**Trust verification path:**
`/ → /reviews → /projects → /about → /contact`

**Search-intent path:**
Visitor lands on specialist page directly (e.g., `/emergency-electrician`) → CTA band → phone or quote

---

## default_trust_signals

What local-service visitors need to see to trust the business:

1. **License / registration badge** — displayed in hero + footer
2. **Years in operation** — "serving [area] since [year]"
3. **Response time promise** — "same-day service", "24-hour callback"
4. **Coverage area clarity** — specific suburb / city names (not vague "Greater Metro")
5. **Review aggregate** — star rating + review count (Google/ProductReview)
6. **Phone number (prominent)** — never hidden, always above the fold on mobile
7. **Real project photography** — actual completed work (not stock photos of generic workers)
8. **Certifications / memberships** — industry body logos (e.g., Master Electricians Australia)

---

## default_section_kinds_by_page

Uses **DS kind ids only** from `ds.contract.sectionVariants[].kind`.
Sections marked ⚠️ are gap kinds (not yet in DS) — planner records them in `ds_gaps`.

### `/` (home) — flagship page

```
1. hero          ← [full-bleed opener; dual CTA — phone primary, quote secondary]
2. stats-band    ← [review aggregate + response promise + license + service-area cues]
3. features      ← [specialist services overview — residential vs commercial split or 3-up grid]
4. process-steps ← [how it works — 3-4 steps: contact → assess → quote → deliver]
5. case-studies  ← [featured past projects — 2-3 outcome panels]
6. testimonials  ← [customer reviews — marquee or grid]
7. cta           ← [bottom conversion band — phone primary + quote secondary]
```

Gap kinds often needed on home (record in ds_gaps if brief asks):
- `faq` ⚠️ — sometimes placed on home for common objections
- `logo-cloud` — partner/certification logos (DS has `logo-cloud` kind ✅)

### `/services` (services overview)

```
1. hero          ← [compact — page title + breadcrumb + brief description]
2. features      ← [all services in a grid or card layout]
3. process-steps ← [how engagement works]
4. stats-band    ← [trust signal reinforcement]
5. cta           ← [conversion band]
```

### `/[specialist-service]` (e.g., /emergency-electrician)

```
1. hero          ← [specialist service — urgency + specific CTA]
2. features      ← [what's included / scope of service]
3. process-steps ← [specific process for this service]
4. case-studies  ← [relevant projects for this service type]
5. testimonials  ← [testimonials specifically mentioning this service]
6. cta           ← [conversion band — phone first]
```

Gap kinds often needed here:
- `faq` ⚠️ — common objections + service-specific questions
- `locations` ⚠️ — service areas for this specialist page

### `/projects` (portfolio / past work)

```
1. hero          ← [compact — "Our Work" header]
2. case-studies  ← [project grid — main content]
3. cta           ← [bottom conversion]
```

Gap kinds often needed:
- `blog-list` ⚠️ — if projects are structured as articles with detail pages

### `/reviews` (social proof page)

```
1. stats-band    ← [aggregate rating banner]
2. testimonials  ← [full testimonials — more verbose grid or list]
3. cta           ← [conversion band]
```

### `/service-areas` (coverage map / suburb listing)

```
1. hero          ← [compact — "Areas We Serve"]
2. stats-band    ← [coverage signal — number of suburbs, response time]
3. features      ← [suburb clusters or region cards]
4. cta           ← [conversion band]
```

Gap kinds often needed:
- `locations` ⚠️ — purpose-built suburb grid with interactive map

### `/about` (company + team)

```
1. hero          ← [compact — founder story intro]
2. stats-band    ← [years in business, jobs completed, satisfaction rate]
3. features      ← [values or differentiators]
4. testimonials  ← [long-form customer voices]
5. logo-cloud    ← [certifications + industry memberships]
6. cta           ← [conversion band]
```

Gap kinds often needed:
- `team` ⚠️ — if the business has a named team beyond the founder

### `/faq` (FAQ + objections)

```
1. hero          ← [compact — "Common Questions"]
2. cta           ← [conversion band at bottom]
```

Gap kinds needed:
- `faq` ⚠️ — the primary content of this page; entire page is blocked without it

### `/contact` (contact + hours + map)

```
1. hero          ← [compact — "Get In Touch"]
2. stats-band    ← [response promise + phone + hours]
3. cta           ← [conversion band / split panel with phone + form]
```

Gap kinds often needed:
- `form-card` ⚠️ — inline contact form

### `/quote` (primary conversion page)

```
1. hero          ← [compact — "Request a Quote"]
2. features      ← [what's included / expectations + trust signals]
3. cta           ← [secondary CTA band below form]
```

Gap kinds needed:
- `form-card` ⚠️ — the quote form is the primary content; page is blocked without it

---

## forbidden_patterns

Local-service sites MUST NOT use the following:

1. **No jargon-only service descriptions** — all service names must be plain English that a homeowner understands.
2. **No stock photos of generic workers** — real project photography or credible lifestyle; no handshake stock, no people-pointing-at-laptop.
3. **No hidden phone number** — phone CTA must be above the fold on mobile, always.
4. **No pricing-only pages without trust context** — price is a secondary signal; trust (reviews, license, projects) must appear before or alongside pricing.
5. **No overly technical archetype** (`ai-product`, `dashboard-ops`) — these are wrong for this industry and damage trust.
6. **No heavy animation** — `local-business-trust` archetype allows only `rise-soft` and `fade-in` motion presets. No mesh-drift, no idle-pulse-once.
7. **No purely-dark theme** — `local-business-trust` prefers `light`; a dark override is allowed but must be justified in the brief.
8. **No multi-step quiz / AI-assistant UI patterns** — conversion is phone call or quote form; novelty UX erodes trust in this industry.

---

## notes

- **Phone CTA is always primary.** Even if the brief emphasises the quote form, the phone number is the highest-intent conversion for a local service business. It must appear in the hero, sticky header, and CTA band.
- **Locality is the top trust signal.** Hero and stats-band must name the specific service area (suburb, city, region), not a vague phrase like "serving the area".
- **Emergency services pages are high-intent SEO targets.** If the brief includes emergency services (e.g., emergency electrician, 24-hour plumber), those specialist pages are a priority and should be in the primary nav or prominently linked from home.
- **The `/faq` page is often a meaningful gap exposer.** Most local-service briefs ask for it; the `faq` section kind is not yet in the DS. Record this gap proactively even if the brief doesn't explicitly mention FAQ.
- **Review / social proof pages are lightweight.** They can be deferred to a second launch phase if DS `testimonials` variant gap is a blocker.
