import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight, FiCpu, FiShield, FiAward, FiHeart,
  FiEye, FiUsers, FiBookOpen, FiTarget, FiLayers,
  FiZap, FiGlobe, FiCode, FiCloud,
  FiSmartphone, FiServer, FiRefreshCw, FiLock, FiArrowDown,
} from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ============================================================
   DATA
   ============================================================ */

const values = [
  { icon: FiZap, title: "Innovation", desc: "We continuously push boundaries to create groundbreaking solutions that redefine what's possible with technology." },
  { icon: FiShield, title: "Integrity", desc: "We operate with transparency, honesty, and ethical responsibility in every project and partnership." },
  { icon: FiAward, title: "Excellence", desc: "We hold ourselves to the highest standards of quality, from code architecture to client communication." },
  { icon: FiHeart, title: "Customer Success", desc: "Our clients' success is our success. We invest deeply in understanding and delivering on their goals." },
  { icon: FiLock, title: "Security", desc: "Security is embedded in everything we build — from zero-trust architecture to compliance-ready systems." },
  { icon: FiEye, title: "Transparency", desc: "We believe in open communication, clear timelines, and honest feedback at every stage of development." },
  { icon: FiUsers, title: "Collaboration", desc: "We work as an extension of our clients' teams, fostering partnership and shared ownership of outcomes." },
  { icon: FiBookOpen, title: "Continuous Learning", desc: "Technology evolves rapidly. We invest in constant learning to stay ahead of the curve for our clients." },
];

const capabilities = [
  { icon: FiCpu, title: "AI Solutions", desc: "Intelligent automation, computer vision, NLP, and predictive analytics." },
  { icon: FiServer, title: "Enterprise Software", desc: "Custom platforms, ERP integrations, and business process automation." },
  { icon: FiGlobe, title: "Web Platforms", desc: "Modern, scalable web applications built with cutting-edge frameworks." },
  { icon: FiSmartphone, title: "Mobile Applications", desc: "Native and cross-platform apps for iOS and Android." },
  { icon: FiCloud, title: "Cloud Technologies", desc: "Cloud-native architecture, migration, and infrastructure management." },
  { icon: FiRefreshCw, title: "Automation", desc: "Workflow automation, RPA, and intelligent process optimization." },
];

const differentiators = [
  { icon: FiCode, title: "Experienced Team", desc: "Senior engineers, AI researchers, and architects with deep industry experience across multiple domains." },
  { icon: FiLayers, title: "Modern Tech Stack", desc: "We use the latest frameworks, languages, and tools to build future-proof, maintainable solutions." },
  { icon: FiShield, title: "Enterprise Architecture", desc: "Scalable, secure, and resilient systems designed for mission-critical enterprise environments." },
  { icon: FiTarget, title: "Security-First Approach", desc: "Zero-trust architecture, end-to-end encryption, and compliance-ready infrastructure from day one." },
  { icon: FiZap, title: "Scalable Solutions", desc: "Architectures designed to grow seamlessly from prototype to enterprise-scale deployments." },
  { icon: FiUsers, title: "Partnership Mindset", desc: "We don't just deliver projects — we build lasting relationships focused on long-term client success." },
];

const timeline = [
  { year: "2024", title: "Company Founded", desc: "Vultus Go was established with a vision to build intelligent software that solves real-world problems." },
  { year: "2024", title: "First Product Launch", desc: "Launched the AI-Powered Facial Recognition Attendance System, our flagship product." },
  { year: "2025", title: "Government Projects", desc: "Began serving government organizations with secure, compliant technology solutions." },
  { year: "2025", title: "Service Expansion", desc: "Expanded into web development, mobile apps, custom software, and digital transformation services." },
  { year: "2026", title: "Enterprise Growth", desc: "Scaling enterprise partnerships and expanding our AI research and development capabilities." },
  { year: "2026+", title: "Global Vision", desc: "Continuing to push boundaries in AI, automation, and digital transformation for global clients." },
];

const industries = [
  { icon: FiBookOpen, title: "Education", desc: "Schools, colleges, universities, and coaching institutes seeking digital transformation." },
  { icon: FiUsers, title: "Government", desc: "Public sector institutions requiring secure, compliant, and scalable technology solutions." },
  { icon: FiHeart, title: "Healthcare", desc: "Hospitals and medical facilities managing patient data, staff, and operations." },
  { icon: FiZap, title: "Startups", desc: "Early-stage companies building innovative products with modern technology stacks." },
  { icon: FiLayers, title: "SMEs", desc: "Small and medium enterprises looking for affordable, scalable digital solutions." },
  { icon: FiCloud, title: "Enterprises", desc: "Large organizations requiring robust, secure, and high-performance enterprise systems." },
];

