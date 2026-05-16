import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',    href: '/' },
  { label: 'About',   href: '/about' },
  {
    label: 'Services',
    href:  '/services',
    children: [
      { label: 'Residential Pickup',  href: '/services/residential-pickup'  },
      { label: 'Commercial Pickup',   href: '/services/commercial-pickup'   },
      { label: 'Recycling Services',  href: '/services/recycling'           },
      { label: 'Hazardous Disposal',  href: '/services/hazardous-disposal'  },
      { label: 'Bulk Item Removal',   href: '/services/bulk-removal'        },
      { label: 'Construction Debris', href: '/services/construction-debris' },
    ],
  },
  {
    label: 'Pages',
    href:  '#',
    children: [
      { label: 'Projects', href: '/projects' },
      { label: 'FAQ',      href: '/faq'      },
      { label: '404',      href: '/404-demo' },
    ],
  },
  { label: 'News',    href: '/news'    },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_ABOUT_LINKS: NavLink[] = [
  { label: 'About EcoHaul',   href: '/about'           },
  { label: 'Our Team',        href: '/about#team'       },
  { label: 'Certifications',  href: '/about#certs'      },
  { label: 'Sustainability',  href: '/about#green'      },
  { label: 'Careers',         href: '/about#careers'    },
]

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: 'Our Services',    href: '/services'         },
  { label: 'Active Projects', href: '/projects'         },
  { label: 'Latest News',     href: '/news'             },
  { label: 'FAQ',             href: '/faq'              },
  { label: 'Privacy Policy',  href: '/privacy-policy'   },
  { label: 'Terms of Use',    href: '/terms'            },
]

export const FOOTER_SERVICE_LINKS: NavLink[] = [
  { label: 'Residential Pickup',  href: '/services/residential-pickup'  },
  { label: 'Commercial Pickup',   href: '/services/commercial-pickup'   },
  { label: 'Recycling Services',  href: '/services/recycling'           },
  { label: 'Hazardous Disposal',  href: '/services/hazardous-disposal'  },
  { label: 'Bulk Item Removal',   href: '/services/bulk-removal'        },
  { label: 'Construction Debris', href: '/services/construction-debris' },
]
