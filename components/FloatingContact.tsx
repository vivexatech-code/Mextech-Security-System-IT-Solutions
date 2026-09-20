"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto p-3 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/80 shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Quick Chat */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-xl shadow-emerald-950/40 border border-emerald-400/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold tracking-wide">WhatsApp</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
        </span>
      </a>

      {/* Direct Phone Call */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        aria-label={`Call ${COMPANY_INFO.phone}`}
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm shadow-xl shadow-sky-950/40 border border-sky-400/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold tracking-wide">Quick Call</span>
      </a>
    </div>
  );
}
