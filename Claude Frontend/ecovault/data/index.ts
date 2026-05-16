import type { Industry, Testimonial, Project, BlogPost, FAQItem, FeatureItem } from '@/types'

// ─── Industries ──────────────────────────────────────────────────────────────

export const INDUSTRIES: Industry[] = [
  {
    id: 'hospitality',
    title: 'Hotels & Restaurants',
    description:
      'Reliable daily and on-demand waste collection tailored to the volume and food-waste needs of hospitality operations, keeping kitchens and dining areas compliant and clean.',
    icon: 'UtensilsCrossed',
    image: 'https://picsum.photos/seed/hosp10/700/480',
  },
  {
    id: 'medical',
    title: 'Medical & Hospitals',
    description:
      'EPA-certified biohazard and medical waste disposal ensuring safe handling, proper documentation, and full regulatory compliance for clinics, hospitals, and labs.',
    icon: 'Stethoscope',
    image: 'https://picsum.photos/seed/med11/700/480',
  },
  {
    id: 'retail',
    title: 'Grocery & Retail',
    description:
      'Customised waste and recycling programmes for grocery stores and retailers, including organic waste composting, cardboard baling, and packaging material recovery.',
    icon: 'ShoppingCart',
    image: 'https://picsum.photos/seed/ret12/700/480',
  },
]

// ─── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Karen Mitchell',
    role: 'Operations Manager',
    company: 'Harborview Hotel Group',
    rating: 5,
    avatar: 'https://picsum.photos/seed/kmt/80/80',
    content:
      'EcoHaul transformed how we handle waste across all twelve of our properties. The scheduling platform is intuitive, the drivers are always on time, and our recycling diversion rate jumped from 28% to over 70% in just six months.',
  },
  {
    id: 't2',
    name: 'James Torrance',
    role: 'Facilities Director',
    company: 'GreenLeaf Medical Center',
    rating: 5,
    avatar: 'https://picsum.photos/seed/jtr/80/80',
    content:
      'Handling regulated medical waste is no small matter. EcoHaul certified team gives us complete peace of mind—thorough documentation, zero compliance violations, and a team that genuinely understands our operational constraints.',
  },
  {
    id: 't3',
    name: 'Sandra Owusu',
    role: 'Sustainability Lead',
    company: 'FreshMart Retail Chain',
    rating: 5,
    avatar: 'https://picsum.photos/seed/sow/80/80',
    content:
      'We needed a partner who could handle organic waste, cardboard, and plastics at scale without interrupting store operations. EcoHaul delivered custom solutions for all 34 of our locations within weeks. Exceptional service.',
  },
]

