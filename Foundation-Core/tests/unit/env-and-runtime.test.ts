import { beforeEach, describe, expect, it } from "vitest";

import { getAdapterStatus, getRuntimeEnv, resetRuntimeEnvForTests } from "@/server/config/env";
import { getSessionSnapshot } from "@/server/modules/auth/session.service";
import { getFoundationSummary } from "@/server/modules/health/health.service";
import { createUploadIntent } from "@/server/modules/media/media.service";

const managedKeys = [
  "NEXT_PUBLIC_SITE_URL",
  "AUTH_SECRET",
  "PREVIEW_TOKEN",
  "DATABASE_URL",
  "RESEND_API_KEY",
  "EMAIL_FROM",
  "S3_BUCKET",
  "S3_REGION",
  "S3_ACCESS_KEY_ID",
  "S3_SECRET_ACCESS_KEY",
  "ANALYTICS_WRITE_KEY",
  "BILLING_PROVIDER_SECRET",
] as const;

describe("runtime env and adapter surfaces", () => {
  beforeEach(() => {
    for (const key of managedKeys) {
      delete process.env[key];
    }

    resetRuntimeEnvForTests();
  });

  it("returns safe defaults when optional adapters are missing", () => {
    const env = getRuntimeEnv();
    const adapters = getAdapterStatus();

    expect(env.NEXT_PUBLIC_SITE_URL).toBe("http://localhost:3000");
    expect(adapters.auth).toBe(false);
    expect(adapters.storage).toBe(false);
  });

  it("reports configured adapters when env values are present", () => {
    process.env.AUTH_SECRET = "1234567890abcdef";
    process.env.PREVIEW_TOKEN = "preview-secret-token";
    process.env.DATABASE_URL = "https://db.example.com/runtime";
    process.env.RESEND_API_KEY = "resend-key-12345";
    process.env.EMAIL_FROM = "ops@example.com";
    process.env.S3_BUCKET = "foundation-bucket";
    process.env.S3_REGION = "us-east-1";
    process.env.S3_ACCESS_KEY_ID = "access-key";
    process.env.S3_SECRET_ACCESS_KEY = "secret-key-123";
    process.env.ANALYTICS_WRITE_KEY = "analytics-key";
    process.env.BILLING_PROVIDER_SECRET = "billing-key";
    resetRuntimeEnvForTests();

    const adapters = getAdapterStatus();

    expect(adapters.auth).toBe(true);
    expect(adapters.preview).toBe(true);
    expect(adapters.database).toBe(true);
    expect(adapters.email).toBe(true);
    expect(adapters.storage).toBe(true);
    expect(adapters.analytics).toBe(true);
    expect(adapters.billing).toBe(true);
  });

  it("keeps the session in anonymous fallback mode until auth is configured", () => {
    expect(getSessionSnapshot().mode).toBe("anonymous_fallback");
  });

  it("reports production-capable status when auth and preview are configured", () => {
    process.env.AUTH_SECRET = "1234567890abcdef";
    process.env.PREVIEW_TOKEN = "preview-secret-token";
    resetRuntimeEnvForTests();

    expect(getFoundationSummary().status).toBe("production-capable");
  });

  it("creates enabled upload intents when storage is configured", () => {
    process.env.S3_BUCKET = "foundation-bucket";
    process.env.S3_REGION = "us-east-1";
    process.env.S3_ACCESS_KEY_ID = "access-key";
    process.env.S3_SECRET_ACCESS_KEY = "secret-key-123";
    resetRuntimeEnvForTests();

    const intent = createUploadIntent("hero.jpg", "image/jpeg");
    expect(intent.enabled).toBe(true);
    if (intent.enabled) {
      expect(intent.uploadUrl).toContain("hero.jpg");
    }
  });

  it("returns disabled upload intents when storage is missing", () => {
    const intent = createUploadIntent("hero.jpg", "image/jpeg");
    expect(intent.enabled).toBe(false);
  });
});