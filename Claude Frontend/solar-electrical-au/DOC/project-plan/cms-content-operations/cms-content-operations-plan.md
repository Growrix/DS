# CMS Content Operations Plan

## CMS Decision

Sanity Studio is the content system for phase 1 because the site depends on structured, reusable content across products, markets, insights, trust documents, CTAs, and global layout modules.

## Document Model

### Global Documents

- Site settings
- Navigation
- Footer
- SEO defaults
- Reusable CTA modules

### Page Documents

- Homepage
- Sector pages
- Commodity family pages
- Product pages
- Industry pages
- Capability pages
- Origin market pages
- Destination market pages
- Trade corridor pages
- Insight articles
- Case studies
- Policy pages
- FAQ entries
- Office locations
- Team profiles

## Taxonomy Model

- Sector
- Commodity family
- Product tags
- Industries served
- Origin region
- Destination region
- Trade corridor
- Insight topics

## Editorial Workflow

1. Editor creates or updates draft.
2. Draft passes validation and SEO checks.
3. Approver reviews copy, claims, and compliance-sensitive text.
4. Publish triggers route and tag-based revalidation.
5. Archived content remains restorable and traceable.

## Field Governance

- Slugs are unique and route-safe.
- SEO fields exist on every routable document.
- Product pages require specification blocks, commercial summary, use cases, and CTA configuration.
- Trust and policy pages require owner and last-reviewed metadata.

## Preview And Publish Rules

- Preview uses authenticated draft mode.
- Publish triggers webhooks to refresh affected pages and search indexes.
- Failed publish propagation must be observable and replayable.

## Media Governance

- Public editorial assets stay in Sanity assets.
- Private supplier or partner documents never enter the CMS.
- File naming and alt-text standards apply to all public imagery and downloadable assets.

## Ownership Model

- Marketing owns homepage, insights, CTA modules, and campaigns.
- Commercial operations owns product, market, and capabilities accuracy.
- Compliance owns policy and supplier-facing disclosure review.
- Engineering owns schema implementation, preview, and revalidation infrastructure.