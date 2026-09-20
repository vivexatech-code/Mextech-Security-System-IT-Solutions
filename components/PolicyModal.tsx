"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface PolicyModalProps {
  isOpen: boolean;
  type: "privacy" | "terms" | "warranty" | null;
  onClose: () => void;
}

export default function PolicyModal({ isOpen, type, onClose }: PolicyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-bold text-white font-heading">
              {type === "privacy" && "Privacy & Data Policy"}
              {type === "terms" && "Terms of Service"}
              {type === "warranty" && "Warranty & AMC Policy"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300 leading-relaxed">
          {type === "privacy" && (
            <>
              <p className="font-medium text-slate-200">
                At {COMPANY_INFO.fullName} (operating in Gurugram, Haryana), your privacy and property security are our utmost priority.
              </p>
              <h4 className="font-semibold text-white pt-2">1. Information Collection</h4>
              <p>
                When you request a site survey or quotation via our contact forms, phone calls, or WhatsApp, we collect your name, phone number, installation address, and requested service specifics. We strictly do not sell, rent, or trade client information to any third parties.
              </p>
              <h4 className="font-semibold text-white pt-2">2. Camera & Network Access Privacy</h4>
              <p>
                During CCTV or networking setup, temporary configuration credentials are used exclusively in your presence. We immediately hand over full master administrative passwords to you. We do not store remote viewing credentials or backdoors.
              </p>
              <h4 className="font-semibold text-white pt-2">3. Direct Contact</h4>
              <p>
                For inquiries regarding data removal or privacy questions, contact us at{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-sky-400 underline">{COMPANY_INFO.email}</a>.
              </p>
            </>
          )}

          {type === "terms" && (
            <>
              <p className="font-medium text-slate-200">
                Terms and Conditions governing service provision by {COMPANY_INFO.fullName}.
              </p>
              <h4 className="font-semibold text-white pt-2">1. Site Surveys & Quotations</h4>
              <p>
                Pre-installation site assessments across Gurugram are conducted to recommend optimal camera placements, conduit paths, and hardware specs. Official estimates remain valid for 15 days from issuance.
              </p>
              <h4 className="font-semibold text-white pt-2">2. Genuine Products</h4>
              <p>
                All cameras, NVRs, DVRs, hard drives, cables, and biometric terminals supplied by Mextech are 100% original, brand-new hardware sourced through authorized distributor channels (CP Plus, Hikvision, Dahua, D-Link, WD Purple, etc.).
              </p>
              <h4 className="font-semibold text-white pt-2">3. Workmanship Guarantee</h4>
              <p>
                We stand behind our installation craftsmanship. Any cabling adjustment, angle realignment, or mobile app reconfiguration within 30 days of installation is handled with priority response.
              </p>
            </>
          )}

          {type === "warranty" && (
            <>
              <p className="font-medium text-slate-200">
                Manufacturer Warranty & Annual Maintenance Contracts (AMC) guidelines.
              </p>
              <h4 className="font-semibold text-white pt-2">1. Manufacturer Warranty</h4>
              <p>
                Security cameras, NVRs, and biometric terminals carry 1 to 3 years of direct manufacturer warranty against hardware defects. Surveillance hard drives (WD Purple / Seagate SkyHawk) carry standard manufacturer replacement warranties.
              </p>
              <h4 className="font-semibold text-white pt-2">2. What Is Covered in AMC</h4>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Quarterly preventative lens cleaning and camera angle calibration.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Hard drive health check, continuous recording retention verification.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Power supply unit (SMPS) testing and connector tightening.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Guaranteed priority emergency same-day dispatch for outages.</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-medium text-xs transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
