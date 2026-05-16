"use client";
import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/site";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasRange = product.priceMin !== product.priceMax;
  const priceLabel = hasRange
    ? `₹${product.priceMin.toFixed(2)} – ₹${product.priceMax.toFixed(2)}`
    : `₹${product.priceMin.toFixed(2)}`;

  return (
    <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", transition: "box-shadow 0.2s", cursor: "pointer" }}
      onMouseOver={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
      onMouseOut={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
      {/* Image */}
      <Link href={`/shop/${product.slug}`} style={{ display: "block", position: "relative" }}>
        <div style={{ background: "#f0f1f2", position: "relative", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          {product.onSale && (
            <span style={{ position: "absolute", top: 10, right: 10, background: "#f5b800", color: "#111", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, letterSpacing: 0.5 }}>
              SALE
            </span>
          )}
          <ProductImage name={product.name} category={product.category} />
        </div>
      </Link>

      {/* Info */}
      <div style={{ padding: "12px 4px 8px" }}>
        <Link href={`/shop/${product.slug}`} style={{ textDecoration: "none" }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 4, fontFamily: "Open Sans, sans-serif", lineHeight: 1.3 }}>
            {product.name}
          </h3>
        </Link>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 14, color: "#444", fontWeight: 500 }}>{priceLabel}</span>
          <div style={{ display: "flex", gap: 6 }}>
            <button style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "#f5b800"; (e.currentTarget as HTMLElement).style.borderColor = "#f5b800"; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; }}>
              <ShoppingCart size={13} color="#555" />
            </button>
            <button style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "#f5b800"; (e.currentTarget as HTMLElement).style.borderColor = "#f5b800"; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; }}>
              <Heart size={13} color="#555" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Emoji-based product image placeholder matching each product type
function ProductImage({ name, category }: { name: string; category: string }) {
  const iconMap: Record<string, string> = {
    "pipe-wrench": "🔧",
    "8-steel-plier": "🔩",
    "rubber-hand-gloves": "🧤",
    "handsaw": "🪚",
    "metal-shovel": "🪣",
    "hand-vacuum": "🫧",
    "plastic-tool-box": "🧰",
    "cordless-drill": "🔩",
    "metal-hand-jigsaw": "🪚",
  };

  // Category fallback
  const catIconMap: Record<string, string> = {
    "equipment": "⚙️",
    "hand-tools": "🔧",
    "hardware-diy-tools": "🛠️",
    "power-tools": "⚡",
    "safety-wear": "🦺",
  };

  const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const icon = iconMap[slug] || catIconMap[category] || "🔧";

  return (
    <span style={{ fontSize: 60, userSelect: "none", display: "block", textAlign: "center" }}>
      {icon}
    </span>
  );
}
