import { ROUTES } from "@/app/route-map";
import { type PublicPageModel, type PublicSitePreset } from "@/ds";

import { PREMIUM_HOME_SERVICES_PRESET } from "./premiumHomeServices";

const HERO_PHONE = "tel:+13125550198";
const LOCAL_MEDIA_ROOT = "/media/premium-home-services-signature";
const FOOTER_COLUMNS = PREMIUM_HOME_SERVICES_PRESET.config.footer?.columns ?? [];
const SOCIALS = PREMIUM_HOME_SERVICES_PRESET.config.socials ?? [];

const HOME_SIGNATURE_SECTIONS: PublicPageModel["sections"] = [
  {
    id: "hero",
    kind: "hero",
    variant: "hero-local-business-trust-premium-split",
    kicker: "Premium Local Response",
    title: "Service-first repair and upgrade crews that make a local business feel premium from the first call.",
    lede:
      "Northline combines licensed technicians, documented scopes, and clean closeout standards so homeowners and small-property teams get clarity before, during, and after the job.",
    primaryAction: { label: "Book an estimate", href: ROUTES.contact },
    secondaryAction: { label: "Call dispatch", href: HERO_PHONE },
    media: {
      src: `${LOCAL_MEDIA_ROOT}/hero-technician.jpg`,
      alt: "Home-service technician reviewing a service plan before entering a property.",
      position: "68% center",
    },
    trustChips: [
      { id: "windows", label: "Confirmed arrival windows, not vague callbacks" },
      { id: "insured", label: "Licensed, insured, and background-checked crews" },
      { id: "closeout", label: "Photo closeout notes after every completed visit" },
    ],
  },
  {
    id: "stats",
    kind: "stats-band",
    variant: "stats-band-local-business-trust-1",
    header: { title: "Built around operational trust, not contractor guesswork" },
    stats: [
      { id: "jobs", value: "1,120+", label: "Completed service visits last year" },
      { id: "repeat", value: "68%", label: "Repeat and referral-led bookings" },
      { id: "plans", value: "470+", label: "Active maintenance-plan households" },
      { id: "coverage", value: "24/7", label: "Emergency call triage coverage" },
    ],
  },
  {
    id: "proof-strip",
    kind: "logo-cloud",
    variant: "logo-cloud-local-business-trust-1",
    header: {
      kicker: "Trust markers",
      title: "Signals that matter before a homeowner even scrolls past the fold",
    },
    logos: [
      { id: "licensed", label: "Licensed & insured" },
      { id: "background", label: "Background-checked crews" },
      { id: "reviewed", label: "4.9 average review score" },
      { id: "warranty", label: "Warranty-backed workmanship" },
      { id: "dispatch", label: "Dedicated dispatch desk" },
    ],
  },
  {
    id: "services-grid",
    kind: "features",
    variant: "features-local-business-trust-media-cards",
    header: {
      kicker: "Core services",
      title: "Offer packages that look polished, practical, and ready to buy",
      lede:
        "The homepage moves away from a generic contractor grid and toward clearer, more premium service packaging: response speed, work type, and ownership outcome.",
    },
    features: [
      {
        id: "emergency-plumbing",
        title: "Urgent repairs and same-day diagnostics",
        description:
          "Leak isolation, blocked drains, pipe repairs, and fast triage for residential calls that cannot wait until tomorrow.",
        icon: "Rapid response",
        media: {
          src: `${LOCAL_MEDIA_ROOT}/service-emergency.jpg`,
          alt: "Technician handling an urgent plumbing repair under a kitchen sink.",
        },
      },
      {
        id: "fixture-upgrades",
        title: "Bathroom and fixture upgrades",
        description:
          "Planned installs for taps, vanities, showers, and finish-level upgrades that lift resale quality without a full remodel.",
        icon: "Upgrade work",
        media: {
          src: `${LOCAL_MEDIA_ROOT}/service-upgrade.jpg`,
          alt: "Installer fitting premium bathroom fixtures during an upgrade.",
        },
      },
      {
        id: "maintenance-plans",
        title: "Maintenance memberships",
        description:
          "Recurring inspections, water-heater servicing, drain checks, and preferred scheduling for owners who want fewer surprises.",
        icon: "Recurring care",
        media: {
          src: `${LOCAL_MEDIA_ROOT}/service-maintenance.jpg`,
          alt: "Home-service professional arriving with maintenance tools for a scheduled visit.",
        },
      },
      {
        id: "commercial-support",
        title: "Light commercial support",
        description:
          "Retail, hospitality, and office maintenance scopes with tighter reporting and after-hours scheduling where needed.",
        icon: "Commercial",
        media: {
          src: `${LOCAL_MEDIA_ROOT}/service-commercial.jpg`,
          alt: "Technician servicing equipment for a small commercial property.",
        },
      },
    ],
  },
  {
    id: "process",
    kind: "process-steps",
    variant: "process-steps-vertical",
    header: {
      kicker: "How the experience works",
      title: "A cleaner journey from dispatch to documented closeout",
      lede:
        "The new premium pack leans into operational polish: realistic scheduling, visible approvals, and a finish standard that feels deliberate.",
    },
    steps: [
      {
        id: "triage",
        number: "01",
        title: "Triage the job before dispatch",
        description:
          "We confirm urgency, access constraints, and probable materials before the first technician is routed.",
      },
      {
        id: "scope",
        number: "02",
        title: "Approve a clean scope",
        description:
          "Planned works get a documented scope and options breakdown before any installation or replacement starts.",
      },
      {
        id: "execute",
        number: "03",
        title: "Protect the home while the work happens",
        description:
          "Crews communicate progress, protect finishes, and flag any risk to timing or budget immediately.",
      },
      {
        id: "closeout",
        number: "04",
        title: "Close out with notes and next-step guidance",
        description:
          "You receive care guidance, warranty context, and a straightforward route back to support if anything changes.",
      },
    ],
  },
  {
    id: "projects-gallery",
    kind: "case-studies",
    variant: "case-studies-local-business-trust-gallery",
    header: {
      kicker: "Recent projects",
      title: "Project proof that feels more editorial and less like a generic contractor feed",
      lede:
        "We trimmed the gallery to the strongest jobs and made the rhythm more intentional so the proof section lands with more weight.",
    },
    items: [
      {
        id: "repipe",
        title: "Whole-home repipe with phased handover",
        excerpt:
          "A staged repipe delivered without displacing the household, including final closeout notes and warranty guidance.",
        href: ROUTES.projects,
        tags: ["Residential", "3-day window"],
        media: {
          src: `${LOCAL_MEDIA_ROOT}/project-repipe.jpg`,
          alt: "Technician replacing piping in a residential property during a staged repipe.",
        },
      },
      {
        id: "retail-fix",
        title: "Overnight retail back-of-house repair",
        excerpt:
          "Leak isolation, replacement, and reopen support completed before doors opened the next day.",
        href: ROUTES.projects,
        tags: ["Commercial", "After hours"],
        media: {
          src: `${LOCAL_MEDIA_ROOT}/project-retail.jpg`,
          alt: "Property maintenance technician working in a small commercial environment after hours.",
        },
      },
      {
        id: "bathroom-refresh",
        title: "Fixture-led bathroom refresh for resale prep",
        excerpt:
          "A value-engineered refresh that lifted the finish level while keeping the brief practical for the seller.",
        href: ROUTES.projects,
        tags: ["Upgrade", "Resale ready"],
        media: {
          src: `${LOCAL_MEDIA_ROOT}/project-bathroom.jpg`,
          alt: "Tradesperson completing a premium fixture upgrade in a refreshed bathroom.",
        },
      },
      {
        id: "water-heater",
        title: "Emergency water-heater replacement in one visit",
        excerpt:
          "Supply, swap, testing, and disposal handled inside a single booked response window.",
        href: ROUTES.projects,
        tags: ["Emergency", "One visit"],
        media: {
          src: `${LOCAL_MEDIA_ROOT}/project-water-heater.jpg`,
          alt: "Technician testing a newly installed water heater after replacement.",
        },
      },
    ],
  },
  {
    id: "pricing",
    kind: "pricing",
    variant: "pricing-local-business-trust-conversion-grid",
    header: {
      kicker: "Maintenance plans",
      title: "Packages that feel transparent enough to sell directly from the homepage",
      lede:
        "Instead of a generic three-card table, the premium grid adds a stronger trust lead-in and clearer price framing for homeowners comparing options.",
    },
    tiers: [
      {
        id: "repairing",
        name: "Repairing Plan",
        price: { monthly: "$29", yearly: "$299", suffix: "per property / month" },
        description: "For one-off fixes, priority business-hour scheduling, and documented repair closeout.",
        features: [
          "Priority standard callout scheduling",
          "Diagnostic fee credited toward approved work",
          "Photo and notes after every visit",
          "Member pricing on common repair parts",
        ],
        cta: { label: "Choose Repairing", href: ROUTES.contact },
      },
      {
        id: "emergency",
        name: "Emergency Plan",
        price: { monthly: "$59", yearly: "$599", suffix: "per property / month" },
        description: "Built for busy households and light-commercial sites that need faster access when something breaks.",
        features: [
          "24/7 emergency dispatch access",
          "Two preventative maintenance visits each year",
          "Preferred labor rate on urgent repairs",
          "Annual system-condition summary",
        ],
        badge: "Most popular",
        highlight: true,
        cta: { label: "Choose Emergency", href: ROUTES.contact },
      },
      {
        id: "replacement",
        name: "Replacement Plan",
        price: { monthly: "$89", yearly: "$899", suffix: "per property / month" },
        description: "For owners planning upgrades, replacements, and annual capital-refresh work across the property.",
        features: [
          "Dedicated estimator for upgrade scopes",
          "Preferred installation scheduling",
          "Annual replacement-planning review",
          "Priority access to seasonal promos",
        ],
        cta: { label: "Choose Replacement", href: ROUTES.contact },
      },
    ],
    footnote:
      "Custom quotes remain available for remodels, water-heater swaps, and commercial scopes that sit outside the packaged maintenance plans.",
  },
  {
    id: "testimonials",
    kind: "testimonials",
    variant: "testimonials-local-business-trust-editorial-stack",
    header: {
      kicker: "Client feedback",
      title: "Reviews that reinforce the premium local-service posture",
      lede:
        "The strongest comments mention the same things the design is trying to signal: clear arrival windows, cleaner communication, and a finish standard that feels expensive.",
    },
    items: [
      {
        id: "tracy",
        quote:
          "The team gave us a real arrival window, protected the floors, and explained each repair option before anyone touched the work.",
        name: "Tracy M.",
        meta: "Emergency pipe repair",
      },
      {
        id: "owen",
        quote:
          "We signed up for the maintenance plan after the first visit because the reporting and follow-up felt far more organized than other contractors.",
        name: "Owen L.",
        meta: "Annual maintenance client",
      },
      {
        id: "camila",
        quote:
          "Northline handled our fixture upgrade on schedule and the final finish looked far more expensive than the budget suggested.",
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
      title: "Practical answers before a homeowner books",
      lede:
        "The homepage close stays conversion-ready by answering timing, scope, and coverage questions before the contact form appears.",
    },
    items: [
      {
        id: "arrival-window",
        q: "How fast can you get here for an urgent issue?",
        a: "Urgent calls are triaged by postcode, severity, and crew load. Same-day windows are common across our core service area, and emergency-plan members receive priority routing.",
      },
      {
        id: "quotes",
        q: "Do you provide quotes before larger repairs or upgrade work?",
        a: "Yes. Planned works receive a documented scope and options breakdown before the crew starts. Smaller reactive fixes are confirmed after onsite diagnosis.",
      },
      {
        id: "insured",
        q: "Are your technicians licensed and insured?",
        a: "Every dispatched technician works under the licensing and insurance requirements needed for the trade scope being delivered.",
      },
      {
        id: "coverage",
        q: "Which areas do you cover?",
        a: "We focus on Chicago neighborhoods and nearby inner-ring suburbs so the response quality stays high. Use the booking form and we will confirm coverage straight away.",
      },
    ],
  },
  {
    id: "insights",
    kind: "blogList",
    variant: "bloglist-local-business-trust-1",
    header: {
      kicker: "Advice and maintenance",
      title: "Useful guidance that supports trust instead of filling space",
    },
    posts: [
      {
        id: "winter-checklist",
        title: "Winter plumbing checklist for Chicago homeowners",
        excerpt: "How to protect vulnerable fixtures, pipes, and water heaters before a cold snap becomes an emergency callout.",
        href: ROUTES.blog,
      },
      {
        id: "upgrade-budget",
        title: "When to repair a fixture and when to upgrade it instead",
        excerpt: "A cleaner way to explain the repair-versus-replacement decision homeowners ask about most often.",
        href: ROUTES.blog,
      },
      {
        id: "maintenance-plan",
        title: "What a maintenance plan should actually include",
        excerpt: "The difference between recurring value and vague contractor memberships that only sound good on paper.",
        href: ROUTES.blog,
      },
    ],
  },
  {
    id: "contact-surface",
    kind: "contact",
    variant: "contact-local-business-trust-concierge",
    header: {
      kicker: "Book your visit",
      title: "Tell us what needs fixing and we will line up the right crew",
      lede:
        "The booking surface is designed to feel more like a concierge handoff than a generic contact block.",
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
      consentNote:
        "By sending this form you agree that we can contact you about your request and scheduling.",
    },
    map: {
      alt: "Serving Chicago neighborhoods and nearby inner-ring suburbs.",
    },
  },
  {
    id: "footer-content",
    kind: "footer-content",
    variant: "footer-content-local-business-trust-premium",
    brand: {
      name: "Northline Home Services",
      tagline: "Premium repair, upgrade, and maintenance crews for Chicago homes and small properties",
    },
    columns: FOOTER_COLUMNS,
    newsletter: {
      title: "Get seasonal maintenance reminders and homeowner checklists.",
      description:
        "Keep the relationship warm between jobs with practical reminders, planning prompts, and service tips that actually help.",
      placeholder: "Email address",
      submitLabel: "Get reminders",
      consentNote: "No spam. Just maintenance reminders, planning notes, and occasional service updates.",
    },
    socials: SOCIALS.map((social) => ({
      id: social.id,
      label: social.label,
      href: social.href,
    })),
    legalLinks: [
      { id: "privacy", label: "Privacy policy", href: "https://example.com/privacy" },
      { id: "terms", label: "Terms of service", href: "https://example.com/terms" },
    ],
    attribution: PREMIUM_HOME_SERVICES_PRESET.config.footer?.attribution,
  },
];

export const PREMIUM_HOME_SERVICES_SIGNATURE_PRESET: PublicSitePreset = {
  ...PREMIUM_HOME_SERVICES_PRESET,
  id: "premium-home-services-signature",
  label: "Premium Home Services Signature",
  config: {
    ...PREMIUM_HOME_SERVICES_PRESET.config,
    brand: {
      ...PREMIUM_HOME_SERVICES_PRESET.config.brand,
      tagline: "Premium repair, upgrade, and maintenance crews for Chicago homes and small properties",
    },
    support: PREMIUM_HOME_SERVICES_PRESET.config.support
      ? PREMIUM_HOME_SERVICES_PRESET.config.support.chat
        ? {
            ...PREMIUM_HOME_SERVICES_PRESET.config.support,
            chat: {
              ...PREMIUM_HOME_SERVICES_PRESET.config.support.chat,
              description:
                "Ask about response times, maintenance-plan fit, or how we package upgrade work before you book.",
              placeholder: "Example: We need a water-heater replacement quote for Lakeview this week.",
            },
          }
        : PREMIUM_HOME_SERVICES_PRESET.config.support
      : undefined,
  },
  pages: {
    ...PREMIUM_HOME_SERVICES_PRESET.pages,
    home: {
      ...PREMIUM_HOME_SERVICES_PRESET.pages.home,
      sections: HOME_SIGNATURE_SECTIONS,
    },
  },
};