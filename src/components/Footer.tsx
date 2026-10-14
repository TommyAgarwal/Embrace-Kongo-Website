"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  MapPin,
  CalendarBlank,
  PaperPlaneRight,
  CheckCircle,
} from "@phosphor-icons/react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Top Grid */}
        <div className="footer-top-grid">
          {/* Brand & Dates Column */}
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



          {/* Email Capture / Newsletter Column */}
          <div className="footer-links-col footer-newsletter-col">
            <h4 className="footer-heading">Subscribe</h4>
            <p className="footer-newsletter-text">
              Receive program announcements, itinerary updates, and upcoming info session dates.
            </p>

            {status === "success" ? (
              <div className="footer-newsletter-success">
                <CheckCircle size={20} weight="fill" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-newsletter-input"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="footer-newsletter-btn"
                  aria-label="Subscribe"
                >
                  <PaperPlaneRight size={18} weight="bold" />
                </button>
              </form>
            )}
          </div>

          {/* Contact & Social Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Connect With Us</h4>
            <p className="footer-contact-text">
              Have questions or want to partner with Embrace Kongo? Reach out directly:
            </p>

            <div className="footer-contact-group">
              <a
                href="mailto:embracekongo@gmail.com"
                className="footer-contact-link"
              >
                <span>embracekongo@gmail.com</span>
                <ArrowUpRight size={16} weight="bold" className="link-arrow-icon" />
              </a>

              <a
                href="https://www.instagram.com/embrace_kongo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <span>Instagram</span>
                <ArrowUpRight size={16} weight="bold" className="link-arrow-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2027 Embrace Kongo. All rights reserved.
          </p>

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
