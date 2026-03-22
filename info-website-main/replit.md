# Project Exodus - Interactive Dossier

## Overview
A high-fidelity, interactive scientific documentation page for Project Exodus — a sovereign health infrastructure project. Built as a "living document" style landing page with clinical, academic aesthetic. All content in accessible German for non-technical audiences.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS v4 + Framer Motion
- **Backend**: Express.js with contact form API endpoint
- **Database**: PostgreSQL with Drizzle ORM (contact submissions)
- **Routing**: Wouter
- **Styling**: Tailwind v4 with CSS custom properties, Playfair Display (headings) + Inter (body)
- **Animations**: Framer Motion with `useInView` for scroll-triggered reveals

## Key Files
- `client/src/pages/Home.tsx` — Main page orchestrator (~90 lines), imports all sections
- `client/src/components/sections/` — Individual section components:
  - `helpers.tsx` — Shared components (ExplainCard, FigureCaption, PhaseCard, StatusBadge, FAQItem)
  - `SectionHero.tsx` — Hero with app mockup visual + quick navigation
  - `SectionVision.tsx` — USP cards + competitive comparison matrix
  - `SectionTeam.tsx` — Core team cards
  - `SectionMarket.tsx` — Market size (TAM/SAM/SOM) + impact indicators
  - `SectionProblem.tsx` — Before/after data silos visualization
  - `SectionHow.tsx` — 3-step flow + Erklärkarten examples
  - `SectionProduct.tsx` — 3 product paths + GTM phases
  - `SectionRevenue.tsx` — Revenue model (Abo-Subscription + Supplements)
  - `SectionTech.tsx` — Tech cards + KI-Extensions diagram + Integration Hub
  - `SectionSecurity.tsx` — Security cards + interactive sync toggle
  - `SectionRegulation.tsx` — Regulatory comparison table
  - `SectionRoadmap.tsx` — Timeline + funding strategy
  - `SectionRisks.tsx` — Risk items with counterstrategies
  - `SectionFAQ.tsx` — 12 collapsible FAQ items
- `client/src/components/TableOfContents.tsx` — Sticky right-side TOC (xl+ only)
- `client/src/components/MobileNav.tsx` — Hamburger menu for mobile/tablet
- `client/src/components/ScrollToTop.tsx` — Fixed scroll-to-top button
- `client/src/components/PrivacyNotice.tsx` — DSGVO privacy notice banner
- `client/src/components/ErrorBoundary.tsx` — React error boundary wrapper
- `client/src/components/ContactForm.tsx` — Contact/interest form
- `client/src/index.css` — Design tokens, dark mode, print styles, reduced-motion
- `client/index.html` — Fonts, meta tags, title, og:image
- `shared/schema.ts` — Drizzle schema (users + contactSubmissions)
- `server/routes.ts` — POST /api/contact endpoint
- `server/storage.ts` — In-memory storage with IStorage interface

## Design System
- **Colors**: Theme-aware via CSS custom properties. Light: white bg, dark text. Dark: dark bg, light text.
- **Accent colors**: blue, green, amber, violet, rose — all with dark mode optimized backgrounds
- **Section alternation**: `.section-alt` class for subtle background differentiation
- **Typography**: Playfair Display (serif headings), Inter (sans body)
- **Radius**: 0rem (sharp corners for clinical/academic look)
- **Dark Mode**: Toggle with localStorage persistence. Toggles `.dark` class on `<html>`.

## Sections (14 total + Contact)
1. Hero — Title + phase cards + app mockup + quick navigation
2. Vision & USP — 6 USP cards + differentiation + competitive comparison matrix
3. Team — 3 core team members
4. Markt & Impact — Market size figures (TAM/SAM/SOM) + Austrian health statistics
5. Problem → Lösung — Before/after data silos → Health Data Wall
6. So funktioniert's — 3-step flow + Erklärkarten + Evidence-to-Plan vision
7. Produktpfade — 3 product paths + Go-to-Market phases
8. Revenue — Abo-Subscription for Data Vault + Supplement/Longevity product sales
9. Technologie — Tech cards + KI-Extensions + Integration Hub (42 integrations)
10. Sicherheit — Privacy cards + interactive sync toggle + data sharing controls
11. Regulatorik — Phase 1 vs Phase 2 regulatory table
12. Roadmap — Timeline 2026-2029+ + funding strategy pipeline
13. Risiken — 8 risk items with counterstrategies
14. FAQ — 12 collapsible items covering all topics
15. Kontakt — Contact form with backend API

## Accessibility
- `lang="de"` on `<html>`
- ARIA attributes on all interactive elements
- `prefers-reduced-motion` support
- Print stylesheet
- Mobile navigation (hamburger menu)
- Scroll-to-top button

## Technical Notes
- Smooth scroll enabled via `scroll-behavior: smooth`
- `@tailwindcss/typography` is NOT usable (v3 only)
- Tailwind CSS var opacity syntax doesn't work — use inline styles
- `calc()` does NOT work inside SVG attributes
