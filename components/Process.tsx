"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="relative bg-base-panel/40 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Process"
          desc="Six steps, run on repeat, every cycle."
        />

        <div className="relative mt-20">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-base-line sm:left-1/2" />
          <div className="space-y-10">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative flex items-start gap-6 sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:pr-10"
                    : "sm:ml-auto sm:pl-10 sm:text-right sm:flex-row-reverse"
                }`}
              >
                <div className="glass z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xs text-accent-blue">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display text-base font-medium text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
