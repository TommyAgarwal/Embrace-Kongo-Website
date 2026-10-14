"use client";

import React from "react";
import Image from "next/image";
import { MusicNotes, CookingPot, Compass } from "@phosphor-icons/react";

export default function AboutSection() {
  return (
    <section id="about" className="section-container about-section">
      <div className="section-inner">


        {/* Two-column Heroic Card Layout */}
        <div className="about-grid">
          {/* Left Column: Narrative Copy & Cultural Pillars */}
          <div className="about-narrative-card">
            <div className="experience-title-block">
              <span className="experience-title-flank">The Embrace Kongo</span>
              <h2 className="experience-title-main">Experience</h2>
            </div>

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
                  <MusicNotes size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="feature-title">Dance & Drum</h4>
                  <p className="feature-desc">
                    Daily classes in traditional dance, Ngoma rhythms, and songs, led by master artists.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-badge">
                  <CookingPot size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="feature-title">Foodways</h4>
                  <p className="feature-desc">
                    Explore Kongolese cuisine, the people, ingredients, and practices behind each dish.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-badge">
                  <Compass size={20} weight="fill" />
                </div>
                <div>
                  <h4 className="feature-title">Place, History, and Community</h4>
                  <p className="feature-desc">
                    Experience historic landmarks, artisan marketplaces, and vibrant local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Video & Photography Showcase */}
          <div className="about-visuals-col">
            <div className="about-media-wrapper">
              <video
                src="/danceclass.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="about-media-item about-video"
              />
            </div>
            <div className="about-media-wrapper">
              <Image
                src="/groupshot.JPG"
                alt="Embrace Kongo community and participants"
                width={1200}
                height={900}
                unoptimized
                className="about-media-item about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
