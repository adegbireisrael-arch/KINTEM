# KINTEMWORLD

Modern architecture portfolio website built with Next.js 15, React 19,
TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger, and Lenis
smooth scroll.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/                Next.js App Router pages, layout, SEO (sitemap, robots)
components/          All page sections + shared UI (Navbar, Hero, Footer, etc.)
components/ui/       shadcn/ui primitives (Button)
lib/site-data.ts     All copy, stats, services, projects, testimonials — edit here
lib/utils.ts         cn() class-merging helper
public/              Static assets (favicon, OG image)
```

## Replacing placeholder imagery

Every photo currently points to a royalty-free Unsplash URL as a stand-in
for the real project photography shown in the design mockups. To swap in
your own images:

1. Drop your photos into `public/images/`.
2. Update the `image` fields in `lib/site-data.ts` (services, projects) and
   the `src` props in `Hero.tsx`, `BuildingIdeas.tsx`, and `CTASection.tsx`
   to point at `/images/your-file.jpg`.
3. Add a real 1200×630 Open Graph cover image at
   `public/images/og-cover.jpg`.
4. The favicon is auto-generated from `app/icon.tsx` (a black square with a
   "K"). Replace its contents with your real logo mark whenever you have one.

## Editing content & contact details

All text content (nav links, stats, service descriptions, "Why Clients"
list, testimonials) lives in `lib/site-data.ts`. Contact details (email,
WhatsApp number) are also defined there in `siteConfig` and are used across
the CTA section and footer.

## Notes on design fidelity

The build follows the supplied desktop/tablet and mobile-menu screens
section-for-section (nav, hero, trust bar, stats, services, "why clients",
projects masonry, testimonials, CTA, footer). Since only two page-width
references were supplied, the desktop breakpoint (1280px+) extends the same
visual language — card shapes, spacing, radii, colors — into the extra
horizontal space (e.g. services cards sit side-by-side rather than stacked).
Re-check this against any additional desktop-specific reference you have
and adjust grid spans in `Services.tsx` / `ProjectsGallery.tsx` if needed.

## Deployment

This project deploys cleanly to Vercel:

```bash
npx vercel
```

Or any Node hosting platform that supports Next.js 15.
