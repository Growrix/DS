import type { PublicPageModel } from "../../../platform/publicSitePreset";
import type { WireframeMeta } from "./_schema";

export const PAGE_EDITORIAL_PREMIUM_BLOG_INDEX_META: WireframeMeta = {
  id: "page-editorial-premium-blog-index",
  archetype: "editorial-premium",
  purpose: "blog-index",
  shell: "public",
  label: "Page - Editorial Premium Blog Index",
  description:
    "Photographic editorial hero followed by an article discovery grid for long-form publishing surfaces.",
  density: "extended",
  complexity: "standard",
  isDefault: true,
  sections: [
    { kind: "hero", variantId: "hero-editorial-premium-1" },
    { kind: "blogList", variantId: "bloglist-editorial-premium-stack" },
  ],
};

export function getEditorialPremiumBlogIndexDemoPage(): PublicPageModel {
  return {
    id: "demo-editorial-premium-blog-index",
    title: "Editorial Premium - Demo Blog Index",
    archetype: "editorial-premium",
    sections: [
      {
        id: "hero",
        kind: "hero",
        variant: "hero-editorial-premium-1",
        kicker: "Journal",
        title: "Essays, field notes, and long-form product thinking.",
        lede: "Use the editorial premium surface when the work depends on reading depth, photographic framing, and deliberate pacing.",
        primaryAction: { label: "Read latest", href: "/blog/latest" },
      },
      {
        id: "posts",
        kind: "blogList",
        variant: "bloglist-editorial-premium-stack",
        header: {
          kicker: "Archive",
          title: "Recent writing",
          lede: "A grid of recent essays, updates, and deep dives.",
        },
        posts: [
          { id: "p1", title: "Designing for slower, clearer interfaces", excerpt: "Why intentional pacing improves comprehension on high-value pages.", href: "#" },
          { id: "p2", title: "The anatomy of a trustworthy landing page", excerpt: "How structure, proof, and rhythm combine into conviction.", href: "#" },
          { id: "p3", title: "When to use sparse motion", excerpt: "Motion should narrate, not decorate.", href: "#" },
        ],
      },
    ],
  };
}