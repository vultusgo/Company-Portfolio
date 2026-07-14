import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const faqData = [
  {
    q: "What does Vultus Go do?",
    a: "Vultus Go is an AI and technology company that develops intelligent software solutions including AI-powered products, web and mobile applications, enterprise software, cloud solutions, and automation systems for businesses, educational institutions, and government organizations.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve a wide range of industries including education, government, healthcare, manufacturing, retail, finance, and enterprise organizations. Our solutions are designed to be adaptable and scalable across sectors.",
  },
  {
    q: "Can your products be customized?",
    a: "Yes. We understand every organization has unique requirements. Our solutions are built on flexible architectures that can be tailored to meet specific operational, security, and compliance needs.",
  },
  {
    q: "What is your flagship product?",
    a: "Our flagship product is an AI-powered Facial Recognition Attendance System. It combines computer vision, edge computing, and cloud intelligence for accurate, fraud-proof attendance tracking with features like geo-fencing, offline sync, and automated payroll integration.",
  },
  {
    q: "How do I request a demo?",
    a: "You can request a demo through the contact section on this page. Simply fill out the form with your details, and our team will get in touch within 24 hours to schedule a personalized demonstration.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Absolutely. We provide comprehensive support including system monitoring, regular updates, maintenance services, and dedicated account management to ensure your solutions continue to perform optimally.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      aria-label="Frequently Asked Questions"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
              FAQ
            </span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-surface-900 leading-tight mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Questions? We Have Answers.
          </h2>
          <p className={`text-lg text-surface-500 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Everything you need to know about Vultus Go and our solutions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`border border-surface-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-brand-200 bg-brand-50/30 shadow-sm" : "hover:border-surface-200"
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
            >
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className={`text-base font-semibold pr-4 transition-colors ${
                  openIndex === i ? "text-brand-600" : "text-surface-900"
                }`}>
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                  openIndex === i ? "bg-brand-500 text-white rotate-180" : "bg-surface-100 text-surface-500"
                }`}>
                  {openIndex === i ? <FiMinus size={16} /> : <FiPlus size={16} />}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <div className="h-px bg-gradient-to-r from-brand-200 to-transparent mb-4" />
                  <p className="text-sm text-surface-500 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;