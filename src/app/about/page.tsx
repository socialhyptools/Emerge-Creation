import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Target, Eye } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Emerge Digital — Healthcare Marketing Agency Chennai",
  description:
    "Learn about Emerge Digital, Chennai's only digital marketing agency exclusively for hospitals, clinics, and healthcare providers across Tamil Nadu.",
};

const team = [
  {
    name: "Karthik Sundaram",
    role: "Founder & CEO",
    bio: "10+ years in healthcare marketing. Previously head of digital at Apollo Hospitals. Deep expertise in hospital branding and patient acquisition.",
    initials: "KS",
    color: "#0B3C6E",
  },
  {
    name: "Priya Venkatesh",
    role: "Head of SEO",
    bio: "8 years specialising in healthcare and medical SEO. Certified Google expert. Managed SEO for 40+ hospitals across South India.",
    initials: "PV",
    color: "#1D9E75",
  },
  {
    name: "Rajesh Kumar",
    role: "Head of Paid Media",
    bio: "Google Ads & Meta Ads certified. Specialises in compliance-safe healthcare ad campaigns. Managed ₹5Cr+ in healthcare ad spend.",
    initials: "RK",
    color: "#1A5C96",
  },
  {
    name: "Anitha Mohan",
    role: "Tamil Content Lead",
    bio: "Native Tamil speaker with deep understanding of Tamil Nadu patient psychology. Creates bilingual content that connects with patients emotionally.",
    initials: "AM",
    color: "#FF6B35",
  },
  {
    name: "Suresh Babu",
    role: "Head of Web Design",
    bio: "HIPAA-aware web design specialist. Built 60+ healthcare websites. Focused on mobile-first, fast-loading, conversion-optimised hospital websites.",
    initials: "SB",
    color: "#0B3C6E",
  },
  {
    name: "Kavitha Rajan",
    role: "Client Success Manager",
    bio: "Manages relationships with 30+ hospital clients. Delivers weekly ROI reports and ensures every campaign meets patient acquisition targets.",
    initials: "KR",
    color: "#1D9E75",
  },
];

const milestones = [
  { year: "2018", event: "Founded with a single hospital client in Chennai" },
  { year: "2019", event: "Expanded to Coimbatore and Madurai markets" },
  { year: "2020", event: "Launched bilingual Tamil + English content service" },
  { year: "2021", event: "Reached 50 hospital clients across Tamil Nadu" },
  { year: "2022", event: "Launched compliance-first healthcare ad framework" },
  { year: "2023", event: "Won Tamil Nadu Healthcare Awards — Best Agency" },
  { year: "2024", event: "80+ clients, 25-member team, 10 cities covered" },
];

export default function AboutPage() {
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
            Our Story
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for Healthcare.<br />Built in Chennai.
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            We started Emerge Digital with one belief: healthcare marketing deserves its own specialist agency —
            not a repurposed e-commerce or retail agency that &ldquo;also does hospitals.&rdquo;
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To make every hospital and clinic in Tamil Nadu digitally visible so more patients find the right care at the right time.",
                color: "#FF6B35",
                bg: "#FFF0EB",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To become the #1 healthcare-only digital marketing agency in South India by 2027, serving 500+ healthcare clients.",
                color: "#0B3C6E",
                bg: "#E6F4FB",
              },
              {
                icon: Heart,
                title: "Our Values",
                text: "Compliance first. Patient privacy always. ROI transparency every week. And Tamil Nadu at the heart of everything we build.",
                color: "#1D9E75",
                bg: "#E1F5EE",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: item.bg }}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={22} color="white" />
                  </div>
                  <h2 className="font-bold text-xl mb-3" style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}>
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Why healthcare only */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}>
                Why Healthcare-Only?
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#4A6080" }}>
                <p>
                  In 2018, our founder Karthik Sundaram was heading digital marketing at a major Chennai hospital.
                  He watched 5 different agencies come and go — each spending months learning healthcare basics,
                  running non-compliant ads that got disapproved, and producing generic content patients ignored.
                </p>
                <p>
                  The fundamental problem? Healthcare is different. Patients don&apos;t choose hospitals like they
                  choose restaurants. The patient journey is longer, more emotional, and requires trust before conversion.
                  The regulations are stricter. The content must be medically accurate. The privacy requirements are
                  non-negotiable.
                </p>
                <p>
                  So we built Emerge Digital as a healthcare-only agency from day one. Every team member is trained
                  in healthcare marketing. Every process is built around the unique patient acquisition funnel.
                  Every campaign is designed to be NMC/MCI compliant.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-4">
                  <div
                    className="w-16 shrink-0 text-center py-1.5 rounded-lg text-sm font-bold text-white"
                    style={{ backgroundColor: "#0B3C6E" }}
                  >
                    {m.year}
                  </div>
                  <div className="flex-1 py-1.5 text-sm" style={{ color: "#1A2B3C" }}>
                    {m.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}>
              Meet the Team
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>
              25+ healthcare marketing specialists based in Chennai, dedicated exclusively to growing hospitals and clinics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6"
                style={{ border: "1px solid #D0DCEA" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-lg mb-0.5" style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}>
                  {member.name}
                </h3>
                <p className="text-xs font-semibold mb-3" style={{ color: "#1D9E75" }}>
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Work With Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
