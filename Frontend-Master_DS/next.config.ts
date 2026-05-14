import type { NextConfig } from "next";

import { buildSecurityHeaders } from "./src/ds/platform/csp";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: buildSecurityHeaders().map(({ key, value }) => ({ key, value })),
      },
    ];
  },
};

export default nextConfig;
