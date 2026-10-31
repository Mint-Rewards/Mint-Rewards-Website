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
          {/*
            ONE BUTTON, NOT A BADGE. This was a 48px gradient disc, a
            large "Top" label and a pulsing blurred halo behind the lot —
            a control the size of a call to action, parked over the
            content, pulsing forever. Back-to-top is a convenience; it
            should be findable and otherwise quiet.

            44px square, which is the smallest comfortable touch target,
            and the label moves into aria-label — the arrow says "top" to
            anyone who can see it, and the name says it to anyone who
            cannot. The halo is gone: nothing that animates indefinitely
            earns a place in the corner of every page.
          */}
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#1D558E] to-[#3EBAB9] text-white shadow-lg shadow-[#1D558E]/25 ring-1 ring-white/60 transition-transform group-hover:scale-105">
            <ArrowUp className="h-5 w-5" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
