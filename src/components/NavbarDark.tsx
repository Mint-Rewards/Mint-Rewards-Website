import React, { useState } from "react";
import { ArrowRight, Download, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BUSINESS_ROOT, siteModeFor } from "../siteMode";

/*
 * One nav, two sets of destinations.
 *
 * "Personal" used to be a nav item pointing at "/" with "Business" commented
 * out beside it — which could only ever have read as two links to the same
 * place. The two audiences are now a switch, and the items below it belong to
 * whichever side you are on.
 *
 * The scroll items only work on the home page they anchor into, which is why
 * each carries its own `path`: the handler navigates there first when you are
 * somewhere else, and "somewhere else" now includes the other site.
 */
const MENU_BY_MODE = {
  personal: [
    { name: "How it Works", path: "/", key: "how-it-works", type: "scroll", scrollTarget: "how-it-works" },
    { name: "Partners", path: "/", key: "partners", type: "scroll", scrollTarget: "partners" },
    { name: "Impact", path: "/", key: "impact", type: "scroll", scrollTarget: "impact" },
    { name: "CO2 Calculator", path: "/co2-calculator", key: "co2-calculator", type: "link" },
  ],
  /*
   * Ahsan's business nav, matching the Replit build: four destinations, one
   * per page, rather than the scroll anchors I guessed at first. Those pointed
   * at #what-we-do and #why-mint, which exist on no page — they silently did
   * nothing.
   */
  business: [
    { name: "Overview", path: BUSINESS_ROOT, key: "b-overview", type: "link" },
    { name: "RecovLoop", path: `${BUSINESS_ROOT}/waste-management`, key: "b-waste", type: "link" },
    { name: "Rewards partners", path: `${BUSINESS_ROOT}/rewards`, key: "b-rewards", type: "link" },
    { name: "Impact solutions", path: `${BUSINESS_ROOT}/impact`, key: "b-impact", type: "link" },
  ],
} as const;

