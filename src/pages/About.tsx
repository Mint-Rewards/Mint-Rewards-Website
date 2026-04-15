import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Target,
  Sparkles,
  Smartphone,
  Award,
  Leaf,
  TrendingUp,
} from "lucide-react";
import {
  impactStats,
  aboutDifferentiators,
  aboutServices,
  mediaOutlets,
} from "../constants";

const About = () => {
  const missionRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const differentiatorRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const differentiatorInView = useInView(differentiatorRef, {
    once: true,
    margin: "-100px",
  });

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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              <Heart size={16} />
              About Mint Rewards
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Making Recycling Rewarding,
            <br />
            <span className="text-white/90">One Household at a Time</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Mint Rewards is Pakistan's first rewards-driven recycling platform,
            combining doorstep convenience with real incentives to make
            sustainability accessible for everyone.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            We bridge the gap between households, recycling infrastructure, and
            conscious brands, creating a system where environmental
            responsibility becomes effortless and rewarding.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1D558E]/10 via-[#3EBAB9]/10 to-[#8CE4B5]/10 mb-6">
              <Target className="w-8 h-8 text-[#1D558E]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To build cleaner cities, empower people to recycle smarter, and
              help businesses meet sustainability goals through{" "}
              <span className="text-[#3EBAB9] font-semibold">
                accessible, rewarding solutions
              </span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating value for everyone in the recycling ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    servicesInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} to-transparent`}
                  />
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1D558E]/10 via-[#3EBAB9]/10 to-[#8CE4B5]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#1D558E]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section
        ref={statsRef}
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-white/80">
              Numbers that reflect our commitment to a cleaner Pakistan
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, index) => {
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white text-2xl">{stat.icon}</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section ref={differentiatorRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              differentiatorInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We're Different
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most recycling programs fail because they're inconvenient,
              unrewarding, or inaccessible. Mint Rewards succeeds because we
              make recycling:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutDifferentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    differentiatorInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8CE4B5]/20 to-[#3EBAB9]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#1D558E]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8CE4B5]/10 to-[#3EBAB9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] flex items-center justify-center shadow-lg">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Technology
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The Mint Rewards app combines smart logistics, impact
                  tracking, and seamless reward redemption into one simple
                  experience. Behind the scenes, our platform optimizes
                  collection routes, verifies materials, and connects the entire
                  recycling ecosystem.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1D558E]/10 via-[#3EBAB9]/10 to-[#8CE4B5]/10 mb-6">
              <Award className="w-8 h-8 text-[#1D558E]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our commitment to sustainability has been recognized by leading
              organizations
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Leaf, label: "Eco Champion" },
                { icon: TrendingUp, label: "Startup of the Year" },
                { icon: Award, label: "Innovation Award" },
                { icon: Sparkles, label: "Impact Leader" },
              ].map((award, index) => {
                const Icon = award.icon;
                return (
                  <motion.div
                    key={award.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                  >
                    <Icon className="w-8 h-8 text-[#3EBAB9] mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-700">
                      {award.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Media Coverage
              </h3>
              <p className="text-gray-600 mb-6">
                Featured by leading platforms championing sustainability and
                innovation
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {mediaOutlets.map((outlet, index) => (
                  <motion.div
                    key={outlet.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm"
                  >
                    <img
                      src={outlet.logo}
                      alt={`${outlet.name} logo`}
                      className="mx-auto h-16 w-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Recycling?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of households already making a difference while
              earning rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#1D558E] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Download the App
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-colors duration-200 border border-white/30">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
