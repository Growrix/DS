import Link from "next/link";
import { FEATURES } from "@/lib/content";

export default function FeaturesSection() {
  return (
    <section className="sp-section sp-section-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="sp-kicker">Why Choose Us</p>
          <h2 className="sp-section-title sp-section-title-light mt-2">
            Making Tomorrow Different Today.
          </h2>
          <p className="mt-4 text-base text-white/65 max-w-2xl mx-auto">
            Energize Society With Sustainable And Reliable Energy Systems.
            In recent years, new capacity across the solar value chain has
            become necessary to support the market&apos;s growth.
          </p>
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

        <div className="text-center mt-12">
          <Link href="/about" className="sp-btn sp-btn-primary">
            Explore All Features!
          </Link>
        </div>
      </div>
    </section>
  );
}
