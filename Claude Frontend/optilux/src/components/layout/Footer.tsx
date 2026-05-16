import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, footerServices, footerAboutLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0B3547] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="17" stroke="#00B5A3" strokeWidth="2" fill="none"/>
                <path d="M18 4 C10 4 4 10 4 18 C8 14 13 12 18 12 C23 12 28 14 32 18 C32 10 26 4 18 4Z" fill="#00B5A3" opacity="0.4"/>
                <path d="M4 18 C4 26 10 32 18 32 C14 28 12 23 12 18 C12 13 14 8 18 4 C10 4 4 10 4 18Z" fill="#00B5A3" opacity="0.6"/>
                <path d="M18 4 C26 4 32 10 32 18 C28 14 23 12 18 12 C13 12 8 14 4 18 C4 10 10 4 18 4Z" fill="#00B5A3"/>
              </svg>
              <span className="font-bold text-lg text-white">Optilux</span>
            </Link>
            <p className="text-sm text-[#94B8C5] leading-relaxed mb-5">
              At Optilux, we&apos;re dedicated to providing high-quality, personalized eye care for patients of all ages. Our skilled team uses the latest technology to ensure accurate exams, effective treatments, and clear, healthy vision for life.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: "f", href: siteConfig.social.facebook },
                { icon: "𝕏", href: siteConfig.social.twitter },
                { icon: "w", href: siteConfig.social.whatsapp },
                { icon: "📷", href: siteConfig.social.instagram },
                { icon: "▶", href: siteConfig.social.youtube },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-full bg-[#1B4D60] flex items-center justify-center text-white text-xs hover:bg-[#00B5A3] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-[#94B8C5] hover:text-[#00B5A3] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              {footerAboutLinks.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-[#94B8C5] hover:text-[#00B5A3] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00B5A3]">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Clinic Location</p>
                  <p className="text-sm text-[#94B8C5]">{siteConfig.contact.address}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00B5A3]">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Call Us</p>
                  <p className="text-sm text-[#94B8C5]">{siteConfig.contact.phone}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00B5A3]">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Send a Message</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-[#94B8C5] hover:text-[#00B5A3]">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1B4D60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#5D8FA0]">
          <span>© {new Date().getFullYear()} Optilux. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-[#00B5A3]">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-[#00B5A3]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
