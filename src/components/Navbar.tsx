import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Personal",
      path: "/personal",
      key: "personal",
      type: "link",
    },
    {
      name: "Business",
      path: "/business",
      key: "business",
      type: "link",
    },
    {
      name: "How it Works",
      path: "/",
      key: "how-it-works",
      type: "scroll",
      scrollTarget: "how-it-works",
    },
    {
      name: "Partners",
      path: "/",
      key: "partners",
      type: "scroll",
      scrollTarget: "partners",
    },
    {
      name: "Impact",
      path: "/",
      key: "impact",
      type: "scroll",
      scrollTarget: "impact",
    },
    {
      name: "CO2 Calculator",
      path: "/co2-calculator",
      key: "co2-calculator",
      type: "link",
    },
  ];

  const handleMenuClick = (item: (typeof menuItems)[0]) => {
    if (item.type === "scroll" && item.scrollTarget) {
      // If not on homepage, navigate to homepage first
      if (location.pathname !== "/") {
        // Navigate to homepage and then scroll
        window.location.href = `/#${item.scrollTarget}`;
      } else {
        // Already on homepage, just scroll
        const section = document.getElementById(item.scrollTarget);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleDownloadApp = () => {
    // Handle download app action
    console.log("Download app clicked");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            \
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img src="/favicon.ico" alt="Mint Rewards" className="w-8 h-8" />
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Mint Rewards
              </span>
            </Link>
          </div>

          {/* Menu Items (Center) - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                    scrolled
                      ? `hover:text-green-600 ${
                          location.pathname === item.path
                            ? "text-green-600"
                            : "text-gray-700"
                        }`
                      : `hover:text-green-300 ${
                          location.pathname === item.path
                            ? "text-green-300"
                            : "text-white"
                        }`
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform transition-transform duration-200 ${
                      location.pathname === item.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={() => handleMenuClick(item)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                    scrolled
                      ? `hover:text-green-600 ${
                          location.pathname === "/"
                            ? "text-green-600"
                            : "text-gray-700"
                        }`
                      : `hover:text-green-300 ${
                          location.pathname === "/"
                            ? "text-green-300"
                            : "text-white"
                        }`
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform transition-transform duration-200 scale-x-0 group-hover:scale-x-100`}
                  />
                </button>
              )
            )}
          </nav>

          {/* CTA Button (Right) - Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleDownloadApp}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`transition-colors duration-300 focus:outline-none ${
                scrolled
                  ? "text-gray-700 hover:text-gray-900 focus:text-gray-900"
                  : "text-white hover:text-green-300 focus:text-green-300"
              }`}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/20 bg-green-600/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                      location.pathname === item.path
                        ? "text-white bg-white/20"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => {
                      handleMenuClick(item);
                      setMobileOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                      location.pathname === "/"
                        ? "text-white bg-white/20"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </button>
                )
              )}
              <div className="pt-4 border-t border-white/20">
                <button
                  onClick={() => {
                    handleDownloadApp();
                    setMobileOpen(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
                >
                  Download App
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
