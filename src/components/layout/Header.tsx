"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiShare2, FiCheck } from "react-icons/fi";
import { useOtpModal } from "@/providers/OtpModalProvider";

/**
 * Reusable Logo Component
 */
export function Logo() {
  return (
    <Link href="/" aria-label="OpenMarket home" className="relative w-[168px] h-[56px] flex-shrink-0 transition-transform hover:scale-[1.02] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-4">
      <Image
        src="/logo1_transparent.png"
        alt="OpenMarket Logo"
        fill
        sizes="168px"
        priority
        className="object-contain object-left mix-blend-multiply"
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
  const [currentHash, setCurrentHash] = useState("");
  const { openOtpModal } = useOtpModal();

  useEffect(() => {
    // Set initial hash
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/our-mission" },
    { label: "How It Works", href: "/why-openmarket" },
    { label: "Our Story", href: "/evolution" },
    { label: "Founding Members", href: "/founding-members" },
    { label: "Pricing", href: "/pricing" },
    { label: "For Sellers", href: "/for-sellers" },
    { label: "For Buyers", href: "/for-buyers" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "All Categories", href: "/category" },
  ];

  const isActive = (link: { label: string; href: string }) => {
    if (link.label === "All Categories") {
      return pathname === "/category" || currentHash === "#categories";
    }
    if (link.label === "Home") {
      return pathname === "/" && currentHash !== "#categories";
    }
    return pathname === link.href;
  };

  const handleShare = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://www.openmarket.co.in";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "OpenMarket - Be Active. Be Visible. !!",
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

        {/* Toggle Button for Mobile Devices (lg breakpoint for menu density) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          suppressHydrationWarning
          className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition-colors lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-semibold text-sm">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              className={`transition-colors duration-200 py-1 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-4 ${isActive(link)
                ? "text-brand-green font-bold border-b-2 border-brand-green pb-[4px]"
                : "text-brand-navy hover:text-brand-green"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => openOtpModal()}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#097B3E] hover:bg-[#075F30] text-white rounded-full transition-colors text-sm font-bold shadow-sm cursor-pointer focus:outline-none whitespace-nowrap"
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
              <span>Join Waitlist</span>
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
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden px-6 pb-6 pt-2"
          >
            <nav className="flex flex-col gap-4 font-semibold text-base">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(link) ? "page" : undefined}
                  className={`py-2 border-b border-slate-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-2 ${isActive(link)
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
                  openOtpModal();
                }}
                className="flex items-center justify-center gap-2 py-3 bg-[#097B3E] hover:bg-[#075F30] text-white rounded-xl text-center font-bold shadow-sm mt-2 cursor-pointer w-full focus:outline-none"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                <span>Join Waitlist</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
