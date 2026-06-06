import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Healthcare Industries We Serve — Hospitals, Clinics, Diagnostics Tamil Nadu",
  description:
    "Digital marketing for hospitals, clinics, diagnostic centres, dental chains, Ayurveda centres, fertility clinics, and nursing homes across Tamil Nadu.",
};

const industries = [
  {
    id: "hospitals",
    emoji: "🏥",
    title: "Multi-Specialty Hospitals",
    desc: "For 50-bed to 500-bed hospitals — managing multiple specialties, OPD volume, and brand reputation simultaneously.",
    challenges: ["Multi-specialty SEO for each department", "OPD appointment lead generation", "Doctor reputation building", "Insurance & corporate health tie-ups"],
    outcomes: ["Rank #1 for top 20 specialties in your city", "3x OPD footfall via paid & organic", "500+ Google reviews in 90 days"],
    sample: "Meenakshi Mission Hospital, Madurai — 280% increase in OPD inquiries",
  },
  {
    id: "clinics",
    emoji: "🩺",
    title: "Single-Specialty Clinics",
    desc: "For cardiology, orthopaedics, neurology, paediatrics, and other specialist clinics competing in crowded Chennai markets.",
    challenges: ["Hyper-local SEO for the clinic area", "Doctor personal brand building", "Patient education content", "Appointment booking funnel"],
    outcomes: ["Top 3 Google ranking for your specialty + location", "Direct appointment booking via website & WhatsApp", "40% increase in consultation bookings"],
    sample: "Bloom Cardiology Clinic, Anna Nagar — 3x appointments in 60 days",
  },
  {
    id: "diagnostics",
    emoji: "🔬",
    title: "Diagnostic Centers",
    desc: "For standalone and chain diagnostic labs competing on price, turnaround time, and trust in the Tamil Nadu market.",
    challenges: ["Test-specific SEO (\"blood test near me\")", "Home collection lead generation", "Price comparison positioning", "Corporate tie-up acquisition"],
    outcomes: ["Rank for 50+ test-related search terms", "Home collection leads via Google Ads", "Corporate empanelment inquiry generation"],
    sample: "Nova Diagnostics, Trichy — 200% increase in home collection bookings",
  },
  {
    id: "dental",
    emoji: "🦷",
    title: "Dental Chains",
    desc: "For single dental practices and multi-location dental chains across Tamil Nadu looking to scale patient volume.",
    challenges: ["Multi-location local SEO", "Implant & cosmetic dentistry leads", "Before/after content strategy", "High-value treatment marketing"],
    outcomes: ["#1 ranking for implants, braces, whitening searches", "Cost per dental lead under ₹250", "40% increase in high-value treatment consultations"],
    sample: "SmileCare Dental, Coimbatore — 60% increase in new patient walk-ins",
  },
  {
    id: "ayush",
    emoji: "🌿",
    title: "Ayurveda / AYUSH Centers",
    desc: "For Ayurvedic hospitals, Siddha clinics, and wellness centres tapping into growing demand for traditional medicine in Tamil Nadu.",
    challenges: ["Wellness & chronic disease SEO", "Anti-pharma positioning", "Treatment package marketing", "Medical tourism for NRI patients"],
    outcomes: ["Rank for arthritis, diabetes, psoriasis Ayurveda searches", "NRI patient inquiry generation", "3x package consultation bookings"],
    sample: "Vaidyasala Ayurveda, Chennai — 150% increase in chronic disease inquiries",
  },
  {
    id: "nursing",
    emoji: "🛏️",
    title: "Nursing Homes",
    desc: "For small-to-mid nursing homes building community trust and competing against large hospitals in local markets.",
    challenges: ["Hyper-local reputation building", "Emergency care positioning", "Maternity & delivery marketing", "Local community trust signals"],
    outcomes: ["Top Google listing in a 5km radius", "4.8★ average Google rating", "Emergency & maternity inquiry surge"],
    sample: "Sakthi Nursing Home, Salem — 4x increase in maternity inquiries",
  },
  {
    id: "fertility",
    emoji: "👶",
    title: "Fertility / IVF Centers",
    desc: "For IVF clinics, fertility specialists, and reproductive medicine centres dealing with highly sensitive patient journeys.",
    challenges: ["Sensitive content compliance", "High-intent keyword targeting", "Patient trust & privacy", "Success rate messaging"],
    outcomes: ["Rank for IVF, fertility treatment searches", "Private inquiry lead forms", "2.5x consultation bookings in 90 days"],
    sample: "Bloom Fertility Centre, Chennai — 180% increase in consultation inquiries",
  },
  {
    id: "tourism",
    emoji: "✈️",
    title: "Medical Tourism Facilitators",
    desc: "For hospitals and facilitators attracting international patients from Sri Lanka, Malaysia, Singapore, and the Middle East.",
    challenges: ["International SEO (English + Tamil)", "NRI & overseas Indian targeting", "Trust & accreditation marketing", "Medical visa support content"],
    outcomes: ["Rank for \"best hospital India for [condition]\"", "International patient inquiry form", "WhatsApp-first inquiry funnel"],
    sample: "MIOT International, Chennai — 90% increase in international patient inquiries",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 pb-16 lg:pt-32 lg:pb-20"
        style={{ background: "linear-gradient(135deg, #0B3C6E 0%, #1D9E75 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-5"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white" }}
          >
            Industries We Serve
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Every Healthcare Vertical in Tamil Nadu
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            From multi-specialty hospitals to single-specialty clinics, Ayurveda centres to IVF clinics —
            we have built specialised marketing strategies for every healthcare vertical.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {industries.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="bg-white rounded-2xl p-6 lg:p-8 scroll-mt-24"
              style={{ border: "1px solid #D0DCEA" }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left */}
                <div className="lg:col-span-1">
                  <div className="text-4xl mb-4">{ind.emoji}</div>
                  <h2
                    className="text-2xl font-bold mb-3"
                    style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                  >
                    {ind.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A6080" }}>
                    {ind.desc}
                  </p>
                  <div
                    className="p-3 rounded-xl text-sm font-medium"
                    style={{ backgroundColor: "#E1F5EE", color: "#1D9E75" }}
                  >
                    📊 {ind.sample}
                  </div>
                </div>

                {/* Middle */}
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: "#4A6080" }}>
                    Key Challenges We Solve
                  </h3>
                  <ul className="space-y-2">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm" style={{ color: "#1A2B3C" }}>
                        <span style={{ color: "#FF6B35" }}>→</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: "#4A6080" }}>
                    Outcomes You Can Expect
                  </h3>
                  <ul className="space-y-2 mb-5">
                    {ind.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm" style={{ color: "#1A2B3C" }}>
                        <span style={{ color: "#1D9E75" }}>✓</span> {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#FF6B35" }}
                  >
                    Get a strategy for your {ind.title.split(" ")[0].toLowerCase()} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
