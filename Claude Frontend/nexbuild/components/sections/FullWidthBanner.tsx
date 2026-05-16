"use client";

import { useState } from "react";
import { BANNER_TABS } from "@/data";
import { Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import {
  Building,
  Zap,
  Radio,
  ShieldAlert,
} from "lucide-react";

const TAB_ICONS: Record<string, React.FC<{ className?: string }>> = {
  facade: Building,
  power:  Zap,
  sensor: Radio,
  alarm:  ShieldAlert,
};

export function FullWidthBanner() {
  const [active, setActive] = useState(BANNER_TABS[0].id);

  return (
    <section className="relative overflow-hidden">
      {/* Hero image with dark overlay */}
      <div className="relative py-28 md:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/82" />

        <Container className="relative text-center">
          <h2
            className="text-white font-bold leading-tight mb-3"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Facade Engineering
          </h2>
          <h3
            className="text-accent font-bold leading-tight italic"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Building Consultancy
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed font-body">
            Trustworthy experts believe that building relationships can eliminate
            a lot of effort and skill coordination required in the construction industry.
          </p>
        </Container>
      </div>

      {/* Tabs Row */}
      <div className="bg-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 -mt-1 border-t-4 border-accent">
            {BANNER_TABS.map((tab, i) => {
              const Icon = TAB_ICONS[tab.id] ?? Building;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    "group flex flex-col items-center text-center px-4 py-8",
                    "border-b-4 transition-all duration-200",
                    i < BANNER_TABS.length - 1 && "border-r border-neutral-100",
                    isActive
                      ? "border-b-accent bg-accent/5"
                      : "border-b-transparent hover:border-b-accent/40 hover:bg-neutral-50",
                  )}
                >
                  <Icon
                    className={cn(
                      "w-8 h-8 mb-3 transition-colors",
                      isActive ? "text-accent" : "text-neutral-400 group-hover:text-accent",
                    )}
                  />
                  <h4
                    className={cn(
                      "heading-display text-sm md:text-base transition-colors",
                      isActive ? "text-accent" : "text-primary group-hover:text-accent",
                    )}
                  >
                    {tab.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed hidden md:block font-body">
                    {tab.description}
                  </p>
                </button>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
