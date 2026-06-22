/** Circular battery gauge with a percentage in mono numerals. Pure SVG. */
export function BatteryRing({
  percent = 86,
  size = 220,
  label = "Battery health",
}: {
  percent?: number;
  size?: number;
  label?: string;
}) {
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (percent / 100) * c;

  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-border-strong)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-lime-bright)" />
            <stop offset="100%" stopColor="var(--color-lime-dim)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="font-mono text-5xl font-semibold text-fg tnum">{percent}%</div>
          <div className="mt-1 text-xs uppercase tracking-[0.18em] text-faint">{label}</div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-full bg-lime/10 blur-2xl" />
    </div>
  );
}
