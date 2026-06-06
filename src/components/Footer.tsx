import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const services = [
  { label: "Local SEO for Hospitals", href: "/services#local-seo" },
  { label: "Google & Meta Ads", href: "/services#ads" },
  { label: "Social Media Marketing", href: "/services#social-media" },
  { label: "Reputation Management", href: "/services#reputation" },
  { label: "Healthcare Website Design", href: "/services#web-design" },
  { label: "Content Marketing", href: "/services#content" },
];

const industries = [
  { label: "Multi-Specialty Hospitals", href: "/industries#hospitals" },
  { label: "Clinics & Polyclinics", href: "/industries#clinics" },
  { label: "Diagnostic Centers", href: "/industries#diagnostics" },
  { label: "Dental Chains", href: "/industries#dental" },
  { label: "Ayurveda / AYUSH", href: "/industries#ayush" },
  { label: "Fertility / IVF Centers", href: "/industries#fertility" },
];

const quickLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Blog & Resources", href: "/blog" },
  { label: "Free Digital Audit", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B3C6E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg text-white"
                style={{ backgroundColor: "#1D9E75" }}
              >
                E
              </div>
              <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                Emerge Digital
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
              Tamil Nadu&apos;s only digital marketing agency exclusively for hospitals, clinics,
              and healthcare providers. We speak healthcare.
            </p>
            <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              <div className="flex items-start gap-2">
                <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: "#1D9E75" }} />
                <span>No. 42, Anna Nagar East, Chennai – 600 102</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} style={{ color: "#1D9E75" }} />
                <a href="tel:+919994445555" className="hover:text-white transition-colors">+91 99944 45555</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} style={{ color: "#1D9E75" }} />
                <a href="mailto:hello@emergedigital.in" className="hover:text-white transition-colors">hello@emergedigital.in</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={15} style={{ color: "#25D366" }} />
                <a
                  href="https://wa.me/919994445555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-2">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Get Free Audit →
              </Link>
            </div>
          </div>
        </div>

        {/* Tamil Nadu coverage tags */}
        <div
          className="flex flex-wrap gap-2 mb-8 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            "Chennai", "Coimbatore", "Madurai", "Salem", "Trichy",
            "Tirunelveli", "Vellore", "Erode", "Namakkal", "Thanjavur",
          ].map((city) => (
            <span
              key={city}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: "rgba(29,158,117,0.15)", color: "#9FE1CB" }}
            >
              {city}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "#4A6080" }}
        >
          <p>© {new Date().getFullYear()} Emerge Digital. All rights reserved.</p>
          <p>
            Healthcare-only Digital Marketing · Made with ♥ in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
