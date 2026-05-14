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


// scaffold-variants batch — imports
import { HERO_EDITORIAL_PREMIUM_2_META, HeroEditorialPremium2 } from "./variants/hero/hero-editorial-premium-2";
import { FEATURES_EDITORIAL_PREMIUM_2_META, FeaturesEditorialPremium2 } from "./variants/features/features-editorial-premium-2";
import { TESTIMONIALS_EDITORIAL_PREMIUM_1_META, TestimonialsEditorialPremium1 } from "./variants/testimonials/testimonials-editorial-premium-1";
import { TESTIMONIALS_EDITORIAL_PREMIUM_2_META, TestimonialsEditorialPremium2 } from "./variants/testimonials/testimonials-editorial-premium-2";
import { FAQ_EDITORIAL_PREMIUM_1_META, FaqEditorialPremium1 } from "./variants/faq/faq-editorial-premium-1";
import { FAQ_EDITORIAL_PREMIUM_2_META, FaqEditorialPremium2 } from "./variants/faq/faq-editorial-premium-2";
import { BLOGLIST_EDITORIAL_PREMIUM_2_META, BloglistEditorialPremium2 } from "./variants/blogList/bloglist-editorial-premium-2";
import { BLOGLIST_EDITORIAL_PREMIUM_3_META, BloglistEditorialPremium3 } from "./variants/blogList/bloglist-editorial-premium-3";
import { CTA_EDITORIAL_PREMIUM_1_META, CtaEditorialPremium1 } from "./variants/cta/cta-editorial-premium-1";
import { CTA_EDITORIAL_PREMIUM_2_META, CtaEditorialPremium2 } from "./variants/cta/cta-editorial-premium-2";
import { NEWSLETTER_EDITORIAL_PREMIUM_1_META, NewsletterEditorialPremium1 } from "./variants/newsletter/newsletter-editorial-premium-1";
import { NEWSLETTER_EDITORIAL_PREMIUM_2_META, NewsletterEditorialPremium2 } from "./variants/newsletter/newsletter-editorial-premium-2";
import { STATS_BAND_EDITORIAL_PREMIUM_1_META, StatsBandEditorialPremium1 } from "./variants/stats-band/stats-band-editorial-premium-1";
import { PROCESS_STEPS_EDITORIAL_PREMIUM_1_META, ProcessStepsEditorialPremium1 } from "./variants/process-steps/process-steps-editorial-premium-1";
import { LOGO_CLOUD_EDITORIAL_PREMIUM_1_META, LogoCloudEditorialPremium1 } from "./variants/logo-cloud/logo-cloud-editorial-premium-1";
import { CASE_STUDIES_EDITORIAL_PREMIUM_1_META, CaseStudiesEditorialPremium1 } from "./variants/case-studies/case-studies-editorial-premium-1";
import { CASE_STUDIES_EDITORIAL_PREMIUM_2_META, CaseStudiesEditorialPremium2 } from "./variants/case-studies/case-studies-editorial-premium-2";
import { PRICING_EDITORIAL_PREMIUM_1_META, PricingEditorialPremium1 } from "./variants/pricing/pricing-editorial-premium-1";
import { TEAM_EDITORIAL_PREMIUM_1_META, TeamEditorialPremium1 } from "./variants/team/team-editorial-premium-1";
import { TEAM_EDITORIAL_PREMIUM_2_META, TeamEditorialPremium2 } from "./variants/team/team-editorial-premium-2";
import { CONTACT_EDITORIAL_PREMIUM_1_META, ContactEditorialPremium1 } from "./variants/contact/contact-editorial-premium-1";
import { FOOTER_CONTENT_EDITORIAL_PREMIUM_1_META, FooterContentEditorialPremium1 } from "./variants/footer-content/footer-content-editorial-premium-1";
import { FOOTER_CONTENT_EDITORIAL_PREMIUM_2_META, FooterContentEditorialPremium2 } from "./variants/footer-content/footer-content-editorial-premium-2";


