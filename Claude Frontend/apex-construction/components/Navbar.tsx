"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Clock, Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Pages", href: "/pages" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-brand-navy-dark text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-gray-300 text-[11px]">
            APEX CONSTRUCTION – Premium Building Solutions
          </span>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-gray-300">
              <Clock size={12} className="text-brand-orange" />
              <span>Monday – Friday 09:00 – 19:00</span>
              <span className="ml-1 text-gray-500">Saturday and Sunday – CLOSED</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300">
              <Phone size={12} className="text-brand-orange" />
              <div>
                <div className="font-semibold text-white">+880 8080 4044</div>
                <div className="text-gray-500 text-[10px]">apex@example.com</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-brand-orange text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 hover:bg-brand-orange-dark transition-colors"
            >
              Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <div className="flex items-center">
              <span className="font-display font-bold text-2xl text-brand-navy tracking-tight">
                APEX
              </span>
              <div className="w-6 h-6 ml-1 bg-brand-orange flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-8v6h18V5H3z" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-navy text-sm font-semibold px-4 py-2 uppercase tracking-wide hover:text-brand-orange transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-brand-navy hover:text-brand-orange transition-colors p-2"
            >
              <Search size={18} />
            </button>
            <button
              className="text-brand-navy hover:text-brand-orange transition-colors p-2 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-gray-100 px-4 py-3 bg-brand-light-bg">
            <div className="max-w-7xl mx-auto flex items-center gap-3">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent text-sm text-gray-700 border-none focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-navy text-sm font-semibold px-6 py-3 uppercase tracking-wide hover:bg-brand-orange hover:text-white transition-colors border-b border-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
