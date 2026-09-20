"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Phone, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/companyData";
import { ContactFormData } from "@/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    service: "CCTV Camera & Surveillance Systems",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "CCTV Camera & Surveillance Systems",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Unable to submit your enquiry. Please call or WhatsApp us.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please call or WhatsApp us directly at " + COMPANY_INFO.phone);
    }
  };

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="relative z-10 space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Direct Lead Desk</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Request a Free Site Survey &amp; Quote
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Fill in your details below. Our field engineering team in Gurugram responds promptly within 1-2 hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-8 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white font-heading">
              Enquiry Received Successfully!
            </h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. Our engineering desk has received your request and will call you at your provided phone number shortly.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly Now</span>
              </a>
              <button
                onClick={() => setStatus("idle")}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                Send Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field for anti-bot spam */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-950/50 border border-red-800/80 text-red-200 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Full Name <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Phone Number <span className="text-sky-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email Address (Optional) */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>

              {/* Service Required */}
              <div className="space-y-2">
                <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Service Required <span className="text-sky-400">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-white text-sm outline-none transition-all"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Complete Security & IT Package">Complete Security &amp; IT Package</option>
                  <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  <option value="General Technical Consultation">General Technical Consultation</option>
                </select>
              </div>
            </div>

            {/* Requirement / Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Installation Location / Project Scope <span className="text-sky-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention property type (e.g. 3-floor villa, office in Cyber City, warehouse in Manesar), number of cameras or specific issue..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:bg-sky-700 text-white font-semibold text-base shadow-xl shadow-sky-500/25 flex items-center justify-center gap-2 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit &amp; Schedule Site Survey</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Secondary Direct Contact */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Prefer urgent response?</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-slate-200 hover:text-sky-400 font-semibold transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <span>or</span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
