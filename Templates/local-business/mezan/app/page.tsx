"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { siteConfig, heroServices, homeSections, products, ctaBanner } from "@/data/site";

const serviceIcons: Record<string, string> = {
  plumber: "👷", ac: "❄️", electrician: "⚡", appliance: "🏠", carpenter: "🪚",
};

const galleryImages = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=80",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80') center/cover no-repeat", minHeight: 520, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 20px 60px", textAlign: "center" }}>
        <p style={{ color: "#f5b800", fontFamily: "Raleway,sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>{siteConfig.tagline}</p>
        <h1 style={{ color: "#fff", fontFamily: "Raleway,sans-serif", fontSize: "clamp(28px,5vw,50px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 20, maxWidth: 700, whiteSpace: "pre-line" }}>{siteConfig.headline}</h1>
        <p style={{ color: "#ccc", fontSize: 14, maxWidth: 660, lineHeight: 1.8, marginBottom: 36 }}>{siteConfig.description}</p>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          {heroServices.map((svc) => (
            <div key={svc.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <div style={{ width: 58, height: 58, borderRadius: "50%", border: "2px solid rgba(245,184,0,0.5)", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{serviceIcons[svc.icon]}</div>
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{svc.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/about" style={{ background: "#f5b800", color: "#111", fontWeight: 700, fontSize: 14, padding: "12px 30px", borderRadius: 6, textDecoration: "none", fontFamily: "Raleway,sans-serif" }}>Read More</Link>
          <Link href="/shop" style={{ background: "transparent", color: "#fff", fontWeight: 700, fontSize: 14, padding: "12px 30px", borderRadius: 6, textDecoration: "none", fontFamily: "Raleway,sans-serif", border: "2px solid #fff" }}>Book Service</Link>
        </div>
      </section>

      {/* Product Sections */}
      {homeSections.map((section) => {
        const sectionProducts = section.productIds.map((id) => products.find((p) => p.id === id)).filter(Boolean) as typeof products;
        return (
          <section key={section.id} style={{ padding: "60px 20px", borderBottom: "1px solid #eee" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "220px 1fr", gap: 48, alignItems: "start" }}>
              <div>
                <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 26, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.25, marginBottom: 14, whiteSpace: "pre-line" }}>{section.title}</h2>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7, marginBottom: 20 }}>{section.description}</p>
                <Link href={`/shop?category=${section.categorySlug}`} style={{ display: "inline-block", background: "#f5b800", color: "#111", fontWeight: 700, fontSize: 13, padding: "10px 22px", borderRadius: 6, textDecoration: "none", fontFamily: "Raleway,sans-serif" }}>View All</Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
                {sectionProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Banner */}
      <section style={{ background: "#f5b800", padding: "36px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "64px 1fr auto", gap: 24, alignItems: "center" }}>
          <div style={{ width: 64, height: 64, background: "rgba(0,0,0,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🔧</div>
          <div>
            <p style={{ fontSize: 14, color: "#333", lineHeight: 1.7, marginBottom: 6 }}>{ctaBanner.text}</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {ctaBanner.phones.map((ph) => (<a key={ph} href={`tel:${ph}`} style={{ color: "#111", fontWeight: 700, fontSize: 13, textDecoration: "underline", display: "flex", alignItems: "center", gap: 4 }}><Phone size={13} />{ph}</a>))}
            </div>
          </div>
          <Link href="/contact" style={{ background: "#1a1a1a", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 26px", borderRadius: 6, textDecoration: "none", whiteSpace: "nowrap", fontFamily: "Raleway,sans-serif" }}>{ctaBanner.cta}</Link>
        </div>
      </section>

      {/* Gallery Strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", height: 200, overflow: "hidden" }}>
        {galleryImages.map((src, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Gallery ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s", display: "block" }} />
          </div>
        ))}
      </div>
    </>
  );
}
