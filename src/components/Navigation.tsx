"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Framework", href: "#framework" },
  { label: "Case Studies", href: "#cases" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "/about" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a962] to-[#d4bc7e] rounded-sm flex items-center justify-center">
                <span className="text-white font-medium text-lg">V</span>
              </div>
              <span
                className={`text-xl font-medium tracking-tight transition-colors ${
                  isScrolled ? "text-[#1a1a1a]" : "text-[#1a1a1a]"
                }`}
              >
                Vision Craft
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-[#c9a962] ${
                    isScrolled ? "text-[#6b6b6b]" : "text-[#6b6b6b]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#c9a962] ${
                  isScrolled ? "text-[#6b6b6b]" : "text-[#6b6b6b]"
                }`}
              >
                Client Login
              </button>
              <button className="btn-beam px-5 py-2.5 bg-[#2c2c2c] text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[#3d3d3d] transition-colors">
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2"
            >
              <Menu className="w-6 h-6 text-[#2c2c2c]" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between h-20 px-6 border-b border-[#e5e5e5]">
                <a href="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#c9a962] to-[#d4bc7e] rounded-sm flex items-center justify-center">
                    <span className="text-white font-medium text-lg">V</span>
                  </div>
                  <span className="text-xl font-medium tracking-tight text-[#1a1a1a]">
                    Vision Craft
                  </span>
                </a>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6 text-[#2c2c2c]" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center px-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-medium text-[#1a1a1a] py-4 border-b border-[#e5e5e5] hover:text-[#c9a962] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="px-6 py-8 border-t border-[#e5e5e5]">
                <button className="w-full btn-beam px-8 py-4 bg-[#2c2c2c] text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[#3d3d3d] transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}