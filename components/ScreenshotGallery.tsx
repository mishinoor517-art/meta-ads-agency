"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { galleryItems } from "@/lib/data";

export default function ScreenshotGallery() {
  return (
    <section className="relative bg-base-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Inside the Account"
          title="Screenshot Gallery"
          desc="A look inside the tools we work in daily, straight from real campaigns."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group relative aspect-square w-full overflow-hidden rounded-xl border border-base-line bg-base-panel2 p-2"
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-white">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
