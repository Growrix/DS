// ─────────────────────────────────────────────────────────
// Shared Type Definitions for EcoHaul Website
// ─────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface Service {
  slug: string
  title: string
  shortDesc: string
  description: string
  icon: string
  image: string
  features: string[]
  color?: string
}

export interface Industry {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface Project {
  slug: string
  title: string
  category: string
  image: string
  description: string
  date: string
  location: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content?: string
  image: string
  date: string
  author: string
  authorAvatar: string
  category: string
  readTime: string
  tags: string[]
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

export interface StatItem {
  value: string
  suffix?: string
  label: string
  icon?: string
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
}

export interface SocialLink {
  platform: string
  href: string
  label: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered' | 'ghost'
  className?: string
  children: React.ReactNode
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'none'
}

export interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  titleClassName?: string
  className?: string
  inverted?: boolean
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}
