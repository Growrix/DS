# SolarPro — Local Business Solar Energy Template

A full-featured Next.js 16 template for solar energy and renewable energy businesses. Recreated from a premium ThemeForest reference design with full brand replacement.

## Tech Stack
- **Next.js 16.2.6** — App Router, TypeScript, Tailwind CSS v4
- **React 19** — Server Components by default, `"use client"` only on interactive surfaces
- **Tailwind v4** — `@theme inline` tokens in `globals.css`, no `tailwind.config.ts`

## Pages
| Route | Description |
|---|---|
| `/` | Home (hero carousel, about, services, features, projects, testimonials, quote, blog) |
| `/about` | About Us |
| `/services` | Services listing — 6 service cards |
| `/services/[slug]` | Single service |
| `/projects` | Project portfolio |
| `/projects/[slug]` | Single project |
| `/pricing` | Pricing plans — 3 tiers |
| `/blog` | Blog listing |
| `/blog/[slug]` | Single post |
| `/contact` | Contact form |
| `/team` | Team grid |
| `/awards` | Awards & recognition |
| `/gallery` | Filterable photo gallery |
| `/careers` | Open positions |
| `/faqs` | FAQ accordion |
| `/how-it-works` | 6-step process |

## Design System
All design tokens live in `src/app/globals.css` as CSS custom properties. Dark mode via `[data-theme="dark"]` on `<html>`.

## Brand Replacement
Original "Solatec" brand replaced with **SolarPro**. Footer attribution: "Built with Solar Pro Template".

## Running Locally
See RUN.md for setup steps. Dev server runs on port 3001.
