# Page Brief: Contact / Get a Quote (`/contact`)

**Route slug:** `contact`
**Page title:** Get a Free Solar Quote | SunPath Solar
**Meta description:** Contact SunPath Solar for a free solar quote across Sydney, Melbourne, Brisbane, Perth and Adelaide. Call 1300 786 765 or submit your details and we'll call you back within 4 business hours.
**Primary goal:** Primary lead capture page. All CTAs across the site funnel here. Must be simple, fast-loading, and trust-forward.
**Archetype:** `local-business-trust`
**Theme:** `light`

---

## Sections (top → bottom)

### 1. `hero` — `hero-editorial-premium-1`
**Rationale:** Compact hero — not full editorial. Sets the tone and gives visitors confidence they've landed in the right place.

**Content slots:**
- `contact.hero.kicker`: "Free Quote · No Obligation · Response Within 4 Hours"
- `contact.hero.headline`: "Get Your Free Solar Quote"
- `contact.hero.subheadline`: "Tell us about your property and we'll get back to you within 4 business hours with a custom solar recommendation and indicative pricing."
- `contact.hero.cta_primary_label`: "Call Us Now: 1300 786 765"
- `contact.hero.cta_primary_href`: "tel:1300786765"
- `contact.hero.cta_secondary_label`: null
- `contact.hero.image_alt`: "SunPath Solar assessor on the phone to a customer with a solar panel installation visible behind them"

---

### 2. `features` — `features-split-alternating`
**Rationale:** Form-card kind not in DS. This section surfaces contact channels (phone, email, office address, service areas) in an alternating image/text layout that serves as the contact information hub. The form is delivered via an embedded third-party booking/form widget in the page template (Calendly / Jotform / HubSpot — executor decision).

**Content slots:**
- `contact.features.section_label`: "How to Reach Us"
- `contact.features.section_headline`: "We're Easy to Get Hold Of"
- `contact.features.row_1_headline`: "Phone & Email"
- `contact.features.row_1_body`: "**Call:** 1300 786 765 (Mon–Fri 8am–6pm, Sat 9am–2pm AEST)\n**Email:** info@sunpathsolar.com.au\n\nFor after-hours emergencies with an existing system, call our support line: 1300 786 766."
- `contact.features.row_1_cta_label`: "Call 1300 786 765"
- `contact.features.row_1_cta_href`: "tel:1300786765"
- `contact.features.row_1_image_alt`: "SunPath Solar customer service team at desks in the Sydney office"
- `contact.features.row_2_headline`: "Service Areas"
- `contact.features.row_2_body`: "We service residential and commercial properties across New South Wales, Victoria, Queensland, Western Australia, and South Australia — including all major metro areas and most regional centres within 100km of a capital city."
- `contact.features.row_2_cta_label`: null
- `contact.features.row_2_image_alt`: "Map of Australia highlighting the five states serviced by SunPath Solar"
- `contact.features.row_3_headline`: "What to Have Ready"
- `contact.features.row_3_body`: "To get the most accurate quote fastest, have a recent electricity bill handy (quarterly usage in kWh), your roof material (tile, Colorbond, flat), and an idea of whether you're interested in battery storage. Everything else we'll figure out together."
- `contact.features.row_3_cta_label`: null
- `contact.features.row_3_image_alt`: "Homeowner reviewing an electricity bill at the kitchen table before calling SunPath Solar"

---

### 3. `cta` — `cta-full-bleed`
**Content slots:**
- `contact.cta.headline`: "Not Ready to Call? We'll Call You."
- `contact.cta.subheadline`: "Leave your name and number below and a SunPath solar specialist will call you back within 4 business hours — no pressure, just straight advice."
- `contact.cta.cta_primary_label`: "Request a Callback"
- `contact.cta.cta_primary_href`: "#callback-form"
- `contact.cta.cta_secondary_label`: "Email Us Instead"
- `contact.cta.cta_secondary_href`: "mailto:info@sunpathsolar.com.au"

---

## Page notes

### DS gap — form-card
This page ideally contains an embedded lead capture form (name, phone, suburb, property type, energy bill range, interest: panels / battery / both). The `form-card` kind does not exist in the DS. The executor should embed a third-party form widget (HubSpot Free Forms, Jotform, or Gravity Forms via WP integration) as an island component outside the DS section system. This is flagged as CRITICAL in ds-gap-report.md for the next DS extension cycle.

### Phone CTA prominence
The phone number (1300 786 765) must appear in the site header on all pages as a `tel:` link. This is the primary conversion path for mobile visitors.

### Response time SLA
The "within 4 business hours" claim is used throughout the site. This must be operationally accurate — coordinate with the client's sales team.
