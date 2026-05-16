"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { siteConfig, footerData } from "@/data/site";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#aaa", fontFamily: "Open Sans, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr 2fr", gap: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, background: "#f5b800", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 18 }}>🏠</span>
              </div>
              <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff" }}>Mezan</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20, color: "#999" }}>{footerData.description}</p>
            {/* App Store Badges */}
            <div style={{ display: "flex", gap: 8 }}>
              {["Play Store", "App Store"].map((s) => (
                <a key={s} href="#" style={{ background: "#2a2a2a", border: "1px solid #444", borderRadius: 6, padding: "6px 12px", color: "#ccc", fontSize: 11, textDecoration: "none", fontWeight: 600 }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Info & Support columns */}
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <h4 style={{ color: "#f5b800", fontFamily: "Raleway, sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 8 }}>
                    <Link href={link.href} style={{ color: "#999", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                      onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "#f5b800"; }}
                      onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "#999"; }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick Contact */}
          <div>
            <h4 style={{ color: "#f5b800", fontFamily: "Raleway, sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Quick Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <MapPin size={15} color="#f5b800" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "#999", lineHeight: 1.5 }}>{siteConfig.contactAddress}</span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Phone size={15} color="#f5b800" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "#999" }}>{siteConfig.phone}</span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Mail size={15} color="#f5b800" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "#999" }}>{siteConfig.contactEmail}</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 4 }}>
                <span style={{ fontSize: 13, color: "#999" }}>Follow Us –</span>
                {siteConfig.footerSocial.map((s) => (
                  <a key={s} href="#" style={{ color: "#999", fontSize: 13, textDecoration: "none", fontWeight: 600 }}
                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "#f5b800"; }}
                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "#999"; }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: "#f5b800", fontFamily: "Raleway, sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Newsletter</h4>
            <p style={{ fontSize: 13, color: "#999", lineHeight: 1.6, marginBottom: 16 }}>{footerData.newsletter.desc}</p>
            <div style={{ display: "flex", borderRadius: 6, overflow: "hidden", border: "1px solid #333" }}>
              <input placeholder="Enter Your Email Id" style={{ flex: 1, background: "#222", border: "none", padding: "10px 14px", color: "#aaa", fontSize: 13, outline: "none" }} />
              <button style={{ background: "#f5b800", border: "none", padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                <Send size={16} color="#111" />
              </button>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>{footerData.newsletter.disclaimer}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #2a2a2a", padding: "16px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <a href="https://www.growrixos.com" style={{ fontSize: 13, color: "#666", textDecoration: "none" }} target="_blank" rel="noreferrer">
            Built and Maintained by Growrix OS
          </a>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="#" style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>Privacy Policy</Link>
            <span style={{ color: "#444" }}>-</span>
            <Link href="#" style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
