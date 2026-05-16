// ─── Site Configuration ─────────────────────────────────────────────────────
export const siteConfig = {
  name: "Mezan",
  tagline: "Start Today",
  headline: "Mezan Services\nWorld Class Comprehensive",
  description:
    "Massa ultricies mi quis hendrerit dolor magna. Gravida et sollicitudin. Proin libero nunc consequat interdum varius sit amet mattis vulputate Massa ultricies mi quis hendrerit dolor magna. Gravida et sollicitudin. Proin libero nunc consequat interdum varius sit amet mattis vulputate nunc consequat interdum varius sit amet mattis vulputate.",
  address: "376 Branson Oval Suite 200, South Lon, Mexico",
  email: "mezan@example.com",
  phone: "+000 123 456 789",
  phone2: "+000 123 456 799",
  contactAddress: "No: 58 A, East Madison Street, Baltimore, MD, USA 4508",
  contactEmail: "info@example.com",
  socialLinks: {
    facebook: "#",
    pinterest: "#",
    youtube: "#",
    twitter: "#",
  },
  footerSocial: ["YT", "FB", "TW"],
  appLinks: {
    playStore: "#",
    appStore: "#",
  },
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/", hasDropdown: true },
  { label: "About Us", href: "/about", hasDropdown: false },
  { label: "Shop", href: "/shop", hasDropdown: true },
  { label: "Mezan Blogs", href: "/blog", hasDropdown: true },
  { label: "Pages", href: "/services", hasDropdown: true },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

// ─── Hero Services ────────────────────────────────────────────────────────────
export const heroServices = [
  { label: "Plumber", icon: "plumber" },
  { label: "AC Service", icon: "ac" },
  { label: "Electrician", icon: "electrician" },
  { label: "Appliance", icon: "appliance" },
  { label: "Carpenter", icon: "carpenter" },
];

// ─── Products ────────────────────────────────────────────────────────────────
export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  priceMin: number;
  priceMax: number;
  originalPrice?: number;
  onSale: boolean;
  rating: number;
  reviewCount: number;
  images: string[];
  thumbnail: string;
  description: string;
  shortDescription: string;
  features: string[];
  additionalFeatures: string[];
  size?: string[];
  tags: string[];
  shipping: {
    cod: boolean;
    freeShipping: boolean;
    deliveryDays: string;
    easyReturns: boolean;
    paymentOptions: string;
  };
};

