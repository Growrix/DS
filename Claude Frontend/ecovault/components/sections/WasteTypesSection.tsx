import React from 'react'
import { Check } from 'lucide-react'
import { Container } from '@/components/ui/index'
import { WASTE_TYPES } from '@/data/services'

export function WasteTypesSection() {
  const half = Math.ceil(WASTE_TYPES.length / 2)
  const col1 = WASTE_TYPES.slice(0, half)
  const col2 = WASTE_TYPES.slice(half)

  return (
    <section
      className="bg-primary-600 relative overflow-hidden py-16 sm:py-20"
      aria-label="Waste types we collect"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: heading */}
          <div>
            <p className="text-accent-400 font-display font-semibold text-sm uppercase tracking-widest mb-3">
              What We Handle
            </p>
            <h2 className="font-display font-extrabold text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}>
              Waste Materials We
              <span className="block">Collect, Recycle &</span>
              <span className="block">Dispose</span>
            </h2>

            <p className="mt-5 text-white/70 text-body-md leading-relaxed max-w-md">
              From everyday household recyclables to specialised commercial and hazardous
              materials—our licensed teams are equipped to handle it all safely and responsibly.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 bg-white/10 border border-white/20
                            rounded-xl px-5 py-3">
              <span className="text-accent-400 text-2xl font-display font-extrabold">65%+</span>
              <span className="text-white/75 text-body-sm leading-snug">
                of collected waste diverted<br />from landfill through recycling
              </span>
            </div>
          </div>

          {/* Right: waste type columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[col1, col2].map((col, ci) => (
              <ul key={ci} className="space-y-3">
                {col.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-forest font-bold" strokeWidth={3} />
                    </span>
                    <span className="text-white/85 text-body-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
