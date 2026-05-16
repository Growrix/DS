export interface Product {
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  colors?: string[];
  category: string;
  brand: string;
  isOnSale: boolean;
  description: string;
}

export const products: Product[] = [
  {
    slug: "classic-black-frame-glasses",
    name: "Classic Black Frame Glasses",
    price: 32.99,
    originalPrice: 45.0,
    rating: 5,
    reviewCount: 48,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80"],
    category: "Eyeglasses",
    brand: "Ray-Ban",
    isOnSale: true,
    description:
      "Timeless black frames that complement every face shape. Lightweight and durable with UV-protective lenses.",
  },
  {
    slug: "aqua-blue-rectangular-sunglasses",
    name: "Aqua Blue Rectangular Sunglasses",
    price: 11.99,
    originalPrice: 24.0,
    rating: 5,
    reviewCount: 32,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80"],
    category: "Sunglasses",
    brand: "Oakley",
    isOnSale: true,
    description:
      "Bold aqua blue tinted lenses in a classic rectangular frame. UV400 protection for everyday outdoor use.",
  },
  {
    slug: "stylish-cat-eye-glasses",
    name: "Stylish Cat-Eye Glasses",
    price: 7.49,
    originalPrice: 10.49,
    rating: 4.8,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&q=80",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    ],
    colors: ["#F5C842", "#7B3FA0", "#E53935", "#FF8C00", "#5D3A1A"],
    category: "Eyeglasses",
    brand: "Gucci",
    isOnSale: true,
    description:
      "Elevate your look with our Stylish Cat-Eye Glasses. Featuring bold, upswept frames and a timeless silhouette, these glasses add sophistication and charm to any outfit. Perfect for those who want both fashion and function, they deliver comfort, durability, and effortless style every day.",
  },
  {
    slug: "vintage-brown-aviator-glasses",
    name: "Vintage Brown Aviator Glasses",
    price: 7.49,
    originalPrice: 18.0,
    rating: 5,
    reviewCount: 29,
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&q=80"],
    category: "Sunglasses",
    brand: "Ray-Ban",
    isOnSale: true,
    description:
      "Classic aviator design with a warm brown tint. Lightweight metal frame with comfortable nose pads.",
  },
  {
    slug: "purple-gradient-square-sunglasses",
    name: "Purple Gradient Square Sunglasses",
    price: 29.95,
    originalPrice: 45.0,
    rating: 5,
    reviewCount: 41,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80"],
    category: "Sunglasses",
    brand: "Versace",
    isOnSale: true,
    description:
      "Make a statement with purple gradient lenses in a bold square frame. Polarized UV400 protection.",
  },
  {
    slug: "matte-black-round-sunglasses",
    name: "Matte Black Round Sunglasses",
    price: 6.99,
    originalPrice: 15.0,
    rating: 5,
    reviewCount: 55,
    image: "https://images.unsplash.com/photo-1586495777744-4e6232bf4769?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1586495777744-4e6232bf4769?w=600&q=80"],
    category: "Sunglasses",
    brand: "Tom Ford",
    isOnSale: true,
    description:
      "Sleek matte black finish on round frames. A minimalist choice that works with any style.",
  },
  {
    slug: "modern-black-gradient-sunglasses",
    name: "Modern Black Gradient Sunglasses",
    price: 59.95,
    originalPrice: 85.0,
    rating: 5,
    reviewCount: 38,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80"],
    category: "Sunglasses",
    brand: "Prada",
    isOnSale: true,
    description:
      "Contemporary design with gradient black lenses. Premium UV protection and polarized coating.",
  },
  {
    slug: "bold-pink-oversized-sunglasses",
    name: "Bold Pink Oversized Sunglasses",
    price: 129,
    originalPrice: 180.0,
    rating: 5,
    reviewCount: 22,
    image: "https://images.unsplash.com/photo-1583394293253-0f15cd58fc35?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1583394293253-0f15cd58fc35?w=600&q=80"],
    category: "Sunglasses",
    brand: "Gucci",
    isOnSale: true,
    description:
      "Make a bold fashion statement with these oversized pink frames. Full UV protection with gradient tint.",
  },
  {
    slug: "sleek-black-wayfarer-sunglasses",
    name: "Sleek Black Wayfarer Sunglasses",
    price: 18.95,
    originalPrice: 35.0,
    rating: 5,
    reviewCount: 44,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80"],
    category: "Sunglasses",
    brand: "Ray-Ban",
    isOnSale: true,
    description:
      "The iconic wayfarer style in sleek matte black. Scratch-resistant lenses with UV400 protection.",
  },
];

export const shopCategories = [
  "Eyeglasses",
  "Sunglasses",
  "Reading Glasses",
  "Blue Light Glasses",
  "Contact Lenses",
  "Lens Cleaners",
  "Frames",
];

