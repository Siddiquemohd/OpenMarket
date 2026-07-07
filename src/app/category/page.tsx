"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useOtpModal } from "@/providers/OtpModalProvider";
import { useAxios } from "@/providers/AxiosProvider";
import {
  FiZap,
  FiSettings,
  FiBriefcase,
  FiTruck,
  FiMonitor,
  FiActivity,
  FiAward,
  FiGift,
  FiShield,
  FiUsers,
  FiUploadCloud,
  FiCheckCircle,
  FiPlus,
  FiArrowRight,
  FiPlay,
  FiLayers,
  FiCpu,
  FiHome,
  FiSliders,
  FiUserPlus
} from "react-icons/fi";
import { FaBolt, FaCog, FaBuilding, FaTruck, FaCar, FaFlask, FaLeaf, FaPlusSquare, FaWrench, FaRoad, FaRocket, FaCheckCircle, FaIndustry } from "react-icons/fa";

// Category configuration helper
// Category configuration helper
const categories = [
  {
    title: "Electrical & Lighting",
    icon: <FiZap className="text-amber-500 w-6 h-6" />,
    items: [
      "LED Lighting",
      "Cables & Wires",
      "Switchgear & Panels",
      "Electrical Components",
      "Street Lighting"
    ]
  },
  {
    title: "Industrial Supplies",
    icon: <FaIndustry className="text-blue-500 w-6 h-6" />,
    items: [
      "Industrial Tools",
      "Bearings",
      "Valves",
      "Fasteners",
      "Safety Equipment"
    ]
  },
  {
    title: "Machinery & Equipment",
    icon: <FiSettings className="text-purple-500 w-6 h-6" />,
    items: [
      "Manufacturing Machinery",
      "Packaging Machinery",
      "Construction Machinery",
      "Pumps & Compressors",
      "Generators"
    ]
  },
  {
    title: "Building & Construction",
    icon: <FaBuilding className="text-orange-500 w-6 h-6" />,
    items: [
      "Construction Materials",
      "Steel & Metal",
      "Cement & Concrete",
      "Roofing Materials",
      "Doors & Windows"
    ]
  },
  {
    title: "Logistics & Material Handling",
    icon: <FaTruck className="text-cyan-700 w-6 h-6" />,
    items: [
      "Material Handling Equipment",
      "Storage Solutions",
      "Pallets & Bins",
      "Racking Systems",
      "Conveyors"
    ]
  },
  {
    title: "Automobile & Auto Components",
    icon: <FaCar className="text-red-500 w-6 h-6" />,
    items: [
      "Auto Spare Parts",
      "Batteries",
      "Tyres & Tubes",
      "Lubricants",
      "Garage Equipment"
    ]
  },
  {
    title: "Chemicals & Raw Materials",
    icon: <FaFlask className="text-emerald-500 w-6 h-6" />,
    items: [
      "Industrial Chemicals",
      "Specialty Chemicals",
      "Paints & Coatings",
      "Adhesives & Sealants",
      "Lubricants & Oils"
    ]
  },
  {
    title: "IT, Electronics & Automation",
    icon: <FiMonitor className="text-blue-600 w-6 h-6" />,
    items: [
      "Industrial Automation",
      "IoT Solutions",
      "Networking Products",
      "CCTV & Security",
      "Software Services"
    ]
  },
  {
    title: "Agriculture & Food",
    icon: <FaLeaf className="text-green-500 w-6 h-6" />,
    items: [
      "Agricultural Equipment",
      "Seeds & Pesticides",
      "Fertilizers",
      "Food Ingredients",
      "Dairy Products"
    ]
  },
  {
    title: "Healthcare & Pharma",
    icon: <FaPlusSquare className="text-rose-500 w-6 h-6" />,
    items: [
      "Medical Equipment",
      "Laboratory Instruments",
      "Pharma Ingredients",
      "Surgical Supplies",
      "Packaging Materials"
    ]
  },
  {
    title: "Business & Professional Services",
    icon: <FiBriefcase className="text-amber-800 w-6 h-6" />,
    items: [
      "Legal & Compliance",
      "Accounting & Finance",
      "HR & Recruitment",
      "Marketing & Branding",
      "IT & Digital Services"
    ]
  },
  {
    title: "Manufacturing Services",
    icon: <FaWrench className="text-blue-400 w-6 h-6" />,
    items: [
      "CNC Machining",
      "Fabrication",
      "Laser Cutting",
      "Surface Treatment",
      "Injection Moulding"
    ]
  },
  {
    title: "Energy & Environment",
    icon: <FiActivity className="text-green-600 w-6 h-6" />,
    items: [
      "Solar Products",
      "Energy Equipment",
      "Water Treatment",
      "Waste Management",
      "Environment Monitoring"
    ]
  },
  {
    title: "Infrastructure & Govt. Projects",
    icon: <FaRoad className="text-indigo-500 w-6 h-6" />,
    items: [
      "EPC Contractors",
      "Roads & Highways",
      "Smart City Solutions",
      "Safety & Security",
      "Prefabricated Structures"
    ]
  }
];

