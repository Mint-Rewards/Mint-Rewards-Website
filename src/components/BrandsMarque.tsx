import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { activeBrands } from "../constants";

const BrandsMarque = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs md:text-sm font-semibold uppercase tracking-[0.3em] rounded-full bg-gradient-to-r from-[#8CE4B5]/20 via-[#3EBAB9]/20 to-[#1D558E]/20 text-[#1D558E] border border-[#3EBAB9]/30">
              Trusted partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Trusted by teams that move fast
            </h2>
          </div>
          <div className="brands-marquee" aria-hidden={!isInView}>
            <div className="brands-marquee__track slow">
              {[...activeBrands, ...activeBrands].map((brand, index) => (
                <span key={`${index}`} className="brands-marquee__item">
                  <img
                    className="brands-marquee__logo"
                    src={brand}
                    alt={brand}
                    loading={index > activeBrands.length ? "lazy" : "eager"}
                  />
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsMarque;
