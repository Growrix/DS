---
document_type: brief-intake
version: 1
---

# Brief Intake — Project: <project name>

> Fill the fields below. Fields marked **REQUIRED** must be non-empty before the planner can lock. Fields marked optional can be omitted; the planner uses sensible defaults from the chosen industry pattern.

---

## 1. Project identity (REQUIRED)

- **Project name:** <e.g., "Acme Electrical Services">
- **Project slug:** <kebab-case, e.g., "acme-electrical"> (auto-derived if absent)
- **Locale:** <e.g., "en", "en-AU", "bn"> (default: "en")
- **Business type:** <one of: local-services, modern-saas, ecommerce-dtc, creator-portfolio, ai-product, professional-services, other:?>

## 2. Audience + intent (REQUIRED)

- **Primary audience:** <one or two sentences describing who visits this site>
- **Visitor goals:** <what does a visitor want to accomplish here>
- **Conversion outcome:** <primary CTA — what action signals success>
- **Secondary outcome (optional):** <secondary CTA>

## 3. Brand identity (REQUIRED for archetype + theme resolution)

- **Brand voice:** <e.g., "modern-trustworthy", "playful-direct", "editorial-restrained">
- **Visual mood:** <e.g., "documentary photography + restrained type", "saturated color + oversized type", "dark editorial">
- **Existing brand colors (optional):** <hex or descriptive>
- **Existing brand fonts (optional):** <font family names>
- **Industry positioning (optional):** <premium / standard / volume>

## 4. Site scope (REQUIRED)

- **Pages needed:** <comma-separated list of route ideas, e.g., home, services, projects, about, contact, quote — or "use industry default">
- **Service / product offerings:** <list 3-10 key offerings>
- **Locations / service areas (if applicable):** <list>

## 5. Trust + credibility data (industry-dependent)

- **License / certification text:** <if applicable>
- **Years in business:** <integer>
- **Coverage / response promise:** <e.g., "24-hour callback", "same-day service">
- **Phone (E.164):** <e.g., "+61400000000">
- **Email:** <support email>
- **Hours of operation:** <e.g., "Mon-Fri 8am-6pm, emergency 24/7">

## 6. Content seed (REQUIRED)

- **Hero headline draft (optional):** <one line; planner refines>
- **Hero subheadline draft (optional):** <one or two lines>
- **Primary CTA label:** <e.g., "Get a quote", "Start free trial">
- **Secondary CTA label (optional):** <e.g., "Browse work">
- **Story / about (optional):** <2-3 sentences for /about pages>
- **Testimonials available?** <yes / no — if yes, planner reserves a testimonials section>

## 7. Footer attribution (REQUIRED — declares the agency credit)

- **Enabled:** <true / false> (default: true for agency-produced sites)
- **Text:** <e.g., "Built and maintained by"> (default: "Built and maintained by")
- **Link text:** <e.g., "Growrix OS"> (default: "Growrix OS")
- **URL:** <e.g., "https://www.growrixos.com"> (default: "https://www.growrixos.com")

## 8. Constraints + forbidden patterns (optional)

- **Forbidden words / phrases:** <comma-separated, e.g., "cheap, discount, urgent">
- **Tone constraints:** <e.g., "no slang", "no exclamation marks">
- **Visual constraints:** <e.g., "no neon palette", "no stock photography of handshakes">
- **Sections explicitly NOT wanted:** <e.g., "no pricing page; quote on demand only">

## 9. Open questions for the planner (optional)

- <any decisions you want the planner to surface as `open_questions` in the lock file>

---

## How this intake is processed

1. The planner reads this filled-in intake.
2. Critical missing fields → planner emits clarifying questions (max 3).
3. Sufficient data → planner emits `brief.json` (LOCKED at end of Phase 2).
4. Downstream phases reference `brief.json`, not this template.

## Tips

- Be specific in `voice` and `visual_mood` — these drive archetype selection.
- Specify locale precisely (`en-AU` not `en` if the site is Australian).
- If unsure about pages, just put "use industry default" — the planner applies the matching pattern.
- Footer attribution defaults to your agency credit; override for client-self-published sites.
