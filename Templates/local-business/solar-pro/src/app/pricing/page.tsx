import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import { PRICING_PLANS, TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = { title: "Pricing & Plans" };

export default function PricingPage() {
  return (
    <>
      <PageBanner
        title="Our Plans"
        breadcrumbs={[{ label: "Pricing" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="sp-kicker">Pricing Plans</p>
            <h2 className="sp-section-title mt-2">
              Pricing And Plans
            </h2>
            <p className="sp-section-sub max-w-xl mx-auto">
              Effective &amp; Flexible Pricing That Adapts To Your Needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`sp-pricing-card${plan.highlighted ? " highlighted" : ""}`}
              >
                {plan.highlighted && (
                  <div
                    className="inline-block px-4 py-1 rounded-full text-xs font-black mb-4"
                    style={{ background: "var(--sp-primary)", color: "var(--sp-navy)" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="font-black text-xl mb-2" style={{ color: "var(--sp-text)" }}>
                  {plan.name}
                </h3>
                <div className="sp-pricing-price">{plan.price}</div>
                <p className="text-sm mb-4" style={{ color: "var(--sp-muted)" }}>
                  /{plan.period}
                </p>
                <p className="text-sm mb-6" style={{ color: "var(--sp-muted)" }}>
                  {plan.description}
                </p>
                <ul className="space-y-2 mb-8 text-sm text-left">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ color: "var(--sp-text)" }}>
                      <span style={{ color: "var(--sp-primary)" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`sp-btn w-full justify-center${plan.highlighted ? " sp-btn-primary" : " sp-btn-dark"}`}
                >
                  Purchase Now
                </Link>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div
            className="mt-20 rounded-xl p-10 text-center"
            style={{ background: "var(--sp-navy)" }}
          >
            <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-4">
              Satisfied Users Over The Globe!
            </p>
            <blockquote className="text-white/85 text-xl italic max-w-3xl mx-auto leading-relaxed">
              &ldquo;{TESTIMONIALS[0].content}&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="font-bold text-white">{TESTIMONIALS[0].name}</p>
              <p className="text-sm" style={{ color: "var(--sp-primary)" }}>{TESTIMONIALS[0].role}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
