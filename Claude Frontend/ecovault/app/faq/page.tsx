'use client'

import type { Metadata } from 'next'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section, SectionHeader, Card } from '@/components/ui/index'
import { CTABannerSection } from '@/components/sections/CTABannerSection'
import { FAQS } from '@/data/index'
import { cn } from '@/lib/utils'
import type { FAQItem } from '@/types'

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn(
      'border border-neutral-200 rounded-xl overflow-hidden transition-colors',
      open ? 'border-primary-300 shadow-sm' : 'hover:border-neutral-300'
    )}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
        aria-expanded={open}
      >
        <span className={cn(
          'font-display font-semibold text-heading-sm leading-snug pr-4',
          open ? 'text-primary-700' : 'text-forest group-hover:text-primary-700'
        )}>
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            'shrink-0 text-neutral-400 transition-transform duration-250',
            open ? 'rotate-180 text-primary-600' : ''
          )}
        />
      </button>

      <div className={cn(
        'overflow-hidden transition-all duration-300',
        open ? 'max-h-96' : 'max-h-0'
      )}>
        <p className="px-5 pb-5 text-neutral-600 text-body-sm leading-relaxed border-t border-neutral-100 pt-4">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

const CATEGORIES = ['All', 'General', 'Residential', 'Commercial', 'Hazardous', 'Billing', 'Sustainability']

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory)

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find quick answers to the most common questions about our services, pricing, and operations."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <Section className="bg-white">
        <Container size="md">
          <SectionHeader
            eyebrow="FAQ"
            title="Got Questions? We've Got Answers."
            subtitle="Can't find what you're looking for? Contact our team directly."
            align="center"
            className="mb-10"
          />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-semibold font-display transition-colors',
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-green'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filtered.map((item) => (
              <FAQAccordionItem key={item.id} item={item} />
            ))}
          </div>

          {/* Contact nudge */}
          <Card variant="default" padding="lg"
            className="mt-14 bg-neutral-50 border border-neutral-200 text-center">
            <p className="font-display font-bold text-forest text-heading-lg mb-3">
              Still Have Questions?
            </p>
            <p className="text-neutral-600 text-body-sm mb-6">
              Our customer team is available Mon–Sat, 7 AM–6 PM.
            </p>
            <a href="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3
                         rounded-lg font-semibold font-display text-sm hover:bg-primary-700
                         transition-colors shadow-green">
              Contact Us
            </a>
          </Card>
        </Container>
      </Section>
    </>
  )
}
