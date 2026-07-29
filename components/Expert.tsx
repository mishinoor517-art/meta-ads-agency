"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const skills = [
  { label: "Campaign Strategy", value: 92 },
  { label: "Optimization", value: 88 },
  { label: "Creative Testing", value: 85 },
  { label: "Reporting & Analytics", value: 90 },
];

export default function Expert() {
  return (
    <section className="relative bg-base-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Meet the Team" title="Our Expert" />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-base-line"
          >
            <img
              src="/team/expert-photo.jpeg"
              alt="Meta Ads Strategist"
              className="aspect-square w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl font-medium text-ink">
              Meta Ads Strategist
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Our lead strategist builds every account from a foundation of
              structured testing and disciplined reporting — focused on
              campaign strategy, ongoing optimization, creative testing, and
              turning raw ad data into decisions you can act on.
            </p>

            <div className="mt-8 space-y-5">
              {skills.map((s, i) => (
                <div key={s.label}>
                  <div className="mb-1.5 flex justify-between font-mono text-xs text-ink-muted">
                    <span>{s.label}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-base-line">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-violet"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
