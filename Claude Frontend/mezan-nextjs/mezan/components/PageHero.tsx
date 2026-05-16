"use client";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  crumbs: Crumb[];
}

export default function PageHero({ title, crumbs }: PageHeroProps) {
  return (
    <div style={{
      background: "linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80') center/cover no-repeat",
      padding: "70px 20px 50px",
      color: "#fff",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Raleway, sans-serif", fontSize: 36, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          {title}
        </h1>
        <nav style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 14, color: "#bbb" }}>
          {crumbs.map((crumb, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {i > 0 && <span style={{ color: "#888" }}>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} style={{ color: "#bbb", textDecoration: "none" }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "#f5b800"; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "#bbb"; }}>
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: "#fff" }}>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
