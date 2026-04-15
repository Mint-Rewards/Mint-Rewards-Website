import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlowingOrb from "./SingularOrb";

export default function FeatureScrollSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.66, 1], [12, 4, 0]);

  const tasksY = useTransform(scrollYProgress, [0.15, 0.66], ["-100%", "0%"]);
  const goalsY = useTransform(scrollYProgress, [0.66, 1], ["-100%", "0%"]);

  const tasksOpacity = useTransform(scrollYProgress, [0.15, 0.48], [0, 1]);
  const goalsOpacity = useTransform(scrollYProgress, [0.66, 0.82], [0, 1]);

  return (
    <section ref={containerRef} className="relative ">
      {/* Section Heading */}
      <div className="text-center pt-16 pb-8 relative">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-[#8CE4B5]/20 via-[#3EBAB9]/20 to-[#1D558E]/20 text-[#1D558E] border border-[#3EBAB9]/30"
        >
          ✨ Simple as 1-2-3
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          <span className="text-gray-900">Recycle. </span>
          <span className="bg-gradient-to-r from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] bg-clip-text text-transparent">
            Earn.{" "}
          </span>
          <span className="text-gray-900">Repeat.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Turn your recyclables into rewards in just{" "}
          <span className="font-semibold text-[#3EBAB9]">three easy steps</span>
        </motion.p>
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-gradient-to-r from-[#8CE4B5]/10 via-[#3EBAB9]/10 to-[#1D558E]/10 blur-3xl rounded-full"
        />
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {/* Mobile */}
          <div className="relative flex justify-center md:hidden pt-24 pb-16">
            <div className="relative w-[280px] h-[340px]">
              <img
                src="/Sign up Screen.png"
                alt="Card 1"
                className="absolute left-1/2 top-1/2 z-30 -translate-x-[20px] -translate-y-[120px] h-[300px] opacity-90 rounded-2xl shadow-lg object-cover z-0"
              />

              <img
                src="/Location 2.png"
                alt="Card 2"
                className="absolute left-1/2 top-1/2 z-30 -translate-x-[120px] -translate-y-[80px] h-[320px] -rotate-25 rounded-2xl shadow-xl object-cover z-10"
              />

              <img
                src="/img_3_backup.jpg"
                alt="Card 3"
                className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 h-[340px] -rotate-5 rounded-2xl shadow-2xl object-cover z-20"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 h-[340px] -rotate-5 rounded-2xl shadow-2xl object-cover z-20">
                <GlowingOrb />
              </div>
            </div>
          </div>
          {/* Desktop */}
          <div className="relative hidden md:block">
            <div className="sticky top-24 hidden md:flex justify-center items-start h-screen">
              <motion.div
                style={{ rotate }}
                className="relative w-[300px] aspect-[9/16]"
              >
                <img
                  src="/Sign up Screen.png"
                  alt="Base Phone"
                  className="relative z-1 rounded-2xl w-full drop-shadow-lg"
                />

                <motion.img
                  style={{ y: tasksY, opacity: tasksOpacity }}
                  src="/Location 2.png"
                  className="absolute inset-0 z-2 rounded-2xl w-full shadow-lg"
                />
                <motion.img
                  style={{ y: goalsY, opacity: goalsOpacity }}
                  src="/img_3_backup.jpg"
                  className="absolute inset-0 z-3 rounded-2xl w-full shadow-lg"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-30 md:gap-[60vh] py-[30vh] z-99">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#8CE4B5]/20 px-4 py-1 text-sm text-[#1D558E]">
                🎨 Get Started
              </span>
              <h2 className="mt-6 text-4xl font-bold text-black leading-tight">
                Sign Up Free
                <br />
                <span className="text-[#3EBAB9]">
                  Create your account in seconds.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-black/60">
                Join thousands of users who are already earning rewards while
                making a positive impact on the environment. Quick and easy
                signup process.
              </p>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#3EBAB9]/20 px-4 py-1 text-sm text-[#1D558E]">
                ✅ Schedule Pickup
              </span>
              <h2 className="mt-6 text-4xl font-bold text-black leading-tight">
                Recycle & Earn <br />
                <span className="text-[#8CE4B5]">
                  We collect recyclables from your doorstep weekly.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-black/60">
                Convenient weekly collection service. Simply place your
                recyclables at your doorstep and we'll handle the rest while you
                earn points.
              </p>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1D558E]/20 px-4 py-1 text-sm text-[#1D558E]">
                🎯 Browse Rewards
              </span>
              <h2 className="mt-6 text-4xl font-bold text-black leading-tight">
                Redeem Rewards
                <br />
                <span className="text-[#1D558E]">
                  Use points instantly at top brands.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-black/60">
                Access exclusive discounts and vouchers from your favorite
                brands. Instant redemption with no waiting periods or
                complicated processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
