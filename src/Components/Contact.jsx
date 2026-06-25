import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "vultusgo@gmail.com",
    href: "mailto:vultusgo@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Silicon Valley, CA",
    href: "#",
  },
  {
    icon: FiClock,
    label: "Business Hours",
    value: "Mon - Fri: 9 AM - 6 PM",
    href: null,
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation for form submission logic goes here
    console.log("Form submitted:", formState);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Vultus Go"
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Aesthetics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase mb-4 inline-block"
          >
            CONTACT US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-serif text-gray-900 leading-tight mb-6"
          >
            Let's Build The Future Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Have a project, idea, partnership opportunity, or business
            requirement? Connect with VultusGo and let's create innovative
            solutions together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Left Section: Info Cards */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-xl shadow-orange-500/5 group transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-bold text-gray-900 hover:text-orange-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-gray-900">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase mb-6 ml-2">
                Follow Our Journey
              </p>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, link: "https://www.linkedin.com/company/vultusgo", label: "Vultus Go on LinkedIn" },
                  { icon: FaGithub, link: "https://github.com/vultusgo", label: "Vultus Go on GitHub" },
                  { icon: FaXTwitter, link: "https://twitter.com/vultusgo", label: "Vultus Go on X (Twitter)" },
                  { icon: FaInstagram, link: "https://www.instagram.com/vultusgo", label: "Vultus Go on Instagram" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    aria-label={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg border border-gray-100 hover:text-orange-500 transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-2xl shadow-orange-500/10"
          >
            <form onSubmit={handleSubmit} aria-label="Contact Vultus Go form" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField id="name" name="name" label="Full Name" type="text" required />
                <InputField id="company" name="company" label="Company Name" type="text" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  required
                />
                <InputField id="phone" name="phone" label="Phone Number" type="tel" />
              </div>
              <InputField id="subject" name="subject" label="Subject" type="text" required />
              <div className="relative">
                <textarea
                  required
                  rows={5}
                  placeholder=" "
                  className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-gray-900 peer resize-none"
                  id="message"
                  name="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-6 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-orange-500 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-orange-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                SEND MESSAGE
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 lg:p-16 bg-gray-900 rounded-[3rem] overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-black font-serif text-white mb-6">
              Ready To Transform Your Ideas Into Reality?
            </h3>
            <p className="max-w-2xl text-lg text-gray-400 mb-10">
              Our team of experts is ready to discuss your projects, technology
              requirements, and how VultusGo can help you achieve your goals.
            </p>
            <button className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all active:scale-95 cursor-pointer">
              Schedule a Discussion
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InputField = ({ id, name, label, type, required }) => (
  <div className="relative">
    <input
      type={type}
      required={required}
      placeholder=" "
      className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:border-orange-500 transition-all font-medium text-gray-900 peer"
      id={id}
      name={name || id}
    />
    <label
      htmlFor={id}
      className="absolute left-6 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-orange-500 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:text-orange-500 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
    >
      {label}
    </label>
  </div>
);

export default Contact;
