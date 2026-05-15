import type { Metadata } from "next";
import PageBanner from "@/components/shared/PageBanner";
import { AWARDS } from "@/lib/content";

export const metadata: Metadata = { title: "Awards & Recognition" };

export default function AwardsPage() {
  return (
    <>
      <PageBanner
        title="Awards"
        breadcrumbs={[{ label: "Awards" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="sp-kicker">Our Recognition</p>
            <h2 className="sp-section-title mt-2">
              Awards &amp; Achievements
            </h2>
            <p className="sp-section-sub max-w-2xl mx-auto">
              Recognized globally for excellence in solar energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {AWARDS.map((award) => (
              <div
                key={award.title}
                className="rounded-xl p-8 flex items-start gap-6 transition-shadow hover:shadow-lg"
                style={{ background: "var(--sp-surface)", border: "1px solid var(--sp-border)" }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: "var(--sp-navy)" }}
                >
                  🏆
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "var(--sp-primary)" }}
                  >
                    {award.year} · {award.body}
                  </p>
                  <h3 className="font-bold text-lg" style={{ color: "var(--sp-text)" }}>
                    {award.title}
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
