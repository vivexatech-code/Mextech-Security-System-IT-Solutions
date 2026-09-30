"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Camera, 
  Flame, 
  DoorClosed, 
  Network, 
  Megaphone, 
  Radio, 
  Fingerprint, 
  PhoneCall, 
  BellRing,
  Lock,
  Cpu
} from "lucide-react";
import { 
  HOMEPAGE_SERVICES_PILLARS, 
  SPECIALIZED_SYSTEMS, 
  SPOTLIGHT_SERVICES, 
  COMPANY_INFO 
} from "@/data/companyData";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  "cctv-surveillance": <Camera className="w-6 h-6 text-sky-400" />,
  "security-systems": <Flame className="w-6 h-6 text-amber-400" />,
  "automation": <Lock className="w-6 h-6 text-emerald-400" />,
  "it-networking": <Network className="w-6 h-6 text-cyan-400" />
};

const SPOTLIGHT_ICONS: Record<string, React.ReactNode> = {
  "Fingerprint": <Fingerprint className="w-4 h-4 text-sky-400" />,
  "BellRing": <BellRing className="w-4 h-4 text-amber-400" />,
  "Flame": <Flame className="w-4 h-4 text-rose-400" />,
  "PhoneCall": <PhoneCall className="w-4 h-4 text-emerald-400" />,
  "Megaphone": <Megaphone className="w-4 h-4 text-indigo-400" />,
  "Radio": <Radio className="w-4 h-4 text-purple-400" />,
  "Camera": <Camera className="w-4 h-4 text-sky-400" />,
};

export default function PillarServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Top Quick Spotlight Bar: Biometric, Security alarm, Fire alarm, Video door phone, PA System, Walkie-Talkies, CCTV camera */}
        <div className="space-y-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              Core Specialties
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Complete Security, Surveillance &amp; IT Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select any core service to explore specifications, hardware brands, and site deployment:
            </p>
          </div>

          {/* Quick Spotlight Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {SPOTLIGHT_SERVICES.map((s) => (
              <Link
                key={s.name}
                href={s.link}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/60 hover:bg-slate-800/90 transition-all text-slate-200 hover:text-white text-xs sm:text-sm font-semibold shadow-md group"
              >
                {SPOTLIGHT_ICONS[s.icon] || <ShieldCheck className="w-4 h-4 text-sky-400" />}
                <span>{s.name}</span>
                <span className="hidden sm:inline-block text-[11px] text-slate-400 font-normal group-hover:text-sky-300">
                  ({s.tag})
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 2. The 4 Comprehensive Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOMEPAGE_SERVICES_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl overflow-hidden bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 group hover:-translate-y-1"
            >
              {/* Image banner */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <Image
                  src={pillar.imageUrl}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-sky-400 border border-sky-500/30">
                  {pillar.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-700/80">
                      {PILLAR_ICONS[pillar.id]}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-sky-300/90 font-medium">
                    {pillar.tagline}
                  </p>
                </div>
              </div>

              {/* Sub-services list (The exact list requested by the user!) */}
              <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Included Solutions &amp; Models:
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {pillar.subServices.map((sub) => (
                        <div 
                          key={sub}
                          className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-medium text-slate-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer: Brands & Link */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Brands:</span>
                    <span>{pillar.brands.join(", ")}</span>
                  </div>

                  <Link
                    href={pillar.detailLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:text-sky-300 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Specialized Audio & Communications: PA System & Walkie-Talkies */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-xl font-bold text-white font-heading">
              Specialized Audio &amp; Wireless Communication
            </h3>
            <p className="text-xs text-slate-400">
              Commercial voice paging and instant on-site wireless radio transceivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIALIZED_SYSTEMS.map((sys) => (
              <div
                key={sys.title}
                className="rounded-2xl p-6 bg-slate-900/50 border border-slate-800/80 hover:border-sky-500/30 transition-all flex flex-col sm:flex-row gap-5 items-center"
              >
                <div className="relative w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 bg-slate-950">
                  <Image
                    src={sys.imageUrl}
                    alt={sys.title}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="text-base font-bold text-white font-heading">
                      {sys.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      {sys.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sys.items.map((it) => (
                      <span
                        key={it}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                  <div>
                    <Link
                      href={sys.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                    >
                      <span>Explore Equipment &amp; Quotes</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
