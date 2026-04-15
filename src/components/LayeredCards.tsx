import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LayeredCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const firstCardY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const firstCardOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const secondCardY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const secondCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [0, 0.5, 1]
  );

  const thirdCardY = useTransform(scrollYProgress, [0.4, 0.9], [200, 0]);
  const thirdCardOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.7, 0.9],
    [0, 0.5, 1]
  );

  return (
    <div
      className="min-h-screen bg-white max-w-[900px] mx-auto relative"
      ref={containerRef}
    >
      {/* Header Text */}
      <div className="font-paypal-pro font-black py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          How Mint Rewards Works
        </h1>
      </div>

      <div className="relative h-[2100px]">
        {/* First Card - Sign Up Free */}
        <motion.div
          style={{
            y: firstCardY,
            opacity: firstCardOpacity,
          }}
          className="sticky top-10 w-full bg-green-500 h-[550px] flex items-center overflow-hidden shadow-2xl z-10"
        >
          <div className="w-1/2 h-full p-10 text-white space-y-6">
            <div className="text-6xl font-black mb-4">1</div>
            <h1 className="text-4xl font-black">Sign Up Free</h1>
            <p className="text-xl">Create your account in seconds.</p>
            <button className="border-2 border-white rounded-full text-center text-lg font-bold py-3 px-6 hover:bg-white hover:text-green-500 transition-all duration-300 cursor-pointer">
              Get Started
            </button>
            <p className="text-sm opacity-90">
              Join thousands of users who are already earning rewards while
              making a positive impact on the environment. Quick and easy signup
              process.
            </p>
          </div>
          <div className="w-1/2 h-full">
            <div className="h-full w-full bg-white/20 flex items-center justify-center">
              <p className="text-white text-lg italic">
                Illustration: Person holding phone
              </p>
            </div>
          </div>
        </motion.div>

        {/* Second Card - Recycle & Earn */}
        <motion.div
          style={{
            y: secondCardY,
            opacity: secondCardOpacity,
          }}
          className="sticky top-24 w-full bg-teal-500 h-[550px] flex items-center overflow-hidden shadow-2xl z-20"
        >
          <div className="w-[60%] h-full p-10 text-white space-y-6">
            <div className="text-6xl font-black mb-4">2</div>
            <h1 className="text-4xl font-black">Recycle & Earn</h1>
            <p className="text-xl">
              We collect recyclables from your doorstep weekly.
            </p>
            <button className="border-2 border-white rounded-full text-center text-lg font-bold py-3 px-6 hover:bg-white hover:text-teal-500 transition-all duration-300 cursor-pointer">
              Schedule Pickup
            </button>
            <p className="text-sm opacity-90">
              Convenient weekly collection service. Simply place your
              recyclables at your doorstep and we'll handle the rest while you
              earn points.
            </p>
          </div>
          <div className="w-[40%] ml-auto h-full">
            <div className="h-full w-full bg-white/20 flex items-center justify-center">
              <p className="text-white text-lg italic text-center">
                Illustration: Recycling bag at door
              </p>
            </div>
          </div>
        </motion.div>

        {/* Third Card - Redeem Rewards */}
        <motion.div
          style={{
            y: thirdCardY,
            opacity: thirdCardOpacity,
          }}
          className="sticky top-38 w-full bg-green-600 h-[550px] flex items-center overflow-hidden shadow-2xl z-30"
        >
          <div className="w-1/2 h-full p-10 text-white space-y-6">
            <div className="text-6xl font-black mb-4">3</div>
            <h1 className="text-4xl font-black">Redeem Rewards</h1>
            <p className="text-xl">Use points instantly at top brands.</p>
            <button className="border-2 border-white rounded-full text-center text-lg font-bold py-3 px-6 hover:bg-white hover:text-green-600 transition-all duration-300 cursor-pointer">
              Browse Rewards
            </button>
            <p className="text-sm opacity-90">
              Access exclusive discounts and vouchers from your favorite brands.
              Instant redemption with no waiting periods or complicated
              processes.
            </p>
          </div>
          <div className="w-1/2 h-full">
            <div className="h-full w-full bg-white/20 flex items-center justify-center">
              <p className="text-white text-lg italic text-center">
                Illustration: Shopping bag + voucher
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extra space for scrolling */}
      {/* <div className="h-screen bg-white"></div> */}
    </div>
  );
};

export default LayeredCards;
