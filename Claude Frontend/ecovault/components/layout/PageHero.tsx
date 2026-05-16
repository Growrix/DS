import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/index'

interface Breadcrumb { label: string; href?: string }

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-forest py-16 sm:py-20 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-primary-600/20 blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute left-0 bottom-0 w-1.5 bg-accent-400 h-full" />

      <Container className="relative">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <Link href="/" className="text-white/50 text-caption hover:text-accent-400 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={crumb.label}>
                <ChevronRight size={13} className="text-white/30" />
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href}
                    className="text-white/50 text-caption hover:text-accent-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-accent-400 text-caption font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <h1 className="font-display font-extrabold text-white leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/70 text-body-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="w-full" preserveAspectRatio="none">
          <path d="M0 32L480 10L960 20L1440 0V32H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
