"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Award,
  Zap
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800/80">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Gurugram&apos;s Trusted Security &amp; IT Specialists Since {COMPANY_INFO.established}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
              Smart Security. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-sky-200">
                Reliable Technology.
              </span>{" "}
              <br />
              Complete Peace of Mind.
            </h1>

            {/* Concise Value Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              High-definition 4K CCTV surveillance, smart biometric access, commercial fire alarms, and enterprise Wi-Fi networking. Engineered with 100% genuine products, neat concealed cabling, and guaranteed on-site technical support across Gurugram.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Zero exposed wires &amp; neat conduit laying</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Authorized CP Plus, Hikvision &amp; Dahua</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Instant mobile phone 24/7 live view</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Same-day survey across all Gurugram sectors</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-base shadow-xl shadow-sky-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Request Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 font-semibold text-base transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Sector 23A / Palam Vihar, Gurugram</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Open 7 Days (9 AM – 9 PM)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Card & Proof Stats (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/60">
              {/* Feature Hero Image */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern CCTV and Security System Installation by Mextech"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Floating Status Tag */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>24/7 Smart Guard</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-sky-400">
                    High-Definition Surveillance
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                    Crystal-Clear 4K Night Vision
                  </h3>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="p-6 grid grid-cols-3 gap-4 border-t border-slate-800 bg-slate-950/60 text-center">
                <div>
                  <div className="text-2xl font-bold text-white font-heading">1,000+</div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide mt-0.5">
                    Installations
                  </div>
                </div>
                <div className="border-x border-slate-800">
                  <div className="text-2xl font-bold text-sky-400 font-heading">99.8%</div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide mt-0.5">
                    Uptime
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400 font-heading">Same-Day</div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide mt-0.5">
                    Site Visit
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quick Feature Badge */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 shadow-xl shadow-black/50 backdrop-blur-md">
              <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">100% Genuine Hardware</div>
                <div className="text-[11px] text-slate-400">CP Plus, Hikvision &amp; Dahua Authorized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
