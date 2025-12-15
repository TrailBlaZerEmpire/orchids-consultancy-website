import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#101923]">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-white text-5xl font-bold mb-6">About Us</h1>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              At TrailBlazer Empire, we pioneer the intersection of finance, technology, and business strategy. Founded to empower individuals and organizations with clarity and direction, our ecosystem brings together experts from diverse fields. Together, we are not just building ventures but we&apos;re building visionary paths forward.
            </p>
          </div>

          <section className="mb-16 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-white text-base leading-relaxed max-w-2xl mx-auto">
              To guide individuals and businesses from confusion to clarity through strategy, insight, and execution across the domains of finance, technology, and enterprise leadership.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Founder</h2>
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="https://raw.githubusercontent.com/TrailBlaZerEmpire/SiliconBridge/main/Myself.jpg"
                  alt="Rheeshaalaen Sabapathy"
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-[#93c5fd] shadow-lg object-cover"
                />
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Rheeshaalaen Sabapathy</h3>
              <p className="text-[#93c5fd] text-base mb-6">Founder & Multi-Domain Strategist</p>
            </div>
            <p className="text-white text-base leading-relaxed text-center max-w-3xl mx-auto">
              With a foundation in engineering and a sharp lens on markets, Rheeshaalaen bridges analytics with strategic thinking. His work thrives at the intersection of finance, technology, and business. As a systems thinker and execution-driven leader, he crafts clarity from complexity and helping learners become leaders, and strategies become results.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8">Expertise</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Portfolio Strategy",
                  description: "Builds diversified, long-term portfolios across equities, MMF, and fixed income."
                },
                {
                  title: "Quantitative & Financial Analysis",
                  description: "Dissects reports and metrics for data-driven investment decisions and provide hedging insights."
                },
                {
                  title: "Semiconductor Ecosystem Insight Analysis",
                  description: "Connects front-end tech to packaging and global supply chains."
                },
                {
                  title: "Business Model Development",
                  description: "Crafts sustainable strategies using BMC, SWOT, and lifecycle tools."
                },
                {
                  title: "Cross-Functional Leadership",
                  description: "Aligns tech, business, and financial toward strategic execution."
                }
              ].map((item, index) => (
                <div key={index} className="border-t border-[#cedbe8] pt-5">
                  <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4">
                    <p className="text-[#93c5fd] text-sm font-medium">{item.title}</p>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8">Industry Insights</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <a
                href="https://medium.com/@reshal-saba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-[#1a2530] p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#e7edf4]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0d141c" viewBox="0 0 256 256">
                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200Z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">Medium</p>
                  <p className="text-sm text-[#93c5fd] mb-2">Content Creation</p>
                  <p className="text-sm text-white">Published articles on FPGA and Semiconductor.</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@rheeshaalaen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-[#1a2530] p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#e7edf4]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f70000" viewBox="0 0 256 256">
                    <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17Z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">YouTube</p>
                  <p className="text-sm text-[#93c5fd] mb-2">Educational Channel</p>
                  <p className="text-sm text-white">Created educational videos on physical design concepts.</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@rheeshaalaen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 bg-[#1a2530] p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#e7edf4]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1e293b" viewBox="0 0 256 256">
                    <circle cx="128" cy="128" r="96"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">Leadership Insight</p>
                  <p className="text-sm text-[#93c5fd] mb-2">Business Strategy</p>
                  <p className="text-sm text-white">Outstanding business strategist mindset.</p>
                </div>
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-white text-3xl font-bold mb-8">Our Subsidiaries</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <a
                href="https://trailblazerempire.github.io/CapitalCompass/options.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1a2530] p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-4 rounded-full bg-white flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="flex flex-wrap justify-center items-baseline gap-2 mb-3">
                    <p className="font-semibold text-lg text-white">Capital Compass</p>
                    <p className="text-sm text-[#93c5fd]">Financial Consulting</p>
                  </div>
                  <p className="text-sm text-white">Delivering tailored financial solutions for business and personal growth.</p>
                </div>
              </a>

              <a
                href="https://trailblazerempire.github.io/SiliconBridge/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1a2530] p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-4 rounded-full bg-white flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div className="flex flex-wrap justify-center items-baseline gap-2 mb-3">
                    <p className="font-semibold text-lg text-white">Silicon Bridge</p>
                    <p className="text-sm text-[#93c5fd]">Technology Solution</p>
                  </div>
                  <p className="text-sm text-white">Driving innovation with state-of-the-art technology services.</p>
                </div>
              </a>

              <a
                href="https://trailblazerempire.github.io/VisionCraft/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1a2530] p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-4 rounded-full bg-white flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="flex flex-wrap justify-center items-baseline gap-2 mb-3">
                    <p className="font-semibold text-lg text-white">VisionCraft Strategy</p>
                    <p className="text-sm text-[#93c5fd]">Strategic Consulting</p>
                  </div>
                  <p className="text-sm text-white">Empowering businesses with strategic insights and guidance.</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
