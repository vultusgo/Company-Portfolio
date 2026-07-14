import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiGlobe, FiSmartphone, FiServer, FiCpu, FiLayout, FiRefreshCw, FiTool } from "react-icons/fi";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SectionLabel, SectionHeading, SectionSubtext, ServiceCTA } from "../ServiceLayout";

const serviceList = [
  { icon: FiGlobe, title: "Web Development", desc: "Modern, high-performance websites and web applications built with cutting-edge technologies.", path: "/services/web-development" },
  { icon: FiSmartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications for iOS and Android.", path: "/services/mobile-app-development" },
  { icon: FiServer, title: "Custom Software Development", desc: "Tailored enterprise software, ERP, CRM, and workflow automation solutions.", path: "/services/custom-software-development" },
  { icon: FiCpu, title: "AI & Machine Learning", desc: "Intelligent AI solutions including computer vision, NLP, chatbots, and predictive analytics.", path: "/services/ai-machine-learning" },
  { icon: FiLayout, title: "UI/UX Design", desc: "User-centered design from research and wireframing to polished prototypes and design systems.", path: "/services/ui-ux-design" },
  { icon: FiRefreshCw, title: "Digital Transformation", desc: "End-to-end digital strategy, legacy modernization, and business process digitization.", path: "/services/digital-transformation" },
  { icon: FiTool, title: "Maintenance & Support", desc: "Ongoing maintenance, security updates, performance optimization, and technical support.", path: "/services/maintenance-support" },
];

const ServicesOverview = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <>
      {/* Hero */}
      <section aria-label="Our Services" className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-white pt-28 lg:pt-36">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-brand-100/30 via-brand-50/10 to-transparent blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/5 via-black/[0.02] to-transparent blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-surface-400">
              <li><Link to="/" className="hover:text-brand-500 transition-colors">Home</Link></li>
              <li><span className="text-surface-300">/</span></li>
              <li className="text-surface-600 font-medium" aria-current="page">Services</li>
            </ol>
          </nav>
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
              Our Services
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-black mb-8">
              Comprehensive Technology
              <br />
              <span className="text-brand-500">Solutions for Your Business</span>
            </h1>
            <p className="text-lg lg:text-xl text-surface-500 leading-relaxed max-w-2xl mb-10">
              From AI-powered products to enterprise software, we deliver end-to-end technology
              solutions that drive innovation, efficiency, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} aria-label="All Services" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/40 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="What We Do" isVisible={isVisible} />
            <SectionHeading isVisible={isVisible}>Explore Our Services</SectionHeading>
            <SectionSubtext isVisible={isVisible}>Each service is backed by deep expertise, modern technology, and a commitment to quality.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                className={`group p-8 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA title="Not Sure Which Service You Need?" subtitle="Contact us and we'll help identify the right solution for your business requirements." />
    </>
  );
};

export default ServicesOverview;