import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FloatingElementsNew = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const elements = [
    {
      type: "cube",
      gradient: "from-green-400 to-emerald-600",
      size: "w-32 h-32",
      position: "top-20 left-[10%]",
      y: y1,
      rotate: rotate1,
      delay: 0,
      icon: "♻️",
    },
    {
      type: "sphere",
      gradient: "from-teal-400 to-cyan-600",
      size: "w-24 h-24",
      position: "top-40 right-[15%]",
      y: y2,
      rotate: rotate2,
      delay: 0.2,
      icon: "🌱",
    },
    {
      type: "pyramid",
      gradient: "from-emerald-400 to-green-600",
      size: "w-28 h-28",
      position: "bottom-60 left-[20%]",
      y: y3,
      rotate: rotate1,
      delay: 0.4,
      icon: "🌍",
    },
    {
      type: "torus",
      gradient: "from-green-500 to-teal-600",
      size: "w-20 h-20",
      position: "top-1/3 right-[25%]",
      y: y1,
      rotate: rotate2,
      delay: 0.6,
      icon: "🍃",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position}`}
          style={{ y: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: element.delay }}
        >
          {/* 3D Card Effect */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
            style={{ rotate: element.rotate }}
          >
            {/* Glow Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${element.gradient} opacity-40 blur-2xl rounded-2xl transform group-hover:opacity-60 transition-opacity`}
            />

            {/* Main Shape */}
            <div
              className={`relative ${element.size} bg-gradient-to-br ${element.gradient} rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center text-4xl`}
            >
              {element.icon}

              {/* Inner Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />

              {/* Animated Pulse Ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-white/40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: element.delay,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Floating Particles - Mint Green & Teal Theme */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 2 === 0 ? "#10b981" : "#14b8a6",
            opacity: 0.4,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElementsNew;
