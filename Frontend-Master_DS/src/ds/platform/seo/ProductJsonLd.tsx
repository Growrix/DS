import * as React from "react";

import { JsonLd } from "./JsonLd";

export type ProductJsonLdProps = {
  name: string;
  description?: string;
  imageUrl?: string;
  brand?: string;
  sku?: string;
  offers?: {
    priceCurrency: string;
    price: string | number;
    availability?: "InStock" | "OutOfStock" | "PreOrder";
    url?: string;
  };
  aggregateRating?: { ratingValue: number; reviewCount: number };
};

export function ProductJsonLd(props: ProductJsonLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: props.name,
    ...(props.description ? { description: props.description } : {}),
    ...(props.imageUrl ? { image: props.imageUrl } : {}),
    ...(props.brand ? { brand: { "@type": "Brand", name: props.brand } } : {}),
    ...(props.sku ? { sku: props.sku } : {}),
  };
  if (props.offers) {
    data.offers = {
      "@type": "Offer",
      priceCurrency: props.offers.priceCurrency,
      price: props.offers.price,
      ...(props.offers.availability
        ? { availability: `https://schema.org/${props.offers.availability}` }
        : {}),
      ...(props.offers.url ? { url: props.offers.url } : {}),
    };
  }
  if (props.aggregateRating) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: props.aggregateRating.ratingValue,
      reviewCount: props.aggregateRating.reviewCount,
    };
  }
  return <JsonLd data={data} />;
}
