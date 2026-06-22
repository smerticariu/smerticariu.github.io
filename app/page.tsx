import Link from "next/link";
import { Button, Card, Container, IconBadge, Section, SectionHeading, Stat } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { AppPreview } from "@/components/AppPreview";
import { Testimonials } from "@/components/Testimonials";
import { FaqList } from "@/components/FaqList";
import { PricingCards } from "@/components/PricingCards";
import { CtaBand } from "@/components/CtaBand";
import { features, problems, stats, useCases, faqs } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-radial-lime">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 text-xs font-medium text-muted">
              <Icon name="apple" size={14} className="text-lime" />
              Native for macOS · Apple Silicon &amp; Intel
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl">
              The battery app{" "}
              <span className="text-gradient">macOS forgot</span> to ship.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Custom charge alerts at any level, a real health history with a
              replacement forecast, deep usage insights, and desktop widgets —
              all in your menu bar, all on-device.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/download" size="lg" icon="download">
                Download for Mac
              </Button>
              <Button href="/features" variant="secondary" size="lg" icon="arrow">
                Explore features
              </Button>
            </div>

            <p className="mt-5 text-sm text-faint">
              Free 14-day trial · {site.requirements}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <AppPreview />
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="relative border-t border-border/60">
          <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </Container>
        </div>
      </section>

      {/* ---------------- Problem / Solution ---------------- */}
      <Section>
        <SectionHeading
          center
          eyebrow="Why it exists"
          title="macOS does the bare minimum. Battery Guard does the rest."
          subtitle="The built-in battery menu hasn't really changed in years. Here's what it leaves on the table."
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

      {/* ---------------- Feature showcase ---------------- */}
      <Section className="border-t border-border bg-bg-soft">
        <SectionHeading
          eyebrow="Features"
          title="Everything you wish the battery menu did"
          subtitle="Six pillars, each one a place macOS stops short."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link key={f.slug} href={`/features/${f.slug}`} className="group">
              <Card className="h-full transition-transform duration-200 group-hover:-translate-y-1 group-hover:border-lime/40">
                <IconBadge name={f.icon as never} />
                <h3 className="mt-5 text-lg font-semibold text-fg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-lime opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <Icon name="arrow" size={15} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* ---------------- Use cases ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="Use cases"
          title="Built for the moments your battery actually matters"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {useCases.map((u) => (
            <Card key={u.title} className="flex gap-5">
              <IconBadge name={u.icon as never} />
              <div>
                <h3 className="text-lg font-semibold text-fg">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{u.body}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/use-cases" variant="secondary" icon="arrow">
            More ways people use it
          </Button>
        </div>
      </Section>

      {/* ---------------- Testimonials ---------------- */}
      <Section className="border-t border-border bg-bg-soft">
        <Testimonials />
      </Section>

      {/* ---------------- Developer ---------------- */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface/60 p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-lime/25 bg-lime-deep/40 text-lime">
              <Icon name="chip" size={26} />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-fg">Built by one developer who cares</h2>
            <p className="mt-4 text-muted">
              Battery Guard is a 100% native Swift app — no Electron, no web view, no
              telemetry. It&apos;s built and maintained by an indie developer who got
              tired of macOS&apos;s 10%-and-5% battery warnings and decided to build the
              app Apple never did. Every reading is computed on your Mac and stays there.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button href="/why" variant="secondary">Why Battery Guard</Button>
              <Button href="/press" variant="ghost">Press kit</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------- Pricing ---------------- */}
      <Section id="pricing" className="border-t border-border bg-bg-soft">
        <SectionHeading
          center
          eyebrow="Pricing"
          title="Simple pricing. Free for 14 days."
          subtitle="Start with a free 14-day trial — every feature unlocked, no account required. Then subscribe, or buy Lifetime once."
        />
        <div className="mt-14">
          <PricingCards />
        </div>
        <p className="mt-8 text-center text-sm text-faint">
          All plans are handled securely by the App Store.
        </p>
      </Section>

      {/* ---------------- FAQ ---------------- */}
      <Section>
        <SectionHeading center eyebrow="FAQ" title="Questions, answered" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={faqs.slice(0, 6)} />
          <div className="mt-6 text-center">
            <Button href="/faq" variant="ghost" icon="arrow">
              Read the full FAQ
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
