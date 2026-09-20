import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Shield, Phone, Menu, X, ArrowRight, Clock } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-slate-800/80 py-3"
          : "bg-slate-950/80 backdrop-blur-sm border-b border-slate-900/60 py-4"
      }`}
    >
      {/* Top micro-bar for quick contact and hours */}
      <div className="hidden lg:block border-b border-slate-900 pb-2 mb-2 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Gurugram &amp; NCR Service Available
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {COMPANY_INFO.hours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>Call Us: {COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-[124px] px-0">
        <div className="flex items-center justify-between">
          {/* Logo & Company Identity */}
          <Link
            to="/"
            id="header-brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-sky-900/40 border border-sky-400/30 group-hover:scale-105 transition-transform duration-200">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-wider text-white font-heading">
                  MEXTECH
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800/60">
                  Est. 2021
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-tight text-slate-400 -mt-0.5 hidden sm:block">
                Security System &amp; IT Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-white bg-slate-900 border border-slate-800 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="header-call-btn"
              className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white px-3.5 py-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <Link
              to="/contact"
              id="header-quote-btn"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-sm font-bold px-4 py-2.5 rounded-lg shadow-sm shadow-sky-900/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/contact"
              className="text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white px-3 py-1.5 rounded-md"
            >
              Quote
            </Link>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-slate-950/98 border-b border-slate-800 px-6 py-5 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-sky-400 bg-sky-950/50 border border-sky-800/60"
                      : "text-slate-200 hover:text-white hover:bg-slate-900"
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold text-slate-200 bg-slate-900 border border-slate-800"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-blue-600"
              >
                <span>Get a Free Site Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
