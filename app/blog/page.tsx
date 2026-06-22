import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Battery health science, tips for getting more from your Mac's battery, and a look behind how Battery Guard works.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Battery, demystified"
        subtitle="Battery health science, practical tips, and the occasional look behind the app."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-lime/40">
                <div className="flex items-center gap-3 text-xs text-faint">
                  <span className="rounded-full border border-lime/25 bg-lime-deep/30 px-2.5 py-1 text-lime">
                    {post.tag}
                  </span>
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-snug text-fg">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lime">
                  Read article <Icon name="arrow" size={15} />
                </span>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted">No posts yet — check back soon.</p>
        ) : null}
      </Section>

      <CtaBand />
    </>
  );
}
