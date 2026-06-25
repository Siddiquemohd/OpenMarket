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
    { label: "Home", href: "/" },
    { label: "Why OpenMarket", href: "/why-openmarket" },
    { label: "For Sellers", href: "/for-sellers" },
    { label: "For Buyers", href: "/for-buyers" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Founding Members", href: "/founding-members" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "All Categories", href: "/category" },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-0 text-slate-600 font-sans">
      {/* Top spacing and main content container */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-12 lg:gap-8">

          {/* Column 1: Brand / About */}
          <div className="flex flex-col sm:col-span-6 lg:col-span-3">
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
          <div className="flex flex-col sm:col-span-6 lg:col-span-4">
            <div className="w-fit lg:mx-auto">
              <h4 className="text-base font-bold text-brand-navy tracking-wider uppercase text-center lg:-translate-x-8">
                Quick Links
              </h4>

              {/* Small green divider line */}
              <div className="h-[2px] w-8 bg-brand-green mt-2 mb-4 mx-auto lg:-translate-x-8" />

              <nav className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3">
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
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col sm:col-span-6 lg:col-span-2">
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
                href="mailto:info@openmarketco.in"
                className="flex items-center gap-3 text-[15px] font-semibold text-slate-600 hover:text-brand-green transition-colors duration-200"
              >
                <FaEnvelope className="text-[16px] text-brand-navy" />
                <span>info@openmarketco.in</span>
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
          <div className="flex flex-col sm:col-span-6 lg:col-span-3">
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

    </footer>
  );
}

export default Footer;
