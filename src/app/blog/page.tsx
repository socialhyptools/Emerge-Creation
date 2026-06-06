import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Healthcare Marketing Blog — SEO, Digital Tips for Hospitals Tamil Nadu",
  description:
    "Expert healthcare marketing tips, local SEO guides, Tamil Nadu health trends, and digital marketing strategies for hospitals and clinics.",
};

const posts = [
  {
    slug: "hospital-seo-chennai-2024",
    category: "Local SEO",
    categoryColor: "#0B3C6E",
    categoryBg: "#E6F4FB",
    title: "How to Rank #1 on Google for Your Hospital Specialty in Chennai (2024 Guide)",
    excerpt:
      "A step-by-step guide to ranking on page 1 for orthopaedics, cardiology, and other specialties in the highly competitive Chennai healthcare market.",
    readTime: "8 min read",
    date: "Mar 15, 2024",
    tags: ["SEO", "Chennai", "Hospitals"],
  },
  {
    slug: "tamil-content-healthcare",
    category: "Content Marketing",
    categoryColor: "#1D9E75",
    categoryBg: "#E1F5EE",
    title: "Why Tamil Language Content is Non-Negotiable for Tamil Nadu Hospitals",
    excerpt:
      "73% of Tamil Nadu patients search for health information in Tamil. Here is why bilingual content is the single highest-ROI decision your hospital can make.",
    readTime: "5 min read",
    date: "Feb 28, 2024",
    tags: ["Tamil", "Content", "Patient Acquisition"],
  },
  {
    slug: "google-ads-hospitals-compliance",
    category: "Google Ads",
    categoryColor: "#FF6B35",
    categoryBg: "#FFF0EB",
    title: "NMC/MCI Compliant Google Ads for Hospitals: The Complete Guide",
    excerpt:
      "Running Google Ads for a hospital without understanding NMC advertising guidelines is a licence risk. Here is exactly what you can and cannot do.",
    readTime: "10 min read",
    date: "Feb 12, 2024",
    tags: ["Google Ads", "Compliance", "NMC Guidelines"],
  },
  {
    slug: "whatsapp-marketing-hospitals",
    category: "WhatsApp Marketing",
    categoryColor: "#1A5C96",
    categoryBg: "#E6F4FB",
    title: "Why WhatsApp is the #1 Lead Channel for Hospitals in Tamil Nadu",
    excerpt:
      "WhatsApp dominates healthcare lead generation in Tamil Nadu. This guide shows exactly how to build a WhatsApp-first patient acquisition funnel.",
    readTime: "6 min read",
    date: "Jan 30, 2024",
    tags: ["WhatsApp", "Lead Generation", "Tamil Nadu"],
  },
  {
    slug: "google-reviews-hospital",
    category: "Reputation Management",
    categoryColor: "#0B3C6E",
    categoryBg: "#E6F4FB",
    title: "From 3.2 to 4.8 Stars: How One Madurai Hospital Rebuilt Their Online Reputation",
    excerpt:
      "A detailed case study on how a systematic review generation and response strategy transformed one hospital's Google reputation in 90 days.",
    readTime: "7 min read",
    date: "Jan 15, 2024",
    tags: ["Reputation", "Case Study", "Google Reviews"],
  },
  {
    slug: "ivf-clinic-marketing",
    category: "Specialty Marketing",
    categoryColor: "#1D9E75",
    categoryBg: "#E1F5EE",
    title: "Sensitive Marketing for IVF & Fertility Clinics: A Privacy-First Approach",
    excerpt:
      "Marketing fertility services requires extreme sensitivity. This guide covers compliant, ethical, and effective digital marketing for IVF centres.",
    readTime: "9 min read",
    date: "Jan 02, 2024",
    tags: ["IVF", "Fertility", "Privacy-First"],
  },
];

const categories = [
  "All", "Local SEO", "Google Ads", "Content Marketing",
  "Reputation Management", "Social Media", "Case Studies",
];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

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
            Blog & Resources
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Healthcare Marketing Insights
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Tamil Nadu health trends, SEO guides, compliance tips, and real strategies
            that Tamil Nadu hospitals are using to grow patient volume.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={
                  cat === "All"
                    ? { backgroundColor: "#0B3C6E", color: "white" }
                    : { backgroundColor: "white", color: "#4A6080", border: "1px solid #D0DCEA" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div
            className="bg-white rounded-2xl p-6 lg:p-8 mb-8"
            style={{ border: "1px solid #D0DCEA" }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: featured.categoryBg, color: featured.categoryColor }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs" style={{ color: "#4A6080" }}>⭐ Featured</span>
                </div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#4A6080" }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs mb-5" style={{ color: "#4A6080" }}>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "#FF6B35" }}
                >
                  Read Article <ArrowRight size={15} />
                </Link>
              </div>
              <div
                className="h-48 lg:h-64 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#E6F4FB" }}
              >
                <span className="text-5xl">📊</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ border: "1px solid #D0DCEA" }}
              >
                <div
                  className="h-36 flex items-center justify-center"
                  style={{ backgroundColor: post.categoryBg }}
                >
                  <span className="text-4xl">
                    {post.category === "Content Marketing" ? "✍️" :
                      post.category === "Google Ads" ? "📢" :
                      post.category === "WhatsApp Marketing" ? "💬" :
                      post.category === "Reputation Management" ? "⭐" : "🏥"}
                  </span>
                </div>
                <div className="p-5">
                  <span
                    className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-3"
                    style={{ backgroundColor: post.categoryBg, color: post.categoryColor }}
                  >
                    {post.category}
                  </span>
                  <h3
                    className="font-bold text-base mb-2 leading-snug"
                    style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#4A6080" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs" style={{ color: "#4A6080" }}>
                      <Clock size={11} /> {post.readTime}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold"
                      style={{ color: "#FF6B35" }}
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
