import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Smartphone, CheckCircle2, Sparkles } from "lucide-react";

const OnboardingNew = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  const steps = [
    {
      icon: "📱",
      title: "Download",
      description: "Get the Mint app from your app store",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "♻️",
      title: "Recycle",
      description: "Schedule pickup or drop off recyclables",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: "🎁",
      title: "Earn",
      description: "Collect points and redeem rewards",
      color: "from-teal-400 to-cyan-500",
    },
  ];

  const features = [
    "Doorstep pickup service",
    "Track your impact in real-time",
    "Instant reward redemption",
    "Community leaderboards",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-medium mb-6"
          >
            <Sparkles size={20} />
            <span>Get Started in Minutes</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Journey to
            <br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Sustainable Living
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our eco-conscious community and start making a difference while
            earning rewards
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent z-0">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  />
                </div>
              )}

              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group cursor-pointer">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-shadow`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold">
                Ready to make an impact?
              </h3>

              <p className="text-xl text-white/90">
                Download the app now and get 500 bonus points to kickstart your
                eco-journey!
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Download size={24} />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  <Smartphone size={24} />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="text-white/90 text-sm">4.8 rating</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="text-white/90 text-sm">50K+ downloads</div>
              </div>
            </motion.div>

            {/* Right Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <CheckCircle2
                    className="text-green-300 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["🏢 Corp A", "🏪 Brand B", "🏭 Company C", "🏛️ Org D"].map(
              (org, i) => (
                <motion.div
                  key={i}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="text-2xl font-bold text-gray-400"
                >
                  {org}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingNew;
