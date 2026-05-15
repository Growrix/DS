import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/shared/PageBanner";
import { TEAM_MEMBERS } from "@/lib/content";
import { SOCIAL } from "@/lib/config";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Our Team"
        breadcrumbs={[{ label: "Team" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="sp-kicker">Expert People</p>
            <h2 className="sp-section-title mt-2">
              Meet Our Professional Team
            </h2>
            <p className="sp-section-sub max-w-2xl mx-auto">
              Skilled specialists dedicated to delivering exceptional solar solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="sp-card text-center group">
                <div className="relative overflow-hidden" style={{ height: 260 }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* social overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(12,27,46,0.75)" }}
                  >
                    {Object.values(SOCIAL).map((url, i) => (
                      <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-colors"
                        style={{ background: "var(--sp-primary)", color: "var(--sp-navy)" }}
                      >
                        {["f", "𝕏", "in", "▶"][i]}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base" style={{ color: "var(--sp-text)" }}>{member.name}</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--sp-primary)" }}>{member.role}</p>
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--sp-muted)" }}>
                    {member.bio}
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
