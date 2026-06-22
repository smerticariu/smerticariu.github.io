import type { NextConfig } from "next";

// On GitHub project Pages the site is served from /<repo>/, so assets need a
// base path. The deploy workflow sets PAGES_BASE_PATH (e.g. "/battery-guard-web").
// Left empty for local dev and root/custom-domain hosting.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static export so the whole site can be hosted from any static host
  // (GitHub Pages, Netlify, Cloudflare Pages, S3).
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    // The Next image optimizer needs a server; static export can't use it.
    unoptimized: true,
  },
};

export default nextConfig;
