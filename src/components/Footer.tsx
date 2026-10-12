"use client";

import React from "react";
import Image from "next/image";
import {
  InstagramLogo,
  FacebookLogo,
  EnvelopeSimple,
  ArrowUp,
  MapPin,
  CalendarBlank,
} from "@phosphor-icons/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Top Grid */}
        <div className="footer-top-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-brand-logo">
              <Image
                src="/EKLOGO.svg"
                alt="Embrace Kongo"
                width={140}
                height={48}
                className="footer-logo-img"
              />
            </a>
            <p className="footer-description">
              A transformative 10-day cultural journey honoring the rhythms, master elders, and
              ancestral traditions of Congo-Brazzaville.
            </p>

            <div className="footer-meta-badges">
              <div className="footer-meta-item">
                <MapPin size={16} weight="fill" className="footer-icon-primary" />
                <span>Brazzaville, Congo</span>
              </div>
              <div className="footer-meta-item">
                <CalendarBlank size={16} weight="fill" className="footer-icon-primary" />
                <span>July 23 – August 1, 2027</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-link-list">
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="footer-link"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="footer-link"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="footer-link"
                >
                  Resources
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link">
                  Community Testimonials
                </a>
              </li>
              <li>
                <a href="#waitlist" className="footer-link">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Cultural Program Details */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Cultural Traditions</h4>
            <ul className="footer-link-list">
              <li>
                <span className="footer-text-item">Bakongo Heritage &amp; Rhythms</span>
              </li>
              <li>
                <span className="footer-text-item">Makwa (Kingoli) Movement</span>
              </li>
              <li>
                <span className="footer-text-item">Traditional Percussion Masterclasses</span>
              </li>
              <li>
                <span className="footer-text-item">Elder Oral Storytelling Circles</span>
              </li>
              <li>
                <span className="footer-text-item">Historical Excursions</span>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Connect With Us</h4>
            <p className="footer-contact-text">
              Have questions or want to partner with Embrace Kongo? Reach out directly:
            </p>

            <a
              href="mailto:embracekongo@gmail.com"
              className="footer-email-link"
            >
              <EnvelopeSimple size={18} weight="bold" />
              <span>embracekongo@gmail.com</span>
            </a>

            <div className="footer-social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow Embrace Kongo on Instagram"
              >
                <InstagramLogo size={20} weight="fill" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Follow Embrace Kongo on Facebook"
              >
                <FacebookLogo size={20} weight="fill" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2027 Embrace Kongo. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#" className="legal-link">
              Privacy Policy
            </a>
            <span className="separator">•</span>
            <a href="#" className="legal-link">
              Terms of Service
            </a>
            <span className="separator">•</span>
            <a href="#" className="legal-link">
              Cultural Code of Conduct
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} weight="bold" />
          </button>
        </div>
      </div>
    </footer>
  );
}
