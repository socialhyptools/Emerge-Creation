import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #0B3C6E 0%, #1A5C96 100%)" }}
    >
      <div className="text-center max-w-lg">
        <div
          className="text-8xl font-bold mb-4"
          style={{ color: "#1D9E75", fontFamily: "var(--font-heading)" }}
        >
          404
        </div>
        <h1
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Page Not Found
        </h1>
        <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
          The page you are looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to growing your hospital&apos;s digital presence.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FF6B35" }}
          >
            <Home size={18} /> Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-colors"
            style={{ border: "2px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            Free Audit <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
