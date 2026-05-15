import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import QuoteSection from "@/components/home/QuoteSection";
import { HOW_IT_WORKS_STEPS } from "@/lib/content";

export const metadata: Metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return (
    <>
      <PageBanner
        title="How It Works"
        breadcrumbs={[{ label: "How It Works" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="sp-kicker">Our Process</p>
            <h2 className="sp-section-title mt-2">
              How SolarPro Works
            </h2>
            <p className="sp-section-sub max-w-2xl mx-auto">
              From consultation to installation — our streamlined process ensures
              your solar project is delivered on time and to specification.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl p-8 relative transition-shadow hover:shadow-lg"
                style={{ background: "var(--sp-surface)", border: "1px solid var(--sp-border)" }}
              >
                {/* Step number */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg mb-5"
                  style={{ background: "var(--sp-primary)", color: "var(--sp-navy)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="text-3xl mb-4 block">{step.icon}</span>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--sp-text)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div
            className="mt-16 rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "var(--sp-navy)" }}
          >
            <div>
              <h3 className="font-black text-2xl text-white">
                Ready To Start Your Solar Journey?
              </h3>
              <p className="text-white/60 mt-2">
                Get a free consultation and custom quote from our experts.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Link href="/contact" className="sp-btn sp-btn-primary">Get Free Quote</Link>
              <Link href="/services" className="sp-btn sp-btn-outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
