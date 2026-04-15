import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ParallaxHeroNew = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const smoothY1 = useSpring(y1, springConfig);
  const smoothY2 = useSpring(y2, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700"
    >
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-400 to-emerald-500 opacity-30 blur-3xl"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ y: smoothY1 }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 opacity-30 blur-3xl"
        animate={{
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ y: smoothY2 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-400 to-green-600 opacity-20 blur-3xl"
        animate={{
          x: mousePosition.x * 30 - 250,
          y: mousePosition.y * 30 - 250,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-20 h-20 border-2 border-green-300/40 rotate-45"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 65, 45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          x: mousePosition.x * 20,
          y: smoothY1,
        }}
      />

      <motion.div
        className="absolute top-40 right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-teal-300/30 to-emerald-400/30 backdrop-blur-sm"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          x: mousePosition.x * -15,
          y: smoothY2,
        }}
      />

      <motion.div
        className="absolute bottom-40 left-[20%] w-24 h-24 border-2 border-emerald-300/40"
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          x: mousePosition.x * 25,
        }}
      />

      {/* Recycling Icons Floating */}
      <motion.div
        className="absolute top-32 right-[25%] text-5xl"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♻️
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-[15%] text-4xl"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌱
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
        style={{ opacity, scale }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-white/90 text-sm font-medium">
            🌍 Building the Future of Sustainable Rewards
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-green-100 to-teal-100 bg-clip-text text-transparent">
            Recycle Smart
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 bg-clip-text text-transparent">
            Earn Rewards
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mb-12 leading-relaxed"
        >
          Transform your recyclables into amazing rewards. Save the planet while
          earning discounts at your favorite brands.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full shadow-lg shadow-green-900/30 hover:shadow-white/40 transition-all"
          >
            Start Earning Today
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all"
          >
            See How It Works
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 md:gap-16"
        >
          {[
            { value: "25K+", label: "KG Recycled", icon: "♻️" },
            { value: "2K+", label: "Happy Users", icon: "🏠" },
            { value: "100+", label: "Brand Partners", icon: "🛍️" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white/70 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxHeroNew;
