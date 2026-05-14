import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_LOCAL_BUSINESS_TRUST_LANDING_META: WireframeMeta = {
  id: "page-local-business-trust-landing",
  archetype: "local-business-trust",
  purpose: "landing",
  shell: "public",
  label: "Page — Local Business Trust Landing",
  description: "Hero full-bleed storefront → 3-col services features → vertical process steps → 4-col trust stats → 3-col testimonials → local channel split contact → phone banner CTA.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-local-business-trust-2" },
      { kind: "features", variantId: "features-local-business-trust-1" },
      { kind: "process-steps", variantId: "process-steps-vertical" },
      { kind: "stats-band", variantId: "stats-band-local-business-trust-1" },
      { kind: "testimonials", variantId: "testimonials-local-business-trust-1" },
      { kind: "contact", variantId: "contact-local-business-trust-split" },
      { kind: "cta", variantId: "cta-local-business-trust-2" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageLocalBusinessTrustLandingDemoPage(): PublicPageModel {
  return {
    id: "demo-page-local-business-trust-landing",
    title: "Page — Local Business Trust Landing",
    archetype: "local-business-trust",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-local-business-trust-2",
        kicker: "New",
        title: "Build with confidence.",
        lede: "A focused product that delivers measurable outcomes for shipping teams.",
        primaryAction: { label: "Get started", href: "#" },
        secondaryAction: { label: "Learn more", href: "#" },
      },
      {
        id: "services",
        kind: "features",
        variant: "features-local-business-trust-1",
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
        id: "process",
        kind: "process-steps",
        variant: "process-steps-vertical",
        header: { kicker: "How it works", title: "Three steps to production." },
        steps: [
          { id: "p1", number: "01", title: "Connect", description: "Sign in with SSO and link your repo." },
          { id: "p2", number: "02", title: "Configure", description: "Pick your region and runtime." },
          { id: "p3", number: "03", title: "Ship", description: "Deploy with one click and roll back at any time." },
        ],
      },
      {
        id: "stats",
        kind: "stats-band",
        variant: "stats-band-local-business-trust-1",
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
        variant: "cta-local-business-trust-2",
        header: { kicker: "Get started", title: "Ship your first deploy this afternoon." },
        body: "Free for the first 14 days. No credit card required.",
        primaryAction: { label: "Start free trial", href: "#" },
        secondaryAction: { label: "Talk to sales", href: "#" },
      },
    ],
  };
}