const team = [
  { name: "Founder & CEO", role: "Vision & Strategy", initials: "VG", gradient: "from-brand-500 to-brand-700" },
  { name: "Co-Founder", role: "Operations & Growth", initials: "CF", gradient: "from-brand-400 to-brand-600" },
  { name: "Technical Lead", role: "Engineering & Architecture", initials: "TL", gradient: "from-brand-600 to-brand-800" },
  { name: "Core Team", role: "Design, Development & AI", initials: "CT", gradient: "from-surface-700 to-black" },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Served" },
  { value: "20+", label: "Technologies Used" },
  { value: "8+", label: "Industries Served" },
];

const faqs = [
  { q: "What does Vultus Go specialize in?", a: "Vultus Go specializes in AI and machine learning solutions, web and mobile app development, custom software development, UI/UX design, digital transformation, and enterprise technology solutions. Our flagship product is an AI-Powered Facial Recognition Attendance System." },
  { q: "Which industries do you serve?", a: "We serve a diverse range of industries including education, government, healthcare, startups, SMEs, and large enterprises. Our solutions are tailored to meet the unique needs of each sector." },
  { q: "Do you develop custom software?", a: "Yes. Custom software development is one of our core services. We build tailored solutions including ERP systems, CRM platforms, school and hospital management systems, and business automation tools." },
  { q: "Do you provide ongoing support after deployment?", a: "Absolutely. We offer comprehensive maintenance and support services including bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans are flexible and tailored to your needs." },
  { q: "Can your solutions be customized for our organization?", a: "Yes. All our products and solutions are highly customizable. We work closely with your team to understand your requirements and tailor the solution to match your branding, workflows, and business processes." },
  { q: "How can I get started with Vultus Go?", a: "Getting started is simple. You can reach out to us through our contact form, email us at vultusgo@gmail.com, or request a demo of our products. We'll schedule a consultation to understand your needs and propose the right solution." },
];

/* ============================================================
   REUSABLE SECTION COMPONENTS
   ============================================================ */

const SectionLabel = ({ text, isVisible, delay = 0 }) => (
  <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
    <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
      {text}
    </span>
  </div>
);

const SectionHeading = ({ children, isVisible, delay = 100 }) => (
  <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
    {children}
  </h2>
);

