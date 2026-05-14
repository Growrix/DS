import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_BOLD_CONSUMER_PRICING_META: WireframeMeta = {
  id: "page-bold-consumer-pricing",
  archetype: "bold-consumer",
  purpose: "pricing",
  shell: "public",
  label: "Page — Bold Consumer Pricing",
  description: "Hero split spotlight → bold single-tier pricing → bold accordion FAQ → bold large quote → bold banner CTA.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-bold-consumer-2" },
      { kind: "pricing", variantId: "pricing-bold-consumer-1" },
      { kind: "faq", variantId: "faq-bold-consumer-1" },
      { kind: "testimonials", variantId: "testimonials-bold-consumer-1" },
      { kind: "cta", variantId: "cta-bold-consumer-2" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageBoldConsumerPricingDemoPage(): PublicPageModel {
  return {
    id: "demo-page-bold-consumer-pricing",
    title: "Page — Bold Consumer Pricing",
    archetype: "bold-consumer",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-bold-consumer-2",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "pricing",
        kind: "pricing",
        variant: "pricing-bold-consumer-1",
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
        variant: "faq-bold-consumer-1",
        header: { kicker: "Questions", title: "Common questions." },
        items: [
          { id: "q1", q: "How does pricing scale?", a: "Per seat, no minimums." },
          { id: "q2", q: "Can I bring my own data?", a: "Yes — import via API or CSV." },
          { id: "q3", q: "Is there an SLA?", a: "99.99% uptime on paid tiers." },
          { id: "q4", q: "Where is data stored?", a: "Region of your choice; encrypted at rest." },
        ],
      },
      {
        id: "quote",
        kind: "testimonials",
        variant: "testimonials-bold-consumer-1",
        header: { kicker: "Customers", title: "What teams say." },
        items: [
          { id: "t1", quote: "Cut our onboarding time in half within a quarter.", name: "Priya Bhattacharjee", meta: "Staff Engineer, Coastline" },
          { id: "t2", quote: "Audit, SSO, and rollbacks worked on day one.", name: "Mark Andersson", meta: "Head of Platform, Atlas Co." },
          { id: "t3", quote: "The docs match the product. That's all I want.", name: "Diego Salgado", meta: "Founding Engineer, Forge" },
        ],
      },
      {
        id: "cta",
        kind: "cta",
        variant: "cta-bold-consumer-2",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
