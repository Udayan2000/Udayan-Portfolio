import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[#06b6d4] selection:text-white">
      {/* Sticky Navigation (Zero Box Shadow) */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with Status, Value Prop & Live Terminal */}
        <HeroSection />

        {/* 2. 4+ Years Experience Timeline */}
        <ExperienceSection />

        {/* 3. Freelance Services & Offerings */}
        <ServicesSection />



        {/* 4. Featured Projects & Case Studies */}
        <ProjectsSection />

        {/* 5. About Me, Engineering Pillars & Skill Matrix */}
        <AboutSection />

        {/* 6. Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 7. Interactive Freelance Inquiry Form & Direct Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
