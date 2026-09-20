import { Link } from "react-router-dom";
import {
  Shield,
  CheckCircle,
  Building,
  Wrench,
  Award,
  Users,
  ArrowRight,
  Clock,
  Phone,
  Home,
  Briefcase,
  Store,
  Factory
} from "lucide-react";
import { COMPANY_INFO, TRUST_INDICATORS } from "../data/companyData";
import { SEO } from "../components/SEO";

export function AboutPage() {
  const premisesList = [
    { icon: Home, title: "Homes & Villas", desc: "Perimeter CCTV, smart video doorbells & Wi-Fi coverage." },
    { icon: Briefcase, title: "Corporate Offices", desc: "Biometric attendance, multi-camera NVRs & structured cabling." },
    { icon: Store, title: "Retail & Showrooms", desc: "Cash counter micro-optics, anti-theft sensors & customer analytics." },
    { icon: Factory, title: "Industrial & Warehouses", desc: "Long-range perimeter tripwires, optical fiber & fire alarm panels." }
  ];

  const timelineSteps = [
    {
      year: "2021",
      title: "Company Founded in Gurugram",
      desc: "Mextech Security System & IT Solutions commenced operations in Sector 23A / Palam Vihar, providing dedicated residential and commercial CCTV installations."
    },
    {
      year: "2022",
      title: "Expansion into Enterprise IT & Access",
      desc: "Broadened technical portfolio to include biometric facial attendance terminals, structured Cat6 network backbones, and PoE switching infrastructure."
    },
    {
      year: "2023",
      title: "PCB Workbench & Repair Diagnostic Lab",
      desc: "Established on-site component-level testing and micro-soldering bench for DVR/NVR motherboards, power supplies, and hard disk diagnostics."
    },
    {
      year: "Present",
      title: "Trusted Turnkey Security Partner",
      desc: "Managing security and IT maintenance (AMC) contracts for hundreds of homes, retail showrooms, corporate facilities, and logistics hubs across Gurugram & Delhi NCR."
    }
  ];

  return (
    <div className="pt-24 lg:pt-28">
      <SEO
        title="About Us | MEXTECH Security System & IT Solutions"
        description="Learn about Mextech Security System & IT Solutions. Established in Gurugram in 2021, providing reliable CCTV surveillance, IT networking, and safety systems."
        canonicalPath="/about"
      />

      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/60">
              Established 2021 &bull; Gurugram, Haryana
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              About Mextech Security System &amp; IT Solutions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We engineer dependable, high-definition electronic security and enterprise IT networking systems designed specifically for residential, commercial, and industrial premises.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview & Visual Story */}
      <section className="py-16 lg:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Engineering Trust, One Installation at a Time
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Mextech was established with a singular focus: to replace substandard, confusing security setups with clean, professional, and authentic hardware that property owners can count on 24 hours a day.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unlike unorganized vendors who cut corners with cheap copper-clad aluminum wiring or gray-market cameras, our engineers adhere strictly to industry standards: 100% pure copper conduits, fire-retardant cabling, genuine brand equipment with manufacturer serial tracking, and comprehensive mobile configuration.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>100% Authentic Hardware</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Official partners with CP Plus, Hikvision, Dahua, Ezviz, D-Link, and Western Digital.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                    <Wrench className="w-4 h-4" />
                    <span>Concealed Workmanship</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    No messy exposed wires. We use rigid PVC casing and neat server rack dressing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Local Gurugram Response</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Active 9 AM to 9 PM, 7 days a week, with rapid same-day field technician visits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Dual Security + IT Skill</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Full competence in cameras and access alongside gigabit Wi-Fi, routers, and switches.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Security systems testing and electronics engineering"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Local Hub in Sector 23A
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Near Palam Vihar, Gurugram. Serving all sectors, Cyber City, DLF phases, Udyog Vihar &amp; Manesar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premises We Protect */}
      <section className="py-16 bg-slate-900/50 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              Applications &amp; Sectors
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Tailored Solutions For Every Facility
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premisesList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center border border-sky-800/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Growth Built on Customer Recommendations
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-800">
            {timelineSteps.map((step, idx) => (
              <div
                key={step.year}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                  idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center text-sky-400 text-xs font-bold z-10">
                  {idx + 1}
                </div>

                {/* Content Card */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-950 border border-sky-800">
                    {step.year}
                  </span>
                  <h3 className="text-base font-bold text-white font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Need Expert Security Advice for Your Property?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Schedule a free site survey with our Gurugram technical team to analyze camera placements, cable routes, and networking requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <span>Schedule Free Site Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors"
            >
              <span>Browse All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
