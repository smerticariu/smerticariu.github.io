import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui";
import { PricingCards } from "@/components/PricingCards";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Battery Guard pricing: a free 14-day trial, then $2.49/mo or $9.99/yr, or a one-time $14.99 Lifetime purchase. All through the Mac App Store.",
};

const pricingFaqs = [
  {
    q: "Do I have to subscribe?",
    a: "No. You can subscribe monthly or yearly, or make a single one-time Lifetime purchase and never pay again. All three unlock the same Pro features.",
  },
  {
    q: "What's the difference between the plans?",
    a: "Nothing in terms of features — they all unlock everything. Monthly ($2.49) and yearly ($9.99) are subscriptions you can cancel anytime; Lifetime ($14.99) is a one-time purchase that includes future updates.",
  },
  {
    q: "Can I use it on more than one Mac?",
    a: "Yes. Your purchase is tied to your Apple Account, so it works on all the Macs you're signed in to.",
  },
  {
    q: "How does the trial work?",
    a: "Download and use every feature free for 14 days — no account required. When you're ready, subscribe or buy Lifetime from inside the app; nothing reinstalls.",
  },
  {
    q: "How do refunds and cancellations work?",
    a: "Purchases go through the App Store. Manage or cancel a subscription in System Settings → Subscriptions, and request refunds from Apple at reportaproblem.apple.com.",
  },
];

const guarantees = [
  { icon: "lock" as const, label: "On-device & private" },
  { icon: "check" as const, label: "Free 14-day trial" },
  { icon: "apple" as const, label: "Billed via the App Store" },
  { icon: "bolt" as const, label: "Apple Silicon & Intel" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="One price unlocks everything."
        subtitle="Start free for 14 days, then pick what fits — a monthly or yearly subscription, or a one-time Lifetime purchase. Every plan unlocks all of Pro."
      />

      <Section>
        <PricingCards />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {guarantees.map((g) => (
            <span key={g.label} className="inline-flex items-center gap-2 text-sm text-muted">
              <span className="text-lime">
                <Icon name={g.icon} size={16} />
              </span>
              {g.label}
            </span>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-bg-soft">
        <SectionHeading center title="Pricing questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={pricingFaqs} />
        </div>
      </Section>

      <CtaBand title="Start your free trial." subtitle="14 days, every feature, no card required." />
    </>
  );
}
