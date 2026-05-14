import { NewsletterSignup } from "@/ds/components/Marketing";
import { SectionPattern } from "@/ds/composition/patterns/SectionPattern";
import type { SectionVariantMeta } from "@/ds/composition/sections/_schema";
import type { PublicSectionModel } from "@/ds/platform/publicSitePreset";

type NewsletterModel = Extract<PublicSectionModel, { kind: "newsletter" }>;

export const NEWSLETTER_STARTUP_CONVERSION_INLINE_META: SectionVariantMeta = {
  id: "newsletter-startup-conversion-inline",
  kind: "newsletter",
  archetype: "startup-conversion",
  label: "Newsletter - Startup Conversion Inline",
  description:
    "Compact opt-in block with centered header and inline subscription form for conversion-focused follow-up.",
  supportsThemes: ["dark", "light"],
  motionPresets: ["rise-soft"],
  effects: {},
  density: "compact",
  complexity: "minimal",
  isDefault: true,
};

export function NewsletterStartupConversionInline(props: NewsletterModel) {
  const sectionHeader = props.header?.title
    ? {
        kicker: props.header.kicker,
        title: props.header.title,
        lede: props.header.lede,
      }
    : undefined;

  return (
    <div
      className="sv-section-root sv-newsletter-startup-conversion-inline"
      data-variant={NEWSLETTER_STARTUP_CONVERSION_INLINE_META.id}
      data-archetype={NEWSLETTER_STARTUP_CONVERSION_INLINE_META.archetype}
    >
      <SectionPattern container="narrow" header={sectionHeader}>
        <div className="motion-rise-soft">
          <NewsletterSignup title={props.title ?? props.header?.title} />
        </div>
      </SectionPattern>
    </div>
  );
}