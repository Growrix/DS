import { z } from "zod";

const runtimeSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
  AUTH_SECRET: z.string().min(16).optional(),
  PREVIEW_TOKEN: z.string().min(12).optional(),
  DATABASE_URL: z.url().optional(),
  RESEND_API_KEY: z.string().min(10).optional(),
  EMAIL_FROM: z.email().optional(),
  S3_BUCKET: z.string().min(3).optional(),
  S3_REGION: z.string().min(2).optional(),
  S3_ACCESS_KEY_ID: z.string().min(4).optional(),
  S3_SECRET_ACCESS_KEY: z.string().min(8).optional(),
  ANALYTICS_WRITE_KEY: z.string().min(6).optional(),
  BILLING_PROVIDER_SECRET: z.string().min(6).optional(),
});

export type RuntimeEnv = z.infer<typeof runtimeSchema>;

let cachedEnv: RuntimeEnv | null = null;

export function resetRuntimeEnvForTests() {
  cachedEnv = null;
}

export function getRuntimeEnv(): RuntimeEnv {
  if (cachedEnv) {
    return cachedEnv;
  }

  const parsed = runtimeSchema.safeParse(process.env);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`);
    throw new Error(`Invalid Foundation-Core environment: ${issues.join("; ")}`);
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}

export function getAdapterStatus() {
  const env = getRuntimeEnv();

  return {
    auth: Boolean(env.AUTH_SECRET),
    preview: Boolean(env.PREVIEW_TOKEN),
    database: Boolean(env.DATABASE_URL),
    email: Boolean(env.RESEND_API_KEY && env.EMAIL_FROM),
    storage: Boolean(
      env.S3_BUCKET && env.S3_REGION && env.S3_ACCESS_KEY_ID && env.S3_SECRET_ACCESS_KEY,
    ),
    analytics: Boolean(env.ANALYTICS_WRITE_KEY),
    billing: Boolean(env.BILLING_PROVIDER_SECRET),
  };
}