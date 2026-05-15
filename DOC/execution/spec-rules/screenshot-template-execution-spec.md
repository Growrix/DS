# Screenshot Template Execution Spec

## Purpose
Define the governed screenshot-first template lane. This lane recreates public frontend output from screenshots and references while keeping the planning surface intentionally minimal.

## Source Of Truth
- Screenshots and supplied references are the source of truth for visual structure, spacing, hierarchy, composition, and public-route appearance.
- The template lane may only infer the following without widening scope:
  - replacement text, names, logos, and favicons
  - missing pages explicitly implied by visible navigation, footer links, or repeated public CTAs
  - required infrastructure pages such as `404`, `thank-you`, `privacy-policy`, and `terms` when those are clearly implied

## Required Inputs
- Screenshot/reference pack.
- Visible navigation and footer inventory.
- Brand replacement contract.
- Footer attribution contract.
- Optional `frontend-attach-contract.json` from Foundation Core.

## Required Output Root
- `Templates/<category>/<template-slug>/`

## Required Output Artifacts
- `README.md`
- `RUN.md`
- `ENV.example`
- `dev-server-checklist.md`
- `export-manifest.md`
- `template.manifest.json`
- `reference-inventory.md`
- `copyright-compliance.md`
- `.audit/frontend-self-audit.md`

## Execution Rules
- Do not use `Frontend-Master_DS/` or `DS-Planning-Engine/` as runtime dependencies for screenshot-template output.
- Do not invent new public layouts, features, or flows that are not visible or explicitly implied.
- Do not copy copyrighted assets. Replace brand assets, photos, testimonials, and legal copy with allowed replacements.
- Keep abstraction pragmatic. Extract naturally repeated structures, but do not force a heavy DS or planner bundle when a local typed config is enough.
- Use Next.js as the default frontend stack.
- Preserve the repo-wide footer attribution contract from the brief or its deterministic default.
- Preserve the screenshot look in the default theme while still shipping the OS-required theme switcher and dark theme support.
- Preserve the screenshot look on mobile while still shipping the OS-required icon-based bottom navigation for marketing templates, unless the input explicitly forbids it.
- If auth is present, prefer modal-first auth and keep standalone auth routes as fallbacks.

## Validation
- Lint, typecheck, and build must pass from the template runtime root.
- `npm run dev` must start from the template runtime root using the documented checklist.
- Screenshot parity must be checked at minimum for desktop and mobile on the home route and the primary conversion route.
- `reference-inventory.md` must document every inferred page that was not directly visible in screenshots.

## Failure Modes
- `SCREENSHOT_SOURCE_MISSING`
- `SCREENSHOT_SCOPE_DRIFT`
- `COPYRIGHT_COMPLIANCE_FAILED`
- `TEMPLATE_OUTPUT_ROOT_INVALID`
- `TEMPLATE_RUNTIME_BOOT_FAILED`
- `TEMPLATE_VISUAL_PARITY_FAILED`