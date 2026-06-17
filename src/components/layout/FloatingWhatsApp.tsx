"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

/**
 * Floating WhatsApp Widget
 * Renders a fixed WhatsApp button on the bottom left corner of the screen.
 */
export function FloatingWhatsApp() {
  const pathname = usePathname();

  if (pathname === "/founding-members") {
    return null;
  }

  return (
    <a
      href="https://wa.me/918108359977"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed left-6 bottom-[75px] md:bottom-[90px] z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group font-bold text-sm shadow-[#25D366]/30 hover:shadow-[#25D366]/50 border border-[#25D366]/20 font-sans"
    >
      <FaWhatsapp size={20} className="text-white" />
      <span className="tracking-wide">+91 81083 59977</span>
    </a>
  );
}

export default FloatingWhatsApp;
