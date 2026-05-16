import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  imageUrl: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  href?: string;
}

export default function BlogCard({ imageUrl, date, category, title, excerpt, href = "/news" }: BlogCardProps) {
  return (
    <div className="service-card bg-white overflow-hidden group border border-gray-100">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
          {category}
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <p className="text-gray-400 text-xs mb-2 font-medium">{date}</p>
        <h3 className="font-display text-brand-navy text-base font-bold mb-3 leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
        <Link
          href={href}
          className="text-brand-orange text-xs font-bold uppercase tracking-widest hover:text-brand-navy transition-colors flex items-center gap-1"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
