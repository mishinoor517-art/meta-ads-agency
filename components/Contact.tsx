"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const fieldClass =
  "w-full rounded-lg border border-base-line bg-base-panel px-4 py-3 text-sm text-ink placeholder:text-ink-dim outline-none transition-colors focus:border-accent-blue";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      business: data.get("business"),
      budget: data.get("budget"),
      goals: data.get("goals"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-base-panel/40 py-28">
      <div className="mx-auto max-w-2xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Ready to scale your Meta ads?"
          desc="Tell us about your business and we'll follow up with next steps for your free audit."
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass mt-14 grid grid-cols-1 gap-4 rounded-2xl p-6 sm:grid-cols-2 sm:p-8"
        >
          <input name="name" required placeholder="Name" className={fieldClass} />
          <input name="email" required type="email" placeholder="Email" className={fieldClass} />
          <input name="phone" placeholder="Phone" className={fieldClass} />
          <input name="business" placeholder="Business" className={fieldClass} />
          <input
            name="budget"
            placeholder="Monthly Ad Budget"
            className={`${fieldClass} sm:col-span-2`}
          />
          <input name="goals" placeholder="Goals" className={`${fieldClass} sm:col-span-2`} />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className={`${fieldClass} sm:col-span-2 resize-none`}
          />

          {status === "error" && (
            <p className="sm:col-span-2 text-sm text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="group relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent-blue px-8 py-3.5 font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-80 sm:col-span-2"
          >
            {status === "success" ? (
              <>
                <Check size={16} /> Request Sent
              </>
            ) : status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Request
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
