import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO } from "@/data/companyData";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "All Security & IT Solutions | MEXTECH Gurugram",
  description:
    "Explore our full catalog of 13 commercial and residential security solutions: CCTV cameras, NVR/DVR, access control, video door phones, fire alarms, enterprise Wi-Fi, and AMC repair in Gurugram.",
};

const CATEGORIES = [
  { name: "All Solutions", id: "all" },
  { name: "CCTV Surveillance", id: "surveillance" },
  { name: "Access & Intercom", id: "access" },
  { name: "Networking & Wi-Fi", id: "networking" },
  { name: "Repair & AMC", id: "repair" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <Link href="/" className="hover:underline text-slate-400">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              Our Security &amp; IT Solutions
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Complete low-voltage technology systems engineered for villas, corporate offices, warehouses, and industrial plants across Gurugram, Manesar, and NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Catalog */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick info strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Cataloging all 13 specialized security &amp; technology services.</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>All installations include 100% genuine brand warranty</span>
            </div>
          </div>

          {/* 13 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                desc={service.shortDesc}
                imageUrl={service.imageUrl}
                detailLink={`/services/${service.detailSlug || service.slug}`}
                features={service.features}
                badge={service.category.toUpperCase()}
              />
            ))}
          </div>

          {/* Brands Dealt Section */}
          <div className="pt-12 border-t border-slate-800 text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white font-heading">
                Authorized Hardware &amp; Component Sourcing
              </h2>
              <p className="text-xs text-slate-400 max-w-xl mx-auto">
                We strictly deploy authorized hardware with active manufacturer serial numbers, guaranteed cloud app compatibility, and full RMA support.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {COMPANY_INFO.brandsDealt.map((b) => (
                <span
                  key={b}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CTA />
    </>
  );
}
