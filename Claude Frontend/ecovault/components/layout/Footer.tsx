import React from 'react'
import Link from 'next/link'
import { Leaf, Phone, Mail, MapPin, Clock, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  SITE_NAME, BRAND_PHONE, BRAND_EMAIL, BRAND_ADDRESS, BRAND_HOURS
} from '@/constants'
import {
  FOOTER_ABOUT_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICE_LINKS,
} from '@/data/navigation'
import type { NavLink } from '@/types'

// ─── Footer column ───────────────────────────────────────────────────────────

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: NavLink[]
}) {
  return (
    <div>
      <h4 className="font-display font-bold text-white mb-5 text-heading-sm uppercase tracking-wide">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/65 text-body-sm hover:text-accent-400 transition-colors leading-snug"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Social links ────────────────────────────────────────────────────────────

const SOCIAL = [
  { icon: Twitter,   href: '#', label: 'Twitter'   },
  { icon: Facebook,  href: '#', label: 'Facebook'  },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn'  },
]

// ─── Main Footer ─────────────────────────────────────────────────────────────

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-dark text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center shadow-green">
                <Leaf size={20} className="text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold font-display text-white leading-none">
                  {SITE_NAME}
                </span>
                <span className="block text-[10px] text-white/50 leading-none tracking-wide uppercase">
                  Waste Solutions
                </span>
              </div>
            </Link>

            <p className="text-white/65 text-body-sm leading-relaxed mb-6 max-w-xs">
              Providing reliable, eco-certified home and business waste pickup, recycling,
              and disposal services across the tri-state area since 2008.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center
                             hover:bg-primary-600 transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* About links */}
          <div className="lg:col-span-2">
            <FooterColumn title="About" links={FOOTER_ABOUT_LINKS} />
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <FooterColumn title="Links" links={FOOTER_QUICK_LINKS} />
          </div>

          {/* Services links */}
          <div className="lg:col-span-2">
            <FooterColumn title="Services" links={FOOTER_SERVICE_LINKS} />
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-5 text-heading-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Phone,  text: BRAND_PHONE,   href: `tel:${BRAND_PHONE}`      },
                { icon: Mail,   text: BRAND_EMAIL,   href: `mailto:${BRAND_EMAIL}`   },
                { icon: MapPin, text: BRAND_ADDRESS, href: '#'                        },
                { icon: Clock,  text: BRAND_HOURS,   href: '#'                        },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-start gap-3 text-white/65 text-body-sm
                               hover:text-accent-400 transition-colors group"
                  >
                    <Icon size={15} className="mt-0.5 shrink-0 text-accent-400" />
                    <span className="leading-snug">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <p className="text-white/45 text-caption text-center sm:text-left">
            © {year} {SITE_NAME} — Waste Management & Recycling Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Use',   href: '/terms'          },
              { label: 'Sitemap',        href: '/sitemap.xml'    },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-white/45 text-caption hover:text-accent-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
