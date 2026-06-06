import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { notFound } from "next/navigation";

const articles: Record<string, {
  title: string;
  category: string;
  categoryColor: string;
  categoryBg: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: { heading?: string; body: string }[];
  tags: string[];
}> = {
  "hospital-seo-chennai-2024": {
    title: "How to Rank #1 on Google for Your Hospital Specialty in Chennai (2024 Guide)",
    category: "Local SEO",
    categoryColor: "#0B3C6E",
    categoryBg: "#E6F4FB",
    readTime: "8 min read",
    date: "Mar 15, 2024",
    excerpt: "A step-by-step guide to ranking on page 1 for orthopaedics, cardiology, and other specialties in the highly competitive Chennai healthcare market.",
    tags: ["SEO", "Chennai", "Hospitals", "Google Business Profile"],
    content: [
      {
        body: "87% of patients in Chennai search online before choosing a hospital. If your hospital doesn't appear on the first page of Google for your specialty, you are losing patients to competitors every single day. This guide walks you through exactly what it takes to rank #1 in 2024."
      },
      {
        heading: "Step 1: Optimise Your Google Business Profile (GBP)",
        body: "Your GBP is the single most impactful thing you can do for local hospital SEO. Ensure your profile is 100% complete — name, address, phone, website, photos, services, and specialties. Add at least 20 high-quality photos of your hospital, facilities, and team. Post weekly updates. Respond to every review within 24 hours."
      },
      {
        heading: "Step 2: Build Specialty-Specific Landing Pages",
        body: "Create dedicated pages for each specialty — /orthopaedics-hospital-chennai, /cardiology-hospital-anna-nagar, etc. Each page should have: H1 with your specialty + location, 800+ words of original medical content, doctor profiles, treatment list, patient FAQ, and a clear appointment CTA."
      },
      {
        heading: "Step 3: Get Local Citations on Healthcare Directories",
        body: "List your hospital consistently on Practo, JustDial, Sulekha, Lybrate, and HealthGrid. NAP consistency (Name, Address, Phone) across all directories is critical. Inconsistent listings confuse Google and hurt your local rankings."
      },
      {
        heading: "Step 4: Generate Reviews Systematically",
        body: "Ask every happy patient for a Google review — the best time is immediately after a positive discharge or consultation. Use SMS with a direct link to your review page. Aim for 10+ reviews per month consistently. Quality and recency matter more than total count."
      },
      {
        heading: "Step 5: Tamil Language SEO",
        body: "Over 60% of Chennai patients search in Tamil or Tanglish (Tamil in English script). Create Tamil-language versions of your key pages or target Tanglish keywords like 'best hospital chennai' alongside Tamil equivalents. This is an untapped opportunity most hospitals ignore."
      },
    ],
  },
  "tamil-content-healthcare": {
    title: "Why Tamil Language Content is Non-Negotiable for Tamil Nadu Hospitals",
    category: "Content Marketing",
    categoryColor: "#1D9E75",
    categoryBg: "#E1F5EE",
    readTime: "5 min read",
    date: "Feb 28, 2024",
    excerpt: "73% of Tamil Nadu patients search for health information in Tamil. Here is why bilingual content is the single highest-ROI decision your hospital can make.",
    tags: ["Tamil", "Content Marketing", "Patient Acquisition"],
    content: [
      {
        body: "Walk into any waiting room at a government hospital in Madurai, Trichy, or Salem. You will see patients — and their families — searching for information on their phones. In Tamil. The shift to Tamil-language digital health content is not coming. It is already here."
      },
      {
        heading: "The Data Is Clear",
        body: "73% of Tamil Nadu's internet users prefer consuming content in Tamil. Google Trends shows consistent growth in Tamil health searches — from 'இரத்த அழுத்தம்' (blood pressure) to 'சர்க்கரை நோய் சிகிச்சை' (diabetes treatment). Yet less than 15% of Tamil Nadu hospitals have any Tamil-language digital content."
      },
      {
        heading: "The Opportunity for Your Hospital",
        body: "Because most hospitals ignore Tamil SEO, the competition for Tamil health keywords is extremely low. A hospital that creates quality Tamil content today can rank #1 for high-intent keywords with significantly less effort than competing in English."
      },
      {
        heading: "What Tamil Content to Create",
        body: "Start with: Tamil blog posts about your top 5 specialties, Tamil versions of your FAQ pages, Tamil captions on Instagram and Facebook posts, Tamil doctor introduction reels, Tamil WhatsApp broadcast messages for appointment reminders. The ROI compounds over time as content builds authority."
      },
    ],
  },
  "google-ads-hospitals-compliance": {
    title: "NMC/MCI Compliant Google Ads for Hospitals: The Complete Guide",
    category: "Google Ads",
    categoryColor: "#FF6B35",
    categoryBg: "#FFF0EB",
    readTime: "10 min read",
    date: "Feb 12, 2024",
    excerpt: "Running Google Ads for a hospital without understanding NMC advertising guidelines is a licence risk. Here is exactly what you can and cannot do.",
    tags: ["Google Ads", "NMC Compliance", "Hospital Marketing"],
    content: [
      {
        body: "Medical advertising in India is regulated by the National Medical Commission (NMC), formerly MCI. Violating these guidelines can result in warnings, penalties, and in serious cases, licence suspension. Yet most generic digital agencies running hospital campaigns have never read a single NMC guideline."
      },
      {
        heading: "What the NMC Prohibits in Medical Advertising",
        body: "You cannot: use superlatives like 'best doctor', 'guaranteed cure', 'most experienced'; make claims of exclusivity; publish patient testimonials or before/after images for clinical results; advertise specific success rates or cure percentages; use the words 'specialist' or 'expert' without registered qualification proof."
      },
      {
        heading: "What You CAN Do (The Safe Zone)",
        body: "Safe advertising includes: factual information about services offered, facility details and accreditations (NABH, JCI), doctor qualifications and registration numbers, appointment availability, general health awareness content, pricing for diagnostic tests, and location-based availability messages."
      },
      {
        heading: "The Compliance Checklist We Use",
        body: "Before any ad goes live at Emerge Digital, we run a 12-point compliance check: no banned superlatives, qualified claims only, sourced statistics, no patient identifiers, no cure guarantees, proper disclaimer for diagnostic claims, correct doctor title usage, and NABH/accreditation status verified."
      },
    ],
  },
  "whatsapp-marketing-hospitals": {
    title: "Why WhatsApp is the #1 Lead Channel for Hospitals in Tamil Nadu",
    category: "WhatsApp Marketing",
    categoryColor: "#1A5C96",
    categoryBg: "#E6F4FB",
    readTime: "6 min read",
    date: "Jan 30, 2024",
    excerpt: "WhatsApp dominates healthcare lead generation in Tamil Nadu. This guide shows exactly how to build a WhatsApp-first patient acquisition funnel.",
    tags: ["WhatsApp", "Lead Generation", "Tamil Nadu"],
    content: [
      {
        body: "In Tamil Nadu, patients don't call hospitals. They WhatsApp. 94% of Tamil Nadu smartphone users have WhatsApp installed. For hospital marketing, this single fact changes everything about how you should approach patient acquisition."
      },
      {
        heading: "WhatsApp vs. Phone Calls: The Tamil Nadu Reality",
        body: "When a patient wants to ask 'how much does an MRI cost?' or 'is Dr. Rajan available on Saturday?', they will WhatsApp — not call. WhatsApp removes the anxiety of a phone call, is available 24/7, and allows patients to share reports and images easily. Your hospital needs to be present on WhatsApp."
      },
      {
        heading: "Setting Up a WhatsApp Lead Funnel",
        body: "The setup is simpler than most hospitals think: (1) Get a dedicated WhatsApp Business number separate from your main line, (2) Set up a greeting message and away message, (3) Create quick reply templates for FAQs, (4) Add a WhatsApp button to your website and Google Business Profile, (5) Put the number on all ads. That's it."
      },
      {
        heading: "WhatsApp Broadcasts for Appointments",
        body: "WhatsApp Broadcasts allow you to send a message to up to 256 opted-in contacts at once. Use this to: send appointment reminders 24 hours before, notify patients of new specialties or doctors, share health tips relevant to your specialty, announce seasonal health camps. Keep messages conversational and helpful — never spammy."
      },
    ],
  },
  "google-reviews-hospital": {
    title: "From 3.2 to 4.8 Stars: How One Madurai Hospital Rebuilt Their Online Reputation",
    category: "Reputation Management",
    categoryColor: "#0B3C6E",
    categoryBg: "#E6F4FB",
    readTime: "7 min read",
    date: "Jan 15, 2024",
    excerpt: "A detailed case study on how a systematic review generation and response strategy transformed one hospital's Google reputation in 90 days.",
    tags: ["Reputation", "Case Study", "Google Reviews", "Madurai"],
    content: [
      {
        body: "When Sakthi Hospital in Madurai came to us, they had 3.2 stars on Google with 42 reviews. Most of the reviews were from 2 or 3 angry patients who had a bad experience years ago. A 3.2-star rating was costing them patients every single day — 89% of patients check reviews before choosing a hospital."
      },
      {
        heading: "The Problem With Just Asking for Reviews",
        body: "Simply asking patients for reviews doesn't work well. Response rates are under 5% when you ask generically. The key is timing (ask immediately after a positive experience), medium (WhatsApp beats SMS, SMS beats email), and personalisation (use the patient's name and mention their specific interaction)."
      },
      {
        heading: "The System We Built",
        body: "We implemented a three-part system: (1) A post-discharge WhatsApp message sent within 2 hours of discharge for inpatients, with a direct link to the Google review page. (2) A post-consultation message sent 30 minutes after the doctor consultation for OPD patients. (3) A response protocol — every single review, positive or negative, gets a personalised response within 4 hours."
      },
      {
        heading: "The Results in 90 Days",
        body: "Within 90 days, the hospital went from 42 reviews at 3.2 stars to 186 reviews at 4.7 stars. New patient inquiries from Google increased by 68%. The hospital is now the highest-rated multi-specialty hospital in their Madurai pin code. The total setup cost: less than ₹15,000."
      },
    ],
  },
  "ivf-clinic-marketing": {
    title: "Sensitive Marketing for IVF & Fertility Clinics: A Privacy-First Approach",
    category: "Specialty Marketing",
    categoryColor: "#1D9E75",
    categoryBg: "#E1F5EE",
    readTime: "9 min read",
    date: "Jan 02, 2024",
    excerpt: "Marketing fertility services requires extreme sensitivity. This guide covers compliant, ethical, and effective digital marketing for IVF centres.",
    tags: ["IVF", "Fertility Clinic", "Healthcare Marketing", "Privacy"],
    content: [
      {
        body: "Fertility treatment is one of the most emotionally sensitive healthcare journeys a patient goes through. Couples dealing with infertility are vulnerable, hopeful, and — often — desperate. Marketing to this audience requires a fundamentally different approach from promoting orthopaedics or dental services."
      },
      {
        heading: "The Privacy Problem",
        body: "Fertility patients are extremely private. The biggest mistake IVF clinic marketers make is targeting too aggressively — showing ads to people based on fertility-related searches across different devices can feel invasive and even threatening. We recommend a pull-based approach: create content that patients find when they are ready, rather than pushing ads at them."
      },
      {
        heading: "Content That Builds Trust",
        body: "The highest-converting content for IVF clinics: (1) Educational articles about the IVF process written in simple language, (2) Doctor expertise posts explaining success factors honestly (not just success rates), (3) FAQ content addressing cost, process, timeline, and emotional support, (4) Anonymous patient stories (with consent), (5) Tamil-language content for patients uncomfortable with medical English."
      },
      {
        heading: "Ad Strategy for Fertility Clinics",
        body: "Use Google Search ads for high-intent queries ('IVF treatment Chennai', 'fertility specialist near me') — these patients are already searching. For Facebook/Instagram, use awareness-level content (educational posts, free consultation offers) rather than direct treatment ads. Enable 'sensitive category' restrictions to prevent your ads from being shown in inappropriate contexts."
      },
      {
        heading: "The WhatsApp First-Touch Strategy",
        body: "Most fertility patients will WhatsApp before calling. Make your WhatsApp number prominent everywhere. Set up a warm, empathetic automated greeting. Train your team to respond with sensitivity — the first conversation sets the tone for the entire patient relationship. A compassionate first response is worth more than any ad."
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const article = articles[slug];

  if (!article) notFound();

  const relatedSlugs = Object.keys(articles)
    .filter((s) => s !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 pb-12 lg:pt-32 lg:pb-16"
        style={{ background: "linear-gradient(135deg, #0B3C6E 0%, #1A5C96 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <ArrowLeft size={15} /> All Articles
          </Link>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ backgroundColor: article.categoryBg, color: article.categoryColor }}
          >
            {article.category}
          </span>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
            <span>By Emerge Digital Team</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-14" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Content */}
            <article className="lg:col-span-3">
              {/* Lead */}
              <div
                className="bg-white rounded-2xl p-6 mb-6"
                style={{ border: "1px solid #D0DCEA" }}
              >
                <p className="text-base leading-relaxed font-medium" style={{ color: "#1A2B3C" }}>
                  {article.excerpt}
                </p>
              </div>

              {/* Body */}
              <div className="bg-white rounded-2xl p-6 lg:p-8" style={{ border: "1px solid #D0DCEA" }}>
                {article.content.map((block, i) => (
                  <div key={i} className={i > 0 ? "mt-7" : ""}>
                    {block.heading && (
                      <h2
                        className="text-xl font-bold mb-3"
                        style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                      >
                        {block.heading}
                      </h2>
                    )}
                    <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>
                      {block.body}
                    </p>
                  </div>
                ))}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6" style={{ borderTop: "1px solid #D0DCEA" }}>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#E6F4FB", color: "#1A5C96" }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA card */}
              <div
                className="p-5 rounded-2xl mb-5 sticky top-24"
                style={{ background: "linear-gradient(135deg, #0B3C6E, #1A5C96)" }}
              >
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Free Hospital Audit
                </h3>
                <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                  We'll analyse your hospital's digital presence and send a custom report in 48 hours.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  Get Free Audit
                </Link>
                <a
                  href="https://wa.me/919994445555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ backgroundColor: "#25D366" }}
                >
                  WhatsApp Us
                </a>
              </div>
            </aside>
          </div>

          {/* Related articles */}
          {relatedSlugs.length > 0 && (
            <div className="mt-10">
              <h2 className="font-bold text-xl mb-5" style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}>
                More Articles
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedSlugs.map((s) => {
                  const rel = articles[s];
                  return (
                    <Link
                      key={s}
                      href={`/blog/${s}`}
                      className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow"
                      style={{ border: "1px solid #D0DCEA" }}
                    >
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2"
                        style={{ backgroundColor: rel.categoryBg, color: rel.categoryColor }}
                      >
                        {rel.category}
                      </span>
                      <p className="text-sm font-semibold leading-snug mb-2" style={{ color: "#0B3C6E" }}>
                        {rel.title}
                      </p>
                      <span className="text-xs font-semibold flex items-center gap-1" style={{ color: "#FF6B35" }}>
                        Read <ArrowRight size={12} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
