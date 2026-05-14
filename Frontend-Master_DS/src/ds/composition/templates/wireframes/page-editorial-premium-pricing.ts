import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_EDITORIAL_PREMIUM_PRICING_META: WireframeMeta = {
  id: "page-editorial-premium-pricing",
  archetype: "editorial-premium",
  purpose: "pricing",
  shell: "public",
  label: "Page — Editorial Premium Pricing",
  description: "Hero centred display → single-tier pricing → editorial 2-col FAQ → editorial centred CTA card → minimal footer.",
  density: "extended",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-editorial-premium-2" },
      { kind: "pricing", variantId: "pricing-editorial-premium-1" },
      { kind: "faq", variantId: "faq-editorial-premium-2" },
      { kind: "cta", variantId: "cta-editorial-premium-2" },
      { kind: "footer-content", variantId: "footer-content-editorial-premium-2" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageEditorialPremiumPricingDemoPage(): PublicPageModel {
  return {
    id: "demo-page-editorial-premium-pricing",
    title: "Page — Editorial Premium Pricing",
    archetype: "editorial-premium",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-editorial-premium-2",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "pricing",
        kind: "pricing",
        variant: "pricing-editorial-premium-1",
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
        variant: "faq-editorial-premium-2",
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
        variant: "cta-editorial-premium-2",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
      {
        id: "footer",
        kind: "footer-content",
        variant: "footer-content-editorial-premium-2",
        columns: [
          { id: "product", title: "Product", links: [{ id: "features", label: "Features", href: "#" }, { id: "pricing", label: "Pricing", href: "#" }] },
          { id: "company", title: "Company", links: [{ id: "about", label: "About", href: "#" }, { id: "contact", label: "Contact", href: "#" }] },
          { id: "legal", title: "Legal", links: [{ id: "privacy", label: "Privacy", href: "#" }, { id: "terms", label: "Terms", href: "#" }] },
        ],
        legalLinks: [{ id: "privacy", label: "Privacy", href: "#" }, { id: "terms", label: "Terms", href: "#" }],
      },
    ],
  };
}
