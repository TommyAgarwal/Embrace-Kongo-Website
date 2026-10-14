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
    "Daily dance, percussion, and song masterclasses",
    "Guided heritage and artisan excursions",
    "Breakfast, lunch, and dinner daily",
    "Transportation to programmed events and BZV airport transfers",
    "Instruction from master artists and tradition bearers",
    "Instruments and workshop materials",
  ];

  const notIncludedItems = [
    "International airfare to BZV",
    "Republic of the Congo tourist visa and fees",
    "Required vaccinations and personal medications",
    "International travel insurance",
    "Personal expenses and off-itinerary activities",
  ];

  return (
    <section id="pricing-investment" className="section-container pricing-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="experience-title-block pricing-title-block">
            <span className="experience-title-flank">Embrace Kongo</span>
            <h2 className="experience-title-main">Investment</h2>
          </div>

          <div className="pricing-headline-block">
            <div className="price-badge">
              <div className="price-tag-wrap">
                <span className="price-amount">$3499</span>
                <span className="price-term">/ person</span>
              </div>
              <span className="price-subtext">Monthly payment plans available</span>
            </div>
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
