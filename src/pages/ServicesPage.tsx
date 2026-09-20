import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Filter } from "lucide-react";
import { SERVICES_DATA } from "../data/companyData";
import { SEO } from "../components/SEO";

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All 13 Services" },
    { id: "surveillance", label: "CCTV & Surveillance" },
    { id: "access", label: "Access & Fire Safety" },
    { id: "networking", label: "Networking & Wi-Fi" },
    { id: "repair", label: "Repairs & AMC" }
  ];

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="pt-24 lg:pt-28">
      <SEO
        title="Our Services | MEXTECH Security System & IT Solutions"
        description="Explore Mextech's complete catalog of 13 security & IT services: CCTV installation, NVR/DVR setup, access control, fire alarms, networking, Wi-Fi, and PCB repairs."
        canonicalPath="/services"
      />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">
              Complete Service Portfolio &bull; 13 Specialized Domains
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Security &amp; IT Solutions Catalog
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every system is engineered using genuine brand equipment, clean concealed conduits, and backed by Gurugram-based on-site warranty support.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar & Services Grid */}
      <section className="py-14 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-sky-400" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-950"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 13 Services Grid (Image-Based Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/40 shadow-lg hover:shadow-sky-950/30 transition-all duration-300"
              >
                {/* Large Service Image (MANDATORY: IMAGES, NOT ICONS) */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-sky-400 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {service.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 pt-2 border-t border-slate-800">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions & Detail Link */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <Link
                      to={`/services/${service.detailSlug || service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>View Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Custom Consultation Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white font-heading">
                Need a Custom Combined Security &amp; IT Package?
              </h3>
              <p className="text-slate-400 text-sm">
                We combine CCTV, access control, Wi-Fi mesh, and server racks into a unified solution with package pricing.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shrink-0 shadow-md transition-colors"
            >
              <span>Consult Our Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
