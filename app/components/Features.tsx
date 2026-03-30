"use client";

import { motion } from "framer-motion";
import { Brain, MapPin, Utensils, Users, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Taste Profile",
    description:
      "Munch learns your preferences over time, building a unique taste profile that gets smarter with every meal.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    title: "Hyper-Local Discovery",
    description:
      "Find hidden gems and trending spots near you. Never wonder where to eat again.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Utensils,
    title: "Meal Matching",
    description:
      "Get personalized meal recommendations that match your mood, dietary needs, and cravings.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Social Dining",
    description:
      "Share your food discoveries with friends. Plan group meals that satisfy everyone&apos;s taste.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description:
      "Our algorithm considers time of day, weather, and your habits to suggest the perfect meal.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Heart,
    title: "Dietary Aware",
    description:
      "Vegan, gluten-free, keto — Munch respects your dietary preferences and restrictions.",
    color: "from-red-500 to-red-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-munch-blue uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-munch-dark">
            Why Food Lovers
            <br />
            <span className="gradient-text">Choose Munch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Smart technology meets your appetite. Discover features designed to
            make every meal an experience worth savoring.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-munch-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
