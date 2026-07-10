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
  FaGraduationCap,
  FaBriefcase,
  FaWhatsapp,
  FaYoutube,
  FaLeaf,
  FaStore,
  FaShoppingBag,
} from "react-icons/fa";
import {
  FiCheckCircle,
  FiUserCheck,
  FiXCircle,
  FiX,
} from "react-icons/fi";
import {
  IoPulseOutline,
  IoCloudUploadOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { RiShieldStarLine, RiFileInfoLine } from "react-icons/ri";
import { useOtpModal } from "@/providers/OtpModalProvider";

// Value item helper component for Section 5 (Our Values)
function ValueItemCard({
  title,
  desc,
  imageSrc,
  isGreen,
}: {
  title: string;
  desc: string;
  imageSrc: string;
  isGreen: boolean;
}) {
  return (
    <div className="flex items-start gap-3 p-3 xl:p-4">
      <div className="w-16 h-16 flex-shrink-0 mt-0.5 flex items-center justify-center overflow-visible">
        <Image
          src={imageSrc}
          alt={title}
          width={64}
          height={64}
          className="object-contain scale-[1.3]"
        />
      </div>
      <div className="flex flex-col text-left">
        <h4
          className={`text-sm md:text-[15px] font-extrabold mb-1 ${isGreen ? "text-brand-green" : "text-brand-blue"
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
      text: "Worked with L&T, Bajaj Electricals, Valmont and other industry leaders",
      icon: <FaUsers size={15} />,
    },
    {
      text: "Founder & Director, Uneefy Intratech Pvt. Ltd.",
      icon: <FaBriefcase size={15} />,
    },
    {
      text: "Served 300+ Industrial Customers",
      icon: <FiUserCheck size={15} />,
    },
    {
      text: "20+ Years in Industrial Products, Projects & B2B Business",
      icon: <FaStar size={15} />,
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
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-14 md:pb-20">
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

            {/* Right Column Content: Mockup Diagram Image */}
            <div className="lg:col-span-6 flex items-center justify-center py-6 lg:py-0 w-full overflow-visible">
              <div className="relative w-full max-w-[450px] h-[450px] sm:max-w-[500px] sm:h-[500px] aspect-square flex-shrink-0 select-none overflow-visible">
                {/* Skyline Background (Inside the diagram container, behind mockup image) */}
                <div className="absolute inset-x-[-60px] bottom-0 h-[280px] pointer-events-none select-none z-0 opacity-40">
                  <svg viewBox="0 0 540 300" className="w-full h-full text-slate-200/50" fill="currentColor">
                    {/* Left Skyline Buildings */}
                    <rect x="0" y="210" width="12" height="90" />
                    <rect x="18" y="170" width="16" height="130" />
                    <rect x="40" y="120" width="20" height="180" />
                    <path d="M68 300 V90 L74 40 L80 90 V300 Z" />
                    <rect x="88" y="140" width="18" height="160" />
                    <rect x="112" y="190" width="14" height="110" />

                    {/* Right Skyline Buildings */}
                    <rect x="390" y="190" width="14" height="110" />
                    <rect x="410" y="140" width="18" height="160" />
                    <path d="M434 300 V90 L440 40 L446 90 V300 Z" />
                    <rect x="454" y="110" width="22" height="190" />
                    <rect x="482" y="160" width="16" height="140" />
                    <rect x="504" y="200" width="12" height="100" />
                    <rect x="522" y="230" width="10" height="70" />
                  </svg>
                </div>

                {/* Transparent Mockup Diagram Image */}
                <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
                  <img
                    src="/mission_diagram_mockup.png?v=5"
                    alt="B2B Marketplace Partnership Diagram"
                    className="w-full h-full object-contain select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Mission & Vision Cards */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OUR MISSION CARD */}
            <div className="bg-white border border-[#e2eae5]/80 rounded-[28px] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <Image
                  src="/mission_target.jpg"
                  alt="Our Mission"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-brand-green tracking-widest uppercase mb-1.5 block">
                  OUR MISSION
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-brand-navy leading-snug mb-3">
                  To build India's fairest online B2B marketplace where every genuine business—big or small—has an equal opportunity to be discovered, connect with buyers, and grow.                </h3>
                <p className="text-[13.5px] font-semibold text-slate-500 leading-relaxed">
                  We believe visibility should be earned through quality, service, responsiveness, and business activity—not purchased through larger marketing budgets. Our mission is to create a level playing field where every business can compete on merit.                </p>
              </div>
            </div>

            {/* OUR VISION CARD */}
            <div className="bg-white border border-[#e2eae5]/80 rounded-[28px] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <Image
                  src="/vision_eye.jpg"
                  alt="Our Vision"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-brand-blue tracking-widest uppercase mb-1.5 block">
                  OUR VISION
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-brand-navy leading-snug">
                  To build the world’s most open, fair, and transparent online B2B marketplace.                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: The Problem We're Solving */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
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
          <div className="bg-white border border-[#e2eae5]/80 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Sellers Face */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-left w-full justify-between h-full">
              {/* Left: Shop Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E8F8F0] border border-[#B3F5D1]/30 flex items-center justify-center text-brand-green flex-shrink-0 shadow-sm text-2xl">
                <FaStore />
              </div>

              {/* Middle: Bullets & Title */}
              <div className="flex-grow flex flex-col gap-4 text-center sm:text-left w-full sm:w-auto px-1">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-[15px] font-black text-brand-green tracking-widest uppercase">
                    SELLERS FACE
                  </span>
                  <div className="h-[2px] w-8 bg-brand-green mt-1" />
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    "Expensive memberships",
                    "Low visibility without paid plans",
                    "Poor-quality enquiries",
                    "Rankings based on advertising spend",
                    "Limited opportunities for new businesses",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-left">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#0FA958] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <FiX className="text-[11px] stroke-[4px]" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-slate-600 leading-snug whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Column Illustration */}
            <div className="lg:col-span-4 flex justify-center py-4 lg:py-0 w-full">
              <div className="relative w-full max-w-[360px] aspect-[1024/581] flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <Image
                  src="/confused_sellers_buyers_v2.png"
                  alt="Sellers and Buyers Thinking"
                  width={360}
                  height={204}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Buyers Face */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-left w-full justify-between h-full">
              {/* Left: Bullets & Title */}
              <div className="flex-grow flex flex-col gap-4 text-center sm:text-left w-full sm:w-auto px-1">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-[15px] font-black text-brand-blue tracking-widest uppercase">
                    BUYERS FACE
                  </span>
                  <div className="h-[2px] w-8 bg-brand-blue mt-1" />
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    "Inactive suppliers",
                    "Fake or outdated listings",
                    "Spam calls",
                    "Difficulty finding responsive businesses",
                    "Lack of transparency",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-left">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#0B3C5F] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <FiX className="text-[11px] stroke-[4px]" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-slate-600 leading-snug whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Bag Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E6EFF5] border border-blue-100 flex items-center justify-center text-brand-blue flex-shrink-0 shadow-sm text-2xl">
                <FaShoppingBag />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: Our Difference (Navy Blue Ribbon) */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 md:gap-y-0 md:divide-x divide-white/10">
                  {[
                    {
                      label: "Staying active",
                      icon: <IoPulseOutline size={38} />,
                      isGreen: true,
                    },
                    {
                      label: "Updating products & services",
                      icon: <IoCloudUploadOutline size={38} />,
                      isGreen: false,
                    },
                    {
                      label: "Responding quickly",
                      icon: <IoChatbubbleEllipsesOutline size={38} />,
                      isGreen: true,
                    },
                    {
                      label: "Maintaining complete business info",
                      icon: <RiFileInfoLine size={38} />,
                      isGreen: false,
                    },
                    {
                      label: "Building trust with buyers",
                      icon: <RiShieldStarLine size={38} />,
                      isGreen: true,
                    },
                  ].map((act, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center gap-3.5 px-4 py-2 hover:scale-105 transition-all duration-300"
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${act.isGreen
                          ? "bg-brand-green text-white border-2 border-brand-green/20"
                          : "bg-brand-blue text-white border-2 border-brand-blue/20"
                          }`}
                      >
                        {act.icon}
                      </div>
                      <span className="text-[11.5px] font-bold text-slate-200 leading-snug">
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
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          {/* Section Header */}
          <div className="flex items-center gap-4 w-full max-w-2xl mx-auto mb-8">
            <div className="hidden md:block flex-grow h-[1.5px] bg-slate-200" />
            <h2 className="text-h2 text-brand-navy tracking-tight text-center uppercase px-2 max-w-full">
              OUR VALUES
            </h2>
            <div className="hidden md:block flex-grow h-[1.5px] bg-slate-200" />
          </div>

          {/* Grid Layout of Values with Dividers */}
          <div className="bg-white border border-[#e2eae5]/80 rounded-[28px] shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x divide-slate-100 p-2 sm:p-4">
            <ValueItemCard
              title="Fairness"
              desc="Every business starts with an equal opportunity."
              imageSrc="/value_fairness_clean.png"
              isGreen={true}
            />
            <ValueItemCard
              title="Transparency"
              desc="No hidden ranking algorithms favoring higher-paying sellers."
              imageSrc="/value_transparency_clean.png"
              isGreen={false}
            />
            <ValueItemCard
              title="Trust"
              desc="Helping buyers connect with genuine and active businesses."
              imageSrc="/value_trust_clean.png"
              isGreen={true}
            />
            <ValueItemCard
              title="Simplicity"
              desc="Easy registration, easy product uploads, easy business discovery."
              imageSrc="/value_simplicity_clean.png"
              isGreen={false}
            />
            <ValueItemCard
              title="Growth"
              desc="Supporting MSMEs and industrial businesses in expanding their reach."
              imageSrc="/value_growth_clean.png"
              isGreen={true}
            />
          </div>
        </section>

        {/* SECTION 6: Meet The Founder */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="bg-[#f7fbf8] border border-[#e2eae5]/80 rounded-[32px] p-8 sm:p-10 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative max-w-[350px] w-full aspect-[4/5]">
                <Image
                  src="/founder2.png"
                  alt="Kiran Pailwan - Founder of OpenMarket"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-contain hover:scale-103 transition-transform duration-500"
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
                    href="https://www.youtube.com/@OpenMarketInd"
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
