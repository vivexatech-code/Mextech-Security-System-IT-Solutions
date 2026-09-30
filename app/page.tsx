import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import PillarServicesSection from "@/components/PillarServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandsSection from "@/components/BrandsSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ReviewSlider from "@/components/ReviewSlider";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with 14+ Years Experience & Quick Service Badges */}
      <Hero />

      {/* 2. Trust Strip with Authorized Brands & Premises */}
      <TrustStrip />

      {/* 3. Core Service Pillars & Subservices (CCTV & Surveillance, Security Systems, Automation, IT & Networking + PA & Walkie Talkies) */}
      <PillarServicesSection />

      {/* 4. Trust Section: Why Choose Mextech? (14+ Years, Professional Installation, Genuine Products, After-Sales Support, Gurgaon/NCR) */}
      <WhyChooseUs />

      {/* 5. Brands We Work With (CCTV, Intercom/EPABX, Security Alarm + Google Maps Verified Profile) */}
      <BrandsSection />

      {/* 6. Recent Project Showcase */}
      <ProjectShowcase />

      {/* 7. Authentic Customer Reviews with Google Maps Link */}
      <ReviewSlider />

      {/* 8. Quick Contact Form Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* 9. High-Impact CTA Banner */}
      <CTA />
    </>
  );
}
