# Page Brief: Projects (`/projects`)

**Route slug:** `projects`
**Page title:** Solar Installation Projects | SunPath Solar
**Meta description:** Browse SunPath Solar's completed residential and commercial solar installations across Sydney, Melbourne, Brisbane, Perth, and Adelaide. See real systems on real rooftops.
**Primary goal:** Build credibility through photographic evidence of completed work. Secondary conversion path to quote request.
**Archetype:** `local-business-trust`
**Theme:** `light`

---

## Sections (top → bottom)

### 1. `hero` — `hero-editorial-premium-1`
**Content slots:**
- `projects.hero.kicker`: "Completed Installations Across Australia"
- `projects.hero.headline`: "Real Work. Real Rooftops. Real Savings."
- `projects.hero.subheadline`: "Browse SunPath Solar's portfolio of residential and commercial installations — from 6.6kW suburban rooftops to 500kW industrial arrays."
- `projects.hero.cta_primary_label`: "Get a Quote for Your Property"
- `projects.hero.cta_primary_href`: "/contact"
- `projects.hero.cta_secondary_label`: null
- `projects.hero.image_alt`: "Montage of four SunPath Solar installations — residential home, warehouse, office building, and rural property across Australia"

---

### 2. `case-studies` — `case-studies-grid`
**Rationale:** The primary content of this page. Showcases completed work with photography, system size, location, and outcome data. Builds tangible proof.

**Content slots:**
- `projects.cases.section_label`: "Our Work"
- `projects.cases.section_headline`: "Installations We're Proud Of"
- `projects.cases.card_1_title`: "Parramatta Family Home — 13.3kW + Powerwall"
- `projects.cases.card_1_tags`: "Residential · NSW · 13.3kW + 13.5kWh Battery"
- `projects.cases.card_1_image_alt`: "Completed 13.3kW solar and Tesla Powerwall installation on a family home in Parramatta, NSW"
- `projects.cases.card_2_title`: "Brendale Logistics Warehouse — 320kW"
- `projects.cases.card_2_tags`: "Commercial · QLD · 320kW"
- `projects.cases.card_2_image_alt`: "Aerial view of 320kW solar array on a logistics warehouse roof in Brendale, Queensland"
- `projects.cases.card_3_title`: "Brighton Period Home — 6.6kW Heritage Roof"
- `projects.cases.card_3_tags`: "Residential · VIC · 6.6kW · Heritage Constraints"
- `projects.cases.card_3_image_alt`: "6.6kW solar installation on a heritage-style period home in Brighton, Victoria"
- `projects.cases.card_4_title`: "Port Melbourne Office Complex — 85kW"
- `projects.cases.card_4_tags`: "Commercial · VIC · 85kW"
- `projects.cases.card_4_image_alt`: "85kW rooftop solar system on a commercial office building in Port Melbourne, Victoria"
- `projects.cases.card_5_title`: "Norwood Family Home — 10kW + Sungrow Battery"
- `projects.cases.card_5_tags`: "Residential · SA · 10kW + 9.6kWh Battery"
- `projects.cases.card_5_image_alt`: "10kW solar system with Sungrow battery storage on a contemporary home in Norwood, South Australia"
- `projects.cases.card_6_title`: "Osborne Park Automotive Showroom — 45kW"
- `projects.cases.card_6_tags`: "Commercial · WA · 45kW"
- `projects.cases.card_6_image_alt`: "45kW commercial solar installation on an automotive showroom in Osborne Park, Western Australia"

---

### 3. `stats-band` — `stats-band-4col`
**Content slots:**
- `projects.stats.stat_1_value`: "2,400+"
- `projects.stats.stat_1_label`: "Completed Installations"
- `projects.stats.stat_2_value`: "5 States"
- `projects.stats.stat_2_label`: "NSW, VIC, QLD, WA, SA"
- `projects.stats.stat_3_value`: "6kW–500kW"
- `projects.stats.stat_3_label`: "System Size Range"
- `projects.stats.stat_4_value`: "100%"
- `projects.stats.stat_4_label`: "CEC Accredited Team"

---

### 4. `cta` — `cta-full-bleed`
**Content slots:**
- `projects.cta.headline`: "Let's Add Your Property to the List"
- `projects.cta.subheadline`: "Get a no-obligation quote for your home or business. Most assessments are completed within 48 hours."
- `projects.cta.cta_primary_label`: "Request a Free Quote"
- `projects.cta.cta_primary_href`: "/contact"
- `projects.cta.cta_secondary_label`: "Call 1300 786 765"
- `projects.cta.cta_secondary_href`: "tel:1300786765"

---

## Page notes
- Photography is critical on this page. Client must provide real project images — stock imagery is not appropriate for case studies.
- Case study cards: the DS `case-studies-grid` variant supports a 16:9 image + tags + title. Client should supply consistent landscape-format project photos.
- Consider adding a filter (by type: residential / commercial) when the DS supports interactive filtering — currently out of DS scope.
