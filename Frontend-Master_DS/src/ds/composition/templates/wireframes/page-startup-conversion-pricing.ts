import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_STARTUP_CONVERSION_PRICING_META: WireframeMeta = {
  id: "page-startup-conversion-pricing",
  archetype: "startup-conversion",
  purpose: "pricing",
  shell: "public",
  label: "Page — Startup Conversion Pricing",
  description: "Hero split with media → startup single-tier pricing → startup accordion FAQ → startup centred card CTA.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-startup-conversion-2" },
      { kind: "pricing", variantId: "pricing-startup-conversion-1" },
      { kind: "faq", variantId: "faq-startup-conversion-1" },
      { kind: "cta", variantId: "cta-startup-conversion-1" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageStartupConversionPricingDemoPage(): PublicPageModel {
  return {
    id: "demo-page-startup-conversion-pricing",
    title: "Page — Startup Conversion Pricing",
    archetype: "startup-conversion",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-startup-conversion-2",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
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
        variant: "cta-startup-conversion-1",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
