import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Free Digital Marketing Audit for Hospitals — Contact Emerge Digital",
  description:
    "Book your free digital marketing audit for your hospital or clinic. We audit SEO, Google rankings, reputation, and OPD leads. Delivered in 48 hours. No obligation.",
};

const contactItems = [
  { icon: Phone, label: "Call Us", value: "+91 99944 45555", href: "tel:+919994445555" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/919994445555" },
  { icon: Mail, label: "Email", value: "hello@emergedigital.in", href: "mailto:hello@emergedigital.in" },
  { icon: MapPin, label: "Office", value: "No. 42, Anna Nagar East, Chennai – 600 102", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 7:00 PM IST", href: "#" },
];

const auditIncludes = [
  "SEO & Google ranking analysis",
  "Competitor digital presence review",
  "OPD lead generation gaps",
  "Reputation score check",
  "Actionable 30-day plan",
];

export default function ContactPage() {
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
            style={{ backgroundColor: "rgba(255,107,53,0.25)", color: "#FFB59E" }}
          >
            Free Audit — No Obligation
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get Your Free Digital Audit
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            We&apos;ll deliver a personalised digital marketing audit for your hospital within
            48 hours. Zero cost. Zero pressure.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F4F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
                >
                  Talk to Us Directly
                </h2>
                <p className="text-sm" style={{ color: "#4A6080" }}>
                  Prefer to speak first? We&apos;re available Mon–Sat, 9am–7pm IST.
                </p>
              </div>

              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#E6F4FB" }}
                    >
                      <Icon size={18} style={{ color: "#0B3C6E" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "#4A6080" }}>
                        {item.label}
                      </p>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium hover:underline"
                          style={{ color: "#0B3C6E" }}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: "#1A2B3C" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Audit includes */}
              <div
                className="p-5 rounded-2xl"
                style={{ backgroundColor: "#E1F5EE", border: "1px solid #1D9E75" }}
              >
                <h3 className="font-semibold text-sm mb-3" style={{ color: "#0B3C6E" }}>
                  Your Free Audit Includes:
                </h3>
                {auditIncludes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs mb-1.5"
                    style={{ color: "#1A2B3C" }}
                  >
                    <CheckCircle2 size={14} style={{ color: "#1D9E75" }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="h-44 rounded-xl flex items-center justify-center text-sm font-medium overflow-hidden"
                style={{ backgroundColor: "#E6F4FB", color: "#1A5C96" }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <div>Anna Nagar East, Chennai</div>
                  <div className="text-xs mt-1" style={{ color: "#4A6080" }}>600 102</div>
                </div>
              </div>
            </div>

            {/* Form — client component */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
