import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiSend } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "vultusgo@gmail.com", href: "mailto:vultusgo@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
  { icon: FiMapPin, label: "Location", value: "Silicon Valley, CA", href: "#" },
];

const Contact = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contact Vultus Go"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full text-[10px] font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6">
              Contact Us
            </span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Let's Build Something Great Together
          </h2>
          <p className={`text-lg text-surface-500 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Have a project in mind? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 max-w-5xl mx-auto">
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-center gap-5 p-5 bg-surface-50 border border-surface-100 rounded-2xl hover:border-brand-100 transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-500 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all">
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
            <p className="text-[10px] font-semibold text-surface-400 uppercase tracking-wider pt-2">
              Mon — Fri: 9 AM — 6 PM
            </p>
          </div>

          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-surface-50 border border-surface-100 rounded-3xl shadow-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                    <FiSend size={28} className="text-brand-500" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Message Sent!</h3>
                  <p className="text-surface-500">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField id="name" name="name" label="Full Name" required value={formData.name} onChange={handleChange} />
                    <InputField id="email" name="email" label="Email Address" type="email" required value={formData.email} onChange={handleChange} />
                  </div>
                  <InputField id="subject" name="subject" label="Subject" required value={formData.subject} onChange={handleChange} />
                  <TextareaField id="message" name="message" label="Your Message" required value={formData.message} onChange={handleChange} />
                  <button
                    type="submit"
                    className="w-full py-4 bg-black hover:bg-surface-900 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message
                    <FiArrowRight size={18} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ id, name, label, type = "text", required, value, onChange }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder=" "
      className="peer w-full px-5 py-3.5 bg-white border border-surface-200 rounded-xl outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-sm text-black"
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-3.5 text-sm text-surface-400 transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-brand-500 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:text-brand-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 cursor-text"
    >
      {label}
    </label>
  </div>
);

const TextareaField = ({ id, name, label, required, value, onChange }) => (
  <div className="relative">
    <textarea
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      rows={4}
      placeholder=" "
      className="peer w-full px-5 py-3.5 bg-white border border-surface-200 rounded-xl outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-sm text-black resize-none"
    />
    <label
      htmlFor={id}
      className="absolute left-4 top-3.5 text-sm text-surface-400 transition-all peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-brand-500 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:text-brand-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 cursor-text"
    >
      {label}
    </label>
  </div>
);

export default Contact;