"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Tell us about your food preferences, dietary restrictions, and favorite cuisines. It only takes 2 minutes.",
    color: "bg-munch-blue",
  },
  {
    number: "02",
    title: "Get Matched",
    description:
      "Our AI analyzes your taste profile and local food scene to surface personalized recommendations instantly.",
    color: "bg-munch-green",
  },
  {
    number: "03",
    title: "Eat & Rate",
    description:
      "Try new meals and rate your experience. The more you munch, the smarter your recommendations get.",
    color: "bg-purple-500",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-munch-dark relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-munch-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-munch-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-munch-green uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Three Simple Steps to
            <br />
            Your Perfect Meal
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              {/* Step number */}
              <div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl ${step.color} mb-6 shadow-lg`}
              >
                <span className="text-3xl font-extrabold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
