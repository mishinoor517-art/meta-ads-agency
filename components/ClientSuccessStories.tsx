"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { successStories } from "@/lib/data";

export default function ClientSuccessStories() {
  return (
    <section className="relative bg-base py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Client Success Stories"
          title="A template for every client win"
          desc="Real campaigns, real results — before and after metrics for each client."
        />

        <div className="mt-16 flex gap-6 overflow-x-auto pb-4 scrollbar-none">
          {successStories.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover flex w-[320px] shrink-0 flex-col rounded-2xl p-6"
            >
              <div>
                <p className="font-display text-sm font-medium text-ink">
                  {c.name}
                </p>
                <p className="font-mono text-[11px] text-ink-dim">{c.role}</p>
              </div>

              <div className="mt-5 flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={13} className="fill-accent-blue text-accent-blue" />
                ))}
              </div>
              <Quote className="mt-3 text-accent-blue/50" size={22} />
              <p className="mt-2 text-sm italic text-ink-muted">
                {c.quote}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-ink-dim/30 px-3 py-2 text-center">
                  <p className="font-mono text-[9px] uppercase text-ink-dim">Before</p>
                  <p className="mt-1 text-[11px] text-ink-muted">{c.before}</p>
                </div>
                <div className="rounded-lg border border-accent-blue/40 px-3 py-2 text-center">
                  <p className="font-mono text-[9px] uppercase text-accent-blue">After</p>
                  <p className="mt-1 text-[11px] text-ink">{c.after}</p>
                </div>
              </div>

              <div className="mt-4 w-full overflow-hidden rounded-lg border border-base-line bg-base-panel2">
                <img
                  src={c.image}
                  alt={`${c.name} campaign results`}
                  className="h-auto w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
