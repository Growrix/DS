import type { NavItem } from "@/types";

export const SITE_CONFIG = {
  name:       "NexBuild",
  tagline:    "Building Tomorrow's Infrastructure",
  description:"NexBuild delivers award-winning construction management, engineering consultancy, and infrastructure development across commercial, industrial, and residential sectors.",
  email:      "hello@nexbuild.com",
  phone:      "+1 (800) 642 3090",
  address:    "1200 Industrial Blvd, Suite 400, Houston, TX 77002",
  hours:      "Mon – Fri: 09:00 – 18:00",
  social: {
    facebook:  "https://facebook.com",
    twitter:   "https://twitter.com",
    linkedin:  "https://linkedin.com",
    youtube:   "https://youtube.com",
    instagram: "https://instagram.com",
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home",       href: "/" },
  {
    label: "Services",
    href:  "/services",
    children: [
      { label: "Construction Management",    href: "/services/construction-management" },
      { label: "Preconstruction Services",   href: "/services/preconstruction" },
      { label: "Structural Engineering",     href: "/services/structural-engineering" },
      { label: "Interior & Fit-Out",         href: "/services/interior-fitout" },
      { label: "Industrial Development",     href: "/services/industrial-development" },
      { label: "Sustainable Design",         href: "/services/sustainable-design" },
    ],
  },
  {
    label: "Projects",
    href:  "/projects",
    children: [
      { label: "Commercial",   href: "/projects?category=commercial" },
      { label: "Industrial",   href: "/projects?category=industrial" },
      { label: "Residential",  href: "/projects?category=residential" },
      { label: "Infrastructure",href: "/projects?category=infrastructure" },
    ],
  },
  {
    label: "Company",
    href:  "/about",
    children: [
      { label: "About Us",    href: "/about" },
      { label: "Our Team",    href: "/team" },
      { label: "Careers",     href: "/careers" },
      { label: "Testimonials",href: "/testimonials" },
    ],
  },
  { label: "News",    href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Construction Management", href: "/services/construction-management" },
  { label: "Management Certification",href: "/services/management-certification" },
  { label: "Preconstruction Services",href: "/services/preconstruction" },
  { label: "About NexBuild",          href: "/about" },
  { label: "Careers",                 href: "/careers" },
];

export const FOOTER_SERVICES = [
  { label: "Virtual Design & Construction", href: "/services/virtual-design" },
  { label: "Shipbuilding & Contracting",    href: "/services/shipbuilding" },
  { label: "Management Certification",      href: "/services/management-certification" },
  { label: "Preconstruction Services",      href: "/services/preconstruction" },
  { label: "Sustainable Design",            href: "/services/sustainable-design" },
];
