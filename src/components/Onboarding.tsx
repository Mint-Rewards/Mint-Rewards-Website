"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Download, Star } from "lucide-react";

const AppStoreButton = ({
  store,
  icon,
  text,
  subtext,
}: {
  store: string;
  icon: React.ReactNode;
  text: string;
  subtext: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-xl hover:shadow-2xl"
      onClick={() => {
        if (store === "ios") {
          window.location.href =
            "https://apps.apple.com/us/app/mint-rewards/id6723895911";
        } else if (store === "android") {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.mintrewards.appp";
        }
      }}
    >
      <div className="text-2xl">{icon}</div>
      <div className="text-left">
        <div className="text-xs text-gray-500">{text}</div>
        <div className="text-sm font-semibold">{subtext}</div>
      </div>
    </motion.button>
  );
};

// const EcoPattern = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none z-0">
//       {/* Leaf patterns */}
//       {[...Array(4)].map((_, i) => (
//         <motion.div
//           key={`leaf-${i}`}
//           className="absolute"
//           style={{
//             left: `${20 + i * 20}%`,
//             top: `${30 + (i % 2) * 40}%`,
//           }}
//           animate={{
//             y: [0, -10, 0],
//             rotate: [0, 5, 0],
//           }}
//           transition={{
//             duration: 3 + i * 0.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="text-4xl text-white">🍃</div>
//         </motion.div>
//       ))}

//       {/* Infinity ribbons */}
//       {[...Array(2)].map((_, i) => (
//         <motion.div
//           key={`ribbon-${i}`}
//           className="absolute"
//           style={{
//             right: `${20 + i * 40}%`,
//             top: `${40 + i * 20}%`,
//           }}
//           animate={{
//             rotate: [0, 360],
//           }}
//           transition={{
//             duration: 20 + i * 5,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         >
//           <div className="text-3xl text-white">♻️</div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

const PhoneMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative z-10 flex items-center justify-center h-[420px] sm:h-[520px]"
    >
      <div className="relative w-[260px] sm:w-[320px] h-full">
        <img
          src="/Onboardings 5.png"
          alt="Mint Rewards onboarding preview"
          className="absolute top-0 left-1/2 z-20 w-[72%] sm:w-[62%] -translate-x-[100%] origin-bottom -rotate-10 rounded-3xl shadow-2xl transition-transform duration-700 ease-out"
        />

        <img
          src="/Homescreen 8.png"
          alt="Mint Rewards signup screen"
          className="absolute top-15 left-1/2 z-30 w-[72%] sm:w-[62%] -translate-x-[50%] origin-bottom rotate-10 rounded-3xl shadow-2xl transition-transform duration-700 ease-out outline outline-1 outline-white/20"
        />
      </div>
    </motion.div>
  );
};

const Onboarding = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-50px 0px -50px 0px",
  });

  return (
    <section
      id="onboarding"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] py-16 md:py-24 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Eco-inspired background pattern */}
      {/* <EcoPattern /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Join thousands of households recycling smarter.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 leading-relaxed"
              >
                Sign up today and turn your trash into amazing benefits.
              </motion.p>
            </div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <AppStoreButton
                store="ios"
                icon={<Download />}
                text="Download on the"
                subtext="App Store"
              />
              <AppStoreButton
                store="android"
                icon={<Smartphone />}
                text="Get it on"
                subtext="Google Play"
              />
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-white/90"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span>5/5 rating</span>
              {/* <span>•</span> */}
              {/* <span>50,000+ downloads</span> */}
            </motion.div>

            {/* Additional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="pt-4"
            >
              <p className="text-sm text-white/80 mb-4">
                Already have the app?
              </p>
              <button className="text-white hover:text-[#8CE4B5] font-semibold transition-colors duration-200 underline underline-offset-4">
                Sign In →
              </button>
            </motion.div>
          </motion.div>

          {/* Right Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>

        {/* Bottom trust elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-8 md:gap-12 text-lg md:text-xl text-white">
            <div className="flex items-center space-x-3">
              <div className="text-3xl md:text-4xl">🔒</div>
              <span className="font-medium">Secure signup</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-3xl md:text-4xl">📱</div>
              <span className="font-medium">Free app</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-3xl md:text-4xl">⚡</div>
              <span className="font-medium">Instant rewards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Onboarding;
