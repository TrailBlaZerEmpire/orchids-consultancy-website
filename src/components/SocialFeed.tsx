"use client";

import { motion } from "framer-motion";
import { Linkedin, Youtube, FileText, ArrowUpRight } from "lucide-react";

const socialFeeds = [
  {
    platform: "LinkedIn",
    title: "Trailblazer Empire",
    description: "Insights on strategic leadership and industry transformation.",
    link: "https://www.linkedin.com/company/trailblazer-empire/?viewAsMember=true",
    icon: Linkedin,
    color: "#0077b5",
    stats: "Professional Insights",
  },
  {
    platform: "Medium",
    title: "@reshal-saba",
    description: "Deep dives into macro-economic trends and strategic advisory.",
    link: "https://reshal-saba.medium.com/",
    icon: FileText,
    color: "#00ab6c",
    stats: "Expert Articles",
  },
  {
    platform: "YouTube",
    title: "@rheeshaalaen",
    description: "Video perspectives on global market dynamics and growth.",
    link: "https://www.youtube.com/@rheeshaalaen",
    icon: Youtube,
    color: "#ff0000",
    stats: "Video Content",
  },
  {
    platform: "X",
    title: "@Rheshaalaen",
    description: "Real-time updates on market intelligence and strategic shifts.",
    link: "https://x.com/Rheshaalaen",
    icon: ({ className }: { className?: string }) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M4 4l11.733 16h4.267l-11.733-16z" />
        <path d="M4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
      </svg>
    ),
    color: "#ffffff",
    stats: "Market Updates",
  },
];

export function SocialFeed() {
  return (
    <section className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-[#c9a962]" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#c9a962]">
                Stay Connected
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6"
            >
              Intelligence <span className="text-[#c9a962]">Network.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-[#6b6b6b] leading-relaxed"
            >
              Follow our multi-channel insights feed for real-time strategic intelligence and market-moving perspectives.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialFeeds.map((feed, index) => (
            <motion.a
              key={feed.platform}
              href={feed.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block p-8 bg-[#1a1a1a] border border-[#2c2c2c] rounded-sm hover:border-[#c9a962]/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-[#c9a962]" />
              </div>
              
              <div className="mb-8">
                <div className="w-12 h-12 rounded-sm bg-[#2c2c2c] flex items-center justify-center mb-6 group-hover:bg-[#c9a962]/10 transition-colors">
                  <feed.icon className="w-6 h-6 text-white group-hover:text-[#c9a962] transition-colors" />
                </div>
                <span className="text-[10px] text-[#c9a962] tracking-[0.2em] uppercase mb-2 block font-medium">
                  {feed.stats}
                </span>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#c9a962] transition-colors">
                  {feed.platform}
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed line-clamp-2">
                  {feed.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-[#2c2c2c] group-hover:border-[#c9a962]/20">
                <span className="text-xs text-[#4a4a4a] group-hover:text-[#6b6b6b] transition-colors">
                  {feed.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
