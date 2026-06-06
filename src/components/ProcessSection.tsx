const steps = [
  {
    step: "01",
    title: "Free Audit",
    desc: "We audit your current digital presence — SEO, ads, reputation, website — and identify gaps in 48 hours.",
  },
  {
    step: "02",
    title: "Custom Strategy",
    desc: "We build a healthcare-specific marketing strategy tailored to your hospital, specialties, and target patient demographics.",
  },
  {
    step: "03",
    title: "Launch in 7 Days",
    desc: "Campaigns go live within 7 days. SEO, ads, and social media start running with full compliance checks.",
  },
  {
    step: "04",
    title: "Measure & Grow",
    desc: "Weekly ROI reports. OPD leads, cost-per-appointment, Google rankings. We optimise continuously for maximum return.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#E6F4FB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ backgroundColor: "#0B3C6E", color: "white" }}
          >
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
          >
            From Audit to Patients in 30 Days
          </h2>
          <p className="text-base" style={{ color: "#4A6080" }}>
            A proven 4-step process that has delivered results for 80+ hospitals across Tamil Nadu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-9 left-full w-full h-0.5 -translate-y-1/2 z-0"
                  style={{ backgroundColor: "#D0DCEA", width: "calc(100% - 4rem)", left: "calc(100% - 1.5rem)" }}
                />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-6" style={{ border: "1px solid #D0DCEA" }}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-5"
                  style={{ backgroundColor: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                >
                  {step.step}
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