// scaffold-variants batch — imports
import { HERO_BOLD_CONSUMER_2_META, HeroBoldConsumer2 } from "./variants/hero/hero-bold-consumer-2";
import { HERO_BOLD_CONSUMER_3_META, HeroBoldConsumer3 } from "./variants/hero/hero-bold-consumer-3";
import { FEATURES_BOLD_CONSUMER_1_META, FeaturesBoldConsumer1 } from "./variants/features/features-bold-consumer-1";
import { FEATURES_BOLD_CONSUMER_2_META, FeaturesBoldConsumer2 } from "./variants/features/features-bold-consumer-2";
import { TESTIMONIALS_BOLD_CONSUMER_1_META, TestimonialsBoldConsumer1 } from "./variants/testimonials/testimonials-bold-consumer-1";
import { TESTIMONIALS_BOLD_CONSUMER_2_META, TestimonialsBoldConsumer2 } from "./variants/testimonials/testimonials-bold-consumer-2";
import { FAQ_BOLD_CONSUMER_1_META, FaqBoldConsumer1 } from "./variants/faq/faq-bold-consumer-1";
import { BLOGLIST_BOLD_CONSUMER_1_META, BloglistBoldConsumer1 } from "./variants/blogList/bloglist-bold-consumer-1";
import { CTA_BOLD_CONSUMER_2_META, CtaBoldConsumer2 } from "./variants/cta/cta-bold-consumer-2";
import { NEWSLETTER_BOLD_CONSUMER_1_META, NewsletterBoldConsumer1 } from "./variants/newsletter/newsletter-bold-consumer-1";
import { STATS_BAND_BOLD_CONSUMER_1_META, StatsBandBoldConsumer1 } from "./variants/stats-band/stats-band-bold-consumer-1";
import { PROCESS_STEPS_BOLD_CONSUMER_1_META, ProcessStepsBoldConsumer1 } from "./variants/process-steps/process-steps-bold-consumer-1";
import { LOGO_CLOUD_BOLD_CONSUMER_1_META, LogoCloudBoldConsumer1 } from "./variants/logo-cloud/logo-cloud-bold-consumer-1";
import { CASE_STUDIES_BOLD_CONSUMER_1_META, CaseStudiesBoldConsumer1 } from "./variants/case-studies/case-studies-bold-consumer-1";
import { PRICING_BOLD_CONSUMER_1_META, PricingBoldConsumer1 } from "./variants/pricing/pricing-bold-consumer-1";
import { TEAM_BOLD_CONSUMER_1_META, TeamBoldConsumer1 } from "./variants/team/team-bold-consumer-1";
import { CONTACT_BOLD_CONSUMER_1_META, ContactBoldConsumer1 } from "./variants/contact/contact-bold-consumer-1";


// scaffold-variants batch — imports
import { HERO_AI_PRODUCT_2_META, HeroAiProduct2 } from "./variants/hero/hero-ai-product-2";
import { HERO_AI_PRODUCT_3_META, HeroAiProduct3 } from "./variants/hero/hero-ai-product-3";
import { FEATURES_AI_PRODUCT_1_META, FeaturesAiProduct1 } from "./variants/features/features-ai-product-1";
import { FEATURES_AI_PRODUCT_2_META, FeaturesAiProduct2 } from "./variants/features/features-ai-product-2";
import { TESTIMONIALS_AI_PRODUCT_1_META, TestimonialsAiProduct1 } from "./variants/testimonials/testimonials-ai-product-1";
import { TESTIMONIALS_AI_PRODUCT_2_META, TestimonialsAiProduct2 } from "./variants/testimonials/testimonials-ai-product-2";
import { FAQ_AI_PRODUCT_1_META, FaqAiProduct1 } from "./variants/faq/faq-ai-product-1";
import { BLOGLIST_AI_PRODUCT_1_META, BloglistAiProduct1 } from "./variants/blogList/bloglist-ai-product-1";
import { CTA_AI_PRODUCT_1_META, CtaAiProduct1 } from "./variants/cta/cta-ai-product-1";
import { CTA_AI_PRODUCT_2_META, CtaAiProduct2 } from "./variants/cta/cta-ai-product-2";
import { NEWSLETTER_AI_PRODUCT_1_META, NewsletterAiProduct1 } from "./variants/newsletter/newsletter-ai-product-1";
import { STATS_BAND_AI_PRODUCT_1_META, StatsBandAiProduct1 } from "./variants/stats-band/stats-band-ai-product-1";
import { PROCESS_STEPS_AI_PRODUCT_1_META, ProcessStepsAiProduct1 } from "./variants/process-steps/process-steps-ai-product-1";
import { LOGO_CLOUD_AI_PRODUCT_1_META, LogoCloudAiProduct1 } from "./variants/logo-cloud/logo-cloud-ai-product-1";
import { CASE_STUDIES_AI_PRODUCT_1_META, CaseStudiesAiProduct1 } from "./variants/case-studies/case-studies-ai-product-1";
import { PRICING_AI_PRODUCT_1_META, PricingAiProduct1 } from "./variants/pricing/pricing-ai-product-1";
import { TEAM_AI_PRODUCT_1_META, TeamAiProduct1 } from "./variants/team/team-ai-product-1";
import { CONTACT_AI_PRODUCT_1_META, ContactAiProduct1 } from "./variants/contact/contact-ai-product-1";
import { FOOTER_CONTENT_AI_PRODUCT_1_META, FooterContentAiProduct1 } from "./variants/footer-content/footer-content-ai-product-1";


