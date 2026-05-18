# Master UI Architecture

## Product Intent
Create a premium-feeling Australian electrical services website that turns urgent and planned visitors into phone calls and quote requests with minimal friction.

The site must work for two adjacent audiences without feeling split-brain:
- homeowners who want fast trust and quick action
- businesses who want reliability, compliance confidence, and service continuity

## Experience Direction
The site should feel more polished than typical trade websites while still reading like a real local operator. The visual posture is not luxury-for-luxury's-sake; it is clarity, trust, response speed, and grounded professionalism.

## Experience Principles
- Phone first, form second, proof always.
- Locality must be explicit within the first screen.
- Separate urgent intent from planned-service exploration.
- Treat residential and commercial audiences as distinct but adjacent.
- Never hide trust details behind secondary pages.

## Research Synthesis
Modern electrical lead-gen sites usually succeed when they combine:
- a direct response hero
- trust chips and rating proof immediately below
- service architecture that mirrors search intent
- mobile-fixed contact access
- short, dispatch-friendly forms
- project and review proof that feels specific and real

Australian-specific content direction:
- use Australian English and familiar trade language
- prioritize services like switchboard upgrades, smoke alarm compliance, EV chargers, lighting, fault finding, rewiring, and commercial maintenance
- include postcode or suburb language on service-area routes
- surface license and insurance information once confirmed

## Core Journeys
### Emergency path
Home or emergency route -> trust and availability cues -> click-to-call -> contact made

### Planned homeowner quote path
Home -> service route -> proof and FAQ -> quote route -> submit short form

### Commercial buyer path
Home or commercial route -> capability and sectors -> project proof -> contact or quote

### Local SEO path
Search lands on service or area route -> confirms service fit and location -> call or quote

## Site Map
- / Home
- /services Services overview
- /residential Residential electrical
- /commercial Commercial electrical
- /emergency-electrician Emergency service
- /switchboard-upgrades Switchboard upgrades
- /ev-charger-installation EV chargers
- /smoke-alarm-compliance Smoke alarm compliance
- /service-areas Service areas
- /projects Projects
- /reviews Reviews
- /about About
- /faq FAQ
- /contact Contact
- /quote Request a quote

## Global Navigation
Desktop primary nav:
- Home
- Services
- Residential
- Commercial
- Projects
- Service Areas
- Contact

Desktop utility row:
- left: social icons if used later
- right: hours, emergency badge if truthful, phone number

Primary CTAs in header:
- Call Now
- Request a Quote
- ThemeSwitcher

## Mobile Navigation
Mobile topbar:
- logo
- theme switcher
- call button
- menu trigger

Mobile bottom nav:
- Home
- Services
- Quote
- Projects
- Contact

Sticky mobile utility:
- call now remains the primary conversion action

## Shared Conversion Infrastructure
- hero phone CTA on all flagship and primary routes
- sticky mobile call bar
- quote CTA repeated in header, hero, mid-page, and footer
- short quote form with fields: name, phone, suburb/postcode, service, job summary
- emergency route uses call-first hierarchy; quote form is secondary there

## Frontend Visual Strategy
- full-bleed hero with real job-site or electrician photography
- light-first default with dark theme available but not visually dominant
- electric blue primary surfaces, amber CTA emphasis, off-white base backgrounds
- mix of clean panels, badges, rating strips, and grounded photo framing
- zero template-copy feel between Home, Commercial, Emergency, and Projects heroes

## Layout System
- flagship home page: 8 sections minimum
- primary service and trust pages: 5 to 6 sections minimum
- proof routes: hero, filter or category intro, project proof blocks, trust strip, CTA
- contact and quote routes stay operational and low-friction, not decorative

## Page Inventory
### /
- flagship lead-gen page for all audiences
- hero should combine locality, trust, and direct contact choice

### /services
- overview route for all core capabilities
- should route users toward residential, commercial, and specialist services

### /residential
- homeowner-focused route for domestic jobs, upgrades, lighting, safety, and fault finding

### /commercial
- business-focused route for maintenance, fit-outs, testing, scheduled works, and reliability

### /emergency-electrician
- urgent route with call-first hierarchy, response promise, and what to do next

### /switchboard-upgrades
- safety and compliance-focused route with proof and FAQ

### /ev-charger-installation
- future-forward route that positions the brand as modern and high-trust

### /smoke-alarm-compliance
- regulation-aware route for homeowners, landlords, and property managers

### /service-areas
- suburb and postcode coverage hub for local SEO and qualification

### /projects
- case and project proof surface

### /reviews
- social-proof concentration route

### /about
- credentials, process, people, and trust route

### /faq
- objection handling route

### /contact
- direct phone, form, and hours route

### /quote
- primary structured lead capture route

## Cross-Page Components
- ThemeSwitcher
- MobileBottomNav
- AuthModal fallback infrastructure even if auth is not foregrounded
- SiteHeader
- SiteFooter
- HeroSection
- TrustStrip
- RatingAggregate
- ServiceCard set
- ProjectProof cards
- Review cluster
- FAQ accordion
- Quote form block
- Area coverage grid or postcode lookup placeholder

## Shared State Requirements
- loading: skeletons for service grids, review clusters, and project lists
- error: contact fallback with phone number and retry path
- empty: no-project or no-review surfaces still preserve conversion CTA
- offline: quote/contact forms preserve typed input and offer call fallback

## Motion Posture
- calm-precise
- restrained text reveal in heroes
- hover emphasis on cards and CTA pills
- reduced-motion fallback for every animated surface

## Accessibility Posture
- strong text contrast on hero overlays
- click-to-call and quote CTAs keyboard reachable immediately
- heading outline must stay simple for stressed or older audiences
- no CTA depends on hover discovery

## Localization Posture
- en-AU only for initial version
- use Australian spelling and trade terms
- make suburb, state, and service-area tokens easy to replace once actual city is known

## Implementation Stack Guidance
- marketing-site stack with CMS-ready route structure
- forms, analytics, reviews, and SEO prioritized
- no auth or payments in first release

## Route Map
- public marketing routes only in phase one
- future suburb detail routes can expand under /service-areas/[slug]
- future service detail routes can expand under /services/[slug] if content volume grows

## Modern Home Page Section Plan
1. Hero: locality + trust + two CTA paths
2. Review and trust strip: rating, licenses, years, response promise
3. Residential vs commercial split
4. Core specialist services grid
5. Featured project outcomes
6. Why customers choose us / process disclosure
7. FAQ / objection handling
8. Final CTA band with call and quote options

## Modern Conversion Notes
- Calls are highest-priority on mobile and emergency flows.
- Quote form should never feel long or admin-heavy.
- Commercial page should use stronger proof language than homeowner pages.
- Emergency messaging must stay honest; if 24/7 is unavailable, replace with same-day response promise.

## Open Questions
- Final brand and metro area
- Real emergency availability
- Publishable licenses and accreditations
- Whether to feature financing or payment-plan messaging for bigger installs