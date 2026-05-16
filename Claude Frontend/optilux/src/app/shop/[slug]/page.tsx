"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PageHero, StarRating } from "@/components/ui/shared";
import { products } from "@/data/shop";
import { use } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export default function ProductSinglePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: (typeof products)[0] }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? null);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const imgs = product.images.length > 1 ? product.images : [product.image, product.image, product.image];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <Navbar variant="shop" />
      <main className="flex-1">
        <PageHero title="Shop" breadcrumb={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }]} />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Images */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-[#EAF8F6] relative h-96 mb-4">
                <Image src={imgs[activeImg]} alt={product.name} fill className="object-contain p-6" />
              </div>
              <div className="flex gap-3">
                {imgs.slice(0, 5).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden bg-[#EAF8F6] flex-shrink-0 border-2 transition-all ${
                      activeImg === i ? "border-[#00B5A3]" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt="" width={64} height={64} className="object-contain p-1 w-full h-full" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={product.rating} />
                <span className="text-sm text-[#7A9BAA]">{product.rating}</span>
              </div>

              <h1 className="text-[#1B3C4A] text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-[#4A6572] text-sm leading-relaxed mb-6">{product.description}</p>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                {product.originalPrice && (
                  <span className="text-[#B0CDD8] text-lg line-through">${product.originalPrice.toFixed(2)}</span>
                )}
                <span className="text-[#1B3C4A] text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.isOnSale && (
                  <span className="bg-[#00B5A3] text-white text-xs font-bold px-2.5 py-1 rounded-md">Sale</span>
                )}
              </div>

              {/* Colors */}
              {product.colors && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-[#1B3C4A] mb-3">Select Color</p>
                  <div className="flex gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          selectedColor === c ? "border-[#1B3C4A] scale-110" : "border-transparent"
                        }`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#1B3C4A] mb-3">Quantity</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-9 h-9 rounded-lg bg-[#EAF8F6] flex items-center justify-center text-[#00B5A3] hover:bg-[#00B5A3] hover:text-white transition-all"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-[#1B3C4A]">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-9 h-9 rounded-lg bg-[#EAF8F6] flex items-center justify-center text-[#00B5A3] hover:bg-[#00B5A3] hover:text-white transition-all"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAdd}
                className={`w-full py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  added ? "bg-green-500 text-white" : "bg-[#00B5A3] text-white hover:bg-[#009E8E]"
                }`}
              >
                <ShoppingCart size={16} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
