"use client";

import Link from "next/link";

const services = [
  {
    title: "Facebook Ads Management",
    desc: "Full-funnel campaign management including audience targeting, creative testing, and continuous optimization for maximum ROI.",
  },
  {
    title: "Instagram Ads Management",
    desc: "Visually compelling Instagram campaigns optimized for engagement, clicks, and conversions across Stories, Reels, and Feed.",
  },
  {
    title: "Sales Campaigns",
    desc: "Conversion-focused campaigns designed to drive purchases, add-to-carts, and revenue growth for eCommerce businesses.",
  },
  {
    title: "Lead Generation",
    desc: "Targeted lead generation campaigns delivering high-quality prospects at cost-efficient CPL for service-based businesses.",
  },
  {
    title: "Retargeting Campaigns",
    desc: "Re-engage warm audiences with precision retargeting to recover abandoned carts and convert interested prospects.",
  },
  {
    title: "A/B Testing",
    desc: "Systematic split testing of creatives, audiences, and copy to identify winning combinations and maximize performance.",
  },
  {
    title: "Audience Research",
    desc: "Deep audience analysis, lookalike audience building, and interest-based targeting to reach the right people at the right time.",
  },
  {
    title: "Pixel Setup & Tracking",
    desc: "Complete Meta Pixel implementation, Conversion API setup, and custom event tracking for accurate attribution.",
  },
  {
    title: "Campaign Scaling",
    desc: "Strategic budget scaling techniques to grow winning campaigns without losing performance efficiency or ROAS.",
  },
];

const caseStudies = [
  {
    title: "eCommerce Sales Campaign",
    subtitle: "Facebook & Instagram · Highest Spend Recorded · Full Campaign Lifetime",
    badge: "Sales / Conversions",
    metrics: [
      { value: "20", label: "Adds to Cart" },
      { value: "PKR 52.91", label: "Cost/Add-to-Cart" },
      { value: "PKR 1,058", label: "Total Spent" },
      { value: "3,532", label: "Reach" },
      { value: "4,251", label: "Impressions" },
      { value: "PKR 60.71", label: "Best Ad Set CPC" },
    ],
    insights: [
      { heading: "Campaign Objective", body: "Drive website add-to-cart events for an eCommerce store using multiple ad sets optimised for conversion events." },
      { heading: "Key Achievement", body: "Achieved 20 add-to-cart events at an average cost of PKR 52.91 each, reaching 3,532 unique users." },
      { heading: "Budget Efficiency", body: "One ad set alone generated 6 adds-to-cart while spending only PKR 364, proving strong budget allocation." },
      { heading: "Scaling Potential", body: "The campaign was primed for budget scaling and lookalike audience expansion to drive purchases." },
    ],
  },
  {
    title: "Traffic Campaign – Landing Page Views",
    subtitle: "Facebook & Instagram · PKR 1,500/day Budget · Ongoing Campaign",
    badge: "Traffic / Landing Page Views",
    metrics: [
      { value: "2,238", label: "Landing Page Views" },
      { value: "PKR 1.58", label: "Cost/LP View" },
      { value: "PKR 3,535", label: "Total Spent" },
      { value: "53,019", label: "Reach" },
      { value: "60,751", label: "Impressions" },
      { value: "PKR 1.57", label: "Best Day CPC" },
    ],
    insights: [
      { heading: "Campaign Objective", body: "Drive qualified traffic to a landing page at the lowest possible cost per landing page view." },
      { heading: "Key Achievement", body: "Reached 53,019 unique users and generated 2,238 verified landing page views at PKR 1.58 per view." },
      { heading: "Scale Demonstrated", body: "The campaign grew from 1,293 LP views to 2,238 while maintaining cost efficiency." },
      { heading: "Audience Quality", body: "60K+ impressions with strong intent signals indicated effective targeting and compelling ad creative." },
    ],
  },
  {
    title: "Engagement & Messaging Campaign – “my new ad”",
    subtitle: "Facebook & Instagram · PKR 700/day Budget · Highest Volume Strategy",
    badge: "Engagement / Conversations",
    metrics: [
      { value: "393", label: "Conversations Started" },
      { value: "PKR 13.54", label: "Cost/Conversation" },
      { value: "PKR 5,993", label: "Total Spent" },
      { value: "68,179", label: "Reach" },
      { value: "86,810", label: "Impressions" },
      { value: "1.85%", label: "CTR (All)" },
    ],
    insights: [
      { heading: "Campaign Objective", body: "Drive messaging conversations for a service-based client to generate direct inquiries and qualified leads." },
      { heading: "Exceptional Results", body: "Generated 393 messaging conversations at an average PKR 15.25 per conversation." },
      { heading: "Engagement Metrics", body: "1.85% overall CTR across 86,810 impressions demonstrated a strong ad-to-audience fit." },
      { heading: "Growth Trajectory", body: "The campaign scaled from 31 conversations to 393 total while maintaining healthy efficiency." },
    ],
  },
];

