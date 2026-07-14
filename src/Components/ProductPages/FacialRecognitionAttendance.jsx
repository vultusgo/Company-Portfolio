import React from "react";
import { Link } from "react-router-dom";
import {
  FiCpu, FiCamera, FiCheck, FiClock, FiUsers, FiShield,
  FiWifi, FiBarChart2, FiLock, FiZap, FiMonitor, FiCloud,
  FiArrowRight, FiArrowDown,
} from "react-icons/fi";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/* ============================================================
   DATA
   ============================================================ */

const problems = [
  { icon: FiClock, title: "Time-Consuming Manual Attendance", desc: "Manual roll calls and paperwork waste valuable class and work hours every single day." },
  { icon: FiUsers, title: "Proxy Attendance", desc: "Traditional systems allow buddy punching and proxy marking, compromising attendance integrity." },
  { icon: FiBarChart2, title: "Inaccurate Records", desc: "Human error leads to incorrect attendance data, affecting payroll, grades, and compliance." },
  { icon: FiLock, title: "Paper-Based Records", desc: "Physical registers are hard to maintain, search, and analyze. They degrade over time." },
  { icon: FiClock, title: "Delayed Reporting", desc: "Generating attendance reports manually takes hours or days, delaying critical decisions." },
  { icon: FiCpu, title: "Administrative Overload", desc: "Staff spend excessive time on attendance tasks instead of focusing on core responsibilities." },
];

const features = [
  { icon: FiCpu, title: "AI Facial Recognition", desc: "Advanced deep learning models detect and verify faces with 99%+ accuracy in real time." },
  { icon: FiCamera, title: "Real-Time Attendance", desc: "Instant attendance marking as individuals approach the camera — no cards, no fingerprints." },
  { icon: FiMonitor, title: "Live Camera Monitoring", desc: "Monitor multiple live camera feeds from a centralized dashboard in real time." },
  { icon: FiBarChart2, title: "Automatic Reports", desc: "Generate daily, weekly, monthly, and custom attendance reports with one click." },
  { icon: FiUsers, title: "Student & Employee Management", desc: "Comprehensive profiles with photos, departments, classes, and attendance history." },
  { icon: FiZap, title: "Unknown Face Detection", desc: "Instantly alerts security when unrecognized faces are detected in restricted areas." },
  { icon: FiClock, title: "Attendance History", desc: "Complete historical records with advanced filtering, search, and export capabilities." },
  { icon: FiBarChart2, title: "Dashboard Analytics", desc: "Visual charts and insights on attendance patterns, trends, and anomalies." },
  { icon: FiLock, title: "Role-Based Access", desc: "Granular permissions for admins, teachers, managers, and security personnel." },
  { icon: FiShield, title: "Secure Data Management", desc: "End-to-end encryption, secure storage, and compliance-ready data handling." },
  { icon: FiZap, title: "Fast Recognition", desc: "Sub-second face recognition even with large databases of thousands of individuals." },
  { icon: FiCamera, title: "Multi-Camera Support", desc: "Connect and manage multiple cameras across different locations from a single system." },
  { icon: FiCloud, title: "Cloud Synchronization", desc: "Real-time sync across devices and locations with automatic backups." },
  { icon: FiWifi, title: "Offline Attendance", desc: "Works without internet and automatically syncs data when connectivity is restored." },
];

const modules = [
  "Admin Dashboard", "Student Management", "Employee Management",
  "Attendance Management", "Camera Management", "Reports & Analytics",
  "Notifications", "Settings", "User Management",
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
  { num: "01", title: "Face Registration", desc: "Enroll individuals by capturing facial data and storing it securely in the system." },
  { num: "02", title: "Camera Detection", desc: "Cameras continuously monitor entry/exit points and detect faces in real time." },
  { num: "03", title: "AI Face Matching", desc: "Advanced AI algorithms match detected faces against registered profiles instantly." },
  { num: "04", title: "Attendance Recorded", desc: "Attendance is automatically marked with timestamp and location data." },
  { num: "05", title: "Dashboard Updated", desc: "Live dashboard reflects attendance status in real time for admins and managers." },
  { num: "06", title: "Reports Generated", desc: "Comprehensive reports are auto-generated and can be exported in multiple formats." },
];

