import { useRef } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ProjectSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Home Page - FairSysTech Landing Page
 * Design: Modern Minimalism with Tech Sophistication
 * 
 * Sections:
 * - Header: Navigation with logo
 * - Hero: Main value proposition
 * - About: Company information and values
 * - Work: Services overview
 * - Project: Case studies and portfolio
 * - Contact: Contact form and information
 * - Footer: Company links and copyright
 */

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleCtaClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onCtaClick={handleCtaClick} />

        {/* About Section */}
        <AboutSection />

        {/* Work/Services Section */}
        <WorkSection />

        {/* Project Section */}
        <ProjectSection />

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
