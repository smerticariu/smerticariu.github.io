import { Button } from "./ui";
import { site } from "@/lib/site";

/** Reusable final call-to-action band, used at the bottom of most pages. */
export function CtaBand({
  title = "Take control of your Mac's battery today.",
  subtitle = "Free 14-day trial. No account, no card, nothing sent off your Mac.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-radial-lime">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/download" size="lg" icon="download">
            Download for Mac
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            See pricing
          </Button>
        </div>
        <p className="mt-5 text-xs text-faint">{site.requirements}</p>
      </div>
    </section>
  );
}
