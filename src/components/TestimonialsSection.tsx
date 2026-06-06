import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Emerge Digital increased our OPD appointments by 3x in just 4 months. Their Tamil + English content strategy resonated perfectly with our patient base.",
    name: "Dr. Rajan Krishnamurthy",
    role: "Senior Orthopaedic Surgeon",
    hospital: "Fortis Malar Hospital, Chennai",
    rating: 5,
    initials: "RK",
  },
  {
    quote:
      "We were invisible on Google before Emerge took over. Now we rank #1 for 'best dental clinic in Coimbatore'. New patient walk-ins increased by 60%.",
    name: "Dr. Priya Sundaram",
    role: "Chief Dentist",
    hospital: "SmileCare Dental Chain, Coimbatore",
    rating: 5,
    initials: "PS",
  },
  {
    quote:
      "Their compliance knowledge is what won us over. They understand MCI guidelines and our campaigns have never had an issue. Professional and results-driven.",
    name: "Mr. Vikram Anand",
    role: "Marketing Director",
    hospital: "Meenakshi Mission Hospital, Madurai",
    rating: 5,
    initials: "VA",
  },
  {
    quote:
      "The ROI dashboard they provide every week is incredible. We know exactly how many appointments came from ads, what we paid per lead. Full transparency.",
    name: "Dr. Kavitha Murali",
    role: "Founder & Gynaecologist",
    hospital: "Bloom Fertility Centre, Chennai",
    rating: 5,
    initials: "KM",
  },
  {
    quote:
      "Within 3 months they built our Google reviews from 42 to 186. Our Practo listing went from page 3 to the top result. Reputation management that actually works.",
    name: "Dr. Suresh Babu",
    role: "General Physician",
    hospital: "LifeCare Polyclinic, Salem",
    rating: 5,
    initials: "SB",
  },
  {
    quote:
      "Onboarding was done in 5 days. Live campaigns were running in 7. That speed matters for a growing hospital that needs results now, not in 3 months.",
    name: "Dr. Anitha Raman",
    role: "Medical Director",
    hospital: "Nova Diagnostic Centre, Trichy",
    rating: 5,
    initials: "AR",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#FF6B35" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#E1F5EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ backgroundColor: "#1D9E75", color: "white" }}
          >
            Client Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
          >
            What Tamil Nadu Hospitals Say
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#4A6080" }}>
            Real results from real healthcare clients across Tamil Nadu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 flex flex-col"
              style={{ border: "1px solid #D0DCEA" }}
            >
              <Quote size={28} style={{ color: "#1D9E75", marginBottom: "12px" }} />
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#4A6080" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <StarRating count={t.rating} />
                <div className="flex items-center gap-3 mt-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: "#1D9E75" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0B3C6E" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#4A6080" }}>
                      {t.role}
                    </p>
                    <p className="text-xs font-medium" style={{ color: "#1D9E75" }}>
                      {t.hospital}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
