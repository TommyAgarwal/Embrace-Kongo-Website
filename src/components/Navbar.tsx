"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Copy,
  Check,
  EnvelopeSimple,
  List,
  X,
} from "@phosphor-icons/react";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = async () => {
    const emailToCopy = "embracekongo@gmail.com";
    try {
      await navigator.clipboard.writeText(emailToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      const el = document.createElement("textarea");
      el.value = emailToCopy;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <nav className="fixed-navbar">
      <div className="navbar-container">
        {/* Left Column: Brand Logo */}
        <div className="navbar-left-col">
          <a href="#" className="navbar-brand" aria-label="Embrace Kongo Home">
            <Image
              src="/EKLOGO.svg"
              alt="Embrace Kongo"
              width={130}
              height={44}
              className="navbar-logo-img"
              priority
            />
          </a>
        </div>

        {/* Center Column: Exactly Centered Nav Links */}
        <div className="navbar-center-links">
          <a href="#about" className="navbar-link">
            THE EXPERIENCE
          </a>
          <a href="#pricing-investment" className="navbar-link">
            PRICING
          </a>
          <a href="#resources" className="navbar-link">
            FAQS
          </a>
        </div>

        {/* Right Column: Email Copy Button & Mobile Menu Toggle */}
        <div className="navbar-right-col">
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`email-copy-btn ${copied ? "copied" : ""}`}
            title="Click to copy email address"
            aria-label="Copy embracekongo@gmail.com"
          >
            <EnvelopeSimple size={18} weight="bold" className="email-icon" />
            <span className="email-address-text">
              {copied ? "Copied to clipboard!" : "embracekongo@gmail.com"}
            </span>
            <span className="copy-status-icon">
              {copied ? (
                <Check size={16} weight="bold" />
              ) : (
                <Copy size={16} weight="bold" />
              )}
            </span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <a
            href="#about"
            className="navbar-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            THE EXPERIENCE
          </a>
          <a
            href="#pricing-investment"
            className="navbar-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            PRICING
          </a>
          <a
            href="#resources"
            className="navbar-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQS
          </a>
          <button
            type="button"
            onClick={() => {
              handleCopyEmail();
            }}
            className={`email-copy-btn mobile ${copied ? "copied" : ""}`}
          >
            <EnvelopeSimple size={18} weight="bold" />
            <span>{copied ? "Copied!" : "embracekongo@gmail.com"}</span>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      )}
    </nav>
  );
}
