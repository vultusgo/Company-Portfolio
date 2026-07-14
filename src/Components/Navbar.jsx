import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    hasDropdown: true,
    children: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "Mobile App Development", path: "/services/mobile-app-development" },
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "AI & Machine Learning", path: "/services/ai-machine-learning" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
      { name: "Digital Transformation", path: "/services/digital-transformation" },
      { name: "Maintenance & Support", path: "/services/maintenance-support" },
    ],
  },
  {
    name: "Products",
    path: "/products",
    hasDropdown: true,
    children: [
      { name: "Facial Recognition Attendance", path: "/products/facial-recognition-attendance-system" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact", hash: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
  }, [location]);

  const handleNavClick = (e, link) => {
    setIsMobileOpen(false);
    if (location.pathname === "/" && link.hash) {
      e.preventDefault();
      const el = document.getElementById(link.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (link) => {
    if (link.path === "/about" && location.pathname === "/about") return true;
    if (link.path === "/contact" && location.pathname === "/contact") return true;
    if (link.path === "/services" && location.pathname.startsWith("/services")) return true;
    if (link.path === "/products" && location.pathname.startsWith("/products")) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_0_rgb(0_0_0/0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Vultus Go — Home">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur-md" />
              <div className="relative w-full h-full bg-white rounded-xl border border-surface-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-lg lg:text-xl font-bold text-surface-900">
                  V<span className="text-brand-500">G</span>
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-surface-900 tracking-tight">
                Vultus<span className="text-brand-500">Go</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link);
              if (link.hasDropdown) {
                const isServices = link.name === "Services";
                const isProducts = link.name === "Products";
                const isOpen = isServices ? servicesOpen : isProducts ? productsOpen : false;
                const setIsOpen = isServices ? setServicesOpen : isProducts ? setProductsOpen : () => {};

                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => {
                      setServicesOpen(false);
                      setProductsOpen(false);
                      setIsOpen(true);
                    }}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1 ${
                        active
                          ? "text-brand-600 bg-brand-50"
                          : "text-surface-600 hover:text-surface-900 hover:bg-surface-50"
                      }`}
                    >
                      {link.name}
                      <FiChevronDown size={14} className={`text-surface-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </Link>
                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 mt-1 w-64 bg-white border border-surface-100 rounded-2xl shadow-xl shadow-black/5 overflow-hidden transition-all duration-200 ${
                      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}>
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-5 py-2.5 text-sm font-medium transition-colors ${
                              location.pathname === child.path
                                ? "text-brand-600 bg-brand-50"
                                : "text-surface-600 hover:text-brand-600 hover:bg-brand-50"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.hash ? `${link.path}#${link.hash}` : link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    active
                      ? "text-brand-600 bg-brand-50"
                      : "text-surface-600 hover:text-surface-900 hover:bg-surface-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/#contact"
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 transition-colors cursor-pointer"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-0 left-0 w-full h-full bg-white z-[110] lg:hidden transition-all duration-400 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
              <div className="w-10 h-10 bg-white rounded-xl border border-surface-200 flex items-center justify-center shadow-sm">
                <span className="text-lg font-bold">V<span className="text-brand-500">G</span></span>
              </div>
              <span className="text-xl font-bold">Vultus<span className="text-brand-500">Go</span></span>
            </Link>
            <button onClick={() => setIsMobileOpen(false)} className="p-2.5 rounded-xl bg-surface-100 hover:bg-surface-200 transition-colors cursor-pointer" aria-label="Close menu">
              <FiX size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 overflow-y-auto flex-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => {
                        const isServices = link.name === "Services";
                        const isProducts = link.name === "Products";
                        if (isServices) {
                          setServicesOpen(!servicesOpen);
                          setProductsOpen(false);
                        } else if (isProducts) {
                          setProductsOpen(!productsOpen);
                          setServicesOpen(false);
                        }
                      }}
                      className="flex items-center justify-between w-full px-4 py-4 text-lg font-semibold text-surface-800 hover:text-brand-500 hover:bg-brand-50 rounded-xl transition-all cursor-pointer"
                    >
                      {link.name}
                      <FiChevronDown size={18} className={`text-surface-400 transition-transform duration-200 ${link.name === "Services" ? servicesOpen : productsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {(link.name === "Services" ? servicesOpen : productsOpen) && (
                      <div className="ml-4 mb-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsMobileOpen(false)}
                            className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                              location.pathname === child.path
                                ? "text-brand-600 bg-brand-50"
                                : "text-surface-600 hover:text-brand-500 hover:bg-brand-50"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.hash ? `${link.path}#${link.hash}` : link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center justify-between px-4 py-4 text-lg font-semibold rounded-xl transition-all ${
                      isActive(link)
                        ? "text-brand-600 bg-brand-50"
                        : "text-surface-800 hover:text-brand-500 hover:bg-brand-50"
                    }`}
                  >
                    {link.name}
                    <FiArrowRight size={18} className="text-surface-400" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-4">
            <div className="h-px bg-surface-100" />
            <p className="text-sm text-surface-500">vultusgo@gmail.com</p>
            <Link
              to="/#contact"
              onClick={() => setIsMobileOpen(false)}
              className="block w-full py-4 bg-brand-500 hover:bg-brand-600 text-white text-center font-semibold rounded-xl transition-all shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;