"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-end bg-perf-black overflow-hidden pt-14"
      aria-label="Hero — welcome to CPAC"
    >
      {/* Hero image — minimal overlay, let photo lead */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero1.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_0%_0%,rgba(23,37,84,0.48)_0%,transparent_62%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_100%_0%,rgba(127,29,29,0.5)_0%,transparent_62%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_100%_100%,rgba(46,16,101,0.48)_0%,transparent_62%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-perf-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-perf-black via-perf-black/65 to-transparent" />
      </div>

      {/* Content — bottom-left, compact and refined */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 pb-20 md:pb-28">

        {/* Thin red rule — editorial mark above title */}
        <motion.div
          className="w-12 h-1 bg-signal-red mb-4"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          aria-hidden="true"
        />

        {/* Eyebrow */}
        <motion.p
          className="text-white/80 text-[10px] uppercase tracking-[0.25em] mb-3 font-black"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Chappaqua, New York
        </motion.p>

        {/* Title — two-line campaign headline */}
        <motion.h1
          className="font-display font-bold uppercase mb-3"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 5.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: "0.95",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-white">A Local Stage.</span>
          <span className="block text-warm-ivory/80">A Regional Draw.</span>
        </motion.h1>

        {/* Venue name credit line */}
        <motion.p
          className="text-white/75 text-[11px] uppercase tracking-[0.15em] mb-8 font-black"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          Chappaqua Performing Arts Center
        </motion.p>

        {/* Bottom row */}
        <motion.div
          className="flex flex-wrap items-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#tickets"
            className="bg-signal-red text-white text-xs font-black uppercase tracking-[0.15em] px-8 py-4 hover:bg-signal-red-dark transition-colors duration-200"
          >
            Get Tickets
          </a>
          <a
            href="#events"
            className="text-white/65 text-xs font-bold uppercase tracking-[0.15em] hover:text-white transition-colors duration-200 flex items-center gap-2 border-b border-white/25 pb-0.5 hover:border-white/70"
          >
            See All Events
          </a>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-10" aria-hidden="true" />
    </section>
  );
}
