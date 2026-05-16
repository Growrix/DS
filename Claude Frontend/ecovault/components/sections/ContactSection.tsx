'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Container, Section, SectionHeader, Card, IconBox } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'
import { BRAND_PHONE, BRAND_EMAIL, BRAND_ADDRESS, BRAND_HOURS } from '@/constants'

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Phone',
    value: BRAND_PHONE,
    href: `tel:${BRAND_PHONE}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: BRAND_EMAIL,
    href: `mailto:${BRAND_EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: BRAND_ADDRESS,
    href: '#map',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: BRAND_HOURS,
    href: undefined,
  },
]

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 bg-primary-600 rounded-xl flex items-center justify-center shrink-0 shadow-green">
        <Icon size={18} className="text-white" />
      </div>
      <div>
        <p className="text-neutral-500 text-caption font-semibold uppercase tracking-wide mb-0.5">
          {label}
        </p>
        <p className="text-forest font-semibold text-body-sm leading-snug">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block p-4 bg-neutral-50 rounded-xl border border-neutral-100
                                hover:border-primary-200 hover:bg-primary-50/50 transition-colors">
        {content}
      </a>
    )
  }
  return (
    <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
      {content}
    </div>
  )
}

// ─── Contact Form ────────────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('done'), 1500)
  }

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-5">
          <Send size={28} className="text-primary-600" />
        </div>
        <h3 className="font-display font-bold text-forest text-heading-lg mb-3">
          Message Sent!
        </h3>
        <p className="text-neutral-600 text-body-sm max-w-xs">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-body-sm font-semibold font-display text-forest mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50
                       text-body-sm text-neutral-800 placeholder-neutral-400
                       focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400
                       transition-colors"
          />
        </div>
        <div>
          <label className="block text-body-sm font-semibold font-display text-forest mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50
                       text-body-sm text-neutral-800 placeholder-neutral-400
                       focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400
                       transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-body-sm font-semibold font-display text-forest mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50
                       text-body-sm text-neutral-800 placeholder-neutral-400
                       focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400
                       transition-colors"
          />
        </div>
        <div>
          <label className="block text-body-sm font-semibold font-display text-forest mb-1.5">
            Service Type
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50
                       text-body-sm text-neutral-700
                       focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400
                       transition-colors"
          >
            <option value="">Select a service</option>
            <option>Residential Pickup</option>
            <option>Commercial Pickup</option>
            <option>Recycling Services</option>
            <option>Hazardous Disposal</option>
            <option>Bulk Item Removal</option>
            <option>Construction Debris</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-body-sm font-semibold font-display text-forest mb-1.5">
          Your Message *
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your waste management needs..."
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50
                     text-body-sm text-neutral-800 placeholder-neutral-400 resize-none
                     focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400
                     transition-colors"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={status === 'sending'}
        icon={<Send size={16} />}
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}

// ─── Main Section ────────────────────────────────────────────────────────────

export function ContactSection() {
  return (
    <Section id="form" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div>
            <SectionHeader
              eyebrow="Get in Touch"
              title="Have Questions? Feel Free to Write Us"
              subtitle="Our team is ready to help you find the right waste management solution.
                        Fill in the form and we'll respond within one business day."
              align="left"
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_ITEMS.map((item) => (
                <ContactCard key={item.label} {...item} icon={item.icon} />
              ))}
            </div>
          </div>

          {/* Right: form */}
          <Card variant="default" padding="lg" className="border border-neutral-100">
            <h3 className="font-display font-bold text-forest text-heading-lg mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </Section>
  )
}
