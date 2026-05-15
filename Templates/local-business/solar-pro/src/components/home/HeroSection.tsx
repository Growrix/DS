"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    title: "We Invest In The Future Of Our Planet!",
    subtitle:
      "As a worldwide distributor of solar supplies we endeavor to provide fast and knowledgeable service. Get materials delivered by sea or air.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
    cta1: { label: "More About Us", href: "/about" },
    cta2: { label: "Our Services", href: "/services" },
  },
  {
    id: 2,
    title: "Leading Supplier Of Solar Materials Worldwide",
    subtitle:
      "We drive the transition to more sustainable, reliable and affordable energy systems. With our innovative technologies, we energize society.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360ad1304?auto=format&fit=crop&w=1920&q=80",
    cta1: { label: "Our Projects", href: "/projects" },
    cta2: { label: "Get A Quote", href: "/contact" },
  },
  {
    id: 3,
    title: "Complete Commercial, Residential & Industrial Solar Systems",
    subtitle:
      "Our certified engineers design and deliver tailor-made renewable energy solutions for homes, businesses and industrial facilities.",
    image:
      "https://images.unsplash.com/photo-1466611653911-0265b1c1d452?auto=format&fit=crop&w=1920&q=80",
    cta1: { label: "Explore Services", href: "/services" },
    cta2: { label: "Contact Us", href: "/contact" },
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), []);
  const prev = useCallback(
    () => setActive((p) => (p - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="sp-hero" aria-label="Hero slideshow">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="sp-hero-slide"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="sp-hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="sp-kicker mb-3">Clean Energy Solutions</p>
          <h1 className="sp-hero-title">{slides[active].title}</h1>
          <p className="sp-hero-sub">{slides[active].subtitle}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href={slides[active].cta1.href} className="sp-btn sp-btn-primary">
              {slides[active].cta1.label}
            </Link>
            <Link href={slides[active].cta2.href} className="sp-btn sp-btn-outline">
              {slides[active].cta2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all rounded-full"
            style={{
              width: i === active ? 28 : 10,
              height: 10,
              background: i === active ? "var(--sp-primary)" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        ›
      </button>
    </section>
  );
}
