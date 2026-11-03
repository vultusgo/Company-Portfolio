import React from "react";
import { Link } from "react-router-dom";
import {
  FiCpu, FiCamera, FiCheck, FiClock, FiUsers, FiShield,
  FiWifi, FiBarChart2, FiLock, FiZap, FiMonitor, FiCloud,
  FiArrowRight, FiArrowDown, FiCalendar,
} from "react-icons/fi";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/* ============================================================
   DATA
   ============================================================ */

const problems = [
  { icon: FiUsers, title: "Proxy Attendance", desc: "Students can sign in for absent peers, creating inaccurate records and avoidable liability." },
  { icon: FiLock, title: "Manual Registers", desc: "Paper registers slow teachers down and create duplicate data entry." },
  { icon: FiClock, title: "Time Wastage", desc: "Valuable classroom time is lost to roll calls when attendance can be automated." },
];

const features = [
  { icon: FiCpu, title: "Real-Time Face Recognition", desc: "AI-powered face detection and identity matching to record attendance automatically." },
  { icon: FiZap, title: "Unknown Person Alerts", desc: "Identify unrecognized people and surface alerts for campus teams." },
  { icon: FiCalendar, title: "One Attendance Per Day", desc: "Apply a consistent daily attendance record for each enrolled student." },
  { icon: FiMonitor, title: "Live Dashboard", desc: "Give administrators a clear, real-time view of attendance activity." },
  { icon: FiBarChart2, title: "Attendance Reports", desc: "Review attendance records and reporting insights for school operations." },
  { icon: FiWifi, title: "Parent SMS Alerts", desc: "Keep parents informed with attendance notifications." },
  { icon: FiUsers, title: "Admin Management", desc: "Manage student records, attendance settings, and administrative access." },
];

const modules = [
  "Live Attendance Dashboard", "Student & Face Registration", "Attendance Logs",
  "Daily & Monthly Reports", "Unknown Person Alerts", "Parent SMS Notifications",
  "Admin & User Management", "CCTV / IP Camera Integration", "Attendance Analytics",
];

const industries = [
  { icon: FiUsers, title: "Schools", desc: "K-12 institutions seeking automated, accurate attendance tracking." },
  { icon: FiUsers, title: "Colleges & Universities", desc: "Higher education campuses with large student populations." },
  { icon: FiUsers, title: "Coaching Institutes", desc: "Training centers managing batches and attendance across multiple courses." },
  { icon: FiUsers, title: "Offices & Corporate", desc: "Enterprises requiring secure employee attendance and time tracking." },
  { icon: FiUsers, title: "Factories", desc: "Industrial facilities with shift-based workforce management." },
  { icon: FiUsers, title: "Hospitals", desc: "Healthcare institutions tracking staff attendance across departments." },
  { icon: FiUsers, title: "Government Organizations", desc: "Public sector institutions requiring secure, compliant attendance systems." },
];

const benefits = [
  "Saves Time", "Improves Accuracy", "Eliminates Proxy Attendance",
  "Enhances Security", "Increases Productivity", "Reduces Administrative Work",
  "Generates Instant Reports", "Scalable for Small & Large Organizations",
];

const technologies = [
  "Artificial Intelligence", "Computer Vision", "Face Recognition",
  "React", "Node.js", "Python", "MongoDB", "Secure APIs",
];

const steps = [
  { num: "01", title: "Camera Feed", desc: "Connect CCTV or compatible smart cameras at school entry points." },
  { num: "02", title: "Face Detection", desc: "The system scans live camera frames to detect faces." },
  { num: "03", title: "AI Recognition", desc: "The recognition engine matches detected faces with registered student identities." },
  { num: "04", title: "Attendance Logging", desc: "A successful match is recorded automatically in the attendance system." },
  { num: "05", title: "Live Dashboard", desc: "Attendance activity becomes visible to administrators through the dashboard." },
];

