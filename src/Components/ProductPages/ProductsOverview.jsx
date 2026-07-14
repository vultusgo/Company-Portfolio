import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  FiArrowRight, FiCpu, FiShield, FiZap, FiLock, FiUsers,
  FiCloud, FiCheck, FiArrowDown,
} from "react-icons/fi";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/* ============================================================
   DATA
   ============================================================ */

const products = [
  {
    icon: FiCpu,
    name: "AI-Powered Facial Recognition Attendance System",
    category: "AI & Computer Vision",
    desc: "Next-generation attendance management using advanced computer vision and deep learning. Fast, secure, and fraud-proof.",
    highlights: ["99%+ Accuracy", "Real-Time Detection", "Offline Mode", "Multi-Camera Support"],
    path: "/products/facial-recognition-attendance-system",
  },
];

const whyUs = [
  { icon: FiShield, title: "Enterprise Ready", desc: "Built for scale with enterprise-grade security, reliability, and performance." },
  { icon: FiCpu, title: "AI Powered", desc: "Leveraging cutting-edge AI and machine learning for intelligent automation." },
  { icon: FiLock, title: "Secure by Design", desc: "End-to-end encryption, compliance-ready, and built with privacy-first architecture." },
  { icon: FiCloud, title: "Scalable Architecture", desc: "Cloud-native design that grows seamlessly from startup to enterprise scale." },
  { icon: FiZap, title: "Easy Integration", desc: "APIs and connectors that integrate smoothly with your existing tools and workflows." },
  { icon: FiUsers, title: "Long-Term Support", desc: "Dedicated support teams with proactive monitoring and continuous improvements." },
];

const industries = [
  { icon: FiUsers, title: "Education", desc: "Schools, colleges, universities, and coaching institutes." },
  { icon: FiUsers, title: "Government", desc: "Public sector institutions requiring secure, compliant systems." },
  { icon: FiUsers, title: "Healthcare", desc: "Hospitals and medical facilities managing staff and patient workflows." },
  { icon: FiUsers, title: "Corporate", desc: "Enterprises and businesses seeking digital transformation." },
  { icon: FiUsers, title: "Manufacturing", desc: "Factories and industrial facilities with workforce management needs." },
  { icon: FiUsers, title: "SMEs", desc: "Small and medium enterprises looking for affordable, scalable solutions." },
];

