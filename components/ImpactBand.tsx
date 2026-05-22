"use client";
import { motion } from "framer-motion";

const actionGrid = [
  { label: "rent the space", href: "#rent", icon: "⬛" },
  { label: "make a gift", href: "#support", icon: "⬛" },
  { label: "volunteer", href: "#support", icon: "⬛" },
  { label: "partner with cpac", href: "#about", icon: "⬛" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ImpactBand() {
  return (
    <section
      id="support"
      className="bg-perf-black text-white py-20 md:py-28 overflow-hidden"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-screen-xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            className="lg:col-span-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-signal-red text-xs font-bold uppercase tracking-widest mb-4"
            >
              support cpac
            </motion.p>
            <motion.h2
              id="impact-heading"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5 uppercase"
            >
              make an impact
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-white/60 text-base leading-relaxed mb-6"
            >
              Every performance, rental, and community program helps keep CPAC active as a creative home for the region.
            </motion.p>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              href="#support"
              className="inline-flex items-center gap-2 text-white/90 text-xs font-black uppercase tracking-widest border-b border-white/40 pb-1 hover:border-signal-red hover:text-signal-red transition-colors duration-200"
            >
              ways to support <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>

          {/* Center: image placeholder */}
          <motion.div
            className="lg:col-span-4 hidden lg:block"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden">
              <img
                src="/performance.webp"
                alt="Live performance on the CPAC stage"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-perf-black to-transparent" />
            </div>
          </motion.div>

          {/* Right: 2x2 action grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {actionGrid.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="group bg-signal-red flex flex-col justify-between p-5 md:p-6 min-h-[150px] hover:bg-signal-red-dark transition-colors duration-200"
                >
                  <span className="text-white/40 group-hover:text-white/60 text-2xl leading-none transition-colors" aria-hidden="true">+</span>
                  <span className="text-white text-base font-black uppercase tracking-wide leading-tight mt-auto">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
