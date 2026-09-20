import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";
import { PolicyModal } from "./PolicyModal";

export function Footer() {
  const [policyType, setPolicyType] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer id="main-footer" className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Column 1: Company Profile (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="flex items-center gap-3 group inline-block">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-sky-900/30 border border-sky-400/30">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-extrabold text-xl tracking-wider text-white font-heading">
                    MEXTECH
                  </span>
                  <p className="text-[11px] font-medium text-slate-400">
                    Security System &amp; IT Solutions
                  </p>
                </div>
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Founded in 2021 in Gurugram, Haryana. Delivering dependable CCTV surveillance, enterprise networking, biometric access, and complete security infrastructure with genuine hardware and rapid on-site support.
              </p>

              {/* Brands trust pills */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Brands We Specialize In
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {COMPANY_INFO.brandsDealt.map((brand) => (
                    <span
                      key={brand}
                      className="text-[11px] bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
                Quick Navigation
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                    <span>All 13 Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                    <span>Emergency Call</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Featured Solutions */}
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
                Key Solutions
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/services/cctv-surveillance" className="text-slate-400 hover:text-sky-400 transition-colors">
                    CCTV &amp; Surveillance
                  </Link>
                </li>
                <li>
                  <Link to="/services/networking" className="text-slate-400 hover:text-sky-400 transition-colors">
                    Networking &amp; Wi-Fi
                  </Link>
                </li>
                <li>
                  <Link to="/services/access-control" className="text-slate-400 hover:text-sky-400 transition-colors">
                    Biometrics &amp; Access Control
                  </Link>
                </li>
                <li>
                  <Link to="/services/fire-security" className="text-slate-400 hover:text-sky-400 transition-colors">
                    Fire Alarms &amp; Safety
                  </Link>
                </li>
                <li>
                  <Link to="/services/video-door-phone" className="text-slate-400 hover:text-sky-400 transition-colors">
                    Video Door Phone (VDP)
                  </Link>
                </li>
                <li>
                  <Link to="/services/repair-maintenance" className="text-slate-400 hover:text-sky-400 transition-colors">
                    PCB Repair &amp; AMC
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Location */}
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
                Gurugram Office
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs leading-relaxed">
                    {COMPANY_INFO.address}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-slate-200 hover:text-sky-400 transition-colors font-medium text-xs"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors text-xs"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-slate-400 text-xs">
                    {COMPANY_INFO.hours}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-slate-900 bg-black/60 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setPolicyType("privacy")}
                className="hover:text-sky-400 transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">•</span>
              <button
                type="button"
                onClick={() => setPolicyType("terms")}
                className="hover:text-sky-400 transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
              <span className="text-slate-700">•</span>
              <span>Gurugram, Haryana</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      <PolicyModal type={policyType} onClose={() => setPolicyType(null)} />
    </>
  );
}
