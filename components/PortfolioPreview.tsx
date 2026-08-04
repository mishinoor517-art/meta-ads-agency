import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";

const stats = [
  { label: "Avg. ROAS", value: "3.2x" },
  { label: "CTR Lift", value: "40%" },
  { label: "Lead Growth", value: "2.5x" },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Portfolio"
          desc="A quick preview of Meta Ads performance, with the full portfolio available on the next page."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[24px] border border-white/10 bg-slate-900/70 p-6 text-center">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/portfolio"
            className="inline-flex rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
