import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import {
  contactDetails,
  privacyLastUpdated,
  privacySections,
} from "../constants";

const Privacy = () => {
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
              <Shield size={16} />
              Your Privacy Matters
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            At Mint Rewards, protecting your personal information is fundamental
            to everything we do.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 mt-6"
          >
            Last Updated: {privacyLastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {privacySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1D558E]/10 via-[#3EBAB9]/10 to-[#8CE4B5]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#1D558E]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>

                      {section.highlight && (
                        <p className="text-lg font-semibold text-[#1D558E] mb-4 bg-[#8CE4B5]/20 px-4 py-2 rounded-lg inline-block">
                          {section.highlight}
                        </p>
                      )}

                      {section.text && (
                        <p className="text-gray-600 leading-relaxed">
                          {section.text}
                        </p>
                      )}

                      {section.content && (
                        <div className="space-y-4">
                          {section.content.map((item, idx) => (
                            <div key={idx}>
                              <h3 className="font-semibold text-[#3EBAB9] mb-1">
                                {item.subtitle}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.list && (
                        <ul className="space-y-2">
                          {section.list.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-600"
                            >
                              <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#3EBAB9]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.footer && (
                        <p className="mt-4 text-sm text-gray-500 italic">
                          {section.footer}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] rounded-2xl p-8 md:p-10 text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Contact Us
              </h2>
              <p className="text-white/90 mb-8">
                For privacy questions or data requests:
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p className="font-medium">{contactDetails.privacyEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Phone</p>
                    <p className="font-medium">{contactDetails.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Address</p>
                    <p className="font-medium">
                      {contactDetails.addressLine1},{" "}
                      {contactDetails.addressLine2}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-white/70 border-t border-white/20 pt-6">
                Note: This policy complies with applicable Pakistan data
                protection laws and international best practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
