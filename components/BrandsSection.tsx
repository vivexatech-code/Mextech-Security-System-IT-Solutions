"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  Award, 
  Camera, 
  PhoneCall, 
  BellRing,
  MapPin
} from "lucide-react";
import { BRANDS_DATA, COMPANY_INFO } from "@/data/companyData";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "CCTV": <Camera className="w-5 h-5 text-sky-400" />,
  "Intercom / EPABX": <PhoneCall className="w-5 h-5 text-indigo-400" />,
  "Security Alarm": <BellRing className="w-5 h-5 text-amber-400" />
};

export default function BrandsSection() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Authorized Hardware Sourcing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            {BRANDS_DATA.title}
          </h2>

          <p className="text-base sm:text-lg text-sky-400/90 font-medium">
            {BRANDS_DATA.subtitle}
          </p>

          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We deploy 100% genuine equipment directly sourced from authorized brand channels with valid manufacturer warranties, active cloud apps, and full RMA technical support.
          </p>
        </div>

        {/* 3 Prominent Brand Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRANDS_DATA.categories.map((cat) => (
            <div
              key={cat.category}
              className={`rounded-2xl bg-gradient-to-b ${cat.accent} p-7 border ${cat.border} flex flex-col justify-between space-y-6 shadow-xl shadow-black/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
                    {CATEGORY_ICONS[cat.category] || <ShieldCheck className="w-5 h-5 text-sky-400" />}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/90 text-slate-300 border border-slate-700/60">
                    Category
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Brands list in this category */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                  Featured Brands:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.brands.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white font-bold text-sm border border-slate-700 hover:border-sky-400 transition-colors shadow-sm"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>100% Genuine Serial Verification</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Business Profile & Reviews Card */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 text-left w-full lg:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2.5 shrink-0 shadow-lg">
              {/* Google stylized "G" icon */}
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-white font-heading">
                  Mextech Security System &amp; IT Solution
                </h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Verified Business
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5.0 Rating</span>
                <span className="text-slate-400">• Verified Customer Reviews on Google</span>
              </div>

              <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Sector 23A / Om Vihar Rd, near Palam Vihar, Gurugram, Haryana 122017</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href={BRANDS_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold shadow-lg shadow-sky-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>View On Google Maps &amp; Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-colors"
            >
              <span>Request Brand Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
