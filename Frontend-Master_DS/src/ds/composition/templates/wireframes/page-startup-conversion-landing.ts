import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_STARTUP_CONVERSION_LANDING_META: WireframeMeta = {
  id: "page-startup-conversion-landing",
  archetype: "startup-conversion",
  purpose: "landing",
  shell: "public",
  label: "Page — Startup Conversion Landing",
  description: "Hero centred conversion → startup logos → startup 3-col features → startup stats → startup 3-col testimonials → startup pricing → startup accordion FAQ → startup banner CTA.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-startup-conversion-1" },
      { kind: "logo-cloud", variantId: "logo-cloud-startup-conversion-1" },
      { kind: "features", variantId: "features-startup-conversion-1" },
      { kind: "stats-band", variantId: "stats-band-startup-conversion-1" },
      { kind: "testimonials", variantId: "testimonials-startup-conversion-1" },
      { kind: "pricing", variantId: "pricing-startup-conversion-1" },
      { kind: "faq", variantId: "faq-startup-conversion-1" },
      { kind: "cta", variantId: "cta-startup-conversion-2" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageStartupConversionLandingDemoPage(): PublicPageModel {
  return {
    id: "demo-page-startup-conversion-landing",
    title: "Page — Startup Conversion Landing",
    archetype: "startup-conversion",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-startup-conversion-1",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "logos",
        kind: "logo-cloud",
        variant: "logo-cloud-startup-conversion-1",
        header: { kicker: "Trusted by", title: "Teams that ship every day." },
        logos: [
          { id: "l1", label: "Northwind" },
          { id: "l2", label: "Atlas Co." },
          { id: "l3", label: "Helix" },
          { id: "l4", label: "Coastline" },
          { id: "l5", label: "Forge" },
          { id: "l6", label: "Vanta" },
        ],
      },
      {
        id: "features",
        kind: "features",
        variant: "features-startup-conversion-1",
        header: { kicker: "Capabilities", title: "Everything you need." },
        features: [
          { id: "f1", title: "Reliable", description: "Built on proven primitives." },
          { id: "f2", title: "Fast", description: "Sub-second response across the board." },
          { id: "f3", title: "Secure", description: "Audit log and SSO out of the box." },
          { id: "f4", title: "Open", description: "First-class APIs and exports." },
          { id: "f5", title: "Scalable", description: "Grows with your workload." },
          { id: "f6", title: "Calm", description: "Operators-first design throughout." },
        ],
      },
      {
        id: "stats",
        kind: "stats-band",
        variant: "stats-band-startup-conversion-1",
        header: { kicker: "Results", title: "What teams achieve." },
        stats: [
          { id: "s1", value: "99.99%", label: "Uptime", sublabel: "12-month rolling" },
          { id: "s2", value: "4.7×", label: "Faster deploys", sublabel: "vs. legacy CI" },
          { id: "s3", value: "62%", label: "Lower MTTR", sublabel: "Median across teams" },
          { id: "s4", value: "12 min", label: "Onboarding", sublabel: "From signup to first deploy" },
        ],
      },
      {
        id: "testimonials",
        kind: "testimonials",
        variant: "testimonials-startup-conversion-1",
        header: { kicker: "Customers", title: "What teams say." },
        items: [
          { id: "t1", quote: "Cut our onboarding time in half within a quarter.", name: "Priya Bhattacharjee", meta: "Staff Engineer, Coastline" },
          { id: "t2", quote: "Audit, SSO, and rollbacks worked on day one.", name: "Mark Andersson", meta: "Head of Platform, Atlas Co." },
          { id: "t3", quote: "The docs match the product. That's all I want.", name: "Diego Salgado", meta: "Founding Engineer, Forge" },
        ],
      },
      {
        id: "pricing",
        kind: "pricing",
        variant: "pricing-startup-conversion-1",
        header: { kicker: "Pricing", title: "Pay for what you ship." },
        tiers: [
          {
            id: "starter",
            name: "Starter",
            price: { monthly: "$0", suffix: "/seat / month" },
            description: "For weekend projects.",
            features: ["1 environment", "Community support", "Single region"],
            cta: { label: "Start free", href: "#" },
          },
          {
            id: "team",
            name: "Team",
            price: { monthly: "$29", suffix: "/seat / month" },
            description: "For shipping teams.",
            features: ["Unlimited environments", "SSO + SCIM", "Multi-region", "Priority support"],
            cta: { label: "Start trial", href: "#" },
            badge: "Most popular",
            highlight: true,
          },
          {
            id: "enterprise",
            name: "Enterprise",
            price: { monthly: "Custom", suffix: "" },
            description: "Compliance and custom regions.",
            features: ["Everything in Team", "Custom regions", "SLA 99.99%", "Dedicated CSM"],
            cta: { label: "Contact sales", href: "#" },
          },
        ],
        footnote: "All plans include unlimited deploys and rollbacks.",
      },
      {
        id: "faq",
        kind: "faq",
        variant: "faq-startup-conversion-1",
        header: { kicker: "Questions", title: "Common questions." },
        items: [
          { id: "q1", q: "How does pricing scale?", a: "Per seat, no minimums." },
          { id: "q2", q: "Can I bring my own data?", a: "Yes — import via API or CSV." },
          { id: "q3", q: "Is there an SLA?", a: "99.99% uptime on paid tiers." },
          { id: "q4", q: "Where is data stored?", a: "Region of your choice; encrypted at rest." },
        ],
      },
      {
        id: "cta",
        kind: "cta",
        variant: "cta-startup-conversion-2",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
