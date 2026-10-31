"use client";

import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";
import { contactSocialLinks, footerLinks } from "../constants";

const AppStoreButton = ({
  icon,
  text,
  subtext,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  subtext: string;
  href: string;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex min-w-0 flex-1 lg:flex-none items-center justify-center lg:justify-start space-x-2 sm:space-x-3 bg-black hover:bg-gray-800 text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3EBAB9] focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <div className="shrink-0 text-lg sm:text-xl">{icon}</div>
      <div className="min-w-0 text-left">
        <div className="truncate text-[10px] sm:text-xs text-gray-300">{text}</div>
        <div className="truncate text-xs sm:text-sm font-semibold">{subtext}</div>
      </div>
    </motion.a>
  );
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: Array<{
    name: string;
    href: string;
    available: boolean;
    placeholder?: boolean;
  }>;
}) => {
  return (
    <div>
      <h3 className="text-white font-semibold text-sm sm:text-lg mb-3 sm:mb-4">{title}</h3>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            {link.available ? (
              <a
                href={link.href}
                className="text-gray-300 hover:text-[#8CE4B5] transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ) : (
              <span className="text-gray-500 text-sm cursor-not-allowed">
                {link.name}
                {link.placeholder && (
                  <span className="ml-2 text-xs bg-gray-700 px-2 py-1 rounded">
                    Coming Soon
                  </span>
                )}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <FooterColumn
              title={footerLinks.about.title}
              links={footerLinks.about.links}
            />
          </div>

          {/* Support Column */}
          <div className="lg:col-span-1">
            <FooterColumn
              title={footerLinks.support.title}
              links={footerLinks.support.links}
            />
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-1">
            <FooterColumn
              title={footerLinks.legal.title}
              links={footerLinks.legal.links}
            />
          </div>

          {/* Get the App Column */}
          <div className="col-span-3 lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4">
              Get the App
            </h3>
            <div className="flex flex-row gap-3 lg:flex-col">
              <AppStoreButton
                icon={<Download />}
                text="Download on the"
                subtext="App Store"
                href="https://apps.apple.com/us/app/mint-rewards/id6723895911"
              />
              <AppStoreButton
                icon={<Smartphone />}
                text="Get it on"
                subtext="Google Play"
                href="https://play.google.com/store/apps/details?id=com.mintrewards.appp"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Mint Rewards. All rights reserved.
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {contactSocialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-[#3EBAB9] transition-colors duration-200 p-2"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
