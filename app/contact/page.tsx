import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2,
  Building2,
  Navigation
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | MEXTECH Security System & IT Solutions Gurugram",
  description:
    "Contact Mextech in Gurugram, Haryana. Schedule a free on-site CCTV survey, request quotation, or call us at +91 85109 29404. Open 7 days a week from 9 AM to 9 PM.",
};

const SERVICE_AREAS = [
  "Sector 23 / 23A / Om Vihar",
  "Palam Vihar & Chauma",
  "DLF Phase 1, 2, 3, 4 & 5",
  "Cyber City & DLF Cyber Hub",
  "Udyog Vihar (Phases 1-5)",
  "Golf Course Road & Extension",
  "Sohna Road & Subhash Chowk",
  "MG Road & IFFCO Chowk",
  "Sushant Lok 1, 2 & 3",
  "IMT Manesar & KMP Expressway",
  "Sector 14, 15, 31, 48, 56, 57",
  "Delhi NCR & Dwarka Expressway",
];

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
              <Link href="/" className="hover:underline text-slate-400">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              Get in Touch with Mextech
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Have a question about CCTV cameras, biometric systems, or corporate networking? Request a free on-site inspection or speak directly with our engineering desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Gurugram Office</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Quick Communication
                </h2>
                <p className="text-sm text-slate-400">
                  Direct phone lines and WhatsApp messaging for immediate quotes and emergency breakdown support.
                </p>
              </div>

              {/* Contact Card 1: Phone */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400">Direct Phone Support</span>
                    <h3 className="text-base font-bold text-white font-heading">
                      Speak with an Engineer
                    </h3>
                  </div>
                </div>
                <div className="pt-2 space-y-1.5">
                  <div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-lg font-bold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-400 ml-2">(Primary / WhatsApp)</span>
                  </div>
                  {COMPANY_INFO.phoneSecondary && (
                    <div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneSecondary.replace(/\s+/g, "")}`}
                        className="text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        {COMPANY_INFO.phoneSecondary}
                      </a>
                      <span className="text-xs text-slate-400 ml-2">(Alternate Support)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Card 2: WhatsApp */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-emerald-400">Instant Chat</span>
                    <h3 className="text-base font-bold text-white font-heading">
                      WhatsApp Quick Quote
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  Send photos of your building or floor plan to get an immediate itemized equipment recommendation.
                </p>
                <div className="pt-1">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/40 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Contact Card 3: Address & Hours */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-400">Office Location</span>
                      <p className="text-sm text-white font-medium mt-0.5 leading-snug">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-400">Email Address</span>
                      <p className="text-sm text-white font-medium mt-0.5">
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-sky-400 hover:underline">
                          {COMPANY_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-400">Working Hours</span>
                      <p className="text-sm text-slate-300 font-medium mt-0.5">
                        {COMPANY_INFO.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas Covered */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span>Gurugram Sectors Served Daily</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-400">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
