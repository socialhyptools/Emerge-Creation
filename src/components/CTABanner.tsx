import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const includes = [
  "SEO & Google ranking analysis",
  "Competitor audit",
  "OPD lead generation review",
  "Reputation score check",
  "Action plan — no obligation",
];

export default function CTABanner() {
  return (
    <section style={{ backgroundColor: "#FFF0EB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ backgroundColor: "#FF6B35", color: "white" }}
            >
              Free Offer
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
            >
              Get Your Free Digital Marketing Audit
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#4A6080" }}>
              Book a free 30-minute audit and we&apos;ll show exactly where your hospital is losing patients online —
              and how to fix it. No sales pitch, just honest healthcare marketing advice.
            </p>

            <ul className="space-y-2 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "#1A2B3C" }}>
                  <CheckCircle2 size={17} style={{ color: "#1D9E75" }} className="shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Book Free Audit <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919994445555?text=Hi%2C%20I%27d%20like%20a%20free%20digital%20audit%20for%20my%20hospital."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-colors"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            className="hidden lg:block p-8 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #0B3C6E, #1A5C96)" }}
          >
            <div className="text-white mb-6">
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                ₹0
              </div>
              <div className="text-lg font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                Completely Free. No strings attached.
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Delivered within 48 hours",
                "Specific to your hospital / city",
                "Includes competitor comparison",
                "Actionable, not generic advice",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <CheckCircle2 size={16} style={{ color: "#1D9E75" }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                We have delivered 200+ free audits to hospitals across Tamil Nadu. Most clients see quick wins within 7 days of implementing our suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
