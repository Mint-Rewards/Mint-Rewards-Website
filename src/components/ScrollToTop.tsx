import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 360);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="go-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ duration: 0.2 }}
          onClick={handleGoToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 group"
        >
          <div className="relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] blur-2xl opacity-70"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative flex items-center gap-3 rounded-full bg-white/90 px-4 py-3 shadow-2xl shadow-[#1D558E]/30 ring-2 ring-white/50 backdrop-blur">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] text-white transition-transform group-hover:scale-110">
                <ArrowUp className="h-6 w-6" />
              </span>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-900">Top</p>
              </div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
