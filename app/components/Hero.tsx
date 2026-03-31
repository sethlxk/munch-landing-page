"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-munch-cream">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-munch-red/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-munch-warm blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-munch-red/[0.03] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-munch-red/10 border border-munch-red/20 text-munch-red text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-munch-red animate-pulse" />
              Now available on iOS & Android
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-munch-dark leading-[0.95] tracking-tight mb-6">
              EAT
              <br />
              <span className="gradient-text">SMART.</span>
            </h1>

            <p className="text-lg sm:text-xl text-munch-gray max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Deep inside our wonderful world of personalized food discovery,
              your perfect meal awaits. Munch learns what you love and serves up
              recommendations that hit different.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="px-8 py-4 rounded-full bg-munch-red text-white font-bold text-lg hover:bg-munch-red-dark transition-all shadow-lg shadow-munch-red/20 hover:scale-[1.05]"
              >
                Download Free
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 rounded-full border-2 border-munch-dark/20 text-munch-dark font-semibold text-lg hover:bg-munch-dark/5 transition-colors"
              >
                Discover How
              </a>
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-munch-red-light to-munch-red border-2 border-munch-cream flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-munch-gray text-sm">
                <span className="text-munch-dark font-bold">50k+</span> food
                lovers already munching
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="animate-float">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-munch-gray/60" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
