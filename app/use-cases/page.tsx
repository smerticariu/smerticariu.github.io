import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Card, IconBadge, Section, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { useCases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "From café work to making a battery last years, see how people use Battery Guard to avoid surprise shutdowns and slow long-term wear.",
};

const extended = [
  {
    icon: "bolt" as const,
    title: "Travelling light",
    body: "On a long flight or train with no outlet, Battery Guard's live time-to-empty and a custom 25% alert mean you always know exactly how much working time you have left.",
  },
  {
    icon: "grid" as const,
    title: "Battery at a glance",
    body: "Pin a Battery Guard widget to your desktop and keep charge, health, and time-to-empty visible all day — no clicking into the menu bar to check where things stand.",
  },
  {
    icon: "pulse" as const,
    title: "Selling a used Mac",
    body: "Export a one-page PDF battery health certificate showing capacity, cycles, and condition — proof for the buyer and a better price for you.",
  },
  {
    icon: "thermometer" as const,
    title: "Heavy, hot workloads",
    body: "Rendering, compiling, or gaming for hours? A heat alert warns you when the battery runs hot, and the temperature chart shows you exactly how warm things got.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="Built for the moments your battery actually matters"
        subtitle="Battery Guard isn't a gimmick you forget about. It earns its place the moment you're far from a charger, or trying to make a battery last for years."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {[...useCases, ...extended].map((u) => (
            <Card key={u.title} className="flex gap-5">
              <IconBadge name={u.icon as never} />
              <div>
                <h3 className="text-lg font-semibold text-fg">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{u.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-bg-soft">
        <SectionHeading
          center
          title="One app, every scenario"
          subtitle="Whatever your reason for caring about battery, Battery Guard has a feature built for it."
        />
      </Section>

      <CtaBand />
    </>
  );
}
