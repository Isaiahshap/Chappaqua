import React from "react";

const footerNav = [
  {
    heading: "about",
    links: [
      { label: "our mission", href: "/about" },
      { label: "board & staff", href: "/about/team" },
      { label: "history", href: "/about/history" },
      { label: "press", href: "/about/press" },
    ],
  },
  {
    heading: "tickets & events",
    links: [
      { label: "all events", href: "/events" },
      { label: "season calendar", href: "/events/calendar" },
      { label: "ticket policies", href: "/events/policies" },
      { label: "group sales", href: "/events/groups" },
    ],
  },
  {
    heading: "rentals",
    links: [
      { label: "rent the theater", href: "/rentals" },
      { label: "technical specs", href: "/rentals/specs" },
      { label: "request a date", href: "/rentals/request" },
    ],
  },
  {
    heading: "visit",
    links: [
      { label: "getting here", href: "/visit" },
      { label: "parking", href: "/visit/parking" },
      { label: "accessibility", href: "/visit/accessibility" },
      { label: "contact us", href: "/contact" },
    ],
  },
  {
    heading: "support",
    links: [
      { label: "make a gift", href: "/support/give" },
      { label: "volunteer", href: "/support/volunteer" },
      { label: "corporate partners", href: "/support/partners" },
      { label: "planned giving", href: "/support/planned" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-perf-black text-white pt-20 pb-8" role="contentinfo">
      <div className="max-w-screen-xl mx-auto px-5 md:px-12">

        {/* Top row: logo + address + contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div>
            <a href="/" className="inline-block mb-4" aria-label="CPAC home">
              <img src="/logo.png" alt="CPAC — Chappaqua Performing Arts Center" className="h-16 w-auto" style={{ filter: "invert(1)" }} />
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/40 mb-3">address</p>
            <address className="not-italic text-white/70 text-sm leading-loose">
              480 North Bedford Road<br />
              Chappaqua, NY 10514
            </address>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/40 mb-3">contact</p>
            <a href="tel:+19145551234" className="text-white/70 text-sm block hover:text-white transition-colors mb-1">
              (914) 555-1234
            </a>
            <a href="mailto:info@cpac.org" className="text-white/70 text-sm block hover:text-white transition-colors mb-3">
              info@cpac.org
            </a>
            <a
              href="/visit/accessibility"
              className="text-signal-red text-xs font-bold uppercase tracking-widest hover:text-red-400 transition-colors"
            >
              accessibility info
            </a>
          </div>
        </div>

        {/* Nav columns */}
        <nav aria-label="Footer navigation">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-12 border-b border-white/10">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <p className="text-[11px] uppercase tracking-widest text-white/40 mb-5">{col.heading}</p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/70 text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Chappaqua Performing Arts Center. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">privacy policy</a>
            <a href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">terms of use</a>
            <a href="/sitemap" className="text-xs text-white/40 hover:text-white/70 transition-colors">sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
