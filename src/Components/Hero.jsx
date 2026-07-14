import React from "react";
import { FiArrowRight, FiCheck, FiCpu, FiZap, FiShield } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Vultus Go — AI & Software Solutions"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-100/40 via-brand-50/20 to-transparent blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-black/5 via-black/[0.02] to-transparent blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 border border-brand-100 rounded-full w-fit animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase">
                AI-Powered Technology Company
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] text-black animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Build Smarter.
              <br />
              <span className="text-brand-500">
                Scale Faster.
              </span>
            </h1>

            <p className="max-w-xl text-lg lg:text-xl text-surface-500 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Vultus Go delivers AI-powered software, intelligent automation, and
              enterprise-grade digital solutions that help organizations
              automate, secure, and grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-black hover:bg-surface-900 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <FiArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <a
                href="/contact"
                className="px-8 py-4 bg-white border-2 border-surface-200 hover:border-brand-300 text-surface-700 hover:text-brand-600 font-semibold rounded-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Contact Us
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-surface-100 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: FiCpu, label: "AI Expertise" },
                { icon: FiShield, label: "Enterprise Security" },
                { icon: FiZap, label: "99.9% Uptime" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center">
                    <item.icon size={16} className="text-brand-500" />
                  </div>
                  <span className="text-sm font-medium text-surface-600">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex items-center justify-center animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 border border-surface-200 rounded-full animate-spin-slower opacity-30" />
              <div className="absolute inset-8 border border-dashed border-brand-200 rounded-full animate-spin-slow opacity-40" />
              <div className="absolute inset-16 border border-surface-100 rounded-full animate-spin-slower opacity-20" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40">
                <div className="w-full h-full bg-brand-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-500/25 animate-pulse-glow">
                  <FiCpu className="text-white" size={48} />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-400 rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-brand-300 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              </div>

              <div className="absolute top-4 right-4 p-4 bg-white/80 backdrop-blur-xl border border-surface-100 rounded-2xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <FiZap size={20} className="text-brand-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider">AI Core</p>
                    <p className="text-sm font-bold text-black">Active</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-0 p-4 bg-white/80 backdrop-blur-xl border border-surface-100 rounded-2xl shadow-lg animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <FiShield size={20} className="text-brand-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider">Security</p>
                    <p className="text-sm font-bold text-black">Enterprise</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 p-3 bg-white/80 backdrop-blur-xl border border-surface-100 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <FiCheck size={14} className="text-brand-500" />
                  <span className="text-xs font-bold text-black">250+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-surface-300 to-transparent" />
        <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-surface-400 animate-scroll-indicator">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;