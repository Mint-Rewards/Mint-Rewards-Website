import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  Briefcase,
  Rocket,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  careersWhyJoinUs,
  careersValues,
  careersTraits,
  careersTeams,
  careersPerks,
  careerOpenings,
  type JobStatus,
} from "../constants";

const CAREERS_INBOX = "careers@mymintrewards.com";

/**
 * The two filters, in the order they are shown.
 *
 * Open is first and is the default, because it is what somebody came to the
 * page to find. Closed exists so a role that has been filled still has a
 * place to appear rather than vanishing — see the note on `careerOpenings`.
 */
const FILTERS: { value: JobStatus; label: string }[] = [
  { value: "open", label: "Open" },
  { value: "closed", label: "Closed" },
];

const Careers = () => {
  const [filter, setFilter] = useState<JobStatus>("open");
  const whyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamsRef = useRef(null);

  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamsInView = useInView(teamsRef, { once: true, margin: "-100px" });

  const counts = useMemo(
    () => ({
      open: careerOpenings.filter((job) => job.status === "open").length,
      closed: careerOpenings.filter((job) => job.status === "closed").length,
    }),
    [],
  );

  const visible = useMemo(
    () => careerOpenings.filter((job) => job.status === filter),
    [filter],
  );

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
            Join Mint Rewards
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Help us build the system that makes recycling{" "}
            <span className="font-semibold">worth doing</span> — for every
            household, every street, every city.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            We're tackling one of the developing world's hardest problems:
            waste. We believe technology, sustainability and human-centered
            design can change how societies handle their resources — and we're
            proving it, one collection at a time.
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

      {/* Open Positions */}
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
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every role here is a chance to build something that did not exist
              before.
            </p>
          </motion.div>

          {/* Filters. Two buttons rather than a <select>: with this few
              options a dropdown hides the counts, which are the useful part. */}
          <div
            role="tablist"
            aria-label="Filter positions by status"
            className="mt-8 flex justify-center gap-2"
          >
            {FILTERS.map((option) => {
              const active = filter === option.value;
              return (
                <button
                  key={option.value}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setFilter(option.value)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3EBAB9] focus-visible:ring-offset-2 ${
                    active
                      ? "bg-[#1D558E] text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#3EBAB9] hover:text-[#1D558E]"
                  }`}
                >
                  {option.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {counts[option.value]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8">
            {visible.length > 0 ? (
              <ul className="space-y-4">
                {visible.map((job) => {
                  const isOpen = job.status === "open";
                  const body = (
                    <>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4 shrink-0" />
                            {job.team}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 shrink-0" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-4 h-4 shrink-0" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      {isOpen ? (
                        <ChevronRight className="w-5 h-5 shrink-0 text-[#1D558E] transition-transform duration-200 group-hover:translate-x-1" />
                      ) : (
                        <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                          Closed
                        </span>
                      )}
                    </>
                  );

                  /* A closed role is not a link. Styling one to look
                     clickable and then doing nothing is worse than it
                     plainly reading as closed. */
                  return (
                    <li key={job.id}>
                      {isOpen ? (
                        <a
                          href={
                            job.applyHref ??
                            `mailto:${CAREERS_INBOX}?subject=${encodeURIComponent(
                              `Application: ${job.title}`,
                            )}`
                          }
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:border-[#3EBAB9] hover:shadow-md"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white/60 p-6">
                          {body}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8CE4B5]/20">
                  <Rocket className="h-8 w-8 text-[#3EBAB9]" />
                </div>
                {filter === "open" ? (
                  <>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      No open positions right now
                    </h3>
                    <p className="mx-auto mb-6 max-w-lg text-lg text-gray-600">
                      We're not hiring for a specific role at the moment — but
                      we're always glad to hear from people who want to build
                      this with us.
                    </p>
                    <a
                      href={`mailto:${CAREERS_INBOX}`}
                      className="inline-flex max-w-full items-center justify-center gap-2 break-all rounded-full bg-[#1D558E] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#15406b] sm:px-6 sm:text-base"
                    >
                      <Mail className="h-5 w-5 shrink-0" />
                      {CAREERS_INBOX}
                    </a>
                  </>
                ) : (
                  <>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      No closed positions to show
                    </h3>
                    <p className="mx-auto max-w-lg text-lg text-gray-600">
                      Roles we have filled will appear here.
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </div>
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

              <a
                href={`mailto:${CAREERS_INBOX}`}
                className="inline-flex max-w-full items-center justify-center gap-2 break-all rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1D558E] transition-colors duration-200 hover:bg-gray-100 sm:px-6 sm:text-base"
              >
                <Mail className="h-5 w-5 shrink-0" />
                {CAREERS_INBOX}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
