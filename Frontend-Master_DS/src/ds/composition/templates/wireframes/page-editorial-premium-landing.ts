import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_EDITORIAL_PREMIUM_LANDING_META: WireframeMeta = {
  id: "page-editorial-premium-landing",
  archetype: "editorial-premium",
  purpose: "landing",
  shell: "public",
  label: "Page — Editorial Premium Landing",
  description: "Hero centred display → split alternating features → editorial large quote → blog stack → CTA card → editorial columns footer.",
  density: "extended",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-editorial-premium-2" },
      { kind: "features", variantId: "features-split-alternating" },
      { kind: "testimonials", variantId: "testimonials-editorial-premium-1" },
      { kind: "blogList", variantId: "bloglist-editorial-premium-stack" },
      { kind: "cta", variantId: "cta-editorial-premium-1" },
      { kind: "footer-content", variantId: "footer-content-editorial-premium-1" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageEditorialPremiumLandingDemoPage(): PublicPageModel {
  return {
    id: "demo-page-editorial-premium-landing",
    title: "Page — Editorial Premium Landing",
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
        id: "features",
        kind: "features",
        variant: "features-split-alternating",
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
        id: "testimonials",
        kind: "testimonials",
        variant: "testimonials-editorial-premium-1",
        header: { kicker: "Customers", title: "What teams say." },
        items: [
          { id: "t1", quote: "Cut our onboarding time in half within a quarter.", name: "Priya Bhattacharjee", meta: "Staff Engineer, Coastline" },
          { id: "t2", quote: "Audit, SSO, and rollbacks worked on day one.", name: "Mark Andersson", meta: "Head of Platform, Atlas Co." },
          { id: "t3", quote: "The docs match the product. That's all I want.", name: "Diego Salgado", meta: "Founding Engineer, Forge" },
        ],
      },
      {
        id: "blog",
        kind: "blogList",
        variant: "bloglist-editorial-premium-stack",
        header: { kicker: "Journal", title: "Latest writing." },
        posts: [
          { id: "p1", title: "Designing for calm operations", excerpt: "Why throughput is not the only metric.", href: "#" },
          { id: "p2", title: "Rollback windows in practice", excerpt: "How teams use atomic deploys.", href: "#" },
          { id: "p3", title: "The cost of glue code", excerpt: "Measuring what bespoke tooling really costs.", href: "#" },
        ],
      },
      {
        id: "cta",
        kind: "cta",
        variant: "cta-editorial-premium-1",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
      {
        id: "footer",
        kind: "footer-content",
        variant: "footer-content-editorial-premium-1",
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
