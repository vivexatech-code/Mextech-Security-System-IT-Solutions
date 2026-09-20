import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  desc: string;
  imageUrl: string;
  detailLink: string;
  features?: string[];
  badge?: string;
}

export default function ServiceCard({
  title,
  desc,
  imageUrl,
  detailLink,
  features,
  badge
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 flex flex-col shadow-lg shadow-black/40 hover:shadow-sky-500/10 hover:-translate-y-1">
      {/* Photographic Media Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
        
        {badge && (
          <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-sky-400 border border-sky-500/30">
            {badge}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
            {desc}
          </p>

          {/* Optional bullet points */}
          {features && features.length > 0 && (
            <div className="pt-2 space-y-1.5 border-t border-slate-800/80 mt-3">
              {features.slice(0, 3).map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="line-clamp-1">{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Link Button */}
        <div className="pt-3 border-t border-slate-800/80">
          <Link
            href={detailLink}
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 group-hover:text-sky-300 transition-colors"
          >
            <span>Learn More &amp; Specifications</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
