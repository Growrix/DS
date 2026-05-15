"use client";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/config";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close menu"
      />
      {/* Drawer */}
      <div
        className="relative z-10 w-72 h-full overflow-y-auto"
        style={{ background: "var(--sp-navy)" }}
      >
        <div
          className="flex items-center justify-between p-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span
            className="text-xl font-black"
            style={{ color: "var(--sp-primary)" }}
          >
            ☀️ SolarPro
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white/70 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.href + item.label} className="mb-1">
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-2.5 px-3 rounded font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2 px-3 rounded text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-5">
          <Link
            href="/contact"
            onClick={onClose}
            className="sp-btn sp-btn-primary w-full justify-center"
          >
            Get A Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
