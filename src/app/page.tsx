"use client";

import Image from "next/image";
import Link from "next/link";
import { useOtpModal } from "@/providers/OtpModalProvider";
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
import { FaBolt, FaCog, FaBuilding, FaTruck, FaCar, FaFlask, FaLeaf, FaPlusSquare, FaWrench, FaRoad, FaRocket, FaCheckCircle } from "react-icons/fa";

// Category configuration helper
const categories = [
  {
    title: "Electrical & Lighting",
    icon: <FiZap className="text-amber-500 w-7 h-7" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Industrial Supplies & Equipment",
    icon: <FiCpu className="text-blue-500 w-7 h-7" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Machinery & Equipment",
    icon: <FiSettings className="text-purple-500 w-7 h-7" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Building & Construction",
    icon: <FaBuilding className="text-orange-500 w-6 h-6" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Logistics & Material Handling",
    icon: <FaTruck className="text-cyan-700 w-6 h-6" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Automobile & Auto Components",
    icon: <FaCar className="text-red-500 w-6 h-6" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Chemicals & Raw Materials",
    icon: <FaFlask className="text-emerald-500 w-6 h-6" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "IT, Electronics & Automation",
    icon: <FiMonitor className="text-blue-600 w-7 h-7" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Agriculture & Food",
    icon: <FaLeaf className="text-green-500 w-6 h-6" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Healthcare & Pharma",
    icon: <FaPlusSquare className="text-rose-500 w-6 h-6" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Business & Professional Services",
    icon: <FiBriefcase className="text-amber-800 w-7 h-7" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Manufacturing Services",
    icon: <FaWrench className="text-blue-400 w-6 h-6" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Energy & Environment",
    icon: <FiActivity className="text-green-600 w-7 h-7" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  },
  {
    title: "Infrastructure & Government Projects",
    icon: <FaRoad className="text-indigo-500 w-6 h-6" />,
    items: ["Manufacturers", "Suppliers", "Traders", "Contractors", "Service Providers"]
  }
];

