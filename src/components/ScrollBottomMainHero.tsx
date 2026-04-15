import React, { useRef } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";

const ScrollZoom = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const easeOutCubic = cubicBezier(0.25, 0.1, 0.25, 1);

  const scale = useTransform(scrollYProgress, [0, 0.8], [0.45, 1], {
    ease: easeOutCubic,
  });

  const translateY = useTransform(scrollYProgress, [0, 0.8], ["40%", "0%"], {
    ease: easeOutCubic,
  });

  const borderRadius = useTransform(scrollYProgress, [0, 0.75], [46, 0], {
    ease: easeOutCubic,
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8],
    ["#ffffff", "rgba(255,255,255,0.3)", "rgba(255,255,255,0)"],
    { ease: easeOutCubic }
  );

  const bgY = useTransform(scrollYProgress, [0, 1], ["2%", "-12%"], {
    ease: easeOutCubic,
  });

  const leftX = useTransform(scrollYProgress, [0.15, 0.7], ["-180%", "0%"], {
    ease: easeOutCubic,
  });

  const rightX = useTransform(scrollYProgress, [0.25, 0.8], ["180%", "0%"], {
    ease: easeOutCubic,
  });

  const frameOpacity = useTransform(scrollYProgress, [0.65, 0.9], [1, 0], {
    ease: easeOutCubic,
  });

  const topBorderWidth = useTransform(scrollYProgress, [0, 0.9], [100, 0], {
    ease: easeOutCubic,
  });

  const sideBorderWidth = useTransform(scrollYProgress, [0, 0.8], [12, 0], {
    ease: easeOutCubic,
  });

  const bottomBorderWidth = useTransform(scrollYProgress, [0, 0.8], [18, 0], {
    ease: easeOutCubic,
  });

  const borderOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0], {
    ease: easeOutCubic,
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

  const textScrollRange = useTransform(
    scrollYProgress,
    [0, 1],
    ["10%", "70%"],
    {
      ease: easeOutCubic,
    }
  );

  return (
    <div
      ref={ref}
      style={{ height: "300vh" }}
      className="relative bg-green-100 "
    >
      <motion.div
        className="sticky top-0 left-0 w-full flex justify-center items-center pointer-events-none"
        style={{ translateY, scale }}
      >
        <motion.div
          className="shadow-2xl overflow-hidden relative"
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
              borderLeftWidth: sideBorderWidth,
              borderRightWidth: sideBorderWidth,
              borderBottomWidth: bottomBorderWidth,
              borderTopWidth: topBorderWidth,
              opacity: borderOpacity,
              borderRadius,
              willChange: "border-width, opacity, border-radius",
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
              className="text-6xl text-gray-900 text-center font-bold"
              style={{
                opacity: titleOpacity,
                y: titleY,
              }}
            >
              {""}
            </motion.div>
          </motion.div>

          <motion.picture
            style={{
              y: bgY,
              scale: imageScale,
            }}
            className="w-full h-full"
          >
            <source
              type="image/webp"
              media="(max-width: 41rem)"
              srcSet="https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-mobile-up.jpg?quality=75&width=300&format=webp 300w, https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-mobile-up.jpg?quality=75&width=600&format=webp 600w, https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-mobile-up.jpg?quality=75&width=900&format=webp 900w"
            />
            <source
              type="image/webp"
              media="(min-width: 41.0625rem) and (max-width: 63.9375rem)"
              srcSet="https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-tablet-up.jpg?quality=75&width=600&format=webp 600w, https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-tablet-up.jpg?quality=75&width=900&format=webp 900w"
            />
            <source
              type="image/webp"
              media="(min-width: 64rem)"
              srcSet="https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-tablet-up.jpg?quality=75&width=600&format=webp 600w, https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-tablet-up.jpg?quality=75&width=1200&format=webp 1200w, https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-tablet-up.jpg?quality=75&width=1800&format=webp 1800w"
            />
            <img
              className="w-full h-full object-cover"
              src="https://www.paypalobjects.com/marketing/web24/uk/home-page/consumer-homepage-hero-1-mobile-up.jpg?quality=75&width=300"
              alt="PayPal Phone Shot"
            />
          </motion.picture>

          <motion.div
            className="absolute top-[10%] left-[3%] font-bold text-3xl sm:text-5xl md:text-8xl text-white z-20"
            style={{ x: leftX, y: textScrollRange }}
          >
            <p>Turn Your Recycling</p>
          </motion.div>

          <motion.div
            className="absolute bottom-[10%] right-[3%] font-bold text-3xl sm:text-5xl md:text-8xl text-white z-20"
            style={{ x: rightX }}
          >
            <p>Into Rewards!</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollZoom;
