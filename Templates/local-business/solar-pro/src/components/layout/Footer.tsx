import Link from "next/link";
import {
  SITE_NAME,
  CONTACT,
  SOCIAL,
  FOOTER_LINKS,
} from "@/lib/config";

export default function Footer() {
  return (
    <footer className="sp-footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + Contact */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span
                className="text-2xl font-black"
                style={{ color: "var(--sp-primary)" }}
              >
                ☀️ {SITE_NAME}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-white/65 max-w-xs">
                Leading the transition to sustainable, reliable and affordable
                energy systems. We energize society — that&apos;s our aim.
              </p>
            </div>

            <h3 className="sp-footer-title">Quick Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2 text-white/65">
                <span className="mt-0.5 flex-shrink-0">📞</span>
                <a
                  href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-sp-primary transition-colors"
                  style={{ color: "inherit" }}
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p className="flex items-start gap-2 text-white/65">
                <span className="mt-0.5 flex-shrink-0">📧</span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-sp-primary transition-colors"
                  style={{ color: "inherit" }}
                >
                  {CONTACT.email}
                </a>
              </p>
              <p className="flex items-start gap-2 text-white/65">
                <span className="mt-0.5 flex-shrink-0">📍</span>
                <span>{CONTACT.address}</span>
              </p>
            </div>

            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-btn sp-btn-primary mt-5 text-xs py-2 px-4 inline-flex"
            >
              Get Directions
            </a>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { href: SOCIAL.facebook, icon: "f", label: "Facebook" },
                { href: SOCIAL.twitter, icon: "𝕏", label: "Twitter" },
                { href: SOCIAL.linkedin, icon: "in", label: "LinkedIn" },
                { href: SOCIAL.youtube, icon: "▶", label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white/70 hover:text-white transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="sp-footer-title">Company</h3>
            <div className="space-y-0.5">
              {FOOTER_LINKS.company.map((l) => (
                <Link key={l.href + l.label} href={l.href} className="sp-footer-link">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="sp-footer-title">Services</h3>
            <div className="space-y-0.5">
              {FOOTER_LINKS.services.map((l) => (
                <Link key={l.href + l.label} href={l.href} className="sp-footer-link">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support + Products */}
          <div>
            <h3 className="sp-footer-title">Support</h3>
            <div className="space-y-0.5 mb-6">
              {FOOTER_LINKS.support.map((l) => (
                <Link key={l.href + l.label} href={l.href} className="sp-footer-link">
                  {l.label}
                </Link>
              ))}
            </div>

            <h3 className="sp-footer-title">Products Catalogue</h3>
            <Link href="/contact" className="sp-btn sp-btn-primary text-xs py-2 px-4 inline-flex">
              Download PDF
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        className="py-5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</p>
          <p>
            Built with{" "}
            <span style={{ color: "var(--sp-primary)" }}>Solar Pro Template</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
