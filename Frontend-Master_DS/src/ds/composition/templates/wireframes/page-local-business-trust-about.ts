import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_LOCAL_BUSINESS_TRUST_ABOUT_META: WireframeMeta = {
  id: "page-local-business-trust-about",
  archetype: "local-business-trust",
  purpose: "about",
  shell: "public",
  label: "Page — Local Business Trust About",
  description: "Hero centred trust → numbered local process → 4-col staff team → 3-col testimonials → split contact → centred card CTA.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-local-business-trust-1" },
      { kind: "features", variantId: "features-local-business-trust-2" },
      { kind: "team", variantId: "team-local-business-trust-1" },
      { kind: "testimonials", variantId: "testimonials-local-business-trust-1" },
      { kind: "contact", variantId: "contact-local-business-trust-split" },
      { kind: "cta", variantId: "cta-local-business-trust-1" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageLocalBusinessTrustAboutDemoPage(): PublicPageModel {
  return {
    id: "demo-page-local-business-trust-about",
    title: "Page — Local Business Trust About",
    archetype: "local-business-trust",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-local-business-trust-1",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "story",
        kind: "features",
        variant: "features-local-business-trust-2",
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
        variant: "team-local-business-trust-1",
        header: { kicker: "Team", title: "The people behind the product." },
        members: [
          { id: "m1", name: "Aiko Tanaka", role: "Founder & CEO" },
          { id: "m2", name: "Marcus Reid", role: "Head of Engineering" },
          { id: "m3", name: "Priya Bhattacharjee", role: "Staff Engineer" },
          { id: "m4", name: "Diego Salgado", role: "Design Lead" },
        ],
      },
      {
        id: "testimonials",
        kind: "testimonials",
        variant: "testimonials-local-business-trust-1",
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
        variant: "contact-local-business-trust-split",
        header: { kicker: "Contact", title: "Talk to us." },
        channels: [
          { id: "e1", kind: "email", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
          { id: "p1", kind: "phone", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
          { id: "a1", kind: "address", label: "Address", value: "123 Market St, Suite 400, San Francisco, CA" },
        ],
      },
      {
        id: "cta",
        kind: "cta",
        variant: "cta-local-business-trust-1",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
