import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_AI_PRODUCT_LANDING_META: WireframeMeta = {
  id: "page-ai-product-landing",
  archetype: "ai-product",
  purpose: "landing",
  shell: "public",
  label: "Page — AI Product Landing",
  description: "Hero streaming → AI 3-col features → AI 4-col stats band → AI 3-col testimonials → AI single-tier pricing → AI accordion FAQ → AI banner CTA → AI columns footer.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-ai-product-streaming" },
      { kind: "features", variantId: "features-ai-product-1" },
      { kind: "stats-band", variantId: "stats-band-ai-product-1" },
      { kind: "testimonials", variantId: "testimonials-ai-product-2" },
      { kind: "pricing", variantId: "pricing-ai-product-1" },
      { kind: "faq", variantId: "faq-ai-product-1" },
      { kind: "cta", variantId: "cta-ai-product-2" },
      { kind: "footer-content", variantId: "footer-content-ai-product-1" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageAiProductLandingDemoPage(): PublicPageModel {
  return {
    id: "demo-page-ai-product-landing",
    title: "Page — AI Product Landing",
    archetype: "ai-product",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-ai-product-streaming",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "features",
        kind: "features",
        variant: "features-ai-product-1",
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
        variant: "stats-band-ai-product-1",
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
        variant: "testimonials-ai-product-2",
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
        variant: "pricing-ai-product-1",
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
        variant: "faq-ai-product-1",
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
        variant: "cta-ai-product-2",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
      {
        id: "footer",
        kind: "footer-content",
        variant: "footer-content-ai-product-1",
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
