import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  imageUrl?: string;
}

export default function PageHero({
  title,
  breadcrumbs,
  imageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
}: PageHeroProps) {
  return (
    <section className="relative h-52 md:h-64 flex items-center">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <h1 className="font-display text-white text-3xl md:text-4xl font-bold mb-3">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm text-gray-300">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-500">/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-brand-orange transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-400">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
