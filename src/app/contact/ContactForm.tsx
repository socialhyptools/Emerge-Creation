"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Local SEO",
  "Google & Meta Ads",
  "Social Media Marketing",
  "Reputation Management",
  "Website Design",
  "Content Marketing",
  "Full Package (All Services)",
];

const cities = [
  "Chennai", "Coimbatore", "Madurai", "Salem", "Trichy",
  "Tirunelveli", "Vellore", "Erode", "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    hospital: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center" style={{ border: "1px solid #D0DCEA" }}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "#E1F5EE" }}
        >
          <CheckCircle2 size={32} style={{ color: "#1D9E75" }} />
        </div>
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
        >
          Audit Request Received!
        </h2>
        <p className="text-sm mb-4" style={{ color: "#4A6080" }}>
          Our team will contact you within 24 hours with your personalised healthcare
          marketing audit. Check your WhatsApp and email.
        </p>
        <a
          href="https://wa.me/919994445555?text=Hi%20Emerge%20Digital%2C%20I%20just%20submitted%20an%20audit%20request."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
          style={{ backgroundColor: "#25D366" }}
        >
          Confirm on WhatsApp
        </a>
      </div>
    );
  }

  const inputStyle = {
    border: "1.5px solid #D0DCEA",
    color: "#1A2B3C",
    backgroundColor: "#fff",
    outline: "none",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 lg:p-8"
      style={{ border: "1px solid #D0DCEA" }}
    >
      <h2
        className="text-xl font-bold mb-6"
        style={{ color: "#0B3C6E", fontFamily: "var(--font-heading)" }}
      >
        Request Your Free Audit
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {[
          { label: "Your Name *", name: "name", type: "text", placeholder: "Dr. / Mr. / Ms.", required: true },
          { label: "Hospital / Clinic Name *", name: "hospital", type: "text", placeholder: "Sunrise Hospital", required: true },
          { label: "WhatsApp / Phone *", name: "phone", type: "tel", placeholder: "+91 98765 43210", required: true },
          { label: "Email Address *", name: "email", type: "email", placeholder: "you@hospital.com", required: true },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: "#4A6080" }}>
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full px-4 py-2.5 rounded-xl text-sm"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
              onBlur={(e) => (e.target.style.borderColor = "#D0DCEA")}
            />
          </div>
        ))}

        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#4A6080" }}>City</label>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl text-sm"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
            onBlur={(e) => (e.target.style.borderColor = "#D0DCEA")}
          >
            <option value="">Select city</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#4A6080" }}>Service Interested In</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl text-sm"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
            onBlur={(e) => (e.target.style.borderColor = "#D0DCEA")}
          >
            <option value="">Select service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#4A6080" }}>
          Main challenge (optional)
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. We need more OPD appointments. Our Google ranking is low..."
          className="w-full px-4 py-2.5 rounded-xl text-sm resize-none"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#1D9E75")}
          onBlur={(e) => (e.target.style.borderColor = "#D0DCEA")}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#FF6B35" }}
      >
        Request Free Audit — Delivered in 48 Hours
      </button>

      <p className="text-xs text-center mt-3" style={{ color: "#4A6080" }}>
        🔒 No patient data collected. Your info is private and never shared.
      </p>
    </form>
  );
}
