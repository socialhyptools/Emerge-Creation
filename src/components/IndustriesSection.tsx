import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  { label: "Multi-Specialty Hospitals", emoji: "🏥", href: "/industries#hospitals" },
  { label: "Single-Specialty Clinics", emoji: "🩺", href: "/industries#clinics" },
  { label: "Diagnostic Centers", emoji: "🔬", href: "/industries#diagnostics" },
  { label: "Dental Chains", emoji: "🦷", href: "/industries#dental" },
  { label: "Ayurveda / AYUSH", emoji: "🌿", href: "/industries#ayush" },
  { label: "Nursing Homes", emoji: "🛏️", href: "/industries#nursing" },
  { label: "Fertility / IVF Centers", emoji: "👶", href: "/industries#fertility" },
  { label: "Medical Tourism", emoji: "✈️", href: "/industries#tourism" },
];

const coverage = [
  "Chennai", "Coimbatore", "Madurai", "Salem", "Trichy",
  "Tirunelveli", "Vellore", "Erode", "Namakkal", "Thanjavur",
];

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F7FA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Industries */}
          <div>
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ backgroundColor: "#E1F5EE", color: "#1D9E75" }}
            >
              Industries We Serve
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
            >
              Every Healthcare Vertical
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#4A6080" }}>
              Whether you run a 500-bed hospital or a single-doctor clinic, we have the right strategy for you.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {industries.map((ind) => (
                <Link
                  key={ind.label}
                  href={ind.href}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl transition-shadow hover:shadow-md"
                  style={{ border: "1px solid #D0DCEA" }}
                >
                  <span className="text-xl">{ind.emoji}</span>
                  <span className="text-sm font-medium" style={{ color: "#1A2B3C" }}>
                    {ind.label}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold"
              style={{ color: "#0B3C6E" }}
            >
              View all industries <ArrowRight size={15} />
            </Link>
          </div>

          {/* Coverage map */}
          <div>
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ backgroundColor: "#E6F4FB", color: "#1A5C96" }}
            >
              Tamil Nadu Coverage
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
            >
              Serving Across Tamil Nadu
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#4A6080" }}>
              From Chennai to Kanyakumari — we understand the unique patient behaviour and competition in every Tamil Nadu market.
            </p>

            {/* City tags */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {coverage.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "#E6F4FB", color: "#0B3C6E", border: "1px solid #D0DCEA" }}
                >
                  📍 {city}
                </span>
              ))}
            </div>

            {/* CTA card */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #0B3C6E, #1A5C96)" }}
            >
              <h3 className="font-bold text-xl text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Not Sure If We Cover Your City?
              </h3>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
                We work with hospitals across Tamil Nadu. Contact us and we&apos;ll share local case studies from your market.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Talk to Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
