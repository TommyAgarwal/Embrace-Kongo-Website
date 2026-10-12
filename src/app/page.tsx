"use client";

import React, { useState } from "react";
import {
  MapPin,
  CalendarBlank,
  PaperPlaneRight,
  CheckCircle,
  Sparkle,
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="page-wrapper">
      {/* Fixed Navbar at Top of Page */}
      <Navbar />

      {/* Hero Section */}
      <main className="hero-container" id="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          {/* Top Status Pill Badge */}
          <div className="coming-soon-badge">
            <span className="badge-icon">
              <Sparkle size={15} weight="fill" />
            </span>
            <span>Coming Soon — Join The Waitlist</span>
          </div>

          {/* Mega Title + Flanking Metadata Block */}
          <div className="hero-title-block">
            <div className="flanking-meta">
              <span className="flanking-meta-item">
                <MapPin size={18} weight="fill" />
                Brazzaville, Congo
              </span>
              <span className="flanking-meta-item">
                <CalendarBlank size={18} weight="fill" />
                July 23 – August 1
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

          {/* Primary CTA: Email Waitlist Capture */}
          <div className="waitlist-container" id="waitlist">
            {status === "success" ? (
              <div className="waitlist-success">
                <CheckCircle size={24} weight="fill" />
                <span>You&apos;re on the waitlist! We&apos;ll notify you as soon as full updates launch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="waitlist-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="waitlist-input"
                />
                <button type="submit" disabled={status === "loading"} className="waitlist-btn">
                  {status === "loading" ? "Joining..." : "Get Notified for Launch"}
                  <PaperPlaneRight size={18} weight="bold" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* About Section */}
      <AboutSection />

      {/* Pricing / Investment Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
