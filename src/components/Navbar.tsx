"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#0B3C6E" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg"
              style={{ backgroundColor: "#1D9E75", color: "#fff" }}
            >
              E
            </div>
            <div className="text-white">
              <div className="font-bold text-lg leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                Emerge
              </div>
              <div className="text-xs leading-none" style={{ color: "rgba(255,255,255,0.7)" }}>
                Digital
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919994445555"
              className="flex items-center gap-1.5 text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <Phone size={15} />
              +91 99944 45555
            </a>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FF6B35", color: "#fff" }}
            >
              Free Audit
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "#0B3C6E", borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 px-3 py-3 rounded-lg text-sm font-semibold text-center text-white"
              style={{ backgroundColor: "#FF6B35" }}
              onClick={() => setOpen(false)}
            >
              Get Free Digital Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
