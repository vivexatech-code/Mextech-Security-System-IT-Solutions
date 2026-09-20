import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServiceGrid from "@/components/ServiceGrid";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectShowcase from "@/components/ProjectShowcase";
import ReviewSlider from "@/components/ReviewSlider";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Featured 6 Core Services */}
      <ServiceGrid featuredOnly={true} />

      {/* 4. Concise Company Overview */}
      <AboutPreview />

      {/* 5. 6 Core Strengths */}
      <WhyChooseUs />

      {/* 6. Recent Project Showcase */}
      <ProjectShowcase />

      {/* 7. Authentic Customer Reviews */}
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
