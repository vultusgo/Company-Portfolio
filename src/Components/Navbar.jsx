import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiArrowRight, FiArrowUpRight, FiTerminal } from "react-icons/fi";
import { devPortal, contactInfo } from "../data/contactInfo";

const navLinks = [
  { name: "Home", to: "/", end: true },
  {
    name: "Services",
    to: "/services",
    children: [
      { name: "Web Development", to: "/services/web-development" },
      { name: "Mobile App Development", to: "/services/mobile-app-development" },
      { name: "Custom Software Development", to: "/services/custom-software-development" },
      { name: "AI & Machine Learning", to: "/services/ai-machine-learning" },
      { name: "UI/UX Design", to: "/services/ui-ux-design" },
      { name: "Digital Transformation", to: "/services/digital-transformation" },
      { name: "Maintenance & Support", to: "/services/maintenance-support" },
    ],
  },
  {
    name: "Products",
    to: "/products",
    children: [
      { name: "Facial Recognition Attendance", to: "/products/facial-recognition-attendance-system" },
    ],
  },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const desktopLink = (isActive) =>
  `px-3 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1 ${
    isActive
      ? "text-brand-700 bg-brand-50"
      : "text-surface-600 hover:text-surface-900 hover:bg-surface-100"
  }`;

/** External portal link. Always opens safely in a new tab. */
const DevStudioPill = ({ className = "", onClick }) => (
  <a
    href={devPortal.url}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    title={devPortal.description}
    className={`group inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider uppercase text-surface-800 bg-white border border-surface-300 rounded-lg px-3 py-2 hover:border-brand-700 hover:text-brand-700 transition-colors ${className}`}
  >
    <FiTerminal size={14} aria-hidden="true" />
    {devPortal.label}
    <FiArrowUpRight
      size={14}
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
    <span className="sr-only">(opens in a new tab)</span>
  </a>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null); // mobile accordion
  const { pathname } = useLocation();

  // Close menu on navigation (adjust state during render, not in an effect)
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileOpen(false);
    setExpanded(null);
  }

  // Lock body scroll while the mobile menu is open; close on Escape
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] bg-white/80 backdrop-blur-md border-b border-surface-200/50">
        <nav className="container-x" aria-label="Primary">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5" aria-label="Vultus Go home">
              <span className="w-8 h-8 rounded-lg bg-surface-950 flex items-center justify-center text-sm font-bold text-white">
                V<span className="text-brand-400">G</span>
              </span>
              <span className="hidden sm:inline text-lg font-bold tracking-tight text-surface-900">
                Vultus<span className="text-brand-700">Go</span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="relative group">
                    <NavLink to={link.to} className={({ isActive }) => desktopLink(isActive)}>
                      {link.name}
                      <FiChevronDown
                        size={14}
                        aria-hidden="true"
                        className="text-surface-500 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                    </NavLink>
                    {/* Dropdown: CSS-driven so it works with hover AND keyboard focus */}
                    <div className="absolute left-0 top-full pt-2 w-72 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-150">
                      <div className="bg-white border border-surface-200 rounded-xl shadow-[var(--shadow-card-hover)] p-1.5">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              `block px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                isActive
                                  ? "text-brand-700 bg-brand-50"
                                  : "text-surface-700 hover:text-surface-900 hover:bg-surface-100"
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) => desktopLink(isActive)}
                  >
                    {link.name}
                  </NavLink>
                ),
              )}
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <DevStudioPill />
              <Link to="/contact" className="btn btn-primary">
                Request a Demo
                <FiArrowRight size={16} className="btn-arrow" aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-surface-200 bg-white hover:bg-surface-100 transition-colors cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/*
        Mobile menu is a SIBLING of <header>, not a child: backdrop-filter on the
        header creates a containing block that would trap a position:fixed child.
      */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[110] bg-white lg:hidden transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col h-full px-6 pb-6">
          <div className="flex items-center justify-between h-16 shrink-0">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Vultus Go home">
              <span className="w-8 h-8 rounded-lg bg-surface-950 flex items-center justify-center text-sm font-bold text-white">
                V<span className="text-brand-400">G</span>
              </span>
              <span className="text-lg font-bold tracking-tight">
                Vultus<span className="text-brand-700">Go</span>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-surface-200 hover:bg-surface-100 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <FiX size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="border-b border-surface-100">
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === link.name ? null : link.name)}
                    aria-expanded={expanded === link.name}
                    className="flex items-center justify-between w-full py-4 text-lg font-semibold text-surface-900 cursor-pointer"
                  >
                    {link.name}
                    <FiChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`text-surface-500 transition-transform duration-200 ${
                        expanded === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded === link.name && (
                    <div className="pb-3 pl-3 space-y-1">
                      <Link to={link.to} className="block py-2.5 text-sm font-medium text-brand-700">
                        All {link.name.toLowerCase()}
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block py-2.5 text-sm font-medium text-surface-700 hover:text-brand-700"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 text-lg font-semibold border-b border-surface-100 ${
                      isActive ? "text-brand-700" : "text-surface-900"
                    }`
                  }
                >
                  {link.name}
                  <FiArrowRight size={18} aria-hidden="true" className="text-surface-500" />
                </NavLink>
              ),
            )}

            {/* Dev Studio card */}
            <a
              href={devPortal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-between gap-4 p-4 rounded-xl border border-surface-200 bg-surface-50"
            >
              <span>
                <span className="flex items-center gap-2 font-mono text-xs font-medium tracking-wider uppercase text-brand-700">
                  <FiTerminal size={14} aria-hidden="true" /> {devPortal.label}
                </span>
                <span className="block mt-1 text-sm text-surface-700">{devPortal.description}</span>
              </span>
              <FiArrowUpRight size={18} aria-hidden="true" className="text-surface-700 shrink-0" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </nav>

          <div className="shrink-0 pt-4 space-y-3 border-t border-surface-100">
            <p className="text-sm text-surface-600">{contactInfo.email}</p>
            <Link to="/contact" className="btn btn-primary btn-lg w-full">
              Request a Demo
              <FiArrowRight size={16} className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
