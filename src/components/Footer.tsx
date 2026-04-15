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
      className="flex items-center space-x-3 bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3EBAB9] focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <div className="text-xl">{icon}</div>
      <div className="text-left">
        <div className="text-xs text-gray-300">{text}</div>
        <div className="text-sm font-semibold">{subtext}</div>
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
      <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4">
              Get the App
            </h3>
            <div className="space-y-3">
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

            {/* Newsletter signup */}
            <div className="mt-8">
              <h4 className="text-white font-medium text-base mb-3">
                Stay Updated
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3EBAB9] focus:border-transparent"
                />
                <button className="bg-[#1D558E] hover:bg-[#15406b] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3EBAB9] focus:ring-offset-2 focus:ring-offset-gray-900">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Logo and tagline */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-32 flex items-center justify-center">
                  <img src="/favicon_dark.png" alt="Mint Rewards" />
                </div>
              </div>
              <div className="hidden lg:block text-gray-400 text-sm">
                Turn your trash into treasure
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="text-[#8CE4B5]">🔒</div>
                <span>Secure & Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-[#3EBAB9]">🌱</div>
                <span>Eco-Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-[#8CE4B5]">⚡</div>
                <span>Instant Rewards</span>
              </div>
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
