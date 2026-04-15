import React from "react";
import { motion } from "framer-motion";
import { Gift, Star, Percent } from "lucide-react";

const brands = [
  {
    name: "Foodpanda",
    logo: "🍔",
    category: "Food & Delivery",
    discount: "Up to 30% off",
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Careem",
    logo: "🚗",
    category: "Transportation",
    discount: "20% off rides",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Daraz",
    logo: "🛍️",
    category: "E-commerce",
    discount: "Up to 50% off",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "KFC",
    logo: "🍗",
    category: "Fast Food",
    discount: "25% off meals",
    color: "from-red-600 to-red-700",
  },
  {
    name: "Pizza Hut",
    logo: "🍕",
    category: "Restaurant",
    discount: "Buy 1 Get 1",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "McDonald's",
    logo: "🍟",
    category: "Fast Food",
    discount: "15% off orders",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Subway",
    logo: "🥪",
    category: "Restaurant",
    discount: "20% off subs",
    color: "from-green-600 to-green-700",
  },
  {
    name: "Cinepax",
    logo: "🎬",
    category: "Entertainment",
    discount: "Buy 1 Get 1 Free",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Sana Safinaz",
    logo: "👗",
    category: "Fashion",
    discount: "30% off collections",
    color: "from-pink-400 to-purple-500",
  },
  {
    name: "Khaadi",
    logo: "🧥",
    category: "Fashion",
    discount: "25% off clothing",
    color: "from-teal-500 to-blue-500",
  },
  {
    name: "Agha's",
    logo: "🛒",
    category: "Supermarket",
    discount: "10% cashback",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Hyperstar",
    logo: "🏪",
    category: "Retail",
    discount: "15% off groceries",
    color: "from-indigo-500 to-purple-500",
  },
];

const BrandsWeWork = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-green-200/30 rounded-full blur-3xl"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-green-600 p-4 rounded-full">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Brands We Work With
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Redeem your recycling points for amazing discounts and coupons from
            Pakistan's top brands
          </motion.p>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-gray-600">Partner Brands</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Percent className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50%</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Gift className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-gray-600">Active Offers</div>
            </div>
          </div>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer relative"
            >
              {/* Shimmer Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              {/* Brand Logo & Name */}
              <div className="p-6 text-center">
                <div className="text-4xl mb-3">{brand.logo}</div>
                <h3 className="font-bold text-gray-900 mb-1">{brand.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{brand.category}</p>

                {/* Discount Badge */}
                <div
                  className={`bg-gradient-to-r ${brand.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {brand.discount}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="bg-green-50 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-green-700 font-medium">
                  Tap to redeem points
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Earning Rewards?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Recycle your waste, earn points, and enjoy amazing discounts from
              your favorite brands
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Download App
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsWeWork;