const faqs = [
  { q: "How much does Vultus Go cost?", a: "The listed plan is ₹70 per student per year, billed annually. For 500 students, that is ₹35,000 for the year." },
  { q: "How accurate is the facial recognition engine?", a: "The product page lists 96.8% recognition accuracy as a performance metric. Actual results can vary with camera placement, lighting, and deployment conditions." },
  { q: "How quickly is attendance recorded?", a: "The product page lists an attendance speed of 1.8 seconds." },
  { q: "Can it work with existing CCTV?", a: "The system is designed to integrate with CCTV and IP camera feeds, subject to camera compatibility and installation review." },
  { q: "What happens when an unknown person is detected?", a: "Unknown-person alerts are included among the product features to help campus teams identify unrecognized visitors." },
  { q: "Does the system provide reports?", a: "Yes. Attendance reports and a live dashboard help administrators review attendance activity." },
  { q: "Are parent notifications supported?", a: "Parent SMS alerts are listed as a product feature." },
];

/* ============================================================
   REUSABLE SECTIONS
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


const ProductDetailsLink = () => (
  <div className="relative z-10 mt-10 flex justify-center px-6">
    <a
      href="https://vultusgo-product.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:shadow-md"
    >
      Explore Complete Product Details <FiArrowRight size={16} />
    </a>
  </div>
);

/* ============================================================
   PRODUCT PAGE
   ============================================================ */

