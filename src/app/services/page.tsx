import type { Metadata } from "next";
import Link from "next/link";
import { Search, Megaphone, Users, Star, Globe, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Healthcare Digital Marketing Services — SEO, Ads, Social Media",
  description:
    "Full-stack digital marketing for hospitals & clinics in Tamil Nadu. Local SEO, Google & Meta Ads, Social Media, Reputation Management, Website Design, Content Marketing.",
};

const services = [
  {
    id: "local-seo",
    icon: Search,
    title: "Local SEO for Hospitals",
    tagline: "Rank #1 when patients search for your specialty",
    desc: "87% of patients search online before choosing a hospital. We ensure you are what they find first. Our healthcare SEO covers Google Business Profile optimisation, local citations, on-page SEO, schema markup for medical entities, and Tamil Nadu-specific keyword strategies.",
    deliverables: [
      "Google Business Profile optimisation",
      "Local citation building (Practo, JustDial, Sulekha)",
      "On-page SEO for all specialty pages",
      "Medical schema markup",
      "Monthly ranking reports",
      "Tamil keyword targeting",
    ],
    results: "Average 65% increase in organic traffic in 90 days",
    color: "#0B3C6E",
    bg: "#E6F4FB",
  },
  {
    id: "ads",
    icon: Megaphone,
    title: "Google & Meta Ads",
    tagline: "OPD appointments, not just clicks",
    desc: "We run NMC/MCI-compliant paid campaigns that drive actual appointments — not vanity metrics. Our campaigns cover search, display, and YouTube ads on Google plus targeted Facebook and Instagram campaigns for patient acquisition and specialty promotion.",
    deliverables: [
      "NMC/MCI compliant ad creatives",
      "Google Search & Display campaigns",
      "YouTube pre-roll for doctors",
      "Facebook & Instagram ads",
      "Cost-per-appointment tracking",
      "Weekly performance reports",
    ],
    results: "Average cost-per-OPD-lead of ₹180–₹350 across specialties",
    color: "#FF6B35",
    bg: "#FFF0EB",
  },
  {
    id: "social-media",
    icon: Users,
    title: "Social Media Marketing",
    tagline: "Build patient relationships at scale",
    desc: "Tamil + English content for Facebook, Instagram, and YouTube. Doctor reels, patient education posts, health awareness campaigns, and OPD promotions. We manage the entire content calendar so your team can focus on patient care.",
    deliverables: [
      "Tamil + English monthly content calendar",
      "Doctor reel production (scripting & editing)",
      "Health awareness campaign posts",
      "OPD special promotion graphics",
      "Community management & replies",
      "Monthly engagement reports",
    ],
    results: "Average 3.2x increase in social media reach in 60 days",
    color: "#1D9E75",
    bg: "#E1F5EE",
  },
  {
    id: "reputation",
    icon: Star,
    title: "Reputation Management",
    tagline: "Your online reputation is your biggest asset",
    desc: "89% of patients check Google reviews before booking. We implement a systematic review generation strategy, manage negative feedback professionally, and build your presence across Practo, JustDial, and Google to establish unshakeable trust.",
    deliverables: [
      "Google review generation system",
      "Negative review response strategy",
      "Practo profile optimisation",
      "JustDial & Sulekha management",
      "Monthly reputation score report",
      "Crisis communication protocol",
    ],
    results: "Average 4x increase in Google reviews in 90 days",
    color: "#1A5C96",
    bg: "#E6F4FB",
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Healthcare Website Design",
    tagline: "Your website is your #1 salesperson",
    desc: "HIPAA-aware, mobile-first hospital and clinic websites that convert visitors into appointments. Built for sub-3-second load times on Indian mobile networks. SSL secured, no patient data stored, appointment booking integrated.",
    deliverables: [
      "Mobile-first responsive design",
      "Sub-3s load time optimisation",
      "Appointment booking integration",
      "Doctor profile pages",
      "Multi-language (Tamil + English)",
      "SSL & privacy-first setup",
    ],
    results: "Average 40% increase in website conversion rate",
    color: "#0B3C6E",
    bg: "#E6F4FB",
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    tagline: "Rank for every specialty your hospital offers",
    desc: "Patient education blogs, doctor expertise articles, condition-specific landing pages, and Tamil Nadu health trend content. We create content that ranks on Google AND builds patient trust before they even call you.",
    deliverables: [
      "4 SEO blog posts per month",
      "Doctor profile articles",
      "Condition & treatment pages",
      "Tamil language content",
      "Patient FAQ content",
      "Internal linking strategy",
    ],
    results: "Average 120% increase in blog organic traffic in 6 months",
    color: "#1D9E75",
    bg: "#E1F5EE",
  },
];

export default function ServicesPage() {
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
            What We Offer
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Healthcare Marketing Services
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Every service is designed exclusively for hospitals, clinics, and healthcare providers in Tamil Nadu.
            No generic playbooks. No learning curve. Just healthcare marketing that works.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-10 items-start scroll-mt-24 ${!isEven ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={!isEven ? "lg:col-start-2" : ""}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: service.bg }}
                  >
                    <Icon size={26} style={{ color: service.color }} />
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-base font-medium mb-4" style={{ color: service.color }}>
                    {service.tagline}
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#4A6080" }}>
                    {service.desc}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold mb-6"
                    style={{ backgroundColor: service.bg, color: service.color }}
                  >
                    📈 {service.results}
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "#FF6B35" }}
                  >
                    Get started with {service.title} <ArrowRight size={15} />
                  </Link>
                </div>

                <div className={`p-6 rounded-2xl ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  style={{ backgroundColor: "#F4F7FA", border: "1px solid #D0DCEA" }}>
                  <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#4A6080" }}>
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm" style={{ color: "#1A2B3C" }}>
                        <CheckCircle2 size={16} style={{ color: "#1D9E75" }} className="shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