export const shopBrands = [
  "Ray-Ban",
  "Oakley",
  "Gucci",
  "Prada",
  "Versace",
  "Tom Ford",
  "Persol",
  "Michael Kors",
  "Burberry",
];

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  authorAvatar: string;
  image: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-myopia-in-children",
    title: "Understanding Myopia in Children: Causes, Signs, and Solutions",
    excerpt:
      "Myopia, or nearsightedness, is increasingly common among children. Learn how to spot the signs early and explore effective treatment options.",
    content: `<p>Myopia, commonly known as nearsightedness, has become one of the most prevalent vision problems affecting children worldwide. With screen time at an all-time high and outdoor activities on the decline, understanding and addressing myopia in children has never been more important.</p>
    <h2>What is Myopia?</h2>
    <p>Myopia occurs when the eye grows too long from front to back. This causes light to focus in front of the retina instead of directly on it, resulting in blurry distance vision. Children with myopia can see nearby objects clearly but struggle with distant ones like whiteboards or TV screens.</p>
    <h2>Signs Your Child May Have Myopia</h2>
    <p>Watch for these common signs: squinting to see distant objects, sitting very close to screens or the front of the classroom, frequent headaches, and rubbing their eyes often.</p>`,
    category: "Eye Health",
    date: "May 10, 2025",
    author: "Dr. Barbara Charline",
    authorAvatar: "https://i.pravatar.cc/60?img=48",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    readTime: "5 min read",
    tags: ["Myopia", "Children", "Eye Health", "Vision"],
  },
  {
    slug: "lasik-surgery-what-to-expect",
    title: "LASIK Surgery: What to Expect Before, During, and After",
    excerpt:
      "Considering LASIK? Our comprehensive guide walks you through every step of the process so you know exactly what to expect.",
    content: `<p>LASIK (Laser-Assisted In Situ Keratomileusis) is one of the most popular elective medical procedures in the world, with millions of people achieving clear vision every year. If you're considering LASIK, here's everything you need to know.</p>`,
    category: "Procedures",
    date: "April 22, 2025",
    author: "Dr. Peter Smith",
    authorAvatar: "https://i.pravatar.cc/60?img=7",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    readTime: "7 min read",
    tags: ["LASIK", "Surgery", "Vision Correction", "Procedures"],
  },
  {
    slug: "digital-eye-strain-prevention",
    title: "Digital Eye Strain: How to Protect Your Vision in a Screen-Heavy World",
    excerpt:
      "Spending hours in front of screens? Discover proven strategies to reduce digital eye strain and protect your long-term vision health.",
    content: `<p>In today's digital world, most of us spend a significant portion of our waking hours looking at screens. Whether it's a computer at work, a smartphone on the go, or a tablet at home, screen exposure is practically unavoidable.</p>`,
    category: "Lifestyle",
    date: "March 15, 2025",
    author: "Dr. Thomas Bennett",
    authorAvatar: "https://i.pravatar.cc/60?img=11",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80",
    readTime: "4 min read",
    tags: ["Digital Eye Strain", "Lifestyle", "Screen Time", "Prevention"],
  },
  {
    slug: "glaucoma-the-silent-thief",
    title: "Glaucoma: The Silent Thief of Sight and How to Stop It",
    excerpt:
      "Glaucoma often has no symptoms until vision is already lost. Learn why regular eye exams are your best defense against this serious condition.",
    content: `<p>Glaucoma is often called the "silent thief of sight" because it typically has no symptoms in its early stages. By the time you notice vision changes, significant and irreversible damage may already have occurred.</p>`,
    category: "Eye Health",
    date: "February 28, 2025",
    author: "Dr. Michael Evans",
    authorAvatar: "https://i.pravatar.cc/60?img=15",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
    readTime: "6 min read",
    tags: ["Glaucoma", "Eye Disease", "Prevention", "Eye Health"],
  },
  {
    slug: "choosing-right-eyeglasses",
    title: "How to Choose the Right Eyeglasses for Your Face Shape",
    excerpt:
      "The right frames can transform your look. Our style guide helps you find glasses that flatter your unique face shape.",
    content: `<p>Finding the perfect pair of glasses is about more than just your prescription. The right frames should complement your face shape, reflect your personality, and fit comfortably.</p>`,
    category: "Style",
    date: "January 20, 2025",
    author: "Dr. Joshua Henry",
    authorAvatar: "https://i.pravatar.cc/60?img=22",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
    readTime: "5 min read",
    tags: ["Eyeglasses", "Style", "Frames", "Fashion"],
  },
  {
    slug: "contact-lens-care-guide",
    title: "The Complete Contact Lens Care Guide for New Wearers",
    excerpt:
      "Starting your contact lens journey? This essential guide covers everything from insertion to cleaning and storage.",
    content: `<p>Contact lenses offer freedom and convenience that glasses sometimes can't match. But they also require proper care to keep your eyes healthy. If you're new to contacts, this guide will help you get started safely.</p>`,
    category: "Eye Care",
    date: "December 10, 2024",
    author: "Dr. Sophia Turner",
    authorAvatar: "https://i.pravatar.cc/60?img=44",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    readTime: "8 min read",
    tags: ["Contact Lenses", "Eye Care", "Beginners", "Guide"],
  },
];
