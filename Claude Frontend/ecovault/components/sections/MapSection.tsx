import React from 'react'
import { MapPin } from 'lucide-react'

export function MapSection() {
  return (
    <section className="relative h-80 bg-neutral-200 overflow-hidden" aria-label="Office location map">
      {/* SVG map placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-100">
        <div className="w-full h-full relative">
          {/* Grid pattern mimicking a map */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1d5db" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#e5e7eb"/>
            <rect width="100%" height="100%" fill="url(#grid)"/>

            {/* Simulated roads */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#f9fafb" strokeWidth="6"/>
            <line x1="0" y1="30%" x2="100%" y2="40%" stroke="#f9fafb" strokeWidth="4"/>
            <line x1="0" y1="70%" x2="100%" y2="65%" stroke="#f9fafb" strokeWidth="4"/>
            <line x1="30%" y1="0" x2="35%" y2="100%" stroke="#f9fafb" strokeWidth="6"/>
            <line x1="60%" y1="0" x2="55%" y2="100%" stroke="#f9fafb" strokeWidth="4"/>
            <line x1="80%" y1="0" x2="78%" y2="100%" stroke="#f9fafb" strokeWidth="3"/>

            {/* Simulated blocks */}
            <rect x="5%" y="10%" width="20%" height="15%" rx="2" fill="#d1fae5" opacity="0.6"/>
            <rect x="40%" y="55%" width="15%" height="12%" rx="2" fill="#d1fae5" opacity="0.6"/>
            <rect x="65%" y="20%" width="12%" height="18%" rx="2" fill="#bbf7d0" opacity="0.5"/>
            <rect x="10%" y="60%" width="18%" height="10%" rx="2" fill="#d1fae5" opacity="0.4"/>
          </svg>

          {/* Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
            <div className="relative">
              <div className="absolute -inset-3 bg-primary-600/20 rounded-full animate-ping" />
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center
                              shadow-green border-2 border-white">
                <MapPin size={18} className="text-white" />
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-white rounded-xl
                              shadow-xl border border-neutral-100 px-4 py-3 min-w-max text-center">
                <p className="font-display font-bold text-forest text-sm">EcoHaul HQ</p>
                <p className="text-neutral-500 text-caption">348 Industrial Pkwy, Green Valley, NY</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white
                                border-r border-b border-neutral-100 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-forest/90 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-body-sm">
          <span className="text-white/60">Find us at: </span>
          <span className="font-semibold font-display text-accent-400">348 Industrial Parkway, Green Valley, NY 10023</span>
        </div>
      </div>
    </section>
  )
}
