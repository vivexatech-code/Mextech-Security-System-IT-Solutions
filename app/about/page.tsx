import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Phone, 
  ArrowRight,
  Cpu,
  Wrench,
  Sparkles
} from "lucide-react";
import { COMPANY_INFO, STRENGTHS_DATA } from "@/data/companyData";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | MEXTECH Security System & IT Solutions Gurugram",
  description:
    "Learn about Mextech Security System & IT Solutions, founded in 2021 in Gurugram, Haryana. Our mission, values, genuine hardware standards, and turnkey low-voltage engineering excellence.",
};

const VALUES = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-sky-400" />,
    title: "100% Genuine Hardware",
    desc: "We exclusively install authorized equipment from tier-1 manufacturers: CP Plus, Hikvision, Dahua, D-Link, and WD Purple with full manufacturer warranties.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-emerald-400" />,
    title: "Concealed Craftsmanship",
    desc: "No loose hanging cables or rodent exposure. All wiring is dressed in rigid PVC conduits with numbered sleeves and clean wall routing.",
  },
  {
    icon: <Clock className="w-6 h-6 text-amber-400" />,
    title: "Same-Day Gurugram Dispatch",
    desc: "Local field technicians based in Gurugram guarantee rapid site inspections and priority breakdown support within hours of notification.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    title: "Transparent Estimates",
    desc: "Every quote itemizes camera specs, cable lengths, power ratings, and labor. Zero surprise costs or inflated replacement fees.",
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Comprehensive Site Survey",
    desc: "Our field engineer visits your home, office, or plant in Gurugram to calculate optical viewing angles, focal lengths, illumination, and cable pathways.",
  },
  {
    step: "02",
    title: "Tailored Architecture & Estimate",
    desc: "You receive an itemized proposal with clear options between analog HD, 4K IP, and Wi-Fi mesh systems tailored to your exact budget.",
  },
  {
    step: "03",
    title: "Precision Conduit & Cable Pulling",
    desc: "Certified technicians install rigid PVC conduits, lay 100% pure copper Cat6 lines, and crimp connectors with diagnostic testing.",
  },
  {
    step: "04",
    title: "Setup, Mobile Sync & Training",
    desc: "We configure NVR/DVR storage, setup secure mobile streaming on your family or staff phones, and train your team on viewing playback.",
  },
  {
    step: "05",
    title: "Ongoing AMC & Warranty Support",
    desc: "Our proactive maintenance plans include lens polishing, hard drive health audits, and priority emergency breakdown support.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <Link href="/" className="hover:underline text-slate-400">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              About MEXTECH
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Gurugram&apos;s specialist in low-voltage electronic security and enterprise IT networking. Protecting residential villas, corporate offices, and industrial hubs across Haryana since {COMPANY_INFO.established}.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Overview Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <span>Company Foundation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
                Engineering Security Solutions You Can Depend On
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {COMPANY_INFO.fullName} was founded in {COMPANY_INFO.established} in Gurugram, Haryana with a clear mission: eliminate substandard security installations by delivering professional, commercial-grade engineering at fair, transparent pricing.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Too many property owners suffer from flickering cameras, unreadable night footage, and tangled wiring due to untrained technicians and counterfeit hardware. At Mextech, every technician is trained to enforce rigid conduit protection, 100% annealed copper cabling, and component-level diagnostic precision.
              </p>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-bold text-white font-heading">{COMPANY_INFO.established}</div>
                  <div className="text-xs text-slate-400 mt-1">Year Established</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-bold text-sky-400 font-heading">1,000+</div>
                  <div className="text-xs text-slate-400 mt-1">Installations Completed</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-bold text-emerald-400 font-heading">7 Days</div>
                  <div className="text-xs text-slate-400 mt-1">Open 9 AM – 9 PM</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80"
                  alt="Mextech commercial security installation in Gurugram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Gurugram Headquarters</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To deliver uncompromising protection to families and businesses across Gurugram and Haryana by integrating cutting-edge surveillance optics, biometric access, and high-concurrency enterprise networking into durable, clean, and user-friendly systems.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To remain Gurugram&apos;s most trusted and technically proficient low-voltage engineering team, recognized for zero-defect installation craftsmanship, immediate breakdown turnaround, and client-first after-sales care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Standards */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <span>Quality Assurance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Our Core Standards &amp; Principles
            </h2>
            <p className="text-slate-400 text-base">
              Every system deployed by Mextech conforms to these four strict operational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-heading">{val.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Workflow */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <span>Execution Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              How We Execute Your Project
            </h2>
            <p className="text-slate-400 text-base">
              A structured, seamless 5-step methodology from initial inquiry to final handover and AMC support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORKFLOW.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-sky-500/30 font-heading">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
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

      {/* Call to action */}
      <CTA />
    </>
  );
}
