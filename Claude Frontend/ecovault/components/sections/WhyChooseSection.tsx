import React from 'react'
import Image from 'next/image'
import { Truck, Award, Leaf, ArrowRight } from 'lucide-react'
import { Container, Section, SectionHeader, IconBox } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'

const PILLARS = [
  {
    icon: Truck,
    title: 'We Deliver',
    description:
      'Our fleet of eco-certified vehicles operates on optimised routes, ensuring your waste is collected on schedule—every time, without exception.',
  },
  {
    icon: Award,
    title: 'Our Expertise',
    description:
      'With 15+ years in the industry, our certified specialists handle everything from household bins to complex commercial and hazardous waste streams.',
  },
]

const IMAGE_GRID = [
  { seed: 'wc1', w: 280, h: 200 },
  { seed: 'wc2', w: 280, h: 200 },
  { seed: 'wc3', w: 280, h: 180 },
  { seed: 'wc4', w: 280, h: 180 },
]

export function WhyChooseSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left content */}
          <div>
            <SectionHeader
              eyebrow="Why Choose EcoHaul"
              title="Your Trusted Partner in Sustainable Waste Management"
              subtitle="Thousands of homes and businesses rely on EcoHaul for scheduled collection,
                responsible recycling, and full regulatory compliance. Here's what sets us apart."
              align="left"
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PILLARS.map(({ icon: Icon, title, description }) => (
                <div key={title}
                  className="p-5 bg-neutral-50 rounded-xl border border-neutral-100
                             hover:border-primary-200 hover:bg-primary-50/40 transition-colors group">
                  <IconBox
                    icon={<Icon size={22} />}
                    variant="primary"
                    size="md"
                    className="mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors"
                  />
                  <h3 className="font-display font-bold text-forest mb-2 text-heading-md">
                    {title}
                  </h3>
                  <p className="text-neutral-600 text-body-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stat highlight */}
            <div className="mt-8 flex items-center gap-6 p-5 bg-primary-600 rounded-xl text-white">
              <div className="text-center shrink-0">
                <p className="font-display font-extrabold text-display-md text-accent-400 leading-none">
                  4,800
                </p>
                <p className="text-white/70 text-caption uppercase tracking-wide mt-1">
                  Customers
                </p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <p className="text-white/80 text-body-sm leading-relaxed">
                Over four thousand satisfied clients trust EcoHaul for clean, compliant,
                and eco-responsible waste management every week.
              </p>
            </div>

            <Button href="/about" variant="primary" size="md"
              className="mt-8" icon={<ArrowRight size={16} />}>
              Learn More About Us
            </Button>
          </div>

          {/* Right image grid */}
          <div className="relative hidden lg:grid grid-cols-2 gap-4">
            {IMAGE_GRID.map(({ seed, w, h }, i) => (
              <div key={seed}
                className={`relative overflow-hidden rounded-xl shadow-card
                           hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300
                           ${i === 0 ? 'col-span-1' : ''}
                           ${i === 2 ? 'mt-6' : ''}
                           ${i === 3 ? 'mt-0' : ''}`}
              >
                <Image
                  src={`https://picsum.photos/seed/${seed}/${w}/${h}`}
                  alt="EcoHaul waste management team"
                  width={w}
                  height={h}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent-400 text-forest rounded-xl p-4
                            shadow-accent font-display font-bold text-center">
              <p className="text-2xl font-extrabold leading-none">15+</p>
              <p className="text-xs font-semibold uppercase tracking-wide mt-0.5">Years</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
