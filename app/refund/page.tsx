import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "How refunds work for Battery Guard. Purchases are made through the Mac App Store, so refunds are handled by Apple.",
};

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" updated="June 22, 2026">
      <p>
        Battery Guard is sold exclusively through the <strong>Mac App Store</strong>, so
        all purchases — subscriptions and the one-time Lifetime purchase — are processed by
        Apple. That also means refunds are handled by Apple, not by us directly.
      </p>

      <h2>Try before you buy</h2>
      <p>
        Every feature is unlocked free for <strong>14 days</strong>, with no account
        required. We strongly recommend using the trial to make sure Battery Guard is right
        for you before subscribing or buying Lifetime.
      </p>

      <h2>How to request a refund</h2>
      <p>
        To request a refund for any App Store purchase, visit{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">
          reportaproblem.apple.com
        </a>
        , sign in with your Apple Account, find Battery Guard in your purchase history, and
        choose &ldquo;Request a refund.&rdquo; Apple reviews and decides each request under
        their terms.
      </p>

      <h2>Managing a subscription</h2>
      <p>
        You can cancel a monthly or yearly subscription anytime in{" "}
        <strong>System Settings → your Apple Account → Subscriptions</strong> (or via the
        App Store). Cancelling stops future renewals; you keep access until the end of the
        current period.
      </p>

      <h2>We&apos;re happy to help</h2>
      <p>
        While we can&apos;t issue App Store refunds ourselves, we&apos;re glad to point you
        in the right direction or help with any problem. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
