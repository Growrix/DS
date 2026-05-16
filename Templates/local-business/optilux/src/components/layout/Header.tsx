import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site";

export default function Header() {
  return (
    <header className="hero-shell pt-8 pb-6">
      <div className="container">
        <div className="nav-card">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">◌</span>
            <span>Optilux</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="nav-item">
                <Link href={item.href}>{item.label}</Link>
                {item.children ? (
                  <div className="dropdown-menu">
                    {item.children.map((child) => (
                      <Link key={child.href + child.label} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <Link href="/contact" className="btn btn-primary hidden lg:inline-flex">
            Book Your Visit
          </Link>
        </div>
      </div>
    </header>
  );
}
