# Analytics Plan

## Core KPIs

- Qualified inquiry volume by channel and sector
- Quote request conversion rate
- Supplier registration completion rate
- Insight-to-contact conversion rate
- Top-performing product, market, and insight pages
- Regional lead mix by destination or origin interest

## Event Taxonomy

- `page_viewed`
- `cta_quote_clicked`
- `cta_supplier_clicked`
- `quote_form_started`
- `quote_form_submitted`
- `sourcing_form_submitted`
- `supplier_form_submitted`
- `partnership_form_submitted`
- `newsletter_subscribed`
- `search_used`
- `search_result_clicked`
- `insight_article_viewed`
- `product_page_viewed`
- `market_page_contact_clicked`

## Reporting Views

- Executive growth dashboard
- Content performance dashboard
- Conversion funnel dashboard
- Regional demand dashboard

## Privacy Rules

- Do not track attachment names, free-text message contents, or private operator notes.
- Hash or minimize identifiers where event correlation is needed.
- Disable analytics cleanly in environments where consent or configuration requires it.

## Provider Decision

Use either PostHog or Plausible. Final selection must be made before implementation starts, but the event taxonomy is provider-agnostic.