export default function Home() {
  const { openOtpModal } = useOtpModal();

  const handleCTAClick = () => {
    // Open registration OTP dialog directly
    openOtpModal();
  };

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">
        
        {/* Section 1: Hero & B2B Diagram Card */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-navy">
                  <span className="block">All Industries.</span>
                  <span className="text-[#097B3E] block mt-1">One B2B Marketplace.</span>
                </h1>
                
                <div className="self-start mt-2">
                  <span className="inline-flex items-center px-4 py-1.5 bg-[#097B3E] text-white text-sm font-bold rounded-full shadow-sm">
                    100% B2B. 100% Free to Join.
                  </span>
                </div>
              </div>

              <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-xl">
                OpenMarket is a B2B marketplace connecting businesses with other businesses. 
                Whether you manufacture, trade, distribute or provide services – you are welcome here.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  onClick={handleCTAClick}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#097B3E] hover:bg-[#075F30] text-white font-bold rounded-xl transition-all shadow-md text-base cursor-pointer"
                >
                  <FaRocket className="w-[18px] h-[18px]" />
                  Join as a Founding Seller
                </button>
                <Link
                  href="/why-openmarket"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#097B3E] text-[#097B3E] hover:bg-slate-50 font-bold rounded-xl transition-all text-base bg-white"
                >
                  <FiPlay className="fill-current w-4 h-4" />
                  Learn How It Works
                </Link>
              </div>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm font-bold text-slate-600">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#097B3E] w-5 h-5 stroke-[2.5]" />
                  <span>Verified Businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#097B3E] w-5 h-5 stroke-[2.5]" />
                  <span>Fair Visibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#097B3E] w-5 h-5 stroke-[2.5]" />
                  <span>Real Connections</span>
                </div>
              </div>
            </div>

            {/* Hero Right B2B Diagram Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[460px] bg-[#F4FAF6] border border-emerald-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6 items-center">
                <div className="text-center flex flex-col gap-1">
                  <span className="text-[#097B3E] text-xs font-black tracking-wider uppercase">We are a B2B Marketplace</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-navy">Business to Business</h3>
                </div>

                {/* Inline SVG Diagram */}
                <div className="w-full py-4 flex items-center justify-between px-2 gap-2">
                  {/* Left: Factory */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-emerald-50">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-navy">
                        <path d="M2 22H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M17 22V11L12 14V8L7 11V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M4 22V14L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="9.5" cy="18" r="1" fill="currentColor"/>
                        <circle cx="14.5" cy="18" r="1" fill="currentColor"/>
                        <path d="M12 5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M17 8V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Center: Connect Lines & B2B Badge */}
                  <div className="flex flex-col items-center justify-center flex-grow relative">
                    <div className="flex items-center gap-1 w-full justify-center">
                      <div className="h-[2px] flex-grow border-t-2 border-dashed border-[#097B3E]"></div>
                      <div className="w-12 h-12 rounded-full bg-[#097B3E] flex items-center justify-center text-white text-xs font-black shadow-sm flex-shrink-0 z-10">
                        B2B
                      </div>
                      <div className="h-[2px] flex-grow border-t-2 border-dashed border-[#097B3E]"></div>
                    </div>
                    {/* Double-ended arrows */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-1">
                      <span className="text-[#097B3E] text-xs font-bold -ml-1">&larr;</span>
                      <span className="text-[#097B3E] text-xs font-bold -mr-1">&rarr;</span>
                    </div>
                  </div>

                  {/* Right: Office Building */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-emerald-50">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-navy">
                        <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <line x1="8" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="14" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="8" y1="10" x2="10" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="14" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="8" y1="14" x2="10" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="14" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <rect x="10" y="18" width="4" height="4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-center font-bold flex flex-col gap-1 border-t border-emerald-100/50 pt-4 w-full">
                  <span className="text-brand-navy text-base">Made for Businesses.</span>
                  <span className="text-[#097B3E] text-base">Built for Growth.</span>
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
                  <span className="text-sm font-extrabold text-brand-navy">Founding Seller</span>
                  <span className="text-xs text-slate-500 font-semibold mt-1">Be one of the first 1000 businesses.</span>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#097B3E]">
                  <FiGift size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-brand-navy">Special Benefits</span>
                  <span className="text-xs text-slate-500 font-semibold mt-1">Exclusive offers for founding sellers.</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Industries We Support (B2B Only) */}
        <section className="bg-slate-50/50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center flex flex-col gap-3 mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight">
                Industries We Support (B2B Only)
              </h2>
              <p className="text-base text-slate-500 max-w-5xl mx-auto font-medium leading-relaxed">
                <span className="lg:whitespace-nowrap block">
                  OpenMarket is being built to support businesses from <span className="text-[#0FA958] font-semibold">every major</span> industry. If you are a business, you can join any category and
                </span>
                <span className="block">create your profile for FREE.</span>
              </p>
            </div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[340px] hover:shadow-md hover:border-emerald-200 transition-all duration-300 group"
                >
                  <div className="flex flex-col gap-4">
                    {/* Header Row: Icon & Title */}
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <h4 className="text-sm font-extrabold text-brand-navy leading-snug group-hover:text-[#097B3E] transition-colors">
                        {cat.title}
                      </h4>
                    </div>

                    {/* Bullet List */}
                    <ul className="flex flex-col gap-2 mt-2">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                          <span className="w-1.5 h-1.5 bg-brand-navy/60 rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Join Category Button */}
                  <button
                    onClick={handleCTAClick}
                    className="w-full py-2 border border-[#097B3E] text-[#097B3E] hover:bg-[#097B3E] hover:text-white text-xs font-bold rounded-lg transition-all text-center mt-6 cursor-pointer"
                  >
                    Join This Category
                  </button>
                </div>
              ))}

              {/* Card 15: Don't see your industry? */}
              <div className="bg-[#F4FAF6] border border-emerald-100/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between items-center text-center min-h-[340px] hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center gap-6 mt-4">
                  {/* Green circle with plus */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-emerald-100 flex items-center justify-center text-[#097B3E]">
                    <FiPlus size={28} className="stroke-[3]" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h4 className="text-base font-extrabold text-brand-navy">
                      Don&apos;t see your industry?
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold px-2">
                      We welcome all legitimate businesses.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCTAClick}
                  className="w-full py-3 bg-[#097B3E] hover:bg-[#075F30] text-white text-xs font-bold rounded-lg transition-all shadow-sm mt-6 cursor-pointer"
                >
                  Register Your Business
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Horizontal Banner */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="w-full bg-[#F4FAF6] border border-emerald-100/60 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-5 max-w-4xl text-left">
              {/* Group icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-sm border border-emerald-50 flex items-center justify-center text-[#097B3E]">
                <FiUsers size={24} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-extrabold text-brand-navy">
                  Don&apos;t See Your Exact Category?
                </h3>
                <p className="text-sm font-semibold text-slate-500 leading-relaxed">
                  No problem! OpenMarket is being built for all types of businesses. If your product or service does not fit in any of the above categories, you can still register and create your business profile. We will keep expanding as more businesses join.
                </p>
              </div>
            </div>

            <button
              onClick={handleCTAClick}
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-[#097B3E] hover:bg-[#075F30] text-white font-bold rounded-xl transition-all shadow-md text-sm whitespace-nowrap cursor-pointer"
            >
              <FiUserPlus size={16} />
              Register Your Business
            </button>
          </div>
        </section>

        {/* Section 5: Two-Column Features / Info Grid */}
        <section className="bg-white border-t border-slate-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Column: What You Can Do Right Now */}
              <div className="bg-[#F4FAF6] border border-emerald-100/60 rounded-3xl p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#097B3E]">
                    What You Can Do Right Now (Free)
                  </h3>
                  <p className="text-sm font-semibold text-slate-700">
                    As a Founding Seller, you can:
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Checklist Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                    <div className="flex flex-col gap-3">
                      {[
                        "Create your business profile",
                        "Add company details & contact information",
                        "Upload products & up to 50 images"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-[#0FA958] w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      {[
                        "Upload services & up to 50 images",
                        "Share your profile with buyers",
                        "Invite other businesses to join"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-[#0FA958] w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clipboard Illustration */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Shadow */}
                      <rect x="14" y="14" width="72" height="98" rx="8" fill="#E2E8F0" opacity="0.5" />
                      {/* Board */}
                      <rect x="10" y="10" width="72" height="98" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2.5" />
                      {/* Metal Clip */}
                      <path d="M36 4C36 2.89543 36.8954 2 38 2H62C63.1046 2 64 2.89543 64 4V12H36V4Z" fill="#94A3B8" />
                      <rect x="32" y="10" width="36" height="3" fill="#64748B" />
                      <circle cx="50" cy="6" r="1.5" fill="#475569" />
                      
                      {/* User Avatar Circle */}
                      <circle cx="32" cy="34" r="10" fill="#0FA958" />
                      {/* Head */}
                      <circle cx="32" cy="30" r="3.5" fill="#FFFFFF" />
                      {/* Body */}
                      <path d="M25 40C25 37 28 35 32 35C36 35 39 37 39 40" fill="#FFFFFF" />

                      {/* Header lines */}
                      <rect x="48" y="27" width="26" height="2.5" rx="1.25" fill="#CBD5E1" />
                      <rect x="48" y="34" width="16" height="2" rx="1" fill="#E2E8F0" />
                      <rect x="48" y="39" width="20" height="2" rx="1" fill="#E2E8F0" />

                      {/* Separator Line */}
                      <line x1="18" y1="50" x2="74" y2="50" stroke="#E2E8F0" strokeWidth="1.5" />

                      {/* Checklist items */}
                      <circle cx="24" cy="62" r="3" fill="#A7F3D0" />
                      <circle cx="24" cy="62" r="1.2" fill="#0FA958" />
                      <rect x="32" y="61" width="40" height="2" rx="1" fill="#E2E8F0" />

                      <circle cx="24" cy="74" r="3" fill="#A7F3D0" />
                      <circle cx="24" cy="74" r="1.2" fill="#0FA958" />
                      <rect x="32" y="73" width="34" height="2" rx="1" fill="#E2E8F0" />

                      <circle cx="24" cy="86" r="3" fill="#A7F3D0" />
                      <circle cx="24" cy="86" r="1.2" fill="#0FA958" />
                      <rect x="32" y="85" width="38" height="2" rx="1" fill="#E2E8F0" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column: What's Coming Next */}
              <div className="bg-[#F4F8FC] border border-blue-100/60 rounded-3xl p-8 md:p-10 flex flex-col gap-6 shadow-sm justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#12629B]">
                    What&apos;s Coming Next (For Sellers)
                  </h3>
                  <p className="text-sm font-semibold text-slate-700">
                    Once a strong network of businesses is on board, we will unlock powerful features to help you grow.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Checklist Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                    <div className="flex flex-col gap-3">
                      {[
                        "Product & Service Search",
                        "Buyer Enquiries",
                        "Business Networking"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-[#12629B] w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      {[
                        "Seller Discovery",
                        "Advanced Marketplace Tools",
                        "Analytics & Insights"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-[#12629B] w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rocket Illustration */}
                  <div className="flex-shrink-0 flex items-center justify-center relative w-[130px] h-[130px] self-center">
                    <Image
                      src="/rocket3.png"
                      alt="Rocket illustration"
                      fill
                      sizes="130px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>        {/* Section 6: Stats & Founder Goal CTA Banner (Dark green, large block) */}
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
                    <span className="text-2xl lg:text-3xl font-extrabold leading-none text-white">428+</span>
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
        <section className="bg-slate-50 border-t border-slate-200 py-6 -mb-16">
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
