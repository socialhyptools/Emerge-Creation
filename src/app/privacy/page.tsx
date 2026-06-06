import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Emerge Digital",
  description: "Privacy policy for Emerge Digital healthcare marketing agency. We collect no patient data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-20" style={{ backgroundColor: "#F4F7FA" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "#4A6080" }}>Last updated: March 2024</p>

        <div className="bg-white rounded-2xl p-6 lg:p-8 space-y-6" style={{ border: "1px solid #D0DCEA" }}>
          {[
            {
              title: "No Patient Data Collection",
              body: "Emerge Digital does not collect, store, or process any patient health data. Our website is designed for marketing professionals, hospital administrators, and healthcare decision-makers only.",
            },
            {
              title: "Information We Collect",
              body: "We collect only the information you voluntarily provide through our contact forms (name, hospital name, phone, email, city) for the purpose of responding to your enquiry. This data is never sold or shared with third parties.",
            },
            {
              title: "Cookies",
              body: "We use Google Analytics cookies to understand website traffic patterns. No personally identifiable information is stored in cookies. You may disable cookies in your browser settings.",
            },
            {
              title: "Data Security",
              body: "Our website uses SSL encryption (HTTPS). Contact form submissions are transmitted securely and stored only within our CRM system, which is accessible only to authorised team members.",
            },
            {
              title: "Third-Party Services",
              body: "Our website may embed Google Maps, Google Analytics, and WhatsApp links. These services have their own privacy policies. We do not control data collected by these third parties.",
            },
            {
              title: "Your Rights",
              body: "You may request deletion of any personal data we hold about you by emailing hello@emergedigital.in. We will respond within 7 business days.",
            },
            {
              title: "Contact",
              body: "For privacy-related enquiries: privacy@emergedigital.in or call +91 99944 45555.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-semibold text-lg mb-2" style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}>
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
