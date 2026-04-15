import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase,
  Rocket,
  Mail,
  Send,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  careersWhyJoinUs,
  careersValues,
  careersTraits,
  careersTeams,
  careersPerks,
} from "../constants";

const Careers = () => {
  const [email, setEmail] = useState("");
  const whyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamsRef = useRef(null);

  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamsInView = useInView(teamsRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Talent community signup:", email);
    setEmail("");
  };

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
              <Briefcase size={16} />
              Careers at Mint Rewards
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Join the Movement for
            <br />
            <span className="text-white/90">Cleaner Cities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            We're building more than a platform.{" "}
            <span className="font-semibold">We're building a movement.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            At Mint Rewards, we're tackling one of the developing world's
            biggest challenges: waste. We believe technology, sustainability,
            and human-centered design can transform how societies manage
            resources—and we're proving it every day.
          </motion.p>
        </div>
      </section>

      {/* Why Mint Rewards Section */}
      <section ref={whyRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Mint Rewards?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a team where your work makes a real difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careersWhyJoinUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D558E]/10 via-[#3EBAB9]/10 to-[#8CE4B5]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#1D558E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careersValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8CE4B5]/20 to-[#3EBAB9]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#1D558E]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Look For Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1D558E]/5 via-[#3EBAB9]/5 to-[#8CE4B5]/5 rounded-3xl p-8 md:p-12 border border-[#3EBAB9]/20"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#1D558E]/10 to-[#3EBAB9]/10 mb-4">
                <Sparkles className="w-7 h-7 text-[#1D558E]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                What We Look For
              </h2>
              <p className="text-gray-600">We hire people who are:</p>
            </div>

            <div className="space-y-4">
              {careersTraits.map((trait, index) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <ChevronRight className="w-5 h-5 text-[#3EBAB9] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#1D558E]">
                      {trait.label}:
                    </span>{" "}
                    <span className="text-gray-600">{trait.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teams Section */}
      <section
        ref={teamsRef}
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
            animate={teamsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Teams We're Building
            </h2>
            <p className="text-lg text-white/80">
              Find where you fit in our mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careersTeams.map((team, index) => {
              const Icon = team.icon;
              return (
                <motion.div
                  key={team.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    teamsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {team.title}
                  </h3>
                  <p className="text-white/80 text-sm">{team.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perks & Benefits
            </h2>
            <p className="text-lg text-gray-600">
              We take care of our team so they can focus on the mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careersPerks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8CE4B5]/20 to-[#3EBAB9]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1D558E]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {perk.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mt-8">
              <div className="w-16 h-16 rounded-full bg-[#8CE4B5]/20 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-[#3EBAB9]" />
              </div>
              <p className="text-gray-600 text-lg mb-6">
                We're always looking for exceptional people. Check back soon for
                new opportunities, or reach out if you think you can contribute.
              </p>
              <a
                href="mailto:careers@mymintrewards.com"
                className="inline-flex items-center gap-2 bg-[#1D558E] hover:bg-[#15406b] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                careers@mymintrewards.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not Seeing Your Role Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Not Seeing Your Role?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                We're always looking for exceptional people. If you're
                passionate about sustainability and think you can contribute,
                reach out anyway. Send your resume and a note about why Mint
                Rewards.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="font-semibold mb-4 text-lg">
                  Join Our Talent Community
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Not hiring for your role yet? Join our talent community to
                  hear about new opportunities first.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#1D558E] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
