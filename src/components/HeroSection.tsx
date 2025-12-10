"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-[#f5f5f5]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#3b82f6]/10 rounded-full animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full max-w-5xl h-auto opacity-20"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="worldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c9a962" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#c9a962" />
            </linearGradient>
          </defs>
          <path
            className={isLoaded ? "animate-draw-path" : ""}
            d="M100,250 Q150,200 200,220 T300,200 T400,180 T500,190 T600,170 T700,200 T800,180 T900,220
               M150,280 Q200,260 250,280 T350,260 T450,270 T550,250 T650,280 T750,260 T850,290
               M200,320 Q250,300 300,310 T400,290 T500,300 T600,280 T700,310 T800,290
               M120,200 L120,350 M180,180 L180,320 M240,190 L240,340 M300,175 L300,310
               M360,185 L360,300 M420,170 L420,290 M480,180 L480,300 M540,165 L540,280
               M600,175 L600,295 M660,160 L660,285 M720,180 L720,310 M780,170 L780,300
               M840,185 L840,320"
            fill="none"
            stroke="url(#worldGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <g className={isLoaded ? "animate-draw-path" : ""} style={{ animationDelay: "1s" }}>
            <circle cx="200" cy="220" r="4" fill="#c9a962" opacity="0.8" />
            <circle cx="350" cy="200" r="3" fill="#3b82f6" opacity="0.8" />
            <circle cx="500" cy="190" r="5" fill="#c9a962" opacity="0.8" />
            <circle cx="650" cy="170" r="3" fill="#3b82f6" opacity="0.8" />
            <circle cx="800" cy="200" r="4" fill="#c9a962" opacity="0.8" />
            <circle cx="300" cy="280" r="3" fill="#3b82f6" opacity="0.6" />
            <circle cx="550" cy="250" r="4" fill="#c9a962" opacity="0.6" />
            <circle cx="700" cy="280" r="3" fill="#3b82f6" opacity="0.6" />
          </g>
          <g className={isLoaded ? "animate-draw-path" : ""} style={{ animationDelay: "2s" }}>
            <path d="M200,220 Q275,190 350,200" fill="none" stroke="#c9a962" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.5" />
            <path d="M350,200 Q425,175 500,190" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.5" />
            <path d="M500,190 Q575,160 650,170" fill="none" stroke="#c9a962" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.5" />
            <path d="M650,170 Q725,185 800,200" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.5" />
          </g>
        </svg>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-[#6b6b6b] border border-[#e5e5e5] rounded-full">
            Strategic Advisory
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#1a1a1a] mb-8 leading-[1.1]"
        >
          Strategic Insight.
          <br />
          <span className="text-[#c9a962]">Clear Direction.</span>
          <br />
          Measurable Growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Transforming complexity into actionable strategy for industry leaders seeking sustainable competitive advantage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-beam px-8 py-4 bg-[#2c2c2c] text-white text-sm font-medium tracking-wide rounded-sm hover:bg-[#3d3d3d] transition-colors">
            Schedule Consultation
          </button>
          <button className="px-8 py-4 border border-[#e5e5e5] text-[#2c2c2c] text-sm font-medium tracking-wide rounded-sm hover:border-[#c9a962] hover:text-[#c9a962] transition-colors">
            Explore Services
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#6b6b6b] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-[#c9a962] rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-[#c9a962] rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
