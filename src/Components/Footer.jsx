import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import {
  contactInfo,
  socialLinks,
  mailtoHref,
  telHref,
  devPortal,
} from "../data/contactInfo";

const footerLinks = {
  company: [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/products" },
    { name: "Contact", to: "/contact" },
  ],
  services: [
    { name: "Web Development", to: "/services/web-development" },
    { name: "Mobile Apps", to: "/services/mobile-app-development" },
    { name: "Custom Software", to: "/services/custom-software-development" },
    { name: "AI & Machine Learning", to: "/services/ai-machine-learning" },
    { name: "UI/UX Design", to: "/services/ui-ux-design" },
  ],
  products: [
    { name: "Facial Recognition Attendance", to: "/products/facial-recognition-attendance-system" },
    { name: "All Products", to: "/products" },
  ],
};

const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  x: FaXTwitter,
  instagram: FaInstagram,
};

const linkClass =
  "text-sm text-surface-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group";

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="font-mono text-xs font-medium tracking-wider uppercase text-surface-400 mb-5">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.to} className={linkClass}>
            <span>{link.name}</span>
            <FiArrowUpRight
              size={12}
              className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon: Icon, label, children }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-brand-400 shrink-0">
      <Icon size={16} aria-hidden="true" />
    </div>
    <div>
      <p className="font-mono text-xs text-surface-400 uppercase tracking-wider">{label}</p>
      {children}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative bg-surface-950 text-white pt-20 pb-8 overflow-hidden border-t border-surface-800">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5" aria-label="Vultus Go home">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold">
                  V<span className="text-brand-400">G</span>
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Vultus<span className="text-brand-400">Go</span>
              </span>
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed max-w-sm mb-6">
              Vultus Go is an AI and technology company building intelligent
              software that helps organizations automate, secure, and grow.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-400/60 rounded-lg flex items-center justify-center text-surface-400 hover:text-white transition-all"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Products" links={footerLinks.products} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/10 mb-8">
          <ContactItem icon={FiMail} label="Email">
            <a href={mailtoHref} className="text-sm text-surface-300 hover:text-white transition-colors">
              {contactInfo.email}
            </a>
          </ContactItem>
          <ContactItem icon={FiPhone} label="Phone">
            <a href={telHref} className="text-sm text-surface-300 hover:text-white transition-colors">
              {contactInfo.phone.display}
            </a>
          </ContactItem>
          <ContactItem icon={FiMapPin} label="Location">
            <p className="text-sm text-surface-300">{contactInfo.address.display}</p>
          </ContactItem>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-surface-400">
          <p>© {new Date().getFullYear()} Vultus Go. All rights reserved.</p>
          <a
            href={devPortal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-surface-300 hover:text-white transition-colors"
          >
            {devPortal.label} · dev.vultusgo.in
            <FiArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
