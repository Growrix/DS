"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Heart, ShoppingCart, Search } from "lucide-react";
import { navLinks } from "@/data/site";

export default function Navbar({ variant = "default" }: { variant?: "default" | "shop" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" stroke="#00B5A3" strokeWidth="2" fill="none"/>
              <path d="M18 4 C10 4 4 10 4 18 C8 14 13 12 18 12 C23 12 28 14 32 18 C32 10 26 4 18 4Z" fill="#00B5A3" opacity="0.3"/>
              <path d="M4 18 C4 26 10 32 18 32 C14 28 12 23 12 18 C12 13 14 8 18 4 C10 4 4 10 4 18Z" fill="#00B5A3" opacity="0.5"/>
              <path d="M18 4 C26 4 32 10 32 18 C28 14 23 12 18 12 C13 12 8 14 4 18 C4 10 10 4 18 4Z" fill="#00B5A3"/>
            </svg>
            <span className="text-[#1B3C4A] font-bold text-xl tracking-tight">Optilux</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#1B3C4A] hover:text-[#00B5A3] transition-colors rounded-lg"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="text-[#7A9BAA]" />}
                </Link>
                {link.hasDropdown && link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-[#E2EEF2] overflow-hidden z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[#4A6572] hover:bg-[#EAF8F6] hover:text-[#00B5A3] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {variant === "shop" && (
              <>
                <div className="hidden sm:flex items-center gap-1 border border-[#E2EEF2] rounded-full px-3 py-1.5">
                  <Search size={14} className="text-[#7A9BAA]" />
                  <input placeholder="search..." className="outline-none text-sm w-28 text-[#4A6572]" />
                </div>
                <button className="relative p-2 text-[#4A6572] hover:text-[#00B5A3]">
                  <Heart size={18} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#00B5A3] text-white text-[10px] rounded-full flex items-center justify-center">0</span>
                </button>
                <button className="relative p-2 text-[#4A6572] hover:text-[#00B5A3]">
                  <ShoppingCart size={18} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#00B5A3] text-white text-[10px] rounded-full flex items-center justify-center">10</span>
                </button>
              </>
            )}
            {variant === "default" && (
              <Link href="/contact" className="hidden sm:inline-flex btn-primary">
                Book Your Visit
              </Link>
            )}
            <button
              className="lg:hidden p-2 text-[#1B3C4A]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#E2EEF2] py-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[#1B3C4A] hover:text-[#00B5A3]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </Link>
                {link.hasDropdown && link.children && (
                  <div className="pl-8 bg-[#EAF8F6] mb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-[#4A6572] hover:text-[#00B5A3]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-2">
              <Link href="/contact" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
                Book Your Visit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
