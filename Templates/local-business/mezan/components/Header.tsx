"use client";
import Link from "next/link";
import { useState } from "react";
import { MapPin, Mail, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div style={{ background: "#111", color: "#bbb", fontSize: 13, padding: "8px 0", borderBottom: "1px solid #222" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          {/* Social */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {["f", "p", "▶", "𝕏"].map((s, i) => (
              <a key={i} href="#" style={{ color: "#bbb", textDecoration: "none", width: 26, height: 26, borderRadius: "50%", border: "1px solid #444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, transition: "all 0.2s" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "#f5b800"; (e.currentTarget as HTMLElement).style.borderColor = "#f5b800"; (e.currentTarget as HTMLElement).style.color = "#111"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "#444"; (e.currentTarget as HTMLElement).style.color = "#bbb"; }}>
                {s}
              </a>
            ))}
          </div>
          {/* Contact info */}
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={13} color="#f5b800" />
              {siteConfig.address}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Mail size={13} color="#f5b800" />
              {siteConfig.email}
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav style={{ background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 36, height: 36, background: "#f5b800", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 20 }}>🏠</span>
            </div>
            <span style={{ fontFamily: "Raleway, sans-serif", fontWeight: 800, fontSize: 22, color: "#1a1a1a", letterSpacing: -0.5 }}>
              Mezan
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}
                style={{ color: link.label === "Home" ? "#f5b800" : "#333", textDecoration: "none", fontWeight: 600, fontSize: 14, padding: "8px 12px", borderRadius: 4, display: "flex", alignItems: "center", gap: 3, transition: "color 0.2s", fontFamily: "Open Sans, sans-serif" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "#f5b800"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = link.label === "Home" ? "#f5b800" : "#333"; }}>
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "#555", display: "flex" }}>
              <User size={20} />
            </button>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "#555", display: "flex", position: "relative" }}>
              <ShoppingCart size={20} />
              <span style={{ position: "absolute", top: -6, right: -6, background: "#f5b800", color: "#111", fontSize: 10, fontWeight: 700, width: 16, height: 16, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>0</span>
            </button>
            <Link href="/contact" style={{ background: "#f5b800", color: "#111", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 6, textDecoration: "none", fontFamily: "Raleway, sans-serif", transition: "background 0.2s", whiteSpace: "nowrap" }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "#e0a800"; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "#f5b800"; }}>
              Get A Quote
            </Link>
            {/* Mobile menu toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#333", display: "none" }} className="mobile-menu-btn">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #eee", padding: "16px 20px" }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "10px 0", color: "#333", textDecoration: "none", fontWeight: 600, fontSize: 15, borderBottom: "1px solid #f5f5f5" }}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