const overviewStats = [
  { value: "100+", label: "Clients Managed" },
  { value: "250K+", label: "PKR Budget Handled" },
  { value: "3+", label: "Years Experience" },
  { value: "1.5¢", label: "Avg. CPC (PKR)" },
];

const skills = [
  "Meta Ads Manager",
  "Facebook Pixel Setup",
  "Conversion API (CAPI)",
  "Audience Targeting",
  "Retargeting Campaigns",
  "Lookalike Audiences",
  "Funnel Building",
  "Analytics & Reporting",
  "Shopify Advertising",
  "eCommerce Marketing",
  "A/B Creative Testing",
  "Budget Scaling",
  "ROAS Optimization",
  "Custom Conversions",
  "Ad Copywriting",
  "Catalog Ads (DPA)",
];

const reasons = [
  {
    title: "Proven Track Record",
    desc: "100+ clients managed with documented results. Every case study is backed by real Meta Ads Manager data.",
  },
  {
    title: "Data-First Decisions",
    desc: "Every optimization decision is driven by data analysis, not guesswork, to protect your budget and improve efficiency.",
  },
  {
    title: "Budget Accountability",
    desc: "Having managed over PKR 250,000+ in ad spend, I focus on efficiency first and scale only when it makes sense." },
  {
    title: "ROAS Maximization",
    desc: "From audience research to creative testing to bid strategy, every element is engineered to maximize return on ad spend.",
  },
  {
    title: "Full-Funnel Thinking",
    desc: "Awareness, consideration, conversion, and retention are all planned together so the system works as a whole.",
  },
  {
    title: "Transparent Reporting",
    desc: "You always know exactly how your budget is performing through clear reporting and proactive guidance.",
  },
];

const performanceBars = [
  { label: "my new ad", value: 82, note: "PKR 13.54" },
  { label: "Client 5", value: 78, note: "PKR 13.75" },
  { label: "Client 2", value: 86, note: "PKR 13.30" },
  { label: "Molvi", value: 64, note: "PKR 16.80" },
];

