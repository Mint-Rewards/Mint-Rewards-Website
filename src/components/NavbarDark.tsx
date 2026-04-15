import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavbarDark = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Personal",
      path: "/",
      key: "personal",
      type: "link",
    },
    // {
    //   name: "Business",
    //   path: "/",
    //   key: "business",
    //   type: "link",
    // },
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

  const handleMenuClick = (item: (typeof menuItems)[number]) => {
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
      setOpen(false);
    }
  };

  const handleDownloadApp = () => {
    // Handle download app action
    console.log("Download app clicked");
  };

  const [open, setOpen] = useState(false);

  const isActiveLink = (item: (typeof menuItems)[number]) =>
    item.type === "link" && location.pathname === item.path;

  const baseNavItemStyles =
    "text-sm font-medium transition text-black/70 hover:text-black";

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 gap-16 ">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-32 overflow-hidden">
              <img src="/favicon.png" alt="Mint Rewards" />
            </div>
          </div>

          <div className="flex items-center justify-end md:justify-between gap-6">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <div key={item.key}>
                  {item.type === "link" ? (
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`${baseNavItemStyles} ${
                        isActiveLink(item) ? "text-black" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleMenuClick(item)}
                      className={baseNavItemStyles}
                      type="button"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex">
              <a
                href={"#onboarding"}
                className="flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
              >
                <Download size={16} />
                Get the App
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              type="button"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="lg:hidden border-t border-black/10 bg-white/95 backdrop-blur"
          id="mobile-nav"
        >
          <div className="flex flex-col gap-4 px-6 py-6 text-black/80">
            {menuItems.map((item) => (
              <div key={`${item.key}-mobile`}>
                {item.type === "link" ? (
                  <Link
                    to={item.path}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={`${baseNavItemStyles} block text-base ${
                      isActiveLink(item) ? "text-black" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleMenuClick(item)}
                    className={`${baseNavItemStyles} block text-left text-base w-full`}
                    type="button"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            {/* <button
              onClick={() => {
                handleDownloadApp();
                setOpen(false);
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-base font-semibold text-white hover:bg-gray-900 transition"
            >
              <Download size={18} />
              Get the App
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarDark;