const futureProducts = [
  { icon: FiCpu, title: "AI Solution", desc: "Intelligent automation platform for business processes." },
  { icon: FiCloud, title: "Enterprise Platform", desc: "Comprehensive digital workplace and collaboration suite." },
  { icon: FiZap, title: "Smart Automation Tool", desc: "Workflow automation and business process optimization." },
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
   PRODUCTS OVERVIEW PAGE
   ============================================================ */

const ProductsOverview = () => {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [introRef, introVisible] = useScrollReveal({ threshold: 0.1 });
  const [productsRef, productsVisible] = useScrollReveal({ threshold: 0.05 });
  const [whyRef, whyVisible] = useScrollReveal({ threshold: 0.1 });
  const [industriesRef, industriesVisible] = useScrollReveal({ threshold: 0.1 });
  const [futureRef, futureVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <>
    <Navbar />
      {/* ========== HERO ========== */}
      <section
        ref={heroRef}
        aria-label="Our Products"
        className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-white pt-28 lg:pt-36"
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
              <li className="text-surface-600 font-medium" aria-current="page">Products</li>
            </ol>
          </nav>
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
              Our Products
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-black mb-8">
              Intelligent Products
              <br />
              <span className="text-brand-500">Built for Real-World Impact</span>
            </h1>
            <p className="text-lg lg:text-xl text-surface-500 leading-relaxed max-w-2xl mb-10">
              Explore our flagship products — designed with cutting-edge AI and modern technology to solve real business challenges.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Link to="#products" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5">
                Explore Products <FiArrowRight size={18} />
              </Link>
              <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-surface-200 hover:border-brand-300 text-surface-700 hover:text-brand-600 font-semibold rounded-2xl transition-all hover:-translate-y-0.5 bg-white">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTRODUCTION ========== */}
      <section ref={introRef} aria-label="Introduction" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/40 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionLabel text="About Our Products" isVisible={introVisible} />
            <SectionHeading isVisible={introVisible}>Solving Real Problems with Intelligent Technology</SectionHeading>
            <div className={`space-y-5 text-lg text-surface-500 leading-relaxed transition-all duration-700 delay-300 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p>
                At <span className="text-black font-semibold">Vultus Go</span>, we develop products that bridge the gap between complex technology and everyday business needs. Our focus is on creating intelligent software that automates processes, enhances security, and drives measurable results.
              </p>
              <p>
                From AI-powered attendance systems to enterprise platforms, every product we build is grounded in real-world requirements. We combine artificial intelligence, computer vision, and modern cloud architecture to deliver solutions that are both powerful and easy to use.
              </p>
              <p>
                Our products are designed for scalability, security, and seamless integration — ensuring they grow with your organization and adapt to evolving business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS ========== */}
      <section id="products" ref={productsRef} aria-label="Featured Products" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Featured Products" isVisible={productsVisible} />
            <SectionHeading isVisible={productsVisible}>Our Flagship Solutions</SectionHeading>
            <SectionSubtext isVisible={productsVisible}>Each product is crafted with precision, security, and scalability in mind.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product, i) => (
              <Link
                key={i}
                to={product.path}
                className={`group p-8 bg-surface-50 border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
                  productsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: productsVisible ? `${150 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <product.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="inline-block px-3 py-1 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.1em] text-brand-600 uppercase mb-3">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-black mb-3">{product.name}</h3>
                <p className="text-sm text-surface-500 leading-relaxed mb-5">{product.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.highlights.map((highlight, j) => (
                    <span key={j} className="px-3 py-1 bg-white border border-surface-200 rounded-lg text-xs font-semibold text-surface-600">
                      {highlight}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  View Product <FiArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY OUR PRODUCTS ========== */}
      <section ref={whyRef} aria-label="Why Our Products" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Why Our Products" isVisible={whyVisible} />
            <SectionHeading isVisible={whyVisible}>Built Different. Built Better.</SectionHeading>
            <SectionSubtext isVisible={whyVisible}>Every product reflects our commitment to quality, innovation, and long-term value.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className={`group p-8 bg-white border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 ${
                  whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: whyVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <item.icon size={24} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section ref={industriesRef} aria-label="Industries" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Industries" isVisible={industriesVisible} />
            <SectionHeading isVisible={industriesVisible}>Trusted Across Industries</SectionHeading>
            <SectionSubtext isVisible={industriesVisible}>Our products serve diverse sectors with tailored, reliable solutions.</SectionSubtext>
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

      {/* ========== FUTURE PRODUCTS ========== */}
      <section ref={futureRef} aria-label="Coming Soon" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Coming Soon" isVisible={futureVisible} />
            <SectionHeading isVisible={futureVisible}>More Innovative Products Coming Soon</SectionHeading>
            <SectionSubtext isVisible={futureVisible}>We're continuously developing new technology solutions to address emerging business challenges.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {futureProducts.map((product, i) => (
              <div
                key={i}
                className={`p-8 bg-white border border-dashed border-surface-200 rounded-2xl opacity-70 ${
                  futureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: futureVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-12 h-12 bg-surface-100 rounded-xl flex items-center justify-center mb-5">
                  <product.icon size={24} className="text-surface-400" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{product.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed mb-4">{product.desc}</p>
                <span className="inline-block px-3 py-1 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.1em] text-brand-600 uppercase">
                  Coming Soon
                </span>
              </div>
            ))}
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
                Ready to Explore Our Products?
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-surface-400 leading-relaxed mb-10">
                Request a product demo or speak with our team to discover how Vultus Go can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5">
                  Request a Product Demo <FiArrowRight size={18} />
                </Link>
                <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5">
                  Contact Sales <FiArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsOverview;