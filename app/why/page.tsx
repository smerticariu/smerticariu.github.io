import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Card, IconBadge, Section, SectionHeading, Stat } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { problems, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Battery Guard",
  description:
    "Why Battery Guard exists: the macOS battery menu only warns at 10% and 5%, shows no health history, no usage insights, and no widgets. Here's the difference.",
};

const reasons = [
  {
    icon: "lock" as const,
    title: "Private by design",
    body: "No analytics, no tracking, no account. Battery Guard has no network access at all — health history, alerts, and readings are computed and stored only on your Mac, and nothing is ever sent off your device.",
  },
  {
    icon: "chip" as const,
    title: "Genuinely native",
    body: "Written entirely in Swift and SwiftUI. No Electron, no bundled browser, no 300 MB install. It sips CPU and energy because it's built the way a Mac app should be.",
  },
  {
    icon: "bell" as const,
    title: "Alerts you control",
    body: "macOS gives you two fixed warnings. Battery Guard lets you create as many rules as you like, at any level, each with its own sound, banner, and screen-edge glow.",
  },
  {
    icon: "shield" as const,
    title: "Made to last",
    body: "An 80% unplug alert and temperature warnings help you build battery-friendly habits — and the health forecast tells you, in months, when it's really time to replace it.",
  },
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Battery Guard"
        title="The battery menu Apple never finished"
        subtitle="macOS has shipped essentially the same battery menu for a decade: two low warnings, a percentage, and nothing else. Battery Guard is what it should have grown into."
      />

      <Section>
        <SectionHeading
          center
          title="What macOS leaves on the table"
          subtitle="Every one of these is something the built-in menu simply can't do."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {problems.map((p) => (
            <Card key={p.problem} className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bad/30 bg-bad/10 text-bad">
                <Icon name="bolt" size={15} />
              </span>
              <div>
                <p className="text-sm text-faint line-through decoration-bad/40">{p.problem}</p>
                <p className="mt-1.5 flex items-start gap-2 text-base font-medium text-fg">
                  <span className="mt-0.5 text-lime">
                    <Icon name="check" size={16} strokeWidth={2.4} />
                  </span>
                  {p.solution}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-bg-soft">
        <SectionHeading title="Principles we won't compromise on" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {reasons.map((r) => (
            <Card key={r.title} className="flex gap-5">
              <IconBadge name={r.icon} />
              <div>
                <h3 className="text-lg font-semibold text-fg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 rounded-2xl border border-border bg-surface/60 p-10 sm:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      <CtaBand title="See the difference for yourself." subtitle="Free 14-day trial. Every feature, no card." />
    </>
  );
}
