/* ==========================================================================
   Section Registry — central map of variantId → { meta, component }
   Layer: ds.composition.sections (LOCKED)

   AI agents READ from this registry. They MUST NOT EDIT this file directly
   when adding new variants. The correct extension pattern is:

   1. Create a new file under `variants/<kind>/<variant-id>.tsx` exporting
      `<META>_META` (matching SectionVariantMeta) AND a React component.
   2. Add ONE import + ONE entry to the SECTION_REGISTRY map below.
   3. Run `npm run ds:contract` to regenerate `generated/ds.contract.json`.

   See AI-AGENT-CONTRACT.md for the full lockdown rules.
   ========================================================================== */

import {
  HERO_EDITORIAL_PREMIUM_1_META,
  HeroEditorialPremium1,
} from "./variants/hero/hero-editorial-premium-1";
import {
  HERO_MODERN_SAAS_SPLIT_META,
  HeroModernSaasSplit,
} from "./variants/hero/hero-modern-saas-split";
import {
  HERO_MODERN_SAAS_SCREENSHOT_BELOW_META,
  HeroModernSaasScreenshotBelow,
} from "./variants/hero/hero-modern-saas-screenshot-below";
import {
  HERO_MODERN_SAAS_BENTO_RIGHT_META,
  HeroModernSaasBentoRight,
} from "./variants/hero/hero-modern-saas-bento-right";
import {
  HERO_BOLD_CONSUMER_OVERSIZED_META,
  HeroBoldConsumerOversized,
} from "./variants/hero/hero-bold-consumer-oversized";
import {
  HERO_AI_PRODUCT_STREAMING_META,
  HeroAiProductStreaming,
} from "./variants/hero/hero-ai-product-streaming";

import {
  FEATURES_BENTO_ASYMMETRIC_META,
  FeaturesBentoAsymmetric,
} from "./variants/features/features-bento-asymmetric";
import {
  FEATURES_SPLIT_ALTERNATING_META,
  FeaturesSplitAlternating,
} from "./variants/features/features-split-alternating";
import {
  FEATURES_MODERN_SAAS_3COL_ICONS_META,
  FeaturesModernSaas3ColIcons,
} from "./variants/features/features-modern-saas-3col-icons";
import {
  FEATURES_MODERN_SAAS_TABS_META,
  FeaturesModernSaasTabs,
} from "./variants/features/features-modern-saas-tabs";

import {
  BLOGLIST_EDITORIAL_PREMIUM_STACK_META,
  BlogListEditorialPremiumStack,
} from "./variants/blogList/bloglist-editorial-premium-stack";

import {
  TESTIMONIALS_MARQUEE_META,
  TestimonialsMarquee,
} from "./variants/testimonials/testimonials-marquee";

import { CTA_FULL_BLEED_META, CtaFullBleed } from "./variants/cta/cta-full-bleed";
import {
  CTA_MODERN_SAAS_CARD_META,
  CtaModernSaasCard,
} from "./variants/cta/cta-modern-saas-card";
import {
  CTA_MODERN_SAAS_BANNER_STRIP_META,
  CtaModernSaasBannerStrip,
} from "./variants/cta/cta-modern-saas-banner-strip";
import {
  CTA_MODERN_SAAS_SPLIT_WITH_FORM_META,
  CtaModernSaasSplitWithForm,
} from "./variants/cta/cta-modern-saas-split-with-form";

import { STATS_BAND_4COL_META, StatsBand4Col } from "./variants/stats-band/stats-band-4col";

import {
  PROCESS_STEPS_VERTICAL_META,
  ProcessStepsVertical,
} from "./variants/process-steps/process-steps-vertical";

import { LOGO_CLOUD_GRID_META, LogoCloudGrid } from "./variants/logo-cloud/logo-cloud-grid";

import {
  CASE_STUDIES_GRID_META,
  CaseStudiesGrid,
} from "./variants/case-studies/case-studies-grid";

import {
  FAQ_MODERN_SAAS_ACCORDION_META,
  FaqModernSaasAccordion,
} from "./variants/faq/faq-modern-saas-accordion";

