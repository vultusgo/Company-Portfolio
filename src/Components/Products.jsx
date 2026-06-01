import React, { useState } from "react";
import {
  FiChevronRight,
  FiCheck,
  FiSettings,
  FiZap,
  FiGlobe,
  FiSend,
  FiClock,
  FiShield,
  FiLock,
  FiTrendingUp,
  FiSearch,
  FiCode,
  FiExternalLink,
} from "react-icons/fi";

const products = [
  {
    id: "attendance",
    name: "Vultus Attendance",
    icon: FiClock,
    shortDesc: "AI-powered biometric and remote attendance tracking ecosystem.",
    status: "Live",
    color: "orange",
    link: "https://fca-portfolio.vercel.app/#hero",
    details: {
      overview: "A comprehensive solution for modern workforce management.",
      features: [
        "Face Recognition",
        "Geo-fencing",
        "Offline Sync",
        "Automated Payroll",
      ],
      benefits: [
        "Eliminate Buddy Punching",
        "99% Accuracy",
        "Instant Reporting",
      ],
      tech: ["TensorFlow", "Node.js", "Azure Cloud"],
      industries: ["Manufacturing", "Corporate", "Education"],
    },
  },
  {
    id: "identity",
    name: "Vultus Identity",
    icon: FiShield,
    shortDesc:
      "Secure digital identity verification and authentication system.",
    status: "Live",
    color: "orange",
    details: {
      overview:
        "Zero-trust identity management for digital-first organizations.",
      features: [
        "Multi-factor Auth",
        "KYC Automation",
        "Blockchain Identity",
        "Liveness Detection",
      ],
      benefits: ["Reduced Fraud", "Faster Onboarding", "Global Compliance"],
      tech: ["WebAuthn", "Ethereum", "Python AI"],
      industries: ["Fintech", "Healthcare", "E-commerce"],
    },
  },
  {
    id: "security",
    name: "Vultus Security",
    icon: FiLock,
    shortDesc: "Intelligent threat detection and cybersecurity automation.",
    status: "Beta",
    color: "orange",
    details: {
      overview: "Proactive defense systems powered by behavioral AI.",
      features: [
        "Intrusion Detection",
        "Auto-remediation",
        "Vulnerability Scanning",
        "Log Analysis",
      ],
      benefits: [
        "Real-time Defense",
        "Automated Compliance",
        "Reduced IT Overhead",
      ],
      tech: ["Rust", "Kubernetes", "ELK Stack"],
      industries: ["GovTech", "Banking", "Critical Infrastructure"],
    },
  },
  {
    id: "analytics",
    name: "Vultus Analytics",
    icon: FiTrendingUp,
    shortDesc: "Predictive data insights and business intelligence engine.",
    status: "Beta",
    color: "orange",
    details: {
      overview: "Transforming raw data into actionable strategic intelligence.",
      features: [
        "Predictive Modeling",
        "NLP Queries",
        "Visual Dashboards",
        "Data Mining",
      ],
      benefits: [
        "Data-driven Growth",
        "Inventory Optimization",
        "Churn Prediction",
      ],
      tech: ["PyTorch", "Snowflake", "React Flow"],
      industries: ["Retail", "Logistics", "Marketing"],
    },
  },
  {
    id: "innovation",
    name: "Future Lab",
    icon: FiSearch,
    shortDesc: "Where next-generation digital innovations are conceptualized.",
    status: "Coming Soon",
    color: "orange",
    details: {
      overview: "Exploring the intersections of Quantum Computing and AI.",
      features: [
        "Quantum Algorithms",
        "Edge AI",
        "Neural Interfaces",
        "Digital Twins",
      ],
      benefits: ["Early Tech Access", "Strategic R&D", "Market Leadership"],
      tech: ["Q#", "Cuda", "Verilog"],
      industries: ["Aerospace", "Pharma", "Energy"],
    },
  },
];
const timelineSteps = [
  { name: "Idea", icon: FiZap, desc: "Conceptualization & Strategy" },
  { name: "Development", icon: FiCode, desc: "Agile Engineering" },
  { name: "Testing", icon: FiCheck, desc: "QA & Stress Testing" },
  { name: "Deployment", icon: FiSend, desc: "Global Launch" },
  { name: "Innovation", icon: FiZap, desc: "Continuous Evolution" },
];

