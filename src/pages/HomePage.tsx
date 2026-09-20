import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  ChevronRight,
  Phone,
  MessageSquare,
  Building2,
  Lock,
  Wifi,
  Eye
} from "lucide-react";
import {
  COMPANY_INFO,
  FEATURED_SERVICES,
  STRENGTHS_DATA,
  PROJECTS_DATA,
  REVIEWS_DATA,
  TRUST_INDICATORS
} from "../data/companyData";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <div className="pt-24 lg:pt-28">
      <SEO
        title="MEXTECH Security System & IT Solutions | Gurugram"
        description="Professional CCTV installation, surveillance systems, networking, access control, and IT solutions in Gurugram. Established 2021."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-900 py-16 lg:py-24"
      >
        {/* Subtle background glow effect */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-600 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-700 rounded-full blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>Gurugram's Trusted Security &amp; IT Specialists</span>
              </div>

              {/* Primary Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
                Smart Security. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  Reliable Technology.
                </span> <br />
                Complete Protection.
              </h1>

              {/* Supporting Copy */}
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                Professional CCTV, Security &amp; IT Solutions for Homes, Offices, Shops, Industries and Commercial Spaces. Designed for durability, installed with precision, and supported locally.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  to="/contact"
                  id="hero-cta-quote"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-sky-900/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  id="hero-cta-services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 transition-colors"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TRUST_INDICATORS.map((indicator) => (
                  <div key={indicator} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{indicator}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/80 group">
                  <img
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85"
                    alt="Professional High-Definition CCTV Surveillance Camera"
                    className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Floating Highlight Card on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                          <Eye className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white uppercase tracking-wider">
                            24/7 Smart Monitoring
                          </p>
                          <p className="text-[11px] text-slate-300">
                            Ultra HD &bull; AI Detection &bull; Mobile Stream
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle Experience Tag */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 shadow-xl items-center gap-2 text-xs font-bold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Serving Gurugram Since 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK TRUST STRIP */}
      <section
        id="trust-strip"
        aria-label="Key Trust Signals"
        className="bg-slate-900/90 border-b border-slate-800 py-3.5 px-4 text-xs text-slate-300 font-medium"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-8 text-center">
          <span className="flex items-center gap-1.5 text-white font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Established 2021
          </span>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Professional Installation
          </span>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Security &amp; IT Expertise
          </span>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            After-Sales Support
          </span>
          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Gurugram Based
          </span>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section id="about-preview" className="py-20 lg:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80"
                  alt="Security systems control and surveillance operations"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur rounded-lg border border-slate-800 text-xs text-slate-300">
                  <span className="font-bold text-white">Full-Service Capabilities:</span> Residential villas, high-rise corporate towers &amp; manufacturing plants across Delhi NCR.
                </div>
              </div>
            </div>

            {/* Text Copy (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-widest">
                <span>About Mextech</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Security Solutions Built Around Your Needs
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Founded in Gurugram in 2021, Mextech Security System &amp; IT Solutions provides dependable surveillance, access control, fire protection, and enterprise networking. We engineer customized security architectures for residences, offices, retail chains, and industrial complexes with quality hardware and prompt local technical support.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-extrabold text-sky-400 font-heading">100%</div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">Genuine Brand Hardware</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-extrabold text-sky-400 font-heading">7 Days</div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">9 AM – 9 PM Local Support</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  id="about-preview-learn-more"
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-bold text-base transition-colors group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES (EXACTLY 6 CARDS WITH HIGH QUALITY IMAGES) */}
      <section id="featured-services" className="py-20 lg:py-24 bg-slate-900/60 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              Core Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Our Core Security Solutions
            </h2>
            <p className="text-slate-400 text-base">
              Engineered for continuous protection, ultra-sharp recording, and seamless connectivity.
            </p>
          </div>

          {/* 6 Featured Service Cards Grid (Using Images, Not Icons!) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FEATURED_SERVICES.map((service, idx) => (
              <div
                key={service.title}
                id={`featured-service-card-${idx}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/40 shadow-lg hover:shadow-sky-950/30 transition-all duration-300"
              >
                {/* Large Service Image */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <Link
                      to={service.detailLink}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Button to View Full 13 Services Catalog */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              id="view-all-services-cta"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 hover:border-sky-500/50 shadow-md transition-all duration-200"
            >
              <span>View All 13 Services Catalog</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY MEXTECH (STRENGTHS 01-06) */}
      <section id="why-mextech" className="py-20 lg:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              The Mextech Difference
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Why Choose Mextech?
            </h2>
            <p className="text-slate-400 text-base">
              Trusted by homeowners, retail chains, corporate workplaces, and factories across Gurugram.
            </p>
          </div>

          {/* Grid of 6 Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRENGTHS_DATA.map((item) => (
              <div
                key={item.id}
                id={`strength-box-${item.number}`}
                className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors space-y-4"
              >
                <div className="text-3xl font-extrabold text-sky-500 font-heading">
                  {item.number}
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROJECT / WORK SHOWCASE */}
      <section id="project-showcase" className="py-20 lg:py-24 bg-slate-900/60 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Our Work. Your Security.
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Recent Installations Across Gurugram
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              From residential villas to multi-channel industrial manufacturing surveillance, here is a preview of our work.
            </p>
          </div>

          {/* Showcase Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-200 text-xs px-2.5 py-1 rounded-md font-medium">
                    {proj.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white font-heading group-hover:text-sky-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-sky-400 font-medium mt-0.5">
                      {proj.location}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-800">
                    {proj.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section id="customer-reviews" className="py-20 lg:py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              Verified Feedback
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              What Our Clients Say
            </h2>
            <p className="text-slate-400 text-sm">
              Real experiences from homeowners, business operators, and facility managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    <p className="text-xs text-slate-400">{review.roleOrLocation}</p>
                  </div>
                  <span className="text-[10px] text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                    {review.serviceType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section id="final-cta" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-sky-600/20 border border-sky-400/30 flex items-center justify-center text-sky-400 mx-auto">
            <Lock className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Ready to Secure Your Space?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Talk to our team about CCTV, security systems, networking and IT solutions tailored to your requirements. We offer free site assessments across Gurugram.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              id="final-cta-quote-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-sky-950/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-base border border-emerald-500/40 shadow-lg shadow-emerald-950/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="final-cta-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
