/**
 * Central site configuration: brand constants, navigation, footer map,
 * and the download/distribution links. Edit values here to update them
 * everywhere on the site.
 */

export const site = {
  name: "Battery Guard",
  // Used in <title> templates and structured data.
  tagline: "The battery app macOS forgot to ship.",
  description:
    "Battery Guard is a native macOS menu bar app for battery health, custom charge alerts, usage insights, and desktop widgets — all computed on-device.",
  url: "https://batteryguard.app",
  email: "semerticariu@gmail.com",
  // macOS support line shown in the footer and download page.
  requirements: "macOS 13.0 or later · Apple Silicon & Intel",
  twitter: "@batteryguardapp",
} as const;

/** Where the app can be obtained. Swap this for the real URL at launch. */
export const downloads = {
  // Mac App Store listing. Replace id000000000 with the real App ID.
  appStore: "https://apps.apple.com/app/battery-guard/id000000000",
} as const;

/** Primary nav shown in the header. */
export const primaryNav: { label: string; href: string }[] = [
  { label: "Why Battery Guard", href: "/why" },
  { label: "Features", href: "/features" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

/** Per-feature landing pages — surfaced in the mega-nav and footer. */
export const featurePages: {
  slug: string;
  label: string;
  title: string;
  blurb: string;
}[] = [
  {
    slug: "custom-battery-alerts",
    label: "Custom Battery Alerts",
    title: "Custom Battery Alerts",
    blurb:
      "Set alerts at any level — not just Apple's fixed 10% and 5% nags — with their own sound, position, and screen-edge glow.",
  },
  {
    slug: "battery-health-tracking",
    label: "Battery Health Tracking",
    title: "Battery Health Tracking",
    blurb:
      "Capacity, cycles, and temperature charted over a week, month, or year, with a forecast for when you'll cross 80%.",
  },
  {
    slug: "menu-bar-battery-icon",
    label: "Menu Bar Battery Icon",
    title: "Menu Bar Battery Icon",
    blurb:
      "A battery indicator you actually like looking at — charge %, time left, health, or an iPhone-style glyph with the number inside.",
  },
  {
    slug: "usage-insights",
    label: "Usage Insights",
    title: "Usage Insights",
    blurb:
      "Daily energy use, screen-on time, and a charging heatmap over the last 24 hours, 7 days, or 14 days — so you can spot your patterns.",
  },
  {
    slug: "desktop-widgets",
    label: "Desktop Widgets",
    title: "Desktop Widgets",
    blurb:
      "Small and medium desktop widgets with charge, health, and time-left — a ring gauge or big percentage, in an accent color you choose.",
  },
  {
    slug: "auto-dismiss-notifications",
    label: "Auto-Dismiss Notifications",
    title: "Auto-Dismiss macOS Battery Pop-ups",
    blurb:
      "Battery Guard quietly closes macOS's own low-battery banners so its tailored alert is the only one you see.",
  },
];

/** Footer column structure. */
export const footerNav: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Why Battery Guard", href: "/why" },
      { label: "Features", href: "/features" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Pricing", href: "/pricing" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    heading: "Features",
    links: featurePages.map((f) => ({ label: f.label, href: `/features/${f.slug}` })),
  },
  {
    heading: "Resources",
    links: [
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "Press Kit", href: "/press" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
];
