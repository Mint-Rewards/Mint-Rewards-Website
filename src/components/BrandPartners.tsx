"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, label: "Users", suffix: "+" },
  { value: 30, label: "Brands", suffix: "+" },
  {
    value: 800000,
    label: "Rewards points to be redeemed",
    prefix: "Rs",
    suffix: "+",
  },
];

const compactFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const formatStatValue = (
  value: number,
  { prefix = "", suffix = "" }: { prefix?: string; suffix?: string }
) => `${prefix}${compactFormatter.format(Math.round(value))}${suffix}`;

const BrandPartners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-50px 0px -50px 0px",
  });
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const controls = stats.map((stat, index) =>
      animate(0, stat.value, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCounts((current) => {
            const next = [...current];
            next[index] = latest;
            return next;
          });
        },
      })
    );

    return () => controls.forEach((control) => control.stop());
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
      id="partners"
    >
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-[#8CE4B5]/10 to-[#3EBAB9]/10 blur-3xl rounded-full" />
      <div className="absolute -z-10 bottom-0 right-1/4 w-[250px] h-[250px] bg-gradient-to-r from-[#3EBAB9]/10 to-[#1D558E]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-[#8CE4B5]/20 via-[#3EBAB9]/20 to-[#1D558E]/20 text-[#1D558E] border border-[#3EBAB9]/30"
          >
            🌍 Making a Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] bg-clip-text text-transparent">
              Impact
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Together, we're building a{" "}
            <span className="font-semibold text-[#3EBAB9]">greener future</span>{" "}
            one reward at a time
          </motion.p>
        </div>
        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-[#1D558E] mb-2">
                {formatStatValue(counts[index], stat)}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center space-y-6"
        >
          <div className="space-y-4">
            <button
              onClick={() => {
                // Handle app download action
                console.log(
                  "Start Earning Rewards clicked - redirect to app download"
                );
              }}
              className="bg-[#1D558E] hover:bg-[#15406b] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3EBAB9] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              Start Earning Rewards
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                // Handle business partnership action
                console.log("Business partnership clicked");
              }}
              className="text-gray-600 hover:text-[#3EBAB9] font-medium text-lg transition-colors duration-200 group"
            >
              Are you a business? Partner with us
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPartners;
