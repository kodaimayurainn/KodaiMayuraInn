# Kodai Mayura Inn — Boutique Hillside Retreat in Kodaikanal
**Official Website:** [kodaimayurainn.com](https://kodaimayurainn.com/)  
**Physical Coordinates:** `10.2446242° N, 77.49171° E` | **Location:** Kodaikanal, Tamil Nadu, India

Elevated escapes in the misty hills of Kodaikanal. Discover Kodai Mayura Inn's collection of boutique, design-led luxury suites and family residences.

---

## Architecture & Multi-Page SEO Routes

The website utilizes a high-performance **React 19 + Vite** architecture with **Static Prerendering (SSG)** to generate 100% crawlable static HTML files for every indexable route:

| Route | Page | Canonical URL | Schema Type |
|---|---|---|---|
| `/` | Homepage | `https://kodaimayurainn.com/` | `Hotel`, `WebSite`, `Organization` |
| `/rooms/` | Suites & Accommodations | `https://kodaimayurainn.com/rooms/` | `Hotel` (`containsPlace` -> `HotelRoom`) |
| `/about/` | About Our Hillside Sanctuary | `https://kodaimayurainn.com/about/` | `AboutPage`, `BreadcrumbList` |
| `/location/` | Location, Directions & Map | `https://kodaimayurainn.com/location/` | `Place`, `GeoCoordinates`, `BreadcrumbList` |
| `/gallery/` | High-Resolution Photo Showcase | `https://kodaimayurainn.com/gallery/` | `ImageGallery`, `BreadcrumbList` |
| `/kodaikanal-travel-guide/` | Local Destination Guide | `https://kodaimayurainn.com/kodaikanal-travel-guide/` | `Article`, `TouristDestination`, `BreadcrumbList` |
| `/contact/` | Contact & Direct Reservations | `https://kodaimayurainn.com/contact/` | `ContactPage`, `ContactPoint`, `BreadcrumbList` |

---

## Local Development & Build

### Prerequisites
- Node.js (v18+)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Type Checking & Unit Tests
```bash
npm run lint   # tsc --noEmit
npm run test   # tsx --test src/utils/bookingLogic.test.ts
```

### 4. Production Build & Static Prerender
```bash
npm run build  # Runs Vite build followed by tsx scripts/prerender.ts
```
Build output is generated in `dist/`, including static directory HTML files (`dist/rooms/index.html`, etc.) for seamless SEO crawlability and edge hosting on Cloudflare Pages or Cloudflare Workers.
