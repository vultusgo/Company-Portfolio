import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FinalCTA = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="final-cta"
      ref={ref}
      aria-label="Get started with Vultus Go"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`relative p-10 lg:p-16 bg-black rounded-[2.5rem] overflow-hidden text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Let's Build Intelligent
              <br />
              <span className="text-brand-400">
                Digital Solutions Together
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-surface-400 leading-relaxed mb-10">
              Partner with Vultus Go to transform your ideas into powerful,
              enterprise-grade technology solutions. Our team is ready to
              discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5"
              >
                Contact Us
                <FiArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;