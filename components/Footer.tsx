"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ExternalLink,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import PolicyModal from "@/components/PolicyModal";

export default function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "terms" | "warranty" | null>(null);

  return (
    <>
      <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: Company Profile */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center shadow-lg shadow-sky-500/20">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-white font-heading">
                    MEXTECH
                  </span>
                  <span className="block text-[10px] uppercase font-semibold text-sky-400">
                    Security &amp; IT Solutions
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 text-xs leading-relaxed">
                Gurugram&apos;s trusted low-voltage security and enterprise IT infrastructure specialist since {COMPANY_INFO.established}. Delivering 100% genuine products, precision concealed cabling, and dedicated after-sales AMC support.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <CheckCircle className="w-3 h-3 text-sky-400" />
                  Govt / Commercial Certified
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  Est. 2021
                </span>
              </div>
            </div>

            {/* Col 2: Core Solutions */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-heading border-l-2 border-sky-400 pl-2">
                Security Solutions
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/services/cctv-surveillance" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>CCTV Camera &amp; 4K IP Systems</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/cctv-surveillance" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>NVR, DVR &amp; PTZ 360° Cameras</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/access-control" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>Biometric Face &amp; Fingerprint Access</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/video-door-phone" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>Smart Video Door Phone &amp; Intercom</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/networking" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>Enterprise Wi-Fi &amp; Cat6 Cabling</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/fire-security" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>Fire Alarm &amp; Smoke Detection</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/repair-maintenance" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>DVR / NVR Repair &amp; AMC Maintenance</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Quick Links & Coverage */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-heading border-l-2 border-sky-400 pl-2">
                Company &amp; Service Areas
              </h3>
              <ul className="space-y-2 text-xs mb-4">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home Page</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">About Mextech</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">All 13 Security Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact &amp; Site Survey</Link>
                </li>
              </ul>

              <h4 className="text-xs uppercase font-semibold text-slate-300 tracking-wider mb-2">
                Gurugram Coverage
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Palam Vihar, Sector 23/23A, DLF Phase 1-5, Cyber City, Udyog Vihar, Golf Course Ext., Sohna Road, Sushant Lok, MG Road, Manesar, and Delhi NCR.
              </p>
            </div>

            {/* Col 4: Direct Helpdesk Contact */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-heading border-l-2 border-sky-400 pl-2">
                Contact Helpdesk
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 leading-snug">{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-slate-200 hover:text-sky-400 transition-colors font-medium">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-sky-400 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span className="text-slate-400">{COMPANY_INFO.hours}</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Policy Links */}
        <div className="border-t border-slate-900 bg-slate-950/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-400">
              © {new Date().getFullYear()} {COMPANY_INFO.fullName}. All rights reserved. Registered in Gurugram, Haryana.
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setModalType("privacy")}
                className="text-slate-400 hover:text-slate-300 transition-colors focus:outline-none"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setModalType("terms")}
                className="text-slate-400 hover:text-slate-300 transition-colors focus:outline-none"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setModalType("warranty")}
                className="text-slate-400 hover:text-slate-300 transition-colors focus:outline-none"
              >
                Warranty &amp; AMC
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Dynamic Policy Modal */}
      <PolicyModal 
        isOpen={modalType !== null} 
        type={modalType} 
        onClose={() => setModalType(null)} 
      />
    </>
  );
}
