/**
 * Marketing content data: features, problem/solution points, use cases,
 * testimonials, pricing tiers, and FAQ. All original copy, derived from
 * Battery Guard's actual feature set. Edit freely.
 */

export type Feature = {
  slug: string;
  icon: string; // single glyph rendered in the icon badge
  title: string;
  short: string; // one-liner for grids
  long: string; // paragraph for detail sections
  points: string[];
};

export const features: Feature[] = [
  {
    slug: "custom-battery-alerts",
    icon: "bell",
    title: "Custom battery alerts",
    short: "Alerts at any level, with their own sound, position, and glow.",
    long: "macOS only warns you at 10% and 5%, then nags. Battery Guard lets you build your own alert rules — fire at 80% to unplug, at 40% to find a charger, at 20% before a meeting — each with its own banner style, sound, and a screen-edge glow you can't miss.",
    points: [
      "Unlimited low-battery and charged-enough rules",
      "Per-rule sound, banner position, and border glow",
      "Plugged / unplugged and temperature warnings",
      "A full-screen critical warning across every display",
    ],
  },
  {
    slug: "battery-health-tracking",
    icon: "pulse",
    title: "Battery health tracking",
    short: "Capacity, cycles, and temperature, charted over time.",
    long: "Battery Guard samples your battery in the background and keeps a long history. See your health trend over time, watch cycle count and temperature, and get a forecast of how many months until you cross the 80% replacement threshold.",
    points: [
      "Health, capacity vs. design, and cycle count",
      "24h / 7-day / 14-day history charts",
      "Replacement forecast fit from your own data",
      "Exportable PDF health certificate for resale",
    ],
  },
  {
    slug: "menu-bar-battery-icon",
    icon: "gauge",
    title: "A menu bar icon you like",
    short: "Charge %, time left, health, or an iPhone-style glyph.",
    long: "Pick exactly what your menu bar shows: charge percentage, time remaining, health, temperature, an icon alone, or an iPhone-style battery glyph with the number drawn inside. Color follows your theme, with optional green/yellow/red status coding.",
    points: [
      "Battery-indicator or minimal icon styles",
      "Number drawn inside the glyph, iPhone-style",
      "Auto / light / dark tint",
      "Optional status-color coding",
    ],
  },
  {
    slug: "usage-insights",
    icon: "chart",
    title: "Usage insights",
    short: "Daily usage, screen-on time, and a charging heatmap.",
    long: "Go beyond a single percentage. Battery Guard charts how much battery you actually use each day, your screen-on time, and a heatmap of when you charge — over the last 24 hours, 7 days, or 14 days — so you can spot patterns and habits.",
    points: [
      "Daily energy-use and battery-level charts",
      "Screen-on and runtime insights",
      "Charging heatmap to spot your patterns",
      "24-hour, 7-day, and 14-day ranges",
    ],
  },
  {
    slug: "desktop-widgets",
    icon: "grid",
    title: "Desktop widgets",
    short: "Charge, health, and time-left, pinned to your desktop.",
    long: "Keep your battery in view without opening anything. Battery Guard's small and medium desktop widgets show charge, health, and time remaining, with a ring gauge or a big percentage and an accent color to match your style.",
    points: [
      "Small and medium desktop widgets",
      "Ring gauge or large percentage",
      "Optional health and time-remaining",
      "Accent colors to match your style",
    ],
  },
  {
    slug: "auto-dismiss-notifications",
    icon: "sparkle",
    title: "Auto-dismiss macOS pop-ups",
    short: "Closes Apple's battery banners so yours is the only one.",
    long: "When you've set up Battery Guard's tailored alerts, macOS's own low-battery banners are just noise. Battery Guard quietly closes them the moment they appear, so the only battery notification you see is the one you designed.",
    points: [
      "Automatically dismisses system battery banners",
      "Leaves every other notification untouched",
      "No cursor movement — uses the banner's own action",
      "Entirely on-device",
    ],
  },
];

/** Problem / solution contrast block (homepage). */
export const problems: { problem: string; solution: string }[] = [
  {
    problem: "macOS only warns you at 10% and 5%.",
    solution: "Set alerts at any level you want — and style each one.",
  },
  {
    problem: "No idea how worn your battery really is.",
    solution: "Health, cycles, and a replacement forecast, charted over time.",
  },
  {
    problem: "Charging to 100% all day quietly ages the battery.",
    solution: "Set an 80% alert so you know exactly when to unplug.",
  },
  {
    problem: "The battery menu vanishes the second you click away.",
    solution: "Desktop widgets keep charge, health, and time-left in view.",
  },
];

