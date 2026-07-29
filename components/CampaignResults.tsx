"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { proofCards } from "@/lib/data";

export default function CampaignResults() {
  return (
    <section className="relative bg-base-panel/40 py-28">
      <div className="node-divider mx-auto mb-28 max-w-6xl" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Proof of Work"
          title="Campaign Results"
          desc="Real dashboards pulled straight from our clients' Meta Ads accounts."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proofCards.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative flex aspect-[4/3] w-full flex-col overflow-hidden rounded-xl border border-base-line bg-base-panel2 p-2"
            >
              <img
                src={p.image}
                alt={p.label}
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-white">
                  {p.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
