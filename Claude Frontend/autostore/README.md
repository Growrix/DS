# AutoStore — Next.js Automotive E-Commerce

A pixel-perfect Next.js 14 recreation of the **AutoStore** automotive parts theme. All content is data-driven — zero hardcoding in components.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
autostore/
├── app/                        # Next.js App Router pages
│   ├── layout.js               # Root layout (fonts, metadata)
│   ├── globals.css             # Global CSS variables & base styles
│   ├── page.js                 # Homepage
│   ├── about-us/page.js        # About Us page
│   ├── contact/page.js         # Contact page
│   ├── daily-deals/page.js     # Daily Deals with countdown
│   ├── new-arrivals/page.js    # New Arrivals listing
│   ├── blog/page.js            # Blog listing
│   ├── cart/page.js            # Shopping Cart
│   ├── product/[id]/page.js    # Product Detail
│   └── not-found.js            # 404 page
│
├── components/
│   ├── layout/
│   │   ├── TopBar.jsx          # Top info bar (phone, login, lang, currency)
│   │   ├── Header.jsx          # Sticky header with nav, search, cart
│   │   ├── Footer.jsx          # 4-column footer + newsletter
│   │   └── PageLayout.jsx      # Shared layout wrapper
│   ├── home/
│   │   ├── HeroSlider.jsx      # Auto-playing hero carousel
│   │   ├── CategoryIcons.jsx   # 6 SVG category icons
│   │   ├── VehicleSelector.jsx # Make/Model/Year vehicle finder
│   │   ├── BestSellers.jsx     # Tabbed product grid
│   │   ├── PromoBanners.jsx    # 3-column promo banners
│   │   ├── FeaturedProducts.jsx # New / Best / Sale 3 columns
│   │   ├── BrandLogos.jsx      # Brand logo strip
│   │   └── LatestBlogs.jsx     # Blog card grid
│   └── common/
│       ├── ProductCard.jsx     # Reusable product card with hover actions
│       ├── StarRating.jsx      # Configurable star rating display
│       ├── CountdownTimer.jsx  # Live countdown for daily deals
│       ├── NewsletterPopup.jsx # Auto popup with localStorage dismiss
│       └── Breadcrumb.jsx      # Breadcrumb navigation
│
├── context/
│   └── CartContext.jsx         # Global cart state with localStorage sync
│
├── data/                       # ← All content lives here. Edit freely.
│   ├── site.json               # Site name, contact, hero slides, social links
│   ├── navigation.json         # Nav menu items and dropdown children
│   ├── categories.json         # Shop categories with icons
│   ├── products.json           # All product data (best sellers, deals, etc.)
│   ├── brands.json             # Brand logo list
│   ├── blogs.json              # Blog post data
│   ├── team.json               # About Us team members
│   └── vehicle.json            # Vehicle make/model/year selector data
│
├── next.config.js
├── jsconfig.json               # Path alias: @/ → root
└── package.json
```

---

## 🎨 Pages Implemented

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, categories, vehicle selector, best sellers, promo banners, featured products, brands, blogs |
| `/about-us` | Team, about text, embedded Google Map |
| `/contact` | Contact form with validation |
| `/daily-deals` | Tabbed deals with live countdown timers |
| `/new-arrivals` | Product grid with sort & view toggle |
| `/blog` | Blog listing with category badges |
| `/cart` | Cart with quantity controls, coupon, order summary |
| `/product/[id]` | Product detail with image gallery, tabs, reviews, related products |

---

## 🎨 Design System

All design tokens are in `app/globals.css`:

```css
--primary:     #e8192c   /* AutoStore red */
--dark:        #1a1a1a
--text-dark:   #333
--star-color:  #f5a623
--font-main:   'Open Sans'
--font-heading: 'Rajdhani'
```

---

## 📦 Content Management

**To change any text, images, or product data** — edit the JSON files in `/data/`:

### Example: Add a new hero slide
```json
// data/site.json → heroSlides
{
  "id": 4,
  "title": "Your Headline",
  "subtitle": "YOUR SUBTITLE HERE",
  "description": "Short supporting text",
  "cta": "SHOP NOW",
  "image": "https://your-image-url.com/photo.jpg"
}
```

### Example: Add a product
```json
// data/products.json → bestSellers.products["WHEELS & TIRES"]
{
  "id": 99,
  "name": "MY NEW PRODUCT",
  "price": 49.99,
  "originalPrice": 69.99,
  "discount": 28,
  "rating": 5,
  "reviews": 3,
  "badge": "NEW",
  "image": "https://...",
  "category": "wheels-tires"
}
```

---

## 🔧 Features

- **Zero hardcoded content** — everything comes from `/data/*.json`
- **App Router** — Next.js 14 with Server & Client Components
- **CSS Modules** — scoped styles, no CSS-in-JS dependency
- **Responsive** — mobile-first, works at all breakpoints
- **Interactive** — hero slider, tabbed content, countdown timers, newsletter popup
- **Cart Context** — global cart with localStorage persistence
- **Form validation** — contact page with real-time error feedback
- **Newsletter popup** — auto-shows with "don't show again" preference
- **Product detail** — image gallery, quantity control, wishlist, tabs, reviews
- **Smooth transitions** — hover states, card lifts, image zoom

---

## 🌐 Deployment

```bash
# Vercel (recommended)
npx vercel

# Self-hosted
npm run build
npm start
```

---

## 📝 Next Steps

- Connect a real database (e.g. Prisma + PostgreSQL, MongoDB)
- Add authentication (NextAuth.js)
- Integrate a payment gateway (Stripe)
- Add CMS (Contentful, Sanity, or Payload)
- Replace placeholder images with real product photos
