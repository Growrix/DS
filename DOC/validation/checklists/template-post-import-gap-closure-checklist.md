# Template Post-Import Gap Closure Checklist

Use this checklist before handing a normalized template to deployment work.

## Must wire now
- Import report exists and is current.
- Template self-audit exists and is current.
- Page-section content mapping is connected where the site consumes Foundation-backed content.
- Shared site config and content-shell wiring are connected through template-local facades or documented fallback data.
- Contact form or equivalent lead-form bridge is wired through the template-local forms facade when such a form exists in the site.
- Standalone fallback mode remains runnable for the mandatory wired surfaces.
- Attached mode is proven for the mandatory wired surfaces.
- Gap-closure report exists at `.audit/post-import-gap-closure.md`.

## Optional per client
- Visible media upload UI is added only when the site actually has an upload or user-submitted file feature.
- Visible auth-gated UI is added only when the site actually needs protected pages, account pages, or admin actions.
- Optional surfaces that are not implemented are classified as `client_optional`, not `missing_wiring`.

## Foundation changes only if missing contract support
- Foundation-Core is left untouched when the current DTOs, endpoints, and env/startup contract already represent the template need.
- Any requested Foundation-Core change is tied to a real missing field, endpoint shape, or startup/env contract need.
- Future Foundation contract gaps are recorded with exact missing DTO, endpoint, or deploy/startup-contract requirements.

## Required evidence
- Each enabled attach-contract module is classified as `wired`, `missing_wiring`, `missing_ui_surface`, `client_optional`, or `missing_foundation_contract`.
- Every remaining unresolved item records its execution bucket: `must_wire_now`, `optional_per_client`, or `foundation_change_only_if_missing_contract_support`.