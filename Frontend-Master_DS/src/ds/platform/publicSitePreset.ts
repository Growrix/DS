import type {
  SiteConfig,
  SiteFooterAttribution,
  SiteFooterColumn,
} from "./siteConfig";
import type { ArchetypeId } from "../foundation/themes/archetypeRegistry";

export type PublicSectionHeaderModel = {
  kicker?: string;
  title?: string;
  lede?: string;
};

/** Optional media descriptor used by hero variants and image-led sections. */
export type PublicMediaModel = {
  /** Image URL. Variants render a token-derived placeholder if absent. */
  src?: string;
  alt?: string;
  /** "cover" / "contain" / "fill". Defaults to "cover". */
  fit?: "cover" | "contain" | "fill";
  /** Focal point hint, e.g. "75% 30%". */
  position?: string;
};

/** Shared shape for action buttons across section variants. */
export type PublicActionModel = { label: string; href: string };

export type PublicSectionModel =
  | {
      id: string;
      kind: "hero";
      /** Variant id from the section registry. If absent, default variant is used. */
      variant?: string;
      kicker?: string;
      title: string;
      lede?: string;
      primaryAction?: PublicActionModel;
      secondaryAction?: PublicActionModel;
      /** Optional hero media (used by photographic variants). */
      media?: PublicMediaModel;
      /** Optional trust chips rendered below CTAs by trust-oriented variants. */
      trustChips?: Array<{ id: string; label: string; icon?: string }>;
    }
  | {
      id: string;
      kind: "features";
      variant?: string;
      header?: PublicSectionHeaderModel;
      features: Array<{ id: string; title: string; description?: string; icon?: string; media?: PublicMediaModel }>;
    }
  | {
      id: string;
      kind: "testimonials";
      variant?: string;
      header?: PublicSectionHeaderModel;
      items: Array<{ id: string; quote: string; name: string; meta?: string; avatar?: PublicMediaModel }>;
    }
  | {
      id: string;
      kind: "faq";
      variant?: string;
      header?: PublicSectionHeaderModel;
      items: Array<{ id: string; q: string; a: string }>;
    }
  | {
      id: string;
      kind: "blogList";
      variant?: string;
      header?: PublicSectionHeaderModel;
      posts: Array<{ id: string; title: string; excerpt?: string; href: string }>;
    }
  | {
      id: string;
      kind: "cta";
      variant?: string;
      header?: PublicSectionHeaderModel;
      body?: string;
      primaryAction?: PublicActionModel;
      secondaryAction?: PublicActionModel;
      media?: PublicMediaModel;
    }
  | {
      id: string;
      kind: "newsletter";
      variant?: string;
      header?: PublicSectionHeaderModel;
      title?: string;
    }
  | {
      id: string;
      kind: "stats-band";
      variant?: string;
      header?: PublicSectionHeaderModel;
      stats: Array<{ id: string; value: string; label: string; sublabel?: string }>;
    }
  | {
      id: string;
      kind: "process-steps";
      variant?: string;
      header?: PublicSectionHeaderModel;
      steps: Array<{ id: string; number?: string; title: string; description?: string; icon?: string }>;
    }
  | {
      id: string;
      kind: "logo-cloud";
      variant?: string;
      header?: PublicSectionHeaderModel;
      logos: Array<{ id: string; label: string; href?: string; media?: PublicMediaModel }>;
    }
  | {
      id: string;
      kind: "case-studies";
      variant?: string;
      header?: PublicSectionHeaderModel;
      items: Array<{
        id: string;
        title: string;
        excerpt?: string;
        href: string;
        media?: PublicMediaModel;
        tags?: string[];
      }>;
    }
  | {
      id: string;
      kind: "pricing";
      variant?: string;
      header?: PublicSectionHeaderModel;
      /** Optional billing-cadence toggle. Variants that don't render a toggle ignore this. */
      billingToggle?: { monthlyLabel: string; yearlyLabel: string; defaultCadence?: "monthly" | "yearly" };
      tiers: Array<{
        id: string;
        name: string;
        price: { monthly: string; yearly?: string; suffix?: string };
        description?: string;
        features: string[];
        cta: PublicActionModel;
        /** Optional badge text (e.g. "Most popular"). */
        badge?: string;
        /** Variants render this tier with emphasis (border, scale, accent). */
        highlight?: boolean;
      }>;
      /** Optional inline disclaimer below tiers. */
      footnote?: string;
    }
  | {
      id: string;
      kind: "team";
      variant?: string;
      header?: PublicSectionHeaderModel;
      members: Array<{
        id: string;
        name: string;
        role: string;
        bio?: string;
        avatar?: PublicMediaModel;
        socials?: Array<{ id: string; label: string; href: string; icon?: string }>;
      }>;
    }
  | {
      id: string;
      kind: "contact";
      variant?: string;
      header?: PublicSectionHeaderModel;
      /** Direct contact channels. Variants may render as cards, list, or sidebar. */
      channels?: Array<{
        id: string;
        kind: "email" | "phone" | "address" | "whatsapp" | "hours";
        label: string;
        value: string;
        href?: string;
        icon?: string;
      }>;
      /** Optional inline contact form. Variants without form render channels only. */
      form?: {
        fields: Array<{
          id: string;
          label: string;
          type: "text" | "email" | "tel" | "textarea" | "select";
          required?: boolean;
          placeholder?: string;
          options?: Array<{ value: string; label: string }>;
        }>;
        submitLabel: string;
        consentNote?: string;
      };
      /** Optional map embed. Variants without map ignore this. */
      map?: {
        embedUrl?: string;
        lat?: number;
        lng?: number;
        zoom?: number;
        alt?: string;
      };
    }
  | {
      id: string;
      kind: "footer-content";
      variant?: string;
      /** Brand block — overrides siteConfig.brand when present. */
      brand?: { name: string; tagline?: string; logo?: PublicMediaModel };
      columns?: SiteFooterColumn[];
      newsletter?: {
        title: string;
        description?: string;
        placeholder: string;
        submitLabel: string;
        consentNote?: string;
      };
      socials?: Array<{ id: string; label: string; href: string; icon?: string }>;
      appLinks?: {
        appStore?: { href: string; alt: string };
        playStore?: { href: string; alt: string };
      };
      legalLinks?: Array<{ id: string; label: string; href: string }>;
      attribution?: SiteFooterAttribution;
    };

export type PublicPageModel = {
  id: string;
  title: string;
  /** Optional archetype hint. Drives default variant resolution when section.variant is absent. */
  archetype?: ArchetypeId;
  sections: PublicSectionModel[];
};

export type PublicSitePreset = {
  id: string;
  label: string;
  /** Site-wide archetype. Pages may override per-page. */
  archetype?: ArchetypeId;
  config: SiteConfig;
  pages: Record<string, PublicPageModel>;
};
