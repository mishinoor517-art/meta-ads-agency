"use client";

import { motion } from "framer-motion";
import { Users2, Compass, GitBranch, ShieldCheck } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const items = [
  {
    icon: Users2,
    title: "Who We Are",
    body: "A performance marketing team focused exclusively on Meta advertising — Facebook and Instagram campaigns built for measurable business outcomes.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    body: "To turn ad spend into predictable revenue, with the transparency and rigor of an in-house growth team.",
  },
  {
    icon: GitBranch,
    title: "Our Process",
    body: "A structured audit-to-scale system, run on weekly cycles of testing, analysis, and iteration.",
  },
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    body: "Clear reporting, honest timelines, and a strategy shaped around your goals — not a one-size-fits-all playbook.",
  },
];

export default function About() {
  return (
    <section className="relative bg-base py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Us"
          title="Why businesses work with us"
          desc="A focused partner, not another vendor to manage."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glass-hover flex gap-4 rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-violet/12 text-accent-violet">
                <it.icon size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-base font-medium text-ink">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {it.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
