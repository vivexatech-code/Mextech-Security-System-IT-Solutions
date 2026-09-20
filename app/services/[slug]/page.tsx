import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  HelpCircle, 
  Layers, 
  Building,
  CheckCircle,
  Clock,
  Sparkles
} from "lucide-react";
import { SERVICE_GROUPS_DATA, COMPANY_INFO } from "@/data/companyData";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(SERVICE_GROUPS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICE_GROUPS_DATA[slug];

  if (!data) {
    return {
      title: "Service Not Found | MEXTECH",
    };
  }

  return {
    title: `${data.heroTitle} | MEXTECH Gurugram`,
    description: `${data.shortIntro} Turnkey installation and AMC in Gurugram, Haryana. 100% genuine hardware.`,
    openGraph: {
      title: `${data.heroTitle} | MEXTECH Gurugram`,
      description: data.heroSubtitle,
      images: [data.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const group = SERVICE_GROUPS_DATA[slug];

  if (!group) {
    notFound();
  }

  return (
    <>
      {/* Service Detail Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
                <Link href="/" className="hover:underline text-slate-400">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:underline text-slate-400">Services</Link>
                <span>/</span>
                <span>{group.name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                {group.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {group.heroSubtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="#quote-section"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 transition-all"
                >
                  <span>Request Site Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 aspect-[4/3]">
                <Image
                  src={group.heroImage}
                  alt={group.heroTitle}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wide">
                    Gurugram Service Hub
                  </span>
                  <p className="text-xs text-white font-medium mt-0.5">
                    Fast site dispatch to DLF, Cyber City, Palam Vihar, Sohna Rd &amp; Manesar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Offerings Checklist */}
      <section className="py-12 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Included Equipment &amp; Capabilities:</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.includedServices.map((inc, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{inc}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Detailed Cards */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <span>Scope of Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              What We Deliver on Every Project
            </h2>
            <p className="text-slate-400 text-base">
              {group.shortIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {group.whatWeProvide.map((prov, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 font-bold text-xs flex items-center justify-center font-heading">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">{prov.title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{prov.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Features Grid */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Key Technical Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2.5 text-sm text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading flex items-center gap-2">
                <Building className="w-5 h-5 text-sky-400" />
                <span>Premises &amp; Deployment Scenarios</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.applications.map((app, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2.5 text-sm text-slate-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-white font-heading">
              Our 4-Step Installation Process
            </h2>
            <p className="text-xs text-slate-400">
              Clear milestone delivery with zero hidden steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {group.installationProcess.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="text-2xl font-extrabold text-sky-400 font-heading">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white font-heading">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {group.faqs && group.faqs.length > 0 && (
        <section className="py-20 bg-slate-900/40 border-y border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white font-heading flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-sky-400" />
                <span>Frequently Asked Questions</span>
              </h2>
              <p className="text-xs text-slate-400">
                Common questions regarding {group.name} in Gurugram
              </p>
            </div>

            <div className="space-y-4">
              {group.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5"
                >
                  <h3 className="text-base font-bold text-white font-heading">{faq.q}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Direct Quote Request Section */}
      <section id="quote-section" className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* CTA Footer */}
      <CTA />
    </>
  );
}
