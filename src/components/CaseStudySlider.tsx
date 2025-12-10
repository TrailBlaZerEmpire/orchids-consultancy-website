"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, TrendingUp, Target, DollarSign, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    industry: "Financial Services",
    title: "Global Investment Bank Transformation",
    description: "Comprehensive digital transformation and operational restructuring for a top-tier investment bank.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    metrics: [
      { icon: TrendingUp, label: "ROI", value: "340%", subtext: "3-year return" },
      { icon: Target, label: "ROA", value: "+2.8%", subtext: "improvement" },
      { icon: DollarSign, label: "Revenue", value: "$1.2B", subtext: "incremental" },
      { icon: BarChart3, label: "Efficiency", value: "42%", subtext: "cost reduction" },
    ],
  },
  {
    id: 2,
    industry: "Healthcare",
    title: "Integrated Health System Optimization",
    description: "Strategic realignment of care delivery models and operational excellence initiatives.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    metrics: [
      { icon: TrendingUp, label: "Margin", value: "+18%", subtext: "expansion" },
      { icon: Target, label: "Quality", value: "Top 5%", subtext: "national ranking" },
      { icon: DollarSign, label: "Savings", value: "$890M", subtext: "annual" },
      { icon: BarChart3, label: "CTS", value: "-35%", subtext: "cost-to-serve" },
    ],
  },
  {
    id: 3,
    industry: "Technology",
    title: "Enterprise Software Scale-Up",
    description: "Market expansion strategy and go-to-market optimization for Series C SaaS platform.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    metrics: [
      { icon: TrendingUp, label: "ARR", value: "4.2x", subtext: "growth" },
      { icon: Target, label: "NPS", value: "+67", subtext: "score" },
      { icon: DollarSign, label: "Valuation", value: "$2.8B", subtext: "post-round" },
      { icon: BarChart3, label: "CAC", value: "-52%", subtext: "reduction" },
    ],
  },
  {
    id: 4,
    industry: "Manufacturing",
    title: "Industrial Conglomerate Restructuring",
    description: "Portfolio rationalization and operational transformation across 14 business units.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
    metrics: [
      { icon: TrendingUp, label: "EBITDA", value: "+$420M", subtext: "annual" },
      { icon: Target, label: "Market", value: "#1", subtext: "position" },
      { icon: DollarSign, label: "FCF", value: "2.3x", subtext: "improvement" },
      { icon: BarChart3, label: "Workforce", value: "28%", subtext: "productivity" },
    ],
  },
];

export function CaseStudySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const constraintsRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-32 px-6 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-[#c9a962] mb-6">
              Impact Stories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] tracking-tight">
              Proven Results
            </h2>
          </div>
          <div className="flex gap-3 mt-6 lg:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 border border-[#e5e5e5] rounded-full flex items-center justify-center text-[#2c2c2c] hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 border border-[#e5e5e5] rounded-full flex items-center justify-center text-[#2c2c2c] hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div ref={constraintsRef} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <motion.div
                className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={caseStudies[activeIndex].image}
                  alt={caseStudies[activeIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-white bg-[#c9a962] rounded-sm">
                    {caseStudies[activeIndex].industry}
                  </span>
                </div>
              </motion.div>

              <div className="flex flex-col justify-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-4 tracking-tight"
                >
                  {caseStudies[activeIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[#6b6b6b] mb-8 font-light leading-relaxed"
                >
                  {caseStudies[activeIndex].description}
                </motion.p>

                <div className="grid grid-cols-2 gap-4">
                  {caseStudies[activeIndex].metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="p-4 bg-white rounded-sm border border-[#e5e5e5] group hover:border-[#c9a962] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <metric.icon className="w-4 h-4 text-[#c9a962]" strokeWidth={1.5} />
                        <span className="text-xs text-[#6b6b6b] tracking-widest uppercase">
                          {metric.label}
                        </span>
                      </div>
                      <div className="text-2xl font-medium text-[#1a1a1a] tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[#a0a0a0] mt-1">{metric.subtext}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#2c2c2c] hover:text-[#c9a962] transition-colors group"
                >
                  Read Full Case Study
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[#c9a962]"
                    : "w-1.5 bg-[#e5e5e5] hover:bg-[#c9a962]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
