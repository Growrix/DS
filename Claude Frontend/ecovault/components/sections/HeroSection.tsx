import React from 'react'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/index'

const HERO_BULLETS = [
  'Licensed & insured waste collection',
  'Eco-certified recycling programmes',
  'Same-day emergency pickups available',
]

const STATS = [
  { value: '4,800+', label: 'Happy Clients'    },
  { value: '15+',    label: 'Years Experience'  },
  { value: '98%',    label: 'On-Time Rate'      },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Hero banner"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-forest-dark" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-primary-900 opacity-85" />

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-400 blur-3xl" />
        <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-accent-400 blur-2xl" />
      </div>

      {/* Accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent-400" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">

          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-accent-400/20 border border-accent-400/40
                            rounded-full px-4 py-1.5 text-accent-300 text-sm font-semibold font-display
                            tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse-slow" />
              Trusted Waste Management
            </div>

            <h1 className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Home & Business
              <span className="block text-accent-400"> Waste Pickup</span>
              Solution
            </h1>

            <p className="text-white/75 text-body-lg leading-relaxed mb-8 max-w-lg">
              EcoHaul delivers reliable, eco-certified waste collection and recycling services
              for households and businesses of every size—on your schedule, at transparent prices.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-10">
              {HERO_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-white/80 text-body-sm">
                  <CheckCircle size={17} className="text-accent-400 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="accent" size="lg"
                icon={<ArrowRight size={18} />}>
                Request a Pickup
              </Button>
              <Button href="/services" variant="outline" size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-forest">
                Our Services
              </Button>
            </div>
          </div>

          {/* Right stats card */}
          <div className="hidden lg:flex flex-col items-end gap-5">
            {/* Big stat card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-full max-w-sm">
              <p className="text-white/60 text-sm font-display uppercase tracking-widest mb-1">
                Customers Served
              </p>
              <p className="text-white font-display font-extrabold leading-none mb-4"
                style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
                4,800
              </p>
              <p className="text-white/70 text-body-sm">
                And growing — join thousands of satisfied homes and businesses.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {STATS.map(({ value, label }) => (
                <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20
                                            rounded-xl p-4 text-center">
                  <p className="text-white font-display font-bold text-display-sm mb-1">{value}</p>
                  <p className="text-white/60 text-caption leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* Video play button */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20
                            rounded-xl p-4 w-full max-w-sm cursor-pointer
                            hover:bg-white/15 transition-colors group">
              <div className="w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center shrink-0
                              group-hover:bg-accent-500 transition-colors shadow-accent">
                <Play size={18} className="text-forest ml-1" />
              </div>
              <div>
                <p className="text-white font-semibold font-display text-sm">Watch How It Works</p>
                <p className="text-white/60 text-caption">2 min overview</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="w-full" preserveAspectRatio="none">
          <path d="M0 48L480 16L960 32L1440 0V48H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
