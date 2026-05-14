import * as React from "react";

import { JsonLd } from "./JsonLd";

export type FaqJsonLdItem = { question: string; answer: string };

export function FaqJsonLd({ items }: { items: FaqJsonLdItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}
