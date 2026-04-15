"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Globe, Home, Shield } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: Wallet,
    headline: "Save Money Instantly",
    text: "Get discounts every time you recycle.",
    color: "text-[#8CE4B5]", // Mint green
  },
  {
    id: 2,
    icon: Globe,
    headline: "Live Eco-Friendly",
    text: "Reduce CO₂ and keep your city clean.",
    color: "text-[#3EBAB9]", // Teal
  },
  {
    id: 3,
    icon: Home,
    headline: "Doorstep Convenience",
    text: "Weekly pick-up, no extra effort.",
    color: "text-[#1D558E]", // Dark blue
  },
  {
    id: 4,
    icon: Shield,
    headline: "Trusted & Transparent",
    text: "Track every step on the Mint App.",
    color: "text-[#3EBAB9]", // Teal variant
  },
];

const FeatureCard = ({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    >
      <motion.div
        className={`mb-4 p-3 rounded-full bg-gradient-to-br from-[#8CE4B5]/10 to-[#3EBAB9]/10 ${card.color} group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon size={32} strokeWidth={1.5} />
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {card.headline}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
    </motion.div>
  );
};

export default function SecondaryHero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-50px 0px -50px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-[#8CE4B5]/10 to-[#3EBAB9]/10 py-16 md:py-24 overflow-hidden"
      id="how-it-works"
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-10 right-20 w-48 h-48 bg-gradient-to-br from-[#8CE4B5]/20 to-[#3EBAB9]/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-48 h-48 bg-gradient-to-br from-[#3EBAB9]/20 to-[#1D558E]/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why join Mint Rewards?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to start earning rewards while making a positive impact
            on the environment
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <FeatureCard key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="bg-[#1D558E] hover:bg-[#15406b] text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3EBAB9] focus:ring-offset-2">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
