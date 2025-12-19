"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, Globe, Zap, Building2 } from "lucide-react";

const insights = [
  {
    icon: Globe,
    category: "Trade",
    text: "Singapore merchandise trade +8.5% YoY Q3 2025",
    trend: "up",
  },
  {
    icon: Building2,
    category: "Real Estate",
    text: "Singapore real estate investment volumes hit US$10.29B",
    trend: "up",
  },
  {
    icon: TrendingUp,
    category: "Private Equity",
    text: "Malaysia renewable PE grew +124% to USD2.3M",
    trend: "up",
  },
  {
    icon: Zap,
    category: "Energy",
    text: "Malaysia energy transition planning renewable capacity expansion",
    trend: "neutral",
  },
  {
    icon: TrendingUp,
    category: "Investment",
    text: "ASEAN FDI inflows buoy Malaysia's economic expansion",
    trend: "up",
  },
  {
    icon: Globe,
    category: "Economy",
    text: "Malaysia economy projected 4.0–4.8% growth 2025",
    trend: "up",
  },
  {
    icon: Globe,
    category: "Economy",
    text: "Singapore grew 4.2% YTD to Q3 2025",
    trend: "up",
  },
  {
    icon: Building2,
    category: "Healthcare",
    text: "APAC digital health funding $1.6B YTD 2025",
    trend: "up",
  },
  {
    icon: Zap,
    category: "Digital Economy",
    text: "SEA GMV exceeded $300B in 2025",
    trend: "up",
  },
];

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === "up") return <TrendingUp className="w-3 h-3 text-emerald-500" />;
  if (trend === "down") return <TrendingDown className="w-3 h-3 text-rose-500" />;
  return <Minus className="w-3 h-3 text-[#6b6b6b]" />;
};

export function MacroInsightsTicker() {
  const duplicatedInsights = [...insights, ...insights];

  return (
    <section className="py-16 bg-[#1a1a1a] border-y border-[#2c2c2c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c9a962] rounded-full animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#c9a962]">
              Live Insights
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-[#2c2c2c] via-[#3d3d3d] to-[#2c2c2c]" />
          <span className="text-xs text-[#6b6b6b]">Macro Intelligence Feed</span>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10" />

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedInsights.map((insight, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-4 px-6 py-3 bg-[#2c2c2c]/50 rounded-sm border border-[#3d3d3d]/50 hover:border-[#c9a962]/30 transition-colors group"
            >
              <div className="w-8 h-8 bg-[#3d3d3d] rounded-sm flex items-center justify-center group-hover:bg-[#c9a962]/10 transition-colors">
                <insight.icon className="w-4 h-4 text-[#c9a962]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#6b6b6b] tracking-widest uppercase mb-0.5">
                  {insight.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#e5e5e5] font-light whitespace-nowrap">
                    {insight.text}
                  </span>
                  <TrendIcon trend={insight.trend} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
