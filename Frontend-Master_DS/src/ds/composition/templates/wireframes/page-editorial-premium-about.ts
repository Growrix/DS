import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_EDITORIAL_PREMIUM_ABOUT_META: WireframeMeta = {
  id: "page-editorial-premium-about",
  archetype: "editorial-premium",
  purpose: "about",
  shell: "public",
  label: "Page — Editorial Premium About",
  description: "Hero centred display → editorial numbered stack → team grid 4-col → editorial large quote → contact channels → minimal footer.",
  density: "extended",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-editorial-premium-1" },
      { kind: "features", variantId: "features-editorial-premium-2" },
      { kind: "team", variantId: "team-editorial-premium-1" },
      { kind: "testimonials", variantId: "testimonials-editorial-premium-1" },
      { kind: "contact", variantId: "contact-editorial-premium-1" },
      { kind: "footer-content", variantId: "footer-content-editorial-premium-2" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageEditorialPremiumAboutDemoPage(): PublicPageModel {
  return {
    id: "demo-page-editorial-premium-about",
    title: "Page — Editorial Premium About",
    archetype: "editorial-premium",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-editorial-premium-1",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "story",
        kind: "features",
        variant: "features-editorial-premium-2",
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
        id: "team",
        kind: "team",
        variant: "team-editorial-premium-1",
        header: { kicker: "Team", title: "The people behind the product." },
        members: [
          { id: "m1", name: "Aiko Tanaka", role: "Founder & CEO" },
          { id: "m2", name: "Marcus Reid", role: "Head of Engineering" },
          { id: "m3", name: "Priya Bhattacharjee", role: "Staff Engineer" },
          { id: "m4", name: "Diego Salgado", role: "Design Lead" },
        ],
      },
      {
        id: "quote",
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
        id: "contact",
        kind: "contact",
        variant: "contact-editorial-premium-1",
        header: { kicker: "Contact", title: "Talk to us." },
        channels: [
          { id: "e1", kind: "email", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
          { id: "p1", kind: "phone", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
          { id: "a1", kind: "address", label: "Address", value: "123 Market St, Suite 400, San Francisco, CA" },
        ],
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
