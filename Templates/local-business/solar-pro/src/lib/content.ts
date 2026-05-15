import type {
  Service,
  Project,
  BlogPost,
  Testimonial,
  PricingPlan,
  TeamMember,
  FAQ,
  Award,
  GalleryItem,
  CareerListing,
  Stat,
} from "@/types";

export const HOME_STATS: Stat[] = [
  { value: "6,154", label: "Projects Completed In Last 5 Years" },
  { value: "2,512", label: "Qualified Employees & Workers With Us" },
  { value: "241", label: "Awards Milestones Awarded To Us" },
];

export const SERVICES: Service[] = [
  {
    slug: "solar-panels",
    title: "Solar Panels",
    description:
      "A PV module is an assembly of photo voltaic cells mounted in a framework for installation. Cells use sunlight as a source of energy and generate direct current electricity.",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80",
    icon: "☀️",
  },
  {
    slug: "wind-turbines",
    title: "Wind Turbines",
    description:
      "The smallest turbines used for applications such as battery charging for cells mounted in a framework auxiliary power supply for boats or caravans.",
    image:
      "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?auto=format&fit=crop&w=800&q=80",
    icon: "💨",
  },
  {
    slug: "hydropower-plants",
    title: "Hydropower Plants",
    description:
      "Hydroelectric power plants can include a reservoir to exploit the energy of falling water, converting the kinetic energy of flowing water into electricity.",
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=800&q=80",
    icon: "💧",
  },
  {
    slug: "fossil-resources",
    title: "Fossil Resources",
    description:
      "Green chemistry is attracting interest as it provides clean and green technologies used for applications in sustainable energy transition planning.",
    image:
      "https://images.unsplash.com/photo-1510771463146-f0f50e3b8e28?auto=format&fit=crop&w=800&q=80",
    icon: "⚗️",
  },
  {
    slug: "battery-materials",
    title: "Battery Materials",
    description:
      "Lithium batteries have become the battery type of choice in most applications due to high energy density, long lifespan and low maintenance requirements.",
    image:
      "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=800&q=80",
    icon: "🔋",
  },
  {
    slug: "charge-controllers",
    title: "Charge Controllers",
    description:
      "Charge controllers regulate the rate of charge from your inverter to your battery bank. Browse our MPPT and PWM controllers for all system sizes.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    icon: "⚡",
  },
];

