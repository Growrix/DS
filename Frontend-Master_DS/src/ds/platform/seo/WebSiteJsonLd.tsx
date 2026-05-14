import * as React from "react";

import { JsonLd } from "./JsonLd";

export type WebSiteJsonLdProps = {
  name: string;
  url: string;
  /** Optional `SearchAction` URL template (e.g., `https://x.com/search?q={q}`). */
  searchUrlTemplate?: string;
};

export function WebSiteJsonLd({ name, url, searchUrlTemplate }: WebSiteJsonLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
  };
  if (searchUrlTemplate) {
    data.potentialAction = {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: searchUrlTemplate },
      "query-input": "required name=q",
    };
  }
  return <JsonLd data={data} />;
}
