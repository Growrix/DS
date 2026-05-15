import type { NavItem } from "@/types";

export const SITE_NAME = "SolarPro";
export const SITE_TAGLINE = "Clean Energy Solutions";
export const SITE_DESCRIPTION =
  "Leading supplier of solar materials for manufacturers, installers and contractors worldwide.";

export const CONTACT = {
  phone: "+1 (555) 654-5417",
  email: "info@solarpro.example",
  address: "2307 Beverley Rd, Brooklyn, New York 11226, United States",
  mapsUrl:
    "https://maps.google.com/?q=2307+Beverley+Rd+Brooklyn+New+York+11226",
};

export const SOCIAL = {
  facebook: "#",
  twitter: "#",
  linkedin: "#",
  youtube: "#",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Leadership Team", href: "/team" },
      { label: "News & Media", href: "/blog" },
      { label: "Case Studies", href: "/projects" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Solar Panels", href: "/services/solar-panels" },
      { label: "Wind Turbines", href: "/services/wind-turbines" },
      { label: "Hydropower Plants", href: "/services/hydropower-plants" },
      { label: "Battery Materials", href: "/services/battery-materials" },
      { label: "Charge Controllers", href: "/services/charge-controllers" },
      { label: "Fossil Resources", href: "/services/fossil-resources" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Awards", href: "/awards" },
      { label: "Gallery", href: "/gallery" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership Team", href: "/team" },
    { label: "News & Media", href: "/blog" },
    { label: "Case Studies", href: "/projects" },
    { label: "Our Projects", href: "/projects" },
    { label: "Contacts", href: "/contact" },
  ],
  services: [
    { label: "Wind Generators", href: "/services/wind-turbines" },
    { label: "Solar PV Materials", href: "/services/solar-panels" },
    { label: "Battery Materials", href: "/services/battery-materials" },
    { label: "Charge Controllers", href: "/services/charge-controllers" },
    { label: "Solar Modules", href: "/services/solar-panels" },
    { label: "Biodiesel Fuel", href: "/services/fossil-resources" },
  ],
  support: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Delivery Tips", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
};
