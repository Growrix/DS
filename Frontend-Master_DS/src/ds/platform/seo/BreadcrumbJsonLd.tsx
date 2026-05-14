import * as React from "react";

import { JsonLd } from "./JsonLd";

export type BreadcrumbJsonLdItem = { name: string; url: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbJsonLdItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
