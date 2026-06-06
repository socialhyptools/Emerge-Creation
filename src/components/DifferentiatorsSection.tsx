import { ShieldCheck, Languages, MapPin, ClipboardList, TrendingUp, Zap } from "lucide-react";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Healthcare-Only Focus",
    desc: "We only work with hospitals & clinics. That means zero learning curve, zero generic campaigns, and extreme niche credibility.",
  },
  {
    icon: Languages,
    title: "Tamil + English Content",
    desc: "Bilingual campaigns for Tier-2/Tier-3 Tamil Nadu — Madurai, Coimbatore, Salem. Content that resonates with local patients.",
  },
  {
    icon: MapPin,
    title: "Deep Local Market Expertise",
    desc: "We know Chennai patient behaviour, Tamil Nadu health corridors, and how each city's healthcare market differs.",
  },
  {
    icon: ClipboardList,
    title: "Compliance Awareness",
    desc: "Ads are compliant with NMC/MCI advertising guidelines — safe for regulated healthcare without risking your licence.",
  },
  {
    icon: TrendingUp,
    title: "ROI-First Reporting",
    desc: "OPD leads, appointment bookings, cost-per-patient dashboards — not vanity metrics like reach and impressions.",
  },
  {
    icon: Zap,
    title: "7-Day Fast Onboarding",
    desc: "Launch campaigns in 7 days — no long agency delays. We know busy hospitals can't wait months to see results.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ backgroundColor: "#E6F4FB", color: "#1A5C96" }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
          >
            Why Hospitals Choose Emerge Digital
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#4A6080" }}>
            Generic agencies treat healthcare like any other client. We built our entire agency around healthcare from day one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#F4F7FA", border: "1px solid #D0DCEA" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#0B3C6E" }}
                >
                  <Icon size={20} color="white" />
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
