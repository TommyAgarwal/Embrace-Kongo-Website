"use client";

import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { ArrowRight, Sparkle, Compass, UsersThree, BookOpen } from "@phosphor-icons/react";

export default function AboutSection() {
  return (
    <section id="about" className="section-container about-section">
      <div className="section-inner">
        {/* Section Header Eyebrow */}
        <div className="section-eyebrow">
          <Sparkle size={16} weight="fill" className="eyebrow-icon" />
          <span>ABOUT EMBRACE KONGO</span>
        </div>

        {/* Two-column Heroic Card Layout */}
        <div className="about-grid">
          {/* Left Column: Narrative Copy & Cultural Pillars */}
          <div className="about-narrative-card">
            <h2 className="section-title">
              EXPERIENCE <span className="highlight-text">PILLARS</span>
            </h2>

            <div className="about-lead-quote">
              <p>
                Each day of Embrace Kongo is themed around a specific ethnic group or cultural
                tradition—such as Bakongo or Makwa (Kingoli). The music, dance, instruments, stories,
                and teachings throughout the day are connected to that tradition.
              </p>
            </div>

            {/* Feature Mini Cards */}
            <div className="about-features-grid">
              <div className="about-feature-item">
                <div className="feature-icon-badge">
                  <Compass size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="feature-title">Lineage Masters</h4>
                  <p className="feature-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-badge">
                  <UsersThree size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="feature-title">Sacred Communal Circles</h4>
                  <p className="feature-desc">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-badge">
                  <BookOpen size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="feature-title">Oral Histories & Rhythm</h4>
                  <p className="feature-desc">Excepteur sint occaecat cupidatat non proident sunt in culpa.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="about-cta-wrapper">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="primary-btn-pill"
              >
                <span>Learn more about the experience</span>
                <ArrowRight size={18} weight="bold" />
              </a>
            </div>
          </div>

          {/* Right Column: 1-2 Orange Rectangle Placeholders & Visual Cards */}
          <div className="about-visuals-col">
            <div className="about-visual-card primary-card">
              <ImagePlaceholder
                label="CULTURAL DANCE & DRUM WORKSHOP"
                subtext="1200 x 800 • Orange Image Placeholder"
                aspectRatio="4 / 3"
              />
              <div className="visual-caption">
                <span className="caption-badge">Daily Masterclasses</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
              </div>
            </div>

            <div className="about-visual-card secondary-card">
              <ImagePlaceholder
                label="BAKONGO & MAKWA HERITAGE GATHERING"
                subtext="800 x 500 • Orange Image Placeholder"
                aspectRatio="16 / 9"
              />
              <div className="visual-caption">
                <span className="caption-badge">Ancestral Exchange</span>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