const FacialRecognitionAttendance = () => {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [overviewRef, overviewVisible] = useScrollReveal({ threshold: 0.1 });
  const [problemsRef, problemsVisible] = useScrollReveal({ threshold: 0.05 });
  const [featuresRef, featuresVisible] = useScrollReveal({ threshold: 0.05 });
  const [howRef, howVisible] = useScrollReveal({ threshold: 0.1 });
  const [modulesRef, modulesVisible] = useScrollReveal({ threshold: 0.1 });
  const [industriesRef, industriesVisible] = useScrollReveal({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useScrollReveal({ threshold: 0.1 });
  const [techRef, techVisible] = useScrollReveal({ threshold: 0.1 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.1 });
  const [faqOpenIndex, setFaqOpenIndex] = React.useState(null);
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <>
      {/* ========== HERO ========== */}
      <section
        ref={heroRef}
        aria-label="AI-Powered Facial Recognition Attendance System"
        className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-white pt-28 lg:pt-36"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-brand-100/30 via-brand-50/10 to-transparent blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-black/5 via-black/[0.02] to-transparent blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className={`mb-8 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ol className="flex items-center gap-2 text-sm text-surface-400">
              <li><Link to="/" className="hover:text-brand-500 transition-colors">Home</Link></li>
              <li><span className="text-surface-300">/</span></li>
              <li><Link to="/products" className="hover:text-brand-500 transition-colors">Products</Link></li>
              <li><span className="text-surface-300">/</span></li>
              <li className="text-surface-600 font-medium" aria-current="page">Facial Recognition Attendance System</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left */}
            <div>
              <div className={`transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
                  Flagship Product
                </span>
              </div>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-black mb-8 transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                AI-Powered Facial Recognition
                <br />
                <span className="text-brand-500">Attendance System</span>
              </h1>
              <p className={`text-lg lg:text-xl text-surface-500 leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Turn school arrival routines into intelligent automation with facial recognition, live attendance logs, and school-ready insights. Designed for administrators, teachers, and parents.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5">
                  Book Installation <FiArrowRight size={18} />
                </Link>
                <a href="https://vultusgo-product.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-surface-200 hover:border-brand-300 text-surface-700 hover:text-brand-600 font-semibold rounded-2xl transition-all hover:-translate-y-0.5 bg-white">
                  Product Details <FiArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Right: Visual */}
            <div className={`relative flex items-center justify-center transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="absolute inset-0 border border-surface-200 rounded-full animate-spin-slower opacity-30" />
                <div className="absolute inset-10 border border-dashed border-brand-200 rounded-full animate-spin-slow opacity-40" />
                <div className="absolute inset-20 border border-surface-100 rounded-full animate-spin-slower opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-36 lg:h-36 bg-brand-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-500/20 animate-pulse-glow">
                  <FiCpu size={48} className="text-white" />
                </div>
                <div className="absolute top-8 right-4 p-3 bg-white/80 backdrop-blur-xl border border-surface-100 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <FiCamera size={18} className="text-brand-500" />
                    <span className="text-xs font-semibold text-black">Live Detection</span>
                  </div>
                </div>
                <div className="absolute bottom-12 left-0 p-3 bg-white/80 backdrop-blur-xl border border-surface-100 rounded-xl shadow-lg animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <FiCheck size={18} className="text-brand-500" />
                    <span className="text-xs font-semibold text-black">99% Accurate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OVERVIEW ========== */}
      <section ref={overviewRef} aria-label="Product Overview" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/40 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionLabel text="Product Overview" isVisible={overviewVisible} />
            <SectionHeading isVisible={overviewVisible}>AI Attendance Built for Modern Schools</SectionHeading>
            <div className={`space-y-5 text-lg text-surface-500 leading-relaxed transition-all duration-700 delay-300 ${overviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p>
                The <span className="text-black font-semibold">AI-Powered Facial Recognition Attendance System</span> is a next-generation solution that replaces manual attendance methods with intelligent, automated face recognition technology.
              </p>
              <p>
                Using advanced computer vision and deep learning algorithms, the system identifies and verifies individuals in real time as they enter a room or facility. Attendance is marked automatically — no cards, no fingerprints, no manual entry.
              </p>
              <p>
                Designed for schools, colleges, coaching institutes, offices, factories, hospitals, and government organizations, the system eliminates proxy attendance, reduces administrative workload, and provides instant, accurate attendance reports through an intuitive dashboard.
              </p>
              <p>
                With offline capability, multi-camera support, and cloud synchronization, the system is built for real-world environments where reliability, speed, and security are non-negotiable.
              </p>
            </div>
          </div>
        </div>
              <ProductDetailsLink />
      </section>

      {/* ========== PROBLEMS IT SOLVES ========== */}
      <section ref={problemsRef} aria-label="Problems It Solves" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Problems We Solve" isVisible={problemsVisible} />
            <SectionHeading isVisible={problemsVisible}>Attendance Challenges, Solved</SectionHeading>
            <SectionSubtext isVisible={problemsVisible}>Traditional attendance methods create unnecessary friction. Our system eliminates them entirely.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, i) => (
              <div
                key={i}
                className={`group p-8 bg-surface-50 border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
                  problemsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: problemsVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <problem.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{problem.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
              <ProductDetailsLink />
      </section>

      {/* ========== KEY FEATURES ========== */}
      <section ref={featuresRef} aria-label="Key Features" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-50/40 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-brand-50/30 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Key Features" isVisible={featuresVisible} />
            <SectionHeading isVisible={featuresVisible}>Everything a Modern School Needs for Attendance</SectionHeading>
            <SectionSubtext isVisible={featuresVisible}>Built for administrators, teachers, and parents with transparency, alerts, and intelligent attendance controls.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`group p-6 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: featuresVisible ? `${200 + i * 60}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <feature.icon size={20} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
              <ProductDetailsLink />
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section ref={howRef} aria-label="How It Works" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="How It Works" isVisible={howVisible} />
            <SectionHeading isVisible={howVisible}>A Frictionless Workflow from Camera to Classroom Analytics</SectionHeading>
            <SectionSubtext isVisible={howVisible}>Vultus Go senses presence, validates identity, and shares attendance insights across administration, teachers, and parents.</SectionSubtext>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200 -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col lg:flex-row items-start gap-8 transition-all duration-700 ${
                    howVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: howVisible ? `${200 + i * 100}ms` : "0ms", transitionProperty: "opacity, transform" }}
                >
                  <div className="absolute left-8 lg:left-1/2 w-5 h-5 bg-white border-4 border-brand-500 rounded-full -translate-x-1/2 z-10 mt-2" />
                  <div className={`pl-16 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:ml-auto"}`}>
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl mb-3">
                      <span className="text-sm font-bold text-brand-600">{step.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
              <ProductDetailsLink />
      </section>

      {/* ========== MODULES ========== */}
      <section ref={modulesRef} aria-label="System Modules" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="System Modules" isVisible={modulesVisible} />
            <SectionHeading isVisible={modulesVisible}>A Clear View of Everyday School Attendance</SectionHeading>
            <SectionSubtext isVisible={modulesVisible}>Review attendance activity, manage student records, and keep school teams informed in one place.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {modules.map((mod, i) => (
              <div
                key={i}
                className={`p-6 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  modulesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: modulesVisible ? `${200 + i * 60}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <FiCheck size={18} className="text-brand-500" />
                  </div>
                  <h3 className="text-base font-bold text-black">{mod}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
              <ProductDetailsLink />
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section ref={industriesRef} aria-label="Industries We Serve" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Industries" isVisible={industriesVisible} />
            <SectionHeading isVisible={industriesVisible}>Trusted Across Industries</SectionHeading>
            <SectionSubtext isVisible={industriesVisible}>From classrooms to corporate offices, our system adapts to every environment.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className={`group p-8 bg-surface-50 border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
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
              <ProductDetailsLink />
      </section>

      {/* ========== BENEFITS ========== */}
      <section ref={benefitsRef} aria-label="Benefits" className="relative w-full py-24 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-500/10 to-transparent blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-500/10 to-transparent blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <div className={`transition-all duration-700 ${benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="inline-block px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-400 uppercase mb-6">
                Benefits
              </span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 transition-all duration-700 delay-100 ${benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Why Organizations Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className={`p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300 ${
                  benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: benefitsVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <FiCheck size={24} className="text-brand-400" />
                </div>
                <p className="text-sm font-semibold text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
              <ProductDetailsLink />
      </section>

      {/* ========== TECHNOLOGY ========== */}
      <section ref={techRef} aria-label="Technology" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Technology" isVisible={techVisible} />
            <SectionHeading isVisible={techVisible}>Built on Modern, Reliable Technology</SectionHeading>
            <SectionSubtext isVisible={techVisible}>A robust tech stack ensuring performance, scalability, and security.</SectionSubtext>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className={`px-6 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm font-semibold text-surface-700 hover:border-brand-300 hover:text-brand-600 transition-all duration-300 ${
                  techVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: techVisible ? `${100 + i * 50}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
              <ProductDetailsLink />
      </section>


      {/* ========== PRODUCT PERFORMANCE & PRICING ========== */}
      <section aria-label="Product performance and pricing" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionLabel text="Performance" isVisible={true} />
            <SectionHeading isVisible={true}>Performance Built for Real School Schedules</SectionHeading>
            <SectionSubtext isVisible={true}>Product performance figures and security capabilities published on the dedicated Vultus Go product page.</SectionSubtext>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[{value:"96.8%",label:"Recognition accuracy"},{value:"1.8 sec",label:"Attendance speed"},{value:"22",label:"Faces per frame"},{value:"AES-256",label:"Data encryption"}].map((item) => (
              <div key={item.label} className="p-8 bg-surface-50 border border-surface-100 rounded-2xl text-center">
                <p className="text-3xl lg:text-4xl font-bold text-brand-600 mb-3">{item.value}</p>
                <p className="text-sm font-semibold text-surface-600">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionLabel text="Simple Annual Pricing" isVisible={true} />
            <SectionHeading isVisible={true}>₹70 per Student, per Year</SectionHeading>
            <SectionSubtext isVisible={true}>One simple annual price. Total cost is the number of students multiplied by ₹70.</SectionSubtext>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8 lg:p-10 bg-black text-white rounded-3xl">
              <p className="text-sm uppercase tracking-widest text-brand-300 mb-4">Vultus Go plan</p>
              <p className="text-5xl font-bold mb-2">₹70 <span className="text-lg font-medium text-surface-300">/ student / year</span></p>
              <p className="text-sm text-surface-300 mb-8">Approximately ₹5.83 per student per month, billed once a year.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {["Face attendance for every student","Liveness & anti-spoofing checks","Live admin dashboard","Daily, monthly & custom reports","Parent SMS alerts","Unknown person alerts","Multi-camera & CCTV support","Onboarding and support included"].map(item => <li key={item} className="flex gap-2"><FiCheck className="text-brand-400 shrink-0" />{item}</li>)}
              </ul>
            </div>
            <div className="p-8 lg:p-10 bg-surface-50 border border-surface-100 rounded-3xl">
              <p className="text-sm uppercase tracking-widest text-brand-600 mb-3">Annual cost examples</p>
              <div className="space-y-5">
                {[{count:"200 students",cost:"₹14,000"},{count:"500 students",cost:"₹35,000"},{count:"1,000 students",cost:"₹70,000"},{count:"2,500 students",cost:"₹1,75,000"}].map(item => <div key={item.count} className="flex items-center justify-between border-b border-surface-200 pb-4"><span className="text-surface-600">{item.count}</span><strong className="text-xl text-black">{item.cost}<span className="text-xs font-normal text-surface-500"> / year</span></strong></div>)}
              </div>
              <p className="text-xs text-surface-500 mt-5">Illustrative totals calculated at the published rate of ₹70 per student per year.</p>
            </div>
          </div>
          <div className="mt-12 p-8 lg:p-10 border border-brand-200 bg-brand-50/50 rounded-3xl">
            <h3 className="text-2xl font-bold text-black mb-3">Compare Annual Pricing</h3>
            <p className="text-surface-600 mb-7">The product page compares Vultus Go’s ₹70 annual price with an older-tool reference price of ₹70 per student per month (₹840 per year).</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div><p className="text-sm text-surface-500 mb-1">Older tools / year</p><p className="text-2xl font-bold text-surface-700">₹840</p></div>
              <div><p className="text-sm text-surface-500 mb-1">Vultus Go / year</p><p className="text-2xl font-bold text-brand-600">₹70</p></div>
              <div><p className="text-sm text-surface-500 mb-1">Listed annual saving</p><p className="text-2xl font-bold text-brand-600">₹770 (about 92%)</p></div>
            </div>
            <p className="text-xs text-surface-500 mt-5">Comparison is based on the reference pricing stated on the product page; confirm the applicable plan and scope during installation consultation.</p>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section ref={faqRef} aria-label="FAQ" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="FAQ" isVisible={faqVisible} />
            <SectionHeading isVisible={faqVisible}>Answers for School Leaders and IT Teams</SectionHeading>
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
              <ProductDetailsLink />
      </section>

      {/* ========== FINAL CTA ========== */}
      <section ref={ctaRef} aria-label="Get Started" className="relative w-full py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`relative p-10 lg:p-16 bg-black rounded-[2.5rem] overflow-hidden text-center transition-all duration-700 ${
            ctaVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                Ready to Transform Your
                <br />
                <span className="text-brand-400">Attendance Management?</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-surface-400 leading-relaxed mb-10">
                Request a live demo or speak with our team to discover how the AI-Powered Facial Recognition Attendance System can benefit your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5">
                  Request a Live Demo <FiArrowRight size={18} />
                </Link>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5">
                  Contact Our Team <FiArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
              <ProductDetailsLink />
      </section>
    </>
  );
};

export default FacialRecognitionAttendance;