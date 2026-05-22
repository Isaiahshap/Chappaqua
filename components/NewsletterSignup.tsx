"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="relative bg-perf-black text-white py-24 md:py-36 overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/bottomimage.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 65%" }}
        />
        <div className="absolute inset-0 bg-perf-black/85" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-perf-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-5 md:px-12">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-signal-red text-xs font-bold uppercase tracking-widest mb-4">newsletter</p>
          <h2
            id="newsletter-heading"
            className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4 uppercase"
          >
            stay connected
          </h2>
          <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Get show announcements, on-sale alerts, and community updates in your inbox.
          </p>

          {submitted ? (
            <p className="text-marigold text-base font-bold uppercase tracking-wide">
              you&apos;re on the list. see you at the show.
            </p>
          ) : (
            <div className="border-t border-white/10 pt-6">
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-0">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="newsletter-email" className="text-white/65 text-xs uppercase tracking-widest mb-2">
                      email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 px-5 py-4 text-base w-full focus:outline-none focus:border-signal-red focus:bg-white/15 transition-colors"
                      autoComplete="email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-signal-red text-white text-sm font-black uppercase tracking-widest px-10 py-4 hover:bg-signal-red-dark transition-colors self-end flex-shrink-0 mt-0 sm:mt-auto"
                  >
                    sign up
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
