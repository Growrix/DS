'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Phone, Mail, Search, Menu, X, ChevronDown,
  Twitter, Facebook, Instagram, Linkedin, Leaf
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/data/navigation'
import { BRAND_PHONE, BRAND_EMAIL, SITE_NAME } from '@/constants'
import type { NavLink } from '@/types'

// ─── Top bar ────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div className="bg-forest text-white/80 text-xs py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={`tel:${BRAND_PHONE}`} className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
            <Phone size={12} /> {BRAND_PHONE}
          </a>
          <a href={`mailto:${BRAND_EMAIL}`} className="flex items-center gap-1.5 hover:text-accent-400 transition-colors">
            <Mail size={12} /> {BRAND_EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/50">Free Pickup Estimate Available</span>
          <div className="flex items-center gap-3">
            {[
              { icon: Twitter,   href: '#', label: 'Twitter'   },
              { icon: Facebook,  href: '#', label: 'Facebook'  },
              { icon: Instagram, href: '#', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="hover:text-accent-400 transition-colors">
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Dropdown ───────────────────────────────────────────────────────────────

function NavDropdown({ items }: { items: NavLink[] }) {
  return (
    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-neutral-100
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    translate-y-2 group-hover:translate-y-0 transition-all duration-250 z-50">
      <div className="py-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href}
            className="flex items-center px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50
                       hover:text-primary-700 transition-colors font-body">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── Desktop Nav ────────────────────────────────────────────────────────────

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
        const hasChildren = link.children && link.children.length > 0

        return (
          <div key={link.label} className="relative group">
            <Link
              href={link.href}
              className={cn(
                'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold font-display transition-colors duration-200',
                isActive
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              )}
            >
              {link.label}
              {hasChildren && <ChevronDown size={14} className="mt-0.5 transition-transform group-hover:rotate-180 duration-200" />}
            </Link>
            {hasChildren && <NavDropdown items={link.children!} />}
          </div>
        )
      })}
    </nav>
  )
}

// ─── Mobile Nav ─────────────────────────────────────────────────────────────

function MobileNav({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean
  onClose: () => void
  pathname: string
}) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className={cn(
      'fixed inset-0 z-50 lg:hidden',
      isOpen ? 'pointer-events-auto' : 'pointer-events-none'
    )}>
      {/* Backdrop */}
      <div
        className={cn(
          'absolute inset-0 bg-forest/80 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div className={cn(
        'absolute top-0 left-0 h-full w-80 bg-white shadow-xl transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex items-center justify-between p-4 border-b border-neutral-100">
          <LogoMark />
          <button onClick={onClose} aria-label="Close menu"
            className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors">
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 overflow-y-auto h-[calc(100%-72px)]">
          {NAV_LINKS.map((link) => {
            const hasChildren = link.children && link.children.length > 0
            const isExpanded = expanded === link.label

            return (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={!hasChildren ? onClose : undefined}
                    className={cn(
                      'flex-1 py-3 px-2 rounded-lg text-sm font-semibold font-display transition-colors',
                      pathname === link.href ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                    )}
                  >
                    {link.label}
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={() => setExpanded(isExpanded ? null : link.label)}
                      className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <ChevronDown
                        size={16}
                        className={cn('transition-transform duration-200', isExpanded && 'rotate-180')}
                      />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <div className="ml-4 border-l-2 border-primary-100 pl-4 mb-2">
                    {link.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          <div className="mt-6 pt-6 border-t border-neutral-100">
            <Button href="/contact" variant="primary" size="md" fullWidth>
              Request a Pickup
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}

// ─── Logo ────────────────────────────────────────────────────────────────────

function LogoMark() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center
                      group-hover:bg-primary-700 transition-colors shadow-green">
        <Leaf size={20} className="text-white" />
      </div>
      <div>
        <span className="block text-lg font-bold font-display text-forest leading-none">
          {SITE_NAME}
        </span>
        <span className="block text-[10px] text-neutral-500 leading-none tracking-wide uppercase">
          Waste Solutions
        </span>
      </div>
    </Link>
  )
}

// ─── Main Header ─────────────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <TopBar />
      <header
        className={cn(
          'sticky top-0 z-40 bg-white transition-shadow duration-300',
          scrolled ? 'shadow-md' : 'shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <LogoMark />
            <DesktopNav pathname={pathname} />

            <div className="flex items-center gap-3">
              <button aria-label="Search" className="hidden md:flex p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors">
                <Search size={18} />
              </button>
              <Button href="/contact" variant="accent" size="sm" className="hidden md:inline-flex">
                Request a Pickup
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  )
}
