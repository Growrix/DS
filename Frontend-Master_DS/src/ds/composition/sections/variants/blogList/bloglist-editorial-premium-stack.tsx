import { BlogList } from "@/ds/components/PublicBlocks";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";

type BlogListModel = Extract<PublicSectionModel, { kind: "blogList" }>;

export const BLOGLIST_EDITORIAL_PREMIUM_STACK_META: SectionVariantMeta = {
  id: "bloglist-editorial-premium-stack",
  kind: "blogList",
  archetype: "editorial-premium",
  label: "Blog List - Editorial Premium Stack",
  description:
    "Centered section header above a three-column editorial card stack for article discovery and archive pages.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft", "fade-in"],
  effects: {},
  density: "extended",
  complexity: "standard",
  isDefault: true,
};

export function BlogListEditorialPremiumStack(props: BlogListModel) {
  const sectionHeader = props.header?.title
    ? {
        kicker: props.header.kicker,
        title: props.header.title,
        lede: props.header.lede,
      }
    : undefined;

  return (
    <div
      className="sv-section-root sv-bloglist-editorial-premium-stack"
      data-variant={BLOGLIST_EDITORIAL_PREMIUM_STACK_META.id}
      data-archetype={BLOGLIST_EDITORIAL_PREMIUM_STACK_META.archetype}
    >
      <SectionPattern container="wide" header={sectionHeader}>
        <div className="motion-rise-soft">
          <BlogList posts={props.posts} />
        </div>
      </SectionPattern>
    </div>
  );
}