// scaffold-variants batch — imports
import { HERO_STARTUP_CONVERSION_1_META, HeroStartupConversion1 } from "./variants/hero/hero-startup-conversion-1";
import { HERO_STARTUP_CONVERSION_2_META, HeroStartupConversion2 } from "./variants/hero/hero-startup-conversion-2";
import { FEATURES_STARTUP_CONVERSION_1_META, FeaturesStartupConversion1 } from "./variants/features/features-startup-conversion-1";
import { FEATURES_STARTUP_CONVERSION_2_META, FeaturesStartupConversion2 } from "./variants/features/features-startup-conversion-2";
import { TESTIMONIALS_STARTUP_CONVERSION_1_META, TestimonialsStartupConversion1 } from "./variants/testimonials/testimonials-startup-conversion-1";
import { FAQ_STARTUP_CONVERSION_1_META, FaqStartupConversion1 } from "./variants/faq/faq-startup-conversion-1";
import { BLOGLIST_STARTUP_CONVERSION_1_META, BloglistStartupConversion1 } from "./variants/blogList/bloglist-startup-conversion-1";
import { CTA_STARTUP_CONVERSION_1_META, CtaStartupConversion1 } from "./variants/cta/cta-startup-conversion-1";
import { CTA_STARTUP_CONVERSION_2_META, CtaStartupConversion2 } from "./variants/cta/cta-startup-conversion-2";
import { NEWSLETTER_STARTUP_CONVERSION_2_META, NewsletterStartupConversion2 } from "./variants/newsletter/newsletter-startup-conversion-2";
import { STATS_BAND_STARTUP_CONVERSION_1_META, StatsBandStartupConversion1 } from "./variants/stats-band/stats-band-startup-conversion-1";
import { PROCESS_STEPS_STARTUP_CONVERSION_1_META, ProcessStepsStartupConversion1 } from "./variants/process-steps/process-steps-startup-conversion-1";
import { LOGO_CLOUD_STARTUP_CONVERSION_1_META, LogoCloudStartupConversion1 } from "./variants/logo-cloud/logo-cloud-startup-conversion-1";
import { PRICING_STARTUP_CONVERSION_1_META, PricingStartupConversion1 } from "./variants/pricing/pricing-startup-conversion-1";
import { TEAM_STARTUP_CONVERSION_1_META, TeamStartupConversion1 } from "./variants/team/team-startup-conversion-1";
import { CONTACT_STARTUP_CONVERSION_1_META, ContactStartupConversion1 } from "./variants/contact/contact-startup-conversion-1";


// scaffold-variants batch — imports
import { HERO_LOCAL_BUSINESS_TRUST_1_META, HeroLocalBusinessTrust1 } from "./variants/hero/hero-local-business-trust-1";
import { HERO_LOCAL_BUSINESS_TRUST_2_META, HeroLocalBusinessTrust2 } from "./variants/hero/hero-local-business-trust-2";
import {
  HERO_LOCAL_BUSINESS_TRUST_PREMIUM_SPLIT_META,
  HeroLocalBusinessTrustPremiumSplit,
} from "./variants/hero/hero-local-business-trust-premium-split";
import { FEATURES_LOCAL_BUSINESS_TRUST_1_META, FeaturesLocalBusinessTrust1 } from "./variants/features/features-local-business-trust-1";
import { FEATURES_LOCAL_BUSINESS_TRUST_2_META, FeaturesLocalBusinessTrust2 } from "./variants/features/features-local-business-trust-2";
import {
  FEATURES_LOCAL_BUSINESS_TRUST_MEDIA_CARDS_META,
  FeaturesLocalBusinessTrustMediaCards,
} from "./variants/features/features-local-business-trust-media-cards";
import { TESTIMONIALS_LOCAL_BUSINESS_TRUST_1_META, TestimonialsLocalBusinessTrust1 } from "./variants/testimonials/testimonials-local-business-trust-1";
import { FAQ_LOCAL_BUSINESS_TRUST_1_META, FaqLocalBusinessTrust1 } from "./variants/faq/faq-local-business-trust-1";
import { BLOGLIST_LOCAL_BUSINESS_TRUST_1_META, BloglistLocalBusinessTrust1 } from "./variants/blogList/bloglist-local-business-trust-1";
import { CTA_LOCAL_BUSINESS_TRUST_1_META, CtaLocalBusinessTrust1 } from "./variants/cta/cta-local-business-trust-1";
import { CTA_LOCAL_BUSINESS_TRUST_2_META, CtaLocalBusinessTrust2 } from "./variants/cta/cta-local-business-trust-2";
import { NEWSLETTER_LOCAL_BUSINESS_TRUST_1_META, NewsletterLocalBusinessTrust1 } from "./variants/newsletter/newsletter-local-business-trust-1";
import { STATS_BAND_LOCAL_BUSINESS_TRUST_1_META, StatsBandLocalBusinessTrust1 } from "./variants/stats-band/stats-band-local-business-trust-1";
import { LOGO_CLOUD_LOCAL_BUSINESS_TRUST_1_META, LogoCloudLocalBusinessTrust1 } from "./variants/logo-cloud/logo-cloud-local-business-trust-1";
import { CASE_STUDIES_LOCAL_BUSINESS_TRUST_1_META, CaseStudiesLocalBusinessTrust1 } from "./variants/case-studies/case-studies-local-business-trust-1";
import {
  CASE_STUDIES_LOCAL_BUSINESS_TRUST_GALLERY_META,
  CaseStudiesLocalBusinessTrustGallery,
} from "./variants/case-studies/case-studies-local-business-trust-gallery";
import { PRICING_LOCAL_BUSINESS_TRUST_1_META, PricingLocalBusinessTrust1 } from "./variants/pricing/pricing-local-business-trust-1";
import {
  PRICING_LOCAL_BUSINESS_TRUST_PLAN_CARDS_META,
  PricingLocalBusinessTrustPlanCards,
} from "./variants/pricing/pricing-local-business-trust-plan-cards";
import {
  PRICING_LOCAL_BUSINESS_TRUST_CONVERSION_GRID_META,
  PricingLocalBusinessTrustConversionGrid,
} from "./variants/pricing/pricing-local-business-trust-conversion-grid";
import { TEAM_LOCAL_BUSINESS_TRUST_1_META, TeamLocalBusinessTrust1 } from "./variants/team/team-local-business-trust-1";
import {
  TESTIMONIALS_LOCAL_BUSINESS_TRUST_EDITORIAL_STACK_META,
  TestimonialsLocalBusinessTrustEditorialStack,
} from "./variants/testimonials/testimonials-local-business-trust-editorial-stack";
import {
  CONTACT_LOCAL_BUSINESS_TRUST_CONCIERGE_META,
  ContactLocalBusinessTrustConcierge,
} from "./variants/contact/contact-local-business-trust-concierge";
import {
  FOOTER_CONTENT_LOCAL_BUSINESS_TRUST_PREMIUM_META,
  FooterContentLocalBusinessTrustPremium,
} from "./variants/footer-content/footer-content-local-business-trust-premium";


