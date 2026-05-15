import { getAdapterStatus, getRuntimeEnv } from "@/server/config/env";

export function getFoundationSummary() {
  const env = getRuntimeEnv();
  const adapters = getAdapterStatus();

  const requiredAdaptersReady = adapters.auth && adapters.preview;

  return {
    status: requiredAdaptersReady ? "production-capable" : "api-ready-with-fallbacks",
    runtime: {
      environment: env.NODE_ENV,
      siteUrl: env.NEXT_PUBLIC_SITE_URL,
    },
    adapters,
  };
}