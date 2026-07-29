"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Award, Zap } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "Meta Business Partner Ready" },
  { icon: ShieldCheck, label: "GDPR-Aware Tracking" },
  { icon: Zap, label: "48-Hour Optimization Cycle" },
  { icon: Award, label: "Certified Media Buyers" },
];

export default function TrustBar() {
  return (
    <div className="relative border-y border-base-line bg-base-panel/60 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-2 text-ink-muted"
          >
            <b.icon size={16} strokeWidth={1.75} className="text-accent-blue" />
            <span className="font-mono text-xs uppercase tracking-wider">
              {b.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
