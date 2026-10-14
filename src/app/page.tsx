"use client";

import React, { useState } from "react";
import {
  MapPin,
  CalendarBlank,
  ArrowRight,
  Check,
  VideoCamera,
} from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [registered, setRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalEmail, setModalEmail] = useState("");
  const [modalName, setModalName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalEmail || !modalEmail.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setRegistered(true);
      setShowModal(false);
    }, 700);
  };

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

          {/* Primary CTA: Registration button for upcoming informational session */}
          <div className="hero-cta-container">
            <button
              type="button"
              onClick={handleOpenModal}
              className={`hero-register-btn ${registered ? "registered" : ""}`}
            >
              {registered ? (
                <>
                  <Check size={20} weight="bold" />
                  <span>RSVP Confirmed for Info Session</span>
                </>
              ) : (
                <>
                  <VideoCamera size={20} weight="fill" />
                  <span>Register for Virtual Info Session</span>
                  <ArrowRight size={18} weight="bold" />
                </>
              )}
            </button>
            <span className="hero-cta-note">
              Sunday, November 15, 2026 &bull; 10:00 AM PST &bull; Free on Zoom
            </span>
          </div>
        </div>
      </main>

      {/* Registration Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-header">
              <div className="modal-badge">
                <VideoCamera size={16} weight="fill" />
                <span>Live Virtual Info Session</span>
              </div>
              <h3 className="modal-title">RSVP for the Informational Session</h3>
              <p className="modal-subtitle">
                Join our organizers and lead facilitators for a live walkthrough of the itinerary,
                accommodations, travel prep, and Q&amp;A.
              </p>
            </div>

            <form onSubmit={handleModalSubmit} className="modal-form">
              <div className="modal-input-group">
                <label htmlFor="rsvp-name" className="modal-label">Your Name</label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  placeholder="e.g. Maya Robinson"
                  value={modalName}
                  onChange={(e) => setModalName(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div className="modal-input-group">
                <label htmlFor="rsvp-email" className="modal-label">Email Address</label>
                <input
                  id="rsvp-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={modalEmail}
                  onChange={(e) => setModalEmail(e.target.value)}
                  className="modal-input"
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="modal-cancel-btn"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="modal-submit-btn"
                >
                  {isSubmitting ? "Registering..." : "Confirm My Spot"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
