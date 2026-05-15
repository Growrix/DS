"use client";
import Image from "next/image";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/content";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section
      className="sp-section relative overflow-hidden"
      style={{ background: "var(--sp-navy)" }}
    >
      {/* Map BG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23f9c131' fill-opacity='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="sp-kicker">Testimonials</p>
          <h2 className="sp-section-title sp-section-title-light mt-2">
            Customers Doing It Their Way
          </h2>
          <p className="mt-3 text-white/60 text-base">
            Our Customers Share Their Experiences &amp; Insights
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="sp-testimonial-card" style={{ background: "rgba(255,255,255,0.05)" }}>
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} style={{ color: "var(--sp-primary)" }}>★</span>
              ))}
            </div>
            <p className="text-white/85 text-lg leading-relaxed italic">
              &ldquo;{t.content}&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Image
                src={t.avatar}
                alt={t.name}
                width={52}
                height={52}
                className="rounded-full object-cover ring-2 ring-yellow-400"
              />
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm" style={{ color: "var(--sp-primary)" }}>
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="rounded-full transition-all"
                style={{
                  width: i === active ? 24 : 10,
                  height: 10,
                  background:
                    i === active
                      ? "var(--sp-primary)"
                      : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Design & Shipping",
              desc: "We collaborate with you to design and deliver a system that meets your utility usage and selecting equips.",
            },
            {
              title: "Installation Support",
              desc: "Whether you want to install the system on your own or hire local contractors, we manage the installation directly.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-5 p-6 rounded-xl"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <span className="text-3xl">🔆</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">{card.title}</h3>
                <p className="text-sm text-white/60">{card.desc}</p>
                <button
                  className="sp-btn sp-btn-primary mt-4 text-xs py-2 px-4"
                  type="button"
                >
                  Schedule A Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
