# SPEC RULE: FRONTEND EXECUTION CONTRACT

## PURPOSE
Emit a single machine-readable handoff artifact at:

`DOC/output/runs/<timestamp>/planning/frontend/frontend-execution-contract.json`

This contract bridges the rich markdown planning bundle to deterministic runtime execution. It does not replace the human-readable specs. It normalizes the minimum execution data that implementation agents and the factory must consume without re-inventing routes, content coverage, navigation, tokens, or runtime roots.

## REQUIRED TOP-LEVEL SHAPE
```json
{
  "status": "passed | failed",
  "planning_root": "DOC/output/runs/<timestamp>/planning/frontend",
  "project": {
    "name": "<Brand or project name>",
    "slug": "<runtime-safe slug>",
    "project_root_slug": "<brand-slug>-website",
    "summary": "<one-paragraph summary>",
    "product_type": "marketing_site | saas | dashboard | ...",
    "business_type": "local_service | b2b_saas | ecommerce | ...",
    "content_locales": ["en"]
  },
  "planning_artifacts": {
    "frontend_summary": "frontend.json",
    "site_inventory": "site-inventory.md",
    "master_ui_architecture": "master-ui-architecture.md",
    "design_tokens": "design-system.tokens.json",
    "component_system": "component-system.md",
    "motion_system": "motion-system.md",
    "content_library": ["content.en.json"],
    "page_specs": ["pages/home.md"]
  },
  "shared_surfaces": {
    "theme_switcher_required": true,
    "mobile_bottom_nav_required": true,
    "auth_modal_required": true,
    "primary_navigation_routes": ["/", "/services", "/about", "/contact"],
    "mobile_bottom_nav_routes": ["/", "/services", "/quote", "/blog", "/contact"],
    "footer_attribution": {
      "enabled": true,
      "text": "Built by",
      "link_text": "Growrix OS",
      "url": "https://example.com"
    }
  },
  "runtime_design_tokens": {
    "selectedPreset": { "id": "editorial-premium" },
    "brand": { "name": "<Project>", "tone": "confident", "density": "balanced", "palette": {} },
    "narrative": { "direction": "...", "interactionEnergy": "measured", "visualIdentity": "editorial-premium" },
    "theme": { "light": { "color": {} }, "dark": { "color": {} } },
    "typography": { "fontFamilies": {}, "scale": {} },
    "spacing": {},
    "radii": {},
    "shadows": {},
    "motion": {}
  },
  "runtime_composition": {
    "routePlans": [
      {
        "routeId": "/",
        "routeKey": "home",
        "userIntent": "Understand the offer and move to the primary CTA.",
        "creativeLatitude": "HIGH | MEDIUM | LOW",
        "heroArchetype": "signal-horizon",
        "navVisible": true,
        "mobileTabVisible": true,
        "sectionSequence": [
          { "sectionId": "hero", "purpose": "Route opener", "contentSlots": ["headline"], "archetypeId": "hero-signal-horizon" },
          { "sectionId": "trust-strip", "purpose": "Trust reinforcement", "contentSlots": ["proofStatement"], "archetypeId": "trust-strip-proof" },
          { "sectionId": "feature-grid", "purpose": "Capability breakdown", "contentSlots": ["cards"], "archetypeId": "feature-grid-cards" },
          { "sectionId": "cta-band", "purpose": "Conversion reinforcement", "contentSlots": ["headline", "primaryCta"], "archetypeId": "cta-band-stack" }
        ],
        "responsiveStrategy": {
          "mobile": "<planner-declared behavior>",
          "desktop": "<planner-declared behavior>"
        },
        "media": {
          "src": "https://...",
          "alt": "..."
        }
      }
    ],
    "visualDifferentiationMap": [
      {
        "routeId": "/",
        "heroVariant": "signal-horizon",
        "mood": "confident",
        "density": "comfortable"
      }
    ],
    "pageBriefs": [
      {
        "routeId": "/",
        "title": "Home",
        "heroVariant": "signal-horizon",
        "primaryGoal": "Drive primary CTA action.",
        "mandatoryUx": ["ThemeSwitcher", "MobileBottomNav", "AuthModal"],
        "required_content_slots": ["hero", "proof", "cta"],
        "content_keys_used": ["home.hero.title", "home.cta.title"],
        "sectionIds": ["hero", "trust-strip", "feature-grid", "cta-band"],
        "sectionArchetypes": ["hero-signal-horizon", "trust-strip-proof", "feature-grid-cards", "cta-band-stack"],
        "openQuestions": []
      }
    ],
    "contentLibrary": {
      "brand": {},
      "footer": {},
      "home": {
        "hero": { "eyebrow": "...", "title": "...", "description": "...", "primaryCta": "...", "primaryHref": "/contact", "media": { "src": "https://...", "alt": "..." } },
        "trust": { "proofStatement": "...", "logos": ["..."] },
        "features": [{ "title": "...", "body": "..." }],
        "workflow": ["..."],
        "proof": { "outcomes": ["..."], "quote": "...", "speaker": "..." },
        "faq": [{ "question": "...", "answer": "..." }],
        "plans": [],
        "channels": [],
        "cta": { "title": "...", "body": "...", "primaryCta": "...", "primaryHref": "/contact" }
      }
    },
    "componentSystem": {
      "criticalComponents": ["ThemeSwitcher", "MobileBottomNav", "AuthModal"]
    },
    "motionSystem": {
      "direction": "measured",
      "reducedMotion": "Disable transform-heavy transitions and keep opacity-only feedback."
    },
    "frontendSummary": {
      "publicRoutes": ["/"],
      "authRoutes": ["/sign-in", "/sign-up"],
      "routeCoverage": [{ "routeId": "/", "covered": true }]
    }
  },
  "runtime_build_plan": {
    "stack": {
      "framework": "Next.js",
      "language": "TypeScript",
      "styling": "Tailwind CSS",
      "motion": "CSS transitions with reduced-motion-aware runtime markers"
    },
    "routes": ["/", "/contact"],
    "components": ["ThemeSwitcher", "MobileBottomNav", "AuthModal", "LiveStatusPanel", "SiteHeader", "SiteFooter"],
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "lint": "node scripts/lint.mjs",
      "typecheck": "tsc --noEmit",
      "test": "npm run test:unit && npm run test:a11y && npm run e2e:smoke",
      "test:unit": "vitest run --config vitest.config.mjs",
      "test:a11y": "node scripts/run-playwright.mjs a11y",
      "e2e:smoke": "node scripts/run-playwright.mjs smoke",
      "e2e:full": "node scripts/run-playwright.mjs full",
      "audit:frontend": "node scripts/audit-frontend.mjs",
      "release:check": "npm run runtime:detect && npm run dependency:check && npm run lint && npm run typecheck && npm run test:unit && npm run test:a11y && npm run e2e:smoke && npm run build && npm run e2e:full && npm run audit:frontend"
    },
    "releaseGate": {
      "smokeJourneys": ["home route renders"],
      "requiredChecks": ["runtime-detect", "dependency-check", "lint", "typecheck", "test:unit", "test:a11y", "e2e:smoke", "build", "e2e:full", "audit:frontend"],
      "publicRouteCoverage": ["/"]
    },
    "metadata": {
      "projectName": "<Project>",
      "primaryCta": "Get Started",
      "supportEmail": "hello@example.com"
    }
  }
}
```

