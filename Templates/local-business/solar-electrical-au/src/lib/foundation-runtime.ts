import { companyInfo as localCompanyInfo } from "@/lib/data/company";
import { faqs } from "@/lib/data/faq";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import type {
  ApiEnvelope,
  CollectionRecord,
  FooterAttribution,
  PageDto,
  ProcessSubmissionResult,
  SessionDto,
  SiteConfigDto,
  TemplateAttachStatus,
  TemplateNavigationItem,
  UploadIntent,
} from "@/lib/foundation-contract";
import type { CompanyInfo } from "@/types/service";

const foundationBaseUrl = process.env.FOUNDATION_BASE_URL?.replace(/\/$/, "") ?? null;

export const defaultNavigation: TemplateNavigationItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const defaultFooterAttribution: FooterAttribution = {
  enabled: true,
  text: "Built and Maintained by Growrix OS",
  linkText: "Built and Maintained by Growrix OS",
  url: "https://www.growrixos.com",
};

export function getFoundationBaseUrl() {
  return foundationBaseUrl;
}

export async function fetchFoundationEnvelope<T>(
  path: string,
  init?: RequestInit,
): Promise<ApiEnvelope<T> | null> {
  if (!foundationBaseUrl) {
    return null;
  }

  try {
    const response = await fetch(`${foundationBaseUrl}${path}`, {
      ...init,
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
    });

    const payload = (await response.json()) as ApiEnvelope<T>;
    return payload;
  } catch {
    return null;
  }
}

export async function getTemplateAttachStatus(): Promise<TemplateAttachStatus> {
  const health = await fetchFoundationEnvelope<{ status: string }>("/api/health");

  if (health?.ok) {
    return {
      mode: "attached",
      foundationBaseUrl,
      reachable: true,
      checkedAt: new Date().toISOString(),
    };
  }

  return {
    mode: "mock-fallback",
    foundationBaseUrl,
    reachable: false,
    checkedAt: new Date().toISOString(),
  };
}

export async function getFoundationSession(): Promise<SessionDto> {
  const session = await fetchFoundationEnvelope<SessionDto>("/api/auth/session");

  if (session?.ok) {
    return session.data;
  }

  return {
    authenticated: false,
    user: null,
    mode: "anonymous_fallback",
  };
}

export async function getFoundationSiteConfig(): Promise<SiteConfigDto | null> {
  const siteConfig = await fetchFoundationEnvelope<SiteConfigDto>("/api/content/site-config");

  return siteConfig?.ok ? siteConfig.data : null;
}

export async function getFoundationPage(slug: string): Promise<PageDto> {
  const page = await fetchFoundationEnvelope<PageDto>(`/api/content/pages/${slug}`);

  if (page?.ok) {
    return page.data;
  }

  return buildFallbackPage(slug);
}

export async function getFoundationCollection(collection: string): Promise<CollectionRecord[]> {
  const response = await fetchFoundationEnvelope<CollectionRecord[]>(`/api/content/collections/${collection}`);

  if (response?.ok) {
    return response.data;
  }

  return buildFallbackCollection(collection);
}

export function getFallbackSiteConfig(): SiteConfigDto {
  return {
    brand: {
      name: localCompanyInfo.name,
      supportEmail: localCompanyInfo.email,
    },
    navigation: defaultNavigation,
    footer: {
      attribution: defaultFooterAttribution,
    },
  };
}

export async function getResolvedSiteShell(): Promise<{
  attachStatus: TemplateAttachStatus;
  companyInfo: CompanyInfo;
  navigation: TemplateNavigationItem[];
  footerAttribution: FooterAttribution;
}> {
  const [attachStatus, siteConfig] = await Promise.all([
    getTemplateAttachStatus(),
    getFoundationSiteConfig(),
  ]);

  const resolvedConfig = siteConfig ?? getFallbackSiteConfig();

  return {
    attachStatus,
    companyInfo: {
      ...localCompanyInfo,
      name: resolvedConfig.brand.name || localCompanyInfo.name,
      email: resolvedConfig.brand.supportEmail || localCompanyInfo.email,
    },
    navigation:
      resolvedConfig.navigation.length > 0 ? resolvedConfig.navigation : defaultNavigation,
    footerAttribution: resolvedConfig.footer.attribution.enabled
      ? resolvedConfig.footer.attribution
      : defaultFooterAttribution,
  };
}

export function getFallbackSubmissionResult(
  formId: string,
  payload: { name: string; email: string; message: string; phone?: string },
): ProcessSubmissionResult {
  return {
    accepted: true,
    formId,
    lead: {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      phone: payload.phone ?? null,
    },
    persistence: {
      persisted: false,
      mode: "disabled",
      leadId: null,
    },
    email: {
      delivered: false,
      provider: "resend",
      messageId: null,
      reason: "TEMPLATE_FALLBACK_MODE",
    },
    notifications: {
      leadAccepted: {
        sent: false,
        reason: "TEMPLATE_FALLBACK_MODE",
      },
      emailFailed: null,
    },
  };
}

export function getFallbackUploadIntent(
  filename: string,
  contentType: string,
): UploadIntent {
  return {
    enabled: false,
    reason: "Foundation storage adapter is not attached.",
    filename,
    contentType,
  };
}

function buildFallbackPage(slug: string): PageDto {
  const pageTitle = slug === "home" ? localCompanyInfo.name : `${localCompanyInfo.name} | ${toTitleCase(slug)}`;

  return {
    slug,
    title: pageTitle,
    description: localCompanyInfo.description,
    updatedAt: new Date().toISOString(),
    sections: [
      {
        id: `${slug}-hero`,
        kind: "hero",
        title: localCompanyInfo.tagline,
        body: localCompanyInfo.description,
      },
      {
        id: `${slug}-services`,
        kind: "value",
        title: `Popular services for ${localCompanyInfo.name}`,
        body: services
          .slice(0, 3)
          .map((service) => service.title)
          .join(", "),
      },
      {
        id: `${slug}-proof`,
        kind: "proof",
        title: "Trusted local delivery",
        body: testimonials.slice(0, 2).map((item) => item.comment).join(" "),
      },
      {
        id: `${slug}-conversion`,
        kind: "conversion",
        title: "Request a quote",
        body: `Contact ${localCompanyInfo.email} or call ${localCompanyInfo.phone}.`,
      },
    ],
  };
}

function buildFallbackCollection(collection: string): CollectionRecord[] {
  if (collection === "services") {
    return services.map((service) => ({
      id: service.id,
      title: service.title,
      summary: service.description,
    }));
  }

  if (collection === "faq") {
    return faqs.map((faq) => ({
      id: faq.id,
      title: faq.question,
      summary: faq.answer,
    }));
  }

  if (collection === "testimonials") {
    return testimonials.map((item) => ({
      id: item.id,
      title: item.name,
      summary: item.comment,
    }));
  }

  return [];
}

function toTitleCase(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}