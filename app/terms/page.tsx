import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Battery Guard and its license.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 22, 2026">
      <p>
        These terms govern your use of Battery Guard (the &ldquo;app&rdquo;). By
        downloading or using the app, you agree to them. Please read them alongside our{" "}
        <a href="/privacy">Privacy Policy</a> and <a href="/refund">Refund Policy</a>.
      </p>

      <h2>License</h2>
      <p>
        Battery Guard is distributed through the Mac App Store. Your use of the app is
        governed by Apple&apos;s Licensed Application End User License Agreement, which
        grants you a personal, non-transferable license to install and use Battery Guard on
        the Apple devices you own or control, subject to the App Store Terms. The free trial
        lets you evaluate the full app for 14 days; after that, a subscription or the
        one-time Lifetime purchase keeps the Pro features unlocked.
      </p>

      <h2>What you may not do</h2>
      <ul>
        <li>Resell, sublicense, rent, or redistribute the app.</li>
        <li>Reverse-engineer, decompile, or attempt to circumvent licensing, except where that restriction is prohibited by law.</li>
        <li>Use the app to violate any applicable law.</li>
      </ul>

      <h2>Updates</h2>
      <p>
        We may release updates that add, change, or remove features. Updates are delivered
        through the Mac App Store.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        Battery Guard reports information provided by macOS and your hardware and offers
        tools to help you care for your battery. It is provided &ldquo;as is,&rdquo; without
        warranties of any kind. Battery readings, forecasts, and estimates are provided for
        guidance only and may not be perfectly accurate. We do not warrant that the app
        will be uninterrupted or error-free.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for any indirect,
        incidental, or consequential damages, or for any loss arising from your use of (or
        inability to use) the app. Our total liability for any claim is limited to the
        amount you paid for your license.
      </p>

      <h2>Termination</h2>
      <p>
        These terms remain in effect while you use the app. We may suspend a license that
        is used in breach of these terms.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The date above reflects the latest
        version; continued use after a change constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
