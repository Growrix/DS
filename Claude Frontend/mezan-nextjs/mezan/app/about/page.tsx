"use client";
import { useState } from "react";
import { Play, Phone, ChevronDown, ChevronUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import { aboutContent, siteConfig } from "@/data/site";

const teamImages = [
  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&q=80",
];

const serviceIcons: Record<string, string> = {
  licensed: "🏅", rated: "⭐", timely: "⏰", quality: "✅",
};
const featureIcons: Record<string, string> = {
  consultation: "📞", solution: "🔧", pricing: "💰", allinone: "🏠",
};

const brandLogos = ["STEREO", "TIDAL", "LOVALL", "TRIBE MUSIC"];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const marqueeText = aboutContent.marqueeText + " " + aboutContent.marqueeText;

  return (
    <>
      <PageHero title="About Us" crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      {/* ── Intro Section ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px" }}>
        <p style={{ color: "#f5b800", fontFamily: "Raleway,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>{aboutContent.subtitle}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Left */}
          <div>
            <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 32, fontWeight: 800, color: "#1a1a1a", whiteSpace: "pre-line", lineHeight: 1.2, marginBottom: 20 }}>{aboutContent.title}</h2>
            <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7, marginBottom: 28 }}>{aboutContent.description}</p>
            {/* Project badge on image placeholder */}
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80" alt="Service" style={{ width: "100%", maxWidth: 400, borderRadius: 10, objectFit: "cover", height: 240 }} />
              <div style={{ position: "absolute", bottom: -16, left: -16, background: "#f5b800", borderRadius: 8, padding: "14px 20px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                <div style={{ fontFamily: "Raleway,sans-serif", fontSize: 28, fontWeight: 800, color: "#111", lineHeight: 1 }}>{aboutContent.projectsCount}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#333", marginTop: 2 }}>{aboutContent.projectsLabel}</div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {aboutContent.features.map((feat) => (
              <div key={feat.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, background: "#fff7e0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  {featureIcons[feat.icon]}
                </div>
                <div>
                  <h4 style={{ fontFamily: "Raleway,sans-serif", fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>{feat.title}</h4>
                  <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>{feat.desc}</p>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
              <a href={`tel:${siteConfig.phone}`} style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                <div style={{ width: 44, height: 44, background: "#f5b800", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Phone size={18} color="#111" />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600 }}>CALL FOR PRICING</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>{siteConfig.phone}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video CTA / Blue Section ── */}
      <section style={{ background: "linear-gradient(rgba(30,80,160,0.88),rgba(30,80,160,0.88)),url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80') center/cover no-repeat", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <button style={{ width: 56, height: 56, borderRadius: "50%", background: "#f5b800", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Play size={20} color="#111" fill="#111" />
          </button>
          <p style={{ color: "#f5b800", fontFamily: "Raleway,sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>{aboutContent.videoCta.subtitle}</p>
          <h2 style={{ color: "#fff", fontFamily: "Raleway,sans-serif", fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, whiteSpace: "pre-line", lineHeight: 1.25, marginBottom: 20 }}>{aboutContent.videoCta.title}</h2>
          <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>{aboutContent.videoCta.desc}</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
            {aboutContent.videoCta.buttons.map((btn) => (
              <button key={btn} style={{ background: btn === "Book Now" ? "#f5b800" : "transparent", color: btn === "Book Now" ? "#111" : "#fff", fontWeight: 700, fontSize: 14, padding: "11px 28px", borderRadius: 6, border: "2px solid", borderColor: btn === "Book Now" ? "#f5b800" : "#fff", cursor: "pointer", fontFamily: "Raleway,sans-serif" }}>{btn}</button>
            ))}
          </div>
          <p style={{ color: "#ccc", fontSize: 13 }}>{aboutContent.videoCta.stats}</p>
          <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
            {brandLogos.map((b) => (<span key={b} style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 800, letterSpacing: 1, fontFamily: "Raleway,sans-serif" }}>{b}</span>))}
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section style={{ background: "#1a1a1a", padding: "18px 0", overflow: "hidden" }}>
        <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
          <div className="marquee-track" style={{ display: "inline-flex", gap: 0 }}>
            <span style={{ color: "#fff", fontFamily: "Raleway,sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: 1, paddingRight: 40 }}>
              {marqueeText}
            </span>
            <span style={{ color: "#fff", fontFamily: "Raleway,sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: 1, paddingRight: 40 }}>
              {marqueeText}
            </span>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: "#f9f9f9", padding: "48px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {aboutContent.stats.map((stat, i) => (
            <div key={stat.label} style={{ textAlign: "center", padding: "20px", borderRight: i < 3 ? "1px solid #e5e7eb" : "none" }}>
              <div style={{ fontFamily: "Raleway,sans-serif", fontSize: 40, fontWeight: 800, color: "#1a1a1a", lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: 14, color: "#888", marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ color: "#f5b800", fontFamily: "Raleway,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>OUR PROCESS</p>
          <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 28, fontWeight: 800 }}>{aboutContent.servicesTitle}</h2>
          <p style={{ fontSize: 14, color: "#888", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.7 }}>{aboutContent.servicesDesc}</p>
        </div>

        {/* Video / image placeholder */}
        <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", marginBottom: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80" alt="Services" style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button style={{ width: 60, height: 60, borderRadius: "50%", background: "#f5b800", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Play size={22} color="#111" fill="#111" />
            </button>
          </div>
        </div>

        {/* Service features */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {aboutContent.serviceFeatures.map((feat) => (
            <div key={feat.title} style={{ textAlign: "center", padding: "24px 16px", border: "1px solid #eee", borderRadius: 10 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{serviceIcons[feat.icon]}</div>
              <h4 style={{ fontFamily: "Raleway,sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{feat.title}</h4>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ background: "#f5b800", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontFamily: "Raleway,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8, color: "#7a5c00" }}>OUR PROFESSIONAL</p>
            <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 28, fontWeight: 800, color: "#1a1a1a" }}>{aboutContent.teamTitle}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {aboutContent.team.map((member, i) => (
              <div key={member.slug} style={{ textAlign: "center", background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={teamImages[i]} alt={member.name} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                <div style={{ padding: "16px 12px" }}>
                  <h4 style={{ fontFamily: "Raleway,sans-serif", fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>{member.name}</h4>
                  <p style={{ fontSize: 13, color: "#888" }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {/* Left - Image + CTA */}
          <div>
            <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", marginBottom: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" alt="FAQ" style={{ width: "100%", height: 380, objectFit: "cover", borderRadius: 12 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#f5b800", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontFamily: "Raleway,sans-serif", fontSize: 15, fontWeight: 700, color: "#111" }}>{aboutContent.faqSideTitle}</div>
                  <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>{aboutContent.faqSideDesc}</div>
                </div>
                <button style={{ background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 6, padding: "10px 16px", cursor: "pointer", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap" }}>Contact Us</button>
              </div>
            </div>
          </div>

          {/* Right - FAQ */}
          <div>
            <p style={{ color: "#f5b800", fontFamily: "Raleway,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>FAQS INSTALLATION</p>
            <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 26, fontWeight: 800, marginBottom: 28 }}>{aboutContent.faqTitle}</h2>
            <div>
              {aboutContent.faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid #eee" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ padding: "16px 0", fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, width: "100%", background: "none", border: "none", fontSize: 14, color: "#1a1a1a", textAlign: "left" }}>
                    <span>{faq.q}</span>
                    <span style={{ flexShrink: 0 }}>{openFaq === i ? <ChevronUp size={16} color="#f5b800" /> : <ChevronDown size={16} color="#aaa" />}</span>
                  </button>
                  {openFaq === i && faq.a && (
                    <div style={{ paddingBottom: 16, fontSize: 14, color: "#777", lineHeight: 1.7 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section style={{ background: "#f9f9f9", padding: "64px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#f5b800", fontFamily: "Raleway,sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>DUPNI&#39;S INSTALLATION</p>
          <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 28, fontWeight: 800, marginBottom: 32 }}>{aboutContent.testimonialTitle}</h2>
          {aboutContent.testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "36px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", gap: 2, justifyContent: "center", marginBottom: 20 }}>
                {Array.from({ length: 5 }).map((_, j) => (<span key={j} style={{ color: j < t.rating ? "#f5b800" : "#ddd", fontSize: 20 }}>★</span>))}
              </div>
              <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>👤</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a" }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "#aaa" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
