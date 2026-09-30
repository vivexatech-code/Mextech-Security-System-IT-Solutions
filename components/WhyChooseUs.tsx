"use client";

import React from "react";
import Link from "next/link";
import { 
  Award, 
  Wrench, 
  ShieldCheck, 
  Headphones, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { COMPANY_INFO, WHY_CHOOSE_MESTECH_DATA } from "@/data/companyData";

const TRUST_ICONS: Record<string, React.ReactNode> = {
  "trust-1": <Award className="w-7 h-7 text-sky-400" />,
  "trust-2": <Wrench className="w-7 h-7 text-emerald-400" />,
  "trust-3": <ShieldCheck className="w-7 h-7 text-blue-400" />,
  "trust-4": <Headphones className="w-7 h-7 text-purple-400" />,
  "trust-5": <MapPin className="w-7 h-7 text-amber-400" />
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Built on Genuine Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            Why Choose Mextech?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Ground-level engineering expertise, certified brand hardware, and authentic after-sales commitment across Gurugram and Delhi NCR.
          </p>
        </div>

        {/* 5 Core Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_MESTECH_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl shadow-black/30 hover:-translate-y-1 group ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                    {TRUST_ICONS[item.id] || <ShieldCheck className="w-7 h-7 text-sky-400" />}
                  </div>
                  <span className="text-2xl font-black font-heading text-slate-800 group-hover:text-sky-500/30 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="inline-block text-xs font-bold text-sky-400 uppercase tracking-wide">
                    {item.subtext}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Verified Business Standard</span>
              </div>
            </div>
          ))}

          {/* Quick Consultation CTA Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-sky-950/60 via-slate-900 to-slate-950 border border-sky-500/30 flex flex-col justify-between space-y-6 shadow-xl shadow-sky-950/20">
            <div className="space-y-3">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                Direct Technical Support
              </span>
              <h3 className="text-xl font-bold text-white font-heading">
                Need Site Inspection or Security Audit?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Speak directly with our senior security engineer for an on-site survey and tailored quotation.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold shadow-md transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <span>Book On-Site Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
