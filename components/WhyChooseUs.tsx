"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Target,
  ShoppingCart,
  RefreshCw,
  Crosshair,
  Sparkles,
  SlidersHorizontal,
  SplitSquareVertical,
  LineChart,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { services } from "@/lib/data";

const icons = [
  Facebook,
  Instagram,
  Target,
  ShoppingCart,
  RefreshCw,
  Crosshair,
  Sparkles,
  SlidersHorizontal,
  SplitSquareVertical,
  LineChart,
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-base py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Every discipline your account needs, under one roof"
          desc="From first click to closed sale, we manage the full performance stack."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass glass-hover group rounded-2xl p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/12 text-accent-blue transition-colors group-hover:bg-accent-blue group-hover:text-white">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-medium text-ink">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
