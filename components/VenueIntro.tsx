"use client";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const ctaBlocks = [
  { label: "events", href: "#events", desc: "see what's on" },
  { label: "rentals", href: "#rent", desc: "book the space" },
  { label: "accessibility", href: "#visit", desc: "plan your visit" },
];

export default function VenueIntro() {
  return (
    <section
      id="visit"
      className="bg-deep-charcoal text-white py-24 md:py-28"
      aria-labelledby="venue-heading"
    >
      <div className="max-w-screen-xl mx-auto px-5 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mb-12"
        >
          <p className="text-muted-text text-xs uppercase tracking-widest mb-3">the venue</p>
          <h2
            id="venue-heading"
            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 uppercase"
          >
            Our Stage. Your Community.
          </h2>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
            CPAC is a home for live performance, film, education, and community gathering in the heart of Chappaqua.
          </p>
        </motion.div>

        {/* CTA blocks */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
        >
          {ctaBlocks.map((block) => (
            <motion.a
              key={block.label}
              href={block.href}
              variants={fadeIn}
              className="group bg-deep-charcoal flex items-center justify-between px-8 py-8 hover:bg-signal-red transition-colors duration-200"
            >
              <div>
                <span className="block text-lg font-black uppercase tracking-widest group-hover:text-white transition-colors">
                  {block.label}
                </span>
                <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors uppercase tracking-wide">
                  {block.desc}
                </span>
              </div>
              <span className="text-white/30 group-hover:text-white text-2xl transition-colors" aria-hidden="true">→</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
