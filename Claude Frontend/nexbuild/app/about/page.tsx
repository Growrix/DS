import type { Metadata } from "next";
import Image from "next/image";
import { PageHero }    from "@/components/layout/PageHero";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { Button }      from "@/components/ui/Button";
import { TeamSection, StatsSection, TestimonialsSection } from "@/components/sections/HomeSections";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:       "About Us",
  description: "Learn about NexBuild's 18-year history of delivering award-winning construction projects across the continental United States.",
};

const VALUES = [
  {
    title: "Precision Engineering",
    description: "Every structural calculation, cost estimate, and programme sequence is scrutinised by our senior engineers before it leaves the office.",
  },
  {
    title: "Client-First Transparency",
    description: "Monthly cost reports, real-time project dashboards, and open-book contracting keep you fully informed at every milestone.",
  },
  {
    title: "Sustainable by Design",
    description: "We integrate low-carbon materials, passive design strategies, and renewable energy systems from the earliest concept stages.",
  },
  {
    title: "Safety Without Compromise",
    description: "Our TRIR consistently ranks in the top 10% of the ENR Safety Report. Every worker goes home safely — that's non-negotiable.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About NexBuild"
        breadcrumbs={[
          { label: "NexBuild", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <Heading size="lg" className="mt-2 mb-6">
                Building Since 2006 — <span className="text-accent">Built on Trust</span>
              </Heading>
              <p className="text-neutral-500 leading-relaxed mb-4 font-body">
                NexBuild was founded in 2006 by Marcus Holt, a licensed structural engineer
                with a vision: to bring the analytical rigour of engineering consulting into
                every phase of construction delivery. Starting with a team of eight in Houston,
                we have grown to 250+ construction professionals across five regional offices.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8 font-body">
                Today we manage over $1.2 billion in active construction value, from downtown
                office towers to critical energy infrastructure — always with the same commitment
                to precision, safety, and client transparency that defined our first project.
              </p>
              <Button href="/contact" size="lg" variant="primary">
                Work With Us <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-ds-xl overflow-hidden aspect-square bg-neutral-100 relative">
                <Image
                  src="/images/about-story.jpg"
                  alt="NexBuild founding team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-ds-lg p-6 shadow-accent">
                <p className="heading-display text-4xl font-bold">18+</p>
                <p className="text-xs font-accent font-semibold tracking-widest uppercase mt-1">
                  Years of<br/>Excellence
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#F7F8FC]">
        <Container>
          <div className="text-center mb-14">
            <SectionLabel className="justify-center">What Drives Us</SectionLabel>
            <Heading size="lg" className="mt-2">
              Our Core <span className="text-accent">Values</span>
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-ds-lg p-8 border border-neutral-100 shadow-ds-sm flex gap-5">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="heading-display text-lg text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-body">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TeamSection />
      <TestimonialsSection />
    </>
  );
}
