"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCounter from "./ui/AnimatedCounter";
import { dashboardStats } from "@/lib/data";

export default function PerformanceDashboard() {
  return (
    <section className="relative bg-base-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Performance Dashboard"
          title="Your numbers, live in one view"
          desc="A snapshot of the results we've driven across active client accounts."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dashboardStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-6 text-center"
            >
              <p className="font-display text-3xl font-semibold text-ink">
                <AnimatedCounter
                  target={s.target}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  decimals={s.decimals}
                />
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
