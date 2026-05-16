export const siteConfig = {
  name: "Optilux",
  tagline: "Expert Vision Care and Trusted Eye Specialists",
  description:
    "Comprehensive eye exams with modern tools that provide accurate results while ensuring comfort and safety for every patient.",
  contact: {
    address: "100 S Main St, New York, NY",
    phone: "+1 232 343 9296",
    email: "contact@optilux.com",
  },
  social: {
    facebook: "#",
    twitter: "#",
    whatsapp: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const navLinks = [
  { label: "Home", href: "/", hasDropdown: false },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    children: [
      { label: "Our Services", href: "/services" },
      { label: "Service Detail", href: "/services/vision-correction" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    hasDropdown: true,
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Doctors", href: "/our-doctors" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    hasDropdown: true,
    children: [
      { label: "Shop", href: "/shop" },
      { label: "Product Detail", href: "/shop/stylish-cat-eye-glasses" },
    ],
  },
  { label: "Blog", href: "/blog", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

export const footerServices = [
  { label: "Comprehensive Eye Exams", href: "/services/comprehensive-eye-exams" },
  { label: "Glasses & Contact Lenses", href: "/services/glasses-contact-lenses" },
  { label: "Pediatric Eye Care", href: "/services/pediatric-eye-care" },
  { label: "Cataract Surgery", href: "/services/cataract-surgery" },
  { label: "Refractive Surgery", href: "/services/refractive-surgery" },
  { label: "Glaucoma Care", href: "/services/glaucoma-care" },
];

export const footerAboutLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "65250+", label: "Eye Exams Performed" },
  { value: "23160+", label: "Satisfied Patients" },
  { value: "150+", label: "Licensed Optometrists" },
  { value: "20+", label: "Years of Expertise" },
];
