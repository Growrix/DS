---
document_type: site-inventory
project: electrical-service-provider-au
archetype: marketing_site
execution_mode: frontend_focus
planning_status: draft_assumption_led
---

## Tier 1 - Infrastructure (auto-generated)
- /not-found - standard branded 404 with home path and contact fallback
- /error - standard runtime fallback with retry and home path
- /loading - route-group loading skeletons
- /sign-in - fallback auth route for direct links and password managers
- /sign-up - fallback auth route for direct links and account creation handoff
- /privacy-policy - legal page
- /terms-of-service - legal page
- sitemap.ts - generated from route inventory
- robots.ts - standard crawl policy
- manifest.ts - PWA metadata
- opengraph-image.tsx - branded OG default

Conditional routes:
- /sitemap - recommended because the site includes multiple service and area routes
- /accessibility-statement - optional, add if compliance posture is later required

## Tier 2 - Core Business Routes
- flagship_landing -> / -> pages/home.md
- primary_capability -> /services -> pages/services.md
- trust_credibility -> /about -> pages/about.md
- direct_conversion -> /quote -> pages/quote.md

## Tier 3 - Business-Specific Routes
- /residential - separates homeowner jobs and common domestic electrical needs
- /commercial - gives business buyers a dedicated capability and trust surface
- /emergency-electrician - supports urgent-intent search and call conversion
- /switchboard-upgrades - high-intent safety and compliance service route
- /ev-charger-installation - modern growth service with strong search intent
- /smoke-alarm-compliance - regulatory and landlord-friendly service route
- /service-areas - confirms suburb and postcode coverage before contact
- /projects - proves workmanship with completed-job examples
- /reviews - concentrates testimonial and review proof
- /faq - handles objections around pricing, timing, and response expectations
- /contact - gives direct contact paths for lower-friction visitors

## Brief Scope
- /
- /services
- /about
- /quote
- /residential
- /commercial
- /emergency-electrician
- /switchboard-upgrades
- /ev-charger-installation
- /smoke-alarm-compliance
- /service-areas
- /projects
- /reviews
- /faq
- /contact