"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-8 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl md:bottom-8 md:right-8"
    >
      <MessageCircle size={28} />
    </a>
  );
}