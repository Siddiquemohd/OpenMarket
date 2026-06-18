"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiShare2, FiCheck } from "react-icons/fi";

/**
 * Reusable Logo Component
 */
export function Logo() {
  return (
    <Link href="/" aria-label="OpenMarket home" className="relative w-[230px] h-[52px] flex-shrink-0 transition-transform hover:scale-102 duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-4">
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
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/our-mission" },
    { label: "How It Works", href: "/why-openmarket" },
    { label: "Founding Sellers", href: "/founding-members" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  const handleShare = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://www.openmarket.co.in";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "OpenMarket - Where Fair Trade Matters",
          text: "Join the movement to build a fair B2B marketplace where visibility is earned through activity and trust.",
          url: shareUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Error copying link:", err);
      }
    }
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
            <Link
              key={idx}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`transition-colors duration-200 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-4 ${
                isActive(link.href)
                  ? "text-brand-green font-bold border-b-2 border-brand-green pb-[4px]"
                  : "text-brand-navy hover:text-brand-green"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={handleShare}
              suppressHydrationWarning
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-green hover:bg-brand-dark-green text-white rounded-full transition-colors text-sm font-bold shadow-sm cursor-pointer focus:outline-none"
            >
              {copied ? <FiCheck size={16} /> : <FiShare2 size={16} />}
              <span>{copied ? "Link Copied" : "Share OpenMarket"}</span>
            </button>
          </div>
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
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`py-2 border-b border-slate-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-2 ${
                    isActive(link.href)
                      ? "text-brand-green font-bold"
                      : "text-brand-navy hover:text-brand-green"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleShare();
                }}
                suppressHydrationWarning
                className="flex items-center justify-center gap-2 py-3 bg-brand-green hover:bg-brand-dark-green text-white rounded-xl text-center font-bold shadow-sm mt-2 cursor-pointer w-full focus:outline-none"
              >
                {copied ? <FiCheck size={18} /> : <FiShare2 size={18} />}
                <span>{copied ? "Link Copied" : "Share OpenMarket"}</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
