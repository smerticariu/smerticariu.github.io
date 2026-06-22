import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { Button } from "@/components/ui";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Battery Guard: Mac compatibility, the plans, privacy, the free trial, refunds, and desktop widgets.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you might want to know before you download. Still stuck? We're an email away."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <FaqList items={faqs} />

          <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-8 text-center">
            <h2 className="text-lg font-semibold text-fg">Still have a question?</h2>
            <p className="mt-2 text-sm text-muted">
              Email us and a real person will get back to you.
            </p>
            <div className="mt-5">
              <Button href={`mailto:${site.email}`} variant="secondary" icon="arrow">
                {site.email}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
