const stats = [
  { number: "80+", label: "Hospitals Served" },
  { number: "12,000+", label: "OPD Leads / Month" },
  { number: "4.2x", label: "Average ROI" },
  { number: "6+", label: "Years Healthcare Marketing" },
];

export default function StatsStrip() {
  return (
    <section style={{ backgroundColor: "#0B3C6E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x"
          style={{ "--tw-divide-opacity": "0.2", borderColor: "rgba(29,158,117,0.3)" } as React.CSSProperties}>
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center px-6 ${i > 0 ? "lg:border-l" : ""}`}
              style={{ borderColor: "rgba(29,158,117,0.25)" }}>
              <div
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.number}
              </div>
              <div className="text-sm" style={{ color: "#B5D4F4" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
