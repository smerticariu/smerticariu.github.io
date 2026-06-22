import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Card, CheckItem, IconBadge, Section, Button } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { features } from "@/lib/content";

// Pre-render one static page per feature for `output: export`.
export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);
  if (!feature) return {};
  return {
    title: feature.title,
    description: feature.short,
  };
}

export default async function FeatureDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = features.find((f) => f.slug === slug);
  if (!feature) notFound();

  const others = features.filter((f) => f.slug !== slug);

  return (
    <>
      <PageHero eyebrow="Feature" title={feature.title} subtitle={feature.long}>
        <Button href="/download" icon="download">
          Download for Mac
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-fg">What you get</h2>
            <ul className="mt-6 space-y-4">
              {feature.points.map((p) => (
                <CheckItem key={p}>{p}</CheckItem>
              ))}
            </ul>
          </div>

          <Card glow className="place-content-center">
            <div className="flex flex-col items-center justify-center gap-5 py-10 text-center">
              <div className="grid h-24 w-24 place-items-center rounded-3xl border border-lime/25 bg-lime-deep/30 text-lime">
                <Icon name={feature.icon as never} size={48} />
              </div>
              <p className="max-w-xs text-muted">{feature.short}</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-border bg-bg-soft">
        <h2 className="text-xl font-semibold text-fg">More features</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((f) => (
            <Link key={f.slug} href={`/features/${f.slug}`} className="group">
              <Card className="h-full transition-transform duration-200 group-hover:-translate-y-1 group-hover:border-lime/40">
                <IconBadge name={f.icon as never} />
                <h3 className="mt-4 text-base font-semibold text-fg">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{f.short}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
