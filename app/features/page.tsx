import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Card, CheckItem, IconBadge, Section } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { features } from "@/lib/content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Custom battery alerts, health tracking with a replacement forecast, a configurable menu bar icon, usage insights, desktop widgets, and auto-dismissing macOS pop-ups.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything Battery Guard does"
        subtitle="Six pillars, each one a place macOS stops short. Click any feature for the full story."
      />

      <Section>
        <div className="grid gap-16">
          {features.map((f, i) => (
            <div
              key={f.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <IconBadge name={f.icon as never} />
                <h2 className="mt-5 text-2xl font-semibold text-fg sm:text-3xl">{f.title}</h2>
                <p className="mt-4 text-muted">{f.long}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {f.points.map((p) => (
                    <CheckItem key={p}>{p}</CheckItem>
                  ))}
                </ul>
                <Link
                  href={`/features/${f.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:gap-2.5 transition-all"
                >
                  Explore {f.title} <Icon name="arrow" size={16} />
                </Link>
              </div>

              <Card glow className="aspect-[4/3] place-content-center">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-2xl border border-lime/25 bg-lime-deep/30 text-lime">
                    <Icon name={f.icon as never} size={40} />
                  </div>
                  <p className="max-w-xs text-sm text-faint">{f.short}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
