# Project Exodus — Info Website

## Overview

Project Exodus is an AI-powered longevity and preventive health platform targeting Austria/Europe. This repository contains the **public-facing information website** — an interactive, scientific-style dossier that presents the project to investors, academic partners, and potential users.

The site serves two primary views:
- **`/` and `/slides`** — A slide-deck presentation (Starscream/pitch format) for the Linz hACkT 2026 competition
- **`/info`** — A full long-form interactive dossier with 17 sections covering vision, technology, security, regulation, roadmap, team, and more

The platform concept itself centers on aggregating health data (lab results, doctor letters, wearables) into a single sovereign vault, with AI-assisted analysis and physician oversight — but this repo is the *marketing/info website*, not the health platform itself.

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Frontend

- **Framework**: React 18 with Vite as the build tool
- **Routing**: Wouter (lightweight client-side routing) — three routes: `/`, `/slides`, and `/info`
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin), with CSS custom properties for theming
- **Animations**: Framer Motion for scroll-triggered reveals and UI transitions
- **Fonts**: DM Sans (Google Fonts, loaded via `<link>` in `index.html`)
- **State/Data fetching**: TanStack React Query (v5) for server state; localStorage for theme and language preferences
- **Internationalization**: i18next with `react-i18next` — supports German (`de`) and English (`en`), defaulting to German. Locale files are at `client/src/locales/de.json` and `client/src/locales/en.json` (478 scalar leaf keys each, fully in parity)
- **UI Component Library**: shadcn/ui (Radix UI primitives + CVA), "new-york" style variant
- **Icon Libraries**: Lucide React + react-icons (for brand icons like OpenAI, Apple, Garmin, etc.)

**Page structure (`/info` route)**:
- `client/src/pages/Home.tsx` — orchestrates all 17 section components
- `client/src/components/sections/` — one file per section (Hero, Vision, Team, Market, Problem, How, Product, Revenue, Tech, Security, Regulation, Roadmap, Risks, FAQ, Contact, Agent)
- Navigation: sticky `TableOfContents` (desktop xl+) + `MobileNav` (hamburger, mobile/tablet)
- Utilities: `ReadingProgress` bar, `ScrollToTop` button, `PrivacyNotice` GDPR banner, `ErrorBoundary`

**Slides route (`/` and `/slides`)**:
- `client/src/slides/SlidesApp.tsx` — pitch presentation component (Starscream format for Linz hACkT 2026)

### Backend

- **Framework**: Express.js (TypeScript, ESM)
- **Entry point**: `server/index.ts`
- **API**: Single endpoint — `POST /api/contact` — accepts name/email/message, validates with Zod, stores submission
- **Static serving**: In production, serves the Vite-built client from `dist/public`; in development, uses Vite middleware
- **Storage**: `IStorage` interface in `server/storage.ts`. Currently implemented as `MemStorage` (in-memory Map). The Drizzle schema defines a PostgreSQL backend (`contactSubmissions` table), but the active runtime uses in-memory storage.

### Database

- **ORM**: Drizzle ORM with PostgreSQL dialect (`drizzle-kit`)
- **Schema** (`shared/schema.ts`):
  - `users` table: `id` (UUID), `username` (unique text), `password` (text)
  - `contact_submissions` table: `id` (serial), `name`, `email`, `message`, `created_at`
- **Validation**: `drizzle-zod` generates Zod schemas from Drizzle table definitions
- **Note**: The database is provisioned via `DATABASE_URL` environment variable. If not set, `drizzle.config.ts` throws at startup. The app currently defaults to in-memory storage even when DB is available — a future migration step would wire up the Drizzle DB client in `storage.ts`.

### Build System

- **Client build**: Vite builds to `dist/public`
- **Server build**: esbuild bundles `server/index.ts` to `dist/index.cjs`, with a curated allowlist of dependencies bundled in (to minimize cold start syscalls)
- **Build script**: `script/build.ts` orchestrates both builds sequentially
- **Smoke test**: `script/smoke-test.ts` starts the app on port 43115 and validates `GET /` (HTML, 200) and `POST /api/contact` (201 valid, 400 invalid)

### Dark Mode & Theming

- Toggle stored in `localStorage` as a `.dark` class on `<html>`
- CSS custom properties define all colors; dark mode uses `@custom-variant dark (&:is(.dark *))`
- Sharp corners (`--radius: 0rem`) for a clinical/academic aesthetic
- Accent palette: blue, green, amber, violet, rose — all with dark-mode variants

---

## External Dependencies

### Runtime / Production

| Dependency | Purpose |
|---|---|
| `express` | HTTP server |
| `drizzle-orm` + `drizzle-zod` | Database ORM + schema-to-Zod validation |
| `pg` | PostgreSQL client |
| `connect-pg-simple` | PostgreSQL session store (referenced in build allowlist, not yet wired) |
| `zod` | Runtime validation |
| `wouter` | Client-side routing |
| `framer-motion` | Animations |
| `react-i18next` + `i18next` | Internationalization (DE/EN) |
| `@tanstack/react-query` | Server state management |
| `@radix-ui/*` | Accessible UI primitives (via shadcn/ui) |
| `react-icons` | Brand SVG icons (OpenAI, Apple, Garmin, etc.) |
| `lucide-react` | General UI icons |
| `embla-carousel-react` | Carousel component |
| `class-variance-authority` + `clsx` + `tailwind-merge` | Tailwind class utilities |

### Build / Dev Tools

| Dependency | Purpose |
|---|---|
| `vite` + `@vitejs/plugin-react` | Frontend bundler |
| `@tailwindcss/vite` | Tailwind CSS v4 Vite plugin |
| `esbuild` | Server bundler |
| `tsx` | TypeScript execution for scripts |
| `drizzle-kit` | DB schema migration CLI |
| `@replit/vite-plugin-runtime-error-modal` | Dev error overlay |
| `@replit/vite-plugin-cartographer` | Replit dev tooling (dev only) |
| `@replit/vite-plugin-dev-banner` | Replit dev banner (dev only) |

### External Services / APIs

| Service | Usage |
|---|---|
| **Google Fonts** | DM Sans font loaded via CDN in `index.html` |
| **PostgreSQL** (via `DATABASE_URL`) | Contact form submissions (schema defined, in-memory used at runtime currently) |
| **Vercel** | Deployment target (`vercel.json` present, rewrites all paths to `index.html`) |

### Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes (for DB push) | PostgreSQL connection string |
| `NODE_ENV` | No | `development` vs `production` mode |
| `REPL_ID` | No | Detected by Vite config to enable Replit-specific plugins |
| `SMOKE_PORT` | No | Port override for smoke tests (default: 43115) |