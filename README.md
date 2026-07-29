# Northline Media — Meta Ads Agency Landing Page

A production-ready Next.js 15 landing page for a Meta (Facebook & Instagram)
performance ads agency.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals, hover, accordion)
- GSAP (installed, ready for additional scroll-triggered timelines)
- Three.js via `@react-three/fiber` (3D "audience network" hero background)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design notes

- **Palette**: deep indigo-black base (`#0A0D1A`) with electric blue
  (`#4C6FFF`) and violet (`#8B5CF6`) accents, a coral CTA, off-white text.
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (data/labels).
- **Signature motif**: an animated particle "audience network" (connected
  nodes) in the hero, echoed as a thin divider motif between sections —
  a nod to Meta's audience-targeting graph without using any trademarked
  iconography.

## About the "proof" sections

Per the brief, this build does **not** fabricate screenshots, testimonials,
ROAS numbers, or case study results. Every proof/evidence section (Campaign
Results, Case Studies, Performance Dashboard, Client Success Stories,
Screenshot Gallery, Video Testimonials) is a clearly labeled, styled
placeholder — animated, glassmorphic, and dashboard-styled — ready for you
to drop in real:

- Ads Manager / Business Manager / Pixel / Events Manager screenshots
  (`components/ui/ProofPlaceholder.tsx` — swap the placeholder markup for
  an `<Image />` per instance, or genericize it to accept a `src` prop)
- Real performance numbers (`lib/data.ts` → `dashboardStats`, currently all
  zeroed out with a "Placeholder — connect real data" caption)
- Real client quotes, before/after metrics, and case study copy
  (`lib/data.ts` → `caseStudies`, `successStories`)
- Real video testimonial embeds (`components/VideoTestimonials.tsx`)

All copy in `lib/data.ts` is centralized, so content updates don't require
touching component code.

## Folder structure

```
app/
  layout.tsx        Fonts + metadata
  page.tsx           Assembles all sections
  globals.css         Design tokens, glass/proof-frame utilities
components/
  Hero.tsx            3D hero + floating glass cards
  three/AudienceNetwork.tsx   R3F particle network scene
  WhyChooseUs.tsx
  CampaignResults.tsx
  CaseStudies.tsx
  PerformanceDashboard.tsx
  ClientSuccessStories.tsx
  ScreenshotGallery.tsx
  VideoTestimonials.tsx
  Expert.tsx
  About.tsx
  Process.tsx
  FAQ.tsx
  Contact.tsx
  Footer.tsx
  ui/
    SectionHeading.tsx
    ProofPlaceholder.tsx
    AnimatedCounter.tsx
lib/
  data.ts             All page content/copy in one place
```
