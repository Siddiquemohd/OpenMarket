"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import {
  FaCheck,
  FaUsers,
  FaStar,
  FaHandshake,
  FaBuilding,
  FaStore,
  FaShoppingCart,
  FaBalanceScale,
  FaArrowRight,
  FaArrowLeft,
  FaBrain,
  FaPen,
  FaEnvelope,
  FaBullhorn,
} from "react-icons/fa";
import {
  FiShield,
  FiTrendingUp,
  FiSearch,
  FiActivity,
  FiCheckCircle,
  FiUserCheck,
  FiSliders,
  FiEye,
  FiXCircle,
  FiUploadCloud,
  FiMessageSquare,
  FiFileText,
  FiMousePointer,
  FiCpu,
  FiClock,
  FiLock,
  FiUsers as FiUsersIcon,
  FiLink,
  FiArrowRight as FiArrowRightIcon,
  FiArrowDown,
  FiAward,
  FiGrid,
  FiImage,
  FiBookOpen,
  FiUser,
} from "react-icons/fi";
import { useOtpModal } from "@/providers/OtpModalProvider";

// Reusable LogoCheckmark SVG component
function LogoCheckmark({
  size = 20,
  checkColor = "#0B3C5F",
  circleColor = "#0FA958",
}: {
  size?: number;
  checkColor?: string;
  circleColor?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke={circleColor} strokeWidth="2.5" fill="none" />
      <path
        d="M8 12L11 15L16.5 9"
        stroke={checkColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MarketplaceEvolution() {
  const { openOtpModal } = useOtpModal();

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">

        {/* SECTION 1: Page Header & Buyer-Seller Connection Visual */}
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-8 md:pt-14 md:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <div className="flex flex-col">
                <h1 className="text-hero-title text-brand-navy leading-tight">
                  How B2B <br />
                  Marketplaces <br />
                  <span className="text-brand-blue">Evolved</span>
                </h1>
                <div className="h-[3px] w-12 bg-brand-green mt-3.5 mb-2" />
              </div>

              <p className="text-brand-navy font-bold text-base leading-relaxed">
                Every marketplace has one purpose.{" "}
                <span className="text-brand-green block">Connect the right buyer with the right seller.</span>
              </p>

              <p className="text-slate-500 font-bold text-xs md:text-sm leading-relaxed max-w-lg">
                Over the years, B2B marketplaces evolved through different business models. Each model solved a problem. Each also created new challenges. We believe it&apos;s time for the next evolution.
              </p>
            </div>

            {/* Right Column Connection Graphic */}
            <div className="lg:col-span-7 flex items-center justify-center py-6 lg:py-0 w-full overflow-hidden">
              <div className="w-full max-w-[560px] flex items-center justify-center transition-transform duration-300 hover:scale-103">
                <img
                  src="/buyer_seller_connection_diagram.png?v=3"
                  alt="Buyer Seller Connection Diagram"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: Timeline Row */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-white border border-slate-150 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
            
            {/* Horizontal Line behind the icons (desktop only) */}
            <div className="absolute top-[102px] left-[10%] right-[10%] h-[2px] bg-slate-200/80 -z-0 hidden lg:block" />
            
            {/* Connecting dots (desktop only) */}
            <div className="absolute top-[98px] left-[20%] w-2.5 h-2.5 bg-slate-400 rounded-full -translate-x-1/2 -z-0 hidden lg:block" />
            <div className="absolute top-[98px] left-[40%] w-2.5 h-2.5 bg-slate-400 rounded-full -translate-x-1/2 -z-0 hidden lg:block" />
            <div className="absolute top-[98px] left-[60%] w-2.5 h-2.5 bg-slate-400 rounded-full -translate-x-1/2 -z-0 hidden lg:block" />
            <div className="absolute top-[98px] left-[80%] w-2.5 h-2.5 bg-slate-400 rounded-full -translate-x-1/2 -z-0 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-x-4 items-stretch relative z-10">
              {[
                {
                  year: "1996",
                  title: "Directory Model",
                  description: "Businesses became discoverable online.",
                  focus: "Focus: Business Listings",
                  colorClass: "text-[#0066CC]",
                  badgeBg: "bg-[#0066CC]/5 border border-[#0066CC]/10 text-[#0066CC]",
                  iconClass: "border-[#0066CC]/20 text-[#0066CC] bg-[#0066CC]/5 shadow-sm",
                  icon: <FiBookOpen size={20} />,
                },
                {
                  year: "2005",
                  title: "Membership Model",
                  description: "Businesses paid for better visibility.",
                  focus: "Focus: Pay for Visibility",
                  colorClass: "text-brand-green",
                  badgeBg: "bg-brand-green/5 border border-brand-green/10 text-brand-green",
                  iconClass: "border-brand-green/20 text-brand-green bg-brand-green/5 shadow-sm",
                  icon: <FiUserCheck size={20} />,
                },
                {
                  year: "2015",
                  title: "Lead Generation Model",
                  description: "Success was measured by the number of enquiries.",
                  focus: "Focus: Pay for Enquiries",
                  colorClass: "text-amber-500",
                  badgeBg: "bg-amber-50 border border-amber-100 text-amber-600",
                  iconClass: "border-amber-500/20 text-amber-500 bg-amber-50/50 shadow-sm",
                  icon: <FaEnvelope size={20} />,
                },
                {
                  year: "2022",
                  title: "Advertising Model",
                  description: "Sponsored listings increased visibility.",
                  focus: "Focus: Sponsored Visibility",
                  colorClass: "text-red-500",
                  badgeBg: "bg-red-50 border border-red-100 text-red-500",
                  iconClass: "border-red-200 text-red-500 bg-red-50/50 shadow-sm",
                  icon: <FaBullhorn size={20} />,
                },
                {
                  year: "Today",
                  title: "OpenMarket Model",
                  description: "Visibility is earned through value creation, not payment.",
                  focus: "Focus: Earn Visibility",
                  colorClass: "text-brand-green",
                  badgeBg: "bg-brand-light-green border border-brand-green/20 text-brand-green",
                  iconClass: "border-brand-green/20 text-brand-green bg-brand-light-green/30 shadow-md",
                  icon: <LogoCheckmark size={22} checkColor="#0FA958" circleColor="#0066CC" />,
                },
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  {/* Milestone Column */}
                  <div className="flex flex-col items-center text-center flex-1">
                    {/* Year */}
                    <span className={`text-[15px] font-black ${item.colorClass} mb-3 block`}>
                      {item.year}
                    </span>

                    {/* Icon Circle */}
                    <div className={`w-16 h-16 rounded-full border-2 bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 mb-5 ${item.iconClass}`}>
                      {item.icon}
                    </div>

                    {/* Model Title */}
                    <h3 className={`text-[15px] font-black ${item.colorClass} leading-snug mb-2`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[12.5px] font-bold text-slate-500 leading-relaxed mb-5 max-w-[180px] mx-auto">
                      {item.description}
                    </p>

                    {/* Focus Badge */}
                    <div className={`rounded-xl py-1.5 px-3 text-[10.5px] font-black text-center mt-auto ${item.badgeBg}`}>
                      {item.focus}
                    </div>
                  </div>

                  {/* Vertical Arrow for Mobile between items */}
                  {idx < 4 && (
                    <div className="flex lg:hidden items-center justify-center my-2 text-slate-300">
                      <FiArrowDown className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: The Challenge */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 border-t border-slate-100">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-brand-green tracking-widest uppercase block mb-1">
              PAIN POINTS
            </span>
            <h2 className="text-h2 text-brand-navy">
              The Challenge
            </h2>
            <div className="h-[2px] w-8 bg-brand-green mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center w-full max-w-7xl mx-auto">

            {/* Sellers Pain Points */}
            <div className="border border-red-100 bg-[#fffbfc] rounded-2xl p-6 sm:p-8 shadow-sm text-left hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 text-red-500 flex items-center justify-center flex-shrink-0">
                  <FiUser size={20} />
                </div>
                <h3 className="text-base font-black text-brand-navy uppercase tracking-wider">Sellers</h3>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Lower ROI",
                  "Wasted Time",
                  "Higher Marketing Costs",
                  "Visibility Depends on Budget",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <FiXCircle className="text-red-500 flex-shrink-0" size={18} />
                    <span className="text-xs sm:text-[13px] font-bold text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Circle */}
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-400 font-extrabold text-[12px] flex items-center justify-center shadow-inner mx-auto">
              VS
            </div>

            {/* Buyers Pain Points */}
            <div className="border border-brand-blue/10 bg-[#f7fbfd] rounded-2xl p-6 sm:p-8 shadow-sm text-left hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <FiUserCheck size={20} />
                </div>
                <h3 className="text-base font-black text-brand-navy uppercase tracking-wider">Buyers</h3>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Too Many Suppliers",
                  "Difficult to Find the Right Seller",
                  "Wasted Time Searching",
                  "Lower Trust",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <FiXCircle className="text-brand-blue flex-shrink-0" size={18} />
                    <span className="text-xs sm:text-[13px] font-bold text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: We Asked Different Questions */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 ">
          <div className="text-center mb-8">
            <h2 className="text-h2 text-brand-navy">
              We Asked Different Questions
            </h2>
            <div className="h-[2px] w-8 bg-brand-green mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto">

            {/* Card 01 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm text-center flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-brand-light-green border border-brand-green/20 text-brand-green font-extrabold text-[11px] flex items-center justify-center mb-3">
                01
              </div>
              <div className="w-12 h-12 rounded-full bg-[#f4faf6] border border-brand-green/10 text-brand-green flex items-center justify-center mb-4">
                <FiEye size={20} />
              </div>
              <p className="text-[14px] font-bold text-slate-600 leading-relaxed max-w-[170px]">
                What if visibility was earned, not purchased?
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm text-center flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-brand-light-green border border-brand-green/20 text-brand-green font-extrabold text-[11px] flex items-center justify-center mb-3">
                02
              </div>
              <div className="w-12 h-12 rounded-full bg-[#f4faf6] border border-brand-green/10 text-brand-green flex items-center justify-center font-bold text-lg mb-4">
                ₹
              </div>
              <p className="text-[14px] font-bold text-slate-600 leading-relaxed max-w-[170px]">
                What if technology reduced marketing costs?
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm text-center flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-brand-light-green border border-brand-green/20 text-brand-green font-extrabold text-[11px] flex items-center justify-center mb-3">
                03
              </div>
              <div className="w-12 h-12 rounded-full bg-[#f4faf6] border border-brand-green/10 text-brand-green flex items-center justify-center mb-4">
                <FiCpu size={20} />
              </div>
              <p className="text-[14px] font-bold text-slate-600 leading-relaxed max-w-[170px]">
                What if AI matched buyers with the right sellers?
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-white border border-slate-150 rounded-2xl p-5 shadow-sm text-center flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-brand-light-green border border-brand-green/20 text-brand-green font-extrabold text-[11px] flex items-center justify-center mb-3">
                04
              </div>
              <div className="w-12 h-12 rounded-full bg-[#f4faf6] border border-brand-green/10 text-brand-green flex items-center justify-center mb-4">
                <FiShield size={20} />
              </div>
              <p className="text-[14px] font-bold text-slate-600 leading-relaxed max-w-[170px]">
                What if every business had a fair opportunity to grow?
              </p>
            </div>

          </div>

          <p className="text-center text-slate-500 font-extrabold text-xs sm:text-[13.5px] tracking-wide mt-6">
            These questions became the foundation of <span className="text-brand-green">OpenMarket</span>.
          </p>
        </section>

        {/* SECTION 5: The OpenMarket Model */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 border-t border-slate-100">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-brand-green tracking-widest uppercase block mb-1">
              THE NEXT GENERATION
            </span>
            <h2 className="text-h2 text-brand-navy">
              The OpenMarket Model
            </h2>
            <div className="h-[2px] w-8 bg-brand-green mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {/* Model Card 1 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-left flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-150 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                <FiAward size={20} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[14.5px] font-black text-brand-navy mb-1.5">Earn Visibility</h4>
                <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                  Visibility is earned through participation—not payment.
                </p>
              </div>
            </div>

            {/* Model Card 2 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-left flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-150 text-brand-green flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                <FiCpu size={20} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[14.5px] font-black text-brand-navy mb-1.5">Smart Matching</h4>
                <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                  AI matches buyers with the most appropriate sellers.
                </p>
              </div>
            </div>

            {/* Model Card 3 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-left flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-150 text-amber-500 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                <FiShield size={20} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[14.5px] font-black text-brand-navy mb-1.5">Build Trust</h4>
                <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                  Reward businesses that are active, transparent and responsive.
                </p>
              </div>
            </div>

            {/* Model Card 4 */}
            <div className="border border-slate-150 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-left flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-50 border border-purple-150 text-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                <FiTrendingUp size={20} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[14.5px] font-black text-brand-navy mb-1.5">Grow Together</h4>
                <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                  A stronger marketplace benefits buyers, sellers and the entire ecosystem.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6: Our Philosophy */}
        <section className="max-w-7xl mx-auto px-6 py-6">
          <div className="bg-[#f4faf6] border border-brand-green/20 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-sm relative hover:scale-[1.01] transition-transform">
            <span className="text-[44px] font-serif text-brand-green leading-none absolute left-4 top-2 opacity-25">“</span>
            <span className="text-[44px] font-serif text-brand-green leading-none absolute right-4 bottom-[-10px] opacity-25">”</span>
            <span className="text-[10px] font-black text-brand-green uppercase tracking-widest block mb-2">Our Philosophy</span>
            <p className="text-base sm:text-lg font-extrabold text-brand-navy leading-relaxed italic max-w-3xl mx-auto">
              We reward businesses that create value for the marketplace through active participation, timely responses, updated information, and meaningful engagement.
            </p>
          </div>
        </section>

        {/* SECTION 7: Everyone Wins */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 mt-4 ">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-brand-green tracking-widest uppercase block mb-1">
              MUTUAL VALUE
            </span>
            <h2 className="text-h2 text-brand-navy">
              Everyone Wins
            </h2>
            <div className="h-[2px] w-8 bg-brand-green mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">

            {/* Sellers Grid */}
            <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                  <FiUser size={16} />
                </div>
                <h4 className="text-sm font-black text-brand-navy uppercase tracking-wider">Sellers</h4>
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  "Better ROI",
                  "Lower Marketing Costs",
                  "Better Business Opportunities",
                  "Fair Visibility",
                  "Sustainable Growth",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[13px] font-bold text-slate-500">
                    <FiCheckCircle className="text-brand-green" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buyers Grid */}
            <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <FiUserCheck size={16} />
                </div>
                <h4 className="text-sm font-black text-brand-navy uppercase tracking-wider">Buyers</h4>
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  "Find the Right Supplier Faster",
                  "Better Buyer-Seller Matching",
                  "Trusted Businesses",
                  "Save Time",
                  "Better Business Relationships",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[13px] font-bold text-slate-500">
                    <FiCheckCircle className="text-brand-green" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketplace Grid */}
            <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0">
                  <FiSliders size={16} />
                </div>
                <h4 className="text-sm font-black text-brand-navy uppercase tracking-wider">Marketplace</h4>
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  "Rewards Participation",
                  "Builds Trust",
                  "Improves Buyer-Seller Matching",
                  "Creates Sustainable Growth",
                  "Fair Opportunities for Every Business",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[13px] font-bold text-slate-500">
                    <FiCheckCircle className="text-brand-green" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 8: The Difference */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 border-t border-slate-100">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-brand-green tracking-widest uppercase block mb-1">
              COMPARISON
            </span>
            <h2 className="text-h2 text-brand-navy">
              The Difference
            </h2>
            <div className="h-[2px] w-8 bg-brand-green mx-auto mt-2" />
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 w-full max-w-5xl mx-auto">

            {/* Traditional Marketplace Flow */}
            <div className="flex-grow flex-1 border border-slate-200 bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between items-center text-center w-full max-w-[420px]">
              <span className="text-[10px] font-black text-red-500 tracking-widest uppercase block mb-3">Traditional Marketplace</span>

              <div className="flex items-center justify-center gap-4 py-4 w-full">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full bg-red-50 border border-red-100 text-red-500 flex items-center justify-center font-bold text-sm">
                    ₹
                  </div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Pay</span>
                </div>

                <FaArrowRight size={10} className="text-slate-300" />

                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full bg-red-50 border border-red-100 text-red-500 flex items-center justify-center">
                    <FiEye size={18} />
                  </div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Get Visibility</span>
                </div>

                <FaArrowRight size={10} className="text-slate-300" />

                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full bg-red-50 border border-red-100 text-red-500 flex items-center justify-center">
                    <FaEnvelope size={18} />
                  </div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Get Enquiries</span>
                </div>
              </div>
            </div>

            {/* VS Circle */}
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-400 font-extrabold text-[12px] flex items-center justify-center shadow-inner self-center mx-auto">
              VS
            </div>

            {/* OpenMarket Flow */}
            <div className="flex-grow flex-[1.2] border border-brand-green/20 bg-brand-light-green/20 rounded-2xl p-6 shadow-sm flex flex-col justify-between items-center text-center w-full max-w-[480px]">
              <span className="text-[10px] font-black text-brand-green tracking-widest uppercase block mb-3">OpenMarket</span>

              <div className="flex items-center justify-center gap-4 py-4 w-full">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full bg-white border border-brand-green/20 text-brand-green flex items-center justify-center shadow-sm">
                    <FiUserCheck size={18} />
                  </div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Create Value</span>
                </div>

                <FaArrowRight size={10} className="text-brand-green" />

                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full bg-white border border-brand-green/20 text-brand-green flex items-center justify-center shadow-sm">
                    <FiEye size={18} />
                  </div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Earn Visibility</span>
                </div>

                <FaArrowRight size={10} className="text-brand-green" />

                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full bg-white border border-brand-green/20 text-brand-green flex items-center justify-center shadow-sm">
                    <FiSliders size={18} />
                  </div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">Better Matching</span>
                </div>

                <FaArrowRight size={10} className="text-brand-green" />

                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full bg-brand-green text-white flex items-center justify-center shadow-md">
                    <FiTrendingUp size={18} />
                  </div>
                  <span className="text-[8px] font-black text-brand-green uppercase tracking-wider">Better Business</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
