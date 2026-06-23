import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Card, CheckItem, Section, SectionHeading, Button } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { downloads, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Battery Guard on the Mac App Store. macOS 13+ on Apple Silicon & Intel. Free 14-day trial, everything computed on-device.",
};

const perks = [
  "Battery health, cycles & temperature",
  "Custom alerts with sound, position & glow",
  "Usage insights and a charging heatmap",
  "Configurable menu bar icon",
  "Small & medium desktop widgets",
  "PDF battery health certificate & export",
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="Get Battery Guard"
        subtitle="One tap from the Mac App Store. Free for 14 days — and every reading stays on your Mac."
      >
        <p className="text-sm text-faint">{site.requirements}</p>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-xl">
          <div className="flex flex-col rounded-2xl border border-lime/50 bg-surface p-8 shadow-[var(--shadow-glow)]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime/25 bg-lime-deep/40 text-lime">
                <Icon name="apple" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-fg">Mac App Store</h3>
                <p className="text-sm text-faint">Sandboxed · one-tap install & updates</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              The fully sandboxed build, distributed and updated by Apple, with
              Family Sharing support. Try every feature free for 14 days, then
              subscribe ($2.99/mo or $9.99/yr) or buy Lifetime once ($14.99).
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {perks.map((p) => (
                <CheckItem key={p}>{p}</CheckItem>
              ))}
            </ul>
            <div className="mt-7">
              <Button href={downloads.appStore} size="lg" className="w-full" icon="apple">
                Download on the Mac App Store
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-bg-soft">
        <SectionHeading
          center
          title="Private by design"
          subtitle="Battery Guard has no network access at all — no analytics, no tracking, no account."
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
          <Card className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-lime/25 bg-lime-deep/40 text-lime">
              <Icon name="lock" size={20} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-fg">On-device</h3>
            <p className="mt-2 text-sm text-muted">Every reading is computed and stored on your Mac.</p>
          </Card>
          <Card className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-lime/25 bg-lime-deep/40 text-lime">
              <Icon name="chip" size={20} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-fg">Native Swift</h3>
            <p className="mt-2 text-sm text-muted">No Electron, no web view — light on CPU and energy.</p>
          </Card>
          <Card className="text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-lime/25 bg-lime-deep/40 text-lime">
              <Icon name="apple" size={20} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-fg">App Store</h3>
            <p className="mt-2 text-sm text-muted">Installed, updated, and billed securely by Apple.</p>
          </Card>
        </div>
      </Section>

      <CtaBand title="Ready when you are." subtitle="Free 14-day trial. Nothing leaves your Mac." />
    </>
  );
}
