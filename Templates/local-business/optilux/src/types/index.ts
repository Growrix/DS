export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Award {
  year: string;
  title: string;
  body: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  alt: string;
  category: string;
}

export interface CareerListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
