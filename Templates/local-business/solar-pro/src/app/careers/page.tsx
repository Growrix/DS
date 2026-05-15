import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/shared/PageBanner";
import { CAREERS } from "@/lib/content";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageBanner
        title="Careers"
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="sp-kicker">Join Our Team</p>
            <h2 className="sp-section-title mt-2">
              Open Positions
            </h2>
            <p className="sp-section-sub max-w-2xl mx-auto">
              Join our mission to accelerate the global transition to clean energy
            </p>
          </div>

          <div className="space-y-5">
            {CAREERS.map((job) => (
              <div
                key={job.title}
                className="rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 transition-shadow hover:shadow-md"
                style={{ background: "var(--sp-surface)", border: "1px solid var(--sp-border)" }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="sp-badge">{job.department}</span>
                    <span className="sp-badge">{job.type}</span>
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: "var(--sp-text)" }}>
                    {job.title}
                  </h3>
                  <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                    {job.description}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--sp-muted)" }}>
                    📍 {job.location}
                  </p>
                  <Link href="/contact" className="sp-btn sp-btn-primary text-sm py-2 px-5">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 rounded-xl p-10 text-center"
            style={{ background: "var(--sp-navy)" }}
          >
            <h3 className="font-black text-2xl text-white mb-3">
              Don&apos;t See Your Role?
            </h3>
            <p className="text-white/60 max-w-xl mx-auto mb-6">
              We&apos;re always looking for talented people. Send us your resume
              and we&apos;ll reach out when the right opportunity arises.
            </p>
            <Link href="/contact" className="sp-btn sp-btn-primary">
              Send Open Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
