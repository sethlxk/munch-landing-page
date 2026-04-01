"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-munch-cream">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-munch-red/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-munch-warm blur-3xl" />
      </div>

      {/* Giant "MUNCH" text — centered, dominating the viewport */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 pt-28 sm:pt-32 text-center"
      >
        <h1 className="text-[8rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] xl:text-[18rem] font-extrabold leading-[0.85] tracking-tight text-munch-dark select-none">
          MUNCH
        </h1>
      </motion.div>

      {/* Phone mockup — overlapping the text from below */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative z-20 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-44"
      >
        <PhoneMockup />
      </motion.div>

      {/* Description text below the phone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 mt-10 sm:mt-12 text-center max-w-xl mx-auto px-6"
      >
        <p className="text-lg sm:text-xl text-munch-gray leading-relaxed mb-8">
          Your food social discovery app that suits your taste and personality
        </p>

        {/* CTA Button — matching Bowery's "DISCOVER HOW" style */}
        <a
          href="#features"
          className="inline-block px-8 py-3.5 border-2 border-munch-dark text-munch-dark font-semibold text-sm uppercase tracking-widest hover:bg-munch-dark hover:text-white transition-all duration-300"
        >
          Discover How
        </a>
      </motion.div>

      {/* Bottom spacer */}
      <div className="pb-16 sm:pb-24" />
    </section>
  );
}
