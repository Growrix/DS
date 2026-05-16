import type {
  Service,
  TeamMember,
  BlogPost,
  Testimonial,
  BannerTab,
  StatItem,
  FAQItem,
} from "@/types";

// ============================================================
// SERVICES DATA
// ============================================================
export const SERVICES: Service[] = [
  {
    id:   "1",
    slug: "construction-management",
    icon: "building-2",
    title: "Construction Management",
    shortDescription:
      "End-to-end oversight of your construction project — from groundbreaking to handover — with precision scheduling and cost control.",
    description:
      "Our construction management team coordinates every moving part of your project, ensuring scope, schedule, and budget are met without compromise. We employ lean delivery principles and digital project controls to minimize risk and maximize value at every phase.",
    features: [
      "Project planning & feasibility",
      "Procurement & contractor management",
      "Cost control & reporting",
      "Quality assurance programs",
      "Closeout & commissioning",
    ],
  },
  {
    id:   "2",
    slug: "preconstruction",
    icon: "drafting-compass",
    title: "Preconstruction Services",
    shortDescription:
      "Intelligent early-phase planning that reduces costly design-build gaps and sets every project on a winning trajectory.",
    description:
      "Before a single shovel breaks ground, our preconstruction experts analyse site conditions, validate programme feasibility, and engineer accurate cost models that hold. Early collaboration between design and construction teams means fewer surprises downstream.",
    features: [
      "Conceptual estimating & budgeting",
      "Value engineering workshops",
      "Site logistics planning",
      "Design coordination & review",
      "Risk identification & mitigation",
    ],
  },
  {
    id:   "3",
    slug: "structural-engineering",
    icon: "layers",
    title: "Structural Engineering",
    shortDescription:
      "Rigorous structural analysis and design for buildings, bridges, and industrial facilities built to last generations.",
    description:
      "Our licensed structural engineers deliver elegant, code-compliant solutions for complex building systems. From seismic retrofits to high-rise steel frames, we combine analytical rigour with practical buildability assessments that keep construction on track.",
    features: [
      "Seismic & wind analysis",
      "Foundation engineering",
      "Facade & curtain-wall systems",
      "Industrial & heavy-lift structures",
      "Retrofit & strengthening works",
    ],
  },
  {
    id:   "4",
    slug: "interior-fitout",
    icon: "home",
    title: "Interior & Fit-Out",
    shortDescription:
      "Premium interior construction and fit-out solutions that transform raw spaces into functional, inspiring environments.",
    description:
      "We handle every element of interior delivery — from partitions and MEP coordination to bespoke joinery and specialist finishes. Our fit-out teams work with speed and precision, minimising disruption for occupied buildings and meeting aggressive programme targets.",
    features: [
      "Cat A & Cat B fit-out",
      "FF&E procurement & installation",
      "Bespoke joinery & millwork",
      "Specialist finishes & art integration",
      "HVAC & MEP coordination",
    ],
  },
  {
    id:   "5",
    slug: "industrial-development",
    icon: "factory",
    title: "Industrial Development",
    shortDescription:
      "Large-scale industrial construction delivered safely and on programme — warehouses, plants, logistics hubs, and more.",
    description:
      "NexBuild's industrial team has delivered millions of square feet of manufacturing, processing, and logistics infrastructure. We understand the critical-path nature of industrial operations and engineer delivery programmes that protect our clients' production timelines.",
    features: [
      "Greenfield & brownfield development",
      "Tilt-up & precast construction",
      "Clean-room & controlled environments",
      "High-bay warehousing",
      "Utilities & infrastructure upgrades",
    ],
  },
  {
    id:   "6",
    slug: "sustainable-design",
    icon: "leaf",
    title: "Sustainable Design",
    shortDescription:
      "LEED, BREEAM, and net-zero design strategies woven into every project to reduce environmental footprint and operating costs.",
    description:
      "Sustainability is no longer optional — it's a competitive advantage. Our green building specialists integrate passive design strategies, renewable energy systems, and circular economy material sourcing to create buildings that perform for decades with lower operating costs.",
    features: [
      "LEED & BREEAM certification",
      "Net-zero carbon strategies",
      "Passive solar & daylighting design",
      "Green roof & living wall systems",
      "Energy modelling & lifecycle analysis",
    ],
  },
];

