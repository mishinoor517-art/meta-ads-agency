"use client";

import { motion } from "framer-motion";

export default function ProofPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  variant = "bars",
}: {
  label: string;
  aspect?: string;
  variant?: "bars" | "line" | "donut" | "table";
}) {
  return (
    <motion.div
      whileHover={{ rotateX: 3, rotateY: -3, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className={`group relative flex ${aspect} w-full flex-col overflow-hidden rounded-xl border border-base-line bg-base-panel2`}
    >
      {/* browser-style chrome */}
      <div className="flex items-center gap-1.5 border-b border-base-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink-dim/40" />
        <span className="h-2 w-2 rounded-full bg-ink-dim/40" />
        <span className="h-2 w-2 rounded-full bg-ink-dim/40" />
        <span className="ml-2 font-mono text-[9px] text-ink-dim">
          {label.toLowerCase().replace(/\s+/g, "-")}.meta.com
        </span>
      </div>

      {/* illustrated mock content */}
      <div className="relative flex-1 p-4">
        <MockChart variant={variant} />
        <div className="pointer-events-none absolute inset-0 opacity-0 shadow-[0_0_40px_10px_rgba(76,111,255,0.15)] transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* honest label footer */}
      <div className="flex items-center justify-between border-t border-base-line px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
          {label}
        </span>
        <span className="rounded-full bg-accent-blue/10 px-2 py-0.5 font-mono text-[9px] text-accent-blue">
          Sample Interface
        </span>
      </div>
    </motion.div>
  );
}

function MockChart({ variant }: { variant: "bars" | "line" | "donut" | "table" }) {
  if (variant === "line") {
    return (
      <svg viewBox="0 0 240 130" className="h-full w-full">
        <polyline
          points="0,100 30,80 60,90 90,55 120,65 150,30 180,42 210,15 240,25"
          fill="none"
          stroke="#4C6FFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="0,100 30,80 60,90 90,55 120,65 150,30 180,42 210,15 240,25 240,130 0,130"
          fill="url(#lineFade)"
          stroke="none"
        />
        <defs>
          <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4C6FFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#4C6FFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240].map((x, i) => (
          <circle key={i} cx={x} cy={[100,80,90,55,65,30,42,15,25][i]} r="2.5" fill="#8B5CF6" />
        ))}
      </svg>
    );
  }
  if (variant === "donut") {
    return (
      <div className="flex h-full items-center justify-center gap-6">
        <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#262C4A" strokeWidth="12" />
          <circle
            cx="50" cy="50" r="40" fill="none" stroke="#4C6FFF" strokeWidth="12"
            strokeDasharray="188 251" strokeLinecap="round"
          />
        </svg>
        <div className="space-y-2">
          {["Facebook", "Instagram", "Audience Network"].map((l, i) => (
            <div key={l} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: [ "#4C6FFF", "#8B5CF6", "#3DDCB8" ][i] }}
              />
              <span className="font-mono text-[10px] text-ink-muted">{l}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (variant === "table") {
    return (
      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-2 font-mono text-[9px] uppercase text-ink-dim">
          <span>Campaign</span><span>Status</span><span>Spend</span><span>Result</span>
        </div>
        {[1, 2, 3, 4].map((r) => (
          <div key={r} className="grid grid-cols-4 items-center gap-2 rounded-md bg-base-panel px-2 py-1.5">
            <div className="h-2 w-full rounded bg-base-line" />
            <span className="h-1.5 w-8 rounded-full bg-accent-teal/60" />
            <div className="h-2 w-2/3 rounded bg-base-line" />
            <div className="h-2 w-1/2 rounded bg-base-line" />
          </div>
        ))}
      </div>
    );
  }
  // bars (default)
  const heights = [40, 65, 50, 80, 60, 95, 70];
  return (
    <div className="flex h-full items-end gap-2.5 px-1">
      {heights.map((h, i) => (
        <div key={i} className="flex-1">
          <div
            className="rounded-t-sm bg-gradient-to-t from-accent-blue/40 to-accent-blue"
            style={{ height: `${h}%` }}
          />
        </div>
      ))}
    </div>
  );
}

