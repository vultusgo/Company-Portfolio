import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCpu,
  FiCloud,
  FiShield,
  FiShare2,
  FiEye,
  FiSettings,
  FiBarChart2,
  FiZap,
  FiLayers,
  FiLock,
  FiActivity,
} from "react-icons/fi";
import { MdPsychology } from "react-icons/md";

const techNodes = [
  {
    id: 1,
    name: "Artificial Intelligence",
    icon: FiCpu,
    desc: "Advanced neural networks and cognitive computing.",
  },
  {
    id: 2,
    name: "Machine Learning",
    icon: MdPsychology,
    desc: "Predictive modeling and intelligent pattern recognition.",
  },
  {
    id: 3,
    name: "Computer Vision",
    icon: FiEye,
    desc: "High-precision image processing and spatial analysis.",
  },
  {
    id: 4,
    name: "Cloud Infrastructure",
    icon: FiCloud,
    desc: "Scalable, high-availability distributed systems.",
  },
  {
    id: 5,
    name: "Automation Systems",
    icon: FiSettings,
    desc: "Seamless robotic process automation and workflows.",
  },
  {
    id: 6,
    name: "Data Analytics",
    icon: FiBarChart2,
    desc: "Real-time big data processing and strategic insights.",
  },
  {
    id: 7,
    name: "Security Frameworks",
    icon: FiShield,
    desc: "Zero-trust architecture and advanced encryption.",
  },
  {
    id: 8,
    name: "API Integrations",
    icon: FiShare2,
    desc: "Enterprise-grade connectivity and ecosystem growth.",
  },
];

const techCards = [
  {
    title: "AI & Intelligence",
    icon: FiCpu,
    desc: "Building brain-like software that learns and adapts to complex business challenges.",
  },
  {
    title: "Cloud & Scalability",
    icon: FiLayers,
    desc: "Architecting cloud-native solutions designed to handle infinite growth and high demand.",
  },
  {
    title: "Security & Reliability",
    icon: FiLock,
    desc: "Hardened security protocols ensuring data integrity and system resilience.",
  },
  {
    title: "Automation & Innovation",
    icon: FiActivity,
    desc: "Transforming manual effort into automated precision through innovative engineering.",
  },
];

const Technology = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section
      id="technology"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-50/50 blur-[120px] rounded-full" />
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
            OUR TECHNOLOGY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-serif text-gray-900 leading-tight mb-6"
          >
            Powered By Innovation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            VultusGo combines modern technologies, intelligent systems,
            automation, and scalable architectures to build future-ready
            solutions that redefine industry standards.
          </motion.p>
        </div>

        {/* Interactive Ecosystem Visualization */}
        <div className="relative h-[500px] md:h-[700px] flex items-center justify-center mb-32">
          {/* Center Node */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-2xl shadow-orange-500/20 border-2 border-orange-100 flex items-center justify-center group"
          >
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-black font-serif text-gray-900">
                V
              </span>
              <span className="text-xl md:text-2xl text-orange-500 font-serif">
                G
              </span>
            </div>
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-orange-500/10 animate-ping" />
          </motion.div>

          {/* Technology Nodes and Connections */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {techNodes.map((node, i) => {
                const angle = (i * 360) / techNodes.length;
                const distance =
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? 140
                    : 280;
                const x2 =
                  50 + Math.cos((angle * Math.PI) / 180) * (distance / 7); // Rough % mapping
                const y2 =
                  50 + Math.sin((angle * Math.PI) / 180) * (distance / 7);

                return (
                  <motion.line
                    key={`line-${node.id}`}
                    x1="50%"
                    y1="50%"
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke={hoveredNode === node.id ? "#f97316" : "#e5e7eb"}
                    strokeWidth={hoveredNode === node.id ? "2" : "1"}
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                  />
                );
              })}
            </svg>

            {techNodes.map((node, i) => {
              const angle = (i * 360) / techNodes.length;
              const distance =
                typeof window !== "undefined" && window.innerWidth < 768
                  ? 140
                  : 280;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onHoverStart={() => setHoveredNode(node.id)}
                  onHoverEnd={() => setHoveredNode(null)}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * distance}px)`,
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * distance}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
                      hoveredNode === node.id
                        ? "bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-500/40"
                        : "bg-white/80 border-gray-100 text-gray-600 shadow-md"
                    }`}
                  >
                    <node.icon className="text-xl md:text-2xl" />
                  </motion.div>

                  {/* Tooltip on Hover */}
                  <AnimatePresence>
                    {hoveredNode === node.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, x: "-50%" }}
                        className="absolute top-full left-1/2 mt-4 w-48 bg-gray-900 text-white p-4 rounded-xl text-center shadow-2xl z-30 pointer-events-none"
                      >
                        <p className="text-xs font-black uppercase tracking-widest mb-1 text-orange-400">
                          {node.name}
                        </p>
                        <p className="text-[10px] text-gray-300 leading-tight">
                          {node.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-white border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              {/* Glassmorphism Background Highlight */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <card.icon size={100} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <card.icon size={24} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">
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

export default Technology;
