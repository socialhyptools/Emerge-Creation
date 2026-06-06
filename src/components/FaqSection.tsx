"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faqData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ backgroundColor: "#E6F4FB", color: "#1A5C96" }}
          >
            FAQs
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
          >
            Questions Hospitals Ask Us
          </h2>
          <p className="text-base" style={{ color: "#4A6080" }}>
            Everything you need to know before working with a healthcare marketing agency.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-colors"
                style={{
                  border: `1px solid ${isOpen ? "#1D9E75" : "#D0DCEA"}`,
                  backgroundColor: isOpen ? "#F4FBF8" : "#fff",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm font-semibold leading-snug"
                    style={{ color: "#0B3C6E" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-200"
                    style={{
                      color: "#1D9E75",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
