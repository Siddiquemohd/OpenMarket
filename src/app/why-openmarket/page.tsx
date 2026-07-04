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

export default function HowItWorks() {
  const { openOtpModal } = useOtpModal();

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">
        
        {/* SECTION 1: Page Header */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-brand-navy leading-tight mb-4">
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
        <section className="max-w-7xl mx-auto px-6 py-10 border-t border-slate-100 bg-slate-50/50">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-4 w-full relative">
            
            {/* Step 01 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-brand-blue text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                01
              </div>
              {/* Icon Circle */}
              <div className="relative w-[72px] h-[72px] rounded-full bg-white border border-slate-200/80 text-brand-blue flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.04)] mb-4 hover:scale-103 transition-transform flex-shrink-0">
                <FiFileText size={28} />
                <div className="absolute bottom-[-2px] right-[-2px] w-5.5 h-5.5 rounded-full bg-brand-blue text-white border-[2.5px] border-white flex items-center justify-center shadow-sm">
                  <FaCheck size={8} />
                </div>
              </div>
              <h3 className="text-[16px] font-black text-brand-navy mb-2">
                Register Your Business
              </h3>
              <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                Create your business profile in just a few minutes.
              </p>
            </div>

            {/* Connecting Arrow 1 */}
            <div className="flex items-center justify-center self-center flex-shrink-0 lg:mt-12">
              <FiArrowRightIcon className="hidden lg:block text-slate-300 w-5.5 h-5.5" />
              <FiArrowDown className="block lg:hidden text-slate-300 w-5.5 h-5.5 my-2" />
            </div>

            {/* Step 02 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-brand-blue text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                02
              </div>
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-slate-200/80 text-brand-blue flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.04)] mb-4 hover:scale-103 transition-transform flex-shrink-0">
                <FaBuilding size={28} />
              </div>
              <h3 className="text-[16px] font-black text-brand-navy mb-2">
                Build Profile with AI
              </h3>
              <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                Add your business details, products, and services using our smart AI tools.
              </p>
            </div>

            {/* Connecting Arrow 2 */}
            <div className="flex items-center justify-center self-center flex-shrink-0 lg:mt-12">
              <FiArrowRightIcon className="hidden lg:block text-slate-300 w-5.5 h-5.5" />
              <FiArrowDown className="block lg:hidden text-slate-300 w-5.5 h-5.5 my-2" />
            </div>

            {/* Step 03 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-brand-blue text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                03
              </div>
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-slate-200/80 text-brand-blue flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.04)] mb-4 hover:scale-103 transition-transform flex-shrink-0">
                <FiTrendingUp size={28} />
              </div>
              <h3 className="text-[16px] font-black text-brand-navy mb-2">
                Stay Active & Engaged
              </h3>
              <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                Update information, respond to enquiries and engage regularly.
              </p>
            </div>

            {/* Connecting Arrow 3 */}
            <div className="flex items-center justify-center self-center flex-shrink-0 lg:mt-12">
              <FiArrowRightIcon className="hidden lg:block text-slate-300 w-5.5 h-5.5" />
              <FiArrowDown className="block lg:hidden text-slate-300 w-5.5 h-5.5 my-2" />
            </div>

            {/* Step 04 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-brand-green text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                04
              </div>
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-slate-200/80 text-brand-green flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.04)] mb-4 hover:scale-103 transition-transform flex-shrink-0">
                <FiCpu size={28} />
              </div>
              <h3 className="text-[16px] font-black text-brand-navy mb-2">
                AI Matches & Ranks
              </h3>
              <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                Our AI understands buyer needs and ranks businesses based on activity, relevance and trust.
              </p>
            </div>

            {/* Connecting Arrow 4 */}
            <div className="flex items-center justify-center self-center flex-shrink-0 lg:mt-12">
              <FiArrowRightIcon className="hidden lg:block text-slate-300 w-5.5 h-5.5" />
              <FiArrowDown className="block lg:hidden text-slate-300 w-5.5 h-5.5 my-2" />
            </div>

            {/* Step 05 */}
            <div className="flex-grow flex-1 flex flex-col items-center text-center max-w-[200px]">
              {/* Number tag */}
              <div className="w-7 h-7 rounded-full bg-brand-green text-white font-extrabold text-[12px] flex items-center justify-center mb-3.5 shadow-sm">
                05
              </div>
              {/* Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-slate-200/80 text-brand-green flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.04)] mb-4 hover:scale-103 transition-transform flex-shrink-0">
                <FiSearch size={28} />
              </div>
              <h3 className="text-[16px] font-black text-brand-navy mb-2">
                Close the Deal Directly
              </h3>
              <p className="text-[12.5px] font-bold text-slate-400 leading-relaxed">
                Connect directly with matched buyers/sellers and finalize terms.
              </p>
            </div>

          </div>

          {/* Connections bar underneath process steps */}
          <div className="mt-12 border-t border-slate-200/60 pt-8 max-w-xl mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center gap-1.5 bg-[#f4f8fc] border border-brand-blue/15 rounded-2xl px-6 py-3.5 shadow-sm">
              <div className="text-brand-blue flex items-center gap-2">
                <FaHandshake size={22} className="animate-pulse" />
                <span className="text-[13px] font-black uppercase tracking-wider">Direct connection, no commission charges</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: How Ranking Works (VS Comparison) */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-brand-green tracking-widest uppercase block mb-1">
              THE OPENMARKET DIFFERENCE
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-navy">
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
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-[#f7fbf8]/50 border border-[#e2eae5]/80 rounded-[32px] p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col gap-10 items-stretch">
            
            {/* Upper half: Grid layout for Sellers & Buyers side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
              
              {/* Left Column: Sellers Benefits with Horizontal Icons */}
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start gap-1">
                  <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase">
                    GROW YOUR ACCESS
                  </span>
                  <h3 className="text-lg font-black text-brand-navy uppercase tracking-wider">
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
                  <LogoCheckmark size={40} checkColor="#0B3C5F" circleColor="#0FA958" />
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
                  <h3 className="text-lg font-black text-brand-navy uppercase tracking-wider">
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
        <section className="bg-brand-navy text-white py-12 mt-8">
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
