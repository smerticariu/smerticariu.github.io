import { Icon } from "./Icon";

/**
 * A stylised mock of Battery Guard's menu bar popover. Stands in for a real
 * screenshot until one is dropped into /public — swap for an <img> then.
 */
export function AppPreview() {
  const rows = [
    { label: "Health", value: "92%", tone: "good" },
    { label: "Cycles", value: "118", tone: "fg" },
    { label: "Temperature", value: "30.4°C", tone: "good" },
    { label: "Time to full", value: "0:42", tone: "fg" },
  ] as const;

  return (
    <div className="relative w-full max-w-sm">
      {/* Menu bar strip */}
      <div className="flex items-center justify-end gap-3 rounded-t-2xl border border-border bg-ink/80 px-4 py-2 text-xs text-muted">
        <span className="flex items-center gap-1.5 text-lime">
          <Icon name="battery" size={16} />
          <span className="font-mono tnum">86%</span>
        </span>
        <span className="font-mono tnum">9:41</span>
      </div>

      {/* Popover body */}
      <div className="rounded-b-2xl border border-t-0 border-border bg-surface/90 p-5 shadow-[var(--shadow-glow)] backdrop-blur">
        {/* Hero charge card */}
        <div className="rounded-xl border border-border bg-bg-soft p-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="font-mono text-4xl font-semibold text-fg tnum">86%</div>
              <div className="text-xs text-muted">5h 12m remaining</div>
            </div>
            <span className="rounded-full border border-lime/30 bg-lime-deep/40 px-2.5 py-1 text-xs font-medium text-lime">
              Charging
            </span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-border-strong">
            <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-lime-dim to-lime-bright" />
          </div>
        </div>

        {/* Stat grid */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {rows.map((r) => (
            <div key={r.label} className="rounded-lg border border-border bg-bg-soft px-3 py-2.5">
              <div className="text-[0.7rem] uppercase tracking-wider text-faint">{r.label}</div>
              <div
                className={`font-mono text-lg font-semibold tnum ${
                  r.tone === "good" ? "text-lime" : "text-fg"
                }`}
              >
                {r.value}
              </div>
            </div>
          ))}
        </div>

        {/* Last 7 days */}
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between text-[0.7rem] uppercase tracking-wider text-faint">
            <span>Last 7 days</span>
            <span className="text-lime">Charge</span>
          </div>
          <div className="flex h-14 items-end gap-1 rounded-lg border border-border bg-bg-soft px-3 py-2">
            {[52, 61, 48, 70, 64, 80, 73].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-lime-dim to-lime-bright"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating glow accents */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-lime/10 blur-3xl" />
    </div>
  );
}
