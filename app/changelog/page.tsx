import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Section } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What's new in Battery Guard — every release, feature, and fix.",
};

type Release = {
  version: string;
  date: string;
  summary: string;
  changes: { type: "new" | "improved" | "fixed"; text: string }[];
};

const releases: Release[] = [
  {
    version: "1.0",
    date: "2026",
    summary: "The first public release of Battery Guard.",
    changes: [
      { type: "new", text: "Custom battery alert rules with per-rule sound, position, and glow." },
      { type: "new", text: "Battery health, cycles, and temperature charted over 24h / 7 days / 14 days." },
      { type: "new", text: "Usage insights with daily energy, screen-on time, and a charging heatmap." },
      { type: "new", text: "Configurable menu bar icon, including an iPhone-style glyph." },
      { type: "new", text: "Small and medium desktop widgets." },
      { type: "new", text: "PDF battery health certificate and CSV/JSON export." },
      { type: "new", text: "Auto-dismiss for macOS's own battery banners." },
      { type: "new", text: "Seven languages and multiple themes." },
    ],
  },
];

const tone = {
  new: { label: "New", cls: "border-lime/30 bg-lime-deep/30 text-lime" },
  improved: { label: "Improved", cls: "border-warn/30 bg-warn/10 text-warn" },
  fixed: { label: "Fixed", cls: "border-border-strong bg-surface text-muted" },
} as const;

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title="What's new"
        subtitle="Every release of Battery Guard, newest first."
      />

      <Section>
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border sm:left-[7.5rem]" />
            <div className="space-y-12">
              {releases.map((r) => (
                <div key={r.version} className="relative grid gap-4 sm:grid-cols-[7rem_1fr]">
                  <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                    <span className="font-mono text-lg font-semibold text-fg tnum">
                      v{r.version}
                    </span>
                    <span className="text-xs text-faint">{r.date}</span>
                  </div>

                  <div className="relative rounded-2xl border border-border bg-surface/60 p-6">
                    <span className="absolute -left-[1.65rem] top-7 hidden h-3 w-3 rounded-full border-2 border-bg bg-lime sm:block" />
                    <p className="text-base font-medium text-fg">{r.summary}</p>
                    <ul className="mt-4 space-y-2.5">
                      {r.changes.map((c) => (
                        <li key={c.text} className="flex items-start gap-3 text-sm text-muted">
                          <span
                            className={`mt-0.5 shrink-0 rounded-full border px-2 py-0.5 text-[0.7rem] font-medium ${tone[c.type].cls}`}
                          >
                            {tone[c.type].label}
                          </span>
                          <span>{c.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 flex items-center justify-center gap-2 text-sm text-faint">
            <Icon name="bolt" size={15} className="text-lime" />
            Battery Guard is installed and updated through the Mac App Store.
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
