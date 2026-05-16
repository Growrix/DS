# Mezan Imported Template

This runtime is the first proof-of-concept output for the new import-and-attach lane.

## Purpose
- preserve an already-built Claude frontend as the implementation baseline
- normalize it into `Templates/local-business/mezan/`
- keep it runnable as a standalone template
- expose a minimal Foundation Core attach surface without redesigning the imported UI

## Import source
- `Claude Frontend/mezan-nextjs/mezan`

## Key files
- `template.manifest.json`
- `.import/import-report.md`
- `.audit/frontend-self-audit.md`
- `app/api/template-attach-status/route.ts`
- `lib/foundation-attach.ts`

## Current state
- visible UI baseline preserved from the imported runtime
- footer attribution normalized to the required Growrix OS contract
- Foundation attachment available through `/api/template-attach-status`
- missing-page expansion, deeper copyright cleanup, and enhancement work remain a post-import continuation stepThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