export const products: Product[] = [
  {
    id: "1",
    name: "Pipe Wrench",
    slug: "pipe-wrench",
    category: "hand-tools",
    priceMin: 13.5,
    priceMax: 14.3,
    onSale: true,
    rating: 4,
    reviewCount: 12,
    images: ["/products/pipe-wrench.png", "/products/pipe-wrench-2.png"],
    thumbnail: "/products/pipe-wrench.png",
    description:
      "Orci ac auctor augue mauris augue. Enim eu turpis egestas pretium aenean pharetra magna. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Risus quis varius quam quisque id diam vel quam elementum. Odio pellentesque commodo sed egestas egestas fringilla phasellus.",
    shortDescription:
      "Lacus vel facilisis volutpat est velit egestas. Curabitur gravida arcu ac tortor dignissim convallis aenean neque.",
    features: [
      "Vulputate dignissim suspendisse",
      "Urna molestie at elementum eu faci",
      "Nibh sed pulvinar proin gravida",
      "A scelerisque purus semper eget",
      "Eget scelerisque purus semper",
    ],
    additionalFeatures: [
      "Turpis nunc eget lorem dolor sed",
      "Interdum varius sit amet mattiseras",
      "Lacinia at quis risus sed vulputate",
      "Arcu cursus euismod quis viverra niba",
      "Viverra niba arcu cursus euismod quis",
    ],
    size: ["Small", "Medium", "Large"],
    tags: ["Plumbing Tools", "Hand Tools"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
  {
    id: "2",
    name: "8\" Steel Plier",
    slug: "8-steel-plier",
    category: "hand-tools",
    priceMin: 9.7,
    priceMax: 10.6,
    onSale: true,
    rating: 5,
    reviewCount: 8,
    images: ["/products/steel-plier.png"],
    thumbnail: "/products/steel-plier.png",
    description:
      "High quality steel plier designed for professional use. Durable construction ensures long lasting performance.",
    shortDescription:
      "Professional grade steel plier for precision work.",
    features: [
      "Chrome vanadium steel",
      "Anti-slip grip handle",
      "Precision machined jaws",
      "Corrosion resistant",
      "Ergonomic design",
    ],
    additionalFeatures: [
      "Box joint construction",
      "Double-dipped handles",
      "Spring return action",
      "Induction hardened",
      "Lifetime warranty",
    ],
    tags: ["Hand Tools", "Electrical Tools"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
  {
    id: "3",
    name: "Rubber Hand Gloves",
    slug: "rubber-hand-gloves",
    category: "safety-wear",
    priceMin: 13.4,
    priceMax: 14.15,
    onSale: true,
    rating: 3,
    reviewCount: 5,
    images: ["/products/rubber-gloves.png"],
    thumbnail: "/products/rubber-gloves.png",
    description:
      "Premium rubber hand gloves for safety and protection. Suitable for plumbing, electrical and general maintenance work.",
    shortDescription: "Heavy duty rubber gloves for professional protection.",
    features: [
      "Natural rubber material",
      "Slip resistant surface",
      "Comfortable fit",
      "Chemical resistant",
      "Washable and reusable",
    ],
    additionalFeatures: [
      "Ergonomic design",
      "Available in multiple sizes",
      "Meets safety standards",
      "Durable construction",
      "Easy to clean",
    ],
    tags: ["Safety Wear", "Carpenter Tools"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
  {
    id: "4",
    name: "Handsaw",
    slug: "handsaw",
    category: "equipment",
    priceMin: 10.0,
    priceMax: 12.0,
    originalPrice: 12.0,
    onSale: true,
    rating: 4,
    reviewCount: 15,
    images: ["/products/handsaw.png"],
    thumbnail: "/products/handsaw.png",
    description:
      "Professional grade handsaw for precision cutting tasks. Suitable for wood, plastic and soft metals.",
    shortDescription: "Precision handsaw for professional carpentry.",
    features: [
      "Hardened steel blade",
      "Ergonomic handle",
      "Anti-friction coating",
      "Triple cut teeth",
      "Rust resistant",
    ],
    additionalFeatures: [
      "20 TPI fine cut",
      "Comfortable grip",
      "Blade cover included",
      "Flexible blade",
      "Precision ground teeth",
    ],
    tags: ["Carpenter Tools", "Equipment"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
  {
    id: "5",
    name: "Metal Shovel",
    slug: "metal-shovel",
    category: "equipment",
    priceMin: 20.15,
    priceMax: 20.3,
    originalPrice: 20.3,
    onSale: true,
    rating: 4,
    reviewCount: 7,
    images: ["/products/metal-shovel.png"],
    thumbnail: "/products/metal-shovel.png",
    description:
      "Heavy duty metal shovel for construction and landscaping work. Forged steel blade for maximum durability.",
    shortDescription: "Durable metal shovel for heavy-duty applications.",
    features: [
      "Forged steel blade",
      "Fiberglass handle",
      "D-grip handle",
      "All weather use",
      "Extra long handle",
    ],
    additionalFeatures: [
      "Anti-corrosion coating",
      "Riveted construction",
      "Comfortable grip",
      "Balanced design",
      "Heavy duty use",
    ],
    tags: ["Equipment"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
  {
    id: "6",
    name: "Hand Vacuum",
    slug: "hand-vacuum",
    category: "equipment",
    priceMin: 15.5,
    priceMax: 16.3,
    onSale: true,
    rating: 3,
    reviewCount: 20,
    images: ["/products/hand-vacuum.png", "/products/hand-vacuum-2.png", "/products/hand-vacuum-3.png"],
    thumbnail: "/products/hand-vacuum.png",
    description:
      "Orci ac auctor augue mauris augue. Enim eu turpis egestas pretium aenean pharetra magna. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Risus quis varius quam quisque id diam vel quam elementum. Odio pellentesque commodo sed egestas egestas fringilla phasellus. Vulputate enim nulla aliquet porttitor lacus.",
    shortDescription:
      "Lacus vel facilisis volutpat est velit egestas. Curabitur gravida arcu ac tortor dignissim convallis aenean neque.",
    features: [
      "Vulputate dignissim suspendisse",
      "Urna molestie at elementum eu faci",
      "Nibh sed pulvinar proin gravida",
      "A scelerisque purus semper eget",
      "Eget scelerisque purus semper",
    ],
    additionalFeatures: [
      "Turpis nunc eget lorem dolor sed",
      "Interdum varius sit amet mattiseras",
      "Lacinia at quis risus sed vulputate",
      "Arcu cursus euismod quis viverra niba",
      "Viverra niba arcu cursus euismod quis",
    ],
    size: ["Standard", "Compact"],
    tags: ["Equipment"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
  {
    id: "7",
    name: "Plastic Tool Box",
    slug: "plastic-tool-box",
    category: "hardware-diy-tools",
    priceMin: 12.6,
    priceMax: 13.2,
    onSale: true,
    rating: 5,
    reviewCount: 11,
    images: ["/products/tool-box.png"],
    thumbnail: "/products/tool-box.png",
    description:
      "Heavy duty plastic tool box with multiple compartments. Ideal for organizing and storing tools.",
    shortDescription: "Durable plastic tool box for tool organization.",
    features: [
      "High-impact plastic",
      "Multiple compartments",
      "Secure latch closure",
      "Comfortable carry handle",
      "Stackable design",
    ],
    additionalFeatures: [
      "Removable tray",
      "Rust proof",
      "Large capacity",
      "Durable hinges",
      "UV resistant",
    ],
    tags: ["Carpenter Tools"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
  {
    id: "8",
    name: "Cordless Drill",
    slug: "cordless-drill",
    category: "power-tools",
    priceMin: 12.65,
    priceMax: 12.8,
    originalPrice: 18.2,
    onSale: true,
    rating: 5,
    reviewCount: 30,
    images: ["/products/cordless-drill.png"],
    thumbnail: "/products/cordless-drill.png",
    description:
      "Professional cordless drill with lithium ion battery. Variable speed and torque settings for all drilling tasks.",
    shortDescription: "High performance cordless drill for professionals.",
    features: [
      "18V lithium ion battery",
      "Variable speed trigger",
      "Keyless chuck",
      "Built-in LED light",
      "Ergonomic grip",
    ],
    additionalFeatures: [
      "2 speed settings",
      "15 torque positions",
      "Battery level indicator",
      "Lightweight design",
      "Fast charging",
    ],
    size: ["Standard", "Compact"],
    tags: ["Power Tools", "Electrical Tools"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
  {
    id: "9",
    name: "Metal Hand Jigsaw",
    slug: "metal-hand-jigsaw",
    category: "hardware-diy-tools",
    priceMin: 9.5,
    priceMax: 9.75,
    originalPrice: 9.75,
    onSale: true,
    rating: 4,
    reviewCount: 6,
    images: ["/products/jigsaw.png"],
    thumbnail: "/products/jigsaw.png",
    description:
      "Professional metal hand jigsaw for precision cutting. Suitable for metal, wood and plastic cutting tasks.",
    shortDescription: "Precision metal hand jigsaw for professional use.",
    features: [
      "High carbon steel",
      "Adjustable tension",
      "Comfortable handle",
      "Replaceable blade",
      "Accurate cuts",
    ],
    additionalFeatures: [
      "Rotating handle",
      "Blade storage",
      "Non-slip grip",
      "Durable frame",
      "Easy blade change",
    ],
    tags: ["Carpenter Tools", "Hardware DIY Tools"],
    shipping: {
      cod: true,
      freeShipping: true,
      deliveryDays: "2-5 Business Day",
      easyReturns: true,
      paymentOptions: "Credit Card , Debit Card , Net Banking , Wallets , EMI , COD",
    },
  },
];

// ─── Product Categories ───────────────────────────────────────────────────────
export const productCategories = [
  { label: "Equipment", slug: "equipment", count: 4 },
  { label: "Hand Tools", slug: "hand-tools", count: 3 },
  { label: "Hardware DIY Tools", slug: "hardware-diy-tools", count: 2 },
  { label: "Power Tools", slug: "power-tools", count: 2 },
  { label: "Safety Wear", slug: "safety-wear", count: 1 },
];

export const productTags = ["Carpenter Tools", "Electrical Tools", "Plumbing Tools"];

// ─── Homepage Sections ────────────────────────────────────────────────────────
export const homeSections = [
  {
    id: "safety-wear",
    title: "Safety Wear And\nHand Tool",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam euismod, ipsum a dictum pretium, lacus risus tempor nisi, nec fermentum ipsum nisi sit amet justo. Integer euismod quam sed urna tincidunt, id interdum quam placerat.",
    categorySlug: "safety-wear",
    productIds: ["1", "2", "3"],
  },
  {
    id: "equipment",
    title: "Equipment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam euismod, ipsum a dictum pretium, lacus risus tempor nisi, nec fermentum ipsum nisi sit amet justo. Integer euismod quam sed urna tincidunt, id interdum quam placerat.",
    categorySlug: "equipment",
    productIds: ["4", "5", "6"],
  },
  {
    id: "hardware",
    title: "Hardware And\nPower Tools",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nam euismod, ipsum a dictum pretium, lacus risus tempor nisi, nec fermentum ipsum nisi sit amet justo. Integer euismod quam sed urna tincidunt, id interdum quam placerat.",
    categorySlug: "hardware-diy-tools",
    productIds: ["7", "8", "9"],
  },
];

// ─── CTA Banner ───────────────────────────────────────────────────────────────
export const ctaBanner = {
  text: "Several variations of Lorem Ipsum passages can be found, although most have been altered in some way with injected humor, ut pharetra sit amet aliquam id, commodo elit at imperdiet dui accumsan sit amet nulla. Sit amet tellus cras adipiscing. Please call",
  phones: ["+000 123 456 789", "+000 123 456 799"],
  cta: "Get In Touch",
};

// ─── About Page ───────────────────────────────────────────────────────────────
export const aboutContent = {
  subtitle: "Our Friendly Team",
  title: "Home And Businesses\nInstallation Services",
  description:
    "Phasellus Malesuada Pretium leo pulvinar sit. velit facilisi luctus mauris. Integer ullamcorper blandit nunc consequat. Augue interdum velit malesuada fames ac turpis. Maecenas ut leo vitae purus condimentum dignissim.",
  projectsCount: "560+",
  projectsLabel: "Projects Done",
  features: [
    {
      icon: "consultation",
      title: "Earliest Consultation",
      desc: "Nullam pharetra eu erat volutpat commodo. Adipiscing enim eu turpis egestas pretium aenean pharetra magna.",
    },
    {
      icon: "solution",
      title: "Customized Solution",
      desc: "Phasellus malesuada sollicitudin amet sit nulla. Velit tortuctor. Tempor faucibus. Ipsum in aliquet dui.",
    },
    {
      icon: "pricing",
      title: "Affordable Pricing",
      desc: "Sit orci eu lobortis sit amet varius. Venenatis. Tempor faucibus fermentum cras ullamcorper.",
    },
    {
      icon: "allinone",
      title: "All-In-One Service",
      desc: "Nullam vel nunc eu nisi eu mattis. Sit amet. Diam euismod. Venenatis vitae suscipit.",
    },
  ],
  videoCta: {
    subtitle: "Explore Our Services",
    title: "Simply Click To Get A Top Z Repair\n& Maintenance Work",
    desc: "Sed consequetur adipiscing mi purus. Phasellus faucibus duis cras. Porta accumsan porro.",
    buttons: ["Book Now", "More Videos"],
    stats: "200+ Continuing Contractors in Mundo",
  },
  marqueeText: "HIGH TECH ✦ INSTALLATION & REPAIR ✦ SERVICES BY PROFESSIONAL ✦ TECHNICIANS, AND DESIGNERS ✦ FOR COMPLETE ✦ NEEDS",
  stats: [
    { value: "980+", label: "Successful Services" },
    { value: "900+", label: "Satisfied Clients" },
    { value: "450+", label: "Professionals" },
    { value: "220+", label: "Global Stores" },
  ],
  servicesTitle: "Home & Commercial Services",
  servicesDesc:
    "Massa Laoipmtior atica elit. Arcu ultrices diam lacinia pretium dignissim parturient. Adipiscing ultrices pulvinar a ultricies. Habitant Mi. Malesuada.",
  serviceFeatures: [
    { icon: "licensed", title: "Licensed Technicians", desc: "Lorem ipsum dolor sit amet consectetur." },
    { icon: "rated", title: "Top Rated Service", desc: "Lorem ipsum dolor sit amet consectetur." },
    { icon: "timely", title: "Timely Services", desc: "Lorem ipsum dolor sit amet consectetur." },
    { icon: "quality", title: "Quality Services", desc: "Lorem ipsum dolor sit amet consectetur." },
  ],
  teamTitle: "Expert Technical Team",
  team: [
    { name: "Manila Atalbarto", role: "Master Plumber", slug: "manila-atalbarto" },
    { name: "Ambrogio Knee", role: "Electrician", slug: "ambrogio-knee" },
    { name: "Raffaele Giraldo", role: "AC Technician", slug: "raffaele-giraldo" },
    { name: "Susana Hazae", role: "Carpenter", slug: "susana-hazae" },
  ],
  faqTitle: "Frequently Asked Questions",
  faqSideTitle: "Still Have Doubts?",
  faqSideDesc: "$118 You Have Doubts? Give us a call and talk to one of our team members.",
  faqs: [
    {
      q: "How Often Should I Have My Plumbing Inspected?",
      a: "Nam consequat scelerisque commodo sed. Hendrerit morbi nunc tellus purus odio leo donec blandit congue. At ipsum quis mauris. Imperdiet at Pretium sodales.",
    },
    { q: "How Do I Choose The Right Masonry Contractor?", a: "" },
    { q: "What Are Some Signs That Masonry Work Needs Repair?", a: "" },
    { q: "What Should I Do If My Toilet Is Constantly Running?", a: "" },
    { q: "Do You Offer Free Financing Or Sustainable Options For Your Services?", a: "" },
  ],
  testimonialTitle: "Happy Customers",
  testimonials: [
    {
      name: "Consuela Daria",
      role: "Chairperson",
      rating: 5,
      text: "Elit Etiam Sit Amet Nisl Purus. Consequat Nel Ve Pretium Lacus Quam Id Leo. Tincidunt Augue Interdum Velit Euismod. Nunc Faucibus A Pellentesque Sit Amet. Porta Quis Diam Mollis At Varius Libero. Cras Convallis Tellus Id Ullamcorper Eu Lacinia. Pellentesque Massa Placerat. Consequat Nel Ve Pretium Lacus Quam Id Leo. Tincidunt Augue Interdum Velit Euismod. Nunc Faucibus A Pellentesque Sit Amet. Ullamcorper Per Morbi Tincidunt Ornare.",
    },
  ],
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const footerData = {
  description:
    "Duis ultricies libero sit amet aliquam fermentum. Nunc tincidunt dui in tempor. Maecenas ut leo vitae purus condimentum dignissim.",
  columns: [
    {
      title: "Information",
      links: [
        { label: "Request Service", href: "#" },
        { label: "Commercial Plumbing", href: "#" },
        { label: "Our Work", href: "#" },
        { label: "What We Do", href: "#" },
        { label: "Our Process", href: "#" },
        { label: "Reviews", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "#" },
        { label: "Newsletter", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms Of Use", href: "#" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  newsletter: {
    title: "Newsletter",
    desc: "Sunc fincidunt mollis dui in tempor. Duis ultricies libero sit amet.",
    disclaimer: "We don't spam. Unsubscription any time.",
  },
};

// ─── Services Page ────────────────────────────────────────────────────────────
export const servicesContent = {
  subtitle: "What We Offer",
  title: "Professional Home &\nCommercial Services",
  description:
    "Massa laoipmtior atica elit. Arcu ultrices diam lacinia pretium dignissim parturient. Adipiscing ultrices pulvinar a ultricies. Habitant Mi. Malesuada.",
  services: [
    {
      id: "plumbing",
      icon: "plumber",
      emoji: "🚿",
      title: "Plumbing Services",
      description:
        "Nam consequat scelerisque commodo sed. Hendrerit morbi nunc tellus purus odio leo donec blandit congue. At ipsum quis mauris imperdiet pretium sodales.",
      features: [
        "Pipe Repair & Replacement",
        "Drain Cleaning",
        "Water Heater Service",
        "Leak Detection",
        "Fixture Installation",
      ],
      priceFrom: 49,
    },
    {
      id: "ac-service",
      icon: "ac",
      emoji: "❄️",
      title: "AC Service & Repair",
      description:
        "Amet consectetur adipiscing elit pellentesque. Ullamcorper dignissim cras tincidunt lobortis feugiat viverra. Nec feugiat in fermentum posuere.",
      features: [
        "AC Installation",
        "Routine Maintenance",
        "Gas Refilling",
        "Duct Cleaning",
        "Emergency Repairs",
      ],
      priceFrom: 39,
    },
    {
      id: "electrical",
      icon: "electrician",
      emoji: "⚡",
      title: "Electrical Services",
      description:
        "Sit orci eu lobortis sit amet varius. Venenatis. Tempor faucibus fermentum cras ullamcorper gravida et sollicitudin.",
      features: [
        "Wiring & Rewiring",
        "Panel Upgrades",
        "Outlet Installation",
        "Lighting Setup",
        "Safety Inspections",
      ],
      priceFrom: 59,
    },
    {
      id: "appliance",
      icon: "appliance",
      emoji: "🏠",
      title: "Appliance Repair",
      description:
        "Porta lorem mollis aliquam ut porttitor leo. Lacinia at quis risus sed vulputate odio ut enim blandit.",
      features: [
        "Washing Machine",
        "Refrigerator Repair",
        "Dishwasher Fix",
        "Oven & Microwave",
        "Water Purifier",
      ],
      priceFrom: 35,
    },
    {
      id: "carpentry",
      icon: "carpenter",
      emoji: "🪚",
      title: "Carpentry & Woodwork",
      description:
        "Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Arcu cursus euismod quis viverra nibh cras pulvinar.",
      features: [
        "Furniture Assembly",
        "Door & Window Repair",
        "Cabinet Making",
        "Flooring Work",
        "Custom Woodwork",
      ],
      priceFrom: 45,
    },
    {
      id: "handyman",
      icon: "plumber",
      emoji: "🔧",
      title: "General Handyman",
      description:
        "Risus quis varius quam quisque id diam vel quam elementum. Odio pellentesque commodo sed egestas fringilla.",
      features: [
        "Wall Patching",
        "Painting",
        "Tile Work",
        "Furniture Repair",
        "Odd Jobs",
      ],
      priceFrom: 29,
    },
  ],
  process: {
    title: "How It Works",
    steps: [
      {
        step: "01",
        title: "Book Service",
        desc: "Choose your service and schedule an appointment online or by phone at any time.",
      },
      {
        step: "02",
        title: "Technician Visit",
        desc: "Our certified professional arrives on time with all required tools and equipment.",
      },
      {
        step: "03",
        title: "Work & Inspect",
        desc: "We complete the job to the highest standard and perform a full quality inspection.",
      },
      {
        step: "04",
        title: "Pay & Rate",
        desc: "Pay securely after the job is done and share your valuable feedback with us.",
      },
    ],
  },
};

// ─── Blog ─────────────────────────────────────────────────────────────────────
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  readTime: number;
  tags: string[];
  image: string;
};

export const blogCategories = [
  { label: "Plumbing", slug: "plumbing", count: 2 },
  { label: "Electrical", slug: "electrical", count: 1 },
  { label: "AC Service", slug: "ac-service", count: 1 },
  { label: "Carpentry", slug: "carpentry", count: 1 },
  { label: "Home Maintenance", slug: "home-maintenance", count: 1 },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-choose-right-plumbing-tools",
    title: "How To Choose The Right Plumbing Tools For Your Home",
    excerpt:
      "Massa ultricies mi quis hendrerit dolor magna. Gravida et sollicitudin. Proin libero nunc consequat interdum varius sit amet mattis vulputate.",
    content:
      "Orci ac auctor augue mauris augue. Enim eu turpis egestas pretium aenean pharetra magna. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Risus quis varius quam quisque id diam vel quam elementum. Odio pellentesque commodo sed egestas egestas fringilla phasellus.\n\nVulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Lorem donec massa sapien faucibus et. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus.\n\nNullam eget felis eget nunc lobortis mattis aliquam faucibus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.\n\nTincidunt augue interdum velit euismod in pellentesque massa placerat duis. Aenean euismod elementum nisi quis eleifend. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin.",
    author: "Manila Atalbarto",
    authorRole: "Master Plumber",
    date: "May 10, 2026",
    category: "plumbing",
    readTime: 5,
    tags: ["Plumbing", "Tools", "Home Maintenance"],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    id: "2",
    slug: "top-5-ac-maintenance-tips",
    title: "Top 5 AC Maintenance Tips To Keep Your Unit Running Efficiently",
    excerpt:
      "Phasellus malesuada sollicitudin amet sit nulla. Velit tortuctor. Tempor faucibus fermentum cras ullamcorper.",
    content:
      "Amet consectetur adipiscing elit pellentesque. Ullamcorper dignissim cras tincidunt lobortis. Quis commodo odio aenean sed adipiscing diam donec. Enim eu turpis egestas pretium aenean pharetra magna.\n\nPorta lorem mollis aliquam ut porttitor. Lacinia at quis risus sed vulputate odio ut enim. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque.\n\nNullam pharetra eu erat volutpat commodo. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Velit facilisi luctus mauris. Integer ullamcorper blandit nunc consequat interdum.\n\nAugue interdum velit malesuada fames ac turpis. Maecenas ut leo vitae purus condimentum dignissim. Curabitur gravida arcu ac tortor dignissim convallis aenean neque.",
    author: "Raffaele Giraldo",
    authorRole: "AC Technician",
    date: "May 5, 2026",
    category: "ac-service",
    readTime: 4,
    tags: ["AC Service", "Maintenance", "Cooling"],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  },
  {
    id: "3",
    slug: "electrical-safety-tips-for-home",
    title: "Essential Electrical Safety Tips Every Homeowner Should Know",
    excerpt:
      "Sit orci eu lobortis sit amet varius. Venenatis. Tempor faucibus fermentum cras ullamcorper. Gravida et sollicitudin.",
    content:
      "Nam consequat scelerisque commodo sed. Hendrerit morbi nunc tellus purus odio leo donec blandit congue. At ipsum quis mauris. Imperdiet at pretium sodales.\n\nTincidunt augue interdum velit euismod in pellentesque massa placerat. Aenean euismod elementum ipsum a arcu nisi quis eleifend quam adipiscing. Viverra vitae congue eu consequat ac felis.\n\nSit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Erat pellentesque adipiscing commodo elit at imperdiet dui. Accumsan sit amet nulla facilisi morbi tempus iaculis.\n\nMassa tincidunt dui ut ornare lectus. Sit amet volutpat consequat mauris nunc congue nisi vitae. Diam phasellus vestibulum lorem sed risus ultricies tristique.",
    author: "Ambrogio Knee",
    authorRole: "Electrician",
    date: "April 28, 2026",
    category: "electrical",
    readTime: 6,
    tags: ["Electrical", "Safety", "Home Maintenance"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "4",
    slug: "beginner-guide-to-carpentry-tools",
    title: "A Beginner's Guide To Essential Carpentry Tools",
    excerpt:
      "Lacus vel facilisis volutpat est velit egestas. Curabitur gravida arcu ac tortor dignissim convallis aenean neque.",
    content:
      "Ipsum a arcu cursus vitae congue mauris. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Nisl tincidunt eget nullam non nisi. Augue eget arcu dictum varius duis at consectetur lorem.\n\nMattis rhoncus urna neque viverra justo nec. Volutpat blandit aliquam etiam erat velit scelerisque. Consequat nisl vel pretium lectus quam id leo in vitae. Venenatis cras sed felis eget velit aliquet sagittis id.\n\nId velit ut tortor pretium viverra suspendisse. Blandit cursus risus at ultrices mi tempus imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque.\n\nEt pharetra pharetra massa massa ultricies mi quis hendrerit. Amet consectetur adipiscing elit ut aliquam. Vitae elementum curabitur vitae nunc sed velit dignissim sodales.",
    author: "Susana Hazae",
    authorRole: "Carpenter",
    date: "April 20, 2026",
    category: "carpentry",
    readTime: 7,
    tags: ["Carpentry", "Tools", "DIY"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "5",
    slug: "why-regular-home-maintenance-saves-money",
    title: "Why Regular Home Maintenance Can Save You Thousands",
    excerpt:
      "Orci ac auctor augue mauris augue. Enim eu turpis egestas pretium aenean pharetra magna. Vulputate enim nulla aliquet porttitor.",
    content:
      "Feugiat in fermentum posuere urna nec tincidunt praesent semper. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Tristique senectus et netus et malesuada fames ac turpis egestas.\n\nRisus quis varius quam quisque id diam vel quam elementum. Odio pellentesque commodo sed egestas egestas fringilla phasellus faucibus. Euismod nisi porta lorem mollis aliquam ut porttitor leo.\n\nArcu cursus euismod quis viverra nibh cras pulvinar mattis. Egestas erat imperdiet sed euismod nisi porta lorem. Senectus et netus et malesuada fames ac turpis egestas.\n\nMassa ultricies mi quis hendrerit dolor magna eget. Gravida arcu ac tortor dignissim. Curabitur vitae nunc sed velit dignissim sodales ut eu sem.",
    author: "Manila Atalbarto",
    authorRole: "Master Plumber",
    date: "April 12, 2026",
    category: "home-maintenance",
    readTime: 5,
    tags: ["Home Maintenance", "Savings", "Tips"],
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
  },
  {
    id: "6",
    slug: "signs-your-plumbing-needs-repair",
    title: "5 Warning Signs Your Plumbing Needs Immediate Attention",
    excerpt:
      "Nullam vel nunc eu nisi eu mattis. Sit amet. Diam euismod. Venenatis vitae suscipit. Massa ultricies mi quis.",
    content:
      "Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Pretium lectus quam id leo in vitae turpis massa sed. Sagittis id consectetur purus ut faucibus pulvinar elementum.\n\nMassa enim nec dui nunc mattis enim ut. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.\n\nEnim nulla aliquet porttitor lacus luctus accumsan tortor. Cursus vitae congue mauris rhoncus aenean vel. Senectus et netus et malesuada fames ac turpis egestas integer.\n\nBlandit cursus risus at ultrices mi. Nisi porta lorem mollis aliquam ut porttitor. Leo a diam sollicitudin tempor id eu nisl nunc mi.",
    author: "Manila Atalbarto",
    authorRole: "Master Plumber",
    date: "March 30, 2026",
    category: "plumbing",
    readTime: 4,
    tags: ["Plumbing", "Repairs", "Warning Signs"],
    image:
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
  },
];

// ─── Contact Page ─────────────────────────────────────────────────────────────
export const contactContent = {
  subtitle: "Get In Touch",
  title: "We're Here To Help\nYou Anytime",
  description:
    "Duis ultricies libero sit amet aliquam fermentum. Nunc tincidunt dui in tempor. Maecenas ut leo vitae purus condimentum dignissim.",
  workingHours: [
    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "Emergency Only" },
  ],
  formTitle: "Send Us A Message",
  services: [
    "Plumbing",
    "AC Service",
    "Electrical",
    "Appliance Repair",
    "Carpentry",
    "General Handyman",
  ],
};
