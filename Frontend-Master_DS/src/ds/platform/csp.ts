/**
 * Content-Security-Policy helpers.
 *
 * Phase 12J: ships a strict, project-tunable default CSP for the DS.
 * Projects that need to extend (analytics, embeds, fonts) call
 * `buildCspHeader({ extra })` from their own next.config or middleware.
 *
 * The DS itself only ships first-party content; the default policy
 * therefore disallows third-party origins. Projects that allowlist
 * additional origins are responsible for the security review of
 * that decision.
 */

export type CspExtensions = {
  scriptSrc?: string[];
  styleSrc?: string[];
  imgSrc?: string[];
  fontSrc?: string[];
  connectSrc?: string[];
  frameSrc?: string[];
  mediaSrc?: string[];
};

export type BuildCspOptions = {
  /** When true, emit Report-Only directives suitable for staging. */
  reportOnly?: boolean;
  /** Project-supplied origin allowlists, merged per directive. */
  extra?: CspExtensions;
  /** Optional nonce — if supplied, attached to script-src. */
  nonce?: string;
};

const BASE_DIRECTIVES: Required<CspExtensions> & { defaultSrc: string[]; objectSrc: string[]; baseUri: string[]; formAction: string[]; frameAncestors: string[]; upgradeInsecureRequests: string[] } = {
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'"],
  styleSrc: ["'self'", "'unsafe-inline'"], // Next CSS-in-JS still needs inline; revisit with nonce pipeline.
  imgSrc: ["'self'", "data:", "blob:"],
  fontSrc: ["'self'", "data:"],
  connectSrc: ["'self'"],
  frameSrc: ["'self'"],
  mediaSrc: ["'self'"],
  objectSrc: ["'none'"],
  baseUri: ["'self'"],
  formAction: ["'self'"],
  frameAncestors: ["'none'"],
  upgradeInsecureRequests: [],
};

export function buildCspHeader({ extra, nonce }: BuildCspOptions = {}): string {
  const merged = {
    ...BASE_DIRECTIVES,
    scriptSrc: [...BASE_DIRECTIVES.scriptSrc, ...(extra?.scriptSrc ?? []), ...(nonce ? [`'nonce-${nonce}'`] : [])],
    styleSrc: [...BASE_DIRECTIVES.styleSrc, ...(extra?.styleSrc ?? [])],
    imgSrc: [...BASE_DIRECTIVES.imgSrc, ...(extra?.imgSrc ?? [])],
    fontSrc: [...BASE_DIRECTIVES.fontSrc, ...(extra?.fontSrc ?? [])],
    connectSrc: [...BASE_DIRECTIVES.connectSrc, ...(extra?.connectSrc ?? [])],
    frameSrc: [...BASE_DIRECTIVES.frameSrc, ...(extra?.frameSrc ?? [])],
    mediaSrc: [...BASE_DIRECTIVES.mediaSrc, ...(extra?.mediaSrc ?? [])],
  };

  const parts: string[] = [
    `default-src ${merged.defaultSrc.join(" ")}`,
    `script-src ${merged.scriptSrc.join(" ")}`,
    `style-src ${merged.styleSrc.join(" ")}`,
    `img-src ${merged.imgSrc.join(" ")}`,
    `font-src ${merged.fontSrc.join(" ")}`,
    `connect-src ${merged.connectSrc.join(" ")}`,
    `frame-src ${merged.frameSrc.join(" ")}`,
    `media-src ${merged.mediaSrc.join(" ")}`,
    `object-src ${merged.objectSrc.join(" ")}`,
    `base-uri ${merged.baseUri.join(" ")}`,
    `form-action ${merged.formAction.join(" ")}`,
    `frame-ancestors ${merged.frameAncestors.join(" ")}`,
    "upgrade-insecure-requests",
  ];
  return parts.join("; ");
}

export type SecurityHeader = { key: string; value: string };

export function buildSecurityHeaders(opts: BuildCspOptions = {}): SecurityHeader[] {
  const csp = buildCspHeader(opts);
  return [
    {
      key: opts.reportOnly ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy",
      value: csp,
    },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  ];
}