export const DESIGN_SERVICES: Service[] = [
  {
    id:   "ds-1",
    slug: "shipbuilding-contracting",
    icon: "anchor",
    title: "Shipbuilding Contracting",
    shortDescription:
      "Specialist marine construction management, dry-dock supervision, and naval architecture contracting services.",
    description: "",
    features: [],
  },
  {
    id:   "ds-2",
    slug: "preconstruction-ds",
    icon: "hard-hat",
    title: "Preconstruction Services",
    shortDescription:
      "Comprehensive early-stage planning, feasibility analysis, and programme scheduling to de-risk your project from day one.",
    description: "",
    features: [],
  },
  {
    id:   "ds-3",
    slug: "management-certification",
    icon: "award",
    title: "Management Certification",
    shortDescription:
      "ISO and industry-standard certification pathways for construction management teams to elevate performance benchmarks.",
    description: "",
    features: [],
  },
  {
    id:   "ds-4",
    slug: "virtual-design",
    icon: "monitor",
    title: "Virtual Design & Construction",
    shortDescription:
      "BIM-driven virtual construction that resolves clashes before they become costly on-site problems.",
    description: "",
    features: [],
  },
  {
    id:   "ds-5",
    slug: "sustainable-air",
    icon: "wind",
    title: "Sustainable Air Design",
    shortDescription:
      "HVAC engineering that dramatically reduces energy consumption while maintaining superior indoor air quality standards.",
    description: "",
    features: [],
  },
  {
    id:   "ds-6",
    slug: "power-supply",
    icon: "zap",
    title: "Power Supply Management",
    shortDescription:
      "Critical power infrastructure planning, UPS system design, and resilient electrical distribution for demanding facilities.",
    description: "",
    features: [],
  },
];

// ============================================================
// BANNER TABS
// ============================================================
export const BANNER_TABS: BannerTab[] = [
  {
    id:          "facade",
    icon:        "building",
    title:       "Facade Consultancy",
    description: "Expert facade engineering combining aesthetics with building physics for high-performance envelopes.",
  },
  {
    id:          "power",
    icon:        "zap",
    title:       "Power Supply Management",
    description: "Critical electrical infrastructure design ensuring uninterrupted power for mission-critical operations.",
  },
  {
    id:          "sensor",
    icon:        "radio",
    title:       "Sensor Connection",
    description: "IoT-enabled building monitoring for real-time performance data and predictive maintenance alerts.",
  },
  {
    id:          "alarm",
    icon:        "shield-alert",
    title:       "Alarm Systems & Lightning Safety",
    description: "Integrated life-safety, fire detection, and lightning protection systems designed to protect assets and people.",
  },
];

// ============================================================
// TEAM MEMBERS
// ============================================================
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id:    "1",
    name:  "Marcus Holt",
    role:  "Owner / President",
    image: "/images/team/team-01.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id:    "2",
    name:  "Priya Chandran",
    role:  "Vice President",
    image: "/images/team/team-02.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id:    "3",
    name:  "Devon Marsh",
    role:  "Accounting Director",
    image: "/images/team/team-03.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id:    "4",
    name:  "Sofia Reyes",
    role:  "Executive Director",
    image: "/images/team/team-04.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================
export const TESTIMONIALS: Testimonial[] = [
  {
    id:      "1",
    name:    "James Whitmore",
    role:    "CEO",
    company: "Meridian Holdings",
    rating:  5,
    content:
      "NexBuild delivered our 40,000 sq ft headquarters on time and 3% under budget. Their team's transparency, problem-solving pace, and build quality exceeded every expectation. We've already engaged them for phase two.",
    avatar: "/images/testimonials/t-01.jpg",
  },
  {
    id:      "2",
    name:    "Amelia Voss",
    role:    "Operations Director",
    company: "ProLogis West",
    rating:  5,
    content:
      "From preconstruction to final handover, every milestone was met and communicated clearly. The BIM coordination alone saved us weeks of programme delay. NexBuild is now our sole construction partner.",
    avatar: "/images/testimonials/t-02.jpg",
  },
  {
    id:      "3",
    name:    "Raj Patel",
    role:    "Project Lead",
    company: "SolarVast Energy",
    rating:  5,
    content:
      "We needed BREEAM Excellent — NexBuild delivered Outstanding. Their sustainable design team brought ideas we hadn't considered and reduced our projected energy costs by 34%. Extraordinary work.",
    avatar: "/images/testimonials/t-03.jpg",
  },
];

