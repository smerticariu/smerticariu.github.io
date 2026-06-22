import type { SVGProps } from "react";

/**
 * Lightweight inline icon set (stroke-based, inherits currentColor).
 * Keyed by name so content data can reference an icon as a string.
 */

export type IconName =
  | "bell"
  | "pulse"
  | "gauge"
  | "shield"
  | "devices"
  | "sparkle"
  | "cafe"
  | "leaf"
  | "focus"
  | "present"
  | "bolt"
  | "lock"
  | "check"
  | "arrow"
  | "apple"
  | "download"
  | "star"
  | "thermometer"
  | "chip"
  | "chart"
  | "grid"
  | "battery";

const paths: Record<IconName, React.ReactNode> = {
  bell: (
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  ),
  pulse: <path d="M3 12h4l3 8 4-16 3 8h4" />,
  gauge: (
    <>
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="m13.4 10.6 3.6-3.6" />
      <path d="M4.2 18a9 9 0 1 1 15.6 0" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </>
  ),
  devices: (
    <>
      <rect x="2.5" y="5" width="13" height="9" rx="1.5" />
      <path d="M1 17h14" />
      <rect x="17" y="8" width="5.5" height="11" rx="1.2" />
    </>
  ),
  sparkle: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  ),
  cafe: (
    <>
      <path d="M4 8h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 9h2a2 2 0 0 1 0 4h-2" />
      <path d="M7 3v2M11 3v2" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15a6 6 0 0 1-1-1Z" />
      <path d="M5 19c3-5 7-8 11-9" />
    </>
  ),
  focus: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M3 3h4M17 3h4M3 21h4M17 21h4M3 3v4M21 3v4M3 17v4M21 17v4" />
    </>
  ),
  present: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M12 16v4M8 20h8" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  apple: (
    <path d="M16 13c0-3 2.5-3.5 2.6-3.6-1.4-2-3.6-2.3-4.4-2.3-1.9-.2-3.6 1.1-4.6 1.1S7.2 7.1 5.7 7.1C3.7 7.2 1.9 8.3 1 10c-2 3.4-.5 8.5 1.4 11.3.9 1.3 2 2.8 3.5 2.7 1.4-.1 1.9-.9 3.6-.9s2.2.9 3.6.9 2.5-1.3 3.4-2.6c.7-1 1.3-2.1 1.6-3.2-3.6-1.4-3.1-5.1-3.1-5.1Z M14.5 4.6c.8-1 1.3-2.3 1.2-3.6-1.1.1-2.5.8-3.3 1.7-.7.8-1.4 2.1-1.2 3.4 1.3.1 2.5-.6 3.3-1.5Z" />
  ),
  download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />,
  star: (
    <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6L12 17.8 6.6 19.6l1-6L3.3 9.4l6-.9L12 3Z" />
  ),
  thermometer: (
    <>
      <path d="M12 4a2 2 0 0 0-2 2v8.5a4 4 0 1 0 4 0V6a2 2 0 0 0-2-2Z" />
      <path d="M12 14v4" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
    </>
  ),
  battery: (
    <>
      <rect x="2.5" y="7" width="17" height="10" rx="2.5" />
      <path d="M22 10v4" />
      <rect x="5" y="9.5" width="9" height="5" rx="1" fill="currentColor" stroke="none" />
    </>
  ),
  chart: <path d="M4 20V11M10 20V4M16 20v-6M3 20.5h18" />,
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.2" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" />
      <rect x="14" y="14" width="7" height="7" rx="1.2" />
    </>
  ),
};

export function Icon({
  name,
  size = 24,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  );
}
