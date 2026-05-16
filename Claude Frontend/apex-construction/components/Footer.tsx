import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Construction Management", href: "/services" },
  { label: "Management Certification", href: "/services" },
  { label: "Preconstruction Services", href: "/services" },
  { label: "Virtual Design & Construction", href: "/services" },
  { label: "Sustainable Air Design", href: "/services" },
];

const ourServices = [
  { label: "Virtual Design & Construction", href: "/services" },
  { label: "Shipbuilding Contracting", href: "/services" },
  { label: "Management Certification", href: "/services" },
  { label: "Preconstruction Services", href: "/services" },
  { label: "Sustainable Design", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-4">
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                APEX
              </span>
              <div className="w-6 h-6 ml-1 bg-brand-orange flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-8v6h18V5H3z" />
                </svg>
              </div>
            </div>
            <div className="text-gray-400 text-sm space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-brand-orange mt-0.5 shrink-0" />
                <span>(+1) 800 555 2020</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-brand-orange mt-0.5 shrink-0" />
                <span>apex@modeltheme.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-orange mt-0.5 shrink-0" />
                <span>123 Construction Ave, NY 10001</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-600">Purchase Theme on</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="bg-green-500 text-white text-xs px-2 py-0.5 font-bold">
                  envato market
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-orange text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {ourServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-orange text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-wide">
              Get Daily Updates
            </h4>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter email id..."
                className="flex-1 bg-brand-navy-light text-white text-sm px-4 py-2.5 border border-gray-600 focus:border-brand-orange focus:outline-none placeholder-gray-500"
              />
              <button className="bg-brand-orange px-4 py-2.5 hover:bg-brand-orange-dark transition-colors">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Subscribe to our newsletter for the latest construction news, project updates, and industry insights.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            Apex Theme by{" "}
            <a href="#" className="text-brand-orange hover:underline">
              ModelTheme
            </a>
          </p>
          <p className="text-gray-600 text-xs">© All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
