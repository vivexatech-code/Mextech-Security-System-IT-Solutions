import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
  Shield,
  Clock,
  Layers,
  HelpCircle,
  MessageSquare
} from "lucide-react";
import { SERVICE_GROUPS_DATA, COMPANY_INFO, SERVICES_DATA } from "../data/companyData";
import { SEO } from "../components/SEO";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  if (!slug) {
    return <Navigate to="/services" replace />;
  }

  // Find matching detail group
  let serviceGroup = SERVICE_GROUPS_DATA[slug];

  // If slug matches an individual service ID (e.g. "nvr-dvr-ptz"), map to parent group
  if (!serviceGroup) {
    const singleService = SERVICES_DATA.find((s) => s.id === slug || s.slug === slug);
    if (singleService && singleService.detailSlug) {
      serviceGroup = SERVICE_GROUPS_DATA[singleService.detailSlug];
    }
  }

  // Fallback to cctv-surveillance if not found
  if (!serviceGroup) {
    serviceGroup = SERVICE_GROUPS_DATA["cctv-surveillance"];
  }

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="pt-24 lg:pt-28">
      <SEO
        title={`${serviceGroup.name} | MEXTECH`}
        description={serviceGroup.heroSubtitle}
        canonicalPath={`/services/${serviceGroup.slug}`}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-950 border-b border-slate-900 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 flex items-center gap-2">
          <Link to="/" className="hover:text-sky-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-sky-400 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-white font-medium truncate">{serviceGroup.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950 px-3 py-1 rounded-full border border-sky-800/60">
                Professional Security Solution
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
                {serviceGroup.heroTitle}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {serviceGroup.heroSubtitle}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to={`/contact?service=${encodeURIComponent(serviceGroup.name)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={serviceGroup.heroImage}
                  alt={serviceGroup.name}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur border border-slate-700/80">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Gurugram On-Site Execution
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Concealed piping &bull; Genuine hardware &bull; Full testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Scope & What We Provide */}
      <section className="py-16 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Included domain services */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Scope of Solutions Covered</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                What This Category Includes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {serviceGroup.includedServices.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Provide Grid */}
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                  Engineering Standards
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  What We Deliver On Every Job
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceGroup.whatWeProvide.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2"
                  >
                    <div className="text-sm font-extrabold text-sky-400">0{idx + 1}</div>
                    <h3 className="text-base font-bold text-white font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technical Features & Applications */}
      <section className="py-16 bg-slate-900/50 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features list */}
            <div className="space-y-5">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Specifications
              </span>
              <h2 className="text-2xl font-bold text-white font-heading">
                Key Technical Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {serviceGroup.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Premises */}
            <div className="space-y-5">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Deployment Scenarios
              </span>
              <h2 className="text-2xl font-bold text-white font-heading">
                Ideal Premises &amp; Applications
              </h2>
              <ul className="space-y-2.5 pt-2">
                {serviceGroup.applications.map((app, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Installation Workflow */}
      <section className="py-16 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              Standardized Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Our 4-Step Implementation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceGroup.installationProcess.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
              >
                <span className="text-2xl font-extrabold text-sky-500 font-heading">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-white font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="py-16 bg-slate-900/40 border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {serviceGroup.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-semibold text-sm hover:bg-slate-800/60 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-sky-400 transition-transform duration-200 shrink-0 ${
                      openFaqIdx === idx ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIdx === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Ready to Install or Upgrade {serviceGroup.name}?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact Mextech today for transparent pricing, genuine equipment selection, and same-day site visits across Gurugram.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to={`/contact?service=${encodeURIComponent(serviceGroup.name)}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <span>Get Itemized Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
