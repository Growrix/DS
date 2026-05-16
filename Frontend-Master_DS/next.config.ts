import type { NextConfig } from "next";

import { buildSecurityHeaders } from "./src/ds/platform/csp";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    // In development, disable CSP headers to allow Next.js hydration scripts
    // In production, strict CSP is enforced
    if (process.env.NODE_ENV === "development") {
      return [];
    }
    return [
      {
        source: "/:path*",
        headers: buildSecurityHeaders().map(({ key, value }) => ({ key, value })),
      },
    ];
  },
};

export default nextConfig;
