import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: ["About", "Our Process", "Case Studies", "Careers"],
  },
  {
    title: "Services",
    links: ["Facebook Ads", "Instagram Ads", "Lead Generation", "eCommerce"],
  },
  {
    title: "Resources",
    links: ["FAQ", "Blog", "Free Audit", "Client Login"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-base-line bg-base pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-semibold text-ink">
              Northline Media
            </p>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">
              A focused Meta advertising partner for businesses ready to
              scale leads, sales, and revenue.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-base-line text-ink-muted transition-colors hover:border-accent-blue hover:text-accent-blue"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
              Newsletter
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Performance tips, monthly.
            </p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="Waqaryounis845@gmail.com"
                className="w-full rounded-full border border-base-line bg-base-panel px-4 py-2 text-xs text-ink outline-none focus:border-accent-blue"
              />
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-base-line py-6 text-xs text-ink-dim sm:flex-row">
          <p>© {new Date().getFullYear()} Northline Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink-muted">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ink-muted">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
