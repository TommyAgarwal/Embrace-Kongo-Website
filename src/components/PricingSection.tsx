"use client";

import React from "react";
import {
  CheckCircle,
  XCircle,
  ShieldCheck,
  AirplaneTakeoff,
} from "@phosphor-icons/react";

export default function PricingSection() {
  const includedItems = [
    "10 nights of boutique accommodations in Brazzaville",
    "Daily masterclasses in traditional dance, percussion, and song",
    "Guided cultural excursions to heritage sites and artisan communities",
    "Breakfast, lunch, and traditional dinner each day",
    "Ground transportation to programmed events, including Maya-Maya Airport transfers",
    "Instruction and mentorship from master artists, tradition bearers, and facilitators",
    "Traditional instruments and workshop materials provided",
  ];

  const notIncludedItems = [
    "Round-trip international airfare to Maya-Maya Airport (BZV)",
    "Republic of the Congo tourist visa and associated fees",
    "Required vaccinations and personal medications",
    "International travel insurance",
    "Personal expenses, souvenirs, and independent activities outside the program itinerary",
  ];

  return (
    <section id="pricing-investment" className="section-container pricing-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header-center">
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
                Program tuition covers the core in-country Embrace Kongo experience:
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
                Embrace Kongo will provide planning guidance, but participants are responsible for arranging and covering:
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
      </div>
    </section>
  );
}
