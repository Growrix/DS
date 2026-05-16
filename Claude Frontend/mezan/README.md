# Mezan — Next.js Plumber & Handyman Website

Pixel-perfect Next.js 14 implementation of the **Mezan** professional home services theme.

## 🚀 Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure

```
mezan/
├── app/                    # Next.js App Router pages
│   ├── layout.js           # Root layout (fonts, global CSS)
│   ├── globals.css         # Design system (CSS variables, utilities)
│   ├── page.js             # Homepage (all sections)
│   ├── about/              # About Us page
│   ├── contact/            # Contact + Booking page
│   ├── services/           # Services listing page
│   ├── blog/               # Blog listing page
│   └── pricing/            # Pricing plans page
│
├── components/
│   ├── layout/
│   │   ├── TopBar          # Yellow top bar (social, contact)
│   │   ├── Header          # Dark sticky nav
│   │   └── Footer          # 5-column dark footer
│   └── sections/
│       ├── HeroSection     # Auto-rotating hero carousel
│       ├── AboutSection    # Stats + features + images
│       ├── ServicesSection # Yellow/white split with 4 cards
│       ├── QuoteSection    # Quote form + Why We Are Best
│       ├── StatsSection    # Dark bg, animated counters, images
│       ├── PortfolioSection # 3-column portfolio grid
│       ├── PricingSection  # Monthly/yearly toggle, 3 plans
│       ├── TeamSection     # CTA banner + yellow team grid
│       ├── BlogSection     # 3-column blog cards
│       ├── TestimonialSection # Slider with line art illustration
│       └── BookingSection  # Yellow bg booking form
│
└── data/                   # ← ALL CONTENT HERE (no hardcoding)
    ├── site.json           # Company info, nav, about, dark section, CTA, footer
    ├── services.json       # Service cards
    ├── portfolio.json      # Portfolio items
    ├── pricing.json        # Pricing plans with features
    ├── team.json           # Team members
    ├── blogs.json          # Blog posts
    ├── testimonials.json   # Customer reviews
    └── workTypes.json      # Work type options for forms
```

## 🎨 Design Tokens (globals.css)

```css
--yellow: #F5B800      /* Primary accent */
--dark:   #1A1A1A      /* Dark text/bg */
--white:  #FFFFFF
--font-heading: 'Poppins'
--font-body:    'Inter'
```

## 📄 Pages

| Route | Content |
|-------|---------|
| `/` | Full homepage with all 11 sections |
| `/about` | Hero + About + Quote + Team + Testimonials |
| `/contact` | Contact cards + Full booking form |
| `/services` | Services grid listing |
| `/blog` | Blog articles grid |
| `/pricing` | Pricing plans with toggle |

## ✏️ Customization

All content is in `data/*.json`. No hardcoding in components.

### Change company info:
```json
// data/site.json → company
{ "name": "YourBrand", "phone": "+1 000 000 0000", ... }
```

### Add a service:
```json
// data/services.json
{ "id": 7, "title": "New Service", "description": "...", "image": "..." }
```
