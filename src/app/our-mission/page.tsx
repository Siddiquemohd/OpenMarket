"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import {
  FaLinkedin,
  FaArrowRight,
  FaCheck,
  FaUsers,
  FaStar,
  FaHandshake,
  FaGraduationCap,
  FaBriefcase,
  FaWhatsapp,
  FaYoutube,
  FaStore,
  FaShoppingBag,
  FaBalanceScale,
  FaLeaf,
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
} from "react-icons/fi";
import { useOtpModal } from "@/providers/OtpModalProvider";

// Value item helper component for Section 5 (Our Values)
function ValueItemCard({
  title,
  desc,
  icon,
  isGreen,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  isGreen: boolean;
}) {
  return (
    <div className="flex items-start gap-4 p-2">
      <div
        className={`w-[52px] h-[52px] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${isGreen
          ? "bg-[#f4faf6] text-brand-green border border-brand-green/20"
          : "bg-[#f4f8fc] text-brand-blue border border-brand-blue/20"
          }`}
      >
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <h4
          className={`text-sm md:text-base font-extrabold mb-1 ${isGreen ? "text-brand-green" : "text-brand-blue"
            }`}
        >
          {title}
        </h4>
        <p className="text-[12.5px] font-semibold text-slate-500 leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function OurMission() {
  const { openOtpModal } = useOtpModal();

  const founderCredentials = [
    {
      text: "Electrical Engineer, VJTI Mumbai (2003)",
      icon: <FaGraduationCap size={15} />,
    },
    {
      text: "Founder & Director, Uneefy Intratech Pvt. Ltd.",
      icon: <FaBriefcase size={15} />,
    },
    {
      text: "20+ Years in Industrial Products, Projects & B2B Business",
      icon: <FaStar size={15} />,
    },
    {
      text: "Worked with L&T, Bajaj Electricals, Valmont and other industry leaders",
      icon: <FaUsers size={15} />,
    },
    {
      text: "Served 300+ Industrial Customers",
      icon: <FiUserCheck size={15} />,
    },
    {
      text: "Passionate about building a fair and transparent marketplace for Indian businesses",
      icon: <FiCheckCircle size={15} />,
    },
  ];

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">
        {/* SECTION 1: Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-3.5">
                <span className="text-brand-green text-sm font-black tracking-widest uppercase self-start">
                  ABOUT US
                </span>
                <h1 className="text-hero-title text-brand-navy mt-1">
                  We&apos;re Building a <br />
                  <span className="text-brand-green">Fair</span>{" "}
                  <span className="text-brand-blue">B2B Marketplace</span>
                </h1>
                <div className="h-[3px] w-14 bg-brand-green mt-1" />
              </div>

              <p className="text-base sm:text-lg font-bold text-brand-green italic leading-relaxed max-w-lg">
                OpenMarket was created with one simple belief: Every business
                deserves an equal opportunity to grow.
              </p>

              <p className="text-sm md:text-[14.5px] font-bold text-slate-500 leading-relaxed max-w-lg">
                We believe there is a better way. OpenMarket is built to reward
                businesses that are active, responsive, and committed—not simply
                those who spend the most.
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

            {/* Right Column Content: Circular Layout Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center py-6 lg:py-0 w-full overflow-visible">
              <div className="relative w-full max-w-[420px] h-[420px] aspect-square flex-shrink-0 select-none overflow-visible">
                {/* Dashed Connecting Circle (Behind) */}
                <svg
                  viewBox="0 0 400 400"
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="135"
                    fill="none"
                    stroke="#e2eae5"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                  />
                </svg>

                {/* Handshake Central Circle Graphic */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] rounded-full border-[5px] border-brand-navy bg-white shadow-xl overflow-hidden flex items-center justify-center z-10">
                  <div className="relative w-full h-full">
                    {/* Checkmark overlay at top center */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 bg-brand-green text-white p-1 rounded-full shadow-sm z-20 flex items-center justify-center">
                      <FaCheck size={9} />
                    </div>

                    <div className="absolute bottom-[-15%] left-[50%] -translate-x-1/2 w-[160%] h-[160%] max-w-none">
                      <Image
                        src="/business_handshake_worldmap_round_elements_TRANSPARENT.png"
                        alt="Handshake illustration representing connections"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Radially Placed Nodes */}
                {/* 1. Top Node: Fair Opportunity */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
                  style={{ left: "50%", top: "16.25%" }}
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-md text-brand-green hover:scale-105 transition-transform">
                    <FaUsers size={24} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-brand-navy mt-1.5 text-center leading-tight whitespace-nowrap bg-white/80 px-1 py-0.5 rounded">
                    Fair Opportunity
                  </span>
                </div>

                {/* 2. Top Left Node: Active Businesses */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
                  style={{ left: "20.75%", top: "33.125%" }}
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shadow-md text-brand-blue hover:scale-105 transition-transform">
                    <FiTrendingUp size={24} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-brand-navy mt-1.5 text-center leading-tight whitespace-nowrap bg-white/80 px-1 py-0.5 rounded">
                    Active Businesses
                  </span>
                </div>

                {/* 3. Top Right Node: Genuine Connections */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
                  style={{ left: "79.25%", top: "33.125%" }}
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shadow-md text-brand-blue hover:scale-105 transition-transform">
                    <FaHandshake size={24} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-brand-navy mt-1.5 text-center leading-tight whitespace-nowrap bg-white/80 px-1 py-0.5 rounded">
                    Genuine Connections
                  </span>
                </div>

                {/* 4. Bottom Left Node: Sustainable Growth */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
                  style={{ left: "26.125%", top: "73.875%" }}
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-md text-brand-green hover:scale-105 transition-transform">
                    <FaLeaf size={24} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-brand-navy mt-1.5 text-center leading-tight whitespace-nowrap bg-white/80 px-1 py-0.5 rounded">
                    Sustainable Growth
                  </span>
                </div>

                {/* 5. Bottom Right Node: Trusted Marketplace */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
                  style={{ left: "73.875%", top: "73.875%" }}
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-md text-brand-green hover:scale-105 transition-transform">
                    <FiShield size={24} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-brand-navy mt-1.5 text-center leading-tight whitespace-nowrap bg-white/80 px-1 py-0.5 rounded">
                    Trusted Marketplace
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Mission & Vision Cards */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OUR MISSION CARD */}
            <div className="bg-white border border-[#e2eae5]/80 rounded-[28px] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f4faf6] border border-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0 shadow-sm">
                <FiSliders size={28} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-brand-green tracking-widest uppercase mb-1.5 block">
                  OUR MISSION
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-brand-navy leading-snug mb-3">
                  To create India&apos;s fairest B2B marketplace where every
                  genuine business has an equal opportunity to be discovered.
                </h3>
                <p className="text-[13.5px] font-semibold text-slate-500 leading-relaxed">
                  We want every manufacturer, trader, distributor, service
                  provider, and industrial supplier to compete on effort, quality,
                  and responsiveness—not on marketing budgets.
                </p>
              </div>
            </div>

            {/* OUR VISION CARD */}
            <div className="bg-white border border-[#e2eae5]/80 rounded-[28px] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#f4f8fc] border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 shadow-sm">
                <FiEye size={28} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-brand-blue tracking-widest uppercase mb-1.5 block">
                  OUR VISION
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-brand-navy leading-snug">
                  To become the world&apos;s most trusted activity-driven B2B
                  marketplace, connecting buyers with genuine sellers while
                  creating sustainable growth opportunities for businesses of every
                  size.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: The Problem We're Solving */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          {/* Section Header */}
          <div className="flex items-center gap-4 w-full max-w-2xl mx-auto mb-2.5">
            <div className="hidden md:block flex-grow h-[1.5px] bg-slate-200" />
            <h2 className="text-h2 text-brand-navy tracking-tight text-center uppercase px-2 max-w-full">
              THE PROBLEM WE&apos;RE SOLVING
            </h2>
            <div className="hidden md:block flex-grow h-[1.5px] bg-slate-200" />
          </div>
          <p className="text-center text-slate-500 font-bold text-sm md:text-base mb-10">
            Today&apos;s marketplaces create challenges for both sellers and buyers.
          </p>

          {/* Main Triple Column Card */}
          <div className="bg-white border border-[#e2eae5]/80 rounded-[32px] p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sellers Face List */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full bg-[#f4faf6] text-brand-green flex items-center justify-center flex-shrink-0 shadow-sm border border-brand-green/10">
                  <FaStore size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-brand-green tracking-widest uppercase">
                    SELLERS FACE
                  </span>
                  <div className="h-[2px] w-8 bg-brand-green mt-1" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  "Expensive memberships",
                  "Low visibility without paid plans",
                  "Poor-quality enquiries",
                  "Rankings based on advertising spend",
                  "Limited opportunities for new businesses",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiXCircle
                      className="text-brand-green flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-sm font-bold text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Column Illustration */}
            <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
              <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                <Image
                  src="/confused_sellers_buyers.png"
                  alt="Illustration representing problem analysis"
                  width={240}
                  height={240}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Buyers Face List */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full bg-[#f4f8fc] text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm border border-brand-blue/10">
                  <FaShoppingBag size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase">
                    BUYERS FACE
                  </span>
                  <div className="h-[2px] w-8 bg-brand-blue mt-1" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  "Inactive suppliers",
                  "Fake or outdated listings",
                  "Spam calls",
                  "Difficulty finding responsive businesses",
                  "Lack of transparency",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiXCircle
                      className="text-brand-blue flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-sm font-bold text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Our Difference (Navy Blue Ribbon) */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="bg-brand-navy rounded-[32px] p-8 md:p-12 text-white shadow-md flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Side */}
              <div className="lg:col-span-4 text-left flex flex-col gap-3">
                <span className="text-xs font-black text-brand-green tracking-widest uppercase">
                  OUR DIFFERENCE
                </span>
                <h3 className="text-h2 leading-tight text-white">
                  Visibility is <br />
                  <span className="text-brand-green">Earned. Not Sold.</span>
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-300 leading-relaxed max-w-sm">
                  OpenMarket introduces an Activity-Based Ranking System.
                </p>
              </div>

              {/* Right Side 5 Column Check items */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    {
                      label: "Staying active",
                      icon: <FiActivity size={22} />,
                      isGreen: true,
                    },
                    {
                      label: "Updating products & services",
                      icon: <FiUploadCloud size={22} />,
                      isGreen: false,
                    },
                    {
                      label: "Responding quickly",
                      icon: <FiMessageSquare size={22} />,
                      isGreen: true,
                    },
                    {
                      label: "Maintaining complete business info",
                      icon: <FiFileText size={22} />,
                      isGreen: false,
                    },
                    {
                      label: "Building trust with buyers",
                      icon: <FiShield size={22} />,
                      isGreen: true,
                    },
                  ].map((act, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center gap-3 p-3 bg-[#082944]/40 border border-blue-900/30 rounded-2xl hover:scale-102 transition-transform"
                    >
                      <div
                        className={`w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${act.isGreen
                          ? "bg-brand-green text-white border-2 border-brand-green/20"
                          : "bg-brand-blue text-white border-2 border-brand-blue/20"
                          }`}
                      >
                        {act.icon}
                      </div>
                      <span className="text-[10.5px] font-bold text-slate-200 leading-snug">
                        {act.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Pill Container */}
            <div className="bg-[#082944] border border-blue-900/30 rounded-full px-6 py-2.5 text-center text-xs md:text-sm font-bold text-slate-200 self-center max-w-4xl shadow-inner">
              Not by paying higher subscription fees. Because opportunities should
              be <span className="text-brand-green">earned—not purchased.</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: Our Values */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          {/* Section Header */}
          <div className="flex items-center gap-4 w-full max-w-2xl mx-auto mb-8">
            <div className="hidden md:block flex-grow h-[1.5px] bg-slate-200" />
            <h2 className="text-h2 text-brand-navy tracking-tight text-center uppercase px-2 max-w-full">
              OUR VALUES
            </h2>
            <div className="hidden md:block flex-grow h-[1.5px] bg-slate-200" />
          </div>

          {/* Grid Layout of Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <ValueItemCard
              title="Fairness"
              desc="Every business starts with an equal opportunity."
              icon={<FaBalanceScale size={22} />}
              isGreen={true}
            />
            <ValueItemCard
              title="Transparency"
              desc="No hidden ranking algorithms favoring higher-paying sellers."
              icon={<FiSearch size={22} />}
              isGreen={false}
            />
            <ValueItemCard
              title="Trust"
              desc="Helping buyers connect with genuine and active businesses."
              icon={<FaHandshake size={22} />}
              isGreen={true}
            />
            <ValueItemCard
              title="Simplicity"
              desc="Easy registration, easy product uploads, easy business discovery."
              icon={<FiMousePointer size={22} />}
              isGreen={false}
            />
            <ValueItemCard
              title="Growth"
              desc="Supporting MSMEs and industrial businesses in expanding their reach."
              icon={<FiTrendingUp size={22} />}
              isGreen={true}
            />
          </div>
        </section>

        {/* SECTION 6: Meet The Founder */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="bg-[#f7fbf8] border border-[#e2eae5]/80 rounded-[32px] p-8 sm:p-10 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative max-w-[280px] w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg border border-slate-200 bg-white">
                <Image
                  src="/founder2.png"
                  alt="Kiran Pailwan - Founder of OpenMarket"
                  fill
                  priority
                  sizes="(max-w-768px) 100vw, 280px"
                  className="object-cover hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-black text-brand-green tracking-widest uppercase block mb-1">
                  MEET THE FOUNDER
                </span>
                <h3 className="text-h3 text-brand-navy">
                  Kiran Pailwan
                </h3>
                <span className="text-xs font-bold text-slate-400 mt-1 block">
                  Founder, OpenMarket
                </span>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 border-t border-slate-200/60">
                {founderCredentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-[30px] h-[30px] rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-brand-blue/10">
                      {cred.icon}
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-bold text-brand-navy leading-normal">
                      {cred.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Connect Section */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-brand-green uppercase tracking-widest whitespace-nowrap">
                    CONNECT WITH KIRAN
                  </span>
                  <div className="flex-grow h-[1px] bg-slate-200/80" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/kiranpailwan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-white border border-[#0077B5] hover:bg-[#0077B5]/5 text-[#0077B5] rounded-xl font-bold text-xs shadow-sm transition-all"
                  >
                    <FaLinkedin size={16} />
                    <span>LinkedIn</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918108359977"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-white border border-[#25D366] hover:bg-[#25D366]/5 text-[#25D366] rounded-xl font-bold text-xs shadow-sm transition-all"
                  >
                    <FaWhatsapp size={16} />
                    <span>WhatsApp</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@OpenMarket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-white border border-[#FF0000] hover:bg-[#FF0000]/5 text-[#FF0000] rounded-xl font-bold text-xs shadow-sm transition-all"
                  >
                    <FaYoutube size={16} />
                    <span>YouTube</span>
                  </a>
                </div>

                <p className="text-[11px] font-semibold text-slate-400 italic mt-1 text-center sm:text-left">
                  I personally read every message from our founding members.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
