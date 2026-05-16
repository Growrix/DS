import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background imagery overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />

      {/* Diagonal orange accent */}
      <div
        className="absolute bottom-0 left-0 w-32 md:w-48 h-full bg-accent/20"
        style={{ clipPath: "polygon(0 0, 40% 0, 100% 100%, 0 100%)" }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[1240px] w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Pre-label */}
          <p className="section-label text-accent mb-4">
            Welcome to NexBuild
          </p>

          {/* Headline */}
          <h1 className="font-display font-bold leading-[1.02] mb-6">
            <span className="text-white text-5xl md:text-6xl lg:text-7xl block">
              NexBuild is
            </span>
            <span className="text-white text-5xl md:text-6xl lg:text-7xl block">
              Innovation
            </span>
            <span
              className="text-accent text-5xl md:text-6xl lg:text-7xl block"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontStyle:  "italic",
                fontWeight: 700,
              }}
            >
              In Construction
            </span>
          </h1>

          {/* Description */}
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-body">
            Our company delivers a comprehensive range of tower cranes, forklifts,
            elevated work platforms, mobile scaffolding, and specialised construction solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/services" size="lg" variant="primary">
              Our Services <ArrowRight className="w-5 h-5" />
            </Button>
            <button className="group flex items-center gap-3 text-white hover:text-accent transition-colors">
              <span className="w-12 h-12 rounded-full border-2 border-white/40 group-hover:border-accent flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </span>
              <span className="font-accent font-semibold">Watch Overview</span>
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: "320+", label: "Projects" },
              { value: "18+",  label: "Years" },
              { value: "98%",  label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-3xl md:text-4xl font-bold text-accent mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-400 uppercase tracking-widest font-accent">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
