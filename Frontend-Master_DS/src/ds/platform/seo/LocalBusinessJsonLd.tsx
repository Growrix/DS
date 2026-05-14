import * as React from "react";

import { JsonLd } from "./JsonLd";
import type { SeoLocalBusiness } from "./types";

export function LocalBusinessJsonLd({ business }: { business: SeoLocalBusiness }) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    url: business.url,
    ...(business.logoUrl ? { logo: business.logoUrl } : {}),
    ...(business.telephone ? { telephone: business.telephone } : {}),
    ...(business.priceRange ? { priceRange: business.priceRange } : {}),
    ...(business.sameAs && business.sameAs.length > 0 ? { sameAs: business.sameAs } : {}),
  };
  if (business.address) {
    data.address = { "@type": "PostalAddress", ...business.address };
  }
  if (business.geo) {
    data.geo = { "@type": "GeoCoordinates", ...business.geo };
  }
  if (business.openingHours && business.openingHours.length > 0) {
    data.openingHours = business.openingHours;
  }
  return <JsonLd data={data} />;
}
