import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs?: Crumb[];
}

export default function PageBanner({ title, breadcrumbs = [] }: PageBannerProps) {
  return (
    <section className="sp-page-banner" aria-label="Page banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1>{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-3">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-sp-primary transition-colors" style={{ color: "inherit" }}>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>/</span>
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors" style={{ color: "inherit" }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ color: "var(--sp-primary)" }}>{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
