import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiZap, FiChevronRight } from "react-icons/fi";

// Navigation configuration for easy scalability
const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Products", path: "#products" },
  { name: "Team", path: "#team" },
  { name: "Technology", path: "#technology" },
  { name: "Vision", path: "#vision" },
  { name: "FAQ", path: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle navbar appearance and scroll behavior
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section on scroll
  useEffect(() => {
    const options = { threshold: 0.5 };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const sections = navLinks
      .map((link) => document.getElementById(link.path.replace("#", "")))
      .filter((section) => section !== null);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Prevent scrolling the background when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-orange-50 backdrop-blur-xl shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left Section: Logo & Branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 bg-gradient-to-br from-white/10 to-white/90 rounded-xl flex items-center justify-center shadow-lg font-bold font-serif shadow-orange-500/30 group-hover:rotate-6 transition-transform duration-300">
              <span className="text-black text-3xl">V</span>
              <span className="text-orange-500 text-2xl">G</span>
            </div>
            <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-xl scale-0 group-hover:scale-150 transition-transform duration-500 -z-10" />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-2xl font-black font-serif leading-none transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-gray-900"}`}
            >
              <span>Vultus</span>
              <span className="text-orange-500">Go</span>
            </span>
          </div>
        </Link>

        {/* Center Section: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.path.replace("#", "");
            return (
              <a
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-full group ${
                  isActive
                    ? "text-orange-500"
                    : isScrolled
                      ? "text-gray-600 hover:text-orange-500"
                      : "text-black hover:text-orange-500"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <span className="absolute inset-0 bg-orange-500/10 rounded-full transition-all duration-300 animate-pulse" />
                )}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-orange-500 rounded-full transition-all duration-300 ${
                    isActive ? "w-4" : "w-0 group-hover:w-2"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right Section: Contact Action */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-black rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2.5 rounded-2xl transition-all cursor-pointer duration-300 ${
            isScrolled
              ? "bg-gray-100 dark:bg-white/5 text-gray-900"
              : "bg-gray-100 text-gray-900"
          }`}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Experience: Full-screen Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[400px] h-screen bg-white z-[110] lg:hidden transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-8">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg shadow-2xl shadow-orange-500/30 flex items-center justify-center font-serif flex items-center justify-center font-bold">
                <span className="text-black text-3xl">V</span>
                <span className="text-orange-500 text-2xl">G</span>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 bg-gray-100 rounded-full text-gray-900 hover:bg-gray-200 cursor-pointer transition-colors"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
              Navigation
            </p>
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.path.replace("#", "");
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-black tracking-tighter transition-all duration-500 flex items-center justify-between py-2 border-b border-gray-50 group ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-12 opacity-0"
                  } ${isActive ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-serif ${isActive ? "text-orange-500" : "text-gray-300"}`}
                    >
                      0{i + 1}
                    </span>
                    {link.name}
                  </div>
                  <div
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-orange-500 text-white" : "bg-gray-50 text-gray-400 group-hover:bg-orange-500 group-hover:text-white"}`}
                  >
                    <FiChevronRight
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "translate-x-0"
                          : "-translate-x-1 group-hover:translate-x-0"
                      }`}
                      size={18}
                    />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-auto">
            <div className="mb-8">
              <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-2">
                Get in touch
              </p>
              <p className="text-gray-600 font-medium">vultusgo@gmail.com</p>
            </div>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full py-5 bg-gray-900 hover:bg-orange-500 text-white text-center text-lg font-black rounded-2xl transition-all duration-500 transform shadow-xl shadow-gray-200 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${navLinks.length * 70}ms` }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
