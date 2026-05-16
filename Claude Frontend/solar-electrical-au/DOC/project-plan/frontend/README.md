# Frontend Planning

This folder defines the public site architecture for the Commodity Trading Company Website. It owns information architecture, reusable page templates, component governance, accessibility, responsive behavior, analytics touchpoints, and frontend error states.

## Owns

- Public route and template system
- Page-by-page section planning for each core route and reusable dynamic template
- Design system usage rules for implementation
- Form UX, CTA hierarchy, and interaction states
- SEO-aware layout composition and template governance

## Does Not Own

- CMS schema design
- Operational data models
- Private upload authorization or internal role access logic

## Primary File

- `frontend-plan.md`

## Required File Set

- `frontend-plan.md` as the master frontend architecture file
- `page-*.md` files for each core page and reusable dynamic template in scope
- `ai-context.yaml` as the machine-readable routing file
- `README.md` as the human-readable index

## Read Order

1. `README.md`
2. `frontend-plan.md`
3. `page-index.md`
4. Page files in build order, starting with the global shell and highest-priority conversion pages

## Page File Contract

Every page file must define:

- route or template ownership
- page goal and audience intent
- section-by-section structure
- primary and secondary conversion surfaces
- desktop and mobile behavior notes
- relevant default, loading, empty, success, and error states where applicable