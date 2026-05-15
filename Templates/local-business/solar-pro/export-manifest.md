# Export Manifest — SolarPro Template

## Static Export
This template supports `next export` (static HTML export) with no configuration changes needed for most pages. All pages use `generateStaticParams` for dynamic routes.

To export:
```bash
# Add to next.config.ts: output: 'export'
npm run build
# Output will be in /out directory
```

## Pages Generated (31 total)
### Static (server-rendered at build time)
- `/` — Home
- `/about`
- `/services`
- `/pricing`
- `/blog`
- `/contact`
- `/team`
- `/awards`
- `/gallery`
- `/careers`
- `/faqs`
- `/how-it-works`
- `/_not-found`

### SSG (generateStaticParams)
- `/services/solar-panels`
- `/services/wind-turbines`
- `/services/hydropower-plants`
- `/services/fossil-resources`
- `/services/battery-materials`
- `/services/charge-controllers`
- `/projects/solar-supply-chain`
- `/projects/wind-energy-innovation`
- `/projects/ev-charging-infrastructure`
- `/projects/renewable-energy-tracker`
- `/projects/natural-gas-impacts`
- `/projects/solar-supply-chain-2`
- `/blog/solar-power-permits-2024`
- `/blog/battery-storage-solar`
- `/blog/solar-market-middle-east`

## Assets
- Images: Unsplash CDN (requires internet connection)
- Fonts: Geist (bundled by Next.js)
- Icons: Unicode emoji (no external icon library)
