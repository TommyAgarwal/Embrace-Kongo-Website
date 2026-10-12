"use client";

import React from "react";
import { Quotes, Sparkle, Star } from "@phosphor-icons/react";

interface Testimonial {
  quote: string;
  name: string;
  byline: string;
  initials: string;
  roleType: "organizer" | "participant";
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The depth of connection to Bakongo drumming and rhythm unlocked a part of my spirit I never knew was waiting to wake up.",
      name: "Amara Diop",
      byline: "participant 2024",
      initials: "AD",
      roleType: "participant",
    },
    {
      quote:
        "Embrace Kongo was engineered from day one to honor the master elders and preserve ancient artistic lineages with uncompromising dignity.",
      name: "Malick Tchicaya",
      byline: "organizer",
      initials: "MT",
      roleType: "organizer",
    },
    {
      quote:
        "Stepping into Brazzaville and learning the Makwa dances directly from lineage keepers was the most grounding ten days of my life.",
      name: "Nia Washington",
      byline: "participant 2025",
      initials: "NW",
      roleType: "participant",
    },
    {
      quote:
        "Witnessing people from across the global diaspora connect tears, laughter, and polyrhythms in real time is why we do this every year.",
      name: "Sandrine Mpassi",
      byline: "organizer",
      initials: "SM",
      roleType: "organizer",
    },
    {
      quote:
        "The communal energy, daily culinary traditions, and heartfelt mentorship created bonds that continue to shape my creative work today.",
      name: "Marcus Thorne",
      byline: "participant 2024",
      initials: "MT",
      roleType: "participant",
    },
    {
      quote:
        "It is not simply a travel tour—it is a spiritual homecoming that reconnects you to the living pulse of Congo.",
      name: "Elena Rostova",
      byline: "participant 2025",
      initials: "ER",
      roleType: "participant",
    },
  ];

  return (
    <section id="testimonials" className="section-container testimonials-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-eyebrow">
            <Sparkle size={16} weight="fill" className="eyebrow-icon" />
            <span>COMMUNITY TESTIMONIALS</span>
          </div>

          <h2 className="section-title">
            VOICES OF THE <span className="highlight-text">EXPERIENCE</span>
          </h2>

          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hear directly from our past
            participants and organizers about the lasting impact of Embrace Kongo.
          </p>
        </div>

        {/* 6 SaaS Testimonial Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-card-top">
                <div className="testimonial-quote-icon">
                  <Quotes size={28} weight="fill" />
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} weight="fill" className="star-icon" />
                  ))}
                </div>
              </div>

              <blockquote className="testimonial-quote-text">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="testimonial-author-block">
                <div className="author-avatar-circle">
                  <span>{item.initials}</span>
                </div>

                <div className="author-meta">
                  <div className="author-name">{item.name}</div>
                  <div
                    className={`author-byline-pill ${
                      item.roleType === "organizer" ? "organizer" : "participant"
                    }`}
                  >
                    {item.byline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
