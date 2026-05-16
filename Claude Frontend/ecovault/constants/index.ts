import type { ContactInfo, SocialLink, StatItem } from '@/types'

export const SITE_NAME = 'EcoHaul'
export const SITE_TAGLINE = 'Sustainable Waste Management Solutions'
export const SITE_DESCRIPTION =
  'EcoHaul provides reliable home and business waste pickup, recycling, and disposal services. Building cleaner communities since 2008.'
export const SITE_URL = 'https://ecovault.com'

export const BRAND_PHONE = '+1 (800) 326-4285'
export const BRAND_EMAIL = 'hello@ecovault.com'
export const BRAND_ADDRESS = '348 Industrial Parkway, Green Valley, NY 10023'
export const BRAND_HOURS = 'Mon–Sat: 7:00 AM – 6:00 PM'

export const CONTACT_INFO: ContactInfo = {
  phone: BRAND_PHONE,
  email: BRAND_EMAIL,
  address: BRAND_ADDRESS,
  hours: BRAND_HOURS,
}

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Twitter',   href: 'https://twitter.com',   label: 'Follow on Twitter'   },
  { platform: 'Facebook',  href: 'https://facebook.com',  label: 'Like on Facebook'    },
  { platform: 'Instagram', href: 'https://instagram.com', label: 'Follow on Instagram' },
  { platform: 'LinkedIn',  href: 'https://linkedin.com',  label: 'Connect on LinkedIn' },
]

export const HERO_STATS: StatItem[] = [
  { value: '4',    suffix: 'K+', label: 'Happy Clients'      },
  { value: '15',   suffix: '+',  label: 'Years Experience'   },
  { value: '98',   suffix: '%',  label: 'Satisfaction Rate'  },
  { value: '200',  suffix: '+',  label: 'Cities Covered'     },
]

export const WHY_CHOOSE_STATS: StatItem[] = [
  { value: '4,800', label: 'Customers Served'       },
  { value: '18',    label: 'Years in Industry'      },
  { value: '50+',   label: 'Certified Specialists'  },
]

export const META_DEFAULTS = {
  themeColor: '#2e5c28',
  ogType:     'website',
}
