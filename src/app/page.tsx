import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import TrustSection from "@/components/TrustSection";
import FaqSection from "@/components/FaqSection";
import CTABanner from "@/components/CTABanner";
import { FaqJsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Emerge Digital — Healthcare Marketing Agency Chennai | Tamil Nadu",
  description:
    "Chennai's only digital marketing agency exclusively for hospitals, clinics & healthcare. Local SEO, Google Ads, Social Media across Tamil Nadu. Get 3x more OPD appointments.",
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <DifferentiatorsSection />
      <ProcessSection />
      <TestimonialsSection />
      <IndustriesSection />
      <TrustSection />
      <FaqSection />
      <CTABanner />
    </>
  );
}
