"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHero, StarRating } from "@/components/ui/shared";
import { products, shopCategories, shopBrands } from "@/data/shop";

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;

  const filtered = products.filter((p) => {
    const catOk = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const brandOk = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const priceOk = p.price <= priceMax;
    return catOk && brandOk && priceOk;
  });

  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const toggleFilter = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar variant="shop" />
      <main className="flex-1">
        <PageHero title="Shop" breadcrumb={[{ label: "Home", href: "/" }, { label: "Shop" }]} />

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10">
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Price */}
              <div>
                <h4 className="text-sm font-bold text-[#1B3C4A] mb-4">Price ($)</h4>
                <div className="flex justify-between text-xs text-[#7A9BAA] mb-2">
                  <span>Min 0</span>
                  <span>Max {priceMax}</span>
                </div>
                <input
                  type="range" min={0} max={1000} value={priceMax}
                  onChange={(e) => { setPriceMax(Number(e.target.value)); setCurrentPage(1); }}
                  className="w-full accent-[#00B5A3]"
                />
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-sm font-bold text-[#1B3C4A] mb-4">Categories</h4>
                <div className="space-y-2">
                  {shopCategories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                        className="accent-[#00B5A3]"
                      />
                      <span className="text-sm text-[#4A6572]">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="text-sm font-bold text-[#1B3C4A] mb-4">Brands</h4>
                <div className="space-y-2">
                  {shopBrands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleFilter(selectedBrands, setSelectedBrands, brand)}
                        className="accent-[#00B5A3]"
                      />
                      <span className="text-sm text-[#4A6572]">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {paginated.map((product) => (
                  <Link key={product.slug} href={`/shop/${product.slug}`} className="group">
                    <div className="relative rounded-2xl overflow-hidden bg-[#F5FAFA] h-52 mb-3">
                      {product.isOnSale && (
                        <span className="absolute top-3 left-3 bg-[#00B5A3] text-white text-xs font-bold px-2.5 py-1 rounded-md z-10">Sale</span>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <StarRating rating={product.rating} />
                    <h3 className="text-sm font-semibold text-[#1B3C4A] mt-2 group-hover:text-[#00B5A3] transition-colors">{product.name}</h3>
                    <p className="text-sm font-bold text-[#1B3C4A] mt-1">${product.price.toFixed(2)}</p>
                    {product.colors && (
                      <div className="flex gap-1.5 mt-2">
                        {product.colors.map((c) => (
                          <span key={c} className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-lg border border-[#E2EEF2] flex items-center justify-center text-sm text-[#7A9BAA] hover:border-[#00B5A3] hover:text-[#00B5A3] disabled:opacity-40"
                  >
                    ‹
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                        p === currentPage
                          ? "bg-[#00B5A3] text-white"
                          : "border border-[#E2EEF2] text-[#7A9BAA] hover:border-[#00B5A3] hover:text-[#00B5A3]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-lg border border-[#E2EEF2] flex items-center justify-center text-sm text-[#7A9BAA] hover:border-[#00B5A3] hover:text-[#00B5A3] disabled:opacity-40"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
