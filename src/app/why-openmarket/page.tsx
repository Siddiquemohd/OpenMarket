"use client";

import React from "react";
import Link from "next/link";
import "../globals.css";
import {
  FaCheck,
  FaUsers,
  FaStar,
  FaHandshake,
  FaBuilding,
  FaStore,
  FaShoppingBag,
  FaBalanceScale,
  FaArrowRight,
  FaArrowLeft,
  FaBrain,
  FaPen,
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
  FiStar,
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

// Custom SVG Icons matching the mockup exactly
function RegisterIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] text-[#0055CC] relative z-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8h22l14 14v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" />
      <circle cx="32" cy="22" r="5" />
      <path d="M22 36c0-4 4-6 8-6s8 2 8 6" />
      <line x1="20" y1="44" x2="44" y2="44" />
      <line x1="20" y1="50" x2="36" y2="50" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] text-[#0055CC] flex-shrink-0" fill="currentColor">
      <rect x="10" y="16" width="16" height="40" rx="2" />
      <rect x="28" y="28" width="16" height="28" rx="2" />
      <g fill="white">
        <rect x="14" y="22" width="3" height="4" rx="0.5" />
        <rect x="19" y="22" width="3" height="4" rx="0.5" />
        <rect x="14" y="30" width="3" height="4" rx="0.5" />
        <rect x="19" y="30" width="3" height="4" rx="0.5" />
        <rect x="14" y="38" width="3" height="4" rx="0.5" />
        <rect x="19" y="38" width="3" height="4" rx="0.5" />
        <rect x="14" y="46" width="3" height="4" rx="0.5" />
        <rect x="19" y="46" width="3" height="4" rx="0.5" />
      </g>
      <g fill="white">
        <rect x="32" y="34" width="3" height="4" rx="0.5" />
        <rect x="37" y="34" width="3" height="4" rx="0.5" />
        <rect x="32" y="42" width="3" height="4" rx="0.5" />
        <rect x="37" y="42" width="3" height="4" rx="0.5" />
        <rect x="32" y="50" width="3" height="4" rx="0.5" />
        <rect x="37" y="50" width="3" height="4" rx="0.5" />
      </g>
      <path d="M48 16l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2z" />
      <path d="M54 26l0.8 1.8 1.8 0.8-1.8 0.8-0.8 1.8-0.8-1.8-1.8-0.8 1.8-0.8z" />
    </svg>
  );
}

function TrendsIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] text-[#0055CC]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="38" width="6" height="12" rx="1" fill="#0055CC" stroke="none" />
      <rect x="26" y="28" width="6" height="22" rx="1" fill="#0055CC" stroke="none" />
      <rect x="38" y="18" width="6" height="32" rx="1" fill="#0055CC" stroke="none" />
      <path d="M14 32l14-14 16 16 12-12" stroke="#0055CC" strokeWidth="3" />
      <path d="M50 22h6v6" stroke="#0055CC" strokeWidth="3" />
    </svg>
  );
}

function CpuAiIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] text-[#007b3e]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="32" height="32" rx="6" />
      <rect x="22" y="22" width="20" height="20" rx="3" />
      <line x1="26" y1="10" x2="26" y2="16" />
      <line x1="32" y1="10" x2="32" y2="16" />
      <line x1="38" y1="10" x2="38" y2="16" />
      <line x1="26" y1="48" x2="26" y2="54" />
      <line x1="32" y1="48" x2="32" y2="54" />
      <line x1="38" y1="48" x2="38" y2="54" />
      <line x1="10" y1="26" x2="16" y2="26" />
      <line x1="10" y1="32" x2="16" y2="32" />
      <line x1="10" y1="38" x2="16" y2="38" />
      <line x1="48" y1="26" x2="54" y2="26" />
      <line x1="48" y1="32" x2="54" y2="32" />
      <line x1="48" y1="38" x2="54" y2="38" />
      <text x="32" y="35" textAnchor="middle" fill="#007b3e" fontSize="10.5" fontWeight="bold" fontFamily="system-ui" stroke="none">AI</text>
    </svg>
  );
}

