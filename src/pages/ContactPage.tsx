import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  Building2
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "../data/companyData";
import { ContactFormData } from "../types";
import { SEO } from "../components/SEO";

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    honeypot: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        service: prefilledService
      }));
    }
  }, [prefilledService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    // Basic frontend validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({ type: "error", message: "Please enter your full name." });
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setStatus({ type: "error", message: "Please enter a valid phone number (at least 8-10 digits)." });
      return;
    }

    if (!formData.service) {
      setStatus({ type: "error", message: "Please select the service required." });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Please describe your project or requirement." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your enquiry has been received. Our team will contact you shortly."
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
          honeypot: ""
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong while submitting. Please call us directly."
        });
      }
    } catch (err) {
      console.error("Network error submitting enquiry:", err);
      setStatus({
        type: "error",
        message: "Network error occurred. Please call or WhatsApp us directly at +91 85109 29404."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 lg:pt-28">
      <SEO
        title="Contact Us | MEXTECH Security System & IT Solutions"
        description="Contact Mextech in Gurugram for CCTV camera installation, NVR/DVR repair, access control, and Wi-Fi solutions. Phone: +91 85109 29404."
        canonicalPath="/contact"
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950 px-3 py-1 rounded-full border border-sky-800/60">
              Gurugram Office &bull; Same-Day Site Visits
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Let&apos;s Secure Your Space
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reach out to our Gurugram security specialists for a free on-site assessment, transparent quotation, or immediate emergency technical repair.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Section: Info + Form */}
      <section className="py-16 lg:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-white font-heading">
                  Get in Touch Directly
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We are available all 7 days a week. For immediate technical emergencies or urgent repair requests, direct calls and WhatsApp messages receive priority response.
                </p>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Phone (Click to call)
                    </p>
                    <div className="flex flex-col sm:flex-row sm:gap-4 mt-1">
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-white hover:text-sky-400 font-bold text-sm sm:text-base transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <a
                        href="tel:+917942802620"
                        className="text-slate-300 hover:text-sky-400 text-xs sm:text-sm transition-colors"
                      >
                        {COMPANY_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      WhatsApp Quick Chat
                    </p>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold text-sm inline-flex items-center gap-1.5 mt-1"
                    >
                      <span>Start WhatsApp Conversation</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-white hover:text-sky-400 font-medium text-sm mt-1 inline-block transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Office Location
                    </p>
                    <p className="text-slate-200 text-xs sm:text-sm mt-1 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Business Hours
                    </p>
                    <p className="text-white font-bold text-sm mt-1">
                      {COMPANY_INFO.hours}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Open Monday through Sunday
                    </p>
                  </div>
                </div>
              </div>

              {/* Coverage Note */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1">
                <p className="font-bold text-slate-300">Areas Covered:</p>
                <p>
                  Sector 1 to 115 Gurugram, DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road, Palam Vihar, Udyog Vihar, Manesar &amp; Delhi NCR.
                </p>
              </div>
            </div>

            {/* Right Column: Premium Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white font-heading">
                    Request a Free Quote / Site Survey
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Fill out your project details. We will review your requirements and respond promptly.
                  </p>
                </div>

                {/* Status message */}
                {status.type && (
                  <div
                    className={`p-4 rounded-xl flex items-start gap-3 text-sm ${
                      status.type === "success"
                        ? "bg-emerald-950/80 border border-emerald-700 text-emerald-200"
                        : "bg-rose-950/80 border border-rose-800 text-rose-200"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p>{status.message}</p>
                      {status.type === "success" && (
                        <p className="mt-2 text-xs">
                          Need an immediate answer?{" "}
                          <a
                            href={COMPANY_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold text-white"
                          >
                            Follow up on WhatsApp &rarr;
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Honeypot field (hidden from genuine users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="form-honeypot">Leave blank</label>
                    <input
                      id="form-honeypot"
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 98123 45678"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-slate-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Service Required <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors"
                      >
                        <option value="">Select a Service</option>
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="General Consultation / Other">General Consultation / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Requirement Details / Location <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Please specify property type (Home, Office, Shop, Factory), approximate camera count, or repair issue..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-button"
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:opacity-60 text-white font-bold text-sm shadow-lg shadow-sky-950/40 flex items-center justify-center gap-2 transition-all"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Your Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    🔒 We respect your privacy. Your contact info is never shared or spammed.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