export default function Home() {
  const { openOtpModal } = useOtpModal();
  const axios = useAxios();
  const [joined, setJoined] = useState(428); // Default fallback matching banner

  useEffect(() => {
    let active = true;
    const fetchCount = async () => {
      try {
        const res = await axios.get("/web/total/wishlist");
        if (res.data?.success && typeof res.data.data?.total === "number") {
          if (active) {
            setJoined(res.data.data.total);
          }
        }
      } catch (err) {
        console.error("Error fetching wishlist count on page:", err);
      }
    };
    fetchCount();
    return () => {
      active = false;
    };
  }, [axios]);

  const handleCTAClick = () => {
    // Open registration OTP dialog directly
    openOtpModal();
  };

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">

        {/* Section 1: Hero & B2B Diagram Card */}
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="self-start">
                  <span className="inline-flex items-center px-4 py-1.5 bg-[#E8F5E9] text-[#097B3E] border border-[#C8E6C9] text-sm font-bold rounded-full shadow-sm">
                    100% B2B. 100% Free to Join.
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-navy">
                  <span className="block">A Fairer B2B</span>
                  <span className="block mt-1">Marketplace Is</span>
                  <span className="block mt-1">Being <span className="text-[#097B3E]">Built.</span></span>
                </h1>
              </div>

              <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-xl">
                OpenMarket connects businesses with real opportunities, not paid rankings. Whether you manufacture, trade, supply, consult or provide services – you are welcome here.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  onClick={handleCTAClick}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#097B3E] hover:bg-[#075F30] text-white font-bold rounded-xl transition-all shadow-md text-base cursor-pointer group"
                >
                  Become a Founding Seller
                  <span className="text-white group-hover:translate-x-0.5 transition-transform font-bold">&gt;</span>
                </button>
                <Link
                  href="/why-openmarket"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#097B3E] text-[#097B3E] hover:bg-slate-50 font-bold rounded-xl transition-all text-base bg-white"
                >
                  <FiPlay className="fill-[#097B3E] text-[#097B3E] w-4 h-4" />
                  Learn More
                </Link>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm font-bold text-slate-600">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#097B3E] w-5 h-5 stroke-[2.5]" />
                  <span>100% B2B Marketplace</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#097B3E] w-5 h-5 stroke-[2.5]" />
                  <span>No Paid Ranking</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#097B3E] w-5 h-5 stroke-[2.5]" />
                  <span>Free Business Profile</span>
                </div>
              </div>
            </div>

            {/* Hero Right: Map & Businessman handshake illustration + Floating Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div className="w-full max-w-[540px] aspect-[4/3] lg:aspect-auto lg:h-[410px] relative">
                {/* Generated Background Map & Handshake Image */}
                <Image
                  src="/business_handshake_worldmap_round_elements_TRANSPARENT.png"
                  alt="B2B Marketplace Map and Handshake"
                  width={540}
                  height={410}
                  priority
                  className="object-contain w-full h-full"
                />

                {/* Floating Card */}
                <div className="absolute bottom-4 right-4 md:right-[-20px] lg:right-[-30px] lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 max-w-[210px] bg-white/95 backdrop-blur-md border border-emerald-100/85 rounded-2xl p-3.5 shadow-lg flex flex-col gap-2 z-20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7.5 h-7.5 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#097B3E] flex-shrink-0">
                      {/* Badge check icon */}
                      <svg className="w-4.5 h-4.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-[11px] text-[#0B3C5F] leading-tight">Built for Businesses.</span>
                      <span className="font-extrabold text-[11px] text-[#097B3E] leading-tight">By Businesses.</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-semibold text-slate-500 leading-normal">
                    A trusted space for genuine businesses to connect and grow together.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: 5-Column Feature Row */}
        <section className="bg-white border-y border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E]">
                  <FiUsers size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-brand-navy">100% B2B Marketplace</span>
                  <span className="text-xs text-slate-500 font-semibold mt-1">Only businesses can join.</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E]">
                  <span className="text-[10px] font-black tracking-tighter border-2 border-[#097B3E] px-1 rounded">FREE</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-brand-navy">Free to Join</span>
                  <span className="text-xs text-slate-500 font-semibold mt-1">Create your business profile absolutely free.</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E]">
                  <FiUploadCloud size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-brand-navy">Showcase Freely</span>
                  <span className="text-xs text-slate-500 font-semibold mt-1">Upload products & services, up to 50 images.</span>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E]">
                  <FiAward size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-brand-navy">Founding Seller Benefits</span>
                  <span className="text-xs text-slate-500 font-semibold mt-1">Early access & exclusive benefits for first 1,000.</span>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E]">
                  <FiGift size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-brand-navy">Special Offers</span>
                  <span className="text-xs text-slate-500 font-semibold mt-1">Exclusive pricing & offers for founding sellers.</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Industries We Support (B2B Only) */}
        <section id="categories" className="scroll-mt-20 py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center flex flex-col gap-3 mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight">
                Industries We Support (B2B Only)
              </h2>
              <p className="text-sm md:text-base text-slate-500 max-w-5xl mx-auto font-medium leading-relaxed">
                Explore categories that match your business and join today. Any product or service is welcome.
              </p>
            </div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[290px] hover:shadow-md hover:border-emerald-200 transition-all duration-300 group"
                >
                  <div className="flex flex-col gap-3">
                    {/* Header Row: Icon & Title */}
                    <div className="flex items-center gap-2.5">
                      <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <h4 className="text-sm font-extrabold text-brand-navy leading-snug group-hover:text-[#097B3E] transition-colors">
                        {cat.title}
                      </h4>
                    </div>

                    {/* Bullet List */}
                    <ul className="flex flex-col gap-1.5 mt-1">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                          <span className="w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explore Category Link */}
                  <button
                    onClick={handleCTAClick}
                    className="flex items-center gap-1.5 text-xs font-extrabold text-[#097B3E] hover:text-[#075F30] transition-colors mt-4 cursor-pointer self-start group"
                  >
                    <span>Explore Category</span>
                    <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}

              {/* Card 15: Don't see your industry? */}
              <div className="bg-white border border-emerald-100/60 rounded-2xl p-5 shadow-sm flex flex-col justify-between items-center text-center min-h-[290px] hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center gap-2.5 mt-2">
                  {/* Plus Icon inside circle */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#097B3E] flex items-center justify-center text-[#097B3E]">
                    <FiPlus size={20} className="stroke-[3]" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-sm font-extrabold text-[#097B3E]">
                      Don&apos;t see your
                      <br />
                      industry?
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold px-2 leading-relaxed">
                      We welcome all legitimate businesses. Register your business and we will keep expanding.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCTAClick}
                  className="w-full py-2.5 bg-[#097B3E] hover:bg-[#075F30] text-white text-xs font-bold rounded-lg transition-all shadow-sm mt-4 cursor-pointer"
                >
                  Register Your Business
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Become a Founding Seller Banner */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <div className="w-full bg-[#F4FAF6] border border-emerald-100 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-sm">
            {/* Child 1: Rocket + Title Area */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
              <div className="flex-shrink-0 w-36 h-36 md:w-[200px] md:h-[200px] relative lg:-mt-12 lg:-mb-12">
                <Image
                  src="/greeen-rocket.png"
                  alt="Rocket illustration"
                  fill
                  sizes="(max-width: 768px) 144px, 200px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-3 max-w-md w-full sm:w-auto">
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <h3 className="text-2xl font-extrabold text-[#097B3E]">
                    Become a Founding Seller
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    Join the first 1,000 businesses shaping OpenMarket.
                  </p>
                </div>

                {/* Dynamic Joined Stats Box */}
                <div className="bg-white border border-emerald-100 rounded-2xl p-4 shadow-sm flex flex-col gap-3 min-w-[280px]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#097B3E]">
                      <FiUsers size={20} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xl font-extrabold text-[#0B3C5F] leading-none">
                        {joined} / 1000
                      </span>
                      <span className="text-xs font-semibold text-slate-400 mt-1">
                        Businesses Joined
                      </span>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#097B3E] h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((joined / 1000) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Child 2: Checklist of Benefits (Centered with equal space left & right) */}
            <div className="flex flex-col gap-3 min-w-[220px] w-full lg:w-auto lg:mx-auto">
              <span className="text-xs font-black tracking-wider uppercase text-[#097B3E] text-center lg:text-left">
                Founding Seller Benefits
              </span>
              <div className="flex flex-col gap-2.5">
                {[
                  "Founding Seller Pricing",
                  "Early Access to New Features",
                  "Priority Visibility in Platform",
                  "Exclusive Offers & Benefits"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FiCheckCircle className="text-[#097B3E] w-4.5 h-4.5 stroke-[2.5]" />
                    <span className="text-xs font-bold text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Child 3: CTA Button Column */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0 min-w-[200px] w-full lg:w-auto">
              <button
                onClick={handleCTAClick}
                className="w-full py-3.5 px-6 bg-[#006428] hover:bg-[#004d1f] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                Reserve My Spot
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <span className="text-xs font-semibold text-slate-500">
                Limited spots available!
              </span>
            </div>
          </div>
        </section>

        {/* Section 5: How OpenMarket Works */}
        <section className="bg-white border-y border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy text-center">
              How OpenMarket Works
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 max-w-5xl mx-auto w-full">
              {/* Step 1 */}
              <div className="flex items-center gap-4 flex-1">
                {/* Step badge */}
                <div className="w-7 h-7 rounded-full bg-[#097B3E] text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                  1
                </div>
                {/* Icon box */}
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E] flex-shrink-0">
                  <FiUserPlus size={24} />
                </div>
                {/* Text */}
                <div className="flex flex-col text-left">
                  <span className="text-base font-extrabold text-[#097B3E]">Create Your Profile</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 leading-relaxed">
                    Sign up and create your business profile for free.
                  </span>
                </div>
              </div>

              {/* Arrow Connector 1 */}
              <div className="hidden lg:flex items-center justify-center text-slate-300 mx-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4 flex-1">
                {/* Step badge */}
                <div className="w-7 h-7 rounded-full bg-[#097B3E] text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                  2
                </div>
                {/* Icon box */}
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E] flex-shrink-0">
                  <FiUploadCloud size={24} />
                </div>
                {/* Text */}
                <div className="flex flex-col text-left">
                  <span className="text-base font-extrabold text-[#097B3E]">Upload Products & Services</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 leading-relaxed">
                    Add your products, services and business details.
                  </span>
                </div>
              </div>

              {/* Arrow Connector 2 */}
              <div className="hidden lg:flex items-center justify-center text-slate-300 mx-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4 flex-1">
                {/* Step badge */}
                <div className="w-7 h-7 rounded-full bg-[#097B3E] text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                  3
                </div>
                {/* Icon box */}
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                    <line x1="6" y1="20" x2="6" y2="13" strokeLinecap="round" />
                    <line x1="12" y1="20" x2="12" y2="8" strokeLinecap="round" />
                    <line x1="18" y1="20" x2="18" y2="3" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Text */}
                <div className="flex flex-col text-left">
                  <span className="text-base font-extrabold text-[#097B3E]">Grow With OpenMarket</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 leading-relaxed">
                    Get discovered, connect with businesses and grow.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 6: Stats & Founder Goal CTA Banner (Dark green, large block) */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
          <div className="w-full bg-[#1b6d45] rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row items-center lg:items-stretch relative py-8 px-6 lg:py-6 lg:px-8">

            {/* Left Column: Shaking hands illustration */}
            <div className="lg:w-[240px] w-full h-[120px] lg:h-full lg:absolute lg:left-0 lg:bottom-0 relative overflow-visible flex-shrink-0 z-10">
              <Image
                src="/DEAL.png"
                alt="Business partnership shaking hands"
                fill
                sizes="240px"
                className="object-contain object-bottom"
              />

              {/* White verification badge overlapping the handshake */}
              <div className="absolute right-[-16px] lg:right-[-20px] top-[40%] -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-20 flex items-center justify-center w-[44px] h-[44px] lg:w-[48px] lg:h-[48px]">
                <svg viewBox="0 0 24 24" className="w-8 h-8 lg:w-9 lg:h-9 text-[#1b6d45]" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5.5c-0.5 0-1 0.4-1.2 0.8l-0.3 0.6c-0.2 0.4-0.6 0.6-1.1 0.6H8.7c-0.6 0-1.1 0.5-1.1 1.1v0.7c0 0.5-0.2 0.9-0.6 1.1l-0.6 0.3c-0.4 0.2-0.8 0.7-0.8 1.2s0.4 1 0.8 1.2l0.6 0.3c0.4 0.2 0.6 0.6 0.6 1.1v0.7c0 0.6 0.5 1.1 1.1 1.1h0.7c0.5 0 0.9 0.2 1.1 0.6l0.3 0.6c0.2 0.4 0.7 0.8 1.2 0.8s1-0.4 1.2-0.8l0.3-0.6c0.2-0.4 0.6-0.6 1.1-0.6h0.7c0.6 0 1.1-0.5 1.1-1.1v-0.7c0-0.5 0.2-0.9 0.6-1.1l-.6-.3c0.4-0.2 0.6-0.6 0.6-1.1s-.2-.9-.6-1.1l-.6-.3c-.4-.2-.6-.6-.6-1v-.7c0-.5-.4-.9-.9-.9h-.7c-.4 0-.8-.2-1-.6l-.3-.6c-.2-.3-.5-.5-.8-.5z" />
                  <path d="M9 12l2 2 4-4" strokeWidth="2.2" />
                </svg>
              </div>
            </div>

            {/* Spacer for absolute positioned handshake image on desktop */}
            <div className="lg:w-[240px] flex-shrink-0 lg:block hidden pointer-events-none" />

            {/* Center Column: Text & Stats */}
            <div className="flex-grow flex flex-col justify-center text-center lg:text-left text-white px-6 lg:pl-12 lg:pr-6 py-6 lg:py-0 gap-3">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-xl lg:text-2xl font-bold tracking-tight leading-tight">
                  Your Business. Your Growth. Our Platform.
                </h2>
                <p className="text-xs lg:text-sm text-white/95 font-medium">
                  Join the first 1,000 businesses building a fairer B2B marketplace.
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-8 mt-1">
                {/* Businesses Joined */}
                <div className="flex items-center gap-3">
                  {/* Users Outline Icon */}
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Left Person */}
                    <circle cx="6.5" cy="9.5" r="2.5" />
                    <path d="M2 19.5a4.5 4.5 0 0 1 5-4" />
                    {/* Right Person */}
                    <circle cx="17.5" cy="9.5" r="2.5" />
                    <path d="M17 15.5a4.5 4.5 0 0 1 5 4" />
                    {/* Center Person */}
                    <circle cx="12" cy="7.5" r="3.5" />
                    <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
                  </svg>

                  <div className="flex flex-col items-start text-left">
                    <span className="text-2xl lg:text-3xl font-extrabold leading-none text-white">{joined}+</span>
                    <span className="text-[10px] lg:text-xs text-white/80 font-medium mt-1">Businesses Joined</span>
                  </div>
                </div>

                {/* Separator line */}
                <div className="h-8 w-[1px] bg-white/20"></div>

                {/* Founding Goal */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-2xl lg:text-3xl font-extrabold leading-none text-white">1000</span>
                  <span className="text-[10px] lg:text-xs text-white/80 font-medium mt-1">Founding Seller Goal</span>
                </div>
              </div>
            </div>

            {/* Right Column: Yellow CTA Card */}
            <div className="flex-shrink-0 flex items-center justify-center px-6 lg:px-0 lg:pr-6 pb-6 lg:pb-0 w-full lg:w-auto">
              <div className="w-full max-w-[320px] lg:w-[310px] bg-[#fad671] rounded-2xl p-4 flex flex-col gap-3 text-center border-none shadow-md">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[#200a01] text-xs lg:text-[13px] font-bold">Limited Spots for Founding Sellers!</span>
                  <h4 className="text-[10px] lg:text-[11px] font-semibold text-[#200a01]/80">
                    Exclusive Benefits. Special Pricing.
                  </h4>
                </div>

                <button
                  onClick={handleCTAClick}
                  className="w-full py-2.5 bg-[#006428] hover:bg-[#004d1f] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs lg:text-sm cursor-pointer"
                >
                  <span className="inline-flex items-center gap-1.5">
                    Become a Founding Seller
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Section 7: Bottom Info / Footer Links Strip */}
        <section className="py-6 -mb-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#097B3E] w-4.5 h-4.5 stroke-[2.5]" />
                <span>100% B2B Marketplace</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#097B3E] w-4.5 h-4.5 stroke-[2.5]" />
                <span>No Retail Buyers</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#097B3E] w-4.5 h-4.5 stroke-[2.5]" />
                <span>Genuine Business Network</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#097B3E] w-4.5 h-4.5 stroke-[2.5]" />
                <span>Fair & Transparent Visibility</span>
              </div>
            </div>

            {/* Contact Link */}
            <Link
              href="/contact-us"
              className="flex items-center gap-1.5 text-[#097B3E] hover:text-[#075F30] font-extrabold text-sm transition-colors group"
            >
              Questions? Contact Us
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>
        </section>

      </main>
    </div>
  );
}
