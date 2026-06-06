"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

const trustPoints = [
  "HIPAA-aware campaigns",
  "Tamil + English content",
  "NMC/MCI compliant ads",
  "7-day launch guarantee",
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
      style={{ background: "linear-gradient(135deg, #0B3C6E 0%, #1A5C96 100%)" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #1D9E75, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #1D9E75, transparent)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "rgba(29,158,117,0.2)", color: "#9FE1CB", border: "1px solid rgba(29,158,117,0.3)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#1D9E75" }} />
              Healthcare-only Digital Agency · Chennai
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More Patients.
              <br />
              <span style={{ color: "#1D9E75" }}>More Revenue.</span>
              <br />
              Real ROI.
            </h1>

            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
              We are Tamil Nadu&apos;s only digital marketing agency that works{" "}
              <strong className="text-white">exclusively with hospitals & clinics</strong>.
              From Chennai to Coimbatore — we drive OPD footfall, appointments, and Google rankings.
            </p>

            {/* Trust points */}
            <ul className="grid grid-cols-2 gap-2 mb-8">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <CheckCircle2 size={16} style={{ color: "#1D9E75" }} className="shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Get Free Digital Audit
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-colors"
                style={{ color: "white", border: "2px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.07)" }}
              >
                See Client Results
              </Link>
            </div>
          </div>

          {/* Right — Stats card */}
          <div className="hidden lg:flex flex-col gap-5">
            {/* Google reviews */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={18} fill="#FF6B35" strokeWidth={0} />
                ))}
                <span className="ml-1 font-bold text-white">4.9</span>
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                &ldquo;Emerge Digital increased our OPD appointments by 3x in 4 months. Their Tamil + English strategy works brilliantly.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "#1D9E75" }}>
                  DR
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Dr. Rajan K.</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Orthopedic Surgeon, Multi-Specialty Hospital · Chennai</p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "80+", label: "Hospitals Served" },
                { number: "12,000+", label: "OPD Leads / Month" },
                { number: "4.2x", label: "Average ROI" },
                { number: "6 Yrs", label: "Healthcare Focus" },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-xl text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {stat.number}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
