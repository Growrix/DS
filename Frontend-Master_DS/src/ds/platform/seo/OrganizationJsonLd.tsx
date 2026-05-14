import * as React from "react";

import { JsonLd } from "./JsonLd";
import type { SeoOrganization } from "./types";

export function OrganizationJsonLd({ org }: { org: SeoOrganization }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: org.name,
        url: org.url,
        ...(org.logoUrl ? { logo: org.logoUrl } : {}),
        ...(org.sameAs && org.sameAs.length > 0 ? { sameAs: org.sameAs } : {}),
      }}
    />
  );
}
