import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

/* ------------------------------------------------------------------ *
 * Layout primitives
 * ------------------------------------------------------------------ */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-lime">
      <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-glow" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Buttons
 * ------------------------------------------------------------------ */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: IconName;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/60";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  } as const;
  const variants = {
    primary:
      "bg-lime text-ink hover:bg-lime-bright hover:shadow-[0_10px_40px_-8px_rgba(124,255,107,0.55)]",
    secondary:
      "border border-border-strong bg-surface text-fg hover:border-lime/50 hover:text-lime",
    ghost: "text-muted hover:text-fg",
  } as const;

  const external = href.startsWith("http") || href.startsWith("mailto:");
  const content = (
    <>
      {icon ? <Icon name={icon} size={18} /> : null}
      {children}
    </>
  );
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/* ------------------------------------------------------------------ *
 * Cards & misc
 * ------------------------------------------------------------------ */

export function Card({
  children,
  className = "",
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm transition-colors ${
        glow ? "shadow-[var(--shadow-glow)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({ name }: { name: IconName }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-lime/25 bg-lime-deep/40 text-lime">
      <Icon name={name} size={22} />
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-muted">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-deep/50 text-lime">
        <Icon name="check" size={13} strokeWidth={2.4} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-mono text-3xl font-semibold text-gradient tnum sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-faint">{label}</div>
    </div>
  );
}
