import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Lightbulb,
  Wrench,
  Rocket,
  Heart,
  ArrowRight,
  Sparkles,
  Leaf,
} from "lucide-react";
import { storyBeneficiaries } from "../constants";

const Story = () => {
  const crisisRef = useRef(null);
  const solutionRef = useRef(null);
  const todayRef = useRef(null);

  const crisisInView = useInView(crisisRef, { once: true, margin: "-100px" });
  const solutionInView = useInView(solutionRef, {
    once: true,
    margin: "-100px",
  });
  const todayInView = useInView(todayRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
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
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <BookOpen size={16} />
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            From Crisis to Solution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto italic"
          >
            "What if recycling actually felt rewarding?"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mt-4"
          >
            Mint Rewards was born from this simple question.
          </motion.p>
        </div>
      </section>

      {/* The Crisis Section */}
      <section ref={crisisRef} className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              crisisInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1D558E]/10 via-[#3EBAB9]/10 to-[#8CE4B5]/10 flex items-center justify-center">
                <Leaf className="w-7 h-7 text-[#1D558E]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The Story Begins Somewhere Harder
              </h2>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                crisisInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                In cities across Pakistan and the Global South, thousands of
                homeless children and informal waste pickers survive by
                collecting garbage from streets and landfills. Our founder
                witnessed this reality firsthand—
                <span className="font-semibold text-gray-900">
                  children working in unsafe conditions
                </span>
                , recyclable materials losing value, and communities drowning in
                unmanaged waste.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                crisisInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Meanwhile, Pakistan faces a waste crisis that worsens each year.
                Most recyclable material ends up in landfills, waterways, or
                streets—
                <span className="font-semibold text-gray-900">
                  not because people don't care
                </span>
                , but because recycling systems are fragmented, informal, and
                inaccessible to everyday households.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                crisisInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#1D558E]/5 to-[#3EBAB9]/5 rounded-2xl p-8 border border-[#3EBAB9]/20"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                The informal sector works tirelessly but remains invisible,
                unprotected, and undervalued. Households want to recycle but
                lack convenient options. Brands commit to sustainability but
                struggle to drive real behavior change.
              </p>
              <p className="text-xl font-semibold text-[#1D558E] mt-6">
                Mint Rewards was created to bridge these gaps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1D558E]/10 via-[#3EBAB9]/10 to-[#8CE4B5]/10 mb-6">
              <Lightbulb className="w-8 h-8 text-[#3EBAB9]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We set out to{" "}
              <span className="text-[#1D558E] font-semibold">
                formalize recycling
              </span>
              , make it accessible to every household,{" "}
              <span className="text-[#3EBAB9] font-semibold">
                reward positive behavior
              </span>
              , and create dignified opportunities for waste workers—all while
              keeping valuable materials{" "}
              <span className="text-[#8CE4B5] font-semibold">
                out of landfills
              </span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Building the Solution Section */}
      <section
        ref={solutionRef}
        className="py-16 md:py-24 bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building the Solution
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              By combining doorstep convenience, digital rewards, and brand
              partnerships, we built a system where{" "}
              <span className="font-semibold">
                doing the right thing is also the easy thing
              </span>
              .
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {storyBeneficiaries.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    solutionInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.benefit}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              solutionInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-2xl font-bold text-white border border-white/30">
              Everyone wins.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Today and Tomorrow Section */}
      <section ref={todayRef} className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={todayInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1D558E]/10 to-[#3EBAB9]/10 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-[#1D558E]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Today and Tomorrow
              </h2>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                todayInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8CE4B5]/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#3EBAB9]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Today
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Mint Rewards is helping{" "}
                    <span className="font-semibold text-[#1D558E]">
                      thousands of households
                    </span>{" "}
                    recycle more,{" "}
                    <span className="font-semibold text-[#3EBAB9]">
                      dozens of brands
                    </span>{" "}
                    engage more responsibly, and communities across Pakistan
                    move toward a cleaner future.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                todayInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#1D558E]/5 via-[#3EBAB9]/5 to-[#8CE4B5]/5 rounded-2xl p-8 border border-[#3EBAB9]/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1D558E]/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#1D558E]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Tomorrow
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    But we're just getting started. Our vision extends beyond
                    waste collection to building a{" "}
                    <span className="font-semibold text-[#1D558E]">
                      circular economy
                    </span>{" "}
                    where resources are valued, people are empowered, and
                    sustainability becomes second nature.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Together, we're turning everyday waste into{" "}
              <span className="font-semibold">extraordinary impact</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1D558E] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Start Recycling Today
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-colors duration-200 border border-white/30">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Story;