/** Use cases — scenario-driven (homepage + /use-cases). */
export const useCases: { icon: string; title: string; body: string }[] = [
  {
    icon: "cafe",
    title: "Working from a café",
    body: "No outlet in sight? Set a 30% alert that's impossible to miss and a 15% full-screen warning, so you save your work long before macOS would ever say a word.",
  },
  {
    icon: "leaf",
    title: "Making the battery last years",
    body: "Set an 80% unplug alert, keep an eye on temperature, and let the health forecast tell you when capacity is really starting to slip — so your Mac's battery outlives its warranty.",
  },
  {
    icon: "focus",
    title: "Deep focus, no nags",
    body: "Battery Guard dismisses macOS's repetitive low-battery banners and replaces them with a single calm alert at the one level you actually care about.",
  },
  {
    icon: "present",
    title: "Presenting without panic",
    body: "Before a talk, set a high alert threshold and watch live time-to-empty in the menu bar. No surprise shutdowns mid-slide.",
  },
];

/** Testimonials carousel. Replace with real reviews as they come in. */
export const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "It's the battery app I always wished macOS shipped with. The custom alerts alone are worth it.",
    name: "Maya R.",
    role: "Product designer",
  },
  {
    quote:
      "Watching my cycle count and health trend finally convinced me to stop charging to 100% every night.",
    name: "Tomás L.",
    role: "iOS engineer",
  },
  {
    quote:
      "The desktop widget and health history mean I always know exactly where my battery stands.",
    name: "Priya S.",
    role: "Freelance writer",
  },
  {
    quote:
      "Native, fast, no Electron bloat. You can tell it was built by someone who cares.",
    name: "Daniel K.",
    role: "Indie developer",
  },
];

/** Pricing tiers (paid one-time, like Juicy). Edit prices freely. */
export type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  badge?: string;
};

export const tiers: Tier[] = [
  {
    name: "Monthly",
    price: "$2.99",
    cadence: "per month",
    blurb: "Every Pro feature, billed monthly. Cancel anytime.",
    features: [
      "All Pro features unlocked",
      "Billed monthly through the App Store",
      "Cancel anytime",
      "Use on all your personal Macs",
    ],
    cta: "Get it on the App Store",
    href: "/download",
  },
  {
    name: "Yearly",
    price: "$9.99",
    cadence: "per year · best value",
    blurb: "The same Pro features for less than $1 a month.",
    features: [
      "All Pro features unlocked",
      "Billed yearly through the App Store",
      "Cancel anytime",
      "Use on all your personal Macs",
    ],
    cta: "Get it on the App Store",
    href: "/download",
    highlighted: true,
    badge: "Best value",
  },
  {
    name: "Lifetime",
    price: "$14.99",
    cadence: "one-time purchase",
    blurb: "Pay once, own it forever — no subscription.",
    features: [
      "Every feature unlocked, for good",
      "One-time purchase, no renewals",
      "Use on all your personal Macs",
      "Future updates included",
    ],
    cta: "Get it on the App Store",
    href: "/download",
  },
];

/** FAQ — used on homepage and /faq. */
export const faqs: { q: string; a: string }[] = [
  {
    q: "Which Macs does Battery Guard support?",
    a: "Any Mac running macOS 13.0 or later, on both Apple Silicon and Intel.",
  },
  {
    q: "How is it better than the built-in battery menu?",
    a: "macOS only alerts you at 10% and 5%, shows no health history, no usage insights, and no desktop widgets. Battery Guard adds all of that — plus a configurable menu bar icon — with alerts you design yourself.",
  },
  {
    q: "What are the plans?",
    a: "Every plan unlocks the same Pro features. Choose a monthly ($2.99) or yearly ($9.99) subscription, or a one-time Lifetime purchase ($14.99). All are handled by the App Store.",
  },
  {
    q: "Will it slow down my Mac or drain the battery?",
    a: "No. Battery Guard is a tiny native Swift app that samples in the background every 30–60 seconds. It uses a negligible amount of CPU and energy.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — a 14-day trial with every feature unlocked, no account required. Subscribe or buy Lifetime whenever you're ready.",
  },
  {
    q: "How do refunds work?",
    a: "Purchases go through the App Store, so refunds are handled by Apple. Request one at reportaproblem.apple.com — we're happy to help point you in the right direction.",
  },
  {
    q: "Does it send my data anywhere?",
    a: "Never. Battery Guard has no network access at all — everything (health history, alerts, readings) is computed and stored on your Mac, and nothing is ever sent off your device.",
  },
  {
    q: "Does it include desktop widgets?",
    a: "Yes. Battery Guard ships small and medium desktop widgets that show charge, health, and time remaining, with a ring gauge or large percentage and an accent color you choose.",
  },
];

/** Headline stats used in the hero / 'why' strip. */
export const stats: { value: string; label: string }[] = [
  { value: "0", label: "Bytes sent off your Mac" },
  { value: "30s", label: "Background sample interval" },
  { value: "1yr", label: "Of health history kept" },
  { value: "100%", label: "Native Swift" },
];
