import Link from "next/link";

/** Battery Guard wordmark: a charge-bolt battery glyph + name. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 font-semibold tracking-tight text-fg ${className}`}
      aria-label="Battery Guard — home"
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-lg border border-lime/30 bg-lime-deep/40 transition-colors group-hover:border-lime/60">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="7" width="15" height="10" rx="2.5" stroke="var(--color-lime)" strokeWidth="1.6" />
          <path d="M21 10v4" stroke="var(--color-lime)" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M11 9.5 8.5 13h2.5L10 15.5 13.5 12H11l1-2.5Z" fill="var(--color-lime)" />
        </svg>
        <span className="absolute inset-0 rounded-lg bg-lime/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
      </span>
      <span className="text-[1.05rem]">
        Battery<span className="text-lime">Guard</span>
      </span>
    </Link>
  );
}
