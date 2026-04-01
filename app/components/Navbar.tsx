"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
];

const rightLinks = [
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-munch-cream/80 backdrop-blur-md border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left links (desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {leftLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-munch-gray hover:text-munch-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center logo */}
          <a href="#" className="flex items-center justify-center">
            <span className="text-xl font-extrabold text-munch-red tracking-tight">
              MUNCH
            </span>
          </a>

          {/* Right links + CTA (desktop) */}
          <div className="hidden md:flex items-center justify-end gap-8 flex-1">
            {rightLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-munch-gray hover:text-munch-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#download"
              className="px-4 py-2 border border-munch-dark text-munch-dark text-xs font-semibold uppercase tracking-wider hover:bg-munch-dark hover:text-white transition-all"
            >
              Get the App
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-munch-cream border-b border-black/[0.08]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {[...leftLinks, ...rightLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-munch-gray hover:text-munch-red transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#download"
                className="px-5 py-2.5 border border-munch-dark text-munch-dark text-sm font-semibold text-center hover:bg-munch-dark hover:text-white transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Get the App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
