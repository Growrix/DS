import React from 'react'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Container, Section, SectionHeader } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'
import { WHY_CHOOSE_FEATURES } from '@/data/index'

export function WhyChooseAltSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: image stack */}
          <div className="relative hidden lg:block">
            <div className="relative h-[480px]">
              <div className="absolute top-0 left-0 right-8 bottom-8 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/seed/wcalt1/600/480"
                  alt="EcoHaul team in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-52 h-48 rounded-2xl overflow-hidden
                              shadow-xl border-4 border-white">
                <Image
                  src="https://picsum.photos/seed/wcalt2/300/240"
                  alt="Waste sorting facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 -right-4 bg-primary-600 rounded-xl p-5 shadow-green text-white text-center">
              <p className="font-display font-extrabold text-3xl text-accent-400 leading-none">98%</p>
              <p className="text-white/75 text-xs uppercase tracking-wide mt-1 font-semibold">On-Time</p>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <SectionHeader
              eyebrow="Why EcoHaul"
              title="Why Choose EcoHaul?"
              subtitle="We combine operational excellence with a genuine commitment to environmental
                        responsibility—making us the obvious choice for discerning households and businesses."
              align="left"
            />

            <ul className="mt-10 space-y-4">
              {WHY_CHOOSE_FEATURES.map((feature) => (
                <li key={feature.id}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50
                             border border-transparent hover:border-primary-100 transition-colors">
                  <CheckCircle size={20} className="text-primary-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-forest text-heading-sm">
                      {feature.title}
                    </p>
                    {feature.description && (
                      <p className="text-neutral-500 text-body-sm mt-1">{feature.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <Button href="/about" variant="primary" size="lg"
              className="mt-10" icon={<ArrowRight size={18} />}>
              Discover Our Story
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
