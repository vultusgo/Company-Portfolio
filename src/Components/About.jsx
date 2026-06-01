import React, { useEffect, useRef, useState } from "react";
import {
  FiZap,
  FiLayers,
  FiLock,
  FiAward,
  FiPackage,
  FiCpu,
} from "react-icons/fi";
import { MdPsychology } from "react-icons/md";
import { FaTerminal } from "react-icons/fa6";

// Data for statistics cards
const stats = [
  { id: 1, label: "Projects Completed", value: "250+", icon: FiAward },
  { id: 2, label: "Active Products", value: "15+", icon: FiPackage },
  { id: 3, label: "Technologies Used", value: "50+", icon: FaTerminal },
  { id: 4, label: "Future Innovations", value: "∞", icon: MdPsychology },
];

// Data for feature cards
const features = [
  {
    id: 1,
    title: "Innovation",
    description:
      "Continuously building future-ready solutions that push the boundaries of technology.",
    icon: FiZap,
  },
  {
    id: 2,
    title: "Scalability",
    description:
      "Creating products designed for growth and adaptability, ensuring long-term success.",
    icon: FiLayers,
  },
  {
    id: 3,
    title: "Reliability",
    description:
      "Delivering dependable and secure technology that our clients can always trust.",
    icon: FiLock,
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after it's visible
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-amber-50"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-orange-50/30 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-orange-100/40 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Content: Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
          {/* Left Section: Text Content */}
          <div
            className={`flex flex-col space-y-6 ${isVisible ? "animate-in fade-in slide-in-from-left-8 duration-1000" : "opacity-0"}`}
          >
            {/* Section Label */}
            <span className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase inline-block">
              ABOUT VULTUSGO
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black font-serif leading-tight text-gray-900">
              Building Technology That Shapes Tomorrow
            </h2>

            {/* Company Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              VultusGo is a pioneering technology company dedicated to crafting
              intelligent software products, AI-powered solutions, and
              innovative digital systems. We empower organizations to automate
              complex processes, significantly improve operational efficiency,
              and confidently embrace the future of technology.
            </p>

            {/* Mission Statement */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To deliver transformative digital solutions that drive progress,
                foster innovation, and create lasting value for our clients
                worldwide.
              </p>
            </div>

            {/* Vision Statement */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the leading force in intelligent software development,
                recognized for our commitment to excellence, ethical AI, and a
                future where technology serves humanity.
              </p>
            </div>
          </div>

          {/* Right Section: Animated Statistics Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${isVisible ? "animate-in fade-in slide-in-from-right-8 duration-1000 delay-300" : "opacity-0"}`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="relative p-8 bg-white/60 backdrop-blur-xl border border-white rounded-3xl shadow-xl shadow-orange-500/5 hover:shadow-orange-500/15 transition-all duration-300 animate-float group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                <div className="relative z-10 flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shadow-md">
                    <stat.icon size={24} />
                  </div>
                  <p className="text-4xl font-black text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Highlight Section: Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative p-8 bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${isVisible ? "animate-in fade-in zoom-in duration-1000" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150 + 600}ms` }} // Staggered after main content
            >
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shadow-inner group-hover:bg-orange-100 transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              {/* Orange accent on hover */}
              <div className="absolute px-9 bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-b-3xl overflow-hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
