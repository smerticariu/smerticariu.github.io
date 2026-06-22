import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Battery Guard's privacy policy. Everything is computed on-device. No analytics, no tracking, no data sent off your Mac.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 22, 2026">
      <p>
        Battery Guard is built around a simple principle: your battery data is yours, and
        it stays on your Mac. This policy explains what that means in practice.
      </p>

      <h2>The short version</h2>
      <p>
        We don&apos;t collect, store, transmit, or sell any of your personal data.
        Everything Battery Guard reads — battery health, charge history, temperature,
        usage — is computed locally and stored only on your device.
      </p>

      <h2>Data we process on your device</h2>
      <ul>
        <li>
          <strong>Battery readings.</strong> Charge level, health, cycles, and temperature,
          read from macOS and your Mac&apos;s hardware. These never leave your Mac.
        </li>
        <li>
          <strong>History.</strong> Battery Guard keeps a local history (stored in your
          Application Support folder) so it can chart trends and forecast battery wear.
          You can export or clear it at any time.
        </li>
        <li>
          <strong>Preferences.</strong> Your settings are stored locally in standard macOS
          preferences.
        </li>
      </ul>

      <h2>Network activity</h2>
      <p>
        Battery Guard has <strong>no network access at all.</strong> The app is sandboxed
        without any networking entitlement, so it cannot — and does not — send anything off
        your Mac. There are no update pings, no servers, and no remote logging.
      </p>

      <h2>No analytics or tracking</h2>
      <p>
        Battery Guard contains no analytics SDKs, no crash-reporting telemetry that
        identifies you, no advertising identifiers, and no third-party trackers.
      </p>

      <h2>Payments</h2>
      <p>
        Purchases — subscriptions and the one-time Lifetime purchase — are handled by Apple
        through the Mac App Store, under Apple&apos;s own privacy policy. We never see your
        payment details.
      </p>

      <h2>Children</h2>
      <p>
        Battery Guard is a general-purpose utility and is not directed at children under 13.
      </p>

      <h2>Changes</h2>
      <p>
        If we ever change this policy, we&apos;ll update the date above. Material changes
        will be noted in the app or on this page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
