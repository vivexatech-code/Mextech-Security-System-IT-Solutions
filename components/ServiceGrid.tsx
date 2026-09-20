import React from "react";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { FEATURED_SERVICES, SERVICES_DATA } from "@/data/companyData";

interface ServiceGridProps {
  featuredOnly?: boolean;
}

export default function ServiceGrid({ featuredOnly = false }: ServiceGridProps) {
  if (featuredOnly) {
    return (
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>Featured Solutions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                Engineered for Complete Protection
              </h2>
              <p className="text-base text-slate-400">
                Turnkey security and IT deployments customized for Gurugram homes, corporate workspaces, and industrial sites.
              </p>
            </div>
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <span>View All 13 Services</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>
            </div>
          </div>

          {/* Grid of 6 Featured Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_SERVICES.map((s) => (
              <ServiceCard
                key={s.id}
                title={s.title}
                desc={s.desc}
                imageUrl={s.imageUrl}
                detailLink={s.detailLink}
              />
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-400">
              Need custom low-voltage engineering or an integrated multi-location system?{" "}
              <Link href="/contact" className="text-sky-400 hover:underline font-medium">
                Talk to our senior engineer for a customized solution.
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Full 13 Services Catalog
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES_DATA.map((s) => (
        <ServiceCard
          key={s.id}
          title={s.title}
          desc={s.shortDesc}
          imageUrl={s.imageUrl}
          detailLink={`/services/${s.detailSlug || s.slug}`}
          features={s.features}
          badge={s.category.toUpperCase()}
        />
      ))}
    </div>
  );
}