function SearchIconCustom() {
  return (
    <svg viewBox="0 0 64 64" className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] text-[#007b3e]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="26" cy="26" r="13" />
      <line x1="36" y1="36" x2="50" y2="50" strokeWidth="4.5" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#0055CC] flex-shrink-0">
      <path d="M12 3c-.1 4-3.1 7-7 7.1 3.9.1 6.9 3.1 7 7 .1-3.9 3.1-6.9 7-7.1-3.9-.1-6.9-3.1-7-7z" />
      <path d="M19 13c-.03 1.5-1.12 2.6-2.6 2.6 1.5.03 2.6 1.12 2.6 2.6.03-1.5 1.12-2.6 2.6-2.6-1.5-.03-2.6-1.12-2.6-2.6z" />
    </svg>
  );
}

function PenIconCustom() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#0055CC] flex-shrink-0">
      <path d="M17.8 2.2c-.4-.4-1-.4-1.4 0L14 4.6l5.4 5.4 2.4-2.4c.4-.4.4-1 0-1.4l-4-4zM12.6 6L3 15.6V21h5.4L18 11.4 12.6 6z" />
    </svg>
  );
}

function GridIconCustom() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#0055CC] flex-shrink-0">
      <circle cx="5" cy="5" r="2.2" />
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="19" cy="5" r="2.2" />
      <circle cx="5" cy="12" r="2.2" />
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="19" cy="12" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="12" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
    </svg>
  );
}

