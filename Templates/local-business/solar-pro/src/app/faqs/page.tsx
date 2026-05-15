import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <>
      <PageBanner
        title="FAQs"
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <section className="sp-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="sp-kicker">Answers</p>
            <h2 className="sp-section-title mt-2">
              Frequently Asked Questions
            </h2>
            <p className="sp-section-sub max-w-xl mx-auto">
              Everything you need to know about our solar solutions
            </p>
          </div>

          <div>
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="sp-faq"
              >
                <summary>{faq.question}</summary>
                <div className="faq-body">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
