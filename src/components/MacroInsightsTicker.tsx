"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, Globe, Zap, Building2 } from "lucide-react";

const insights = [
  {
    icon: Globe,
    category: "Global Markets",
    text: "Asia-Pacific M&A activity up 23% YoY",
    trend: "up",
  },
  {
    icon: Zap,
    category: "Energy",
    text: "Renewable infrastructure investment reaches $1.8T globally",
    trend: "up",
  },
  {
    icon: Building2,
    category: "Real Estate",
    text: "Commercial property yields stabilizing at 5.2%",
    trend: "neutral",
  },
  {
    icon: TrendingUp,
    category: "Private Equity",
    text: "Dry powder at record $2.59T awaiting deployment",
    trend: "up",
  },
  {
    icon: Globe,
    category: "Trade",
    text: "Supply chain reshoring accelerating across Fortune 500",
    trend: "up",
  },
  {
    icon: Building2,
    category: "Healthcare",
    text: "Digital health valuations correct -18% from 2023 peak",
    trend: "down",
  },
  {
    icon: Zap,
    category: "Technology",
    text: "Enterprise AI spending projected $297B by 2027",
    trend: "up",
  },
  {
    icon: TrendingUp,
    category: "Banking",
    text: "Net interest margins expanding across regional banks",
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
