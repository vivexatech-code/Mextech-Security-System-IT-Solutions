import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Clock, MapPin, Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                alt="Mextech certified field technician inspecting electronic security systems"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Gurugram Operations</span>
                </div>
                <p className="text-white text-sm font-semibold mt-0.5">
                  Over 1,000+ Completed Installations Across Haryana &amp; NCR
                </p>
              </div>
            </div>
          </div>

          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Mextech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Setting the Standard for Reliable Security Technology
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Founded in {COMPANY_INFO.established}, {COMPANY_INFO.fullName} is built on one simple principle: security hardware is only as good as the engineering behind its installation. While others rush cable runs, our team enforces neat, concealed conduit work and component-level diagnostic precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Zero-compromise copper Cat6 wiring standards</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Dedicated on-site breakdown support</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Comprehensive AMC maintenance plans</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>Complete multi-story Wi-Fi optimization</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all"
              >
                <span>Read Our Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-sm font-semibold transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
