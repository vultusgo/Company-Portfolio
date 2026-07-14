import React from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#featured-product" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ],
  services: [
    { name: "AI Solutions", href: "/#services" },
    { name: "Web Development", href: "/#services" },
    { name: "Mobile Apps", href: "/#services" },
    { name: "Enterprise Software", href: "/#services" },
    { name: "Cloud Solutions", href: "/#services" },
  ],
  products: [
    { name: "Attendance System", href: "/#featured-product" },
    { name: "Vultus Identity", href: "/#featured-product" },
    { name: "Vultus Security", href: "/#featured-product" },
    { name: "Vultus Analytics", href: "/#featured-product" },
  ],
};

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/vultusgo", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/vultusgo", label: "GitHub" },
  { icon: FaXTwitter, href: "https://twitter.com/vultusgo", label: "X (Twitter)" },
  { icon: FaInstagram, href: "https://www.instagram.com/vultusgo", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Vultus Go site footer"
      className="relative bg-black text-white pt-20 pb-8 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold">
                  V<span className="text-brand-400">G</span>
                </span>
              </div>
              <span className="text-xl font-bold">
                Vultus<span className="text-brand-400">Go</span>
              </span>
            </div>
            <p className="text-sm text-surface-400 leading-relaxed max-w-sm mb-6">
              Vultus Go is an AI and technology company building intelligent
              software solutions that help organizations automate, secure, and
              grow in the digital age.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-brand-500/20 border border-white/10 rounded-lg flex items-center justify-center text-surface-400 hover:text-brand-400 transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <FiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-surface-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <FiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className="text-sm text-surface-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <FiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{product.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/5 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-brand-400">
              <FiMail size={16} />
            </div>
            <div>
              <p className="text-[10px] text-surface-500 uppercase tracking-wider font-medium">Email</p>
              <a href="mailto:vultusgo@gmail.com" className="text-sm text-surface-300 hover:text-brand-400 transition-colors">
                vultusgo@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-brand-400">
              <FiPhone size={16} />
            </div>
            <div>
              <p className="text-[10px] text-surface-500 uppercase tracking-wider font-medium">Phone</p>
              <a href="tel:+15550000000" className="text-sm text-surface-300 hover:text-brand-400 transition-colors">
                +1 (555) 000-0000
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-brand-400">
              <FiMapPin size={16} />
            </div>
            <div>
              <p className="text-[10px] text-surface-500 uppercase tracking-wider font-medium">Location</p>
              <p className="text-sm text-surface-300">Silicon Valley, CA</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-surface-500">
          <p>© {new Date().getFullYear()} Vultus Go. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </footer>
  );
};

export default Footer;