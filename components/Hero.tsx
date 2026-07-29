"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const floatingCards = [
  {
    icon: TrendingUp,
    label: "ROAS Trend",
    sub: "Live campaign signal",
    className: "left-[4%] top-[22%] hidden md:flex",
    anim: "animate-float",
  },
  {
    icon: Users,
    label: "Audience Reach",
    sub: "Targeting expansion",
    className: "right-[4%] top-[18%] hidden md:flex",
    anim: "animate-float-delay",
  },
  {
    icon: Target,
    label: "Conversion Rate",
    sub: "Funnel health",
    className: "left-[8%] bottom-[16%] hidden lg:flex",
    anim: "animate-float-delay",
  },
  {
    icon: BarChart3,
    label: "Ad Spend Efficiency",
    sub: "Budget pacing",
    className: "right-[8%] bottom-[20%] hidden lg:flex",
    anim: "animate-float",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-base">
      {/* Aurora + grid background */}
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-grid-lines bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-accent-violet/20 blur-[140px]" />
      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[140px]" />

      {/* 3D layer fallback */}
      <div className="absolute inset-0 opacity-80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      {/* Floating glass cards */}
      {floatingCards.map(({ icon: Icon, label, sub, className, anim }) => (
        <div
          key={label}
          className={`glass absolute z-20 ${anim} ${className} w-52 items-center gap-3 rounded-2xl px-4 py-3`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-blue/15 text-accent-blue">
            <Icon size={18} strokeWidth={1.75} />
          </div>
          <div>
            <p className="font-display text-sm font-medium text-ink">{label}</p>
            <p className="font-mono text-[11px] text-ink-muted">{sub}</p>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Meta Ads Growth Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-6xl"
        >
          Scale Your Business with{" "}
          <span className="accent-gradient">High-Performance</span> Meta
          Advertising
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base text-ink-muted sm:text-lg"
        >
          We help businesses generate more leads, more sales, and measurable
          growth through strategic Meta advertising.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-accent-blue px-8 py-3.5 font-medium text-white shadow-[0_8px_30px_-8px_rgba(76,111,255,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Free Audit
          </a>
          <a
            href="#contact"
            className="glass glass-hover rounded-full px-8 py-3.5 font-medium text-ink"
          >
            Book Strategy Call
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[11px] uppercase tracking-widest text-ink-dim">
        Scroll to explore
      </div>
    </section>
  );
}
