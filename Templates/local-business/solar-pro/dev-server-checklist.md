# Dev Server Checklist — SolarPro Template

## Pre-Start
- [x] `npm install` completed
- [x] No missing dependencies
- [x] TypeScript check passes (`npx tsc --noEmit` → 0 errors)
- [x] ESLint passes (`npm run lint` → 0 errors, 0 warnings)
- [x] Production build passes (`npm run build` → 31 pages)

## Server Config
- Port: **3001** (set in package.json dev script)
- URL: **http://localhost:3001**
- Mode: Next.js Dev with Turbopack

## Routes to Verify
- [ ] `/` — Home page loads, hero carousel animates
- [ ] `/about` — Stats, features section visible
- [ ] `/services` — 6 service cards grid
- [ ] `/services/solar-panels` — Single service page with sidebar
- [ ] `/projects` — Portfolio grid
- [ ] `/projects/solar-supply-chain` — Single project page
- [ ] `/pricing` — 3 pricing tiers, highlighted center card
- [ ] `/blog` — Blog card grid
- [ ] `/blog/solar-power-permits-2024` — Single post with sidebar
- [ ] `/contact` — Form submits, success state shows
- [ ] `/team` — Team cards with hover social overlay
- [ ] `/awards` — Award cards
- [ ] `/gallery` — Filter tabs work, grid updates
- [ ] `/careers` — Job listings
- [ ] `/faqs` — Accordion opens/closes
- [ ] `/how-it-works` — 6 step cards

## Theme
- [ ] Light mode (default) renders correctly
- [ ] Dark mode toggle in header works
- [ ] Theme persists on page reload

## Mobile
- [ ] Bottom nav bar visible on mobile viewport
- [ ] Mobile hamburger menu opens/closes
- [ ] Pages are responsive at 375px, 768px
