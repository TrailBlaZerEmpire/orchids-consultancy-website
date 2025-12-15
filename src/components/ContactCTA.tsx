"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] animate-gradient-shift" />
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#c9a962]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-[#c9a962] border border-[#c9a962]/30 rounded-full mb-6">
              Start the Conversation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
              Where complexity becomes{" "}
              <span className="text-[#c9a962]">clarity.</span>
            </h2>
            <p className="text-xl text-white/90 mb-2 font-light">
              Where insight becomes{" "}
              <span className="text-[#c9a962]">advantage.</span>
            </p>
            <p className="text-[#a0a0a0] mb-10 font-light leading-relaxed max-w-lg">
              Schedule a confidential consultation with our senior partners to discuss 
              how strategic advisory can accelerate your organization&apos;s trajectory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-beam group px-8 py-4 bg-[#c9a962] text-[#1a1a1a] text-sm font-medium tracking-wide rounded-sm hover:bg-[#d4bc7e] transition-colors inline-flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <button className="px-8 py-4 border border-[#3d3d3d] text-white text-sm font-medium tracking-wide rounded-sm hover:border-[#c9a962] hover:text-[#c9a962] transition-colors">
                Download Capabilities
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 bg-[#2c2c2c]/50 backdrop-blur-sm rounded-sm border border-[#3d3d3d]/50">
              <h3 className="text-lg font-medium text-white mb-6 tracking-tight">
                Global Offices
              </h3>
              <div className="space-y-4">
                {[
                  { city: "Malaysia", address: "Krystal Point, 11900 Bayan Baru, Pulau Pinang" },
                  { city: "Singapore", address: "Paya Lebar Square, 409051" },
                ].map((office) => (
                  <div
                    key={office.city}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-[#c9a962] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <span className="text-white font-medium block group-hover:text-[#c9a962] transition-colors">
                        {office.city}
                      </span>
                      <span className="text-sm text-[#6b6b6b]">{office.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="mailto:rheeshaalaen@trailblazer.com"
                whileHover={{ y: -2 }}
                className="p-6 bg-[#2c2c2c]/50 backdrop-blur-sm rounded-sm border border-[#3d3d3d]/50 hover:border-[#c9a962]/50 transition-colors group"
              >
                <Mail className="w-5 h-5 text-[#c9a962] mb-3" strokeWidth={1.5} />
                <span className="text-xs text-[#6b6b6b] tracking-widest uppercase block mb-1">
                  Email
                </span>
                <span className="text-sm text-white group-hover:text-[#c9a962] transition-colors">
                  rheeshaalaen@trailblazer.com
                </span>
              </motion.a>
              <motion.div
                whileHover={{ y: -2 }}
                className="p-6 bg-[#2c2c2c]/50 backdrop-blur-sm rounded-sm border border-[#3d3d3d]/50 hover:border-[#c9a962]/50 transition-colors group"
              >
                <Phone className="w-5 h-5 text-[#c9a962] mb-3" strokeWidth={1.5} />
                <span className="text-xs text-[#6b6b6b] tracking-widest uppercase block mb-1">
                  Phone
                </span>
                <div className="space-y-1">
                  <a href="tel:+60174416515" className="text-sm text-white group-hover:text-[#c9a962] transition-colors block">
                    +6017-4416515
                  </a>
                  <a href="tel:+6587539315" className="text-sm text-white group-hover:text-[#c9a962] transition-colors block">
                    +65 87539315
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}