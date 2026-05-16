import Link from "next/link";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { DesignServiceCard } from "@/components/ui/Cards";
import { DESIGN_SERVICES } from "@/data";
import { ArrowRight } from "lucide-react";

export function DesignServicesSection() {
  // First item is the intro card, rest are service cards
  const [intro, ...services] = DESIGN_SERVICES;

  return (
    <section className="py-20 md:py-28 bg-[#F7F8FC]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left — Intro text */}
          <div className="flex flex-col justify-center">
            <SectionLabel>What We Offer</SectionLabel>
            <Heading size="lg" className="mb-6">
              Our Special{" "}
              <span className="text-accent">Design Services</span>
            </Heading>
            <p className="text-neutral-500 leading-relaxed mb-8 font-body">
              From concept validation through construction closeout, our specialist
              teams bring cross-disciplinary expertise to every project phase.
              We combine technical rigour with creative problem-solving to deliver
              results that hold up on paper and in the field.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent font-accent font-semibold hover:gap-3 transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — First service card (featured) */}
          <div className="flex flex-col justify-center">
            <DesignServiceCard service={intro} />
          </div>

          {/* Bottom — Remaining service cards */}
          {services.map((service) => (
            <DesignServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
