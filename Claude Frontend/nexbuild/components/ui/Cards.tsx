import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import type { Service, TeamMember, BlogPost } from "@/types";
import {
  Building2,
  DraftingCompass,
  Layers,
  Home,
  Factory,
  Leaf,
  Anchor,
  HardHat,
  Award,
  Monitor,
  Wind,
  Zap,
  ArrowRight,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

// ============================================================
// ICON MAP
// ============================================================
const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  "building-2":          Building2,
  "drafting-compass":    DraftingCompass,
  "layers":              Layers,
  "home":                Home,
  "factory":             Factory,
  "leaf":                Leaf,
  "anchor":              Anchor,
  "hard-hat":            HardHat,
  "award":               Award,
  "monitor":             Monitor,
  "wind":                Wind,
  "zap":                 Zap,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] ?? Building2;
  return <Icon className={cn("w-10 h-10", className)} />;
}

// ============================================================
// SERVICE CARD (homepage grid)
// ============================================================
interface ServiceCardProps {
  service:    Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex flex-col p-8 bg-white border border-neutral-100",
        "rounded-ds-lg shadow-ds-sm hover:shadow-ds-lg",
        "transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="mb-5 text-accent group-hover:scale-110 transition-transform duration-300">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="heading-display text-lg md:text-xl text-primary mb-3 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed flex-1">
        {service.shortDescription}
      </p>
      <div className="mt-5 flex items-center gap-2 text-accent text-sm font-semibold font-accent">
        Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

// ============================================================
// DESIGN SERVICE CARD (2-column services page)
// ============================================================
export function DesignServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center text-center p-8",
        "border border-neutral-100 rounded-ds-lg hover:border-accent/30",
        "transition-all duration-300 hover:shadow-ds-md hover:-translate-y-1",
        className,
      )}
    >
      <div className="mb-5 text-accent group-hover:scale-110 transition-transform duration-300">
        <ServiceIcon name={service.icon} className="w-12 h-12" />
      </div>
      <h3 className="heading-display text-lg text-primary mb-3 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed">
        {service.shortDescription}
      </p>
    </div>
  );
}

// ============================================================
// TEAM MEMBER CARD
// ============================================================
interface TeamCardProps {
  member:     TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <div className={cn("group text-center", className)}>
      <div className="relative overflow-hidden rounded-ds-lg mb-5 aspect-[3/4] bg-neutral-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Social overlay */}
        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
          {member.socials?.facebook && (
            <Link
              href={member.socials.facebook}
              className="w-9 h-9 bg-white/20 hover:bg-accent rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </Link>
          )}
          {member.socials?.twitter && (
            <Link
              href={member.socials.twitter}
              className="w-9 h-9 bg-white/20 hover:bg-accent rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </Link>
          )}
          {member.socials?.linkedin && (
            <Link
              href={member.socials.linkedin}
              className="w-9 h-9 bg-white/20 hover:bg-accent rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-1">
        {member.role}
      </p>
      <h3 className="heading-display text-lg text-primary">{member.name}</h3>
    </div>
  );
}

// ============================================================
// BLOG POST CARD
// ============================================================
interface BlogCardProps {
  post:       BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className={cn(
        "group flex flex-col bg-white rounded-ds-lg overflow-hidden",
        "border border-neutral-100 shadow-ds-sm hover:shadow-ds-lg",
        "transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white text-xs font-semibold font-accent px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-neutral-400 text-xs mb-3">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readTime} min read
          </span>
        </div>
        <h3 className="heading-display text-base md:text-lg text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-2 text-accent text-sm font-semibold font-accent">
          Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
