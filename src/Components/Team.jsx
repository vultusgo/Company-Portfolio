import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { FaLinkedin, FaGithub, FaUser } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    desc: "Visionary leader driving VultusGo towards a smarter future.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    desc: "Technology enthusiast with a passion for AI and automation.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Marcus Thorne",
    role: "Design Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    desc: "Crafting beautiful and intuitive digital experiences.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Elena Vance",
    role: "AI Researcher",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    desc: "Exploring the boundaries of machine learning and intelligence.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Julian Brooks",
    role: "Full Stack Dev",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julian",
    desc: "Building scalable and robust software solutions.",
    linkedin: "#",
    github: "#",
  },
];

const TeamCard = ({ member, index, rotation, radius }) => {
  const angleOffset = (index * 360) / 5;

  // Continuous angle calculation
  const angle = useTransform(rotation, (r) => (r + angleOffset) % 360);

  // Convert polar coordinates to 3D Cartesian (X, Z)
  const x = useTransform(angle, (a) => Math.sin((a * Math.PI) / 180) * radius);
  const z = useTransform(angle, (a) => Math.cos((a * Math.PI) / 180) * radius);

  // Depth-based visual scaling
  const scale = useTransform(z, [-radius, radius], [0.75, 1.1]);
  const opacity = useTransform(z, [-radius, radius], [0.4, 1]);
  const zIndex = useTransform(z, [-radius, radius], [0, 100]);
  const blurValue = useTransform(z, [-radius, radius], [4, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.div
      style={{
        position: "absolute",
        x,
        z,
        scale,
        opacity,
        zIndex,
        filter,
        transformStyle: "preserve-3d",
      }}
      className="flex items-center justify-center pointer-events-auto"
    >
      <motion.div
        className="w-[280px] md:w-[320px] p-8 bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center group cursor-pointer"
        whileHover={{
          y: -15,
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-orange-100 shadow-inner group-hover:border-orange-500 transition-colors duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg">
            <FaUser size={16} />
          </div>
        </div>

        <h3 className="text-xl font-black text-gray-900 mb-1">{member.name}</h3>
        <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-4">
          {member.role}
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {member.desc}
        </p>

        <div className="flex gap-4">
          <a
            href={member.linkedin}
            className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={member.github}
            className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-all"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [radius, setRadius] = useState(500);
  const rotation = useMotionValue(0);

  // Responsive radius adjustments
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setRadius(220);
      else if (window.innerWidth < 1024) setRadius(350);
      else setRadius(500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite rotation loop (60fps)
  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      rotation.set(rotation.get() + delta * 0.015);
    }
  });

  return (
    <section
      id="team"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/30 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <div className="text-center mb-24 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase mb-4 inline-block">
            OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-serif text-gray-900 leading-tight mb-6">
            The Minds Behind VultusGo
          </h2>
          <p className="text-lg text-gray-600">
            VultusGo is powered by passionate innovators, developers, designers,
            and technology enthusiasts dedicated to building future-ready
            solutions.
          </p>
        </div>

        <div
          className="relative h-[600px] w-full flex items-center justify-center"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            {teamMembers.map((member, i) => (
              <TeamCard
                key={i}
                index={i}
                member={member}
                rotation={rotation}
                radius={radius}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
