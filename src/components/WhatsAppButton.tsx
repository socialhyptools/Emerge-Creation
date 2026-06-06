"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Emerge Digital! I'd like to know more about your healthcare marketing services."
  );
  const phone = "919543915430";

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg text-white text-sm font-semibold transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={20} fill="white" strokeWidth={0} />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
