import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/shared";
import { pricingPlans } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero title="Pricing" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl border border-[#E2EEF2] overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-[#E2EEF2]">
                  <h3 className="text-[#1B3C4A] text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-[#7A9BAA] mt-1">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="bg-[#EAF8F6] px-6 py-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#1B3C4A]">${plan.price}</span>
                    <span className="text-sm text-[#7A9BAA]">{plan.period}</span>
                  </div>
                  <p className="text-xs text-[#7A9BAA] mt-1 line-through">Normally ${plan.originalPrice}</p>
                </div>

                {/* Features */}
                <div className="p-6 space-y-3">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#4A6572]">
                      <CheckCircle2 size={15} className="text-[#00B5A3] flex-shrink-0" />
                      <span>
                        <strong className="text-[#1B3C4A]">{f.highlight}</strong>
                        {f.rest}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    href="/contact"
                    className="block text-center w-full py-3 bg-[#00B5A3] text-white font-semibold rounded-full text-sm hover:bg-[#009E8E] transition-colors"
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#7A9BAA] mt-8">
            *Prices may vary based on insurance and additional treatments.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
