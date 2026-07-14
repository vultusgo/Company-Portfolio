import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const About = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About Vultus Go"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
              About Vultus Go
            </span>
          </div>

          {/* Heading */}
          <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-surface-900 leading-tight mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            A Technology Company
            <br />
            <span className="text-surface-400">Built for the AI Era</span>
          </h2>

          {/* Brief Description */}
          <p className={`text-lg lg:text-xl text-surface-500 leading-relaxed max-w-3xl mx-auto mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Vultus Go is an AI and technology company that develops intelligent
            software solutions for businesses, educational institutions,
            startups, enterprises, and government organizations worldwide.
          </p>

          {/* CTA */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-900 hover:bg-surface-800 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Learn More About Us
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
