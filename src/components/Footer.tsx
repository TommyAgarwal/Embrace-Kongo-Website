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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxg7BdCVQKhlfj2TmGMaZAZfrjA-l7i2EdLDq_eP9BN01kTQL5vT1AyJJV75vHY7BUV/exec";

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
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
              Join the interest list to receive program dates, participation details, and future announcements.
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