export const FEATURES = [
  {
    icon: "💰",
    title: "Save Your Money",
    description:
      "Save money on utilities or increase the value of your home by installing solar panels from our certified engineers.",
  },
  {
    icon: "⭐",
    title: "5 Stars Customer Service",
    description:
      "We understand that we must go above our customer expectations during each interaction, always delivering excellence.",
  },
  {
    icon: "🏠",
    title: "Your Home Is Energy",
    description:
      "Everyday the sun provides us with abundance of free energy. By placing solar panels on your home, you harvest that energy.",
  },
  {
    icon: "📋",
    title: "Consult & Planning",
    description:
      "Our remote industrial solar systems are designed to reliably power our clients' most critical operations worldwide.",
  },
  {
    icon: "🏆",
    title: "Certified Engineers",
    description:
      "Our sales engineers on staff have experience and can design any complete solar system for residential or commercial needs.",
  },
  {
    icon: "🥇",
    title: "Awards & Milestones",
    description:
      "Benefiting from nearly 20 years of experience in renewable energy, we have earned recognition across the industry.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "solar-supply-chain",
    title: "Expanding The Solar Supply Chain Finance Program",
    category: "Finance",
    tags: ["Finance", "Supply Chain"],
    image:
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=800&q=80",
    description:
      "We announced the expansion of our solar supply chain finance program for PV module manufacturers, providing working capital solutions.",
  },
  {
    slug: "wind-energy-innovation",
    title: "Addressing Wind Energy Innovation Challenges",
    category: "Wind Energy",
    tags: ["Wind Energy", "Innovations"],
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
    description:
      "Developing next-generation wind turbine technologies that improve efficiency and reduce costs for large-scale wind energy deployment.",
  },
  {
    slug: "ev-charging-infrastructure",
    title: "Smarter Ways To Manage EV Charging Infrastructures",
    category: "Electric Vehicle",
    tags: ["Electric Vehicle", "Infrastructures"],
    image:
      "https://images.unsplash.com/photo-1473341304170-0f8a719c5135?auto=format&fit=crop&w=800&q=80",
    description:
      "Building intelligent EV charging networks that integrate seamlessly with renewable energy sources and smart grid technologies.",
  },
  {
    slug: "renewable-energy-tracker",
    title: "New Public Attitude Tracker Towards Renewable Energy",
    category: "Green Energy",
    tags: ["Green Energy", "ECO"],
    image:
      "https://images.unsplash.com/photo-1466611653911-0265b1c1d452?auto=format&fit=crop&w=800&q=80",
    description:
      "Tracking public sentiment and adoption rates of renewable energy across major markets to inform policy and investment decisions.",
  },
  {
    slug: "natural-gas-impacts",
    title: "Dangerous Environmental Impacts Of Natural Gas",
    category: "Fossil Resources",
    tags: ["Infrastructures", "Gas"],
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80",
    description:
      "Analyzing the environmental consequences of natural gas extraction and distribution to support the transition to clean energy.",
  },
  {
    slug: "solar-supply-chain-2",
    title: "Expanding The Solar Supply Chain Finance Program",
    category: "Finance",
    tags: ["Finance", "Supply Chain"],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    description:
      "Phase two of our supply chain finance initiative, extending access to smaller manufacturers and installers globally.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "John Morrison",
    role: "Residential Homeowner",
    content:
      "They were fantastic through the entire purchase process. I had lots of questions and they were patient. My system arrived well packed and installation was seamless. Highly recommend!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Commercial Property Manager",
    content:
      "The team delivered an exceptional solar solution for our building complex. Energy costs dropped by 40% and the ROI has been incredible. Professional from start to finish.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "Industrial Plant Director",
    content:
      "Outstanding technical expertise and project management. The wind energy installation exceeded our power generation targets by 15%. We are planning a second phase expansion.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "solar-power-permits-2024",
    title: "Filing Solar Power Permits In 2024? Consider The Following Important Factors",
    excerpt:
      "All of these factors are important to consider when permitting your solar system, and can help streamline your process significantly.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    date: "Jan 20, 2024",
    category: "Insights",
    author: "Mike Dooley",
  },
  {
    slug: "battery-storage-solar",
    title: "Battery Storage Solutions For Your Solar Energy System",
    excerpt:
      "Batteries are the most expensive part of a solar system. Between an appropriately-sized battery bank and a battery-based inverter, choices matter.",
    image:
      "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=800&q=80",
    date: "Feb 14, 2024",
    category: "Technology",
    author: "Emily Carter",
  },
  {
    slug: "solar-market-middle-east",
    title: "Why Solar Energy Is Leading The Renewable Shift In The Middle East",
    excerpt:
      "While renewable energy comprises a range of technologies, in the Middle East there is no doubt that solar is king due to the region's exceptional irradiance.",
    image:
      "https://images.unsplash.com/photo-1466611653911-0265b1c1d452?auto=format&fit=crop&w=800&q=80",
    date: "Mar 5, 2024",
    category: "Market",
    author: "James Harlow",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter Plan",
    price: "$50",
    period: "Monthly",
    description:
      "The perfect plan for small business. Fast project turnaround time, substantial cost savings and quality standards.",
    features: [
      "5 System Monitors",
      "5 Keyword Monitors",
      "Full Social Profiles",
      "Basic Reports",
      "Email Support",
    ],
  },
  {
    name: "Basic Plan",
    price: "$70",
    period: "Monthly",
    description:
      "The perfect plan for larger companies. Fast project turnaround time, substantial cost savings and quality standards.",
    features: [
      "5 Brand Monitors",
      "5 Keyword Monitors",
      "Full Social Profiles",
      "500 Search Results",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Advanced Plan",
    price: "$90",
    period: "Monthly",
    description:
      "The perfect plan for bigger enterprises. Fast project turnaround time, substantial cost savings and quality standards.",
    features: [
      "5 Brand Monitors",
      "5 Keyword Monitors",
      "Basic Quota",
      "PDF Reports",
      "500 Search Results",
      "24/7 Support",
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Robert Fleming",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "20+ years in renewable energy leadership. Robert has guided SolarPro from a small installer to a global clean energy distributor.",
  },
  {
    name: "Angela Torres",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Solar systems engineer with expertise in PV design, battery storage, and grid integration across residential and commercial sectors.",
  },
  {
    name: "Marcus Webb",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Supply chain and project management specialist ensuring on-time delivery and quality installation across all regions.",
  },
  {
    name: "Diana Park",
    role: "Head of Sales",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Customer-first sales professional with a decade of experience helping homeowners and businesses transition to clean energy.",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "How much does a solar panel system cost?",
    answer:
      "The cost of a solar panel system depends on your energy needs, location, and system size. Most residential systems range from $10,000 to $30,000 before incentives. Contact us for a free, personalised quote.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A standard residential solar installation takes 1-3 days. Commercial projects may take 1-4 weeks depending on scale. Our team handles permits, inspection scheduling, and utility interconnection.",
  },
  {
    question: "What is the lifespan of solar panels?",
    answer:
      "High-quality solar panels are rated for 25-30 years. Most manufacturers offer a 25-year power output warranty. Inverters typically last 10-15 years and may need replacement during the system's lifetime.",
  },
  {
    question: "Do solar panels work on cloudy days?",
    answer:
      "Yes. Solar panels generate electricity from diffuse light, not just direct sunlight. They produce 10-25% of their rated capacity on overcast days. With proper sizing, your system will still cover a significant portion of your energy needs.",
  },
  {
    question: "What incentives are available for solar installation?",
    answer:
      "Federal, state, and local incentives vary. In the US, the federal solar Investment Tax Credit (ITC) offers a 30% credit on installation costs. Many states offer additional rebates and net metering programs.",
  },
  {
    question: "How is solar energy stored?",
    answer:
      "Excess solar energy can be stored in battery systems like lithium-ion storage units, or fed back into the grid via net metering. We offer complete battery storage solutions including installation and monitoring.",
  },
];

export const AWARDS: Award[] = [
  {
    year: "2024",
    title: "Best Renewable Energy Provider",
    body: "Global Clean Energy Awards",
    description:
      "Recognised for outstanding contribution to solar energy adoption and innovation in residential and commercial markets.",
  },
  {
    year: "2023",
    title: "Top Solar Installer of the Year",
    body: "Solar Industry Association",
    description:
      "Awarded for the highest customer satisfaction score and most installations completed in a single calendar year.",
  },
  {
    year: "2022",
    title: "Green Innovation Award",
    body: "Environmental Business Council",
    description:
      "Honoured for developing proprietary battery integration technology that reduces energy waste by up to 22%.",
  },
  {
    year: "2021",
    title: "Excellence in Clean Energy",
    body: "National Energy Awards",
    description:
      "Recognised for leadership in community solar programs, bringing renewable energy to underserved communities.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
    alt: "Large solar farm installation",
    category: "Commercial",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=600&q=80",
    alt: "Residential solar panels on rooftop",
    category: "Residential",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=600&q=80",
    alt: "Solar farm aerial view",
    category: "Commercial",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?auto=format&fit=crop&w=600&q=80",
    alt: "Wind turbines at sunset",
    category: "Wind Energy",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=600&q=80",
    alt: "Offshore wind turbines",
    category: "Wind Energy",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=600&q=80",
    alt: "Hydroelectric dam",
    category: "Hydropower",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80",
    alt: "Solar technician installing panels",
    category: "Residential",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1473341304170-0f8a719c5135?auto=format&fit=crop&w=600&q=80",
    alt: "EV charging stations",
    category: "Electric Vehicle",
  },
];

export const CAREERS: CareerListing[] = [
  {
    id: 1,
    title: "Solar System Design Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Design and engineer residential and commercial solar PV systems. Conduct site assessments and produce detailed system specifications.",
  },
  {
    id: 2,
    title: "Solar Installation Technician",
    department: "Field Operations",
    location: "Multiple Locations",
    type: "Full-time",
    description:
      "Install, maintain, and troubleshoot solar panel systems and associated electrical components at residential and commercial sites.",
  },
  {
    id: 3,
    title: "Sales Consultant – Residential Solar",
    department: "Sales",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Consult with homeowners on solar solutions. Conduct energy assessments, present proposals, and guide clients through the installation process.",
  },
  {
    id: 4,
    title: "Supply Chain Coordinator",
    department: "Operations",
    location: "Brooklyn, NY",
    type: "Full-time",
    description:
      "Manage procurement and logistics for solar panels, batteries, and ancillary equipment. Work with global suppliers to ensure on-time delivery.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Schedule a free consultation with one of our certified solar advisors. We assess your energy needs, roof condition, and local incentives.",
    icon: "📞",
  },
  {
    step: "02",
    title: "Custom Design",
    description:
      "Our engineers design a solar system tailored to your specific energy usage, roof layout, and budget requirements.",
    icon: "📐",
  },
  {
    step: "03",
    title: "Permits & Approvals",
    description:
      "We handle all permit applications, utility interconnection agreements, and local authority approvals on your behalf.",
    icon: "📋",
  },
  {
    step: "04",
    title: "Professional Installation",
    description:
      "Our certified technicians install your system with minimal disruption. Most residential installations are completed in 1-2 days.",
    icon: "🔧",
  },
  {
    step: "05",
    title: "Inspection & Activation",
    description:
      "Final inspections are completed, grid connection is approved, and your system goes live. We activate your monitoring portal.",
    icon: "✅",
  },
  {
    step: "06",
    title: "Ongoing Monitoring",
    description:
      "24/7 system monitoring and annual maintenance visits ensure your system performs at peak efficiency for decades.",
    icon: "📊",
  },
];
