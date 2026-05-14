import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_STARTUP_CONVERSION_AUTH_META: WireframeMeta = {
  id: "page-startup-conversion-auth",
  archetype: "startup-conversion",
  purpose: "auth",
  shell: "centered",
  label: "Page — Startup Conversion Sign Up",
  description: "Hero centred conversion → inline newsletter form → startup 3-col features → startup banner CTA.",
  density: "comfortable",
  complexity: "minimal",
  isDefault: true,
  sections: [
      { kind: "hero", variantId: "hero-startup-conversion-1" },
      { kind: "newsletter", variantId: "newsletter-startup-conversion-inline" },
      { kind: "features", variantId: "features-startup-conversion-1" },
      { kind: "cta", variantId: "cta-startup-conversion-2" },
  ],
};

/** Demo content factory. Returns a complete PublicPageModel for preview/smoke. */
export function getPageStartupConversionAuthDemoPage(): PublicPageModel {
  return {
    id: "demo-page-startup-conversion-auth",
    title: "Page — Startup Conversion Sign Up",
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
        id: "signup",
        kind: "newsletter",
        variant: "newsletter-startup-conversion-inline",
        header: { kicker: "Stay in touch", title: "Get monthly updates." },
        title: "Subscribe",
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
