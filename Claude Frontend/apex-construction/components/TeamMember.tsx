import Image from "next/image";
import { Share2, MessageCircle, AtSign } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  title: string;
  imageUrl: string;
}

export default function TeamMember({ name, role, title, imageUrl }: TeamMemberProps) {
  const socialIcons = [Share2, MessageCircle, AtSign];

  return (
    <div className="team-card group relative overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Social Overlay */}
        <div className="team-social absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
          {socialIcons.map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-8 h-8 bg-brand-orange flex items-center justify-center text-white hover:bg-brand-navy transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
      {/* Info */}
      <div className="pt-4 pb-2">
        <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-1">
          {role}
        </p>
        <h3 className="font-display text-brand-navy text-lg font-bold group-hover:text-brand-orange transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-xs mt-0.5">{title}</p>
      </div>
    </div>
  );
}
