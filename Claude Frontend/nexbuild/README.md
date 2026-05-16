# NexBuild — Production Next.js Construction Template

A premium, white-labeled construction company frontend built with Next.js 14 App Router,
TypeScript, and Tailwind CSS. Inspired by the Wega construction theme, re-engineered as a
scalable, maintainable design-system-first codebase.

---

## 🚀 Quick Start

```bash
cd nexbuild
npm install
npm run dev          # http://localhost:3000
npm run build        # Production build
npm run type-check   # TypeScript validation
```

---

## 🗂️ Project Architecture

```
nexbuild/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (Header, Footer, metadata)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system CSS variables + global styles
│   ├── about/page.tsx          # About page
│   ├── services/
│   │   ├── page.tsx            # Services listing
│   │   └── [slug]/page.tsx     # Dynamic service detail
│   ├── projects/page.tsx       # Projects portfolio
│   ├── news/page.tsx           # Blog / news listing
│   ├── contact/page.tsx        # Contact + form
│   └── not-found.tsx           # 404 page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky header with top bar, nav, mobile drawer
│   │   ├── Footer.tsx          # 4-column footer with newsletter
│   │   └── PageHero.tsx        # Inner page hero with breadcrumbs
│   ├── ui/
│   │   ├── Button.tsx          # Button with 5 variants, href/onClick support
│   │   ├── primitives.tsx      # Container, SectionWrapper, Heading, Badge, etc.
│   │   └── Cards.tsx           # ServiceCard, TeamCard, BlogCard + icon map
│   └── sections/
│       ├── HeroSection.tsx     # Homepage hero with stats
│       ├── ServicesGrid.tsx    # 3-card homepage services
│       ├── AboutSection.tsx    # Split layout with checklist
│       ├── FullWidthBanner.tsx # Dark overlay + interactive tabs
│       ├── DesignServicesSection.tsx
│       ├── ServiceAreasSection.tsx  # Dark section with form
│       └── HomeSections.tsx    # Team, Testimonials, Stats, Partners, Blog, CTA
│
├── data/index.ts               # All CMS-ready mock data
├── types/index.ts              # Full TypeScript type definitions
├── constants/index.ts          # Nav, footer links, site config
├── lib/utils.ts                # cn(), formatDate(), slugify()
├── tailwind.config.ts          # Full design system tokens
└── public/images/              # Image placeholders (replace with real assets)
```

---

## 🎨 Design System

### Color Tokens
| Token          | Value     | Usage                  |
|----------------|-----------|------------------------|
| `primary`      | `#1B2D5E` | Dark navy — brand base |
| `accent`       | `#F07830` | Orange — CTAs, accents |
| `dark`         | `#0F1C3F` | Hero & footer bg       |
| `neutral-*`    | Gray scale | Text, borders          |

### Typography
| Role       | Font                  | Weight |
|------------|-----------------------|--------|
| Display    | Barlow Condensed      | 700–800|
| Body       | DM Sans               | 300–500|
| Accent/UI  | Barlow                | 600–700|

### Spacing
- Section padding: `py-20 md:py-28` (5rem / 7rem)
- Container: `max-w-[1240px]` with responsive padding

---

## 📄 Pages Built

| Route                        | Description                    |
|------------------------------|--------------------------------|
| `/`                          | Full homepage (10 sections)    |
| `/about`                     | Company story, values, team    |
| `/services`                  | All services listing           |
| `/services/[slug]`           | Dynamic service detail         |
| `/projects`                  | Portfolio with category filter |
| `/news`                      | Blog listing with pagination   |
| `/contact`                   | Form + contact info            |
| `*` (not-found)              | Custom 404 page                |

Additional pages to add: `/team`, `/careers`, `/testimonials`,
`/news/[slug]`, `/projects/[slug]`, `/privacy`, `/terms`

---

## 🔌 Integrations

Replace placeholder data/functions with real APIs:

- **Contact form** → `/app/contact/page.tsx` → `handleSubmit()` → connect to Resend / SendGrid / Formspree
- **Newsletter** → `/components/layout/Footer.tsx` → connect to Mailchimp / ConvertKit
- **CMS** → Replace `data/index.ts` exports with `fetch()` calls to Contentful / Sanity / Strapi
- **Images** → Replace `/images/*` with Cloudinary / Unsplash / real photography

---

## 🖼️ Image Placeholders

Add images to `/public/images/`:
- `hero-bg.jpg` — Hero section background (construction site aerial)
- `banner-bg.jpg` — Full-width dark banner background
- `about-main.jpg` / `about-story.jpg` — About section images
- `worker-hero.jpg` — Service areas section worker portrait
- `team/team-01.jpg` – `team-04.jpg` — Team member portraits
- `blog/blog-01.jpg` – `blog-03.jpg` — Blog thumbnail images
- `projects/p-01.jpg` – `p-06.jpg` — Project portfolio images

---

## 🏗️ Adding New Sections

1. Create `components/sections/MySection.tsx`
2. Export a named function component
3. Import and add to `app/page.tsx` (or any page)
4. Add data to `data/index.ts` and types to `types/index.ts`

---

## ✅ Production Checklist

- [ ] Replace all placeholder images with real photography
- [ ] Connect contact form to email service
- [ ] Add real Google Maps embed to contact page
- [ ] Set up CMS integration (Sanity/Contentful recommended)
- [ ] Configure `NEXT_PUBLIC_*` env variables
- [ ] Add `sitemap.xml` and `robots.txt` via Next.js metadata API
- [ ] Set up analytics (Vercel Analytics / PostHog)
- [ ] Enable ISR/SSG for data-driven pages
- [ ] Add `<head>` favicons and social sharing images
- [ ] Performance audit (Lighthouse target: 95+ all categories)