// ============================================================
// BLOG POSTS
// ============================================================
export const BLOG_POSTS: BlogPost[] = [
  {
    id:       "1",
    slug:     "veterans-business-network-summit",
    title:    "Veterans in Business Network National Conference",
    excerpt:
      "How military leadership principles are reshaping construction project management and what the industry's largest veteran summit revealed about the future of the sector.",
    content:  "",
    image:    "/images/blog/blog-01.jpg",
    category: "Industry Events",
    author:   "Marcus Holt",
    date:     "2025-11-12",
    readTime: 5,
  },
  {
    id:       "2",
    slug:     "overlooked-hvac-regulations",
    title:    "Overlooked HVAC Regulations That Could Affect Your Build",
    excerpt:
      "A technical deep-dive into the code changes most contractors miss — and how overlooking ventilation compliance has derailed several high-profile commercial projects this year.",
    content:  "",
    image:    "/images/blog/blog-02.jpg",
    category: "Compliance",
    author:   "Priya Chandran",
    date:     "2025-10-29",
    readTime: 8,
  },
  {
    id:       "3",
    slug:     "construction-law-essentials",
    title:    "Top Construction Law Cases Every Site Manager Should Know",
    excerpt:
      "From delay damages to force majeure clauses, understanding the landmark cases that define contractor liability can protect your project from costly legal exposure.",
    content:  "",
    image:    "/images/blog/blog-03.jpg",
    category: "Legal",
    author:   "Devon Marsh",
    date:     "2025-10-04",
    readTime: 7,
  },
];

// ============================================================
// STATS
// ============================================================
export const STATS: StatItem[] = [
  { label: "Projects Delivered",  value: "320",  suffix: "+" },
  { label: "Years Experience",    value: "18",   suffix: "+" },
  { label: "Team Members",        value: "250",  suffix: "+" },
  { label: "Client Satisfaction", value: "98",   suffix: "%" },
];

// ============================================================
// FAQ
// ============================================================
export const FAQ_ITEMS: FAQItem[] = [
  {
    id:       "faq-1",
    question: "What types of projects does NexBuild manage?",
    answer:
      "NexBuild specialises in commercial, industrial, and residential construction across the continental US. Our portfolio includes office towers, logistics hubs, data centres, healthcare facilities, and multi-family residential developments.",
  },
  {
    id:       "faq-2",
    question: "How do I request a project estimate?",
    answer:
      "Submit your project details via our Contact page or call our estimating team directly. We aim to provide a preliminary budget within 5 business days of receiving your scope documentation.",
  },
  {
    id:       "faq-3",
    question: "Does NexBuild self-perform construction work?",
    answer:
      "NexBuild operates as a construction manager and general contractor. We self-perform concrete, carpentry, and specialist fit-out trades while subcontracting MEP, civil, and other specialist packages to pre-qualified trade contractors.",
  },
  {
    id:       "faq-4",
    question: "What sustainability certifications can you help us achieve?",
    answer:
      "Our sustainability team is LEED AP and BREEAM AP accredited. We actively pursue LEED Gold and Platinum, BREEAM Excellent and Outstanding, and WELL certification on projects where the brief requires it.",
  },
  {
    id:       "faq-5",
    question: "How does NexBuild manage project cost overruns?",
    answer:
      "We employ monthly cost-to-complete reporting, design contingency drawdown tracking, and Value Engineering workshops at major programme milestones to identify savings opportunities before budgets are impacted.",
  },
];
