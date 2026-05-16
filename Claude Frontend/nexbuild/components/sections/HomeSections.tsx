"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { TeamCard, BlogCard } from "@/components/ui/Cards";
import { Button } from "@/components/ui/Button";
import { TEAM_MEMBERS, TESTIMONIALS, BLOG_POSTS, STATS } from "@/data";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";

// ============================================================
// TEAM SECTION
// ============================================================
export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="text-center mb-14">
          <SectionLabel className="justify-center">Let's Help You</SectionLabel>
          <Heading size="lg" className="mt-2">Our Team Members</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/team" variant="outline" size="md">
            Meet the Full Team <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

// ============================================================
// TESTIMONIALS SECTION
// ============================================================
export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = TESTIMONIALS[current];

  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <Container size="sm" className="relative text-center">
        <SectionLabel className="justify-center">Client Reviews</SectionLabel>
        <Heading size="lg" light className="mt-2 mb-14">
          We Care About <span className="text-accent">Your Opinion</span>
        </Heading>

        <div className="relative">
          {/* Nav Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial */}
          <div className="max-w-2xl mx-auto">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>

            <blockquote className="text-neutral-200 text-base md:text-lg leading-relaxed mb-8 font-body italic">
              &ldquo;{t.content}&rdquo;
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-neutral-500 overflow-hidden mb-3 border-2 border-accent">
                <Image
                  src={t.avatar ?? "/images/placeholder-avatar.jpg"}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <p className="heading-display text-white text-lg">{t.name}</p>
              <p className="text-accent text-xs font-accent font-semibold tracking-widest uppercase mt-1">
                {t.role} — {t.company}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-accent w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================================
// STATS / LOGOS SECTION
// ============================================================
export function StatsSection() {
  return (
    <section className="py-14 bg-white border-b border-neutral-100">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-accent">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ============================================================
// PARTNER LOGOS SECTION
// ============================================================
const PARTNER_LOGOS = [
  { name: "Structure Co",  icon: "🏗️" },
  { name: "BuildSafe",     icon: "🦺" },
  { name: "UrbanFrame",    icon: "🏢" },
  { name: "ConcretePro",   icon: "🧱" },
  { name: "SteelCore",     icon: "⚙️" },
];

export function PartnersSection() {
  return (
    <section className="py-14 bg-[#F7F8FC] border-b border-neutral-100">
      <Container>
        <p className="text-center text-xs text-neutral-400 uppercase tracking-widest font-accent mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {PARTNER_LOGOS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center gap-2 py-4 px-3 rounded-ds-md bg-white border border-neutral-100 hover:border-accent/30 hover:shadow-ds-sm transition-all"
            >
              <span className="text-3xl">{p.icon}</span>
              <span className="text-xs text-neutral-400 font-accent font-semibold">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ============================================================
// BLOG SECTION
// ============================================================
export function BlogSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="text-center mb-14">
          <SectionLabel className="justify-center">From the Blog</SectionLabel>
          <Heading size="lg" className="mt-2">
            Latest <span className="text-accent">Industry News</span>
          </Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/news" variant="outline" size="md">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

// ============================================================
// CTA BANNER SECTION
// ============================================================
export function CTABannerSection() {
  return (
    <section className="relative py-20 bg-accent overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)",
        }}
      />
      <Container className="relative text-center">
        <h2
          className="text-white font-bold mb-4"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Ready to Build Something Exceptional?
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8 font-body">
          From ground-breaking to grand opening — partner with NexBuild for
          construction management that delivers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="secondary" size="lg">
            Start Your Project
          </Button>
          <Button href="/projects" variant="accent" size="lg">
            View Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
