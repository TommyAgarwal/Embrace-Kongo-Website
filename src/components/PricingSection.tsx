"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Sparkle,
  ShieldCheck,
  AirplaneTakeoff,
  CalendarBlank,
  VideoCamera,
  ArrowRight,
  Check,
} from "@phosphor-icons/react";

export default function PricingSection() {
  const [registered, setRegistered] = useState(false);

  const includedItems = [
    "10 nights boutique accommodations in Brazzaville",
    "Daily masterclasses in traditional dance, percussion & song",
    "Curated cultural excursions to heritage sanctuaries & artisan guilds",
    "Authentic daily meals: breakfast, lunch & traditional dinner feasts",
    "Dedicated private ground transportation & Maya-Maya airport transfers",
    "Direct mentorship from elder master tradition bearers & facilitators",
    "Traditional instruments & ceremonial workshop materials provided",
    "Commemorative Embrace Kongo welcome package & custom keepsake",
  ];

  const notIncludedItems = [
    "International round-trip flights to Maya-Maya Airport (BZV)",
    "Republic of Congo tourist entry visa processing & consular fees",
    "Mandatory Yellow Fever vaccination & personal medications",
    "Comprehensive international travel & medical insurance",
    "Personal incidentals, souvenirs & off-itinerary independent activities",
  ];

  const handleRegisterModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => setRegistered(false), 3500);
  };

  return (
    <section id="pricing-investment" className="section-container pricing-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-eyebrow">
            <Sparkle size={16} weight="fill" className="eyebrow-icon" />
            <span>TRANSPARENT TUITION</span>
          </div>

          <h2 className="section-title">
            EMBRACE KONGO <span className="highlight-text">INVESTMENT</span>
          </h2>

          <div className="pricing-headline-block">
            <div className="price-tag-wrap">
              <span className="price-currency">$</span>
              <span className="price-amount">3,499</span>
              <span className="price-term">USD / participant</span>
            </div>
            <p className="price-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A 10-day immersive cultural
              retreat in Brazzaville, Congo (July 23 – August 1, 2027). Transparent pricing with
              curated group intimacy and elder mentorship.
            </p>
          </div>
        </div>

        {/* Two Comparison Cards: What's Included vs What's Not */}
        <div className="pricing-cards-grid">
          {/* Card 1: What's Included */}
          <div className="pricing-card included-card">
            <div className="card-pill-tag tag-included">
              <ShieldCheck size={16} weight="bold" />
              <span>Full Immersion Experience</span>
            </div>

            <div className="card-header">
              <h3 className="card-title">What&apos;s Included In The Fee</h3>
              <p className="card-subtitle">
                All core in-country program expenses, accommodations, and guided masterclasses are fully covered.
              </p>
            </div>

            <ul className="perks-list">
              {includedItems.map((item, idx) => (
                <li key={idx} className="perk-item included">
                  <span className="perk-icon-wrap included">
                    <CheckCircle size={20} weight="fill" />
                  </span>
                  <span className="perk-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: What's Not Included */}
          <div className="pricing-card not-included-card">
            <div className="card-pill-tag tag-not-included">
              <AirplaneTakeoff size={16} weight="bold" />
              <span>Individual Logistics</span>
            </div>

            <div className="card-header">
              <h3 className="card-title">What&apos;s Not Included</h3>
              <p className="card-subtitle">
                Individual travel preparations, visas, and international transit handled by the participant.
              </p>
            </div>

            <ul className="perks-list">
              {notIncludedItems.map((item, idx) => (
                <li key={idx} className="perk-item not-included">
                  <span className="perk-icon-wrap not-included">
                    <XCircle size={20} weight="fill" />
                  </span>
                  <span className="perk-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Underneath Cards: Live Virtual Info Session / Q&A Prompt */}
        <div className="info-session-cta-card">
          <div className="info-session-content">
            <div className="info-session-badge">
              <VideoCamera size={16} weight="fill" />
              <span>Live Virtual Info Session &amp; Q&amp;A</span>
            </div>

            <h3 className="info-session-title">
              Have Questions Before You Join? Meet The Team Live.
            </h3>

            <p className="info-session-description">
              Join our organizers and lead facilitators for a live walkthrough of the 10-day itinerary,
              accommodations, travel preparations, and cultural traditions. Open Q&amp;A will follow.
            </p>

            <div className="info-session-schedule">
              <CalendarBlank size={18} weight="fill" className="schedule-icon" />
              <span className="schedule-text">
                Sunday, November 15, 2026 &bull; 1:00 PM EST (10:00 AM PST / 7:00 PM Brazzaville Time)
              </span>
            </div>
          </div>

          <div className="info-session-action">
            <button
              type="button"
              onClick={handleRegisterModal}
              className={`info-session-btn ${registered ? "registered" : ""}`}
            >
              {registered ? (
                <>
                  <Check size={18} weight="bold" />
                  <span>RSVP Confirmed! Check Email</span>
                </>
              ) : (
                <>
                  <span>Register for Virtual Info Session</span>
                  <ArrowRight size={18} weight="bold" />
                </>
              )}
            </button>
            <span className="info-session-note">Free Registration &bull; Held live on Zoom</span>
          </div>
        </div>
      </div>
    </section>
  );
}