import {
  NEWSLETTER_STARTUP_CONVERSION_INLINE_META,
  NewsletterStartupConversionInline,
} from "./variants/newsletter/newsletter-startup-conversion-inline";

import {
  PRICING_MODERN_SAAS_3_TIER_CARDS_META,
  PricingModernSaas3TierCards,
} from "./variants/pricing/pricing-modern-saas-3-tier-cards";
import {
  PRICING_MODERN_SAAS_TOGGLE_BILLING_META,
  PricingModernSaasToggleBilling,
} from "./variants/pricing/pricing-modern-saas-toggle-billing";
import {
  PRICING_MODERN_SAAS_COMPARISON_TABLE_META,
  PricingModernSaasComparisonTable,
} from "./variants/pricing/pricing-modern-saas-comparison-table";

import {
  TEAM_DASHBOARD_OPS_DIRECTORY_META,
  TeamDashboardOpsDirectory,
} from "./variants/team/team-dashboard-ops-directory";
import {
  CONTACT_LOCAL_BUSINESS_TRUST_SPLIT_META,
  ContactLocalBusinessTrustSplit,
} from "./variants/contact/contact-local-business-trust-split";
import {
  FOOTER_CONTENT_MODERN_SAAS_COLUMNS_META,
  FooterContentModernSaasColumns,
} from "./variants/footer-content/footer-content-modern-saas-columns";

// Phase 1 Batch 1 — modern-saas sparse-kind lifters
import {
  TESTIMONIALS_MODERN_SAAS_CARDS_GRID_META,
  TestimonialsModernSaasCardsGrid,
} from "./variants/testimonials/testimonials-modern-saas-cards-grid";
import {
  FAQ_MODERN_SAAS_TWO_COLUMN_META,
  FaqModernSaasTwoColumn,
} from "./variants/faq/faq-modern-saas-two-column";
import {
  BLOGLIST_MODERN_SAAS_CARDS_GRID_META,
  BlogListModernSaasCardsGrid,
} from "./variants/blogList/bloglist-modern-saas-cards-grid";
import {
  NEWSLETTER_MODERN_SAAS_CENTERED_CARD_META,
  NewsletterModernSaasCenteredCard,
} from "./variants/newsletter/newsletter-modern-saas-centered-card";
import {
  STATS_BAND_MODERN_SAAS_2X2_GRID_META,
  StatsBandModernSaas2x2Grid,
} from "./variants/stats-band/stats-band-modern-saas-2x2-grid";
import {
  PROCESS_STEPS_MODERN_SAAS_HORIZONTAL_META,
  ProcessStepsModernSaasHorizontal,
} from "./variants/process-steps/process-steps-modern-saas-horizontal";
import {
  LOGO_CLOUD_MODERN_SAAS_MARQUEE_META,
  LogoCloudModernSaasMarquee,
} from "./variants/logo-cloud/logo-cloud-modern-saas-marquee";
import {
  CASE_STUDIES_MODERN_SAAS_FEATURED_META,
  CaseStudiesModernSaasFeatured,
} from "./variants/case-studies/case-studies-modern-saas-featured";
import {
  TEAM_MODERN_SAAS_GRID_META,
  TeamModernSaasGrid,
} from "./variants/team/team-modern-saas-grid";
import {
  CONTACT_MODERN_SAAS_FORM_INFO_META,
  ContactModernSaasFormInfo,
} from "./variants/contact/contact-modern-saas-form-info";
import {
  FOOTER_CONTENT_MODERN_SAAS_MINIMAL_META,
  FooterContentModernSaasMinimal,
} from "./variants/footer-content/footer-content-modern-saas-minimal";

