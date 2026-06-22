import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, Button } from "@/components/ui";
import { Markdown } from "@/components/Markdown";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { type: "article", title: post.title, description: post.description },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="border-b border-border bg-radial-lime">
          <Container className="py-16 sm:py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-lime"
            >
              <Icon name="arrow" size={15} className="rotate-180" /> All articles
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs text-faint">
              <span className="rounded-full border border-lime/25 bg-lime-deep/30 px-2.5 py-1 text-lime">
                {post.tag}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{post.description}</p>
            <p className="mt-6 text-sm text-faint">By {post.author}</p>
          </Container>
        </header>

        <Section>
          <div className="mx-auto max-w-2xl">
            <Markdown>{post.content}</Markdown>

            <div className="mt-12 rounded-2xl border border-border bg-surface/60 p-7 text-center">
              <h2 className="text-lg font-semibold text-fg">Try Battery Guard free</h2>
              <p className="mt-2 text-sm text-muted">
                Custom alerts, health tracking, usage insights, and widgets — all on-device.
              </p>
              <div className="mt-5">
                <Button href="/download" icon="download">
                  Download for Mac
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </article>

      <CtaBand />
    </>
  );
}
