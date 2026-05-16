# Product Detail Template Page

## Metadata

- Route: `/products/[sector]/[family]/[product]`
- Template type: dynamic CMS template
- Primary audiences: buyers, spec evaluators, sourcing teams
- Primary CTA: Request a Quote
- Secondary CTA: Submit a Sourcing Request

## Goal

Answer technical, commercial, and logistics questions well enough to move a qualified prospect into a serious inquiry.

## Section Plan

### 1. Product Summary Hero
- Purpose: Establish the product, grade, and commercial relevance quickly.
- Content: name, short summary, primary applications, quick facts.

### 2. Specification Block
- Purpose: Present technical detail in a scan-friendly way.
- Content: table of grades, tolerances, packaging options, standards.

### 3. Application And Buyer Fit
- Purpose: Help visitors self-qualify.
- Content: ideal use cases, buyer types, industry mapping.

### 4. Origin And Supply Options
- Purpose: Show how supply is sourced and fulfilled.
- Content: source regions, seasonality, port access, continuity notes.

### 5. Commercial And Logistics Information
- Purpose: Support procurement evaluation.
- Content: MOQ guidance, shipment modes, incoterms, lead times, document pack.

### 6. Quality And Compliance
- Purpose: Reduce trust friction.
- Content: inspection process, test methods, certifications, quality controls.

### 7. Qualified Inquiry Form
- Purpose: Capture serious demand.
- Content: product, grade, volume, destination, timeline, company details.

### 8. Related Products And Resources
- Purpose: Encourage adjacent discovery.
- Content: substitutes, adjacent grades, related insights or FAQ.

## State Coverage

- Default: fully populated product page.
- Loading: hero, spec-table, and form skeletons.
- Empty: if specs are incomplete, show product summary with direct sourcing CTA and “speak to team” fallback.
- Success: inline confirmation after form submit with response expectations.
- Error: preserve form values, show retry-safe error, expose direct contact fallback.