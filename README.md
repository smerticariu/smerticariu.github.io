# Battery Guard — website

Marketing & download site for **Battery Guard**, the macOS battery app. Built with
Next.js (App Router) + TypeScript + Tailwind CSS v4, and exported as a fully static
site so it can be hosted anywhere — including the same box that serves the `.dmg`.

Visual direction: energetic lime-on-dark, mono numerals for stats.

## Develop

```sh
npm install
npm run dev          # http://localhost:3000
```

## Build (static export)

```sh
npm run build        # outputs a static site to ./out
```

`next.config.ts` sets `output: "export"`, so `next build` produces a plain
HTML/CSS/JS site in `out/` with no server required. Deploy `out/` to GitHub Pages,
Netlify, Cloudflare Pages, S3 + CloudFront, or any static host.

> Note: this project lives inside the `native_apps` workspace next to the app repo.
> Run npm/next commands from **this** directory (`battery-guard-web`) — running them
> from inside `node_modules` will pick up the wrong `package.json`.

## Structure

```
app/
  layout.tsx              Root layout: fonts, global metadata, header/footer
  page.tsx                Homepage (hero, problem/solution, features, use cases,
                          testimonials, developer, pricing, FAQ, CTA)
  why/                    Why Battery Guard
  features/               Features index
  features/[slug]/        Per-feature landing pages (static-generated)
  use-cases/              Use cases
  pricing/                Pricing (one-time tiers + pricing FAQ)
  faq/                    Full FAQ
  download/               Download — direct DMG / App Store / Setapp
  blog/                   Blog index + posts
  blog/[slug]/            Blog post (renders Markdown from /content/blog)
  changelog/              Release history
  press/                  Press kit (boilerplate, fast facts, brand colors)
  privacy/ terms/ refund/ Legal pages
  not-found.tsx           Custom 404
  sitemap.ts robots.ts    SEO

components/               Header, Footer, UI primitives, Icon set, AppPreview,
                          BatteryRing, PricingCards, FaqList, Testimonials, ...
content/blog/*.md         Blog posts (frontmatter + Markdown)
lib/
  site.ts                 Brand constants, nav, footer, download links
  content.ts              Features, use cases, testimonials, pricing, FAQ data
  blog.ts                 Filesystem-backed Markdown blog loader
```

## Editing content

- **Brand / nav / download URLs:** `lib/site.ts` (swap the placeholder DMG, App
  Store, and Setapp URLs at launch).
- **Features, pricing, FAQ, testimonials:** `lib/content.ts`.
- **Blog posts:** add a Markdown file to `content/blog/` with frontmatter
  (`title`, `description`, `date`, `author`, `tag`). It's picked up automatically.
- **Changelog:** edit the `releases` array in `app/changelog/page.tsx`.

## TODO before launch

- Replace placeholder URLs in `lib/site.ts` (`downloads.*`, `site.url`, `site.email`).
- Drop a real app screenshot into `public/` and swap the `<AppPreview />` mock in the
  hero, plus add an Open Graph image.
- Confirm pricing/tier copy in `lib/content.ts`.
- Replace placeholder testimonials with real reviews.
