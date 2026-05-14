import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_MODERN_SAAS_404_META: WireframeMeta = {
  id: "page-modern-saas-404",
  archetype: "modern-saas",
  purpose: "404",
  shell: "public",
  label: "Page - Modern SaaS 404",
  description:
    "Hero split with recovery actions, supporting CTA card, and structured footer content for not-found routes.",
  density: "comfortable",
  complexity: "standard",
  isDefault: true,
  sections: [
    { kind: "hero", variantId: "hero-modern-saas-split" },
    { kind: "cta", variantId: "cta-modern-saas-card" },
    { kind: "footer-content", variantId: "footer-content-modern-saas-columns" },
  ],
};

export function getModernSaas404DemoPage(): PublicPageModel {
  return {
    id: "demo-modern-saas-404",
    title: "Modern SaaS - Demo 404",
    archetype: "modern-saas",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-modern-saas-split",
        kicker: "404",
        title: "This page is gone, but the product is not.",
        lede: "The route you requested is missing. Return to the product overview, pricing, or contact sales from the actions below.",
        primaryAction: { label: "Go home", href: "/" },
        secondaryAction: { label: "View pricing", href: "/pricing" },
      },
      {
        id: "cta",
        kind: "cta",
        variant: "cta-modern-saas-card",
        header: {
          kicker: "Need help?",
          title: "We can get you back on track.",
          lede: "If you were looking for docs, pricing, or support, start with one of the recovery links here.",
        },
        body: "The fastest recovery path is to return to the homepage or talk to the support team.",
        primaryAction: { label: "Open support", href: "/contact" },
        secondaryAction: { label: "Browse docs", href: "/docs" },
      },
      {
        id: "footer",
        kind: "footer-content",
        variant: "footer-content-modern-saas-columns",
        brand: {
          name: "Blueprint",
          tagline: "Design system factory for repeatable site delivery.",
        },
        columns: [
          {
            id: "product",
            title: "Product",
            links: [
              { label: "Home", href: "/" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ],
          },
          {
            id: "resources",
            title: "Resources",
            links: [
              { label: "Docs", href: "/docs" },
              { label: "Blog", href: "/blog" },
            ],
          },
        ],
        legalLinks: [
          { id: "terms", label: "Terms", href: "#" },
          { id: "privacy", label: "Privacy", href: "#" },
        ],
        attribution: {
          prefix: "Built with",
          linkText: "Blueprint DS",
          url: "#",
        },
      },
    ],
  };
}