"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import { SITE_NAME, NAV_ITEMS } from "@/lib/config";
import type { NavItem } from "@/types";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header className="sp-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <span
                className="text-2xl font-black tracking-tight"
                style={{ color: "var(--sp-primary)" }}
              >
                ☀️{" "}
                <span style={{ color: "var(--sp-navy)" }} data-dark="white">
                  {SITE_NAME}
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <NavItemEl key={item.href + item.label} item={item} />
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher />
              <Link
                href="/contact"
                className="sp-btn sp-btn-primary hidden lg:inline-flex text-xs py-2 px-4"
              >
                Get A Quote
              </Link>
              {/* Mobile hamburger */}
              <button
                aria-label="Open menu"
                className="lg:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMobileOpen(true)}
              >
                <span
                  className="block w-6 h-0.5"
                  style={{ background: "var(--sp-navy)" }}
                />
                <span
                  className="block w-6 h-0.5"
                  style={{ background: "var(--sp-navy)" }}
                />
                <span
                  className="block w-4 h-0.5"
                  style={{ background: "var(--sp-navy)" }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={close} />
    </>
  );
}

function NavItemEl({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <Link href={item.href} className="sp-nav-link">
        {item.label}
      </Link>
    );
  }
  return (
    <div className="sp-dropdown-parent relative">
      <button className="sp-nav-link flex items-center gap-1">
        {item.label}
        <svg
          className="w-3 h-3 opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="sp-dropdown">
        {item.children.map((child) => (
          <Link key={child.href + child.label} href={child.href}>
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
