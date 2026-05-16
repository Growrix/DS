import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href = "/services" }: ServiceCardProps) {
  return (
    <div className="service-card bg-white border border-gray-100 p-8 group">
      <div className="w-14 h-14 mb-5 flex items-center justify-center">
        <Icon size={36} className="text-brand-orange" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-brand-navy text-lg font-bold mb-3 group-hover:text-brand-orange transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">
        {description}
      </p>
      <Link
        href={href}
        className="text-brand-orange text-xs font-bold uppercase tracking-widest hover:text-brand-navy transition-colors flex items-center gap-1"
      >
        Read More
        <span className="ml-1">→</span>
      </Link>
    </div>
  );
}
