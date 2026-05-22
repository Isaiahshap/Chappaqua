"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "tickets", href: "#tickets" },
  { label: "visit", href: "#visit" },
  { label: "rent", href: "#rent" },
  { label: "about", href: "#about" },
  { label: "support", href: "#support" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      menuRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-perf-black border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="/" className="flex-shrink-0" aria-label="CPAC — Chappaqua Performing Arts Center home">
          <img src="/logo.png" alt="CPAC logo" className="h-12 w-auto" style={{ filter: "invert(1)" }} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/75 hover:text-white text-xs uppercase tracking-widest transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right utility */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#search" className="text-white/60 hover:text-white text-xs uppercase tracking-widest transition-colors" aria-label="Search">
            search
          </a>
          <a
            href="#tickets"
            className="bg-signal-red text-white text-xs font-black uppercase tracking-widest px-6 py-2.5 hover:bg-signal-red-dark transition-colors"
            aria-label="Get tickets"
          >
            get tickets
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className="md:hidden text-white p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-label="Open menu"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </span>
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-perf-black flex flex-col px-8 pt-16 pb-12"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <button
              onClick={() => { setMenuOpen(false); hamburgerRef.current?.focus(); }}
              className="absolute top-4 right-5 text-white text-3xl leading-none focus-visible:ring-2 focus-visible:ring-signal-red"
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6 mt-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-display text-white text-4xl font-bold tracking-tight leading-none normal-case hover:text-signal-red transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto">
              <a
                href="#tickets"
                className="inline-block bg-signal-red text-white text-sm font-bold uppercase tracking-widest px-8 py-3 hover:bg-red-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                get tickets
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
