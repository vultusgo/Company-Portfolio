import React from "react";
import { FiArrowRight, FiCpu, FiLayers, FiShare2, FiZap } from "react-icons/fi";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Vultus Go — Pioneering Future Intelligence"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-white pt-36 lg:pt-20"
    >
      {/* Background Aesthetic Elements */}
      <div className="absolute inset-0 z-0">
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Soft Orange Glows */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-orange-100/40 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-50/30 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Section: Content */}
        <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase">
              Innovation • Intelligence • Technology
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl  font-black font-serif tracking-tighter leading-[0.9] text-gray-900">
            Vultus<span className="text-orange-500">Go</span>
            <span className="block text-3xl md:text-4xl mt-4 text-gray-400 font-sans tracking-normal font-medium">
              Pioneering Future Intelligence.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="max-w-xl text-lg text-gray-600 leading-relaxed font-medium">
            Vultus Go develops innovative software products and intelligent
            digital solutions that help organizations automate processes,
            improve efficiency, and embrace the future of technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#products"
              aria-label="Explore Vultus Go products"
              className="group relative px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl overflow-hidden transition-all shadow-2xl shadow-gray-200 cursor-pointer text-center"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Explore Products{" "}
                <FiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity text-center min-w-full" />
            </a>

            <a
              href="#contact"
              aria-label="Contact Vultus Go"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:from-black hover:to-black duration-1000 cursor-pointer transition-all active:scale-95 text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
            {[
              { label: "Future Ready", icon: FiZap },
              { label: "Scalable Solutions", icon: FiLayers },
              { label: "Innovation Driven", icon: IoMdArrowDropupCircle },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <item.icon
                  size={16}
                  className="text-orange-500 group-hover:scale-110 transition-transform"
                />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Futuristic Visual */}
        <div className="relative flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-200 mt-12 lg:mt-0" aria-hidden="true">
          <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[400px] lg:max-w-[500px]">
            {/* Central Animated Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/10 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl shadow-[0_0_40px_rgba(249,115,22,0.5)] flex items-center justify-center rotate-45 animate-spin-slow">
                  <FiCpu className="text-white -rotate-45" size={32} />
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Cards */}

            {/* Card 1: AI Systems */}
            <div className="absolute top-0 right-0 p-6 bg-white/60 backdrop-blur-xl border border-white rounded-3xl shadow-xl shadow-orange-500/5 animate-float flex flex-col gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                <FiZap size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-tighter">
                  System Status
                </p>
                <p className="font-black text-gray-900">AI Core Active</p>
              </div>
            </div>

            {/* Card 2: Innovation Node */}
            <div className="absolute bottom-10 left-0 p-5 bg-white/80 backdrop-blur-2xl border border-white rounded-3xl shadow-2xl shadow-gray-200 animate-float-delayed flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-4 border-orange-500 border-t-transparent animate-spin" />
                <FiShare2
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500"
                  size={18}
                />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase">
                  Global Reach
                </p>
                <p className="font-black text-gray-900 italic">99.9% Up-time</p>
              </div>
            </div>

            {/* Card 3: Modern Tech Stack */}
            <div className="absolute top-1/4 -left-10 p-4 bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg animate-float flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">JS</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">AI</span>
                </div>
              </div>
              <span className="text-xs font-black text-gray-700">
                Tech Stack
              </span>
            </div>

            {/* Background Geometric Elements */}
            <div className="absolute inset-0 border-[1px] border-dashed border-gray-200 rounded-full animate-spin-slow opacity-50" />
            <div className="absolute inset-10 border-[1px] border-dashed border-orange-100 rounded-full animate-spin-slow [animation-direction:reverse] opacity-50" />

            {/* Connected Nodes (Simplified via small circles) */}
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-orange-200 rounded-full" />
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;

/**
 * NOTE: Added custom animations in index.css:
 * animate-float, animate-float-delayed, animate-pulse-slow
 */
