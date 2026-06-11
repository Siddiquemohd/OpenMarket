"use client";

import React from "react";
import Image from "next/image";
import "../globals.css";
import {
  FaLinkedin,
  FaArrowRight,
  FaCheck,
  FaUsers,
  FaStar,
  FaBuilding,
  FaHandshake,
} from "react-icons/fa";
import {
  FiShield,
  FiTrendingUp,
  FiAward,
  FiSearch,
  FiActivity,
  FiCheckCircle,
  FiUserCheck,
  FiMapPin,
  FiTarget,
  FiFlag,
  FiSliders,
  FiUsers
} from "react-icons/fi";

// Floating card helper component
function FloatingMissionCard({
  title,
  subtitle,
  dotPosition,
  className,
}: {
  title: string;
  subtitle: string;
  dotPosition: "left" | "right";
  className: string;
}) {
  return (
    <div className={`absolute bg-white/95 backdrop-blur-sm border border-[#e2eae5]/80 rounded-2xl p-1.5 sm:p-3 md:p-4 flex flex-col justify-center shadow-md z-20 hover:scale-102 hover:shadow-lg transition-all duration-300 ${className}`}>
      {/* Green Dot indicator */}
      <div
        className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0FA958] border border-white shadow-sm top-1/2 -translate-y-1/2 ${
          dotPosition === "left"
            ? "left-0 -translate-x-1/2"
            : "right-0 translate-x-1/2"
        }`}
      />
      <div className="flex flex-col text-left">
        <span className="text-[9px] sm:text-xs md:text-sm font-black text-brand-navy leading-tight mb-0.5">
          {title}
        </span>
        <span className="text-[7px] sm:text-[9.5px] md:text-xs font-bold text-slate-400 tracking-wide leading-none">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

// Value item helper component (Section 3)
function ValueItem({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-8 md:py-12 md:px-6 bg-white transition-all duration-300">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-50 border border-emerald-100/40 text-brand-green flex items-center justify-center mb-6 shadow-sm">
        {icon}
      </div>
      <h4 className="text-base md:text-lg font-extrabold text-[#0FA958] mb-3 leading-snug">
        {title}
      </h4>
      <p className="text-xs md:text-[13.5px] font-semibold text-slate-400 leading-relaxed max-w-[200px]">
        {desc}
      </p>
    </div>
  );
}

// Build item helper component (Section 4 Left)
function BuildItem({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 py-6 sm:py-7 first:pt-0 last:pb-0 border-b last:border-b-0 border-slate-100 text-left">
      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
        {icon}
      </div>
      <div className="flex flex-col">
        <h4 className="text-base sm:text-[17px] font-extrabold text-[#0FA958] mb-1.5 leading-snug">
          {title}
        </h4>
        <p className="text-xs sm:text-[13.5px] font-semibold text-slate-500 leading-relaxed max-w-xl">
          {desc}
        </p>
      </div>
    </div>
  );
}

import { useOtpModal } from "@/providers/OtpModalProvider";

export default function OurMission() {
  const { openOtpModal } = useOtpModal();
  const values = [
    {
      title: "Integrity",
      desc: "We believe in honest business and complete transparency.",
      icon: <FiShield className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Fairness",
      desc: "Equal opportunity for every business to be seen and grow.",
      icon: <FiSliders className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Trust",
      desc: "We build trust through verification, engagement, and accountability.",
      icon: <FiUserCheck className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Growth",
      desc: "We empower businesses to grow sustainably together.",
      icon: <FiTrendingUp className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      title: "Community",
      desc: "We are building a strong community of businesses and professionals.",
      icon: <FiUsers className="w-6 h-6 md:w-8 md:h-8" />
    }
  ];

  const buildItems = [
    {
      title: "A Level Playing Field",
      desc: "Where visibility is based on activity and engagement, not on advertising budgets.",
      icon: <FiSliders className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "A Trust-First Marketplace",
      desc: "Where buyers can confidently connect with verified and responsive suppliers.",
      icon: <FiShield className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "A Sustainable Ecosystem",
      desc: "Where businesses grow together by creating value, not by competing unfairly.",
      icon: <FiActivity className="w-6 h-6 sm:w-7 sm:h-7" />
    }
  ];

  const promiseItems = [
    "We will always put fairness first.",
    "We will never sell visibility.",
    "We will keep the platform transparent and accountable.",
    "We will continuously listen, learn, and improve.",
    "We will build for the long term, not for shortcuts."
  ];

  const trustStripBlocks = [
    {
      title: "Operated by",
      highlight: "Uneefy Intratech Pvt. Ltd.",
      icon: <FaBuilding className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0FA958]" />,
      iconBorder: "border-[#0FA958]/80",
      textColorClass: "text-[#0FA958]"
    },
    {
      title: "20+ Years of",
      highlight: "Industrial Experience",
      icon: <FiAward className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-navy" />,
      iconBorder: "border-brand-navy/30",
      textColorClass: "text-brand-navy"
    },
    {
      title: "Based in",
      highlight: "Navi Mumbai, Maharashtra",
      icon: <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0FA958]" />,
      iconBorder: "border-[#0FA958]/80",
      textColorClass: "text-[#0FA958]"
    },
    {
      title: "Real Founder.",
      highlight: "Real Office. Real Support.",
      icon: <FiShield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-navy" />,
      iconBorder: "border-brand-navy/30",
      textColorClass: "text-brand-navy"
    }
  ];

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">

        {/* SECTION 1: Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-3.5">
                <span className="text-brand-green text-sm font-black tracking-widest uppercase self-start">
                  OUR MISSION
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[45px] font-extrabold tracking-tight leading-[1.15] text-brand-navy mt-1">
                  Building a Fairer, <br />
                  More Transparent <br />
                  <span className="text-brand-green block mt-1.5">
                    B2B Marketplace.
                  </span>
                </h1>
              </div>

              <p className="text-sm md:text-[14.5px] font-bold text-slate-500 leading-relaxed max-w-lg">
                We exist to create a trusted B2B ecosystem where visibility is earned through activity, engagement, and authenticity—not bought.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openOtpModal()}
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-dark-green text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer focus:outline-none"
                >
                  <span>Join Waitlist</span>
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Right Column Content: Target Graphic & Floating cards with dotted lines */}
            <div className="lg:col-span-6 flex items-center justify-center py-6 lg:py-0 w-full overflow-visible">
              <div className="relative w-full max-w-[540px] h-[240px] sm:h-[300px] flex-shrink-0 select-none overflow-visible">
                
                {/* SVG Dotted Lines Overlay */}
                <svg viewBox="0 0 540 300" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {/* Outer Concentric Circle (faint guide circle) passing through dots */}
                  <circle cx="270" cy="150" r="150.3" fill="none" stroke="#e2eae5" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Inner Concentric Circle (faint guide circle) */}
                  <circle cx="270" cy="150" r="115" fill="none" stroke="#e2eae5" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Dashed Connecting Lines */}
                  {/* Top Left Line: from (146, 65) to target (approx 196, 110) */}
                  <path d="M 146 65 C 186 65, 191 90, 196 110" fill="none" stroke="#a3d6ba" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                  
                  {/* Bottom Left Line: from (146, 235) to target (approx 196, 190) */}
                  <path d="M 146 235 C 186 235, 191 210, 196 190" fill="none" stroke="#a3d6ba" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                  
                  {/* Top Right Line: from (394, 65) to target (approx 344, 110) */}
                  <path d="M 394 65 C 354 65, 349 90, 344 110" fill="none" stroke="#a3d6ba" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                  
                  {/* Bottom Right Line: from (394, 235) to target (approx 344, 190) */}
                  <path d="M 394 235 C 354 235, 349 210, 344 190" fill="none" stroke="#a3d6ba" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                </svg>

                {/* Target Image in the Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] z-10 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-brand-light-green/90 -z-10 scale-[1.15]" />
                  <Image
                    src="/target_hero1.png"
                    alt="OpenMarket Bullseye Target"
                    fill
                    sizes="(max-w-640px) 180px, 240px"
                    priority
                    className="object-contain"
                  />
                </div>

                {/* Floating Cards */}
                {/* Top Left Card */}
                <FloatingMissionCard
                  title="Fair Visibility"
                  subtitle="Earned, not bought"
                  dotPosition="right"
                  className="right-[73%] top-[21.67%] -translate-y-1/2 w-[27%]"
                />
                
                {/* Bottom Left Card */}
                <FloatingMissionCard
                  title="Stronger Businesses"
                  subtitle="Through opportunities"
                  dotPosition="right"
                  className="right-[73%] top-[78.33%] -translate-y-1/2 w-[27%]"
                />

                {/* Top Right Card */}
                <FloatingMissionCard
                  title="Trusted Connections"
                  subtitle="Built on credibility"
                  dotPosition="left"
                  className="left-[73%] top-[21.67%] -translate-y-1/2 w-[27%]"
                />

                {/* Bottom Right Card */}
                <FloatingMissionCard
                  title="Long-Term Impact"
                  subtitle="For the industry"
                  dotPosition="left"
                  className="left-[73%] top-[78.33%] -translate-y-1/2 w-[27%]"
                />

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: Mission statement band */}
        <section className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-[#f7fbf8] border border-[#e2eae5]/80 rounded-2xl px-6 py-5 sm:px-10 sm:py-7 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              
              {/* Left Icon & Title */}
              <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0FA958] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
                    <path d="M2 20 L9 11 L16 20" />
                    <path d="M12 20 L16 15 L20 20" />
                    <path d="M9 11 V5" />
                    <path d="M9 5 H14 L12.5 7.5 L14 10 H9" fill="none" />
                    <path d="M1 20 H23" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0FA958] whitespace-nowrap">
                  Our Mission
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:block h-14 w-[1.5px] bg-slate-200/80 flex-shrink-0" />

              {/* Mission Text */}
              <p className="text-[14px] sm:text-[16px] md:text-[17px] font-bold text-brand-navy/90 leading-relaxed text-left flex-grow max-w-3xl lg:px-6">
                To build India's most <span className="font-extrabold text-brand-navy">trusted</span> B2B marketplace that promotes <span className="font-extrabold text-brand-navy">fair trade</span>, rewards <span className="font-extrabold text-brand-navy">genuine</span> businesses, and helps buyers connect with <span className="font-extrabold text-brand-navy">reliable and responsive suppliers</span>.
              </p>

              {/* Right Mountain climbing illustration */}
              <div className="hidden sm:block flex-shrink-0">
                <svg width="190" height="88" viewBox="0 0 150 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0FA958]/80 w-[160px] h-[75px] sm:w-[190px] sm:h-[88px]">
                  {/* Faint ground line */}
                  <path d="M 5 65 H 145" stroke="#e2eae5" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Main mountain shape */}
                  <path d="M 35 65 L 95 20 L 135 65" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Ridge lines */}
                  <path d="M 95 20 L 80 40 L 88 55" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 95 20 L 105 38" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                  
                  {/* Left smaller mountain */}
                  <path d="M 15 65 L 50 48 L 75 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Right smaller mountain */}
                  <path d="M 100 65 L 122 52 L 140 65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Flag at the peak */}
                  <path d="M 95 20 V 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 95 5 H 108 L 105 8.5 L 108 12 H 95" fill="currentColor" opacity="0.9" />

                  {/* Person 1 (holding flag, helping Person 2) */}
                  {/* Head */}
                  <circle cx="91" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  {/* Torso */}
                  <path d="M 91 16.5 V 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Arm holding flag */}
                  <path d="M 91 17 H 95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Reaching hand */}
                  <path d="M 91 17.5 L 83.5 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Legs */}
                  <path d="M 91 20.5 L 89 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 91 20.5 L 93.5 24.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Person 2 (climbing and reaching up) */}
                  {/* Head */}
                  <circle cx="75.5" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  {/* Torso */}
                  <path d="M 75.5 32.5 L 72.5 37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Reaching arm */}
                  <path d="M 75.5 33 L 83 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Back arm */}
                  <path d="M 75.5 33 L 71.5 34.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Legs */}
                  <path d="M 72.5 37 L 68 41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 72.5 37 L 76.5 40.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Clouds */}
                  {/* Left Cloud */}
                  <path d="M 12 32 A 3 3 0 0 1 15 29 A 5 5 0 0 1 23 28 A 3 3 0 0 1 26 31 L 27 32" stroke="#ccd9d0" strokeWidth="1.25" strokeLinecap="round" />
                  {/* Right Cloud */}
                  <path d="M 122 41 A 2.5 2.5 0 0 1 124.5 38.5 A 4 4 0 0 1 131 37.5 A 2.5 2.5 0 0 1 133.5 40 L 134 41" stroke="#ccd9d0" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: Our Core Values */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Centered header with side lines */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-4 w-full max-w-2xl mb-4">
                <div className="flex-grow h-[1.5px] bg-slate-200" />
                <h2 className="text-lg md:text-xl font-extrabold text-brand-navy tracking-tight text-center uppercase whitespace-nowrap px-2">
                  Our Core Values
                </h2>
                <div className="flex-grow h-[1.5px] bg-slate-200" />
              </div>
            </div>

            {/* Grid with vertical dividers */}
            <div className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 lg:divide-x divide-slate-100">
                {values.map((v, idx) => (
                  <ValueItem
                    key={idx}
                    title={v.title}
                    desc={v.desc}
                    icon={v.icon}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: What We’re Building */}
        <section className="bg-white py-16 md:py-20 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Centered header with side lines */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-4 w-full max-w-2xl mb-4">
                <div className="flex-grow h-[1.5px] bg-slate-200" />
                <h2 className="text-lg md:text-xl font-extrabold text-brand-navy tracking-tight text-center uppercase whitespace-nowrap px-2">
                  What We’re Building
                </h2>
                <div className="flex-grow h-[1.5px] bg-slate-200" />
              </div>
            </div>
 
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Stacked build items */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex flex-col">
                  {buildItems.map((item, idx) => (
                    <BuildItem
                      key={idx}
                      title={item.title}
                      desc={item.desc}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </div>
 
              {/* Right Column: Promise Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#f8fbf9] border border-[#e2eae5]/60 rounded-3xl p-8 sm:p-10 shadow-sm text-left h-full relative overflow-hidden flex flex-col justify-between min-h-[360px]">
                  
                  {/* Floating handshake icon card */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white border border-[#e2eae5]/40 shadow-sm flex items-center justify-center text-brand-green">
                    <FaHandshake className="w-6 h-6" />
                  </div>
 
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0FA958] mb-6 flex items-center gap-1.5">
                      <span>Our Promise</span>
                    </h3>
 
                    {/* Checklist */}
                    <div className="flex flex-col gap-5">
                      {promiseItems.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-3.5">
                          <span className="w-6 h-6 rounded-full bg-white border border-brand-green text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                            <FaCheck size={8} />
                          </span>
                          <span className="text-xs sm:text-[14px] font-bold text-brand-navy leading-normal">
                            {tip}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
 
                </div>
              </div>
 
            </div>
 
          </div>
        </section>

        {/* SECTION 5: Founder quote section */}
        <section className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-[#f7fbf8] border border-[#e2eae5]/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:items-stretch">
              
              {/* Left Founder image with background */}
              <div className="lg:col-span-3 flex justify-center items-end relative overflow-hidden h-[200px] sm:h-[220px] lg:h-full lg:-mb-10 lg:-ml-10 lg:-mr-0 lg:self-end">
                {/* Pale green semicircle background */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[120px] w-[240px] sm:h-[130px] sm:w-[260px] rounded-t-full bg-[#d6f0e3]" />
                <div className="relative z-10 w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[240px] lg:h-[240px] select-none">
                  <Image
                    src="/founder2.png"
                    alt="Kiran Pailwan"
                    fill
                    sizes="(max-w-768px) 220px, 240px"
                    priority
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              {/* Center Quote block */}
              <div className="lg:col-span-6 flex flex-col justify-center text-left py-4 lg:py-0 lg:px-4">
                <span className="text-[44px] font-serif text-[#0FA958] leading-none mb-1 opacity-70">
                  “
                </span>
                <p className="text-base sm:text-lg md:text-[17.5px] font-bold text-brand-navy/90 leading-relaxed pl-1">
                  OpenMarket is more than a marketplace. It’s a movement towards fair trade, trust, and long-term success for every business.
                </p>
              </div>

              {/* Right Profile details and signature */}
              <div className="lg:col-span-3 flex flex-col justify-center items-center text-center lg:border-l border-slate-200/80 lg:pl-8 py-2">
                <div className="flex flex-col items-center">
                  <span className="text-base sm:text-[17px] font-black text-brand-navy">Kiran Pailwan</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-400 mt-1">Founder, OpenMarket</span>
                </div>
                
                {/* Signature cursive graphic */}
                <div className="font-serif italic text-2xl sm:text-3xl text-slate-400 mt-3 select-none">
                  K. Pailwan
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: Trust strip */}
        <section className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-[#f7fbf8] border border-[#e2eae5]/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-6 sm:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center py-2">
              {trustStripBlocks.map((block, idx) => (
                <div key={idx} className="flex items-center gap-4 text-left">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border ${block.iconBorder} flex items-center justify-center shadow-sm flex-shrink-0`}>
                    {block.icon}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[9.5px] sm:text-[11px] font-black text-slate-400 uppercase tracking-wider">
                      {block.title}
                    </span>
                    <span className={`text-sm sm:text-base md:text-[16.5px] font-extrabold ${block.textColorClass} mt-1 leading-snug`}>
                      {block.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
 
            {/* Address line below grid */}
            <div className="border-t border-[#e2eae5]/80 pt-6 flex items-center justify-center gap-2.5 text-center text-slate-500 font-semibold text-xs sm:text-sm md:text-[14.5px]">
              <FiMapPin className="text-[#0FA958] mt-0.5 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
              <span>S-33, 2nd Floor, Fantasia Business Park Premises, Vashi, Navi Mumbai - 400703, Maharashtra, India</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
