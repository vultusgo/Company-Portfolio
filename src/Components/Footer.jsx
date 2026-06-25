import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiChevronRight,
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Products", path: "#products" },
  { name: "Team", path: "#team" },
  { name: "Technology", path: "#technology" },
  { name: "Vision", path: "#vision" },
  { name: "FAQ", path: "#faq" },
  { name: "Contact", path: "#contact" },
];

const productsLinks = [
  "Vultus Attendance",
  "Vultus Identity",
  "Vultus Security",
  "Vultus Analytics",
  "Future Innovations",
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer role="contentinfo" aria-label="Vultus Go site footer" className="relative bg-[#111111] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section: CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 lg:p-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl mb-24 overflow-hidden group"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full group-hover:bg-orange-500/30 transition-colors duration-700" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black font-serif leading-tight mb-4">
                Ready To Build The Future With VultusGo?
              </h2>
              <p className="text-gray-400 text-lg">
                Connect, collaborate, and explore innovative technology
                solutions designed to empower your organization.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#contact"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 transition-all active:scale-95 text-center min-w-[180px]"
              >
                Contact Us
              </a>
              <a
                href="#products"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-white font-black rounded-2xl transition-all active:scale-95 text-center min-w-[180px]"
              >
                Explore Products
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24"
        >
          {/* Column 1 - Brand */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-lg font-bold font-serif shadow-orange-500/30">
                <span className="text-black text-3xl">V</span>
                <span className="text-orange-500 text-2xl">G</span>
              </div>
              <span className="text-2xl font-black font-serif tracking-tighter">
                Vultus<span className="text-orange-500">Go</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Vultus Go (VultusGo) is a technology company focused on developing
              intelligent software products, automation systems, and future-ready
              digital solutions for organizations worldwide.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Innovation", "Intelligence", "Technology"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Products */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-orange-500">
              Products
            </h4>
            <ul className="flex flex-col gap-4">
              {productsLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <h4 className="text-lg font-bold uppercase tracking-widest text-orange-500">
              Contact Info
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:vultusgo@gmail.com"
                    className="font-bold hover:text-orange-500 transition-colors"
                  >
                    vultusgo@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+15550000000"
                    className="font-bold hover:text-orange-500 transition-colors"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <FiClock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                    Hours
                  </p>
                  <p className="font-bold">Mon - Fri: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
        >
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <h5 className="text-xl font-black font-serif">Connect With Us</h5>
            <p className="text-gray-500 text-sm">
              Stay updated with our latest innovations.
            </p>
          </div>
          <div className="flex gap-4">
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/company/vultusgo", label: "Vultus Go on LinkedIn" },
              { icon: FaGithub, href: "https://github.com/vultusgo", label: "Vultus Go on GitHub" },
              { icon: FaXTwitter, href: "https://twitter.com/vultusgo", label: "Vultus Go on X (Twitter)" },
              { icon: FaInstagram, href: "https://www.instagram.com/vultusgo", label: "Vultus Go on Instagram" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.label}
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>© 2026 Vultus Go. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" aria-label="Vultus Go Privacy Policy" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" aria-label="Vultus Go Terms of Service" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" aria-label="Vultus Go Cookies Policy" className="hover:text-orange-500 transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>

      {/* Futuristic soft glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </footer>
  );
};

export default Footer;
