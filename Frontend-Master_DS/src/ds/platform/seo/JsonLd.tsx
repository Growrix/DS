import * as React from "react";

type JsonLdProps = { data: Record<string, unknown> };

/**
 * Minimal helper that renders a `<script type="application/ld+json">`
 * with safely-encoded JSON. Used by all JSON-LD components in this
 * directory.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
