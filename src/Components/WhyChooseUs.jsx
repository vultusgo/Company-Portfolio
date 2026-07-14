import React from "react";
import { FiCpu, FiShield, FiLayers, FiAward, FiHeadphones, FiTarget } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const strengths = [
  { icon: FiCpu, title: "AI Expertise", desc: "Deep experience in machine learning, computer vision, and intelligent automation systems." },
  { icon: FiShield, title: "Secure & Scalable", desc: "Enterprise-grade security with zero-trust architecture and scalable cloud infrastructure." },
  { icon: FiLayers, title: "Modern Technologies", desc: "We use cutting-edge frameworks, languages, and tools to build future-ready solutions." },
  { icon: FiAward, title: "Enterprise Quality", desc: "Rigorous testing, CI/CD pipelines, and quality assurance processes at every stage." },
  { icon: FiHeadphones, title: "Reliable Support", desc: "Dedicated support teams with guaranteed SLAs and proactive system monitoring." },
  { icon: FiTarget, title: "Client-Focused", desc: "We partner closely with clients to understand needs and deliver tailored solutions." },
];

const WhyChooseUs = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="why-choose-us"
      ref={ref}
      aria-label="Why Choose Vultus Go"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-50/50 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-brand-50/30 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
              Why Choose Us
            </span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Built Different. Built Better.
          </h2>
          <p className={`text-lg text-surface-500 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            We combine deep technical expertise with a commitment to quality,
            security, and client success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, i) => (
            <div
              key={i}
              className={`group relative p-8 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                <item.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
              <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
              <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;