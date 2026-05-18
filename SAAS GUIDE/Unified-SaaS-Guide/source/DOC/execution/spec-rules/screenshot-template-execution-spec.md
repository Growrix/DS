# Screenshot Template Execution Spec

## Purpose
Define the governed screenshot-first template lane. This lane recreates public frontend output from screenshots and references while keeping the planning surface intentionally minimal.

## Source Of Truth
- Screenshots and supplied references are the source of truth for visual structure, spacing, hierarchy, composition, and public-route appearance.
- When screenshots are supplied, screenshot visuals are canonical. Live URL capture may be used for copy extraction only and MUST NOT override screenshot layout/composition decisions.
- The template lane may only infer the following without widening scope:
  - replacement text, names, logos, and favicons
  - missing pages explicitly implied by visible navigation, footer links, or repeated public CTAs
  - required infrastructure pages such as `404`, `thank-you`, `privacy-policy`, and `terms` when those are clearly implied

## Execution Profiles
- `replica_strict` (default): prioritize pixel-faithful replication. No additive public UI chrome beyond what is visible in the screenshot pack, except legal replacement and minimum accessibility compliance.
- `enhancement_phase`: add optional UX/system enhancements after strict replication is complete and accepted.

## Required Inputs
- Screenshot/reference pack.
- Visible navigation and footer inventory.
- Brand replacement contract.
- Footer attribution contract.
- Execution profile (`replica_strict | enhancement_phase`).
- Operation mode (`new_template | continue_existing_template`).
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
- In `continue_existing_template`, preserve the imported runtime baseline and modify only the requested completion or enhancement slices.
- Preserve the repo-wide footer attribution contract from the brief or its deterministic default: `Built and Maintained by Growrix OS` linking to `https://www.growrixos.com`.
- In `replica_strict`, do not add non-reference UI chrome (theme switcher, bottom nav, extra badges/rails/top bars) unless present in screenshots.
- In `enhancement_phase`, additive chrome is allowed but must be explicitly documented in `reference-inventory.md` as post-replica enhancement.
- If auth is present, prefer modal-first auth and keep standalone auth routes as fallbacks.
- Record screenshot evidence identity (path + hash) for each source screenshot.
- Do not declare visual parity using subjective labels only. Use measurable thresholds and include metric evidence.

## Validation
- Lint, typecheck, and build must pass from the template runtime root.
- After build or merge work, `npm run dev` must be started from the template runtime root using the documented checklist, and live smoke probes must pass before the lane can be declared complete.
- Screenshot parity must be checked at minimum for desktop and mobile on the home route and the primary conversion route.
- Visual parity report MUST include explicit thresholds and measured values:
  - overall pixel mismatch ratio <= 1.5%
  - structural geometry mismatch (hero/header/footer bounding boxes) <= 2.0%
  - color delta tolerance for dominant UI regions <= 5%
- In `replica_strict`, any unapproved additive public UI chrome is an automatic fail.
- `reference-inventory.md` must document every inferred page that was not directly visible in screenshots.

## Failure Modes
- `SCREENSHOT_SOURCE_MISSING`
- `SCREENSHOT_SCOPE_DRIFT`
- `SCREENSHOT_PROFILE_DRIFT`
- `COPYRIGHT_COMPLIANCE_FAILED`
- `TEMPLATE_OUTPUT_ROOT_INVALID`
- `TEMPLATE_RUNTIME_BOOT_FAILED`
- `TEMPLATE_VISUAL_PARITY_FAILED`
- `TEMPLATE_VISUAL_EVIDENCE_MISSING`