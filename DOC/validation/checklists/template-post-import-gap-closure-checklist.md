# Template Post-Import Gap Closure Checklist

Use this checklist before handing a normalized template to deployment work.

## Required
- Import report exists and is current.
- Template self-audit exists and is current.
- Each enabled attach-contract module is classified as wired, missing wiring, missing UI surface, client optional, or missing Foundation contract.
- Every eligible existing UI surface is wired to the template-local facades.
- Standalone fallback mode remains runnable.
- Attached mode is proven for the wired surfaces.
- Gap-closure report exists at `.audit/post-import-gap-closure.md`.

## Optional
- Client-specific optional features are documented separately from mandatory merge work.
- Future Foundation contract gaps are recorded with exact missing DTO or endpoint needs.