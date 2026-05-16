import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, UtensilsCrossed, Stethoscope, ShoppingCart } from 'lucide-react'
import { Container, Section, SectionHeader, Badge } from '@/components/ui/index'
import { INDUSTRIES } from '@/data/index'
import type { Industry } from '@/types'

const ICON_MAP: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Stethoscope,
  ShoppingCart,
}

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = ICON_MAP[industry.icon] ?? UtensilsCrossed
  return (
    <article className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover
                         transition-all duration-350 hover:-translate-y-1 bg-white">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />

        {/* Icon badge */}
        <div className="absolute top-4 left-4">
          <div className="w-11 h-11 bg-accent-400 rounded-xl flex items-center justify-center shadow-accent">
            <Icon size={22} className="text-forest" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-forest text-heading-lg mb-3">
          {industry.title}
        </h3>
        <p className="text-neutral-600 text-body-sm leading-relaxed mb-4">
          {industry.description}
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-body-sm
                     hover:gap-3 transition-all duration-200 font-display"
        >
          Learn More <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  )
}

export function IndustriesSection() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="We Serve Companies"
            title="Industries We Served"
            subtitle="From hospitality to healthcare, our tailored programmes meet the unique
                      waste needs of every sector."
            align="left"
          />

          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg
                       border-2 border-primary-600 text-primary-600 font-semibold font-display text-sm
                       hover:bg-primary-600 hover:text-white transition-colors"
          >
            All Services <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