const reachBars = [
  { label: "Traffic", value: 88, note: "53,019" },
  { label: "my new ad", value: 100, note: "68,179" },
  { label: "Molvi", value: 74, note: "48,690" },
  { label: "Client 2", value: 53, note: "34,068" },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      <nav className="sticky top-0 z-50 border-b border-sky-400/10 bg-[#0A1628]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-wide text-white">
            HN<span className="text-sky-400">.</span>
          </Link>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-sky-300">About</a>
            <a href="#services" className="transition hover:text-sky-300">Services</a>
            <a href="#results" className="transition hover:text-sky-300">Case Studies</a>
            <a href="#performance" className="transition hover:text-sky-300">Analytics</a>
            <a href="#skills" className="transition hover:text-sky-300">Skills</a>
            <a href="#contact" className="transition hover:text-sky-300">Contact</a>
          </div>

          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-400">
            Hire Me
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(24,119,242,0.16),_transparent_40%),linear-gradient(135deg,_#0A1628_0%,_#0F1F3D_50%,_#0A1628_100%)] px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> Available for New Projects
            </div>
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Muhammad <br /> Hanzla <br /> <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">Nadir</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300">Meta Ads Expert & Performance Marketer</p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
              Driving measurable ROI through precision-targeted Facebook and Instagram advertising. Managed 100+ clients and scaled budgets worth PKR 250,000+ with data-driven campaign strategies.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#results" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5">
                View Case Studies →
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-sky-950/30 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Campaign Performance Overview</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {overviewStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Facebook Ads</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Instagram Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#0F1F3D] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">About Me</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Performance Marketing Built on Real Data</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I’m Muhammad Hanzla Nadir, a dedicated Meta Ads specialist with 3+ years of hands-on experience running high-performance advertising campaigns on Facebook and Instagram.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                My approach is rooted in analytics — every campaign decision is backed by data. From pixel setup and audience segmentation to creative testing and budget scaling, I manage every stage of the funnel to maximize return on ad spend.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-slate-200">Data-Driven Strategy</span>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-slate-200">ROAS Optimization</span>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-slate-200">Audience Research</span>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center">
                <p className="text-4xl font-semibold text-white">100+</p>
                <p className="mt-3 text-sm text-slate-400">Clients Managed</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center">
                <p className="text-4xl font-semibold text-white">3+</p>
                <p className="mt-3 text-sm text-slate-400">Years Experience</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center">
                <p className="text-4xl font-semibold text-white">250K+</p>
                <p className="mt-3 text-sm text-slate-400">PKR Budget Managed</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center">
                <p className="text-4xl font-semibold text-white">5★</p>
                <p className="mt-3 text-sm text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">What I Do</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Comprehensive Meta Advertising Services</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">End-to-end Facebook and Instagram ad management — from strategy to execution and scaling.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[24px] border border-white/10 bg-slate-900/70 p-8 transition hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-900/90">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="bg-[#0F1F3D] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Proven Results</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Campaign Case Studies</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-400">Real campaigns. Real data. All metrics sourced directly from Meta Ads Manager.</p>
          </div>

          <div className="mt-10 space-y-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white text-slate-900">
                <div className="flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-[#0A1628] to-[#0F1F3D] px-8 py-7 text-white">
                  <div>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{study.subtitle}</p>
                  </div>
                  <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200">{study.badge}</span>
                </div>

                <div className="px-8 py-8">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                        <div className="text-xl font-semibold text-slate-900">{metric.value}</div>
                        <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {study.insights.map((insight) => (
                      <div key={insight.heading} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">{insight.heading}</h4>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{insight.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="performance" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Analytics Dashboard</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Campaign Performance at a Glance</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Aggregated metrics across all managed campaigns demonstrating consistent, scalable performance.</p>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-slate-900/70 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="text-3xl font-semibold text-white">PKR <span className="text-sky-400">250,000+</span></h3>
                <p className="mt-3 text-slate-400">Total advertising budget managed across 100+ clients</p>
              </div>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-2xl font-semibold text-white">PKR 1.44</p>
                  <p className="mt-2 text-sm text-slate-400">Lowest CPC Achieved</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">2.59%</p>
                  <p className="mt-2 text-sm text-slate-400">Peak CTR</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">393</p>
                  <p className="mt-2 text-sm text-slate-400">Max Conversations</p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
                <h4 className="text-lg font-semibold text-white">Cost Per Conversation</h4>
                <div className="mt-6 space-y-4">
                  {performanceBars.map((bar) => (
                    <div key={bar.label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                        <span>{bar.label}</span>
                        <span>{bar.note}</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-800">
                        <div className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" style={{ width: `${bar.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
                <h4 className="text-lg font-semibold text-white">Reach Across Campaigns</h4>
                <div className="mt-6 space-y-4">
                  {reachBars.map((bar) => (
                    <div key={bar.label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                        <span>{bar.label}</span>
                        <span>{bar.note}</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-800">
                        <div className="h-3 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" style={{ width: `${bar.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#0F1F3D] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Technical Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Tools & Expertise</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">A full stack of Meta advertising capabilities backed by years of hands-on execution.</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Why Choose Me</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">What Sets Me Apart</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Clients choose me because I treat their ad budget like my own — with precision, accountability, and a relentless focus on results.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="rounded-[24px] border border-white/10 bg-slate-950/80 p-8">
                <p className="text-5xl font-semibold text-slate-500">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0F1F3D] px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-slate-950/75 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Get In Touch</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ready to Scale Your Business?</h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">Let’s discuss how data-driven Meta advertising can drive measurable growth for your business.</p>

          <form
            className="mt-10 space-y-4 text-left"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
              />
              <input
                type="email"
                placeholder="Your email"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
              />
            </div>
            <input
              type="text"
              placeholder="Business / campaign goal"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            <textarea
              rows={4}
              placeholder="Tell me about your project"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-slate-400">Typical reply time: within 24 hours.</p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 font-semibold text-white transition hover:bg-sky-400"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0A1628] px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Muhammad Hanzla Nadir · Meta Ads Expert · Facebook & Instagram Advertising Specialist · Pakistan
      </footer>
    </main>
  );
}
