"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Food Blogger",
    quote:
      "Munch completely changed how I discover restaurants. The AI recommendations are scarily accurate — it knows what I want before I do!",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Busy Professional",
    quote:
      "No more 30-minute debates about where to eat. Munch gives me the perfect suggestion every time. Absolute game changer for lunch breaks.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Vegan Foodie",
    quote:
      "Finally an app that truly understands dietary preferences. Every recommendation is vegan-friendly and I've discovered amazing spots I never knew existed.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-munch-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-munch-red uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-munch-dark">
            Loved by <span className="gradient-text">Food Lovers</span>
          </h2>
          <p className="mt-4 text-lg text-munch-gray max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what the Munch
            community has to say.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-black/[0.04]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-munch-gray leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-munch-red to-munch-red-dark flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-munch-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-munch-gray">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