const Products = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const selectedProduct = products.find((p) => p.id === expandedId);

  return (
    <section
      id="products"
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col space-y-4 mb-16 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase">
            OUR PRODUCTS
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-serif text-gray-900 leading-tight">
            Technology Built For Real-World Impact
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            VultusGo develops intelligent software products, AI-powered
            solutions, and automation systems designed to solve real-world
            challenges through continuous digital innovation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => toggleExpand(product.id)}
              className={`group relative p-8 bg-white/60 backdrop-blur-xl border-2 transition-all duration-500 cursor-pointer rounded-3xl ${
                expandedId === product.id
                  ? "border-orange-500 shadow-2xl shadow-orange-500/10 -translate-y-2"
                  : "border-gray-50 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${expandedId === product.id ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white"}`}
                >
                  <product.icon size={28} />
                </div>
                <span
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${product.status === "Live" ? "bg-green-100 text-green-700" : product.status === "Beta" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}
                >
                  {product.status}
                </span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {product.shortDesc}
              </p>
              <div className="flex items-center text-orange-600 font-bold text-sm">
                {expandedId === product.id
                  ? "Close Details"
                  : "Explore Ecosystem"}
                <FiChevronRight
                  size={16}
                  className={`ml-1 transition-transform ${expandedId === product.id ? "rotate-90" : "group-hover:translate-x-1"}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Showcase Panel */}
        <div
          className={`grid transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${expandedId ? "grid-rows-[1fr] opacity-100 mb-24" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            {selectedProduct && (
              <div className="bg-gray-900 text-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <selectedProduct.icon size={200} />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-orange-500 font-black uppercase tracking-[0.2em] text-xs mb-4">
                        Product Overview
                      </h4>
                      <p className="text-3xl font-bold leading-tight">
                        {selectedProduct.details.overview}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">
                          Key Features
                        </h5>
                        <ul className="space-y-3">
                          {selectedProduct.details.features.map((f, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-gray-300"
                            >
                              <FiCheck size={14} className="text-orange-500" />{" "}
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">
                          Core Benefits
                        </h5>
                        <ul className="space-y-3">
                          {selectedProduct.details.benefits.map((b, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-gray-300"
                            >
                              <FiZap size={14} className="text-orange-500" />{" "}
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                      <h5 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6">
                        Technology Stack
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.details.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-gray-800 rounded-xl text-xs font-bold border border-gray-700 flex items-center gap-2"
                          >
                            <FiSettings size={12} className="text-orange-500" />{" "}
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">
                        Target Industries
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.details.industries.map((ind, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-[10px] font-black uppercase tracking-tighter border border-orange-500/20"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={selectedProduct.link}
                      target="_blank"
                      className="w-full py-4 bg-orange-500 hover:bg-orange-600 transition-colors rounded-2xl font-black text-white flex items-center justify-center gap-2 group"
                    >
                      Request Access{" "}
                      <FiExternalLink
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technology Timeline */}
        <div className="relative pt-16 border-t border-gray-100">
          <div className="flex flex-col items-center mb-12 text-center">
            <h4 className="text-xs font-black text-orange-600 uppercase tracking-[0.3em] mb-2">
              Lifecycle
            </h4>
            <p className="text-2xl font-bold text-gray-900 italic">
              Continuous Innovation Engine
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent hidden md:block" />
            {timelineSteps.map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-4 flex-1 group"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-white border border-gray-100 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 group-hover:border-orange-500 group-hover:shadow-orange-500/10 group-hover:-translate-y-1">
                    <step.icon
                      size={32}
                      className="text-gray-400 group-hover:text-orange-500 transition-colors"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white text-[10px] font-bold rounded-lg flex items-center justify-center">
                    0{i + 1}
                  </div>
                </div>

                <div className="text-left md:text-center">
                  <h5 className="font-black text-gray-900 uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                    {step.name}
                  </h5>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                    {step.desc}
                  </p>
                </div>

                {i < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-2 transform translate-x-1/2">
                    <FiChevronRight size={16} className="text-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
