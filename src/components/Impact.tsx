"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { impactStats } from "../constants";

// Custom hook for animated counter
const useAnimatedCounter = (
  target: number,
  isInView: boolean,
  duration: number = 2000
) => {
  const springValue = useSpring(0, { duration });
  const rounded = useTransform(springValue, (value) => Math.round(value));

  useEffect(() => {
    if (isInView) {
      springValue.set(target);
    }
  }, [isInView, springValue, target]);

  return rounded;
};

const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  isInView,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}) => {
  const animatedValue = useAnimatedCounter(target, isInView);

  return (
    <motion.span>
      {prefix}
      <motion.span>{animatedValue}</motion.span>
      {suffix}
    </motion.span>
  );
};

// Organic blob shape component
// const OrganicBlob = ({
//   className,
//   delay = 0,
//   duration = 20,
// }: {
//   className: string;
//   delay?: number;
//   duration?: number;
// }) => (
//   <motion.div
//     className={className}
//     animate={{
//       scale: [1, 1.1, 0.95, 1.05, 1],
//       rotate: [0, 90, 180, 270, 360],
//       borderRadius: [
//         "60% 40% 30% 70%/60% 30% 70% 40%",
//         "30% 60% 70% 40%/50% 60% 30% 60%",
//         "60% 40% 30% 70%/60% 30% 70% 40%",
//       ],
//     }}
//     transition={{
//       duration,
//       delay,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//   />
// );

// Floating particle component
const FloatingParticle = ({
  size,
  left,
  top,
  delay,
  color,
}: {
  size: number;
  left: string;
  top: string;
  delay: number;
  color: string;
}) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{ width: size, height: size, left, top }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 4 + delay,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const StatCard = ({
  stat,
  isInView,
}: {
  stat: (typeof impactStats)[0];
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.9 }
      }
      transition={{
        duration: 0.7,
        delay: stat.id * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className={`relative bg-gradient-to-br ${stat.gradient}  rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer overflow-hidden`}
    >
      {/* Gradient accent line at top */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
      />

      <motion.div
        className={`${stat.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.4 },
        }}
      >
        <span className="text-3xl">{stat.icon}</span>
      </motion.div>

      <div className={`text-3xl md:text-4xl font-bold text-white mb-1`}>
        <AnimatedCounter
          target={stat.value}
          suffix={stat.suffix}
          isInView={isInView}
        />
        {stat.unit && (
          <span className="text-xl ml-1 text-white/80">{stat.unit}</span>
        )}
      </div>
      <h3 className="text-base font-semibold text-white mb-1">{stat.label}</h3>
      <p className="text-sm text-white/70">{stat.description}</p>
    </motion.div>
  );
};

const Impact = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-50px 0px -50px 0px",
  });

  const statsInView = useInView(statsRef, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 md:py-32 overflow-hidden"
      id="impact"
    >
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient mesh background */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-white to-teal-50/80" /> */}

        {/* Organic animated blobs */}
        {/* <OrganicBlob
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-green-200/40 to-emerald-300/30"
          delay={0}
          duration={25}
        />
        <OrganicBlob
          className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/30 to-cyan-200/20"
          delay={2}
          duration={30}
        />
        <OrganicBlob
          className="absolute -bottom-24 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-green-300/20"
          delay={4}
          duration={22}
        /> */}

        {/* Subtle grid pattern */}
        {/* <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        /> */}

        {/* Floating particles */}
        <FloatingParticle
          size={8}
          left="10%"
          top="20%"
          delay={0}
          color="bg-green-400/40"
        />
        <FloatingParticle
          size={12}
          left="85%"
          top="15%"
          delay={1}
          color="bg-teal-400/40"
        />
        <FloatingParticle
          size={6}
          left="70%"
          top="60%"
          delay={2}
          color="bg-emerald-400/40"
        />
        <FloatingParticle
          size={10}
          left="20%"
          top="70%"
          delay={0.5}
          color="bg-cyan-400/40"
        />
        <FloatingParticle
          size={8}
          left="50%"
          top="85%"
          delay={1.5}
          color="bg-green-400/40"
        />
        <FloatingParticle
          size={14}
          left="5%"
          top="50%"
          delay={3}
          color="bg-teal-300/30"
        />

        {/* Decorative rings */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full border-2 border-green-200/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 rounded-full border border-teal-200/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#8CE4B5]/20 backdrop-blur-sm text-[#1D558E] rounded-full text-sm font-medium border border-[#3EBAB9]/30">
                <span className="w-2 h-2 bg-[#3EBAB9] rounded-full animate-pulse" />
                Making Real Impact
              </span>
            </motion.div>

            {/* Header */}
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your actions{" "}
                <span className="bg-gradient-to-r from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] bg-clip-text text-transparent">
                  create change
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Every household helps reduce CO₂, recycle waste, and support
                children out of waste picking. Together, we're building a
                sustainable future.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-[#8CE4B5]/20 flex items-center justify-center">
                  <span className="text-lg">🛡️</span>
                </div>
                <span className="text-sm font-medium">Verified Impact</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-[#3EBAB9]/20 flex items-center justify-center">
                  <span className="text-lg">🌍</span>
                </div>
                <span className="text-sm font-medium">Eco Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-[#1D558E]/20 flex items-center justify-center">
                  <span className="text-lg">🤝</span>
                </div>
                <span className="text-sm font-medium">Community Driven</span>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group bg-[#1D558E] hover:bg-[#15406b] text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg shadow-[#1D558E]/25 hover:shadow-xl hover:shadow-[#1D558E]/30 hover:-translate-y-0.5">
                Join the Movement
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>
              <button className="px-8 py-4 rounded-2xl font-semibold text-base text-[#1D558E] border-2 border-gray-200 hover:border-[#3EBAB9] hover:bg-[#8CE4B5]/10 transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {impactStats.map((stat) => (
              <StatCard key={stat.id} stat={stat} isInView={statsInView} />
            ))}
          </div>
        </div>

        {/* Bottom trust section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 overflow-hidden">
            {/* Decorative elements inside the dark card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8CE4B5]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#3EBAB9]/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Trusted by Communities Across the Country
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#8CE4B5] to-[#3EBAB9] flex items-center justify-center shadow-lg shadow-[#8CE4B5]/30">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    Secure & Safe
                  </h4>
                  <p className="text-sm text-gray-400">
                    Your data and rewards are protected with bank-level security
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#3EBAB9] to-[#1D558E] flex items-center justify-center shadow-lg shadow-[#3EBAB9]/30">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    Real Impact
                  </h4>
                  <p className="text-sm text-gray-400">
                    Every action contributes to measurable environmental change
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#1D558E] to-[#3EBAB9] flex items-center justify-center shadow-lg shadow-[#1D558E]/30">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold text-white text-lg">
                    Community Driven
                  </h4>
                  <p className="text-sm text-gray-400">
                    Join a growing movement of environmentally conscious
                    families
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
