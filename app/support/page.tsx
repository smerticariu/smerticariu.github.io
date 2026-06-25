import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Card, Section, SectionHeading, Button } from "@/components/ui";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Battery Guard. Contact support, find quick answers about the trial, subscriptions, refunds, and privacy, and check system requirements.",
};

const supportFaqs = [
  {
    q: "How do I start the free trial?",
    a: "Just download Battery Guard from the Mac App Store and open it. Every feature is unlocked for 14 days — no account, no card. When the trial ends, you can subscribe or buy Lifetime from inside the app.",
  },
  {
    q: "Where are the app's settings?",
    a: "Click the Battery Guard icon in your menu bar, then choose Settings. From there you can configure alerts, the menu bar icon, widgets, language, themes, and more.",
  },
  {
    q: "How do I manage or cancel my subscription?",
    a: "Open System Settings → tap your name → Subscriptions (or use the App Store). There you can switch plans or cancel; you keep access until the end of the current period.",
  },
  {
    q: "How do I get a refund?",
    a: "Purchases go through the App Store, so refunds are handled by Apple. Request one at reportaproblem.apple.com with your Apple Account.",
  },
  {
    q: "Is my data private?",
    a: "Completely. Battery Guard has no network access at all — every reading is computed and stored on your Mac, and nothing is ever sent off your device.",
  },
  {
    q: "It's not reading my battery correctly — what should I try?",
    a: "Quit and reopen Battery Guard, and make sure you're on macOS 14.0 or later. Readings come straight from macOS and your hardware; if something still looks off, email us with your Mac model and macOS version.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Help &amp; support"
        subtitle="Need a hand with Battery Guard? Start with the quick answers below — and if you're still stuck, a real person is one email away."
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          <Card className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-lime/25 bg-lime-deep/40 text-lime">
              <Icon name="bell" size={22} />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-fg">Email support</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Questions, bug reports, feature ideas, or help with a purchase — write to us
              and we&apos;ll get back to you, usually within a couple of days.
            </p>
            <div className="mt-6">
              <Button href={`mailto:${site.email}`} size="lg" icon="arrow">
                {site.email}
              </Button>
            </div>
            <p className="mt-4 text-xs text-faint">{site.requirements}</p>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-border bg-bg-soft">
        <SectionHeading center title="Quick answers" subtitle="The things people ask most." />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={supportFaqs} />
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          <Button href="/faq" variant="secondary" icon="arrow">
            Full FAQ
          </Button>
          <Button href="/privacy" variant="ghost">
            Privacy Policy
          </Button>
          <Button href="/refund" variant="ghost">
            Refunds &amp; cancellations
          </Button>
        </div>
      </Section>

      <CtaBand title="Still need help?" subtitle={`Email ${site.email} — we read every message.`} />
    </>
  );
}