function ImageIconCustom() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-[#0055CC] flex-shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor" className="text-[#0055CC]/10" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

export default function HowItWorks() {
  const { openOtpModal } = useOtpModal();

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">

        {/* SECTION 1: Page Header */}
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-8 md:pt-14 md:pb-10 text-center">
          <h1 className="text-hero-title text-brand-navy leading-tight mb-4">
            How It{" "}
            <span className="relative inline-block">
              Works
              <span className="absolute bottom-0.5 left-0 w-full h-[4.5px] bg-brand-green rounded-full opacity-90" />
            </span>
          </h1>
          <p className="text-brand-green font-extrabold text-sm md:text-base leading-relaxed tracking-wider uppercase mb-3">
            OpenMarket is built on activity and trust.
          </p>
          <p className="text-slate-500 font-bold text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Our platform rewards businesses that participate actively, respond quickly, and maintain complete profiles. Here is how our ecosystem works.
          </p>
        </section>

        {/* SECTION 2: 5-Step Process Map (Mockup Layout) */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 border border-slate-100 bg-slate-50/30 rounded-[32px]">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-3 w-full relative">

            {/* Step 01 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px] lg:max-w-[15%]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-[#0055CC] text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                01
              </div>
              {/* Icon Circle */}
              <div className="relative w-[72px] h-[72px] rounded-full bg-white border border-slate-200/50 flex items-center justify-center mb-4">
                <RegisterIcon />
                <div className="absolute bottom-[-1px] right-[-1px] w-[21px] h-[21px] rounded-full bg-[#0055CC] text-white border-[2.5px] border-white flex items-center justify-center shadow-sm">
                  <FaCheck size={7} />
                </div>
              </div>
              <h3 className="text-[14.5px] font-black text-brand-navy mb-2">
                Register Your Business
              </h3>
              <p className="text-[12px] font-bold text-slate-400 leading-relaxed">
                Create your business profile in just a few minutes.
              </p>
            </div>

            {/* Connecting Arrow 1 */}
            <div className="flex items-center justify-center flex-shrink-0 lg:mt-12">
              <FiArrowRightIcon className="hidden lg:block text-slate-300 w-4 h-4" />
              <FiArrowDown className="block lg:hidden text-slate-300 w-4 h-4 my-2" />
            </div>

            {/* Step 02 - Highlighted Card */}
            <div className="flex-shrink-0 w-full lg:w-[41%] bg-[#f4f7fb] border border-[#e2eaf4] rounded-[24px] p-5 relative shadow-[0_2px_12px_rgba(0,0,0,0.02)] my-4 lg:my-0">
              {/* Number tag sitting on the top border */}
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0055CC] text-white font-extrabold text-[12px] flex items-center justify-center shadow-sm border border-[#f4f7fb] z-10">
                02
              </div>

              <div className="flex flex-col gap-4 h-full justify-between">
                {/* Header Row */}
                <div className="flex items-start gap-4 text-left">
                  <BuildingIcon />
                  <div className="flex flex-col">
                    <h3 className="text-[17px] font-black text-brand-navy leading-tight">
                      Build Your Profile with AI Tools
                    </h3>
                    <p className="text-[11.5px] font-bold text-slate-500 leading-relaxed mt-1">
                      Add your business details, products, services, certifications, images and more.
                    </p>
                  </div>
                </div>

                {/* AI Features Grid */}
                <div className="flex flex-row justify-between items-center pt-3 border-t border-slate-200/50 gap-1 md:gap-2">
                  
                  {/* Feature 1 */}
                  <div className="flex items-center gap-1.5 text-left flex-1 min-w-0">
                    <SparkleIcon />
                    <div className="flex flex-col min-w-0 leading-[1.1]">
                      <span className="text-[9.5px] font-black text-brand-navy whitespace-nowrap">AI Profile</span>
                      <span className="text-[9.5px] font-black text-brand-navy whitespace-nowrap">Assistant</span>
                    </div>
                  </div>

                  {/* Divider 1 */}
                  <div className="w-[1px] h-7 bg-slate-200/80 mx-0.5 md:mx-1 flex-shrink-0" />

                  {/* Feature 2 */}
                  <div className="flex items-center gap-1.5 text-left flex-1 min-w-0">
                    <PenIconCustom />
                    <div className="flex flex-col min-w-0 leading-[1.1]">
                      <span className="text-[9.5px] font-black text-brand-navy whitespace-nowrap">AI Product</span>
                      <span className="text-[9.5px] font-black text-brand-navy whitespace-nowrap">Writer</span>
                    </div>
                  </div>

                  {/* Divider 2 */}
                  <div className="w-[1px] h-7 bg-slate-200/80 mx-0.5 md:mx-1 flex-shrink-0" />

                  {/* Feature 3 */}
                  <div className="flex items-center gap-1.5 text-left flex-1 min-w-0">
                    <GridIconCustom />
                    <div className="flex flex-col min-w-0 leading-[1.1]">
                      <span className="text-[9.5px] font-black text-brand-navy whitespace-nowrap">Smart Category</span>
                      <span className="text-[9.5px] font-black text-brand-navy whitespace-nowrap">Suggestion</span>
                    </div>
                  </div>

                  {/* Divider 3 */}
                  <div className="w-[1px] h-7 bg-slate-200/80 mx-0.5 md:mx-1 flex-shrink-0" />

                  {/* Feature 4 */}
                  <div className="flex items-center gap-1.5 text-left flex-1 min-w-0">
                    <ImageIconCustom />
                    <div className="flex flex-col min-w-0 leading-[1.1]">
                      <span className="text-[9.5px] font-black text-brand-navy whitespace-nowrap">Image</span>
                      <span className="text-[9.5px] font-black text-brand-navy whitespace-nowrap">Enhancer</span>
                    </div>
                  </div>

                </div>

                {/* Tags Pill Bar */}
                <div className="w-full bg-[#e8eff7] rounded-full py-1.5 px-3 text-center text-[10px] font-black text-[#0055CC] flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <span>Products</span>
                  <span className="text-slate-400">•</span>
                  <span>Services</span>
                  <span className="text-slate-400">•</span>
                  <span>Certifications</span>
                  <span className="text-slate-400">•</span>
                  <span>Images</span>
                  <span className="text-slate-400">•</span>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Connecting Arrow 2 */}
            <div className="flex items-center justify-center flex-shrink-0 lg:mt-12">
              <FiArrowRightIcon className="hidden lg:block text-slate-300 w-4 h-4" />
              <FiArrowDown className="block lg:hidden text-slate-300 w-4 h-4 my-2" />
            </div>

            {/* Step 03 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px] lg:max-w-[15%]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-[#0055CC] text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                03
              </div>
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-slate-200/50 flex items-center justify-center mb-4">
                <TrendsIcon />
              </div>
              <h3 className="text-[14.5px] font-black text-brand-navy mb-2">
                Stay Active & Engaged
              </h3>
              <p className="text-[12px] font-bold text-slate-400 leading-relaxed">
                Update information, respond to enquiries and engage regularly.
              </p>
            </div>

            {/* Connecting Arrow 3 */}
            <div className="flex items-center justify-center flex-shrink-0 lg:mt-12">
              <FiArrowRightIcon className="hidden lg:block text-slate-300 w-4 h-4" />
              <FiArrowDown className="block lg:hidden text-slate-300 w-4 h-4 my-2" />
            </div>

            {/* Step 04 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px] lg:max-w-[15%]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-[#007b3e] text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                04
              </div>
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-emerald-100 flex items-center justify-center mb-4">
                <CpuAiIcon />
              </div>
              <h3 className="text-[14.5px] font-black text-brand-navy mb-2">
                AI Matches & Ranks
              </h3>
              <p className="text-[12px] font-bold text-slate-400 leading-relaxed">
                Our AI understands buyer needs and ranks businesses based on activity, relevance and trust.
              </p>
            </div>

            {/* Connecting Arrow 4 */}
            <div className="flex items-center justify-center flex-shrink-0 lg:mt-12">
              <FiArrowRightIcon className="hidden lg:block text-slate-300 w-4 h-4" />
              <FiArrowDown className="block lg:hidden text-slate-300 w-4 h-4 my-2" />
            </div>

            {/* Step 05 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px] lg:max-w-[15%]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-[#007b3e] text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                05
              </div>
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-emerald-100 flex items-center justify-center mb-4">
                <SearchIconCustom />
              </div>
              <h3 className="text-[14.5px] font-black text-brand-navy mb-2">
                Buyers Discover You
              </h3>
              <p className="text-[12px] font-bold text-slate-400 leading-relaxed">
                Buyers find relevant businesses and connect directly with you.
              </p>
            </div>

          </div>

          {/* Connections bar underneath process steps */}
          <div className="mt-12 border-t border-slate-200/60 pt-8 max-w-xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center gap-1.5 bg-[#f4f8fc] border border-brand-blue/15 rounded-2xl px-6 py-3.5 shadow-sm">
              <div className="text-brand-blue flex items-center gap-2">
                <FaHandshake size={22} className="animate-pulse" />
                <span className="text-[13px] font-black uppercase tracking-wider">Direct Enquiries. No Routing. No Interference.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: How Ranking Works (VS Comparison) */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-brand-green tracking-widest uppercase block mb-1">
              THE OPENMARKET DIFFERENCE
            </span>
            <h2 className="text-h2 text-brand-navy">
              How Ranking Works
            </h2>
            <div className="h-[2px] w-8 bg-brand-green mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full max-w-6xl mx-auto">

            {/* Traditional Card (Payment-Driven) */}
            <div className="border border-red-100 bg-[#fffbfc] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 h-full min-h-[160px] sm:min-h-[180px]">
              <span className="text-xs sm:text-sm font-black text-red-500 tracking-widest uppercase text-center block mb-4">
                Traditional Marketplaces (Payment-Driven)
              </span>

              <div className="flex items-center justify-center gap-6 py-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-50 border border-red-100 text-red-500 flex items-center justify-center font-extrabold text-sm sm:text-base shadow-sm hover:scale-105 transition-transform">
                    ₹
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-wider">Pay More</span>
                </div>

                <FaArrowRight size={14} className="text-slate-300 animate-pulse" />

                <div className="flex flex-col items-center gap-2">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-50 border border-red-100 text-red-500 flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                    <FiEye size={18} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-wider">Higher Visibility</span>
                </div>
              </div>

              <div className="bg-red-50/60 border-t border-red-100 rounded-b-[24px] py-3 flex items-center justify-center gap-1.5 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8">
                <FiXCircle className="text-red-500" size={16} />
                <span className="text-[11px] sm:text-[12px] font-black text-red-500 tracking-wide uppercase">
                  Visibility depends on payment
                </span>
              </div>
            </div>

            {/* OpenMarket Card (Activity-Driven) */}
            <div className="border border-brand-green/20 bg-brand-light-green/30 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 h-full min-h-[160px] sm:min-h-[180px]">
              <span className="text-xs sm:text-sm font-black text-brand-green tracking-widest uppercase text-center block mb-4">
                OpenMarket (Activity-Driven)
              </span>

              {/* Horizontal chain flow wrapper */}
              <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 py-4">
                {[
                  { label: "Complete Profile", icon: <FiUserCheck size={18} /> },
                  { label: "Updated Info", icon: <FiFileText size={18} /> },
                  { label: "Quick Responses", icon: <FiMessageSquare size={18} /> },
                  { label: "Marketplace Activity", icon: <FiTrendingUp size={18} /> },
                  { label: "Meaningful Participation", icon: <FaStar size={18} /> },
                ].map((node, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full bg-white border border-brand-green/20 text-brand-green flex items-center justify-center shadow-sm flex-shrink-0 hover:scale-105 transition-transform">
                        {node.icon}
                      </div>
                      <span className="text-[9.5px] sm:text-[10.5px] font-black text-slate-500 uppercase text-center max-w-[52px] sm:max-w-[60px] leading-tight">
                        {node.label}
                      </span>
                    </div>
                    {idx < arr.length - 1 && (
                      <span className="text-slate-400 font-black text-[14px] sm:text-[16px] self-start mt-[14px] sm:mt-[15px] flex-shrink-0">+</span>
                    )}
                  </React.Fragment>
                ))}

                <FaArrowRight size={14} className="text-brand-green self-start mt-[14px] sm:mt-[15px] animate-pulse flex-shrink-0" />

                {/* Output Node */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] rounded-full bg-brand-green text-white flex items-center justify-center shadow-md flex-shrink-0 hover:scale-105 transition-transform">
                    <FiAward size={20} />
                  </div>
                  <span className="text-[9.5px] sm:text-[10.5px] font-black text-brand-green uppercase text-center max-w-[52px] sm:max-w-[60px] leading-tight">
                    Higher Visibility
                  </span>
                </div>
              </div>

              <div className="bg-[#eefcf4] border-t border-brand-green/10 rounded-b-[24px] py-3 flex items-center justify-center gap-1.5 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8">
                <FiCheckCircle className="text-brand-green" size={16} />
                <span className="text-[11px] sm:text-[12px] font-black text-brand-green tracking-wide uppercase">
                  Visibility is earned through contribution
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: Benefits for Sellers & Buyers (Horizontal Grid Layout) */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          <div className="bg-[#f7fbf8]/50 border border-[#e2eae5]/80 rounded-[32px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col gap-10 items-stretch">

            {/* Upper half: Grid layout for Sellers & Buyers side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">

              {/* Left Column: Sellers Benefits with Horizontal Icons */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start gap-1">
                  <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase">
                    GROW YOUR ACCESS
                  </span>
                  <h3 className="text-h3 text-brand-navy uppercase tracking-wider">
                    Benefits for Sellers
                  </h3>
                  <div className="h-[2px] w-8 bg-brand-blue mt-1" />
                </div>

                {/* Horizontal row of 5 Seller benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { text: "Earn visibility fairly", icon: <FiEye size={20} /> },
                    { text: "Reach relevant buyers", icon: <FaUsers size={20} /> },
                    { text: "Build trust with profiles", icon: <FiShield size={20} /> },
                    { text: "Grow your business", icon: <FiTrendingUp size={20} /> },
                    { text: "Direct connections", icon: <FiLink size={20} /> },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2.5 p-2 rounded-xl bg-white border border-slate-100 hover:scale-102 transition-transform shadow-[0_1px_4px_rgba(0,0,0,0.01)]">
                      <div className="w-12 h-12 rounded-full bg-[#f4f8fc] border border-brand-blue/15 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                        {item.icon}
                      </div>
                      <span className="text-[11.5px] font-bold text-slate-500 leading-snug">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central checkmark badge logo */}
              <div className="flex justify-center select-none py-2 lg:py-0">
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[5px] border-brand-navy bg-white shadow-md flex items-center justify-center flex-shrink-0">
                  <LogoCheckmark size={40} checkColor="#0FA958" circleColor="#0B3C5F" />
                  {/* Left pointing arrow */}
                  <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-white border border-slate-100 shadow-sm text-brand-blue">
                    <FaArrowLeft size={8} />
                  </div>
                  {/* Right pointing arrow */}
                  <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-white border border-slate-100 shadow-sm text-brand-green">
                    <FaArrowRight size={8} />
                  </div>
                </div>
              </div>

              {/* Right Column: Buyers Benefits with Horizontal Icons */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start gap-1">
                  <span className="text-[10px] font-black text-brand-green tracking-widest uppercase">
                    SIMPLIFIED SOURCING
                  </span>
                  <h3 className="text-h3 text-brand-navy uppercase tracking-wider">
                    Benefits for Buyers
                  </h3>
                  <div className="h-[2px] w-8 bg-brand-green mt-1" />
                </div>

                {/* Horizontal row of 5 Buyer benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { text: "Find suppliers faster", icon: <FiSearch size={20} /> },
                    { text: "AI matching tool", icon: <FiCpu size={20} /> },
                    { text: "Work with active sellers", icon: <FiUserCheck size={20} /> },
                    { text: "Direct communications", icon: <FiMessageSquare size={20} /> },
                    { text: "Trusted transactions", icon: <FiLock size={20} /> },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2.5 p-2 rounded-xl bg-white border border-slate-100 hover:scale-102 transition-transform shadow-[0_1px_4px_rgba(0,0,0,0.01)]">
                      <div className="w-12 h-12 rounded-full bg-[#f4faf6] border border-brand-green/15 text-brand-green flex items-center justify-center flex-shrink-0 shadow-sm">
                        {item.icon}
                      </div>
                      <span className="text-[11.5px] font-bold text-slate-500 leading-snug">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 5: Navy Pillars band */}
        <section className="bg-brand-navy text-white py-10 md:py-14 mt-6">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-base font-black text-brand-green tracking-wide uppercase mb-2">
                Activity Drives Visibility
              </h4>
              <p className="text-xs text-slate-300 font-bold leading-relaxed max-w-[220px] mx-auto">
                No pay-to-play. The more active and responsive you are, the higher you rank.
              </p>
            </div>
            <div>
              <h4 className="text-base font-black text-brand-blue tracking-wide uppercase mb-2">
                AI-Powered Matching
              </h4>
              <p className="text-xs text-slate-300 font-bold leading-relaxed max-w-[220px] mx-auto">
                Smart algorithm maps buyer queries directly to most capable suppliers.
              </p>
            </div>
            <div>
              <h4 className="text-base font-black text-brand-green tracking-wide uppercase mb-2">
                Fair & Transparent
              </h4>
              <p className="text-xs text-slate-300 font-bold leading-relaxed max-w-[220px] mx-auto">
                Equal ground for startups and established industrial leaders.
              </p>
            </div>
            <div>
              <h4 className="text-base font-black text-brand-blue tracking-wide uppercase mb-2">
                Open for All Businesses
              </h4>
              <p className="text-xs text-slate-300 font-bold leading-relaxed max-w-[220px] mx-auto">
                Building India&apos;s strongest community of genuine manufacturers & buyers.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
