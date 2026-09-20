import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, MessageSquare, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-950 via-slate-900 to-slate-950 py-16 border-y border-sky-500/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Prompt Gurugram Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              Ready to Upgrade Your Security &amp; Network?
            </h2>
            <p className="text-base text-slate-300">
              Schedule a free on-site assessment anywhere in Gurugram. Receive an itemized equipment quote backed by 100% genuine products and 1-3 year manufacturer warranty.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Gurugram, Manesar &amp; Delhi NCR</span>
              </div>
              <span>•</span>
              <span>Available 9 AM – 9 PM (7 Days)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-base shadow-xl shadow-sky-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Schedule Free Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 font-semibold text-base transition-all"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