## REQUIRED RULES
- `runtime_build_plan.routes[]` MUST exactly match `runtime_composition.routePlans[].routeId`.
- Every `shared_surfaces.primary_navigation_routes[]` item MUST also exist in `runtime_build_plan.routes[]`.
- Every `shared_surfaces.mobile_bottom_nav_routes[]` item MUST also exist in `runtime_build_plan.routes[]`.
- `runtime_composition.pageBriefs[]` MUST cover every public route and carry `required_content_slots[]` plus `content_keys_used[]`.
- `runtime_composition.contentLibrary` MUST include a route-keyed payload for every route in `runtime_build_plan.routes[]` except routes that intentionally render fallback-only auth or legal templates.
- `runtime_design_tokens` MUST be execution-ready and normalized; execution agents must not reverse-engineer token decisions from prose.
- `planning_artifacts` paths MUST remain read-only references into the planner bundle.
- This contract MUST stay generic across industries. Do not encode project-specific factory assumptions beyond what the planner already locked.

## FAILURE CONDITIONS
- Missing file -> `FRONTEND_EXECUTION_CONTRACT_MISSING`
- Route mismatch between `runtime_build_plan.routes[]` and `runtime_composition.routePlans[]` -> `FRONTEND_EXECUTION_ROUTE_DRIFT`
- Missing required content payload for an executable route -> `FRONTEND_EXECUTION_CONTENT_GAP`
- Missing required shared-surface contract for theme switcher, mobile nav, or auth modal -> `FRONTEND_EXECUTION_SHARED_SURFACE_GAP`

## INTENT
Execution agents may still read the rich markdown bundle for nuance, but this JSON contract is the deterministic source of truth for route coverage, runtime roots, nav surfaces, tokens, content payloads, and release checks.