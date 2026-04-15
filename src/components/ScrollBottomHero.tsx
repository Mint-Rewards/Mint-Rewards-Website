import React, { useRef } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";

const ScrollZoom = ({
  frameTitle = "",
  titleLeft = "",
  titleRight = "",
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const easeOutCubic = cubicBezier(0.25, 0.1, 0.25, 1);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.45, 1], {
    ease: easeOutCubic,
  });

  const translateY = useTransform(scrollYProgress, [0, 0.8], ["5%", "0%"], {
    ease: easeOutCubic,
  });

  const borderRadius = useTransform(scrollYProgress, [0, 0.75], [46, 0], {
    ease: easeOutCubic,
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8],
    ["#ffffff", "rgba(255,255,255,0.3)", "rgba(255,255,255,0)"]
  );

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"], {
    ease: easeOutCubic,
  });

  const leftX = useTransform(scrollYProgress, [0.15, 0.7], ["-180%", "0%"], {
    ease: easeOutCubic,
  });

  const rightX = useTransform(scrollYProgress, [0.25, 0.8], ["180%", "0%"], {
    ease: easeOutCubic,
  });

  const frameOpacity = useTransform(scrollYProgress, [0.65, 0.85], [1, 0], {
    ease: easeOutCubic,
  });

  const topBorderWidth = useTransform(scrollYProgress, [0, 0.6], [100, 12], {
    ease: easeOutCubic,
  });

  const borderOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  const imageScale = useTransform(scrollYProgress, [0.7, 0.9], [1, 1.03], {
    ease: easeOutCubic,
  });

  const framePadding = useTransform(scrollYProgress, [0, 0.75], [18, 0], {
    ease: easeOutCubic,
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0], {
    ease: easeOutCubic,
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -30], {
    ease: easeOutCubic,
  });
  const textScrollRange = useTransform(scrollYProgress, [0, 1], ["10%", "70%"]);

  return (
    <div
      ref={ref}
      style={{ height: "200vh" }}
      className="relative bg-gradient-to-br from-green-50 to-teal-50"
    >
      {/* Floating Recyclables Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating bottle */}
        <motion.div
          className="absolute top-[20%] left-[10%] text-4xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 30, 60],
            rotate: [0, 15, 0],
            scale: [1, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🍼
        </motion.div>

        {/* Floating can */}
        <motion.div
          className="absolute top-[40%] right-[15%] text-4xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -40, -80],
            rotate: [0, -20, 0],
            scale: [1, 0.7, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🥤
        </motion.div>

        {/* Floating carton */}
        <motion.div
          className="absolute top-[60%] left-[20%] text-4xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 50, 100],
            rotate: [0, 25, 0],
            scale: [1, 0.6, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          📦
        </motion.div>

        {/* Floating vouchers appearing */}
        <motion.div
          className="absolute top-[30%] right-[25%] text-3xl"
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 1, 0.8],
            rotate: [0, 10, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          🎫
        </motion.div>

        <motion.div
          className="absolute top-[50%] left-[30%] text-3xl"
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.1, 1, 0.9],
            rotate: [0, -15, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        >
          💳
        </motion.div>
      </div>

      <motion.div
        className="sticky top-0 left-0 w-full h-screen flex justify-center items-center pointer-events-none"
        style={{ translateY, scale }}
      >
        <motion.div
          className="shadow-2xl overflow-hidden relative flex justify-center items-center"
          style={{
            width: "100vw",
            height: "100vh",
            borderRadius,
            backgroundColor: bgColor,
            padding: framePadding,
          }}
        >
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderStyle: "solid",
              borderColor: "white",
              borderLeftWidth: 12,
              borderRightWidth: 12,
              borderBottomWidth: 18,
              borderTopWidth: topBorderWidth,
              opacity: borderOpacity,
              borderRadius,
              transition: "all 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
            }}
          />

          <motion.div
            className="absolute top-0 left-0 right-0 bg-white flex items-center justify-center z-10 pl-6 overflow-hidden"
            style={{
              height: topBorderWidth,
              opacity: frameOpacity,
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <motion.div
              className="text-2xl md:text-4xl lg:text-6xl text-gray-900 text-center font-bold"
              style={{
                opacity: titleOpacity,
                y: titleY,
              }}
            >
              {frameTitle}
            </motion.div>
          </motion.div>

          {/* Phone Mockup Content - Mint Rewards App */}
          <motion.div
            style={{
              y: bgY,
              scale: imageScale,
              transition: "all 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
            }}
            className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center pt-8 px-4 pb-0"
          >
            {/* App Interface Mockup */}
            <div
              className="w-full max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden relative"
              style={{ height: "80vh", maxHeight: "600px", minHeight: "500px" }}
            >
              {/* Status Bar */}
              <div className="bg-green-600 h-12 flex items-center justify-between px-4 text-white text-sm flex-shrink-0">
                <span className="font-medium">Mint Rewards</span>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              {/* App Content */}
              <div className="p-6 space-y-6 flex-1 overflow-y-auto">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Welcome to Mint
                  </h3>
                  <p className="text-gray-600 text-sm">Your eco-rewards hub</p>
                </div>

                {/* Points Balance */}
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">2,480</div>
                  <div className="text-sm text-gray-600">Points Available</div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-2">♻️</div>
                    <div className="text-xs font-medium">Schedule Pickup</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-2">🎁</div>
                    <div className="text-xs font-medium">Browse Rewards</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-900">
                    Recent Activity
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs font-bold">
                          +
                        </span>
                      </div>
                      <div className="text-sm">Plastic bottles recycled</div>
                    </div>
                    <div className="text-green-600 text-sm font-medium">
                      +50 pts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[20%] left-[3%] font-bold text-xl sm:text-3xl md:text-5xl text-white z-20 drop-shadow-lg"
            style={{ x: leftX, y: textScrollRange }}
          >
            {titleLeft}
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] right-[3%] font-bold text-xl sm:text-3xl md:text-5xl text-white z-20 drop-shadow-lg"
            style={{ x: rightX }}
          >
            {titleRight}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollZoom;
