import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { REVIEWS_DATA } from "@/data/companyData";

export default function ReviewSlider() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Verified Experiences from Gurugram
          </h2>
          <p className="text-base text-slate-400">
            Real feedback from homeowners, corporate administrators, and facility managers across Haryana.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-5 shadow-lg relative"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {rev.date}
                  </span>
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {rev.serviceType}
                </span>

                {/* Comment */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white font-heading">
                    {rev.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {rev.roleOrLocation}
                  </p>
                </div>
                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
