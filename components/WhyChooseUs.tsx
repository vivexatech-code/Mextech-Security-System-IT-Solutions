import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Headphones, Settings, Cpu } from "lucide-react";
import { STRENGTHS_DATA } from "@/data/companyData";

const STRENGTH_ICONS: Record<string, React.ReactNode> = {
  "01": <ShieldCheck className="w-6 h-6 text-sky-400" />,
  "02": <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
  "03": <Zap className="w-6 h-6 text-amber-400" />,
  "04": <Headphones className="w-6 h-6 text-blue-400" />,
  "05": <Settings className="w-6 h-6 text-purple-400" />,
  "06": <Cpu className="w-6 h-6 text-cyan-400" />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <span>Why Gurugram Trusts Mextech</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Our Core Strengths &amp; Standards
          </h2>
          <p className="text-base text-slate-400">
            Engineered reliability with zero shortcuts. Here is what separates our security and IT installations from the rest.
          </p>
        </div>

        {/* 6 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STRENGTHS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-lg shadow-black/30 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                  {STRENGTH_ICONS[item.number] || <ShieldCheck className="w-6 h-6 text-sky-400" />}
                </div>
                <span className="text-3xl font-extrabold font-heading text-slate-800 group-hover:text-sky-500/30 transition-colors">
                  {item.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Gurugram &amp; NCR Service Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
