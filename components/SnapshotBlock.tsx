import SectionHeading from "./ui/SectionHeading";

const stats = [
  { label: "Avg. ROAS", value: "3.2x" },
  { label: "CTR Lift", value: "40%" },
  { label: "Lead Growth", value: "2.5x" },
];

export default function SnapshotBlock() {
  return (
    <section className="relative bg-base-panel/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Snapshot"
          title="Performance highlights from our Meta campaigns"
          desc="A quick view of the metrics and outcomes we deliver for clients across Facebook and Instagram advertising."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[28px] border border-base-line bg-base-panel/70 p-8 text-center">
              <p className="text-4xl font-display font-semibold text-ink">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-base-line bg-base-panel/70 p-8 text-center text-sm leading-7 text-ink-muted">
          <p className="font-medium text-ink">Core focus</p>
          <p className="mt-3">
            Meta Ads strategy, creative testing, conversion-focused funnels, and reporting that ties spend to measurable business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
