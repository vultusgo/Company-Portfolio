import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiArrowDown, FiGlobe } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ============================================================
   REUSABLE SERVICE PAGE LAYOUT
   Each service page uses this layout with its own data.
   ============================================================ */

export const SectionLabel = ({ text, isVisible, delay = 0 }) => (
  <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
    <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
      {text}
    </span>
  </div>
);

export const SectionHeading = ({ children, isVisible, delay = 100 }) => (
  <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
    {children}
  </h2>
);

export const SectionSubtext = ({ children, isVisible, delay = 200 }) => (
  <p className={`text-lg lg:text-xl text-surface-500 leading-relaxed max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
    {children}
  </p>
);

export const CtaButton = ({ to, children, primary = true }) => (
  <Link
    to={to}
    className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-2xl transition-all hover:-translate-y-0.5 ${
      primary
        ? "bg-brand-500 hover:bg-brand-600 text-white shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30"
        : "border-2 border-surface-200 hover:border-brand-300 text-surface-700 hover:text-brand-600 bg-white"
    }`}
  >
    {children}
    <FiArrowRight size={18} />
  </Link>
);

/* ============================================================
   HERO
   ============================================================ */
export const ServiceHero = ({ title, description, breadcrumbParent, icon: Icon }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      aria-label={title}
      className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-white pt-28 pb-20 lg:pt-36"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-brand-100/30 via-brand-50/10 to-transparent blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/5 via-black/[0.02] to-transparent blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <nav aria-label="Breadcrumb" className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <ol className="flex items-center gap-2 text-sm text-surface-400">
            <li><Link to="/" className="hover:text-brand-500 transition-colors">Home</Link></li>
            <li><span className="text-surface-300">/</span></li>
            <li><Link to="/services" className="hover:text-brand-500 transition-colors">Services</Link></li>
            <li><span className="text-surface-300">/</span></li>
            <li className="text-surface-600 font-medium" aria-current="page">{breadcrumbParent}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
                Our Services
              </span>
            </div>
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-black mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {title}
            </h1>
            <p className={`text-lg lg:text-xl text-surface-500 leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {description}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <CtaButton to="/#contact">Get Started</CtaButton>
              <CtaButton to="/#contact" primary={false}>Contact Us</CtaButton>
            </div>
          </div>

          <div className={`relative flex items-center justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
            <div className="relative w-full max-w-[380px] aspect-square">
              <div className="absolute inset-0 border border-surface-200 rounded-full animate-spin-slower opacity-30" />
              <div className="absolute inset-10 border border-dashed border-brand-200 rounded-full animate-spin-slow opacity-40" />
              <div className="absolute inset-20 border border-surface-100 rounded-full animate-spin-slower opacity-20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-36 lg:h-36 bg-brand-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-500/20 animate-pulse-glow">
                {Icon && <Icon size={48} className="text-white" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   OVERVIEW SECTION
   ============================================================ */
export const OverviewSection = ({ title, paragraphs }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} aria-label="Overview" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/40 blur-[120px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionLabel text="Overview" isVisible={isVisible} />
          <SectionHeading isVisible={isVisible}>{title}</SectionHeading>
          <div className={`space-y-5 text-lg text-surface-500 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   WHAT WE OFFER
   ============================================================ */
export const WhatWeOffer = ({ items, icon: Icon }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section ref={ref} aria-label="What We Offer" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <SectionLabel text="What We Offer" isVisible={isVisible} />
          <SectionHeading isVisible={isVisible}>Our Services</SectionHeading>
          <SectionSubtext isVisible={isVisible}>Comprehensive solutions tailored to your business needs.</SectionSubtext>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group p-6 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 60}ms` : "0ms", transitionProperty: "opacity, transform" }}
            >
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                <FiCheck size={18} className="text-brand-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-bold text-black">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
const defaultReasons = [
  { title: "Experienced Team", desc: "Senior engineers, AI researchers, and architects with deep industry expertise across multiple domains." },
  { title: "Modern Technologies", desc: "We use the latest frameworks, languages, and tools to build future-proof, maintainable solutions." },
  { title: "Secure Solutions", desc: "Enterprise-grade security with zero-trust architecture and compliance-ready infrastructure." },
  { title: "Scalable Architecture", desc: "Systems designed to grow seamlessly from prototype to enterprise-scale deployments." },
  { title: "Transparent Communication", desc: "Clear timelines, open channels, and honest feedback at every development stage." },
  { title: "Long-Term Support", desc: "Dedicated support teams with proactive monitoring and guaranteed SLAs." },
];

export const WhyChooseUs = ({ reasons = defaultReasons }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} aria-label="Why Choose Us" className="relative w-full py-24 lg:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-500/10 to-transparent blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-500/10 to-transparent blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-400 uppercase mb-6">
              Why Choose Us
            </span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Why Vultus Go?
          </h2>
          <p className={`text-lg text-surface-400 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            We combine deep expertise with a commitment to quality, security, and partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <div
              key={i}
              className={`group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
            >
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-surface-400 leading-relaxed">{item.desc}</p>
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   PROCESS SECTION
   ============================================================ */
const defaultSteps = [
  "Discovery", "Planning", "Design", "Development", "Testing", "Deployment", "Support"
];

export const ProcessSection = ({ steps = defaultSteps }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} aria-label="Our Process" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <SectionLabel text="Our Process" isVisible={isVisible} />
          <SectionHeading isVisible={isVisible}>How We Work</SectionHeading>
          <SectionSubtext isVisible={isVisible}>A structured approach that ensures quality, transparency, and timely delivery.</SectionSubtext>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col lg:flex-row items-start gap-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="absolute left-8 lg:left-1/2 w-5 h-5 bg-white border-4 border-brand-500 rounded-full -translate-x-1/2 z-10 mt-2" />
                <div className={`pl-16 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:ml-auto"}`}>
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl mb-3">
                    <span className="text-sm font-bold text-brand-600">0{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   TECHNOLOGIES SECTION
   ============================================================ */
export const TechnologiesSection = ({ techs }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} aria-label="Technologies" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <SectionLabel text="Technologies" isVisible={isVisible} />
          <SectionHeading isVisible={isVisible}>Technologies We Use</SectionHeading>
          <SectionSubtext isVisible={isVisible}>Modern tools and frameworks to build robust, scalable solutions.</SectionSubtext>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techs.map((tech, i) => (
            <div
              key={i}
              className={`px-6 py-3 bg-white border border-surface-200 rounded-xl text-sm font-semibold text-surface-700 hover:border-brand-300 hover:text-brand-600 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${100 + i * 50}ms` : "0ms", transitionProperty: "opacity, transform" }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   FAQ SECTION
   ============================================================ */
export const ServiceFAQ = ({ faqs }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section ref={ref} aria-label="FAQ" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <SectionLabel text="FAQ" isVisible={isVisible} />
          <SectionHeading isVisible={isVisible}>Frequently Asked Questions</SectionHeading>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-surface-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-brand-200 bg-brand-50/30 shadow-sm" : "hover:border-surface-200"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className={`text-base font-semibold pr-4 transition-colors ${openIndex === i ? "text-brand-600" : "text-black"}`}>{faq.q}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${openIndex === i ? "bg-brand-500 text-white" : "bg-surface-100 text-surface-500"}`}>
                  <FiArrowDown size={16} className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-5 pt-0">
                  <div className="h-px bg-gradient-to-r from-brand-200 to-transparent mb-4" />
                  <p className="text-sm text-surface-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   RJ TECHFORCE SECTION
   ============================================================ */
export const RJTechForceSection = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} aria-label="RJ TechForce — Web Development Division" className="relative w-full py-24 lg:py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-500/10 to-transparent blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-500/10 to-transparent blur-[100px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-400 uppercase mb-6">
              Our Web Development Division
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Meet <span className="text-brand-400">RJ TechForce</span>
            </h2>
            <p className="text-lg text-surface-400 leading-relaxed mb-6">
              <span className="text-white font-semibold">RJ TechForce</span> is the dedicated web development division of <span className="text-brand-400 font-semibold">Vultus Go</span>, specializing in designing and developing modern digital solutions for businesses, startups, educational institutions, and government organizations.
            </p>
            <p className="text-base text-surface-400 leading-relaxed mb-8">
              Explore our portfolio of websites, web applications, and digital platforms — crafted with clean code, modern design, and scalable architecture.
            </p>
            <a
              href="https://rjtechforce.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              View Site
              <FiArrowRight size={18} />
            </a>
          </div>

          {/* Right Column — Browser Preview */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
            <a
              href="https://rjtechforce.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              aria-label="Visit RJ TechForce website"
            >
              <div className="relative bg-surface-900 border border-surface-700 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-900 border-b border-surface-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-surface-600" />
                    <div className="w-3 h-3 rounded-full bg-surface-500" />
                    <div className="w-3 h-3 rounded-full bg-surface-400" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="px-3 py-1 bg-black/40 rounded-md text-[10px] text-surface-500 text-center truncate">
                      rjtechforce.vercel.app
                    </div>
                  </div>
                </div>

                {/* Preview Content */}
                <div className="relative aspect-video bg-gradient-to-br from-surface-800 to-black flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="relative z-10 text-center px-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-brand-500/10 rounded-2xl flex items-center justify-center">
                      <FiGlobe size={32} className="text-brand-400" />
                    </div>
                    <p className="text-sm font-semibold text-white mb-1">RJ TechForce</p>
                    <p className="text-xs text-surface-400">Web Development Portfolio</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to visit <FiArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   FINAL CTA
   ============================================================ */
export const ServiceCTA = ({ title = "Ready to Get Started?", subtitle = "Let's discuss your project and build something extraordinary together." }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} aria-label="Get in touch" className="relative w-full py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`relative p-10 lg:p-16 bg-black rounded-[2.5rem] overflow-hidden text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">{title}</h2>
            <p className="max-w-2xl mx-auto text-lg text-surface-400 leading-relaxed mb-10">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CtaButton to="/#contact">Start a Project</CtaButton>
              <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5">
                Request a Consultation <FiArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};