# QA Plan

## Required Test Layers

- Unit tests for validators, payload normalization, analytics mappers, and query helpers
- Integration tests for inquiry endpoints, upload authorization, revalidation webhook handling, and email dispatch
- End-to-end tests for quote request, sourcing request, supplier registration, preview, publish, and search usage
- Accessibility validation for global navigation, forms, tables, accordions, and search
- Performance validation for homepage, sector page, product page, and insight page

## Launch-Blocking Scenarios

- Quote request cannot be submitted successfully
- Supplier attachments bypass private storage rules
- Draft content leaks to the public site
- Sanity publish does not update affected routes
- Notification delivery silently fails without operational visibility
- Protected internal views are accessible without proper authorization

## Regression Policy

- Any change to content schema must validate preview, publish, and search freshness.
- Any change to form or endpoint behavior must include unit or integration updates.
- Any critical production incident must result in a regression test.

## Post-Deploy Checks

- Smoke-test homepage, product pages, and trust center
- Submit a test quote request and confirm operator notification
- Validate a sample supplier registration with private attachment handling
- Publish a draft content item and confirm revalidation
- Confirm analytics events and error monitoring heartbeat