// Phase 1 Batch 2 — modern-saas remainder (per-cell targets)
import {
  BLOGLIST_MODERN_SAAS_FEATURED_MOSAIC_META,
  BlogListModernSaasFeaturedMosaic,
} from "./variants/blogList/bloglist-modern-saas-featured-mosaic";
import {
  NEWSLETTER_MODERN_SAAS_SPLIT_ILLUSTRATION_META,
  NewsletterModernSaasSplitIllustration,
} from "./variants/newsletter/newsletter-modern-saas-split-illustration";
import {
  PROCESS_STEPS_MODERN_SAAS_VERTICAL_STEPPER_META,
  ProcessStepsModernSaasVerticalStepper,
} from "./variants/process-steps/process-steps-modern-saas-vertical-stepper";
import {
  PRICING_MODERN_SAAS_SINGLE_TIER_CTA_META,
  PricingModernSaasSingleTierCta,
} from "./variants/pricing/pricing-modern-saas-single-tier-cta";
import {
  TEAM_MODERN_SAAS_LEADERSHIP_ROW_META,
  TeamModernSaasLeadershipRow,
} from "./variants/team/team-modern-saas-leadership-row";
import {
  CONTACT_MODERN_SAAS_CENTERED_FORM_META,
  ContactModernSaasCenteredForm,
} from "./variants/contact/contact-modern-saas-centered-form";

import type {
  SectionKind,
  SectionRegistry,
  SectionVariantEntry,
  SectionVariantFilter,
  SectionVariantMeta,
} from "./_schema";

