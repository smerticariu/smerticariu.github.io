import { tiers } from "@/lib/content";
import { Button, CheckItem } from "./ui";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative flex flex-col rounded-2xl border p-7 ${
            tier.highlighted
              ? "border-lime/50 bg-surface shadow-[var(--shadow-glow)]"
              : "border-border bg-surface/60"
          }`}
        >
          {tier.badge ? (
            <span className="absolute -top-3 left-7 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
              {tier.badge}
            </span>
          ) : null}

          <h3 className="text-lg font-semibold text-fg">{tier.name}</h3>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="font-mono text-4xl font-semibold text-fg tnum">{tier.price}</span>
          </div>
          <p className="mt-1 text-xs uppercase tracking-wider text-faint">{tier.cadence}</p>
          <p className="mt-4 text-sm text-muted">{tier.blurb}</p>

          <ul className="mt-6 flex-1 space-y-3">
            {tier.features.map((f) => (
              <CheckItem key={f}>{f}</CheckItem>
            ))}
          </ul>

          <div className="mt-7">
            <Button
              href={tier.href}
              variant={tier.highlighted ? "primary" : "secondary"}
              className="w-full"
            >
              {tier.cta}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
