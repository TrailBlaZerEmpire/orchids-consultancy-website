"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Stethoscope, PenTool, Rocket, TrendingUp } from "lucide-react";

const stages = [
  {
    id: 1,
    title: "Discover",
    icon: Search,
    description: "Comprehensive assessment of market position, competitive landscape, and organizational capabilities.",
  },
  {
    id: 2,
    title: "Diagnose",
    icon: Stethoscope,
    description: "Root cause analysis identifying core challenges and opportunities for strategic intervention.",
  },
  {
    id: 3,
    title: "Design",
    icon: PenTool,
    description: "Development of tailored strategic frameworks and actionable transformation roadmaps.",
  },
  {
    id: 4,
    title: "Deploy",
    icon: Rocket,
    description: "Systematic execution with milestone tracking, risk management, and adaptive iteration.",
  },
  {
    id: 5,
    title: "Drive",
    icon: TrendingUp,
    description: "Continuous optimization, performance measurement, and sustainable value creation.",
  },
];

export function FrameworkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="py-32 px-6 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.1)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-[#c9a962] mb-6 border border-[#c9a962]/30 rounded-full">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
            The 5D Framework
          </h2>
          <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto font-light">
            A proven methodology for transforming strategic vision into measurable business outcomes.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#2c2c2c] -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-[#c9a962] to-[#3b82f6]"
              initial={{ width: "0%" }}
              animate={isInView ? { width: `${(activeStage / (stages.length - 1)) * 100}%` } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {stages.map((stage, index) => {
              const isActive = index <= activeStage;
              const isCurrent = index === activeStage;

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`relative flex flex-col items-center text-center p-6 rounded-sm transition-all duration-500 ${
                      isCurrent ? "bg-[#2c2c2c]" : ""
                    }`}
                  >
                    <motion.div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-br from-[#c9a962] to-[#d4bc7e] shadow-lg shadow-[#c9a962]/30"
                          : "bg-[#2c2c2c] border border-[#3d3d3d]"
                      }`}
                      animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <stage.icon
                        className={`w-6 h-6 transition-colors duration-500 ${
                          isActive ? "text-white" : "text-[#6b6b6b]"
                        }`}
                        strokeWidth={1.5}
                      />
                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-[#c9a962]"
                          initial={{ opacity: 0.5, scale: 1 }}
                          animate={{ opacity: 0, scale: 1.5 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.div>

                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-medium tracking-widest transition-colors duration-500 ${
                          isActive ? "text-[#c9a962]" : "text-[#6b6b6b]"
                        }`}
                      >
                        0{stage.id}
                      </span>
                    </div>

                    <h3
                      className={`text-xl font-medium mb-3 tracking-tight transition-colors duration-500 ${
                        isActive ? "text-white" : "text-[#6b6b6b]"
                      }`}
                    >
                      {stage.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed font-light transition-colors duration-500 ${
                        isActive ? "text-[#a0a0a0]" : "text-[#4a4a4a]"
                      }`}
                    >
                      {stage.description}
                    </p>
                  </div>

                  {index < stages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 -translate-y-1/2 z-20">
                      <motion.div
                        className={`w-full h-full transition-colors duration-500 ${
                          index < activeStage ? "text-[#c9a962]" : "text-[#3d3d3d]"
                        }`}
                        animate={index === activeStage - 1 ? { x: [0, 4, 0] } : {}}
                        transition={{ duration: 0.5, repeat: 2 }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="btn-beam px-8 py-4 bg-[#c9a962] text-[#1a1a1a] text-sm font-medium tracking-wide rounded-sm hover:bg-[#d4bc7e] transition-colors">
            Learn Our Process
          </button>
        </motion.div>
      </div>
    </section>
  );
}