const NavbarDark = () => {
  const location = useLocation();
  const mode = siteModeFor(location.pathname);
  const menuItems: readonly {
    name: string;
    path: string;
    key: string;
    type: string;
    scrollTarget?: string;
  }[] = MENU_BY_MODE[mode];

  const handleMenuClick = (item: (typeof menuItems)[number]) => {
    if (item.type === "scroll" && item.scrollTarget) {
      /*
       * `item.path` rather than a hardcoded "/": each site has its own home to
       * scroll within, and the business anchors do not exist on the consumer
       * one. Assuming "/" here would have sent a business visitor to the
       * consumer page and then failed to find the section.
       */
      if (location.pathname !== item.path) {
        window.location.href = `${item.path}#${item.scrollTarget}`;
      } else {
        // Already on homepage, just scroll
        const section = document.getElementById(item.scrollTarget);
        section?.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    }
  };


  const [open, setOpen] = useState(false);

  const isActiveLink = (item: (typeof menuItems)[number]) =>
    item.type === "link" && location.pathname === item.path;

  /*
   * No colour in the base. Putting `text-black/70` here and the active colour
   * alongside it meant two utilities of equal specificity in one attribute,
   * where the generated stylesheet's order decides the winner rather than the
   * order written — and Tailwind emitted black last, so the active tab came
   * out bold and black instead of blue.
   */
  const baseNavItemStyles = "text-sm font-medium transition";

  /*
   * The selected tab was `text-black` against a base of `text-black/70` — a
   * 30% opacity difference that reads as no difference at all, so Overview
   * looked unselected while sitting on /business.
   *
   * Business takes his accent, as the Replit build does. Personal has no
   * accent of its own yet (see the theme task), so it leans on weight and
   * full-strength ink instead of inventing a colour.
   */
  const navItemColour = (active: boolean) =>
    active
      ? mode === "business"
        ? "text-[#087de5] font-semibold"
        : "text-black font-semibold"
      : "text-black/70 hover:text-black";

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 gap-16 ">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Home of the site you are on. A logo that always went to "/"
                would quietly drop a business visitor onto the consumer site. */}
            <Link to={mode === "business" ? BUSINESS_ROOT : "/"} className="h-10 w-32 overflow-hidden block">
              <img src="/favicon.png" alt={mode === "business" ? "Mint Rewards for Business" : "Mint Rewards"} />
            </Link>
          </div>

          {/*
            THE SWITCH BETWEEN THE TWO SITES.
            Beside the logo rather than among the nav items: it changes which
            site you are on, while everything to its right changes where you
            are within one. Putting it in the same row as "Impact" would have
            made a change of audience look like a change of page.

            Two links, not a button — each side is a real URL that can be
            shared, bookmarked and opened in a new tab. `aria-current` is what
            tells a screen reader which of the two you are reading, since the
            visual answer is a background colour.
          */}
          <div
            className="ml-6 hidden sm:flex items-center rounded-full bg-black/5 p-0.5 text-sm"
            role="group"
            aria-label="Choose Mint Rewards for personal or business use"
          >
            {([
              { label: "Personal", to: "/", value: "personal" },
              { label: "Business", to: BUSINESS_ROOT, value: "business" },
            ] as const).map((opt) => (
              <Link
                key={opt.value}
                to={opt.to}
                onClick={() => setOpen(false)}
                aria-current={mode === opt.value ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 font-medium transition ${
                  mode === opt.value
                    ? "bg-white text-black shadow-sm"
                    : "text-black/55 hover:text-black"
                }`}
              >
                {opt.label}
              </Link>
            ))}
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
                      aria-current={isActiveLink(item) ? "page" : undefined}
                      className={`${baseNavItemStyles} ${navItemColour(
                        isActiveLink(item),
                      )}`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleMenuClick(item)}
                      className={`${baseNavItemStyles} ${navItemColour(false)}`}
                      type="button"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/*
              THE CTA BELONGS TO THE SIDE YOU ARE ON.
              It swapped nowhere when the nav items did, so a procurement
              manager reading about waste contracts was being asked to
              download a consumer recycling app. The one thing a business
              visitor is here to do is start a conversation.
            */}
            <div className="flex">
              <a
                href={mode === "business" ? `${BUSINESS_ROOT}/contact` : "#onboarding"}
                className="flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
              >
                {mode === "business" ? (
                  <>
                    Talk to our team
                    <ArrowRight size={16} />
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Get the App
                  </>
                )}
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
            {/*
              The switch again, because the desktop one is `hidden sm:flex`.
              Without this a phone visitor has no route to the business site at
              all — the whole feature would be invisible on the device most
              people arrive on.

              First in the sheet, and separated by a rule: it changes which
              site you are on, and the items below it belong to whichever you
              pick, so reading it after them would be reading them twice.
            */}
            <div
              className="flex items-center rounded-full bg-black/5 p-0.5 text-sm"
              role="group"
              aria-label="Choose Mint Rewards for personal or business use"
            >
              {([
                { label: "Personal", to: "/", value: "personal" },
                { label: "Business", to: BUSINESS_ROOT, value: "business" },
              ] as const).map((opt) => (
                <Link
                  key={`${opt.value}-mobile`}
                  to={opt.to}
                  onClick={() => setOpen(false)}
                  aria-current={mode === opt.value ? "page" : undefined}
                  className={`flex-1 rounded-full px-3.5 py-2 text-center font-medium transition ${
                    mode === opt.value
                      ? "bg-white text-black shadow-sm"
                      : "text-black/55"
                  }`}
                >
                  {opt.label}
                </Link>
              ))}
            </div>
            <hr className="border-black/10" />

            {menuItems.map((item) => (
              <div key={`${item.key}-mobile`}>
                {item.type === "link" ? (
                  <Link
                    to={item.path}
                    onClick={() => {
                      setOpen(false);
                    }}
                    aria-current={isActiveLink(item) ? "page" : undefined}
                    className={`${baseNavItemStyles} block text-base ${navItemColour(
                      isActiveLink(item),
                    )}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleMenuClick(item)}
                    className={`${baseNavItemStyles} ${navItemColour(false)} block text-left text-base w-full`}
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
