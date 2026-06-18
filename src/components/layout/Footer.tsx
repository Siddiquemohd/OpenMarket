import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/components/shared/PhoneIcon";
import { FaLinkedin, FaWhatsapp, FaChevronRight, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

/**
 * Global Footer Component
 * Renders the brand column, quick links, contact, address, and legal details.
 */
export function Footer() {
  const quickLinks = [
    { label: "Why OpenMarket", href: "/why-openmarket" },
    { label: "For Sellers", href: "/for-sellers" },
    { label: "For Buyers", href: "/for-buyers" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Founding Members", href: "/founding-members" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-16 text-slate-600 font-sans">
      {/* Top spacing and main content container */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand / About */}
          <div className="flex flex-col">
            <Link
              href="/"
              aria-label="OpenMarket home"
              className="relative w-[180px] h-[40px] flex-shrink-0 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-4"
            >
              <Image
                src="/logo.png"
                alt="OpenMarket Logo"
                fill
                sizes="180px"
                priority
                className="object-contain object-left"
              />
            </Link>

            {/* Small green divider line */}
            <div className="h-[2px] w-12 bg-brand-green mb-4" />

            <p className="text-[15px] leading-relaxed text-slate-500 font-medium">
              Building India’s most trusted B2B marketplace where visibility is earned through activity and engagement.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-brand-navy tracking-wider uppercase">
              Quick Links
            </h4>

            {/* Small green divider line */}
            <div className="h-[2px] w-8 bg-brand-green mt-2 mb-4" />

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link, index) => {
                const className = "flex items-center gap-2 text-[15px] font-semibold text-slate-600 hover:text-brand-green transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 focus-visible:ring-offset-2";
                const content = (
                  <>
                    <span className="text-[10px] text-brand-green transform group-hover:translate-x-1 transition-transform">
                      <FaChevronRight />
                    </span>
                    {link.label}
                  </>
                );

                return link.href.startsWith("/") ? (
                  <Link key={index} href={link.href} className={className}>
                    {content}
                  </Link>
                ) : (
                  <a key={index} href={link.href} className={className}>
                    {content}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-brand-navy tracking-wider uppercase">
              Contact
            </h4>

            {/* Small green divider line */}
            <div className="h-[2px] w-8 bg-brand-green mt-2 mb-4" />

            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href="tel:+919320012345"
                className="flex items-center gap-3 text-[15px] font-semibold text-slate-600 hover:text-brand-green transition-colors duration-200"
              >
                <PhoneIcon size={16} className="text-brand-navy flex-shrink-0" />
                <span>+91 93200 12345</span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@openmarket.co.in"
                className="flex items-center gap-3 text-[15px] font-semibold text-slate-600 hover:text-brand-green transition-colors duration-200"
              >
                <FaEnvelope className="text-[16px] text-brand-navy" />
                <span>hello@openmarket.co.in</span>
              </a>

              {/* Divider */}
              <div className="w-full border-t border-slate-200 my-2" />

              {/* Social Media Connect */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-500">Connect with us</span>
                <div className="flex items-center gap-4 text-2xl">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on LinkedIn"
                    className="text-[#0077B5] hover:scale-110 transition-transform flex items-center justify-center"
                  >
                    <FaLinkedin />
                  </a>

                  {/* Vertical separator */}
                  <span className="text-slate-300 text-sm">|</span>

                  <a
                    href="https://wa.me/919320012345"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect on WhatsApp"
                    className="text-[#25D366] hover:scale-110 transition-transform flex items-center justify-center"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Address */}
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-brand-navy tracking-wider uppercase">
              Address
            </h4>

            {/* Small green divider line */}
            <div className="h-[2px] w-8 bg-brand-green mt-2 mb-4" />

            <address className="flex items-start gap-3 not-italic text-[15px] font-semibold text-slate-600 leading-relaxed">
              <FiMapPin className="text-[18px] text-brand-navy mt-1 flex-shrink-0" />
              <span>
                S-33, 2nd floor,<br />
                Fantasia business park<br />
                premises.<br />
                Vashi, Navi Mumbai,<br />
                Maharashtra - 400703<br />
                India
              </span>
            </address>


          </div>

        </div>
      </div>

      {/* Bottom Bar matching screenshot */}
      <div className="w-full border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Column: Shield and Text */}
          <div className="flex items-start gap-3.5 max-w-lg">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-brand-green shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-brand-navy leading-snug">
                Where Fair Trade Matters.
              </span>
              <p className="text-xs font-semibold text-slate-500 leading-relaxed mt-0.5">
                A marketplace being built by businesses, for businesses.<br />
                Thank you for being part of this journey.
              </p>
            </div>
          </div>

          {/* Center Column: Logo */}
          <div className="flex-shrink-0 relative w-[140px] h-[32px]">
            <Image
              src="/logo.png"
              alt="OpenMarket Logo"
              fill
              sizes="140px"
              className="object-contain"
            />
          </div>

          {/* Right Column: Follow Us & Icons */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center text-sm transition-transform hover:scale-110 shadow-sm"
              >
                <FaLinkedin size={16} />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-sm transition-transform hover:scale-110 shadow-sm"
              >
                <FaFacebookF size={16} />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919320012345"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center text-sm transition-transform hover:scale-110 shadow-sm"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
