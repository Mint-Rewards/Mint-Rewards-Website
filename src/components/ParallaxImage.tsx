import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background moves slower (parallax effect)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Text elements move in opposite directions for reveal effect
  const textLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textRightX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={ref} className="h-[200vh] relative bg-blue-600">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ y: backgroundY }}
        >
          <div className="min-h-full min-w-full">
            <picture>
              <source
                type="image/webp"
                media="(max-width: 41rem)"
                srcSet="https://www.paypalobjects.com/marketing/web23/uk/en/ppe/homepage-consumer/brand-moment-02_size-mobile.jpg?quality=75&width=1800&format=webp"
              />
              <source
                type="image/webp"
                media="(min-width: 41.0625rem)"
                srcSet="https://www.paypalobjects.com/marketing/web23/uk/en/ppe/homepage-consumer/brand-moment-02_size-all.jpg?quality=75&width=2400&format=webp"
              />
              <img
                src="https://www.paypalobjects.com/marketing/web23/uk/en/ppe/homepage-consumer/brand-moment-02_size-all.jpg?quality=75&width=2400&format=webp"
                alt="Woman in a green dress holding a pink phone"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
        </motion.div>

        {/* Text content with parallax effects */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            {/* First text - moves left */}
            <motion.div className="mb-8" style={{ x: textLeftX }}>
              <span className="text-white text-6xl md:text-8xl lg:text-9xl font-bold block tracking-tighter">
                send
              </span>
            </motion.div>

            {/* Second text - moves right */}
            <motion.div style={{ x: textRightX }}>
              <span className="text-white text-6xl md:text-8xl lg:text-9xl font-bold block tracking-tighter">
                smarter
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxImage;
