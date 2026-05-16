export type ApiSuccess<T> = {
  ok: true;
  requestId: string;
  data: T;
};

export type ApiError = {
  ok: false;
  requestId: string;
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
};

export type ApiEnvelope<T> = ApiSuccess<T> | ApiError;

export type TemplateAttachStatus = {
  mode: "attached" | "mock-fallback";
  foundationBaseUrl: string | null;
  reachable: boolean;
  checkedAt: string;
};

export type SessionDto = {
  authenticated: boolean;
  user: null | {
    id: string;
    email: string;
    roles: string[];
  };
  mode: "anonymous_fallback" | "configured";
};

export type PageSection = {
  id: string;
  kind: "hero" | "value" | "proof" | "conversion" | "footer";
  title: string;
  body: string;
};

export type PageDto = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: PageSection[];
};

export type CollectionRecord = {
  id: string;
  title: string;
  summary: string;
};

export type SiteConfigDto = {
  brand: {
    name: string;
    supportEmail: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  footer: {
    attribution: {
      enabled: boolean;
      text: string;
      linkText: string;
      url: string;
    };
  };
};

export type LeadPersistenceResult = {
  persisted: boolean;
  mode: "database" | "disabled";
  leadId: number | null;
};

export type LeadEmailResult = {
  delivered: boolean;
  provider: "resend";
  messageId: string | null;
  reason: string | null;
};

export type LarkNotificationResult = {
  sent: boolean;
  reason: string | null;
};

export type RejectedSubmission = {
  accepted: false;
  code: "FORM_NOT_FOUND" | "HONEYPOT_TRIGGERED" | "RATE_LIMITED";
  message: string;
  retryAfterSeconds?: number;
};

export type AcceptedSubmission = {
  accepted: true;
  formId: string;
  lead: {
    name: string;
    email: string;
    message: string;
    phone: string | null;
  };
  persistence: LeadPersistenceResult;
  email: LeadEmailResult;
  notifications: {
    leadAccepted: LarkNotificationResult;
    emailFailed: LarkNotificationResult | null;
  };
};

export type ProcessSubmissionResult = RejectedSubmission | AcceptedSubmission;

export type UploadIntent =
  | {
      enabled: false;
      reason: string;
      filename: string;
      contentType: string;
    }
  | {
      enabled: true;
      filename: string;
      objectKey: string;
      contentType: string;
      uploadUrl: string;
      assetUrl: string | null;
      method: "PUT";
    };

export type TemplateNavigationItem = {
  label: string;
  href: string;
};

export type FooterAttribution = {
  enabled: boolean;
  text: string;
  linkText: string;
  url: string;
};