"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Cog, DollarSign, Cpu } from "lucide-react";

const values = [
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Deep analytical frameworks that decode market dynamics and uncover hidden opportunities for strategic positioning.",
  },
  {
    icon: Cog,
    title: "Operational Excellence",
    description: "Systematic optimization of processes and capabilities to drive efficiency, quality, and sustainable cost advantages.",
  },
  {
    icon: DollarSign,
    title: "Financial Strategy",
    description: "Capital allocation and value creation strategies that maximize ROI and strengthen long-term financial resilience.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description: "Technology-enabled business model innovation that creates new sources of competitive advantage and revenue growth.",
  },
];

export function ValueProposition() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-[#c9a962] mb-6">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] mb-6 tracking-tight">
            Strategic Capabilities
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto font-light">
            Four pillars of expertise that form the foundation of transformative advisory engagements.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group"
            >
              <div className="relative p-8 bg-[#fafafa] rounded-sm border border-[#e5e5e5] hover:border-[#c9a962] transition-all duration-500 h-full">
                <motion.div
                  animate={isInView ? { y: [0, -8, 0] } : {}}
                  transition={{
                    duration: 3,
                    delay: index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-6"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#c9a962] to-[#d4bc7e] rounded-sm flex items-center justify-center shadow-lg shadow-[#c9a962]/20 group-hover:shadow-[#c9a962]/40 transition-shadow duration-500">
                    <value.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed font-light">
                  {value.description}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#c9a962] to-[#3b82f6] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