/** Canonical registry. Add new variants here. */
export const SECTION_REGISTRY: SectionRegistry = {
  // hero variants
  [HERO_EDITORIAL_PREMIUM_1_META.id]: {
    meta: HERO_EDITORIAL_PREMIUM_1_META,
    component: HeroEditorialPremium1,
  },
  [HERO_MODERN_SAAS_SPLIT_META.id]: {
    meta: HERO_MODERN_SAAS_SPLIT_META,
    component: HeroModernSaasSplit,
  },
  [HERO_MODERN_SAAS_SCREENSHOT_BELOW_META.id]: {
    meta: HERO_MODERN_SAAS_SCREENSHOT_BELOW_META,
    component: HeroModernSaasScreenshotBelow,
  },
  [HERO_MODERN_SAAS_BENTO_RIGHT_META.id]: {
    meta: HERO_MODERN_SAAS_BENTO_RIGHT_META,
    component: HeroModernSaasBentoRight,
  },
  [HERO_BOLD_CONSUMER_OVERSIZED_META.id]: {
    meta: HERO_BOLD_CONSUMER_OVERSIZED_META,
    component: HeroBoldConsumerOversized,
  },
  [HERO_AI_PRODUCT_STREAMING_META.id]: {
    meta: HERO_AI_PRODUCT_STREAMING_META,
    component: HeroAiProductStreaming,
  },

  // features variants
  [FEATURES_BENTO_ASYMMETRIC_META.id]: {
    meta: FEATURES_BENTO_ASYMMETRIC_META,
    component: FeaturesBentoAsymmetric,
  },
  [FEATURES_SPLIT_ALTERNATING_META.id]: {
    meta: FEATURES_SPLIT_ALTERNATING_META,
    component: FeaturesSplitAlternating,
  },
  [FEATURES_MODERN_SAAS_3COL_ICONS_META.id]: {
    meta: FEATURES_MODERN_SAAS_3COL_ICONS_META,
    component: FeaturesModernSaas3ColIcons,
  },
  [FEATURES_MODERN_SAAS_TABS_META.id]: {
    meta: FEATURES_MODERN_SAAS_TABS_META,
    component: FeaturesModernSaasTabs,
  },

  // blogList variants
  [BLOGLIST_EDITORIAL_PREMIUM_STACK_META.id]: {
    meta: BLOGLIST_EDITORIAL_PREMIUM_STACK_META,
    component: BlogListEditorialPremiumStack,
  },
  [BLOGLIST_MODERN_SAAS_CARDS_GRID_META.id]: {
    meta: BLOGLIST_MODERN_SAAS_CARDS_GRID_META,
    component: BlogListModernSaasCardsGrid,
  },
  [BLOGLIST_MODERN_SAAS_FEATURED_MOSAIC_META.id]: {
    meta: BLOGLIST_MODERN_SAAS_FEATURED_MOSAIC_META,
    component: BlogListModernSaasFeaturedMosaic,
  },

  // testimonials variants
  [TESTIMONIALS_MARQUEE_META.id]: {
    meta: TESTIMONIALS_MARQUEE_META,
    component: TestimonialsMarquee,
  },
  [TESTIMONIALS_MODERN_SAAS_CARDS_GRID_META.id]: {
    meta: TESTIMONIALS_MODERN_SAAS_CARDS_GRID_META,
    component: TestimonialsModernSaasCardsGrid,
  },

  // cta variants
  [CTA_FULL_BLEED_META.id]: {
    meta: CTA_FULL_BLEED_META,
    component: CtaFullBleed,
  },
  [CTA_MODERN_SAAS_CARD_META.id]: {
    meta: CTA_MODERN_SAAS_CARD_META,
    component: CtaModernSaasCard,
  },
  [CTA_MODERN_SAAS_BANNER_STRIP_META.id]: {
    meta: CTA_MODERN_SAAS_BANNER_STRIP_META,
    component: CtaModernSaasBannerStrip,
  },
  [CTA_MODERN_SAAS_SPLIT_WITH_FORM_META.id]: {
    meta: CTA_MODERN_SAAS_SPLIT_WITH_FORM_META,
    component: CtaModernSaasSplitWithForm,
  },

  // stats-band variants
  [STATS_BAND_4COL_META.id]: {
    meta: STATS_BAND_4COL_META,
    component: StatsBand4Col,
  },
  [STATS_BAND_MODERN_SAAS_2X2_GRID_META.id]: {
    meta: STATS_BAND_MODERN_SAAS_2X2_GRID_META,
    component: StatsBandModernSaas2x2Grid,
  },

  // process-steps variants
  [PROCESS_STEPS_VERTICAL_META.id]: {
    meta: PROCESS_STEPS_VERTICAL_META,
    component: ProcessStepsVertical,
  },
  [PROCESS_STEPS_MODERN_SAAS_HORIZONTAL_META.id]: {
    meta: PROCESS_STEPS_MODERN_SAAS_HORIZONTAL_META,
    component: ProcessStepsModernSaasHorizontal,
  },
  [PROCESS_STEPS_MODERN_SAAS_VERTICAL_STEPPER_META.id]: {
    meta: PROCESS_STEPS_MODERN_SAAS_VERTICAL_STEPPER_META,
    component: ProcessStepsModernSaasVerticalStepper,
  },

  // logo-cloud variants
  [LOGO_CLOUD_GRID_META.id]: {
    meta: LOGO_CLOUD_GRID_META,
    component: LogoCloudGrid,
  },
  [LOGO_CLOUD_MODERN_SAAS_MARQUEE_META.id]: {
    meta: LOGO_CLOUD_MODERN_SAAS_MARQUEE_META,
    component: LogoCloudModernSaasMarquee,
  },

  // case-studies variants
  [CASE_STUDIES_GRID_META.id]: {
    meta: CASE_STUDIES_GRID_META,
    component: CaseStudiesGrid,
  },
  [CASE_STUDIES_MODERN_SAAS_FEATURED_META.id]: {
    meta: CASE_STUDIES_MODERN_SAAS_FEATURED_META,
    component: CaseStudiesModernSaasFeatured,
  },

  // faq variants
  [FAQ_MODERN_SAAS_ACCORDION_META.id]: {
    meta: FAQ_MODERN_SAAS_ACCORDION_META,
    component: FaqModernSaasAccordion,
  },
  [FAQ_MODERN_SAAS_TWO_COLUMN_META.id]: {
    meta: FAQ_MODERN_SAAS_TWO_COLUMN_META,
    component: FaqModernSaasTwoColumn,
  },

  // newsletter variants
  [NEWSLETTER_STARTUP_CONVERSION_INLINE_META.id]: {
    meta: NEWSLETTER_STARTUP_CONVERSION_INLINE_META,
    component: NewsletterStartupConversionInline,
  },
  [NEWSLETTER_MODERN_SAAS_CENTERED_CARD_META.id]: {
    meta: NEWSLETTER_MODERN_SAAS_CENTERED_CARD_META,
    component: NewsletterModernSaasCenteredCard,
  },
  [NEWSLETTER_MODERN_SAAS_SPLIT_ILLUSTRATION_META.id]: {
    meta: NEWSLETTER_MODERN_SAAS_SPLIT_ILLUSTRATION_META,
    component: NewsletterModernSaasSplitIllustration,
  },

  // pricing variants
  [PRICING_MODERN_SAAS_3_TIER_CARDS_META.id]: {
    meta: PRICING_MODERN_SAAS_3_TIER_CARDS_META,
    component: PricingModernSaas3TierCards,
  },
  [PRICING_MODERN_SAAS_TOGGLE_BILLING_META.id]: {
    meta: PRICING_MODERN_SAAS_TOGGLE_BILLING_META,
    component: PricingModernSaasToggleBilling,
  },
  [PRICING_MODERN_SAAS_COMPARISON_TABLE_META.id]: {
    meta: PRICING_MODERN_SAAS_COMPARISON_TABLE_META,
    component: PricingModernSaasComparisonTable,
  },
  [PRICING_MODERN_SAAS_SINGLE_TIER_CTA_META.id]: {
    meta: PRICING_MODERN_SAAS_SINGLE_TIER_CTA_META,
    component: PricingModernSaasSingleTierCta,
  },

  // team variants
  [TEAM_DASHBOARD_OPS_DIRECTORY_META.id]: {
    meta: TEAM_DASHBOARD_OPS_DIRECTORY_META,
    component: TeamDashboardOpsDirectory,
  },
  [TEAM_MODERN_SAAS_GRID_META.id]: {
    meta: TEAM_MODERN_SAAS_GRID_META,
    component: TeamModernSaasGrid,
  },
  [TEAM_MODERN_SAAS_LEADERSHIP_ROW_META.id]: {
    meta: TEAM_MODERN_SAAS_LEADERSHIP_ROW_META,
    component: TeamModernSaasLeadershipRow,
  },

  // contact variants
  [CONTACT_LOCAL_BUSINESS_TRUST_SPLIT_META.id]: {
    meta: CONTACT_LOCAL_BUSINESS_TRUST_SPLIT_META,
    component: ContactLocalBusinessTrustSplit,
  },
  [CONTACT_MODERN_SAAS_FORM_INFO_META.id]: {
    meta: CONTACT_MODERN_SAAS_FORM_INFO_META,
    component: ContactModernSaasFormInfo,
  },
  [CONTACT_MODERN_SAAS_CENTERED_FORM_META.id]: {
    meta: CONTACT_MODERN_SAAS_CENTERED_FORM_META,
    component: ContactModernSaasCenteredForm,
  },

  // footer-content variants
  [FOOTER_CONTENT_MODERN_SAAS_COLUMNS_META.id]: {
    meta: FOOTER_CONTENT_MODERN_SAAS_COLUMNS_META,
    component: FooterContentModernSaasColumns,
  },
  [FOOTER_CONTENT_MODERN_SAAS_MINIMAL_META.id]: {
    meta: FOOTER_CONTENT_MODERN_SAAS_MINIMAL_META,
    component: FooterContentModernSaasMinimal,
  },
};

/** Convenience: array of all metadata entries. */
export const SECTION_VARIANT_META_LIST: SectionVariantMeta[] = Object.values(SECTION_REGISTRY).map(
  (entry) => entry.meta,
);

/** Find a variant by id; returns undefined if not registered. */
export function getSectionVariant(variantId: string): SectionVariantEntry | undefined {
  return SECTION_REGISTRY[variantId];
}

/** Find the default variant for a given kind (the entry with isDefault === true). */
export function getDefaultVariantForKind(kind: SectionKind): SectionVariantEntry | undefined {
  return Object.values(SECTION_REGISTRY).find(
    (entry) => entry.meta.kind === kind && entry.meta.isDefault === true,
  );
}

/** Filter the registry by any subset of {kind, archetype, density, complexity}. */
export function listSectionVariants(filter: SectionVariantFilter = {}): SectionVariantMeta[] {
  return SECTION_VARIANT_META_LIST.filter((m) => {
    if (filter.kind && m.kind !== filter.kind) return false;
    if (filter.archetype && m.archetype !== filter.archetype) return false;
    if (filter.density && m.density !== filter.density) return false;
    if (filter.complexity && m.complexity !== filter.complexity) return false;
    return true;
  });
}
