"use client";
import { useState, useMemo } from "react";
import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products, productCategories, productTags } from "@/data/site";

const serviceIcons: Record<string, string> = {
  plumber: "👷", ac: "❄️", electrician: "⚡", appliance: "🏠", carpenter: "🪚",
};

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = search === "" || p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = !activeCategory || p.category === activeCategory;
      const matchTag = !activeTag || p.tags.includes(activeTag);
      return matchSearch && matchCat && matchTag;
    });
  }, [search, activeCategory, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <PageHero title="Shop Left Sidebar" crumbs={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "Shop Left Sidebar" }]} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px", display: "grid", gridTemplateColumns: "240px 1fr", gap: 40, alignItems: "start" }}>
        {/* ── Sidebar ── */}
        <aside>
          {/* Search */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 16, marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", border: "1px solid #e5e7eb", borderRadius: 6, padding: "8px 12px" }}>
              <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Search products..." style={{ flex: 1, border: "none", outline: "none", fontSize: 14, color: "#333", background: "transparent" }} />
              <Search size={16} color="#aaa" />
            </div>
          </div>

          {/* Categories */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 16, marginBottom: 20 }}>
            <h3 style={{ fontFamily: "Raleway,sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 14, color: "#1a1a1a" }}>Product Categories:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: 8 }}>
                <button onClick={() => { setActiveCategory(null); setPage(1); }}
                  style={{ background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", width: "100%", fontSize: 14, fontWeight: !activeCategory ? 700 : 400, color: !activeCategory ? "#f5b800" : "#555", padding: "2px 0" }}>
                  <span>All Products</span>
                  <span style={{ color: "#aaa" }}>({products.length})</span>
                </button>
              </li>
              {productCategories.map((cat) => (
                <li key={cat.slug} style={{ marginBottom: 8 }}>
                  <button onClick={() => { setActiveCategory(cat.slug === activeCategory ? null : cat.slug); setPage(1); }}
                    style={{ background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", width: "100%", fontSize: 14, fontWeight: activeCategory === cat.slug ? 700 : 400, color: activeCategory === cat.slug ? "#f5b800" : "#555", padding: "2px 0" }}>
                    <span>{cat.label}</span>
                    <span style={{ color: "#aaa" }}>({cat.count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 16, marginBottom: 20 }}>
            <h3 style={{ fontFamily: "Raleway,sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 14, color: "#1a1a1a" }}>Product Tags:</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {productTags.map((tag) => (
                <button key={tag} onClick={() => { setActiveTag(activeTag === tag ? null : tag); setPage(1); }}
                  style={{ background: activeTag === tag ? "#f5b800" : "#f5f5f5", border: "1px solid", borderColor: activeTag === tag ? "#f5b800" : "#e5e7eb", borderRadius: 4, padding: "5px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer", color: activeTag === tag ? "#111" : "#555", transition: "all 0.2s" }}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Promo Banner */}
          <div style={{ borderRadius: 8, overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80" alt="Promo" style={{ width: "100%", height: 140, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18, fontFamily: "Raleway,sans-serif", letterSpacing: 1 }}>WINDOW</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "Raleway,sans-serif" }}>FITTING</span>
            </div>
          </div>
        </aside>

        {/* ── Products ── */}
        <div>
          {paged.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#999", fontSize: 16 }}>No products found.</div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 40 }}>
              {paged.map((product) => (<ProductCard key={product.id} product={product} />))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center" }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)}
                  style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid", borderColor: page === i + 1 ? "#f5b800" : "#e5e7eb", background: page === i + 1 ? "#f5b800" : "#fff", color: page === i + 1 ? "#111" : "#555", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  {i + 1}
                </button>
              ))}
              {page < totalPages && (
                <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <ChevronRight size={16} color="#555" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
