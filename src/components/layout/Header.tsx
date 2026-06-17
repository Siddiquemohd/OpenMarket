"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import { useOtpModal } from "@/providers/OtpModalProvider";

/**
 * Reusable Logo Component
 */
export function Logo() {
  return (
    <Link href="/" className="relative w-[230px] h-[52px] flex-shrink-0 transition-transform hover:scale-102 duration-300">
      <Image
        src="/logo.png"
        alt="OpenMarket Logo"
        fill
        sizes="230px"
        priority
        className="object-contain object-left"
      />
    </Link>
  );
}

/**
 * Global Header Navigation Component
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openOtpModal } = useOtpModal();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Why OpenMarket", href: "/why-openmarket" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "For Sellers", href: "/for-sellers" },
    { label: "For Buyers", href: "/for-buyers" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* Toggle Button for Mobile Devices */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          suppressHydrationWarning
          className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition-colors md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`transition-colors duration-200 py-1 ${
                isActive(link.href)
                  ? "text-brand-green font-bold border-b-2 border-brand-green pb-[4px]"
                  : "text-brand-navy hover:text-brand-green"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => openOtpModal()}
            suppressHydrationWarning
            className="px-5 py-2.5 bg-brand-green hover:bg-brand-dark-green text-white rounded-full transition-colors text-sm font-bold shadow-sm cursor-pointer focus:outline-none"
          >
            Join Now
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden px-6 pb-6 pt-2"
          >
            <nav className="flex flex-col gap-4 font-semibold text-base">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 border-b border-slate-50 transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-brand-green font-bold"
                      : "text-brand-navy hover:text-brand-green"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openOtpModal();
                }}
                suppressHydrationWarning
                className="flex items-center justify-center gap-2 py-3 bg-brand-green hover:bg-brand-dark-green text-white rounded-xl text-center font-bold shadow-sm mt-2 cursor-pointer w-full focus:outline-none"
              >
                Join Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
