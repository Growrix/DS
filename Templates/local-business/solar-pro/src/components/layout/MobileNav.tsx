"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/services", label: "Services", icon: "☀️" },
  { href: "/projects", label: "Projects", icon: "📁" },
  { href: "/blog", label: "Blog", icon: "📰" },
  { href: "/contact", label: "Contact", icon: "📞" },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="sp-mobile-nav" aria-label="Mobile navigation">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`sp-mobile-nav-item${pathname === item.href ? " active" : ""}`}
        >
          <span className="text-lg leading-none">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
