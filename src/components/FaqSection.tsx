"use client";

import React, { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { CaretDown, Sparkle, Question } from "@phosphor-icons/react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      question: "Do I need prior dance or traditional musical experience?",
      answer:
        "Not at all. Embrace Kongo welcomes participants of all skill levels, from curious novices to advanced performing artists. Daily masterclasses are guided by patient lineage elders who adapt rhythms and movement fundamentals to every participant.",
    },
    {
      id: "faq-2",
      question: "What are the visa and health requirements for traveling to Congo?",
      answer:
        "All travelers must hold a valid passport with at least 6 months validity from entry, an official tourist visa for the Republic of the Congo (we provide official certified letters of invitation), and a certified Yellow Fever vaccination record. Detailed guidance will be provided upon registration.",
    },
    {
      id: "faq-3",
      question: "How are the themed cultural days organized?",
      answer:
        "Each day is dedicated to a distinct Congolese ethnic tradition, such as Bakongo or Makwa (Kingoli). Mornings focus on rhythm and movement workshops, followed by shared midday meals, elder discussions, and site visits connected to that living heritage.",
    },
    {
      id: "faq-4",
      question: "What is the boutique accommodation like in Brazzaville?",
      answer:
        "Participants stay in vetted, secure boutique hotels in central Brazzaville featuring private en-suite bathrooms, air conditioning, Wi-Fi, and 24-hour security. Double occupancy is standard, and private single rooms are available upon request.",
    },
    {
      id: "faq-5",
      question: "Can I pay the $3,499 investment fee in monthly installments?",
      answer:
        "Yes, we offer structured installment plans following your initial deposit. The remaining balance can be divided across monthly payments leading up to 60 days before the trip.",
    },
    {
      id: "faq-6",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="resources" className="section-container faq-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-eyebrow">
            <Sparkle size={16} weight="fill" className="eyebrow-icon" />
            <span>KNOWLEDGE BASE</span>
          </div>

          <h2 className="section-title">
            FREQUENTLY ASKED <span className="highlight-text">QUESTIONS</span>
          </h2>

          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Everything you need to know
            about preparing for your 10-day cultural journey to Brazzaville.
          </p>
        </div>

        {/* FAQ Grid: Left Accordion, Right 1 Orange Placeholder Image */}
        <div className="faq-grid">
          {/* Left Column: Accordion-style menu */}
          <div className="faq-accordion-col">
            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.id}
                    className={`faq-accordion-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="faq-question-btn"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <div className="faq-question-content">
                        <span className="faq-q-icon">
                          <Question size={18} weight="bold" />
                        </span>
                        <span className="faq-question-text">{faq.question}</span>
                      </div>
                      <span className={`faq-caret-icon ${isOpen ? "rotated" : ""}`}>
                        <CaretDown size={18} weight="bold" />
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${idx}`}
                      className={`faq-answer-panel ${isOpen ? "expanded" : ""}`}
                    >
                      <div className="faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 1 Image Placeholder (Orange rectangle) */}
          <div className="faq-visual-col">
            <div className="faq-visual-card">
              <ImagePlaceholder
                label="TRAVEL PREPARATION & FIELD GUIDE"
                subtext="800 x 950 • Orange Image Placeholder"
                aspectRatio="4 / 5"
              />
              <div className="faq-visual-content">
                <span className="faq-visual-tag">Travel Resource Guide</span>
                <h4 className="faq-visual-title">Have additional questions before applying?</h4>
                <p className="faq-visual-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our coordinator team is
                  ready to answer questions regarding visas, flights, or dietary requirements.
                </p>
                <a
                  href="mailto:embracekongo@gmail.com"
                  className="faq-visual-link"
                >
                  Contact Coordination Team &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
