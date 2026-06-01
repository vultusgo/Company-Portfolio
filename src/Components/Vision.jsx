import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZap,
  FiLayers,
  FiLock,
  FiTarget,
  FiTrendingUp,
  FiGlobe,
  FiCpu,
  FiCloud,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";

// Data for the roadmap timeline
const roadmapStages = [
  {
    id: "stage1",
    title: "Present Day",
    desc: "Building intelligent software solutions & innovative technology products.",
    icon: FiCheckCircle,
  },
  {
    id: "stage2",
    title: "Near Future",
    desc: "Advanced AI-powered systems & enhanced automation platforms.",
    icon: FiCpu,
  },
  {
    id: "stage3",
    title: "Growth Phase",
    desc: "Enterprise-grade digital ecosystems & scalable intelligent infrastructures.",
    icon: FiLayers,
  },
  {
    id: "stage4",
    title: "Innovation Era",
    desc: "Smart security technologies & intelligent analytics platforms.",
    icon: FiLock,
  },
  {
    id: "stage5",
    title: "Future Vision",
    desc: "Connected digital ecosystems & next-generation intelligent technologies.",
    icon: FiGlobe,
  },
];

// Data for future focus cards
const futureFocusCards = [
  {
    title: "Innovation",
    icon: FiZap,
    desc: "Continuously pushing boundaries to create groundbreaking solutions.",
  },
  {
    title: "Intelligence",
    icon: FiCpu,
    desc: "Leveraging AI and ML to build smarter, more adaptive systems.",
  },
  {
    title: "Scalability",
    icon: FiLayers,
    desc: "Designing architectures that grow seamlessly with our clients' needs.",
  },
  {
    title: "Sustainability",
    icon: FiActivity,
    desc: "Committed to ethical development and long-term environmental responsibility.",
  },
];

const Vision = () => {
  const [hoveredStage, setHoveredStage] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
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
      id="vision"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-orange-50/30 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-orange-100/40 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase mb-4 inline-block"
          >
            OUR VISION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-serif text-gray-900 leading-tight mb-6"
          >
            Engineering The Future Of Intelligent Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            VultusGo aims to develop innovative technologies that simplify
            operations, enhance security, improve automation, and create smarter
            digital experiences for organizations worldwide.
          </motion.p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative flex flex-col items-center justify-center py-16 mb-24">
          {/* Horizontal Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent w-full max-w-4xl"
            style={{ transformOrigin: "left" }}
          />

          <div className="relative flex justify-between w-full max-w-5xl">
            {roadmapStages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                onHoverStart={() => setHoveredStage(stage.id)}
                onHoverEnd={() => setHoveredStage(null)}
                className={`relative w-48 p-6 bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-xl hover:shadow-orange-500/15 transition-all duration-300 cursor-pointer group ${
                  i % 2 === 0 ? "mt-16" : "mb-16"
                }`}
              >
                <div
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    hoveredStage === stage.id
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/40"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  <stage.icon size={24} />
                </div>
                <h3 className="text-lg font-black text-gray-900 mt-4 mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stage.desc}
                </p>
                {/* Glowing dot on the line */}
                <div
                  className={`absolute ${
                    i % 2 === 0 ? "-top-10" : "bottom-0 translate-y-10"
                  } left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full animate-pulse`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative p-10 lg:p-16 bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-2xl shadow-orange-500/10 text-center mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-[2.5rem]" />
          <h3 className="relative z-10 text-4xl md:text-5xl font-black font-serif text-gray-900 leading-tight mb-6">
            Building Tomorrow, Starting Today
          </h3>
          <p className="relative z-10 max-w-4xl mx-auto text-xl text-gray-700 leading-relaxed">
            At VultusGo, our vision is to be the architects of a smarter future.
            We are committed to relentless innovation, leveraging cutting-edge
            technology to craft intelligent solutions that not only meet the
            demands of today but also anticipate and adapt to the challenges of
            tomorrow. We believe in creating impactful digital ecosystems that
            empower businesses and enrich lives globally.
          </p>
        </motion.div>

        {/* Future Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureFocusCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-white border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <card.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-orange-500/5 rounded-tl-[3rem] group-hover:bg-orange-500 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
