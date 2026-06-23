import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Card, Section, SectionHeading, Button, CheckItem } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Press resources for Battery Guard — boilerplate, fast facts, brand colors, and contact for media inquiries.",
};

const facts = [
  ["Name", "Battery Guard"],
  ["Category", "macOS utility · menu bar app"],
  ["Platform", site.requirements],
  ["Price", "Free 14-day trial · $2.99/mo · $9.99/yr · $14.99 Lifetime"],
  ["Distribution", "Mac App Store"],
  ["Privacy", "100% on-device · no network access · no tracking"],
];

const palette = [
  { name: "Lime", hex: "#7CFF6B", var: "bg-lime" },
  { name: "Lime Bright", hex: "#B6FF4D", var: "bg-lime-bright" },
  { name: "Ink", hex: "#060807", var: "bg-ink" },
  { name: "Background", hex: "#0B0F0C", var: "bg-bg" },
  { name: "Surface", hex: "#10160F", var: "bg-surface border border-border" },
  { name: "Foreground", hex: "#E8F2E6", var: "bg-fg" },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press Kit"
        title="Press & media resources"
        subtitle="Everything you need to write about Battery Guard. For anything else, just email us."
      >
        <Button href={`mailto:${site.email}`} variant="secondary" icon="arrow">
          {site.email}
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Boilerplate" />
            <Card className="mt-6">
              <p className="text-sm leading-relaxed text-muted">
                Battery Guard is a native macOS menu bar app that gives Mac owners the
                battery tools Apple never shipped: custom charge alerts at any level, a
                real battery health history with a replacement forecast, deep usage
                insights with a charging heatmap, a configurable menu bar icon, and
                desktop widgets. Everything is computed on-device — the app has no network
                access at all, with no analytics or tracking. It&apos;s available on the
                Mac App Store.
              </p>
            </Card>

            <SectionHeading title="One-liner" />
            <Card className="mt-6">
              <p className="text-sm text-muted">
                &ldquo;The battery app macOS forgot to ship — custom alerts, health
                tracking, usage insights, and widgets, all on-device.&rdquo;
              </p>
            </Card>
          </div>

          <div>
            <SectionHeading title="Fast facts" />
            <Card className="mt-6 divide-y divide-border p-0">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 px-5 py-3.5 text-sm">
                  <span className="text-faint">{k}</span>
                  <span className="text-fg">{v}</span>
                </div>
              ))}
            </Card>

            <SectionHeading title="What's special" />
            <ul className="mt-6 space-y-3">
              <CheckItem>Custom alert rules with sound, position, and screen-edge glow</CheckItem>
              <CheckItem>Health, cycles, and temperature charted over time</CheckItem>
              <CheckItem>Usage insights with a charging heatmap</CheckItem>
              <CheckItem>Small &amp; medium desktop widgets</CheckItem>
              <CheckItem>Auto-dismisses macOS&apos;s own battery banners</CheckItem>
              <CheckItem>Exportable PDF battery health certificate</CheckItem>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-bg-soft">
        <SectionHeading
          title="Brand colors"
          subtitle="Battery Guard's palette. Please don't recolor the logo or stretch it."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {palette.map((c) => (
            <div key={c.name} className="rounded-xl border border-border bg-surface/60 p-3">
              <div className={`h-16 w-full rounded-lg ${c.var}`} />
              <div className="mt-3 text-sm font-medium text-fg">{c.name}</div>
              <div className="font-mono text-xs text-faint">{c.hex}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-6 text-sm text-muted">
          <Icon name="download" size={20} className="text-lime" />
          <span>
            Need logo files or screenshots? Email{" "}
            <a href={`mailto:${site.email}`} className="text-lime hover:underline">
              {site.email}
            </a>{" "}
            and we&apos;ll send a full asset pack.
          </span>
        </div>
      </Section>

      <CtaBand title="Questions about Battery Guard?" subtitle="We're happy to help with reviews, interviews, and assets." />
    </>
  );
}
