import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    slug: 'residential-pickup',
    title: 'Residential Pickup',
    shortDesc: 'Scheduled curbside and on-demand waste collection for homes of every size.',
    description:
      'Our residential waste pickup service is designed for modern households that value convenience and reliability. We offer weekly, bi-weekly, and on-demand scheduling with eco-sorted collection bins, ensuring your community stays clean while minimizing landfill impact.',
    icon: 'Home',
    image: 'https://picsum.photos/seed/res1/800/500',
    features: [
      'Weekly & bi-weekly scheduled pickup',
      'Eco-sorted collection bins provided',
      'Recyclable separation at source',
      'On-call emergency collection',
      'SMS & app-based scheduling',
      'Zero hidden fees guarantee',
    ],
    color: 'primary',
  },
  {
    slug: 'commercial-pickup',
    title: 'Commercial Pickup',
    shortDesc: 'High-volume waste solutions for businesses, restaurants, offices, and retail.',
    description:
      'EcoHaul commercial waste management service handles the unique demands of businesses—from small restaurants to large office campuses. Flexible contract terms, compactor rentals, and dedicated account managers make waste compliance effortless.',
    icon: 'Building2',
    image: 'https://picsum.photos/seed/com2/800/500',
    features: [
      'Custom collection schedules',
      'Compactor & dumpster rentals',
      'Dedicated account manager',
      'Compliance reporting & documentation',
      'Multi-location coordination',
      'Confidential document shredding',
    ],
    color: 'primary',
  },
  {
    slug: 'recycling',
    title: 'Recycling Services',
    shortDesc: 'Full-cycle recycling for paper, plastics, metals, electronics, and more.',
    description:
      'Our recycling services go beyond curbside bins. We operate advanced material recovery facilities that sort and process paper, glass, plastics, metals, and electronics, diverting thousands of tons from landfills every year.',
    icon: 'Recycle',
    image: 'https://picsum.photos/seed/rec3/800/500',
    features: [
      'Paper, cardboard & packaging',
      'Plastics & glass recovery',
      'Metal & aluminum processing',
      'E-waste & electronics recycling',
      'Composting & organic waste',
      'Recycling audit & reporting',
    ],
    color: 'accent',
  },
  {
    slug: 'hazardous-disposal',
    title: 'Hazardous Disposal',
    shortDesc: 'Safe, certified disposal of chemicals, batteries, medical, and industrial waste.',
    description:
      'Handling hazardous materials requires specialised equipment, certified technicians, and strict regulatory compliance. EcoHaul maintains full RCRA and EPA-licensed operations for safe removal and disposal of hazardous waste from homes, clinics, and industry.',
    icon: 'AlertTriangle',
    image: 'https://picsum.photos/seed/haz4/800/500',
    features: [
      'EPA & RCRA certified operations',
      'Chemical & solvent disposal',
      'Medical & biohazard waste',
      'Battery & fluorescent lamp recycling',
      'Industrial waste manifests',
      'Emergency spill response',
    ],
    color: 'primary',
  },
  {
    slug: 'bulk-removal',
    title: 'Bulk Item Removal',
    shortDesc: 'Fast removal of furniture, appliances, yard waste, and large junk items.',
    description:
      'Moving, renovating, or simply decluttering? Our bulk item removal team arrives on your schedule and handles all the heavy lifting. We responsibly donate, recycle, or dispose of items to keep as much as possible out of the landfill.',
    icon: 'Truck',
    image: 'https://picsum.photos/seed/bulk5/800/500',
    features: [
      'Same-day & next-day options',
      'Furniture & appliance removal',
      'Yard waste & green debris',
      'Estate cleanouts',
      'Responsible donation coordination',
      'Before & after photos provided',
    ],
    color: 'primary',
  },
  {
    slug: 'construction-debris',
    title: 'Construction Debris',
    shortDesc: 'Roll-off dumpsters and crew-based hauling for construction and renovation sites.',
    description:
      'From small remodels to large construction sites, our roll-off dumpster rental and crew hauling services keep your project moving without waste holding you back. We handle concrete, drywall, lumber, metal, and mixed demolition debris.',
    icon: 'HardHat',
    image: 'https://picsum.photos/seed/con6/800/500',
    features: [
      'Roll-off dumpster rental (10–40 yd)',
      'Next-day delivery & pickup',
      'Concrete & masonry hauling',
      'Drywall & lumber disposal',
      'Debris sorting for recycling',
      'Job site cleanup crews available',
    ],
    color: 'primary',
  },
]

export const WASTE_TYPES = [
  'Plastic & PET Bottles',
  'Light Bulbs & Fixtures',
  'Cardboard & Packaging',
  'Paper & Newspapers',
  'Food & Organic Waste',
  'Construction & Demolition',
  'Electronic Waste (E-Waste)',
  'Hazardous Chemicals',
  'Metal & Aluminum',
  'Glass & Ceramics',
]
