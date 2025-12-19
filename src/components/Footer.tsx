"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, FileText } from "lucide-react";

const footerLinks = {
  Services: [
    "Strategy Consulting",
    "M&A Advisory",
    "Digital Transformation",
    "Operational Excellence",
    "Financial Advisory",
  ],
  Industries: [
    "Financial Services",
    "Healthcare",
    "Technology",
    "Manufacturing",
    "Energy & Utilities",
  ],
  Insights: [
    "Research & Reports",
    "Case Studies",
    "Market Analysis",
    "Leadership Perspectives",
    "Webinars",
  ],
  Company: [
    "About Us",
    "Leadership Team",
    "Careers",
    "News & Press",
    "Contact",
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/trailblazer-empire/?viewAsMember=true",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    name: "X",
    href: "https://x.com/Rheshaalaen",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@rheeshaalaen",
    icon: <Youtube className="w-4 h-4" />,
  },
  {
    name: "Medium",
    href: "https://reshal-saba.medium.com/",
    icon: <FileText className="w-4 h-4" />,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16 border-b border-[#2c2c2c]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a962] to-[#d4bc7e] rounded-sm flex items-center justify-center">
                <span className="text-white font-medium text-lg">V</span>
              </div>
              <span className="text-xl font-medium tracking-tight text-white">
                Vision Craft
              </span>
            </div>
            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6 max-w-xs">
              Global strategic advisory firm delivering transformative insights for 
              industry leaders across sectors and geographies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2c2c2c] rounded-sm flex items-center justify-center text-[#6b6b6b] hover:text-[#c9a962] hover:bg-[#3d3d3d] transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-white tracking-wide mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#6b6b6b] hover:text-[#c9a962] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs text-[#4a4a4a]"
          >
            © {new Date().getFullYear()} Vision Craft. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#4a4a4a] hover:text-[#c9a962] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#4a4a4a] hover:text-[#c9a962] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-[#4a4a4a] hover:text-[#c9a962] transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}