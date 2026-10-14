"use client";

import React from "react";
import {
  MapPin,
  CalendarBlank,
  ArrowRight,
  VideoCamera,
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Fixed Navbar at Top of Page */}
      <Navbar />

      {/* Hero Section */}
      <main className="hero-container" id="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          {/* Mega Title + Flanking Metadata Block */}
          <div className="hero-title-block">
            <div className="flanking-meta">
              <span className="flanking-meta-item">
                <MapPin size={18} weight="fill" />
                <span>Brazzaville, Congo</span>
              </span>
              <span className="flanking-meta-item">
                <CalendarBlank size={18} weight="fill" />
                <span>July 23 – August 1</span>
              </span>
            </div>

            <h1 className="hero-heading">
              EMBRACE KONGO <span className="brand-highlight">&apos;27</span>
            </h1>
          </div>

          {/* Subtitle / Value Proposition */}
          <p className="hero-subtitle">
            Join us for a transformative journey to Congo-Brazzaville. A 10-day program of workshops,
            traditional performances, and guided experiences led by local and international master artists.
          </p>

          {/* Primary CTA: Registration link for upcoming informational session */}
          <div className="hero-cta-container">
            <a
              href="https://zoom.us"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-register-btn"
            >
              <VideoCamera size={20} weight="fill" />
              <span>Register for Virtual Info Session</span>
              <ArrowRight size={18} weight="bold" />
            </a>
            <span className="hero-cta-note">
              Sunday, November 15, 2026 &bull; 10:00 AM PST &bull; Free on Zoom
            </span>
          </div>
        </div>
      </main>

      {/* About Section */}
      <AboutSection />

      {/* Pricing / Investment Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
