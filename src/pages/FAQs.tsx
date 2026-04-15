import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
  Globe,
} from "lucide-react";
import { contactDetails } from "../constants";

interface FAQ {
  question: string;
  answer: string | string[];
}

interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    faqs: [
      {
        question: "How does Mint Rewards work?",
        answer:
          "Mint Rewards makes recycling rewarding. Sign up, set your address, and our team collects your recyclables on a regular schedule. You earn Mint Points for every collection, which you can redeem for discounts at restaurants, cafes, fashion brands, ride-hailing services, and more.",
      },
      {
        question: "Do I need to schedule a recycling collection?",
        answer:
          "No scheduling needed. Our teams collect recyclables automatically based on your area's schedule, usually weekly or bi-weekly. You'll get notifications in the app about your collection days.",
      },
      {
        question: "Is Mint Rewards free?",
        answer:
          "Yes, completely free. Download the app, sign up, and start earning rewards through regular recycling. There are no hidden fees. Pro membership is optional for users who want enhanced benefits.",
      },
      {
        question: "Where is Mint Rewards available?",
        answer:
          "Mint Rewards operates in Karachi, Lahore, Islamabad, and other major cities with coverage expanding to new areas regularly. Check availability by entering your address in the app during signup.",
      },
    ],
  },
  {
    id: "recycling",
    title: "Recycling & Collections",
    faqs: [
      {
        question: "What types of recyclables do you collect?",
        answer:
          "We collect multiple types of recyclable materials including plastic bottles and containers, paper and cardboard, metal cans, glass (in select areas), and other dry recyclables. The app shows exactly what's accepted in your location.",
      },
      {
        question: "Do you collect wet waste and food scraps?",
        answer:
          "Yes, but wet waste collection is exclusively available for Pro subscribers. Pro members get wet waste pickup, bonus points, exclusive rewards, and more frequent collections.",
      },
      {
        question: "What happens to my recyclables after collection?",
        answer:
          "All collected materials go to authorized recycling facilities where they're sorted, processed, and transformed into new products. This keeps waste out of landfills and oceans while supporting Pakistan's circular economy.",
      },
      {
        question: "Do I need special bags or bins?",
        answer:
          "Some areas receive Mint Rewards collection bags. In others, you can use any bag or container—the app guides you through proper preparation. The key is keeping recyclables clean, dry, and separated from waste.",
      },
      {
        question: "Can I use Mint Rewards in my apartment or housing society?",
        answer:
          "Yes! Mint Rewards works for apartments, housing societies, and individual homes. We coordinate with building management for convenient collection points.",
      },
      {
        question: "What if I miss a collection?",
        answer:
          "Don't worry. Your recyclables will be collected on the next scheduled pickup. Keep them stored safely until then.",
      },
    ],
  },
  {
    id: "points-rewards",
    title: "Points & Rewards",
    faqs: [
      {
        question: "What rewards can I get with my Mint Points?",
        answer: [
          "Mint Rewards partners with leading brands across Pakistan. Redeem points for discounts on:",
          "• Food and restaurants (dine-in and delivery)",
          "• Coffee shops and cafes",
          "• Clothing and fashion",
          "• Ride-hailing and travel",
          "• Groceries and household items",
          "• Digital subscriptions and services",
          "New partners and offers are added regularly, so check the app for the latest deals.",
        ],
      },
      {
        question: "How do I earn more Mint Points?",
        answer: [
          "Earn more by:",
          "• Recycling consistently (never miss a collection)",
          "• Properly sorting materials (clean, dry recyclables earn full points)",
          "• Upgrading to Pro for bonus points on every collection",
          "• Referring friends (earn bonus points for each successful referral)",
          "• Participating in special promotions",
        ],
      },
      {
        question: "How do I redeem my Mint Points?",
        answer: [
          "Redemption is simple:",
          "1. Open the Rewards section in the app",
          "2. Browse available offers from partner brands",
          "3. Select your reward and confirm redemption",
          "4. Receive a unique code or voucher",
          "5. Use it at checkout online or show it in-store",
          "Each partner has specific redemption instructions shown in the app.",
        ],
      },
      {
        question: "Do Mint Points expire?",
        answer:
          "Yes, points expire 2 months after they're earned to encourage regular redemption and keep rewards fresh. Pro members get extended expiration periods. The app shows your points balance and expiration dates so you never lose rewards.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Support",
    faqs: [
      {
        question: "How do I contact support?",
        answer: [
          "Reach our support team through:",
          "• In-app chat (fastest response)",
          `• Email: ${contactDetails.email}`,
          `• Phone: ${contactDetails.phone}`,
          "• Website contact form",
        ],
      },
      {
        question: "Is my personal data safe?",
        answer:
          "Absolutely. We use bank-level encryption, never sell your data, and only share what's necessary with collection partners. Read our full Privacy Policy for details.",
      },
      {
        question: "Can I pause my account if I'm traveling?",
        answer:
          "Yes, you can pause collections through the app if you're away. Your account and points remain active.",
      },
    ],
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-b border-gray-100 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
      >
        <span className="text-base md:text-lg font-medium text-gray-900 pr-4 group-hover:text-[#1D558E] transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8CE4B5]/20 flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 text-[#1D558E]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-gray-600 leading-relaxed">
              {Array.isArray(faq.answer) ? (
                <div className="space-y-2">
                  {faq.answer.map((line, idx) => (
                    <p key={idx} className={idx === 0 ? "font-medium" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p>{faq.answer}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQs = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
              <HelpCircle size={16} />
              Help Center
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Everything you need to know about Mint Rewards
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D558E]/10 via-[#3EBAB9]/10 to-[#8CE4B5]/10 flex items-center justify-center">
                    <span className="text-[#1D558E] font-bold">
                      {catIndex + 1}
                    </span>
                  </span>
                  {category.title}
                </h2>
                <div className="divide-y divide-gray-100">
                  {category.faqs.map((faq, faqIndex) => (
                    <FAQItem
                      key={faqIndex}
                      faq={faq}
                      isOpen={openItems[`${category.id}-${faqIndex}`] || false}
                      onClick={() => toggleItem(category.id, faqIndex)}
                    />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] rounded-2xl p-8 md:p-10 text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Still have questions?
              </h2>
              <p className="text-white/90 mb-8">
                Can't find the answer you're looking for? Our support team is
                here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">In-App Chat</p>
                    <p className="font-medium">Fastest response time</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p className="font-medium">{contactDetails.faqsEmail}</p>
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
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Website</p>
                    <p className="font-medium">Contact Form</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
