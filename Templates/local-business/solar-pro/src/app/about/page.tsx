import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import QuoteSection from "@/components/home/QuoteSection";
import { HOME_STATS, FEATURES } from "@/lib/content";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Mission */}
      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="sp-kicker">Leading The Way</p>
              <h2 className="sp-section-title mt-2">
                Leading The Way In Building And Civil Construction
              </h2>
              <hr className="sp-divider mt-4" />
              <h3 className="font-semibold text-lg mt-4" style={{ color: "var(--sp-text)" }}>
                We Are Ready For Solar Energy, All We Need Is To Use It Well!
              </h3>
              <p className="mt-4 text-base" style={{ color: "var(--sp-muted)" }}>
                We drive the transition to more sustainable, reliable, and
                affordable energy systems. With our innovative technologies,
                we energize society — that&apos;s our aim!
              </p>
              <p className="mt-3 text-base" style={{ color: "var(--sp-muted)" }}>
                The increase in extreme weather events and rising sea levels are
                unmistakable signs of climate change. Roughly 850 million people
                still live without access to electricity, which is the foundation
                of sustainable development.
              </p>
              <p className="mt-3 text-base" style={{ color: "var(--sp-muted)" }}>
                How can we meet the growing demand for electricity while
                protecting our climate? We have the answer through proven solar
                and renewable energy solutions deployed in over 60 countries.
              </p>
              <Link href="/services" className="sp-btn sp-btn-primary mt-8 inline-flex">
                Our Services
              </Link>
            </div>

            <div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
                  alt="Solar installation team"
                  width={800}
                  height={550}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 p-8 rounded-xl" style={{ background: "var(--sp-surface)" }}>
            {HOME_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="sp-stat-value">{stat.value}</p>
                <p className="text-sm font-semibold mt-2" style={{ color: "var(--sp-muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="sp-section sp-section-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="sp-kicker">Why Choose Us</p>
            <h2 className="sp-section-title sp-section-title-light mt-2">Making Tomorrow Different Today.</h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">Energize Society With Sustainable And Reliable Energy Systems.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="sp-feature-card" style={{ background: "rgba(255,255,255,0.05)" }}>
                <span className="sp-feature-icon">{f.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