const SectionSubtext = ({ children, isVisible, delay = 200 }) => (
  <p className={`text-lg lg:text-xl text-surface-500 leading-relaxed max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
    {children}
  </p>
);

/* ============================================================
   ABOUT PAGE
   ============================================================ */

const AboutPage = () => {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [storyRef, storyVisible] = useScrollReveal({ threshold: 0.1 });
  const [missionRef, missionVisible] = useScrollReveal({ threshold: 0.1 });
  const [valuesRef, valuesVisible] = useScrollReveal({ threshold: 0.05 });
  const [capabilitiesRef, capabilitiesVisible] = useScrollReveal({ threshold: 0.05 });
  const [differentiatorsRef, differentiatorsVisible] = useScrollReveal({ threshold: 0.05 });
  const [timelineRef, timelineVisible] = useScrollReveal({ threshold: 0.05 });
  const [industriesRef, industriesVisible] = useScrollReveal({ threshold: 0.1 });
  const [teamRef, teamVisible] = useScrollReveal({ threshold: 0.05 });
  const [statsRef, statsVisible] = useScrollReveal({ threshold: 0.2 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.1 });
  const [faqOpenIndex, setFaqOpenIndex] = React.useState(null);
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <>
      {/* ========== HERO ========== */}
      <section
        ref={heroRef}
        aria-label="About Vultus Go"
        className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-white pt-28 lg:pt-36"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-brand-100/30 via-brand-50/10 to-transparent blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/5 via-black/[0.02] to-transparent blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <nav aria-label="Breadcrumb" className={`mb-8 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ol className="flex items-center gap-2 text-sm text-surface-400">
              <li><Link to="/" className="hover:text-brand-500 transition-colors">Home</Link></li>
              <li><span className="text-surface-300">/</span></li>
              <li className="text-surface-600 font-medium" aria-current="page">About</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className={`transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
                  About Vultus Go
                </span>
              </div>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-black mb-8 transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Building Intelligent
                <br />
                <span className="text-brand-500">Software for Tomorrow</span>
              </h1>
              <p className={`text-lg lg:text-xl text-surface-500 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Vultus Go is an AI and technology company that develops intelligent
                software solutions for businesses, educational institutions, startups,
                enterprises, and government organizations worldwide.
              </p>
            </div>

            <div className={`relative flex items-center justify-center transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="absolute inset-0 border border-surface-200 rounded-full animate-spin-slower opacity-30" />
                <div className="absolute inset-10 border border-dashed border-brand-200 rounded-full animate-spin-slow opacity-40" />
                <div className="absolute inset-20 border border-surface-100 rounded-full animate-spin-slower opacity-20" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-36 lg:h-36 bg-brand-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-500/20 animate-pulse-glow">
                  <span className="text-4xl lg:text-5xl font-bold text-white">VG</span>
                </div>

                <div className="absolute top-8 right-4 p-3 bg-white/80 backdrop-blur-xl border border-surface-100 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <FiCpu size={18} className="text-brand-500" />
                    <span className="text-xs font-semibold text-black">AI-Powered</span>
                  </div>
                </div>
                <div className="absolute bottom-12 left-0 p-3 bg-white/80 backdrop-blur-xl border border-surface-100 rounded-xl shadow-lg animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <FiShield size={18} className="text-brand-500" />
                    <span className="text-xs font-semibold text-black">Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section
        ref={storyRef}
        aria-label="Our Story"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/40 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionLabel text="Our Story" isVisible={storyVisible} />
            <SectionHeading isVisible={storyVisible}>Why We Built Vultus Go</SectionHeading>

            <div className={`space-y-6 text-lg text-surface-500 leading-relaxed transition-all duration-700 delay-300 ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p>Vultus Go was founded with a simple but ambitious belief: that intelligent software should be accessible, secure, and transformative for organizations of every size. We saw too many businesses struggling with outdated systems, fragmented tools, and technology that added complexity instead of removing it.</p>
              <p>Our founding team — engineers, AI researchers, and product builders — came together to change that. We started by building our flagship AI-powered Facial Recognition Attendance System, solving a real problem that organizations across education, government, and enterprise sectors face every day: accurate, fraud-proof, and automated attendance tracking.</p>
              <p>But our vision was always bigger than a single product. We built Vultus Go to be a complete technology company — one that could deliver AI solutions, custom software, web and mobile applications, enterprise platforms, and digital transformation services under one roof, with a consistent commitment to quality, security, and innovation.</p>
              <p>Today, we serve clients across multiple industries, from government agencies to fast-growing startups. Every project, every product, and every partnership is driven by the same mission: build software that makes a real difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section
        ref={missionRef}
        aria-label="Mission and Vision"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className={`p-10 lg:p-12 bg-surface-50 border border-surface-100 rounded-3xl transition-all duration-700 ${missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                <FiTarget size={28} className="text-brand-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-base text-surface-500 leading-relaxed">
                To deliver transformative digital solutions that drive progress, foster
                innovation, and create lasting value for our clients. We are committed to
                ethical AI, cutting-edge engineering, and a relentless focus on outcomes
                that matter.
              </p>
            </div>

            <div className={`p-10 lg:p-12 bg-brand-50 border border-brand-100 rounded-3xl transition-all duration-700 delay-200 ${missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center mb-6">
                <FiEye size={28} className="text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-base text-surface-600 leading-relaxed">
                To be the leading force in intelligent software development — recognized
                globally for our commitment to excellence, ethical AI, and a future where
                technology serves humanity. We envision a world where every organization
                has access to enterprise-grade, AI-powered solutions that drive real
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section
        ref={valuesRef}
        aria-label="Our Values"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-50/40 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-brand-50/30 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Our Values" isVisible={valuesVisible} />
            <SectionHeading isVisible={valuesVisible}>What We Stand For</SectionHeading>
            <SectionSubtext isVisible={valuesVisible}>The principles that guide every decision, every project, and every relationship.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className={`group relative p-8 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
                  valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: valuesVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <value.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{value.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT WE DO ========== */}
      <section
        ref={capabilitiesRef}
        aria-label="What We Do"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="What We Do" isVisible={capabilitiesVisible} />
            <SectionHeading isVisible={capabilitiesVisible}>Our Core Capabilities</SectionHeading>
            <SectionSubtext isVisible={capabilitiesVisible}>From AI to enterprise platforms, we deliver end-to-end technology solutions.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className={`group p-8 bg-surface-50 border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  capabilitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: capabilitiesVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <cap.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{cap.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${capabilitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-surface-900 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Explore Our Services
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section
        ref={differentiatorsRef}
        aria-label="Why Choose Vultus Go"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-500/10 to-transparent blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-500/10 to-transparent blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <div className={`transition-all duration-700 ${differentiatorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-block px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-400 uppercase mb-6">
                Why Choose Us
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 transition-all duration-700 delay-100 ${differentiatorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              What Makes Us Different
            </h2>
            <p className={`text-lg text-surface-400 leading-relaxed transition-all duration-700 delay-200 ${differentiatorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              We combine deep technical expertise with a commitment to quality, security, and long-term partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className={`group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300 ${
                  differentiatorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: differentiatorsVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <item.icon size={24} className="text-brand-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUR JOURNEY (TIMELINE) ========== */}
      <section
        ref={timelineRef}
        aria-label="Our Journey"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Our Journey" isVisible={timelineVisible} />
            <SectionHeading isVisible={timelineVisible}>The Road So Far</SectionHeading>
            <SectionSubtext isVisible={timelineVisible}>Key milestones in our journey of building intelligent technology.</SectionSubtext>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col lg:flex-row items-start gap-8 lg:gap-12 transition-all duration-700 ${
                    timelineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: timelineVisible ? `${200 + i * 100}ms` : "0ms", transitionProperty: "opacity, transform" }}
                >
                  <div className="absolute left-8 lg:left-1/2 w-5 h-5 bg-white border-4 border-brand-500 rounded-full -translate-x-1/2 z-10 mt-1.5" />

                  <div className={`pl-16 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:ml-auto"}`}>
                    <span className="inline-block px-3 py-1 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold text-brand-600 uppercase tracking-wider mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES WE SERVE ========== */}
      <section
        ref={industriesRef}
        aria-label="Industries We Serve"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Industries" isVisible={industriesVisible} />
            <SectionHeading isVisible={industriesVisible}>Industries We Serve</SectionHeading>
            <SectionSubtext isVisible={industriesVisible}>Delivering tailored technology solutions across diverse sectors.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className={`group p-8 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
                  industriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: industriesVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <industry.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{industry.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COMPANY STATISTICS ========== */}
      <section
        ref={statsRef}
        aria-label="Company Statistics"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-50/30 via-brand-50/10 to-transparent blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="By the Numbers" isVisible={statsVisible} />
            <SectionHeading isVisible={statsVisible}>Our Impact in Numbers</SectionHeading>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: statsVisible ? `${200 + i * 100}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <p className="text-4xl lg:text-5xl font-bold text-brand-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-surface-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section
        ref={faqRef}
        aria-label="FAQ"
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="FAQ" isVisible={faqVisible} />
            <SectionHeading isVisible={faqVisible}>Frequently Asked Questions</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => {
              const open = faqOpenIndex === i;
              return (
                <div
                  key={i}
                  className={`border border-surface-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                    open ? "border-brand-200 bg-brand-50/30 shadow-sm" : "hover:border-surface-200"
                  } ${faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: faqVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
                >
                  <button
                    onClick={() => setFaqOpenIndex(open ? null : i)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer"
                    aria-expanded={open}
                  >
                    <span className={`text-base font-semibold pr-4 transition-colors ${open ? "text-brand-600" : "text-black"}`}>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${open ? "bg-brand-500 text-white" : "bg-surface-100 text-surface-500"}`}>
                      <FiArrowDown size={16} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-6 pb-5 pt-0">
                      <div className="h-px bg-gradient-to-r from-brand-200 to-transparent mb-4" />
                      <p className="text-sm text-surface-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section
        ref={ctaRef}
        aria-label="Get in touch"
        className="relative w-full py-24 lg:py-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`relative p-10 lg:p-16 bg-black rounded-[2.5rem] overflow-hidden text-center transition-all duration-700 ${
              ctaVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                Ready to Build Something
                <br />
                <span className="text-brand-400">Extraordinary Together?</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-surface-400 leading-relaxed mb-10">
                Let's discuss how Vultus Go can help transform your ideas into powerful,
                enterprise-grade technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5"
                >
                  Contact Us
                  <FiArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;