"use client";
import { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/shared/PageBanner";
import { GALLERY_ITEMS } from "@/lib/content";

const ALL_CATS = ["All", ...Array.from(new Set(GALLERY_ITEMS.map((g) => g.category)))];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === active);

  return (
    <>
      <PageBanner
        title="Gallery"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="sp-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="sp-kicker">Our Work</p>
            <h2 className="sp-section-title mt-2">Photo Gallery</h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {ALL_CATS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full text-sm font-bold transition-all"
                style={{
                  background: active === cat ? "var(--sp-primary)" : "var(--sp-surface)",
                  color: active === cat ? "var(--sp-navy)" : "var(--sp-text)",
                  border: "1px solid var(--sp-border)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={`${item.id}-${item.alt}`}
                className="sp-gallery-item group">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="sp-gallery-overlay">
                  <span className="sp-badge">{item.category}</span>
                  <p className="mt-1 font-bold text-sm text-white">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
