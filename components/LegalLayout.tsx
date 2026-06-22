import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Container } from "./ui";

/** Wrapper for legal/long-form pages: hero + centered prose column. */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={`Last updated: ${updated}`} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="prose-bg mx-auto max-w-2xl">{children}</div>
        </Container>
      </section>
    </>
  );
}
