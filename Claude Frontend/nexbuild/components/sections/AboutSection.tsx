import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, SectionLabel, Heading } from "@/components/ui/primitives";
import { CheckCircle, ArrowRight } from "lucide-react";

const ABOUT_FEATURES = [
  "Locally governed projects handled by enabled application teams",
  "Identify the supply chain with additional resources from their teams",
  "Manage commercial contracts with both finance and their contract teams",
  "Dedicated project controls and real-time reporting dashboards",
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-ds-xl overflow-hidden aspect-[4/3] bg-neutral-100">
              <Image
                src="/images/about-main.jpg"
                alt="NexBuild construction team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Play button overlay */}
            <button className="absolute inset-0 flex items-center justify-center group">
              <span className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center shadow-accent group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
            {/* Accent badge */}
            <div className="absolute -bottom-5 -right-5 bg-accent text-white rounded-ds-lg p-5 shadow-accent hidden md:block">
              <p className="heading-display text-4xl font-bold">18+</p>
              <p className="text-xs font-accent font-semibold tracking-widest uppercase mt-1">
                Years of<br />Excellence
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <SectionLabel>About Our Agency</SectionLabel>
            <Heading size="lg" className="mb-6">
              A Modern Construction&nbsp;&amp;
              <br />
              <span className="text-accent">Industrial Agency</span>
            </Heading>
            <p className="text-neutral-500 leading-relaxed mb-5 font-body">
              NexBuild has spent two decades building reputations — and structures —
              that outlast expectations. Our integrated approach brings design, engineering,
              and construction management together under one team so your project benefits
              from unified expertise at every stage.
            </p>
            <p className="text-neutral-500 leading-relaxed mb-8 font-body">
              We believe the highest quality results come from the closest collaboration.
              From feasibility through handover, your dedicated project team is accountable
              for every milestone.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {ABOUT_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-600 font-body">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Signature / CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/about" size="lg" variant="primary">
                Learn More <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="text-left">
                <p className="font-display text-lg text-primary italic">Marcus Holt</p>
                <p className="text-xs text-neutral-400 font-accent tracking-widest uppercase">
                  Founder & President
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