// ─── Projects ────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    slug:        'riverside-district-cleanup',
    title:       'Riverside District Cleanup',
    category:    'Municipal Waste',
    image:       'https://picsum.photos/seed/prj1/600/420',
    description: 'Complete organic and recyclable waste clearance for the Riverside commercial district serving 120 businesses.',
    date:        '2024-10-15',
    location:    'Green Valley, NY',
  },
  {
    slug:        'metro-center-collection',
    title:       'Metro Center Collection Drive',
    category:    'Bulk Collection',
    image:       'https://picsum.photos/seed/prj2/600/420',
    description: 'Six-week bulk item and electronic waste collection campaign for the Metro Center residential towers.',
    date:        '2024-09-02',
    location:    'Elmwood Heights, NY',
  },
  {
    slug:        'hospital-biohazard-disposal',
    title:       'Regional Hospital Biohazard Disposal',
    category:    'Hazardous Waste',
    image:       'https://picsum.photos/seed/prj3/600/420',
    description: 'Ongoing monthly biohazard and pharmaceutical waste disposal programme for a 400-bed regional hospital.',
    date:        '2024-08-20',
    location:    'Oak Ridge, NJ',
  },
  {
    slug:        'freshmart-recycling-programme',
    title:       'FreshMart Recycling Programme',
    category:    'Commercial Recycling',
    image:       'https://picsum.photos/seed/prj4/600/420',
    description: 'Designed and implemented a chain-wide organic waste composting and cardboard baling programme across 34 stores.',
    date:        '2024-07-11',
    location:    'Statewide, NY',
  },
  {
    slug:        'greenfield-construction-haul',
    title:       'Greenfield Construction Haul',
    category:    'Construction Debris',
    image:       'https://picsum.photos/seed/prj5/600/420',
    description: 'Managed roll-off dumpster rental and mixed demolition debris removal for a 280-unit residential development.',
    date:        '2024-06-05',
    location:    'Pinecrest, CT',
  },
  {
    slug:        'downtown-plaza-clearance',
    title:       'Downtown Plaza Clearance',
    category:    'Municipal Waste',
    image:       'https://picsum.photos/seed/prj6/600/420',
    description: 'Post-event waste clearance and street cleaning for the annual Downtown Plaza Summer Festival drawing 80,000 attendees.',
    date:        '2024-05-19',
    location:    'Green Valley, NY',
  },
]

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    slug:        'why-recycling-is-more-important-now',
    title:       'Why Recycling Matters More Than Ever in 2025',
    excerpt:     'With landfills reaching critical capacity across the Northeast, local recycling programmes are becoming the first line of defence. Here\'s what you need to know.',
    image:       'https://picsum.photos/seed/blog1/700/420',
    date:        '2025-03-14',
    author:      'Dr. Priya Nair',
    authorAvatar:'https://picsum.photos/seed/au1/60/60',
    category:    'Sustainability',
    readTime:    '5 min read',
    tags:        ['Recycling', 'Environment', 'Community'],
  },
  {
    slug:        'capitalising-on-less-hanging-fruit',
    title:       'Low-Hanging Fruit: Simple Waste Wins for Small Businesses',
    excerpt:     'You don\'t need a large sustainability budget to make a real impact. These practical, low-cost waste reduction strategies deliver results from day one.',
    image:       'https://picsum.photos/seed/blog2/700/420',
    date:        '2025-02-27',
    author:      'Marcus Webb',
    authorAvatar:'https://picsum.photos/seed/au2/60/60',
    category:    'Business Tips',
    readTime:    '4 min read',
    tags:        ['Business', 'Waste Reduction', 'Tips'],
  },
  {
    slug:        'clean-fresh-healthy-future',
    title:       'Clean Pickups, Fresh Starts: Building a Healthier Community',
    excerpt:     'Consistent waste collection is one of the most direct contributors to community health. We look at the evidence—and what local government can do about it.',
    image:       'https://picsum.photos/seed/blog3/700/420',
    date:        '2025-02-10',
    author:      'Sandra Owusu',
    authorAvatar:'https://picsum.photos/seed/au3/60/60',
    category:    'Community',
    readTime:    '6 min read',
    tags:        ['Health', 'Community', 'Policy'],
  },
  {
    slug:        'waste-management-container-guide',
    title:       'Choosing the Right Waste Management Container for Your Business',
    excerpt:     'From 2-yard front loaders to 40-yard roll-off dumpsters, selecting the right container size is critical for cost efficiency and compliance.',
    image:       'https://picsum.photos/seed/blog4/700/420',
    date:        '2025-01-22',
    author:      'Marcus Webb',
    authorAvatar:'https://picsum.photos/seed/au4/60/60',
    category:    'Business Tips',
    readTime:    '7 min read',
    tags:        ['Commercial', 'Containers', 'Guide'],
  },
]

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const FAQS: FAQItem[] = [
  {
    id:       'f1',
    question: 'What areas does EcoHaul serve?',
    answer:   'We currently serve over 200 cities across New York, New Jersey, and Connecticut. Enter your zip code on our Contact page or call us to confirm service availability in your area.',
    category: 'General',
  },
  {
    id:       'f2',
    question: 'How do I schedule a pickup?',
    answer:   'You can schedule online through our website, via our mobile app, or by calling our customer team at +1 (800) 326-4285 during business hours (Mon–Sat, 7 AM–6 PM).',
    category: 'General',
  },
  {
    id:       'f3',
    question: 'What items are accepted in the standard bin?',
    answer:   'Standard bins accept household waste, food scraps (in compostable liners), paper, cardboard, plastic containers (#1–#7), glass, and aluminium cans. Hazardous materials, sharps, and large bulk items require separate services.',
    category: 'Residential',
  },
  {
    id:       'f4',
    question: 'Do you offer same-day service?',
    answer:   'Same-day pickup is available for residential bulk items and commercial emergency collections, subject to route availability. Contact us before 10 AM to check same-day slots in your area.',
    category: 'General',
  },
  {
    id:       'f5',
    question: 'How do you handle medical and hazardous waste?',
    answer:   'Our hazardous and medical waste division is EPA and state-licensed. We provide certified manifests, secure transport vehicles, and end-to-end documentation for full regulatory compliance.',
    category: 'Hazardous',
  },
  {
    id:       'f6',
    question: 'Can I change or cancel my subscription?',
    answer:   'Yes. Our residential plans operate month-to-month with no long-term contracts. You can modify or cancel anytime via your online account or by contacting our support team.',
    category: 'Billing',
  },
  {
    id:       'f7',
    question: 'What happens to the waste you collect?',
    answer:   'We follow a strict waste hierarchy: reduce, reuse, recycle, then landfill as a last resort. Over 65% of everything we collect is diverted from landfill through recycling and composting programmes.',
    category: 'Sustainability',
  },
  {
    id:       'f8',
    question: 'Do you offer recycling audits for businesses?',
    answer:   'Absolutely. Our commercial team conducts on-site waste audits at no charge for businesses on annual service contracts, identifying opportunities to reduce waste volumes and lower costs.',
    category: 'Commercial',
  },
]

// ─── Homepage Feature Strip ───────────────────────────────────────────────────

export const FEATURE_STRIPS: FeatureItem[] = [
  {
    id:          'fs1',
    title:       'Fast Setup, Exceptional Service',
    description: 'Get started in under 24 hours. Our onboarding team handles equipment delivery, route configuration, and driver briefing so your service begins immediately.',
    icon:        'Zap',
  },
  {
    id:          'fs2',
    title:       'No Annual Contracts Required',
    description: 'Flexible month-to-month plans for residential and commercial clients. Scale up, scale down, or cancel anytime without early-termination fees.',
    icon:        'FileCheck',
  },
  {
    id:          'fs3',
    title:       'Expert Team Management',
    description: 'Certified waste specialists, licensed drivers, and dedicated account managers ensure consistent, compliant service every single day.',
    icon:        'Users',
  },
]

// ─── Why Choose Items ────────────────────────────────────────────────────────

export const WHY_CHOOSE_FEATURES: FeatureItem[] = [
  {
    id:          'wc1',
    title:       'Reliable on-time collection, every single schedule',
    description: '',
    icon:        'CheckCircle',
  },
  {
    id:          'wc2',
    title:       'Transparent pricing with zero hidden charges',
    description: '',
    icon:        'CheckCircle',
  },
  {
    id:          'wc3',
    title:       'Full compliance with state and federal regulations',
    description: '',
    icon:        'CheckCircle',
  },
  {
    id:          'wc4',
    title:       'Eco-certified fleet reducing carbon footprint',
    description: '',
    icon:        'CheckCircle',
  },
]
