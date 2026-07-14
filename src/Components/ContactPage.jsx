import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiSend, FiCheck, FiAlertCircle, FiClock, FiArrowDown, } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { init, send } from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer"

/* ============================================================
   CONFIGURATION
   ============================================================ */

// EmailJS Configuration
// These values should be stored in environment variables
// Create a .env file in the root directory with:
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  init(EMAILJS_PUBLIC_KEY);
}

/* ============================================================
   DATA
   ============================================================ */

const contactInfo = [
  { icon: FiMail, label: "Email", value: "vultusgo@gmail.com", href: "mailto:vultusgo@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
  { icon: FiMapPin, label: "Location", value: "Silicon Valley, CA", href: "#" },
];

const whyContactUs = [
  { icon: FiCheck, title: "Free Project Consultation", desc: "Get expert advice on your project requirements at no cost." },
  { icon: FiCheck, title: "Custom Software Solutions", desc: "Tailored solutions designed specifically for your business needs." },
  { icon: FiCheck, title: "AI Development", desc: "Cutting-edge AI and machine learning solutions for modern challenges." },
  { icon: FiCheck, title: "Fast Response", desc: "We usually respond within 24 business hours." },
  { icon: FiCheck, title: "Long-Term Technical Support", desc: "Dedicated support to ensure your solutions continue to perform." },
  { icon: FiCheck, title: "Enterprise-Grade Development", desc: "Scalable, secure, and robust solutions built for enterprise standards." },
];

const faqs = [
  { q: "How quickly will I receive a response?", a: "We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly during business hours." },
  { q: "Do you work with startups?", a: "Absolutely. We love working with startups and early-stage companies. We offer flexible engagement models and scalable solutions that grow with your business." },
  { q: "Can I request a custom software solution?", a: "Yes. Custom software development is one of our core specialties. We work closely with you to understand your requirements and build tailored solutions." },
  { q: "Do you provide long-term support?", a: "Yes. We offer comprehensive maintenance and support packages to ensure your software continues to run smoothly after deployment." },
  { q: "Can I schedule a consultation?", a: "Yes. Use the contact form to request a consultation, or reach out to us directly. We'll schedule a call at your convenience to discuss your project." },
];

/* ============================================================
   REUSABLE COMPONENTS
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

const InputField = ({ id, name, label, type = "text", required, value, onChange, error }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder=" "
      className={`peer w-full px-5 py-3.5 bg-white border ${error ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-surface-200 focus:border-brand-400 focus:ring-brand-100"} rounded-xl outline-none transition-all text-sm text-black`}
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-3.5 text-sm text-surface-400 transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-brand-500 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:text-brand-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 cursor-text"
    >
      {label}
    </label>
    {error && (
      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
        <FiAlertCircle size={12} />
        {error}
      </p>
    )}
  </div>
);

const TextareaField = ({ id, name, label, required, value, onChange, error }) => (
  <div className="relative">
    <textarea
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      rows={6}
      placeholder=" "
      className={`peer w-full px-5 py-3.5 bg-white border ${error ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-surface-200 focus:border-brand-400 focus:ring-brand-100"} rounded-xl outline-none transition-all text-sm text-black resize-none`}
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-3.5 text-sm text-surface-400 transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-brand-500 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:text-brand-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 cursor-text"
    >
      {label}
    </label>
    {error && (
      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
        <FiAlertCircle size={12} />
        {error}
      </p>
    )}
  </div>
);

/* ============================================================
   CONTACT PAGE
   ============================================================ */

const ContactPage = () => {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 });
  const [whyRef, whyVisible] = useScrollReveal({ threshold: 0.1 });
  const [faqRef, faqVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if EmailJS is configured
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.warn("EmailJS not configured. Please set up environment variables.");
        // For development/demo purposes, show success message
        // In production, this would send the email
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "vultusgo@gmail.com",
      };

      await send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Navbar />
      {/* ========== HERO ========== */}
      <section
        ref={heroRef}
        aria-label="Contact Vultus Go"
        className="relative w-full min-h-[60vh] flex items-center overflow-hidden bg-white pt-28 lg:pt-36"
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
              <li className="text-surface-600 font-medium" aria-current="page">Contact</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <SectionLabel text="Contact Us" isVisible={heroVisible} />
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-black mb-8 transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Let's Build Something
              <br />
              <span className="text-brand-500">Great Together</span>
            </h1>
            <p className={`text-lg lg:text-xl text-surface-500 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              We'd love to hear about your project. Whether you're looking for AI solutions, custom software, web development, or mobile applications, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section ref={formRef} aria-label="Contact Form" className="relative w-full py-24 lg:py-32 overflow-hidden bg-surface-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/40 blur-[120px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-300 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-5 p-5 bg-white border border-surface-100 rounded-2xl hover:border-brand-100 transition-all group">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-semibold text-black hover:text-brand-500 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-black">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-5 p-5 bg-white border border-surface-100 rounded-2xl">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-500">
                  <FiClock size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider mb-0.5">Business Hours</p>
                  <p className="text-sm font-semibold text-black">Mon — Fri: 9 AM — 6 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="p-8 bg-white border border-surface-100 rounded-3xl shadow-sm">
                {submitStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                      <FiCheck size={28} className="text-brand-500" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Message Sent Successfully!</h3>
                    <p className="text-surface-500 mb-6">Thank you for contacting Vultus Go. We've received your message and will get back to you as soon as possible.</p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : submitStatus === "error" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <FiAlertCircle size={28} className="text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Something Went Wrong</h3>
                    <p className="text-surface-500 mb-6">We couldn't send your message. Please try again in a few moments or email us directly at vultusgo@gmail.com</p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        id="name"
                        name="name"
                        label="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <InputField
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>
                    <InputField
                      id="subject"
                      name="subject"
                      label="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      error={errors.subject}
                    />
                    <TextareaField
                      id="message"
                      name="message"
                      label="Your Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-black hover:bg-surface-900 disabled:bg-surface-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FiArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CONTACT US ========== */}
      <section ref={whyRef} aria-label="Why Contact Us" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <SectionLabel text="Why Contact Us" isVisible={whyVisible} />
            <SectionHeading isVisible={whyVisible}>What You Get When You Reach Out</SectionHeading>
            <SectionSubtext isVisible={whyVisible}>We're committed to delivering exceptional value with every interaction.</SectionSubtext>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyContactUs.map((item, i) => (
              <div
                key={i}
                className={`group p-6 bg-surface-50 border border-surface-100 rounded-2xl hover:border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: whyVisible ? `${200 + i * 80}ms` : "0ms", transitionProperty: "opacity, transform" }}
              >
                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <item.icon size={20} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
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

      {/* ========== CTA SECTION ========== */}
      <section ref={ctaRef} aria-label="Get Started" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`relative p-10 lg:p-16 bg-black rounded-[2.5rem] overflow-hidden text-center transition-all duration-700 ${
            ctaVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-brand-500/5" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                Let's Turn Your Ideas Into
                <br />
                <span className="text-brand-400">Intelligent Digital Solutions</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-surface-400 leading-relaxed mb-10">
                Ready to start your project? Get in touch and let's discuss how we can help transform your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5">
                  Schedule a Consultation <FiArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5">
                  Explore Our Services <FiArrowRight size={18} />
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

export default ContactPage;