"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  return (
    <section className="relative bg-base py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="Built to hold your real client work"
          desc="Real campaigns we've run — goal, challenge, strategy, and result for each."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="glass glass-hover flex flex-col rounded-2xl p-5"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-base-line bg-base-panel2">
                <img
                  src={c.image}
                  alt={`${c.business} campaign results`}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <span className="mt-5 font-mono text-[11px] uppercase tracking-wider text-accent-blue">
                {c.business}
              </span>
              <h3 className="mt-1.5 font-display text-lg font-medium text-ink">
                {c.goal}
              </h3>

              <div className="mt-4 space-y-2 text-sm text-ink-muted">
                <p>
                  <span className="text-ink-dim">Challenge — </span>
                  {c.challenge}
                </p>
                <p>
                  <span className="text-ink-dim">Strategy — </span>
                  {c.strategy}
                </p>
              </div>

              <div className="mt-4 rounded-lg border border-dashed border-ink-dim/30 px-3 py-2 font-mono text-xs text-ink-dim">
                {c.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
