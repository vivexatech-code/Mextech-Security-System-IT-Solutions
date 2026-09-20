import React from "react";
import { ShieldCheck, Award, CheckCircle, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function TrustStrip() {
  return (
    <section className="bg-slate-950 py-10 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Authorized Hardware &amp; Partners
              </span>
              <p className="text-[11px] text-slate-400">
                100% Original Manufacturer Warranty Guaranteed
              </p>
            </div>
          </div>

          {/* Brands List */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3">
            {COMPANY_INFO.brandsDealt.map((brand) => (
              <div
                key={brand}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Premises We Secure */}
        <div className="mt-8 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="font-semibold text-slate-300">Premises We Protect in Gurugram:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            {COMPANY_INFO.premises.map((premise) => (
              <span 
                key={premise}
                className="px-2.5 py-1 rounded bg-slate-900/40 text-slate-400 border border-slate-800/60"
              >
                {premise}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
