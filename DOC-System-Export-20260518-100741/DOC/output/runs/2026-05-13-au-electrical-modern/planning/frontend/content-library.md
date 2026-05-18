---
document_type: content-library
project_name: electrical-service-provider-au
default_locale: en-AU
locales: [en-AU]
i18n_required: false
build_stage: 2-design-foundation
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - brief.json
planning_status: draft_assumption_led
---

# Content Library

## 1. Voice & Tone
- Voice: modern
- Tone: trustworthy, clear, urgency-aware
- Reading level: plainspoken homeowner-friendly copy with sharper proof language for commercial routes
- Forbidden words: world-class, best-in-class, synergy, disruptive, innovative

## 2. Naming Convention
- Dot-notated keys
- Surface-first naming: home.*, services.*, commercial.*
- Shared UI keys live under component.* and navigation.*
- Errors live under errors.* and validation.*

## 3. Content Surfaces
### Surface: brand
- brand.name
- brand.phone.label
- brand.phone.href
- brand.email
- brand.hours
- brand.primary_area
- brand.primary_cta

### Surface: navigation
- navigation.header.home
- navigation.header.services
- navigation.header.residential
- navigation.header.commercial
- navigation.header.projects
- navigation.header.service_areas
- navigation.header.contact
- navigation.mobile.quote

### Surface: home
- home.hero.*
- home.trust.*
- home.split.*
- home.services.*
- home.proof.*
- home.process.*
- home.faq.*
- home.cta.*

### Surface: route groups
- services.*
- residential.*
- commercial.*
- emergency.*
- switchboard.*
- ev.*
- smoke.*
- areas.*
- projects.*
- reviews.*
- about.*
- faq.*
- contact.*
- quote.*

### Surface: component
- component.theme_switcher.*
- component.quote_form.*
- component.footer.*

### Surface: auth
- auth.modal.title_sign_in
- auth.modal.title_sign_up
- auth.modal.switch_to_sign_in
- auth.modal.switch_to_sign_up
- auth.form.submit_sign_in
- auth.form.submit_sign_up

### Surface: seo
- seo.<route>.title
- seo.<route>.description

### Surface: schema_org
- schema.home.local_business.name
- schema.home.local_business.telephone
- schema.home.local_business.area_served

## 4. Shared Component Surfaces
- component.theme_switcher.aria_label
- component.theme_switcher.light_label
- component.theme_switcher.dark_label
- component.quote_form.submit
- component.quote_form.success_title
- component.quote_form.success_body
- component.footer.attribution.text
- component.footer.attribution.link_text
- component.footer.attribution.url
- auth.modal.title_sign_in
- auth.modal.title_sign_up
- auth.modal.switch_to_sign_in
- auth.modal.switch_to_sign_up

## 5. Errors and Validation
- errors.network.title
- errors.network.body
- errors.network.retry
- errors.not_found.title
- errors.not_found.body
- validation.name.required
- validation.phone.required
- validation.postcode.required
- validation.service.required

## 6. SEO Block
- seo.home.title and description lead with local electrical value plus trust
- seo.services.title and description support broad service intent
- seo.emergency.title and description support urgent search intent
- seo.commercial.title and description support business buyers
- seo.quote.title and description support qualified lead capture

## 7. Schema.org Snippets
- LocalBusiness schema is planned for home and contact routes with name, area served, phone, and opening hours once confirmed

## 8. Trust Copy
- trust.license
- trust.years
- trust.areas
- trust.response_time
- trust.guarantee
- trust.privacy

## 9. Forbidden Words Audit
- No forbidden words remain in the drafted copy.

## 10. Open Questions
- Replace the draft business name with the real brand
- Publish exact license numbers and memberships once confirmed
- Confirm whether emergency service is truly 24-7 or same-day only
- Confirm specific suburbs or metro areas for service-area headlines
