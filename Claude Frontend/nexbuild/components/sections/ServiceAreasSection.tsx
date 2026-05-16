"use client";

import Image from "next/image";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { Button } from "@/components/ui/Button";
import { Send, ArrowRight } from "lucide-react";
import { useState } from "react";

export function ServiceAreasSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent]  = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Integration point — replace with API call
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

          {/* Left — Text */}
          <div className="text-white">
            <SectionLabel className="text-accent">Our Better Vision</SectionLabel>
            <Heading size="lg" light className="mb-5">
              What We Serve{" "}
              <span className="text-accent">Site Areas</span>
            </Heading>
            <p className="text-neutral-300 leading-relaxed mb-8 font-body text-sm md:text-base">
              Regardless of project size or complexity, NexBuild mobilises
              the right specialists for your site. Our regional network covers
              the entire continental US with local teams who understand
              regional code requirements, supply chains, and workforce dynamics.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Find Out More <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Centre — Image */}
          <div className="hidden lg:block">
            <div className="relative aspect-[3/4] rounded-ds-xl overflow-hidden shadow-ds-xl">
              <Image
                src="/images/worker-hero.jpg"
                alt="NexBuild site worker"
                fill
                className="object-cover object-top"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-accent rounded-ds-lg p-7 shadow-accent">
            <h3 className="heading-display text-xl text-white mb-6">Get In Touch</h3>

            {sent ? (
              <div className="text-white text-center py-6">
                <p className="text-lg font-semibold mb-2">Thank you!</p>
                <p className="text-sm opacity-80">We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/60 py-3 outline-none text-sm font-body focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/60 py-3 outline-none text-sm font-body focus:border-white transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/40 text-white placeholder-white/60 py-3 outline-none text-sm font-body resize-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="mt-4 w-full bg-white text-accent hover:bg-primary hover:text-white font-accent font-semibold text-sm py-3.5 px-6 rounded-ds-sm flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  Submit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
