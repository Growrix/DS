import React from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { Container } from '@/components/ui/index'
import { Button } from '@/components/ui/Button'

interface CTABannerSectionProps {
  title?: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'dark' | 'light'
}

export function CTABannerSection({
  title = 'Manage Waste Effectively and Reduce Environmental Impact',
  subtitle = 'Get a free pickup estimate today and join thousands of eco-conscious homes and businesses.',
  primaryCta  = { label: 'Request a Pickup', href: '/contact' },
  secondaryCta = { label: 'Contact With Us',  href: '/contact#form' },
  variant = 'dark',
}: CTABannerSectionProps) {
  const isDark = variant === 'dark'

  return (
    <section
      className={`relative py-14 sm:py-16 overflow-hidden
                  ${isDark ? 'bg-forest' : 'bg-neutral-50 border-y border-neutral-200'}`}
    >
      {isDark && (
        <>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary-600/20" />
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96
                          rounded-full bg-primary-500/10 blur-3xl" />
        </>
      )}

      <Container className="relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className={`max-w-2xl ${!isDark && 'text-center lg:text-left'}`}>
            <h2
              className={`font-display font-extrabold leading-tight tracking-tight
                          ${isDark ? 'text-white' : 'text-forest'}`}
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-3 text-body-md ${isDark ? 'text-white/70' : 'text-neutral-600'}`}>
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Button href={primaryCta.href} variant="accent" size="lg"
              icon={<ArrowRight size={18} />}>
              {primaryCta.label}
            </Button>
            <Button
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className={isDark
                ? 'border-white/40 text-white hover:bg-white hover:text-forest'
                : 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
              }
              icon={<Phone size={16} />}
              iconPosition="left"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