// scaffold-variants batch — imports
import { HERO_DASHBOARD_OPS_1_META, HeroDashboardOps1 } from "./variants/hero/hero-dashboard-ops-1";
import { FEATURES_DASHBOARD_OPS_1_META, FeaturesDashboardOps1 } from "./variants/features/features-dashboard-ops-1";
import { STATS_BAND_DASHBOARD_OPS_1_META, StatsBandDashboardOps1 } from "./variants/stats-band/stats-band-dashboard-ops-1";
import { PROCESS_STEPS_DASHBOARD_OPS_1_META, ProcessStepsDashboardOps1 } from "./variants/process-steps/process-steps-dashboard-ops-1";
import { CASE_STUDIES_DASHBOARD_OPS_1_META, CaseStudiesDashboardOps1 } from "./variants/case-studies/case-studies-dashboard-ops-1";
import { FAQ_DASHBOARD_OPS_1_META, FaqDashboardOps1 } from "./variants/faq/faq-dashboard-ops-1";
import { CTA_DASHBOARD_OPS_1_META, CtaDashboardOps1 } from "./variants/cta/cta-dashboard-ops-1";


// scaffold-variants batch — imports
import { HERO_PORTFOLIO_CRAFT_1_META, HeroPortfolioCraft1 } from "./variants/hero/hero-portfolio-craft-1";
import { HERO_PORTFOLIO_CRAFT_2_META, HeroPortfolioCraft2 } from "./variants/hero/hero-portfolio-craft-2";
import { FEATURES_PORTFOLIO_CRAFT_1_META, FeaturesPortfolioCraft1 } from "./variants/features/features-portfolio-craft-1";
import { TESTIMONIALS_PORTFOLIO_CRAFT_1_META, TestimonialsPortfolioCraft1 } from "./variants/testimonials/testimonials-portfolio-craft-1";
import { FAQ_PORTFOLIO_CRAFT_1_META, FaqPortfolioCraft1 } from "./variants/faq/faq-portfolio-craft-1";
import { BLOGLIST_PORTFOLIO_CRAFT_1_META, BloglistPortfolioCraft1 } from "./variants/blogList/bloglist-portfolio-craft-1";
import { CTA_PORTFOLIO_CRAFT_1_META, CtaPortfolioCraft1 } from "./variants/cta/cta-portfolio-craft-1";
import { CASE_STUDIES_PORTFOLIO_CRAFT_2_META, CaseStudiesPortfolioCraft2 } from "./variants/case-studies/case-studies-portfolio-craft-2";
import { TEAM_PORTFOLIO_CRAFT_1_META, TeamPortfolioCraft1 } from "./variants/team/team-portfolio-craft-1";
import { TEAM_PORTFOLIO_CRAFT_2_META, TeamPortfolioCraft2 } from "./variants/team/team-portfolio-craft-2";
import { CONTACT_PORTFOLIO_CRAFT_1_META, ContactPortfolioCraft1 } from "./variants/contact/contact-portfolio-craft-1";
import { FOOTER_CONTENT_PORTFOLIO_CRAFT_1_META, FooterContentPortfolioCraft1 } from "./variants/footer-content/footer-content-portfolio-craft-1";
import { LOGO_CLOUD_PORTFOLIO_CRAFT_1_META, LogoCloudPortfolioCraft1 } from "./variants/logo-cloud/logo-cloud-portfolio-craft-1";

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
  // scaffold-variants batch — entries
  [HERO_EDITORIAL_PREMIUM_2_META.id]: { meta: HERO_EDITORIAL_PREMIUM_2_META, component: HeroEditorialPremium2 },
  [FEATURES_EDITORIAL_PREMIUM_2_META.id]: { meta: FEATURES_EDITORIAL_PREMIUM_2_META, component: FeaturesEditorialPremium2 },
  [TESTIMONIALS_EDITORIAL_PREMIUM_1_META.id]: { meta: TESTIMONIALS_EDITORIAL_PREMIUM_1_META, component: TestimonialsEditorialPremium1 },
  [TESTIMONIALS_EDITORIAL_PREMIUM_2_META.id]: { meta: TESTIMONIALS_EDITORIAL_PREMIUM_2_META, component: TestimonialsEditorialPremium2 },
  [FAQ_EDITORIAL_PREMIUM_1_META.id]: { meta: FAQ_EDITORIAL_PREMIUM_1_META, component: FaqEditorialPremium1 },
  [FAQ_EDITORIAL_PREMIUM_2_META.id]: { meta: FAQ_EDITORIAL_PREMIUM_2_META, component: FaqEditorialPremium2 },
  [BLOGLIST_EDITORIAL_PREMIUM_2_META.id]: { meta: BLOGLIST_EDITORIAL_PREMIUM_2_META, component: BloglistEditorialPremium2 },
  [BLOGLIST_EDITORIAL_PREMIUM_3_META.id]: { meta: BLOGLIST_EDITORIAL_PREMIUM_3_META, component: BloglistEditorialPremium3 },
  [CTA_EDITORIAL_PREMIUM_1_META.id]: { meta: CTA_EDITORIAL_PREMIUM_1_META, component: CtaEditorialPremium1 },
  [CTA_EDITORIAL_PREMIUM_2_META.id]: { meta: CTA_EDITORIAL_PREMIUM_2_META, component: CtaEditorialPremium2 },
  [NEWSLETTER_EDITORIAL_PREMIUM_1_META.id]: { meta: NEWSLETTER_EDITORIAL_PREMIUM_1_META, component: NewsletterEditorialPremium1 },
  [NEWSLETTER_EDITORIAL_PREMIUM_2_META.id]: { meta: NEWSLETTER_EDITORIAL_PREMIUM_2_META, component: NewsletterEditorialPremium2 },
  [STATS_BAND_EDITORIAL_PREMIUM_1_META.id]: { meta: STATS_BAND_EDITORIAL_PREMIUM_1_META, component: StatsBandEditorialPremium1 },
  [PROCESS_STEPS_EDITORIAL_PREMIUM_1_META.id]: { meta: PROCESS_STEPS_EDITORIAL_PREMIUM_1_META, component: ProcessStepsEditorialPremium1 },
  [LOGO_CLOUD_EDITORIAL_PREMIUM_1_META.id]: { meta: LOGO_CLOUD_EDITORIAL_PREMIUM_1_META, component: LogoCloudEditorialPremium1 },
  [CASE_STUDIES_EDITORIAL_PREMIUM_1_META.id]: { meta: CASE_STUDIES_EDITORIAL_PREMIUM_1_META, component: CaseStudiesEditorialPremium1 },
  [CASE_STUDIES_EDITORIAL_PREMIUM_2_META.id]: { meta: CASE_STUDIES_EDITORIAL_PREMIUM_2_META, component: CaseStudiesEditorialPremium2 },
  [PRICING_EDITORIAL_PREMIUM_1_META.id]: { meta: PRICING_EDITORIAL_PREMIUM_1_META, component: PricingEditorialPremium1 },
  [TEAM_EDITORIAL_PREMIUM_1_META.id]: { meta: TEAM_EDITORIAL_PREMIUM_1_META, component: TeamEditorialPremium1 },
  [TEAM_EDITORIAL_PREMIUM_2_META.id]: { meta: TEAM_EDITORIAL_PREMIUM_2_META, component: TeamEditorialPremium2 },
  [CONTACT_EDITORIAL_PREMIUM_1_META.id]: { meta: CONTACT_EDITORIAL_PREMIUM_1_META, component: ContactEditorialPremium1 },
  [FOOTER_CONTENT_EDITORIAL_PREMIUM_1_META.id]: { meta: FOOTER_CONTENT_EDITORIAL_PREMIUM_1_META, component: FooterContentEditorialPremium1 },
  [FOOTER_CONTENT_EDITORIAL_PREMIUM_2_META.id]: { meta: FOOTER_CONTENT_EDITORIAL_PREMIUM_2_META, component: FooterContentEditorialPremium2 },

  // scaffold-variants batch — entries
  [HERO_BOLD_CONSUMER_2_META.id]: { meta: HERO_BOLD_CONSUMER_2_META, component: HeroBoldConsumer2 },
  [HERO_BOLD_CONSUMER_3_META.id]: { meta: HERO_BOLD_CONSUMER_3_META, component: HeroBoldConsumer3 },
  [FEATURES_BOLD_CONSUMER_1_META.id]: { meta: FEATURES_BOLD_CONSUMER_1_META, component: FeaturesBoldConsumer1 },
  [FEATURES_BOLD_CONSUMER_2_META.id]: { meta: FEATURES_BOLD_CONSUMER_2_META, component: FeaturesBoldConsumer2 },
  [TESTIMONIALS_BOLD_CONSUMER_1_META.id]: { meta: TESTIMONIALS_BOLD_CONSUMER_1_META, component: TestimonialsBoldConsumer1 },
  [TESTIMONIALS_BOLD_CONSUMER_2_META.id]: { meta: TESTIMONIALS_BOLD_CONSUMER_2_META, component: TestimonialsBoldConsumer2 },
  [FAQ_BOLD_CONSUMER_1_META.id]: { meta: FAQ_BOLD_CONSUMER_1_META, component: FaqBoldConsumer1 },
  [BLOGLIST_BOLD_CONSUMER_1_META.id]: { meta: BLOGLIST_BOLD_CONSUMER_1_META, component: BloglistBoldConsumer1 },
  [CTA_BOLD_CONSUMER_2_META.id]: { meta: CTA_BOLD_CONSUMER_2_META, component: CtaBoldConsumer2 },
  [NEWSLETTER_BOLD_CONSUMER_1_META.id]: { meta: NEWSLETTER_BOLD_CONSUMER_1_META, component: NewsletterBoldConsumer1 },
  [STATS_BAND_BOLD_CONSUMER_1_META.id]: { meta: STATS_BAND_BOLD_CONSUMER_1_META, component: StatsBandBoldConsumer1 },
  [PROCESS_STEPS_BOLD_CONSUMER_1_META.id]: { meta: PROCESS_STEPS_BOLD_CONSUMER_1_META, component: ProcessStepsBoldConsumer1 },
  [LOGO_CLOUD_BOLD_CONSUMER_1_META.id]: { meta: LOGO_CLOUD_BOLD_CONSUMER_1_META, component: LogoCloudBoldConsumer1 },
  [CASE_STUDIES_BOLD_CONSUMER_1_META.id]: { meta: CASE_STUDIES_BOLD_CONSUMER_1_META, component: CaseStudiesBoldConsumer1 },
  [PRICING_BOLD_CONSUMER_1_META.id]: { meta: PRICING_BOLD_CONSUMER_1_META, component: PricingBoldConsumer1 },
  [TEAM_BOLD_CONSUMER_1_META.id]: { meta: TEAM_BOLD_CONSUMER_1_META, component: TeamBoldConsumer1 },
  [CONTACT_BOLD_CONSUMER_1_META.id]: { meta: CONTACT_BOLD_CONSUMER_1_META, component: ContactBoldConsumer1 },

  // scaffold-variants batch — entries
  [HERO_AI_PRODUCT_2_META.id]: { meta: HERO_AI_PRODUCT_2_META, component: HeroAiProduct2 },
  [HERO_AI_PRODUCT_3_META.id]: { meta: HERO_AI_PRODUCT_3_META, component: HeroAiProduct3 },
  [FEATURES_AI_PRODUCT_1_META.id]: { meta: FEATURES_AI_PRODUCT_1_META, component: FeaturesAiProduct1 },
  [FEATURES_AI_PRODUCT_2_META.id]: { meta: FEATURES_AI_PRODUCT_2_META, component: FeaturesAiProduct2 },
  [TESTIMONIALS_AI_PRODUCT_1_META.id]: { meta: TESTIMONIALS_AI_PRODUCT_1_META, component: TestimonialsAiProduct1 },
  [TESTIMONIALS_AI_PRODUCT_2_META.id]: { meta: TESTIMONIALS_AI_PRODUCT_2_META, component: TestimonialsAiProduct2 },
  [FAQ_AI_PRODUCT_1_META.id]: { meta: FAQ_AI_PRODUCT_1_META, component: FaqAiProduct1 },
  [BLOGLIST_AI_PRODUCT_1_META.id]: { meta: BLOGLIST_AI_PRODUCT_1_META, component: BloglistAiProduct1 },
  [CTA_AI_PRODUCT_1_META.id]: { meta: CTA_AI_PRODUCT_1_META, component: CtaAiProduct1 },
  [CTA_AI_PRODUCT_2_META.id]: { meta: CTA_AI_PRODUCT_2_META, component: CtaAiProduct2 },
  [NEWSLETTER_AI_PRODUCT_1_META.id]: { meta: NEWSLETTER_AI_PRODUCT_1_META, component: NewsletterAiProduct1 },
  [STATS_BAND_AI_PRODUCT_1_META.id]: { meta: STATS_BAND_AI_PRODUCT_1_META, component: StatsBandAiProduct1 },
  [PROCESS_STEPS_AI_PRODUCT_1_META.id]: { meta: PROCESS_STEPS_AI_PRODUCT_1_META, component: ProcessStepsAiProduct1 },
  [LOGO_CLOUD_AI_PRODUCT_1_META.id]: { meta: LOGO_CLOUD_AI_PRODUCT_1_META, component: LogoCloudAiProduct1 },
  [CASE_STUDIES_AI_PRODUCT_1_META.id]: { meta: CASE_STUDIES_AI_PRODUCT_1_META, component: CaseStudiesAiProduct1 },
  [PRICING_AI_PRODUCT_1_META.id]: { meta: PRICING_AI_PRODUCT_1_META, component: PricingAiProduct1 },
  [TEAM_AI_PRODUCT_1_META.id]: { meta: TEAM_AI_PRODUCT_1_META, component: TeamAiProduct1 },
  [CONTACT_AI_PRODUCT_1_META.id]: { meta: CONTACT_AI_PRODUCT_1_META, component: ContactAiProduct1 },
  [FOOTER_CONTENT_AI_PRODUCT_1_META.id]: { meta: FOOTER_CONTENT_AI_PRODUCT_1_META, component: FooterContentAiProduct1 },

  // scaffold-variants batch — entries
  [HERO_STARTUP_CONVERSION_1_META.id]: { meta: HERO_STARTUP_CONVERSION_1_META, component: HeroStartupConversion1 },
  [HERO_STARTUP_CONVERSION_2_META.id]: { meta: HERO_STARTUP_CONVERSION_2_META, component: HeroStartupConversion2 },
  [FEATURES_STARTUP_CONVERSION_1_META.id]: { meta: FEATURES_STARTUP_CONVERSION_1_META, component: FeaturesStartupConversion1 },
  [FEATURES_STARTUP_CONVERSION_2_META.id]: { meta: FEATURES_STARTUP_CONVERSION_2_META, component: FeaturesStartupConversion2 },
  [TESTIMONIALS_STARTUP_CONVERSION_1_META.id]: { meta: TESTIMONIALS_STARTUP_CONVERSION_1_META, component: TestimonialsStartupConversion1 },
  [FAQ_STARTUP_CONVERSION_1_META.id]: { meta: FAQ_STARTUP_CONVERSION_1_META, component: FaqStartupConversion1 },
  [BLOGLIST_STARTUP_CONVERSION_1_META.id]: { meta: BLOGLIST_STARTUP_CONVERSION_1_META, component: BloglistStartupConversion1 },
  [CTA_STARTUP_CONVERSION_1_META.id]: { meta: CTA_STARTUP_CONVERSION_1_META, component: CtaStartupConversion1 },
  [CTA_STARTUP_CONVERSION_2_META.id]: { meta: CTA_STARTUP_CONVERSION_2_META, component: CtaStartupConversion2 },
  [NEWSLETTER_STARTUP_CONVERSION_2_META.id]: { meta: NEWSLETTER_STARTUP_CONVERSION_2_META, component: NewsletterStartupConversion2 },
  [STATS_BAND_STARTUP_CONVERSION_1_META.id]: { meta: STATS_BAND_STARTUP_CONVERSION_1_META, component: StatsBandStartupConversion1 },
  [PROCESS_STEPS_STARTUP_CONVERSION_1_META.id]: { meta: PROCESS_STEPS_STARTUP_CONVERSION_1_META, component: ProcessStepsStartupConversion1 },
  [LOGO_CLOUD_STARTUP_CONVERSION_1_META.id]: { meta: LOGO_CLOUD_STARTUP_CONVERSION_1_META, component: LogoCloudStartupConversion1 },
  [PRICING_STARTUP_CONVERSION_1_META.id]: { meta: PRICING_STARTUP_CONVERSION_1_META, component: PricingStartupConversion1 },
  [TEAM_STARTUP_CONVERSION_1_META.id]: { meta: TEAM_STARTUP_CONVERSION_1_META, component: TeamStartupConversion1 },
  [CONTACT_STARTUP_CONVERSION_1_META.id]: { meta: CONTACT_STARTUP_CONVERSION_1_META, component: ContactStartupConversion1 },

  // scaffold-variants batch — entries
  [HERO_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: HERO_LOCAL_BUSINESS_TRUST_1_META, component: HeroLocalBusinessTrust1 },
  [HERO_LOCAL_BUSINESS_TRUST_2_META.id]: { meta: HERO_LOCAL_BUSINESS_TRUST_2_META, component: HeroLocalBusinessTrust2 },
  [HERO_LOCAL_BUSINESS_TRUST_PREMIUM_SPLIT_META.id]: { meta: HERO_LOCAL_BUSINESS_TRUST_PREMIUM_SPLIT_META, component: HeroLocalBusinessTrustPremiumSplit },
  [FEATURES_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: FEATURES_LOCAL_BUSINESS_TRUST_1_META, component: FeaturesLocalBusinessTrust1 },
  [FEATURES_LOCAL_BUSINESS_TRUST_2_META.id]: { meta: FEATURES_LOCAL_BUSINESS_TRUST_2_META, component: FeaturesLocalBusinessTrust2 },
  [FEATURES_LOCAL_BUSINESS_TRUST_MEDIA_CARDS_META.id]: { meta: FEATURES_LOCAL_BUSINESS_TRUST_MEDIA_CARDS_META, component: FeaturesLocalBusinessTrustMediaCards },
  [TESTIMONIALS_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: TESTIMONIALS_LOCAL_BUSINESS_TRUST_1_META, component: TestimonialsLocalBusinessTrust1 },
  [TESTIMONIALS_LOCAL_BUSINESS_TRUST_EDITORIAL_STACK_META.id]: {
    meta: TESTIMONIALS_LOCAL_BUSINESS_TRUST_EDITORIAL_STACK_META,
    component: TestimonialsLocalBusinessTrustEditorialStack,
  },
  [FAQ_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: FAQ_LOCAL_BUSINESS_TRUST_1_META, component: FaqLocalBusinessTrust1 },
  [BLOGLIST_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: BLOGLIST_LOCAL_BUSINESS_TRUST_1_META, component: BloglistLocalBusinessTrust1 },
  [CTA_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: CTA_LOCAL_BUSINESS_TRUST_1_META, component: CtaLocalBusinessTrust1 },
  [CTA_LOCAL_BUSINESS_TRUST_2_META.id]: { meta: CTA_LOCAL_BUSINESS_TRUST_2_META, component: CtaLocalBusinessTrust2 },
  [NEWSLETTER_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: NEWSLETTER_LOCAL_BUSINESS_TRUST_1_META, component: NewsletterLocalBusinessTrust1 },
  [STATS_BAND_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: STATS_BAND_LOCAL_BUSINESS_TRUST_1_META, component: StatsBandLocalBusinessTrust1 },
  [LOGO_CLOUD_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: LOGO_CLOUD_LOCAL_BUSINESS_TRUST_1_META, component: LogoCloudLocalBusinessTrust1 },
  [CASE_STUDIES_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: CASE_STUDIES_LOCAL_BUSINESS_TRUST_1_META, component: CaseStudiesLocalBusinessTrust1 },
  [CASE_STUDIES_LOCAL_BUSINESS_TRUST_GALLERY_META.id]: { meta: CASE_STUDIES_LOCAL_BUSINESS_TRUST_GALLERY_META, component: CaseStudiesLocalBusinessTrustGallery },
  [PRICING_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: PRICING_LOCAL_BUSINESS_TRUST_1_META, component: PricingLocalBusinessTrust1 },
  [PRICING_LOCAL_BUSINESS_TRUST_PLAN_CARDS_META.id]: { meta: PRICING_LOCAL_BUSINESS_TRUST_PLAN_CARDS_META, component: PricingLocalBusinessTrustPlanCards },
  [PRICING_LOCAL_BUSINESS_TRUST_CONVERSION_GRID_META.id]: {
    meta: PRICING_LOCAL_BUSINESS_TRUST_CONVERSION_GRID_META,
    component: PricingLocalBusinessTrustConversionGrid,
  },
  [TEAM_LOCAL_BUSINESS_TRUST_1_META.id]: { meta: TEAM_LOCAL_BUSINESS_TRUST_1_META, component: TeamLocalBusinessTrust1 },
  [CONTACT_LOCAL_BUSINESS_TRUST_CONCIERGE_META.id]: {
    meta: CONTACT_LOCAL_BUSINESS_TRUST_CONCIERGE_META,
    component: ContactLocalBusinessTrustConcierge,
  },
  [FOOTER_CONTENT_LOCAL_BUSINESS_TRUST_PREMIUM_META.id]: {
    meta: FOOTER_CONTENT_LOCAL_BUSINESS_TRUST_PREMIUM_META,
    component: FooterContentLocalBusinessTrustPremium,
  },

  // scaffold-variants batch — entries
  [HERO_DASHBOARD_OPS_1_META.id]: { meta: HERO_DASHBOARD_OPS_1_META, component: HeroDashboardOps1 },
  [FEATURES_DASHBOARD_OPS_1_META.id]: { meta: FEATURES_DASHBOARD_OPS_1_META, component: FeaturesDashboardOps1 },
  [STATS_BAND_DASHBOARD_OPS_1_META.id]: { meta: STATS_BAND_DASHBOARD_OPS_1_META, component: StatsBandDashboardOps1 },
  [PROCESS_STEPS_DASHBOARD_OPS_1_META.id]: { meta: PROCESS_STEPS_DASHBOARD_OPS_1_META, component: ProcessStepsDashboardOps1 },
  [CASE_STUDIES_DASHBOARD_OPS_1_META.id]: { meta: CASE_STUDIES_DASHBOARD_OPS_1_META, component: CaseStudiesDashboardOps1 },
  [FAQ_DASHBOARD_OPS_1_META.id]: { meta: FAQ_DASHBOARD_OPS_1_META, component: FaqDashboardOps1 },
  [CTA_DASHBOARD_OPS_1_META.id]: { meta: CTA_DASHBOARD_OPS_1_META, component: CtaDashboardOps1 },

  // scaffold-variants batch — entries
  [HERO_PORTFOLIO_CRAFT_1_META.id]: { meta: HERO_PORTFOLIO_CRAFT_1_META, component: HeroPortfolioCraft1 },
  [HERO_PORTFOLIO_CRAFT_2_META.id]: { meta: HERO_PORTFOLIO_CRAFT_2_META, component: HeroPortfolioCraft2 },
  [FEATURES_PORTFOLIO_CRAFT_1_META.id]: { meta: FEATURES_PORTFOLIO_CRAFT_1_META, component: FeaturesPortfolioCraft1 },
  [TESTIMONIALS_PORTFOLIO_CRAFT_1_META.id]: { meta: TESTIMONIALS_PORTFOLIO_CRAFT_1_META, component: TestimonialsPortfolioCraft1 },
  [FAQ_PORTFOLIO_CRAFT_1_META.id]: { meta: FAQ_PORTFOLIO_CRAFT_1_META, component: FaqPortfolioCraft1 },
  [BLOGLIST_PORTFOLIO_CRAFT_1_META.id]: { meta: BLOGLIST_PORTFOLIO_CRAFT_1_META, component: BloglistPortfolioCraft1 },
  [CTA_PORTFOLIO_CRAFT_1_META.id]: { meta: CTA_PORTFOLIO_CRAFT_1_META, component: CtaPortfolioCraft1 },
  [CASE_STUDIES_PORTFOLIO_CRAFT_2_META.id]: { meta: CASE_STUDIES_PORTFOLIO_CRAFT_2_META, component: CaseStudiesPortfolioCraft2 },
  [TEAM_PORTFOLIO_CRAFT_1_META.id]: { meta: TEAM_PORTFOLIO_CRAFT_1_META, component: TeamPortfolioCraft1 },
  [TEAM_PORTFOLIO_CRAFT_2_META.id]: { meta: TEAM_PORTFOLIO_CRAFT_2_META, component: TeamPortfolioCraft2 },
  [CONTACT_PORTFOLIO_CRAFT_1_META.id]: { meta: CONTACT_PORTFOLIO_CRAFT_1_META, component: ContactPortfolioCraft1 },
  [FOOTER_CONTENT_PORTFOLIO_CRAFT_1_META.id]: { meta: FOOTER_CONTENT_PORTFOLIO_CRAFT_1_META, component: FooterContentPortfolioCraft1 },
  [LOGO_CLOUD_PORTFOLIO_CRAFT_1_META.id]: { meta: LOGO_CLOUD_PORTFOLIO_CRAFT_1_META, component: LogoCloudPortfolioCraft1 },

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
