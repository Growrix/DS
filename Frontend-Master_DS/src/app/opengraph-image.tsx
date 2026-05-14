import { ImageResponse } from "next/og";

import { ACTIVE_SITE_PRESET } from "@/site";

/**
 * Default Open Graph image — renders the active preset's brand name on a
 * neutral background. Projects can override by adding an `opengraph-image`
 * file in any route segment.
 *
 * Uses the standard 1200x630 OG card size.
 */
export const runtime = "edge";

export const alt = "Open Graph card";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const brandName = ACTIVE_SITE_PRESET.config.brand?.name ?? ACTIVE_SITE_PRESET.label;
  const tagline = ACTIVE_SITE_PRESET.config.brand?.tagline;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#f8fafc",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.1 }}>{brandName}</div>
        {tagline ? (
          <div style={{ fontSize: 36, opacity: 0.8, marginTop: 24 }}>{tagline}</div>
        ) : null}
      </div>
    ),
    size,
  );
}
