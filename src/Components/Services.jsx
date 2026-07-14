import React from "react";
import {
  FiCpu, FiGlobe, FiSmartphone, FiServer,
  FiCloud, FiSettings, FiLayout, FiRefreshCw,
  FiArrowRight,
} from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  { icon: FiCpu, title: "AI Solutions", desc: "Intelligent automation, computer vision, NLP, and predictive analytics powered by advanced machine learning." },
  { icon: FiGlobe, title: "Web Development", desc: "Modern, scalable web applications built with React, Next.js, and enterprise-grade backend systems." },
  { icon: FiSmartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences." },
  { icon: FiServer, title: "Enterprise Software", desc: "Custom enterprise platforms, ERP integrations, and business process automation at scale." },
  { icon: FiCloud, title: "Cloud Solutions", desc: "Cloud-native architecture, migration, and infrastructure management on AWS, Azure, and GCP." },
  { icon: FiSettings, title: "Automation", desc: "Workflow automation, RPA, and intelligent process optimization to eliminate manual effort." },
  { icon: FiLayout, title: "UI/UX Design", desc: "Human-centered design, rapid prototyping, and premium visual interfaces for digital products." },
  { icon: FiRefreshCw, title: "Digital Transformation", desc: "End-to-end digital strategy, legacy modernization, and technology consulting for enterprises." },
];

const Services = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      aria-label="Vultus Go Services"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
              Our Services
            </span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            End-to-End Technology Solutions
          </h2>
          <p className={`text-lg text-surface-500 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            From AI-powered products to enterprise platforms, we deliver modern
            solutions that drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative p-8 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                <service.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{service.title}</h3>
              <p className="text-sm text-surface-500 leading-relaxed mb-5">{service.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                Learn More <FiArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-surface-200 hover:border-brand-300 text-surface-700 hover:text-brand-600 font-semibold rounded-xl transition-all hover:-translate-y-0.5"
          >
            View All Services
            <FiArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;