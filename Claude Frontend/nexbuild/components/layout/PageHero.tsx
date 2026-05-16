import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title:        string;
  breadcrumbs?: BreadcrumbItem[];
  className?:   string;
}

export function PageHero({ title, breadcrumbs, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative py-24 md:py-32 bg-primary overflow-hidden",
        className,
      )}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      {/* Diagonal overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          {title}
        </h1>
        {breadcrumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-neutral-300 font-accent">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight className="w-4 h-4 text-accent" />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-accent transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
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
