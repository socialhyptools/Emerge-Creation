import { Award, Users, MapPin, Star } from "lucide-react";

const clients = [
  "Fortis Malar", "Apollo Clinics", "Meenakshi Mission", "Kavery Medical",
  "MIOT International", "Sri Ramachandra", "Billroth Hospitals", "Cloudnine",
];

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client logos placeholder */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: "#4A6080" }}>
            Trusted by Tamil Nadu&apos;s Leading Healthcare Providers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {clients.map((client) => (
              <div
                key={client}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold"
                style={{ backgroundColor: "#F4F7FA", color: "#1A5C96", border: "1px solid #D0DCEA" }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Trust pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: "80+ Healthcare Clients",
              desc: "Hospitals, clinics, and diagnostic centres across Tamil Nadu.",
              color: "#0B3C6E",
            },
            {
              icon: Star,
              title: "4.9★ Google Rating",
              desc: "Verified by 140+ Google reviews from hospital administrators.",
              color: "#FF6B35",
            },
            {
              icon: Award,
              title: "Best Healthcare Agency",
              desc: "Awarded by Tamil Nadu Healthcare Awards 2024.",
              color: "#1D9E75",
            },
            {
              icon: MapPin,
              title: "Chennai Headquarters",
              desc: "Anna Nagar office with a dedicated local team of 25+.",
              color: "#1A5C96",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: "#F4F7FA", border: "1px solid #D0DCEA" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={22} color="white" />
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#4A6080" }}>
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