const faqs = [
  { q: "How accurate is the facial recognition system?", a: "Our system achieves 99%+ accuracy under normal lighting conditions. It uses advanced deep learning models trained on diverse datasets to ensure reliable performance across different environments, angles, and lighting conditions." },
  { q: "Can the system work without internet?", a: "Yes. The system supports offline attendance recording. Data is stored locally and automatically synchronized with the cloud once internet connectivity is restored, ensuring no attendance data is lost." },
  { q: "Is internet required all the time?", a: "No. While cloud sync and remote access require internet, the core attendance functions work fully offline. You only need internet for cloud backup, remote dashboard access, and software updates." },
  { q: "Can multiple cameras be connected?", a: "Absolutely. The system supports unlimited cameras across multiple locations. You can manage all cameras from a single centralized dashboard, making it ideal for large campuses and multi-building facilities." },
  { q: "Is the attendance data secure?", a: "Yes. We use end-to-end encryption for all data transmission and storage. Facial data is encrypted and stored securely. The system complies with data protection regulations and offers role-based access controls." },
  { q: "Can the system be customized for our organization?", a: "Yes. The system is highly customizable — from branding and UI to workflows, reports, and integrations. We work closely with your team to tailor the solution to your specific requirements." },
  { q: "Is training provided for staff?", a: "Yes. We provide comprehensive training for administrators, teachers, and security staff. This includes hands-on sessions, video tutorials, and documentation. Ongoing support is also available." },
  { q: "Is technical support available after deployment?", a: "Yes. We offer dedicated technical support with guaranteed response times. Our support team is available via phone, email, and chat for any issues, questions, or feature requests." },
  { q: "How long does installation and setup take?", a: "Typical deployment takes 1-2 weeks depending on the number of cameras, users, and locations. Our team handles installation, configuration, data migration, and staff training." },
  { q: "What happens if a person's appearance changes?", a: "The system can be easily updated with new facial data. Admins can re-enroll individuals with updated photos. The AI model adapts to minor changes like glasses, hairstyles, and aging over time." },
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
                Transform the way you track attendance with intelligent computer vision. Fast, secure, fraud-proof, and designed for schools, colleges, offices, and government organizations.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5">
                  Request a Demo <FiArrowRight size={18} />
                </Link>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-surface-200 hover:border-brand-300 text-surface-700 hover:text-brand-600 font-semibold rounded-2xl transition-all hover:-translate-y-0.5 bg-white">
                  Contact Sales
                </Link>
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
            <SectionHeading isVisible={overviewVisible}>The Future of Attendance Management</SectionHeading>
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
            <SectionHeading isVisible={featuresVisible}>Powerful Features, Seamless Experience</SectionHeading>
            <SectionSubtext isVisible={featuresVisible}>Every feature is designed to make attendance management effortless, accurate, and intelligent.</SectionSubtext>
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
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section ref={howRef} aria-label="How It Works" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="How It Works" isVisible={howVisible} />
            <SectionHeading isVisible={howVisible}>Simple. Smart. Automatic.</SectionHeading>
            <SectionSubtext isVisible={howVisible}>From face registration to report generation — the entire process is fully automated.</SectionSubtext>
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
      </section>

      {/* ========== MODULES ========== */}
      <section ref={modulesRef} aria-label="System Modules" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="System Modules" isVisible={modulesVisible} />
            <SectionHeading isVisible={modulesVisible}>Comprehensive Modules</SectionHeading>
            <SectionSubtext isVisible={modulesVisible}>Everything you need to manage attendance, users, and analytics in one platform.</SectionSubtext>
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
      </section>

      {/* ========== FAQ ========== */}
      <section ref={faqRef} aria-label="FAQ" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
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
      </section>
    </>
  );
};

export default FacialRecognitionAttendance;