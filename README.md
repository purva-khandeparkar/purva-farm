This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## CI/CD & Hosting Flow

### Continuous Integration (CI)
- GitHub Actions runs on every Pull Request and on pushes to the `main` branch
- CI pipeline performs:
  - Dependency installation
  - ESLint checks with fallback linting
  - Production build validation
- The `main` branch is protected and requires all CI checks to pass before merge

### Continuous Deployment (CD)
- Vercel is directly integrated with the GitHub repository
- Only the `main` branch is deployed to production
- Feature branches automatically generate preview deployments
- Production deployments occur only after successful merges into `main`

### Hosting
- Application is hosted on Vercel (Free Tier)
- Served via a global CDN with HTTPS
- Supports Next.js SSR, API routes, and edge functions

