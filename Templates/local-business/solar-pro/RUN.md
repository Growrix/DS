# Running SolarPro Template

## Prerequisites
- Node.js 18+ 
- npm 9+

## Setup
```bash
cd Templates/local-business/solar-pro
npm install
npm run dev
```

Dev server starts at **http://localhost:3001**

## Build
```bash
npm run build
npm start
```

## Lint & Typecheck
```bash
npm run lint
npx tsc --noEmit
```

## Environment Variables
Copy `ENV.example` to `.env.local` and fill in values before deploying.
No environment variables are required for local development.
