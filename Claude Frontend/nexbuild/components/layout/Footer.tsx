import Link from "next/link";
import { SITE_CONFIG, FOOTER_QUICK_LINKS, FOOTER_SERVICES } from "@/constants";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Send, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1C3F] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="heading-display text-3xl text-white">
                NEX<span className="text-accent">BUILD</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Building tomorrow&apos;s infrastructure with precision engineering,
              sustainable design, and uncompromising quality.
            </p>
            <div className="space-y-2.5 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-6">
              {[
                { href: SITE_CONFIG.social.facebook,  Icon: Facebook },
                { href: SITE_CONFIG.social.twitter,   Icon: Twitter },
                { href: SITE_CONFIG.social.linkedin,  Icon: Linkedin },
                { href: SITE_CONFIG.social.youtube,   Icon: Youtube },
                { href: SITE_CONFIG.social.instagram, Icon: Instagram },
              ].map(({ href, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-display text-lg mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-accent transition-colors font-accent"
                  >
                    <span className="text-accent text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="heading-display text-lg mb-5 text-white">Our Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-accent transition-colors font-accent"
                  >
                    <span className="text-accent text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="heading-display text-lg mb-5 text-white">Get Daily Updates</h4>
            <p className="text-sm text-neutral-400 mb-5 leading-relaxed">
              Subscribe to our newsletter for industry news, project updates, and construction insights.
            </p>
            <form className="flex items-stretch gap-0 overflow-hidden rounded-ds-sm border border-white/10 focus-within:border-accent/50 transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 text-white placeholder-neutral-500 text-sm px-4 py-3 outline-none font-body min-w-0"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white px-4 flex items-center justify-center transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-3">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500 font-accent">
            © {year} {SITE_CONFIG.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-neutral-500 font-accent">
            <Link href="/privacy"  className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms"    className="hover:text-accent transition-colors">Terms of Use</Link>
            <Link href="/sitemap"  className="hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
