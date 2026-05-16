"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_CONFIG, NAV_ITEMS } from "@/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  Clock,
  Phone,
  Mail,
  Menu,
  X,
  Search,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import type { NavItem } from "@/types";

// ============================================================
// TOP BAR
// ============================================================
function TopBar() {
  return (
    <div className="hidden lg:block bg-neutral-800 text-white text-xs">
      <div className="mx-auto max-w-[1240px] px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6 text-neutral-300">
          <span className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {SITE_CONFIG.hours} · Saturday & Sunday — CLOSED
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-accent" />
            {SITE_CONFIG.phone}
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-accent" />
            {SITE_CONFIG.email}
          </span>
        </div>
        <div className="flex items-center gap-3 text-neutral-400">
          <Link href={SITE_CONFIG.social.facebook} className="hover:text-accent transition-colors"><Facebook className="w-3.5 h-3.5" /></Link>
          <Link href={SITE_CONFIG.social.twitter}  className="hover:text-accent transition-colors"><Twitter  className="w-3.5 h-3.5" /></Link>
          <Link href={SITE_CONFIG.social.linkedin} className="hover:text-accent transition-colors"><Linkedin className="w-3.5 h-3.5" /></Link>
          <Link href={SITE_CONFIG.social.instagram} className="hover:text-accent transition-colors"><Instagram className="w-3.5 h-3.5" /></Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// DROPDOWN MENU
// ============================================================
function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-ds-xl rounded-ds-md py-2 border border-neutral-100 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-5 py-2.5 text-sm text-neutral-700 hover:text-accent hover:bg-accent/5 transition-colors font-accent"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

// ============================================================
// NAV ITEM
// ============================================================
function NavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-sm font-accent font-semibold tracking-wide text-neutral-700 hover:text-accent transition-colors py-6 block"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-accent font-semibold tracking-wide text-neutral-700 hover:text-accent transition-colors py-6">
        {item.label}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && <DropdownMenu items={item.children} />}
    </div>
  );
}

// ============================================================
// MOBILE NAV
// ============================================================
function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-all duration-300",
        isOpen ? "visible" : "invisible",
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-primary/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl",
          "transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <span className="heading-display text-xl text-primary">{SITE_CONFIG.name}</span>
          <button onClick={onClose} className="text-neutral-500 hover:text-accent">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-4 py-4 overflow-y-auto h-full pb-20">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="border-b border-neutral-100 last:border-0">
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-3.5 px-2 font-accent font-semibold text-neutral-700 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2 px-2 text-sm text-neutral-500 hover:text-accent transition-colors font-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6">
            <Button href="/contact" className="w-full justify-center">
              Get a Quote
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

// ============================================================
// MAIN HEADER
// ============================================================
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-ds-md"
            : "bg-white border-b border-neutral-100",
        )}
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 py-4">
              <span className="heading-display text-3xl text-primary">
                NEX<span className="text-accent">BUILD</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="text-neutral-500 hover:text-accent transition-colors p-2">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-neutral-500 hover:text-accent transition-colors p-2">
                <Menu className="w-5 h-5" />
              </button>
              <Button href="/contact" size="md">
                Inquiry
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-primary hover:text-accent transition-colors p-2"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
