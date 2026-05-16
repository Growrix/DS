# Products Hub Page

## Metadata

- Route: `/products`
- Template type: static plus CMS-fed hub
- Primary audiences: buyers, suppliers
- Primary CTA: Browse Product Families
- Secondary CTA: Request a Quote

## Goal

Give visitors a fast, scannable entry into the full product taxonomy and explain how the catalog is structured commercially.

## Section Plan

### 1. Hub Hero
- Purpose: Frame the product catalog around sectors and applications.
- Content: short explanation of sectors and sourcing strength.

### 2. Sector Navigator
- Purpose: Route into the four major sectors.
- Content: sector cards with featured families and product counts if useful.

### 3. Featured Product Families
- Purpose: Surface strategic or high-demand families.
- Content: wheat, urea, sulfur, refined fuels, or equivalent priority families.

### 4. How To Evaluate Products
- Purpose: Help B2B users understand the browsing model.
- Content: guidance on grade, origin, packaging, application, and logistics criteria.

### 5. Origin And Logistics Proof
- Purpose: Tie products to delivery capability.
- Content: common origins, shipping modes, documentation support.

### 6. Supporting Resources
- Purpose: Connect catalog browsing with insights and trust content.
- Content: spec explainers, corridor content, FAQ links.

### 7. CTA Band
- Purpose: Capture visitors who already know what they need.
- Content: request quote, sourcing request, supplier registration links.

## State Coverage

- Default: category-led browsing hub.
- Loading: skeleton cards for CMS-fed sectors or featured families.
- Empty: show sector navigator and fallback CTA if no featured family is pinned.
- Success: not applicable.
- Error: degrade to static sector routing and contact CTA.

## Dependencies

- Sector and family metadata from CMS.
- Product counts or featured flags if surfaced.