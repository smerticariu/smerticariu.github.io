import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";

/** Standard hero band for inner pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-radial-lime">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
