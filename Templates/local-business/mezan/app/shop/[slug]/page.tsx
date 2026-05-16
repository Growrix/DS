"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import { ShoppingCart, Heart, Check, ChevronUp, ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/site";

const workerImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? "#f5b800" : "#ddd", fontSize: 20 }}>★</span>
      ))}
    </div>
  );
}

const productEmojiMap: Record<string, string> = {
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

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.size?.[0] || "");
  const [activeThumb, setActiveThumb] = useState(0);

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const hasRange = product.priceMin !== product.priceMax;
  const priceLabel = hasRange
    ? `₹${product.priceMin.toFixed(2)} – ₹${product.priceMax.toFixed(2)}`
    : `₹${product.priceMin.toFixed(2)}`;

  const thumbEmojis = ["🔧", "⚙️", "🛠️"];
  const mainEmoji = productEmojiMap[product.slug] || "🔧";

  return (
    <>
      <PageHero title="Shop" crumbs={[{ label: "Home", href: "/" }, { label: product.category.charAt(0).toUpperCase() + product.category.slice(1).replace(/-/g, " "), href: `/shop?category=${product.category}` }, { label: product.name }]} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px" }}>
        {/* ── Product Layout ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 60 }}>
          {/* Left - Images */}
          <div style={{ display: "flex", gap: 16 }}>
            {/* Thumbnails */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {(product.images.length > 1 ? product.images : product.images).slice(0, 3).map((_, i) => (
                <div key={i} onClick={() => setActiveThumb(i)}
                  style={{ width: 70, height: 70, background: "#f0f1f2", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: `2px solid ${activeThumb === i ? "#f5b800" : "#e5e7eb"}`, fontSize: 28, transition: "border-color 0.2s" }}>
                  {thumbEmojis[i] || mainEmoji}
                </div>
              ))}
            </div>
            {/* Main image */}
            <div style={{ flex: 1, background: "#f0f1f2", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 360, fontSize: 100 }}>
              {mainEmoji}
            </div>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 style={{ fontFamily: "Raleway,sans-serif", fontSize: 30, fontWeight: 800, color: "#1a1a1a", marginBottom: 10 }}>{product.name}</h1>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#555", marginBottom: 12 }}>{priceLabel}</p>
            <StarRating rating={product.rating} />
            <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7, marginTop: 14, marginBottom: 20 }}>{product.shortDescription}</p>

            {/* Size selector */}
            {product.size && product.size.length > 0 && (
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 14, fontWeight: 600, color: "#333", marginBottom: 8, display: "block" }}>Size</label>
                <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}
                  style={{ padding: "9px 14px", border: "1px solid #e5e7eb", borderRadius: 6, fontSize: 14, color: "#333", background: "#fff", cursor: "pointer", minWidth: 160, outline: "none" }}>
                  {product.size.map((s) => (<option key={s} value={s}>{s}</option>))}
                </select>
              </div>
            )}

            {/* Qty + Add to Cart */}
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", border: "1px solid #e5e7eb", borderRadius: 6, overflow: "hidden" }}>
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} style={{ width: 36, background: "#fff", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e5e7eb" }}><ChevronDown size={14} /></button>
                <span style={{ padding: "0 16px", display: "flex", alignItems: "center", fontSize: 15, fontWeight: 600 }}>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} style={{ width: 36, background: "#fff", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderLeft: "1px solid #e5e7eb" }}><ChevronUp size={14} /></button>
              </div>
              <button style={{ flex: 1, background: "#f5b800", color: "#111", fontWeight: 700, fontSize: 14, padding: "11px 24px", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "Raleway,sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "background 0.2s" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "#e0a800"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "#f5b800"; }}>
                <ShoppingCart size={16} /> Add To Cart
              </button>
            </div>

            {/* Wishlist */}
            <button style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff7e0", color: "#111", fontWeight: 600, fontSize: 14, padding: "10px 20px", borderRadius: 6, border: "1px solid #f5b800", cursor: "pointer", marginBottom: 20 }}>
              <Heart size={15} color="#f5b800" fill="#f5b800" /> Add To Wishlist
            </button>

            {/* Shipping info */}
            <div style={{ borderTop: "1px solid #eee", paddingTop: 16, marginBottom: 12 }}>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 8 }}>
                {[
                  { label: "COD Available", on: product.shipping.cod },
                  { label: "Free Shipping", on: product.shipping.freeShipping },
                  { label: `Delivered ${product.shipping.deliveryDays}`, on: true },
                ].map((item) => (
                  <span key={item.label} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#555" }}>
                    <Check size={13} color="#f5b800" /> {item.label}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#555", marginBottom: 8 }}>
                <Check size={13} color="#f5b800" /> Easy Returns & Replacement
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#555" }}>
                <span style={{ fontSize: 16 }}>💳</span> Payment Options: {product.shipping.paymentOptions}
              </div>
            </div>

            {/* Share */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>Share:</span>
              {["f", "in", "p", "𝕏"].map((s) => (
                <a key={s} href="#" style={{ width: 32, height: 32, borderRadius: "50%", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#555", textDecoration: "none" }}>{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Description + Additional Info ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 60 }}>
          {/* Description */}
          <div style={{ border: "1px solid #eee", borderRadius: 10, padding: 32 }}>
            <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Description</h2>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 20 }}>{product.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[...product.features, ...product.additionalFeatures].map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#555" }}>
                  <Check size={13} color="#f5b800" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div style={{ border: "1px solid #eee", borderRadius: 10, padding: 32 }}>
            <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 20 }}>Additional Info</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              {workerImages.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="Worker" style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8 }} />
              ))}
            </div>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>
              Mus mauris vitae ultricies leo integer malesuada nunc vel. Ac felis donec et ac dui nunc matti odio pellentesque. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Aenean euismod elementum ipsum a arcu nisi quis eleifend quam adipiscing.
            </p>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginTop: 12 }}>
              eleifend quam adipiscing.
            </p>
          </div>
        </div>

        {/* ── Customer Reviews ── */}
        <div style={{ marginBottom: 60 }}>
          <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Customer Reviews</h2>
          <p style={{ color: "#aaa", fontSize: 14 }}>No reviews yet. Be the first to review this product.</p>
        </div>

        {/* ── Related Products ── */}
        {related.length > 0 && (
          <div>
            <h2 style={{ fontFamily: "Raleway,sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Related Products</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {related.map((p) => (<ProductCard key={p.id} product={p} />))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
