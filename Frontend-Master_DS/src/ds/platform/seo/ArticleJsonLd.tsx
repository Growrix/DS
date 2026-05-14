import * as React from "react";

import { JsonLd } from "./JsonLd";

export type ArticleJsonLdProps = {
  headline: string;
  description?: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authors?: Array<{ name: string; url?: string }>;
  publisher?: { name: string; logoUrl?: string };
  url?: string;
};

export function ArticleJsonLd(props: ArticleJsonLdProps) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    ...(props.description ? { description: props.description } : {}),
    ...(props.imageUrl ? { image: props.imageUrl } : {}),
    ...(props.datePublished ? { datePublished: props.datePublished } : {}),
    ...(props.dateModified ? { dateModified: props.dateModified } : {}),
    ...(props.url ? { mainEntityOfPage: props.url } : {}),
  };
  if (props.authors && props.authors.length > 0) {
    data.author = props.authors.map((a) => ({
      "@type": "Person",
      name: a.name,
      ...(a.url ? { url: a.url } : {}),
    }));
  }
  if (props.publisher) {
    data.publisher = {
      "@type": "Organization",
      name: props.publisher.name,
      ...(props.publisher.logoUrl
        ? { logo: { "@type": "ImageObject", url: props.publisher.logoUrl } }
        : {}),
    };
  }
  return <JsonLd data={data} />;
}
