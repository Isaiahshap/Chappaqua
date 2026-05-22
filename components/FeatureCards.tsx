"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "rent the theater",
    body: "Host recitals, talks, school showcases, screenings, and community events in a professional performance setting.",
    href: "#rent",
    linkLabel: "learn about rentals",
    imageUrl: "/imgi_1_Facade-Retouch-e1503619895173-1.jpg",
    imageAlt: "Exterior facade of the Chappaqua Performing Arts Center building",
  },
  {
    title: "plan your visit",
    body: "Find parking, accessibility details, arrival guidance, and venue information before the show.",
    href: "#visit",
    linkLabel: "visitor information",
    imageUrl: "/performance.webp",
    imageAlt: "Interior view of the CPAC performance hall",
  },
  {
    title: "community programs",
    body: "Explore programs, partnerships, and events that bring artists and audiences together.",
    href: "#about",
    linkLabel: "explore programs",
    imageUrl: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Audience gathered together at a community arts event",
  },
];

export default function FeatureCards() {
  return (
    <section
      id="rent"
      className="bg-warm-ivory py-20 md:py-28"
      aria-labelledby="features-heading"
    >
      <div className="max-w-screen-xl mx-auto px-5 md:px-12">
        <div className="mb-14">
          <p className="text-muted-text text-xs uppercase tracking-widest mb-2">explore cpac</p>
          <h2
            id="features-heading"
            className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-none uppercase"
          >
            The Space. The Programs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-paper-white flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-300" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-7 border-t border-soft-gray">
                <h3 className="font-display text-perf-black text-2xl font-bold tracking-tight leading-tight mb-3 uppercase">
                  {card.title}
                </h3>
                <p className="text-perf-black/60 text-[15px] leading-relaxed mb-5 flex-1">
                  {card.body}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-signal-red hover:gap-3 transition-all duration-150 mt-2"
                  aria-label={card.linkLabel}
                >
                  {card.linkLabel} <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
