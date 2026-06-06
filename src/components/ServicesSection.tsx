import Link from "next/link";
import { Search, Megaphone, Users, Star, Globe, FileText, ArrowRight } from "lucide-react";

const services = [
  {
    id: "local-seo",
    icon: Search,
    title: "Local SEO",
    subtitle: "Rank #1 in Chennai & Tamil Nadu",
    desc: "Dominate ‘best hospital in Chennai’ and ‘clinic near me’ searches. We optimise Google Business Profile, local citations, and on-page SEO for medical practices.",
    tags: ["Google Rankings", "GMB Optimisation", "Local Citations"],
    href: "/services#local-seo",
  },
  {
    id: "ads",
    icon: Megaphone,
    title: "Google & Meta Ads",
    subtitle: "OPD appointments, not vanity clicks",
    desc: "Targeted paid campaigns for appointments, OPD footfall, and specialty care. NMC/MCI-compliant creatives. Cost-per-patient dashboards every week.",
    tags: ["Google Ads", "Meta Ads", "Appointment Campaigns"],
    href: "/services#ads",
  },
  {
    id: "social-media",
    icon: Users,
    title: "Social Media",
    subtitle: "Tamil + English patient content",
    desc: "Patient-friendly content for Facebook, Instagram, and YouTube in Tamil & English. Doctor reels, health awareness, and OPD promotion campaigns.",
    tags: ["Facebook", "Instagram", "YouTube"],
    href: "/services#social-media",
  },
  {
    id: "reputation",
    icon: Star,
    title: "Reputation Management",
    subtitle: "Trust is your most valuable asset",
    desc: "Google reviews strategy, responding to patient feedback, and trust-building across Practo, JustDial, and Google. Protect and grow your online reputation.",
    tags: ["Google Reviews", "Practo", "Crisis Response"],
    href: "/services#reputation",
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Website Design",
    subtitle: "HIPAA-aware, mobile-first",
    desc: "Hospital and clinic websites that load in under 3 seconds, work perfectly on mobile, and convert visitors into appointments. SSL, secure forms, no patient data stored.",
    tags: ["Mobile-First", "Appointment Booking", "SSL Secure"],
    href: "/services#web-design",
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    subtitle: "Educate. Rank. Convert.",
    desc: "Patient education blogs, doctor profiles, health awareness campaigns, and Tamil Nadu health corridor content. Rank for every specialty search term.",
    tags: ["Health Blogs", "Doctor Profiles", "Tamil Content"],
    href: "/services#content",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F4F7FA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ backgroundColor: "#E1F5EE", color: "#1D9E75" }}
          >
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
          >
            Full-Stack Healthcare Marketing
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#4A6080" }}>
            Every service is built specifically for hospitals and clinics — not adapted from a generic agency playbook.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-6 transition-all duration-200 hover:shadow-lg"
                style={{ border: "1px solid #D0DCEA" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#E1F5EE" }}
                >
                  <Icon size={22} style={{ color: "#1D9E75" }} />
                </div>

                <h3
                  className="font-bold text-lg mb-1"
                  style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-xs font-medium mb-3" style={{ color: "#1D9E75" }}>
                  {service.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A6080" }}>
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#E6F4FB", color: "#1A5C96" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
                  style={{ color: "#0B3C6E" }}
                >
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0B3C6E" }}
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
