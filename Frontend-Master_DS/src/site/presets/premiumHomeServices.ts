import { ROUTES } from "@/app/route-map";
import {
  BookOpen,
  Globe,
  Home,
  Layers,
  PhoneCall,
  type PublicSitePreset,
} from "@/ds";

const HERO_PHONE = "tel:+13125550198";

export const PREMIUM_HOME_SERVICES_PRESET: PublicSitePreset = {
  id: "premium-home-services",
  label: "Premium Home Services",
  archetype: "local-business-trust",
  config: {
    brand: {
      name: "Northline Home Services",
      href: ROUTES.home,
      tagline: "Plumbing, repair, and maintenance crews for homes and small businesses",
    },
    nav: {
      primary: [
        { id: "home", label: "Home", href: ROUTES.home, icon: Home },
        { id: "services", label: "Services", href: ROUTES.services, icon: Layers },
        { id: "projects", label: "Projects", href: ROUTES.projects, icon: Layers },
        { id: "blog", label: "Blog", href: ROUTES.blog, icon: BookOpen },
        { id: "contact", label: "Contact", href: ROUTES.contact, icon: PhoneCall },
      ],
      mobileBottom: [
        { id: "home", label: "Home", href: ROUTES.home, icon: Home, iconOnly: true },
        { id: "services", label: "Services", href: ROUTES.services, icon: Layers, iconOnly: true },
        { id: "projects", label: "Projects", href: ROUTES.projects, icon: Layers, iconOnly: true },
        { id: "blog", label: "Blog", href: ROUTES.blog, icon: BookOpen, iconOnly: true },
        { id: "contact", label: "Contact", href: ROUTES.contact, icon: PhoneCall, iconOnly: true },
      ],
    },
    socials: [
      { id: "website", label: "Company website", href: "https://example.com", icon: Globe },
      { id: "reviews", label: "Review profile", href: "https://example.com/reviews", icon: Globe },
    ],
    footer: {
      columns: [
        {
          id: "services",
          title: "Services",
          links: [
            { label: "Emergency repairs", href: ROUTES.services },
            { label: "Installations", href: ROUTES.services },
            { label: "Maintenance plans", href: ROUTES.contact },
          ],
        },
        {
          id: "company",
          title: "Company",
          links: [
            { label: "Projects", href: ROUTES.projects },
            { label: "Advice", href: ROUTES.blog },
            { label: "Contact", href: ROUTES.contact },
          ],
        },
        {
          id: "coverage",
          title: "Coverage",
          links: [
            { label: "North Side", href: ROUTES.contact },
            { label: "West Loop", href: ROUTES.contact },
            { label: "Oak Park", href: ROUTES.contact },
          ],
        },
      ],
      attribution: {
        prefix: "Built and maintained by",
        linkText: "Growrix OS",
        url: "https://www.growrixos.com",
        ariaLabel: "Built and maintained by Growrix OS (opens in a new tab)",
      },
    },
    support: {
      actions: [
        { id: "whatsapp", kind: "whatsapp", label: "WhatsApp", phoneE164: "+13125550198" },
        { id: "call", kind: "call", label: "Call", phoneE164: "+13125550198" },
        { id: "chat", kind: "chat", label: "Booking desk" },
      ],
      chat: {
        title: "Booking desk",
        description: "Ask about response times, maintenance plans, or scheduling an estimate.",
        placeholder: "Example: Can you send a plumber to Lakeview this afternoon?",
        sendLabel: "Send",
        disclaimer: "Mock UI only — connect to your assistant backend.",
      },
    },
  },
  pages: {
    home: {
      id: "home",
      title: "Home",
      sections: [
        {
          id: "hero",
          kind: "hero",
          variant: "hero-local-business-trust-premium-split",
          kicker: "Trusted Local Technicians",
          title: "Honest trade experts for repairs, upgrades, and scheduled home care.",
          lede:
            "From burst pipes to bathroom upgrades, Northline dispatches licensed crews with clear quotes, tidy worksites, and service windows that homeowners can actually trust.",
          primaryAction: { label: "Book an estimate", href: ROUTES.contact },
          secondaryAction: { label: "Call now", href: HERO_PHONE },
          media: {
            src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
            alt: "Home-service technician inspecting tools before a job.",
            position: "68% center",
          },
          trustChips: [
            { id: "same-day", label: "Same-day response windows" },
            { id: "licensed", label: "Licensed and insured technicians" },
            { id: "reviews", label: "4.9 average review score" },
          ],
        },
        {
          id: "stats",
          kind: "stats-band",
          variant: "stats-band-local-business-trust-1",
          header: { title: "Built around reliability, not vague promises" },
          stats: [
            { id: "jobs", value: "980+", label: "Completed jobs last year" },
            { id: "clients", value: "900+", label: "Homes and businesses served" },
            { id: "plans", value: "450+", label: "Active maintenance plans" },
            { id: "response", value: "24/7", label: "Emergency phone coverage" },
          ],
        },
        {
          id: "services-grid",
          kind: "features",
          variant: "features-local-business-trust-media-cards",
          header: {
            kicker: "Core services",
            title: "Service lines that feel commercial, premium, and easy to buy",
            lede:
              "Each offer is packaged around response speed, clean execution, and a scope homeowners understand before work starts.",
          },
          features: [
            {
              id: "emergency-plumbing",
              title: "Emergency plumbing response",
              description:
                "Leak isolation, pipe repairs, clogged drains, and weekend dispatch support for urgent residential calls.",
              icon: "Rapid response",
              media: {
                src: "https://images.unsplash.com/photo-1621905252472-e8e0d6f55674?auto=format&fit=crop&w=1200&q=80",
                alt: "Technician repairing plumbing under a sink.",
              },
            },
            {
              id: "fixture-upgrades",
              title: "Fixture and bathroom upgrades",
              description:
                "Installations for vanities, taps, showers, and finish-level upgrades that raise resale appeal.",
              icon: "Upgrade work",
              media: {
                src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
                alt: "Worker fitting bathroom fixtures during a renovation.",
              },
            },
            {
              id: "maintenance-plans",
              title: "Seasonal maintenance plans",
              description:
                "Recurring inspections, drain checks, water-heater servicing, and priority booking windows for plan members.",
              icon: "Recurring care",
              media: {
                src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
                alt: "Service professional carrying tools through a home.",
              },
            },
            {
              id: "commercial-support",
              title: "Commercial light-facility support",
              description:
                "Retail, hospitality, and office maintenance scopes with cleaner reporting and after-hours scheduling.",
              icon: "Commercial",
              media: {
                src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
                alt: "Technician servicing mechanical equipment on a property.",
              },
            },
          ],
        },
        {
          id: "process",
          kind: "features",
          variant: "features-local-business-trust-2",
          header: {
            kicker: "How it works",
            title: "A quote-and-repair flow that feels organized from the first call",
            lede:
              "The experience is built to remove friction: fast triage, confirmed windows, clear scope, and closeout notes before we leave.",
          },
          features: [
            {
              id: "triage",
              title: "Fast triage and booking",
              description:
                "We confirm urgency, building type, and likely materials before dispatch so the right technician arrives first time.",
            },
            {
              id: "onsite-quote",
              title: "Clear onsite quote",
              description:
                "Planned works get a clean scope, timing, and options breakdown before the crew starts installation or repair work.",
            },
            {
              id: "clean-execution",
              title: "Tidy execution and updates",
              description:
                "Crews protect finishes, share progress updates, and document anything that affects schedule or budget.",
            },
            {
              id: "closeout",
              title: "Closeout, warranty, and follow-up",
              description:
                "You receive closeout notes, care guidance, and a straightforward path back to us if you need follow-up support.",
            },
          ],
        },
        {
          id: "projects-gallery",
          kind: "case-studies",
          variant: "case-studies-local-business-trust-gallery",
          header: {
            kicker: "Proof in the field",
            title: "Recent repairs, installs, and property refreshes",
            lede:
              "The gallery gives the preset a more premium project rhythm without hacking the shell or route layer.",
          },
          items: [
            {
              id: "repipe",
              title: "Whole-home repipe with same-week handover",
              excerpt:
                "A staged repipe delivered in phases so the family could stay in the home while critical plumbing was replaced.",
              href: ROUTES.projects,
              tags: ["Residential", "3-day window"],
              media: {
                src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
                alt: "Technician working on piping in a residential property.",
              },
            },
            {
              id: "retail-fix",
              title: "Retail back-of-house repair completed overnight",
              excerpt:
                "Leak isolation, replacement, and reopen support completed before the shop opened for the next trading day.",
              href: ROUTES.projects,
              tags: ["Commercial", "After hours"],
              media: {
                src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
                alt: "Property maintenance professional in a commercial space.",
              },
            },
            {
              id: "bathroom-refresh",
              title: "Bathroom refresh with fixture and finish upgrades",
              excerpt:
                "A value-engineered refresh that combined plumbing upgrades with cosmetic improvements for faster resale prep.",
              href: ROUTES.projects,
              tags: ["Upgrade", "Resale ready"],
              media: {
                src: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80",
                alt: "Tradesperson installing fixtures during a bathroom upgrade.",
              },
            },
            {
              id: "water-heater",
              title: "Emergency water-heater replacement in one visit",
              excerpt:
                "Supply, swap, testing, and disposal all handled in a single booked response window.",
              href: ROUTES.projects,
              tags: ["Emergency", "One visit"],
              media: {
                src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
                alt: "Technician checking a water-heater installation.",
              },
            },
            {
              id: "maintenance-program",
              title: "Multi-site maintenance rollout for a property portfolio",
              excerpt:
                "Standardized inspection routines, documented site notes, and a faster approval path for recurring works.",
              href: ROUTES.projects,
              tags: ["Portfolio", "Preventive"],
              media: {
                src: "https://images.unsplash.com/photo-1581090700227-1e8e8b7694f3?auto=format&fit=crop&w=1200&q=80",
                alt: "Service crew inspecting equipment in a managed property.",
              },
            },
            {
              id: "drain-restore",
              title: "Drain and line restoration for a busy family home",
              excerpt:
                "Camera inspection, line clearing, and preventative recommendations packaged into one documented visit.",
              href: ROUTES.projects,
              tags: ["Inspection", "Preventive"],
              media: {
                src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
                alt: "Home-service professional restoring plumbing in a residential setting.",
              },
            },
          ],
        },
        {
          id: "pricing",
          kind: "pricing",
          variant: "pricing-local-business-trust-plan-cards",
          header: {
            kicker: "Maintenance plans",
            title: "Clear packages for reactive calls and proactive care",
            lede:
              "The plans mirror the reference layout but stay inside the DS contract: clear options, one highlighted tier, and pricing that feels ready to sell.",
          },
          billingToggle: {
            monthlyLabel: "Monthly",
            yearlyLabel: "Yearly",
            defaultCadence: "monthly",
          },
          tiers: [
            {
              id: "repairing",
              name: "Repairing Plan",
              price: { monthly: "$29", yearly: "$299", suffix: "per plan" },
              description: "For one-off fixes and priority booking during business hours.",
              features: [
                "Priority scheduling for standard callouts",
                "Diagnostic fee credited toward approved work",
                "Photo and notes after every visit",
                "Member pricing on common repair parts",
              ],
              cta: { label: "Choose Repairing", href: ROUTES.contact },
            },
            {
              id: "emergency",
              name: "Emergency Plan",
              price: { monthly: "$59", yearly: "$599", suffix: "per plan" },
              description: "The best fit for busy households and light commercial properties that need faster response.",
              features: [
                "24/7 emergency dispatch access",
                "Two preventative maintenance visits each year",
                "Preferred labor rate on urgent repairs",
                "Annual system condition summary",
              ],
              badge: "Most popular",
              highlight: true,
              cta: { label: "Choose Emergency", href: ROUTES.contact },
            },
            {
              id: "replacement",
              name: "Replacement Plan",
              price: { monthly: "$89", yearly: "$899", suffix: "per plan" },
              description: "Best for owners planning capital upgrades, replacements, or annual refresh work.",
              features: [
                "Dedicated estimator for upgrade scopes",
                "Preferred installation scheduling",
                "Annual replacement planning review",
                "Priority access to seasonal promos",
              ],
              cta: { label: "Choose Replacement", href: ROUTES.contact },
            },
          ],
          footnote:
            "Custom install quotes remain available for remodels, water-heater swaps, and commercial scopes outside the packaged plans.",
        },
        {
          id: "testimonials",
          kind: "testimonials",
          variant: "testimonials-local-business-trust-1",
          header: {
            kicker: "Reviews",
            title: "Customers remember the speed, the cleanup, and the communication",
          },
          items: [
            {
              id: "tracy",
              quote:
                "The team gave us a real arrival window, protected the floors, and explained every repair option before starting work.",
              name: "Tracy M.",
              meta: "Emergency pipe repair",
            },
            {
              id: "owen",
              quote:
                "We signed up for the maintenance plan after the first visit because the reporting and follow-up felt far more professional than other contractors.",
              name: "Owen L.",
              meta: "Annual maintenance client",
            },
            {
              id: "camila",
              quote:
                "Northline handled our bathroom fixture upgrade on schedule and the final finish looked far more expensive than the budget suggested.",
              name: "Camila R.",
              meta: "Bathroom upgrade project",
            },
          ],
        },
        {
          id: "faq",
          kind: "faq",
          variant: "faq-local-business-trust-1",
          header: {
            kicker: "Common questions",
            title: "Answers homeowners ask before they book",
            lede: "The FAQ keeps the conversion surface practical: timing, pricing, coverage, and what happens once a crew is on the way.",
          },
          items: [
            {
              id: "arrival-window",
              q: "How fast can you get here for an urgent issue?",
              a: "For urgent plumbing or property issues, we triage by postcode and current load. Same-day windows are common across our core service area, and emergency-plan members receive priority routing.",
            },
            {
              id: "quotes",
              q: "Do you provide quotes before larger repairs or upgrade work?",
              a: "Yes. Planned works receive a documented scope and options breakdown before the crew starts. Smaller reactive fixes are confirmed onsite after diagnosis.",
            },
            {
              id: "insured",
              q: "Are your technicians licensed and insured?",
              a: "Every dispatched technician works under the business licensing and insurance requirements needed for the trade scope being delivered.",
            },
            {
              id: "coverage",
              q: "Which areas do you cover?",
              a: "We currently focus on Chicago neighborhoods and nearby inner-ring suburbs for faster response quality. Use the contact form and we will confirm coverage straight away.",
            },
          ],
        },
        {
          id: "contact-surface",
          kind: "contact",
          variant: "contact-local-business-trust-split",
          header: {
            kicker: "Book your visit",
            title: "Tell us what needs fixing and we will line up the right crew",
            lede:
              "This keeps the bottom of the homepage conversion-ready without editing shell or app routes: direct channels on one side, a structured booking form on the other.",
          },
          channels: [
            { id: "phone", kind: "phone", label: "Call", value: "+1 (312) 555-0198", href: HERO_PHONE },
            {
              id: "email",
              kind: "email",
              label: "Email",
              value: "hello@northlinehomeservices.com",
              href: "mailto:hello@northlinehomeservices.com",
            },
            {
              id: "address",
              kind: "address",
              label: "Office",
              value: "1850 North Halsted Street, Chicago, IL",
            },
            {
              id: "hours",
              kind: "hours",
              label: "Hours",
              value: "Mon-Sat 7:00 AM - 7:00 PM, emergency phone coverage 24/7",
            },
            {
              id: "whatsapp",
              kind: "whatsapp",
              label: "WhatsApp",
              value: "Message our dispatch team",
              href: "https://wa.me/13125550198",
            },
          ],
          form: {
            fields: [
              { id: "name", label: "Full name", type: "text", required: true, placeholder: "Your name" },
              { id: "email", label: "Email address", type: "email", required: true, placeholder: "you@example.com" },
              { id: "phone", label: "Phone number", type: "tel", required: true, placeholder: "+1 (312) 555-0198" },
              {
                id: "service",
                label: "Service needed",
                type: "select",
                required: true,
                placeholder: "Choose a service",
                options: [
                  { value: "emergency", label: "Emergency repair" },
                  { value: "upgrade", label: "Upgrade or installation" },
                  { value: "maintenance", label: "Maintenance plan" },
                  { value: "commercial", label: "Commercial support" },
                ],
              },
              { id: "postcode", label: "Postcode", type: "text", placeholder: "ZIP / postcode" },
              {
                id: "details",
                label: "Job details",
                type: "textarea",
                required: true,
                placeholder: "Tell us what is happening, when you need help, and any property access notes.",
              },
            ],
            submitLabel: "Request booking",
            consentNote: "By sending this form you agree that we can contact you about your request and scheduling.",
          },
          map: {
            alt: "Serving Chicago neighborhoods and nearby suburbs.",
          },
        },
        {
          id: "cta",
          kind: "cta",
          variant: "cta-local-business-trust-2",
          header: { title: "Need a technician today?" },
          body:
            "Call our dispatch line now for urgent help, or open the booking form if you want a scheduled estimate window.",
          primaryAction: { label: "Call dispatch", href: HERO_PHONE },
        },
      ],
    },
    services: {
      id: "services",
      title: "Services",
      sections: [
        {
          id: "hero",
          kind: "hero",
          variant: "hero-local-business-trust-premium-split",
          kicker: "Service menu",
          title: "Repair, replacement, and maintenance offers designed around response quality.",
          lede:
            "Use this page to sell the core revenue lines: urgent response, planned upgrades, and maintenance programs that create repeat work.",
          primaryAction: { label: "Request pricing", href: ROUTES.contact },
          secondaryAction: { label: "Call dispatch", href: HERO_PHONE },
          media: {
            src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
            alt: "Home-service specialist speaking with a client at a property.",
            position: "center",
          },
          trustChips: [
            { id: "arrivals", label: "Confirmed arrival windows" },
            { id: "quotes", label: "Clear onsite scopes" },
            { id: "support", label: "Follow-up support after closeout" },
          ],
        },
        {
          id: "service-lines",
          kind: "features",
          variant: "features-local-business-trust-media-cards",
          header: {
            kicker: "What we do",
            title: "Offers built for homeowners, landlords, and light commercial sites",
          },
          features: [
            {
              id: "drains",
              title: "Drain cleaning and line clearing",
              description: "Recurring blockages, slow drainage, and preventative clearing for family homes and rental units.",
              icon: "Reactive care",
              media: {
                src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
                alt: "Technician performing pipe and drain maintenance.",
              },
            },
            {
              id: "heaters",
              title: "Water-heater service and replacement",
              description: "Maintenance, diagnostics, and replacement planning for tanks, combi systems, and booster setups.",
              icon: "Plant room",
              media: {
                src: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&w=1200&q=80",
                alt: "Technician servicing a utility installation.",
              },
            },
            {
              id: "kitchen-bath",
              title: "Kitchen and bath plumbing upgrades",
              description: "Premium finish replacements that improve function, appearance, and sale-readiness.",
              icon: "Upgrade",
              media: {
                src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
                alt: "Bathroom and kitchen upgrade work in progress.",
              },
            },
            {
              id: "property-care",
              title: "Property manager maintenance support",
              description: "Scheduled inspections and recurring care for common issues across small portfolios and mixed-use buildings.",
              icon: "Managed care",
              media: {
                src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
                alt: "Service technician conducting maintenance checks at a property.",
              },
            },
          ],
        },
        {
          id: "service-process",
          kind: "features",
          variant: "features-local-business-trust-2",
          header: {
            kicker: "What to expect",
            title: "A consistent service standard on every booked job",
          },
          features: [
            {
              id: "confirm",
              title: "Booking confirmation",
              description: "We confirm the job type, access notes, and the likely technician profile before the visit is scheduled.",
            },
            {
              id: "prep",
              title: "Prepared arrival",
              description: "Technicians travel with the most likely parts and diagnostic tools to reduce repeat visits.",
            },
            {
              id: "scope",
              title: "Scope before spend",
              description: "For larger works, you receive options and a recommended route before materials are committed.",
            },
            {
              id: "reporting",
              title: "Closeout reporting",
              description: "Every completed visit ends with notes, recommendations, and the right next step if follow-up work is needed.",
            },
          ],
        },
        {
          id: "service-pricing",
          kind: "pricing",
          variant: "pricing-local-business-trust-plan-cards",
          header: {
            kicker: "Packages",
            title: "Choose a plan that matches how often you need support",
          },
          billingToggle: {
            monthlyLabel: "Monthly",
            yearlyLabel: "Yearly",
            defaultCadence: "monthly",
          },
          tiers: [
            {
              id: "repairing-plan",
              name: "Repairing Plan",
              price: { monthly: "$29", yearly: "$299", suffix: "per plan" },
              description: "Priority access for everyday repairs.",
              features: [
                "Priority weekday scheduling",
                "Diagnostic credit",
                "Digital closeout notes",
              ],
              cta: { label: "Talk to us", href: ROUTES.contact },
            },
            {
              id: "emergency-plan",
              name: "Emergency Plan",
              price: { monthly: "$59", yearly: "$599", suffix: "per plan" },
              description: "Faster routing and preventative support for busy properties.",
              features: [
                "24/7 dispatch access",
                "Two maintenance visits yearly",
                "Preferred labor rate",
              ],
              badge: "Most popular",
              highlight: true,
              cta: { label: "Talk to us", href: ROUTES.contact },
            },
            {
              id: "replacement-plan",
              name: "Replacement Plan",
              price: { monthly: "$89", yearly: "$899", suffix: "per plan" },
              description: "For owners planning upgrades and replacement works.",
              features: [
                "Dedicated estimator",
                "Preferred install scheduling",
                "Annual upgrade review",
              ],
              cta: { label: "Talk to us", href: ROUTES.contact },
            },
          ],
          footnote: "Project pricing remains quoted separately when scope, materials, and access complexity require it.",
        },
        {
          id: "services-faq",
          kind: "faq",
          variant: "faq-local-business-trust-1",
          header: {
            kicker: "Service FAQ",
            title: "Planning work, urgent callouts, and maintenance membership questions",
          },
          items: [
            {
              id: "service-area",
              q: "Do you cover both homes and small commercial properties?",
              a: "Yes. The preset is tuned to local-business service pages, so the content supports residential work as well as selected light-commercial scopes.",
            },
            {
              id: "materials",
              q: "Can you source materials for install work?",
              a: "Yes. We can price labor-only or supply-and-install packages depending on your brief and preferred product range.",
            },
            {
              id: "membership",
              q: "Are the maintenance plans mandatory before booking?",
              a: "No. Plans are optional. One-off bookings remain available for urgent repairs and planned project quotes.",
            },
          ],
        },
        {
          id: "services-cta",
          kind: "cta",
          variant: "cta-local-business-trust-2",
          header: { title: "Need pricing for a job this week?" },
          body: "Send the scope through the contact page and we will line up the right estimator or dispatch team.",
          primaryAction: { label: "Start booking", href: ROUTES.contact },
        },
      ],
    },
    projects: {
      id: "projects",
      title: "Projects",
      sections: [
        {
          id: "hero",
          kind: "hero",
          variant: "hero-local-business-trust-premium-split",
          kicker: "Recent projects",
          title: "Proof that the same trust-first system works across repairs, upgrades, and recurring maintenance.",
          lede:
            "Use the project route to show variety: residential fixes, premium upgrades, and commercial maintenance scopes that reinforce buying confidence.",
          primaryAction: { label: "Request similar work", href: ROUTES.contact },
          secondaryAction: { label: "Call dispatch", href: HERO_PHONE },
          media: {
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
            alt: "Trade professional reviewing a project site.",
          },
          trustChips: [
            { id: "portfolio", label: "Residential and light commercial" },
            { id: "documented", label: "Documented closeout notes" },
            { id: "tidy", label: "Clean, photo-ready finishes" },
          ],
        },
        {
          id: "project-stats",
          kind: "stats-band",
          variant: "stats-band-local-business-trust-1",
          header: { title: "A broad enough body of work to feel dependable" },
          stats: [
            { id: "repairs", value: "420+", label: "Urgent repair scopes" },
            { id: "upgrades", value: "180+", label: "Upgrade and replacement jobs" },
            { id: "commercial", value: "60+", label: "Commercial support sites" },
            { id: "repeat", value: "78%", label: "Repeat and referral work" },
          ],
        },
        {
          id: "project-gallery",
          kind: "case-studies",
          variant: "case-studies-local-business-trust-gallery",
          header: {
            kicker: "Selected work",
            title: "A gallery route that feels significantly more premium than the baseline DS examples",
          },
          items: [
            {
              id: "project-1",
              title: "Leak response and remedial repair for a duplex conversion",
              excerpt: "Urgent first visit, documented remedials, and a tidy handover that let the owner reopen rooms quickly.",
              href: ROUTES.contact,
              tags: ["Urgent", "Residential"],
              media: {
                src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
                alt: "Technician carrying out plumbing repair work.",
              },
            },
            {
              id: "project-2",
              title: "Kitchen utility upgrade with faster resale positioning",
              excerpt: "A fixture-led refresh packaged to improve durability and listing appeal without a full renovation budget.",
              href: ROUTES.contact,
              tags: ["Upgrade", "Value add"],
              media: {
                src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
                alt: "Kitchen upgrade project with trade work underway.",
              },
            },
            {
              id: "project-3",
              title: "Retail maintenance package with documented monthly checks",
              excerpt: "Recurring visits standardized so site managers could approve follow-up works faster.",
              href: ROUTES.contact,
              tags: ["Commercial", "Recurring"],
              media: {
                src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
                alt: "Maintenance professional checking a retail property system.",
              },
            },
          ],
        },
        {
          id: "project-testimonials",
          kind: "testimonials",
          variant: "testimonials-local-business-trust-1",
          header: { kicker: "Client feedback", title: "Why property owners keep sending referrals" },
          items: [
            {
              id: "owner-1",
              quote: "The reporting made it easy to show my tenants exactly what had been fixed and what to budget for next.",
              name: "James H.",
              meta: "Landlord client",
            },
            {
              id: "owner-2",
              quote: "Northline gave us upgrade options instead of pushing the most expensive route. That earned my trust immediately.",
              name: "Nadia S.",
              meta: "Homeowner",
            },
            {
              id: "owner-3",
              quote: "The commercial maintenance package feels closer to a real facility partner than a one-off contractor relationship.",
              name: "Brian T.",
              meta: "Retail operator",
            },
          ],
        },
        {
          id: "projects-cta",
          kind: "cta",
          variant: "cta-local-business-trust-1",
          header: { title: "Planning a similar scope?" },
          body: "Use the contact page to send the brief, photos, or timing notes and we will build the right response plan.",
          primaryAction: { label: "Request a quote", href: ROUTES.contact },
          secondaryAction: { label: "Read advice", href: ROUTES.blog },
        },
      ],
    },
    blog: {
      id: "blog",
      title: "Blog",
      sections: [
        {
          id: "hero",
          kind: "hero",
          variant: "hero-local-business-trust-premium-split",
          kicker: "Advice and insights",
          title: "Service-business content that supports SEO without feeling like filler.",
          lede:
            "The blog route stays coherent with the homepage: practical maintenance advice, buying guides, and emergency preparedness content.",
          primaryAction: { label: "Book a technician", href: ROUTES.contact },
          secondaryAction: { label: "Call dispatch", href: HERO_PHONE },
          media: {
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
            alt: "Service professional preparing notes on a site visit.",
          },
          trustChips: [
            { id: "practical", label: "Practical maintenance advice" },
            { id: "local", label: "Written for local homeowners" },
            { id: "seo", label: "Search-friendly service content" },
          ],
        },
        {
          id: "posts",
          kind: "blogList",
          variant: "bloglist-local-business-trust-1",
          header: {
            kicker: "Latest articles",
            title: "Topics that help visitors trust the team before they call",
          },
          posts: [
            {
              id: "blog-1",
              title: "What to do before a plumber arrives for an emergency visit",
              excerpt: "A practical prep checklist that reduces delay when water needs isolating quickly.",
              href: ROUTES.blog,
            },
            {
              id: "blog-2",
              title: "When a maintenance plan saves more than one-off callouts",
              excerpt: "How repeat checks reduce avoidable failures in busy homes and rental units.",
              href: ROUTES.blog,
            },
            {
              id: "blog-3",
              title: "Upgrade now or repair again later? A smarter way to decide",
              excerpt: "Use lifespan, disruption, and resale timing to choose the right route.",
              href: ROUTES.blog,
            },
            {
              id: "blog-4",
              title: "Questions to ask before approving a bathroom or kitchen fixture package",
              excerpt: "The detail owners often miss when they compare install quotes and finish options.",
              href: ROUTES.blog,
            },
          ],
        },
        {
          id: "blog-faq",
          kind: "faq",
          variant: "faq-local-business-trust-1",
          header: {
            kicker: "Content FAQ",
            title: "Common homeowner questions we turn into blog topics",
          },
          items: [
            {
              id: "faq-1",
              q: "Will the blog stay relevant if we later connect a CMS?",
              a: "Yes. The preset content is reusable starter material, and the route can later be wired to a CMS without changing the DS core.",
            },
            {
              id: "faq-2",
              q: "Can we use blog content to support quote conversion?",
              a: "Yes. Maintenance explainers, comparison guides, and emergency checklists are useful trust builders for service businesses.",
            },
          ],
        },
        {
          id: "blog-cta",
          kind: "cta",
          variant: "cta-local-business-trust-2",
          header: { title: "Need help instead of more reading?" },
          body: "Talk to the booking desk and we will tell you the fastest next step for your property.",
          primaryAction: { label: "Contact Northline", href: ROUTES.contact },
        },
      ],
    },
    contact: {
      id: "contact",
      title: "Contact",
      sections: [
        {
          id: "hero",
          kind: "hero",
          variant: "hero-local-business-trust-premium-split",
          kicker: "Contact and booking",
          title: "Book a technician, request a quote, or ask which plan fits your property.",
          lede:
            "The contact route stays aligned with the homepage conversion language: fast channels, clear booking form, and plan options that are easy to understand.",
          primaryAction: { label: "Call now", href: HERO_PHONE },
          secondaryAction: { label: "View services", href: ROUTES.services },
          media: {
            src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
            alt: "Tradesperson ready to take service calls.",
          },
          trustChips: [
            { id: "channels", label: "Phone, WhatsApp, and form booking" },
            { id: "quotes", label: "Clear estimate follow-up" },
            { id: "support", label: "Emergency coverage 24/7" },
          ],
        },
        {
          id: "contact-split",
          kind: "contact",
          variant: "contact-local-business-trust-split",
          header: {
            kicker: "Get in touch",
            title: "Share the job details and we will confirm the right next step",
          },
          channels: [
            { id: "contact-phone", kind: "phone", label: "Dispatch", value: "+1 (312) 555-0198", href: HERO_PHONE },
            {
              id: "contact-email",
              kind: "email",
              label: "Email",
              value: "hello@northlinehomeservices.com",
              href: "mailto:hello@northlinehomeservices.com",
            },
            {
              id: "contact-hours",
              kind: "hours",
              label: "Hours",
              value: "Mon-Sat 7:00 AM - 7:00 PM, emergency support after hours",
            },
            {
              id: "contact-address",
              kind: "address",
              label: "Office",
              value: "1850 North Halsted Street, Chicago, IL",
            },
          ],
          form: {
            fields: [
              { id: "contact-name", label: "Name", type: "text", required: true, placeholder: "Your name" },
              { id: "contact-email-field", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
              { id: "contact-phone-field", label: "Phone", type: "tel", required: true, placeholder: "+1 (312) 555-0198" },
              {
                id: "contact-service",
                label: "Service type",
                type: "select",
                required: true,
                placeholder: "Select service",
                options: [
                  { value: "repair", label: "Repair" },
                  { value: "upgrade", label: "Upgrade or install" },
                  { value: "plan", label: "Maintenance plan" },
                ],
              },
              {
                id: "contact-details-field",
                label: "Tell us about the job",
                type: "textarea",
                required: true,
                placeholder: "Share the issue, property type, urgency, and any access notes.",
              },
            ],
            submitLabel: "Send request",
            consentNote: "We use these details only to respond to your request and arrange service.",
          },
          map: {
            alt: "Serving Chicago and nearby suburbs.",
          },
        },
        {
          id: "contact-pricing",
          kind: "pricing",
          variant: "pricing-local-business-trust-plan-cards",
          header: {
            kicker: "Plans and estimates",
            title: "Choose a plan now or ask for a project-specific quote",
          },
          billingToggle: {
            monthlyLabel: "Monthly",
            yearlyLabel: "Yearly",
            defaultCadence: "monthly",
          },
          tiers: [
            {
              id: "contact-repairing",
              name: "Repairing Plan",
              price: { monthly: "$29", yearly: "$299", suffix: "per plan" },
              features: ["Priority weekday scheduling", "Diagnostic credit", "Digital closeout notes"],
              cta: { label: "Ask about this plan", href: ROUTES.contact },
            },
            {
              id: "contact-emergency",
              name: "Emergency Plan",
              price: { monthly: "$59", yearly: "$599", suffix: "per plan" },
              badge: "Best seller",
              highlight: true,
              features: ["24/7 dispatch access", "Two maintenance visits yearly", "Preferred labor rate"],
              cta: { label: "Ask about this plan", href: ROUTES.contact },
            },
            {
              id: "contact-replacement",
              name: "Replacement Plan",
              price: { monthly: "$89", yearly: "$899", suffix: "per plan" },
              features: ["Dedicated estimator", "Preferred install scheduling", "Annual upgrade review"],
              cta: { label: "Ask about this plan", href: ROUTES.contact },
            },
          ],
        },
        {
          id: "contact-faq",
          kind: "faq",
          variant: "faq-local-business-trust-1",
          header: { kicker: "Before you send", title: "Contact questions answered quickly" },
          items: [
            {
              id: "contact-coverage",
              q: "Do I need to know the exact problem before contacting you?",
              a: "No. A short description, your property type, and whether the issue is urgent is enough for the first response.",
            },
            {
              id: "contact-photos",
              q: "Can I send photos before the visit?",
              a: "Yes. Photos help us prepare likely materials and advise whether the job needs an estimator or a direct technician visit.",
            },
          ],
        },
        {
          id: "contact-cta",
          kind: "cta",
          variant: "cta-local-business-trust-2",
          header: { title: "Prefer to talk through it right now?" },
          body: "Call the dispatch line and we will tell you the fastest practical route for your property.",
          primaryAction: { label: "Call +1 (312) 555-0198", href: HERO_PHONE },
        },
      ],
    },
  },
};