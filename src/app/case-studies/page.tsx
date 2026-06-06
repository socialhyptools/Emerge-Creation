import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Case Studies — Real Healthcare Marketing Results Tamil Nadu",
  description:
    "Real before/after results from hospitals, clinics, and diagnostic centres across Tamil Nadu. See how Emerge Digital drives OPD appointments and Google rankings.",
};

const caseStudies = [
  {
    id: "meenakshi-mission",
    tag: "Multi-Specialty Hospital",
    tagColor: "#0B3C6E",
    tagBg: "#E6F4FB",
    client: "Meenakshi Mission Hospital",
    location: "Madurai",
    challenge:
      "MMHRC was getting fewer than 200 organic website inquiries per month with almost no visibility on Google for key specialties like orthopaedics and neurology.",
    strategy:
      "We rebuilt their Google Business Profile, ran specialty-wise SEO for 18 departments, and launched Tamil-language Google Search campaigns targeting Madurai, Dindigul, and Theni districts.",
    results: [
      { metric: "OPD inquiries/month", before: "200", after: "760", change: "+280%" },
      { metric: "Google ranking (ortho)", before: "Page 3", after: "#1", change: "" },
      { metric: "Google Reviews", before: "48", after: "312", change: "+6x" },
      { metric: "Cost per lead", before: "₹850", after: "₹210", change: "-75%" },
    ],
    duration: "4 months",
    services: ["Local SEO", "Google Ads", "Reputation Management"],
  },
  {
    id: "bloom-fertility",
    tag: "Fertility / IVF Center",
    tagColor: "#1D9E75",
    tagBg: "#E1F5EE",
    client: "Bloom Fertility Centre",
    location: "Chennai (Anna Nagar)",
    challenge:
      "A newly opened IVF clinic with zero online presence in a highly competitive Chennai market dominated by established players.",
    strategy:
      "We built a sensitive, privacy-first content strategy around IVF success stories, created educational landing pages for each treatment, and ran geo-targeted Meta ads with discreet remarketing.",
    results: [
      { metric: "Consultation bookings/month", before: "12", after: "78", change: "+550%" },
      { metric: "Organic search traffic", before: "180/mo", after: "2,100/mo", change: "+11x" },
      { metric: "Cost per consultation", before: "₹1,200", after: "₹380", change: "-68%" },
      { metric: "WhatsApp inquiries/day", before: "2", after: "18", change: "+800%" },
    ],
    duration: "6 months",
    services: ["Local SEO", "Meta Ads", "Content Marketing", "Web Design"],
  },
  {
    id: "smilecare-dental",
    tag: "Dental Chain",
    tagColor: "#1A5C96",
    tagBg: "#E6F4FB",
    client: "SmileCare Dental Chain",
    location: "Coimbatore (3 locations)",
    challenge:
      "SmileCare had 3 branches in Coimbatore with inconsistent Google listings, no review strategy, and almost no paid traffic for high-value treatments like implants.",
    strategy:
      "Unified all 3 GBP listings under a single strategy, launched implant and Invisalign-focused Google Search campaigns, and built a review automation system that asked happy patients post-appointment.",
    results: [
      { metric: "New patient walk-ins/month", before: "85", after: "210", change: "+147%" },
      { metric: "Implant consultations/month", before: "8", after: "34", change: "+325%" },
      { metric: "Google Reviews (total)", before: "62", after: "380", change: "+6x" },
      { metric: "Average Google Rating", before: "3.8★", after: "4.9★", change: "" },
    ],
    duration: "3 months",
    services: ["Local SEO", "Google Ads", "Reputation Management"],
  },
  {
    id: "nova-diagnostics",
    tag: "Diagnostic Center",
    tagColor: "#FF6B35",
    tagBg: "#FFF0EB",
    client: "Nova Diagnostic Centre",
    location: "Trichy",
    challenge:
      "Competing against large national diagnostic chains (Thyrocare, SRL) with no digital presence and zero home collection leads from digital channels.",
    strategy:
      "Hyperlocal SEO targeting Trichy area searches, Google Ads for \"blood test home collection Trichy\", and an WhatsApp-first lead capture system.",
    results: [
      { metric: "Home collection bookings/month", before: "45", after: "180", change: "+300%" },
      { metric: "Walk-in patients from Google", before: "20", after: "95", change: "+375%" },
      { metric: "Monthly revenue growth", before: "Baseline", after: "+₹4.2L/mo", change: "" },
      { metric: "Cost per booking", before: "₹620", after: "₹140", change: "-77%" },
    ],
    duration: "5 months",
    services: ["Local SEO", "Google Ads", "WhatsApp Marketing"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 pb-16 lg:pt-32 lg:pb-20"
        style={{ background: "linear-gradient(135deg, #0B3C6E 0%, #1A5C96 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-5"
            style={{ backgroundColor: "rgba(29,158,117,0.2)", color: "#9FE1CB" }}
          >
            Proven Results
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Real Results from Real Hospitals
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Before-and-after growth stories from hospitals, clinics, and healthcare providers across Tamil Nadu.
            Numbers, not promises.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid #D0DCEA" }}
            >
              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                      style={{ backgroundColor: cs.tagBg, color: cs.tagColor }}
                    >
                      {cs.tag}
                    </span>
                    <h2
                      className="text-2xl font-bold"
                      style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                    >
                      {cs.client}
                    </h2>
                    <p className="text-sm" style={{ color: "#4A6080" }}>
                      📍 {cs.location} · {cs.duration}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: "#F4F7FA", color: "#4A6080", border: "1px solid #D0DCEA" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Story */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: "#4A6080" }}>
                        Challenge
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#1A2B3C" }}>{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: "#4A6080" }}>
                        Strategy
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#1A2B3C" }}>{cs.strategy}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-2">
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: "#4A6080" }}>
                      <TrendingUp size={16} style={{ color: "#1D9E75" }} /> Results
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {cs.results.map((r) => (
                        <div
                          key={r.metric}
                          className="p-4 rounded-xl"
                          style={{ backgroundColor: "#F4F7FA", border: "1px solid #D0DCEA" }}
                        >
                          <p className="text-xs font-medium mb-2" style={{ color: "#4A6080" }}>{r.metric}</p>
                          <div className="flex items-end gap-3">
                            <div>
                              <p className="text-xs" style={{ color: "#4A6080" }}>Before</p>
                              <p className="text-lg font-bold" style={{ color: "#1A2B3C" }}>{r.before}</p>
                            </div>
                            <span style={{ color: "#D0DCEA", fontSize: "20px" }}>→</span>
                            <div>
                              <p className="text-xs" style={{ color: "#4A6080" }}>After</p>
                              <p className="text-lg font-bold" style={{ color: "#1D9E75" }}>{r.after}</p>
                            </div>
                            {r.change && (
                              <span
                                className="ml-auto px-2 py-0.5 rounded-full text-xs font-bold"
                                style={{ backgroundColor: "#E1F5EE", color: "#1D9E75" }}
                              >
                                {r.change}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "#4A6080" }}>
            Want results like these for your hospital?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white"
            style={{ backgroundColor: "#FF6B35" }}
          >
            Get Your Free Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
