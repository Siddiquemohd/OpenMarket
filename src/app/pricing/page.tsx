"use client";

import React from "react";
import Link from "next/link";
import { 
  FiDollarSign, 
  FiLayers, 
  FiImage, 
  FiVideo, 
  FiPlay, 
  FiCpu, 
  FiCloud, 
  FiClock, 
  FiCalendar, 
  FiUsers, 
  FiShield, 
  FiHeadphones, 
  FiSearch,
  FiSlash,
  FiAward,
  FiCheck,
  FiX,
  FiInfo,
  FiUser
} from "react-icons/fi";
import { FaChartLine, FaUsers, FaEyeSlash, FaRocket } from "react-icons/fa";
import { useOtpModal } from "@/providers/OtpModalProvider";

export default function PricingPage() {
  const { openOtpModal } = useOtpModal();

  const highlights = [
    { text: "No Paid Rankings", icon: <FiAward className="text-[#0FA958] text-xl" /> },
    { text: "No Sponsored Search Results", icon: <FiSearch className="text-[#0B3C5F] text-xl" /> },
    { text: "No Pay-to-Win Marketplace", icon: <FiShield className="text-[#0B3C5F] text-xl" /> },
    { text: "Equal Opportunity for Every Business", icon: <FiUsers className="text-[#0B3C5F] text-xl" /> },
  ];

  const features = [
    { name: "Annual Price", icon: <FiDollarSign />, free: "₹0", starter: "₹999 / year", professional: "₹2,999 / year", business: "₹4,999 / year", enterprise: "Custom" },
    { name: "Live (Online) Status (Except Free)", icon: <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />, tooltip: "Requires active seller login to show online badge on search and details page.", free: "cross", starter: "check", professional: "check", business: "check", enterprise: "check" },
    { name: "Active Status (Available for all)", icon: <span className="w-2.5 h-2.5 rounded-full bg-[#0B3C5F] inline-block" />, tooltip: "Shows that your business page is actively maintained (visited within last 30 days).", free: "check", starter: "check", professional: "check", business: "check", enterprise: "check" },
    { name: "Products / Services", icon: <FiLayers />, free: "25", starter: "50", professional: "75", business: "100", enterprise: "Custom" },
    { name: "Images per Product / Service", icon: <FiImage />, free: "3", starter: "5", professional: "10", business: "15", enterprise: "15" },
    { name: "30-Second Videos per Product / Service", icon: <FiVideo />, free: "1", starter: "2", professional: "3", business: "5", enterprise: "5" },
    { name: "1-Minute Videos per Product / Service", icon: <FiPlay />, free: "0", starter: "0", professional: "1", business: "2", enterprise: "2" },
    { name: "AI Credits", icon: <FiCpu />, free: "100", starter: "1,000", professional: "2,500", business: "5,000", enterprise: "Custom" },
    { name: "Cloud Storage", icon: <FiCloud />, free: "500 MB", starter: "1 GB", professional: "5 GB", business: "10 GB", enterprise: "Custom" },
    { name: "Team Members", icon: <FiUsers />, free: "1", starter: "2", professional: "3", business: "5", enterprise: "Unlimited" },
    { name: "Company Verification Badge", icon: <FiShield />, free: "Optional", starter: "Optional", professional: "Optional", business: "Optional", enterprise: "Optional" },
    { name: "Customer Support", icon: <FiHeadphones />, free: "Community", starter: "Email", professional: "Email", business: "Email & Phone", enterprise: "Dedicated" },
  ];

  const renderCell = (value: string) => {
    if (value === "check") {
      return (
        <div className="flex justify-center">
          <div className="w-5.5 h-5.5 rounded-full bg-emerald-500 text-white flex items-center justify-center p-0.5 shadow-[0_2px_4px_rgba(16,185,129,0.2)]">
            <FiCheck className="text-xs stroke-[4px]" />
          </div>
        </div>
      );
    }
    if (value === "cross") {
      return (
        <div className="flex justify-center">
          <FiX className="text-red-500 text-xl font-black" />
        </div>
      );
    }
    return <span className="text-slate-700 font-bold">{value}</span>;
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pt-6 pb-20 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6 text-center md:text-left relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-8 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight select-none">
              <span className="text-[#0B3C5F]">Open</span>
              <span className="text-brand-green">Market</span> Seller Plans
            </h1>
            <p className="mt-4 text-lg md:text-xl font-semibold text-slate-500 max-w-2xl leading-relaxed">
              Choose the plan that fits your business needs.
              <br />
              <span className="text-[#0B3C5F] font-bold">Visibility is earned, never purchased.</span>
            </p>

            {/* Badges Grid */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white border border-slate-100 px-4 py-3 rounded-xl shadow-sm">
                  <div className="flex-shrink-0 text-lg">{h.icon}</div>
                  <span className="text-[12.5px] font-bold text-brand-navy leading-tight text-left">{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Shield Badge */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <div className="flex items-center gap-[14px] sm:gap-[20px] bg-white p-2 select-none">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[68px] h-[68px] sm:w-[82px] sm:h-[82px] flex-shrink-0 transition-transform duration-300 hover:scale-105">
                {/* Shield Path */}
                <path d="M40 10C55 10 65 14 65 14C65 14 65 38 65 47C65 58 55 67 40 70C25 67 15 58 15 47C15 38 15 14 15 14C15 14 25 10 40 10Z" stroke="#0B3C5F" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Checkmark Path */}
                <path d="M28 40L36 48L52 30" stroke="#0FA958" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <div className="flex flex-col text-left leading-[1.15] font-black uppercase tracking-wider text-[11px] sm:text-[13px]">
                <span className="text-[#0B3C5F]">Visibility is</span>
                <span className="text-[#0FA958]">Earned,</span>
                <span className="text-[#0B3C5F]">Never</span>
                <span className="text-[#0B3C5F]">Purchased.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-white rounded-[28px] shadow-md border border-slate-150 overflow-hidden p-1">
          
          {/* Scrollable table container */}
          <div className="overflow-x-auto rounded-[24px]">
            <table className="w-full min-w-[900px] border-collapse text-left">
              
              {/* Header */}
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="p-6 text-base font-black text-white bg-[#031427] w-[20%] text-center uppercase tracking-wider">
                    FEATURES
                  </th>
                  
                  {/* FREE Plan */}
                  <th className="p-0 text-center w-[16%] border-l border-slate-150 bg-white">
                    <div className="h-2 bg-[#0FA958] w-full" />
                    <div className="py-6 px-4">
                      <h3 className="text-base font-black text-[#0FA958] tracking-wider uppercase">FREE</h3>
                      <p className="text-2xl font-black text-[#0B3C5F] mt-2">₹0</p>
                    </div>
                  </th>

                  {/* STARTER Plan */}
                  <th className="p-0 text-center w-[16%] border-l border-slate-150 bg-[#0B3C5F] text-white">
                    <div className="py-6 px-4">
                      <h3 className="text-base font-black tracking-wider uppercase text-white">STARTER</h3>
                      <p className="text-2xl font-black text-white mt-2">₹999<span className="text-[12px] text-white/80 font-bold"> / year</span></p>
                    </div>
                  </th>

                  {/* PROFESSIONAL Plan */}
                  <th className="p-0 text-center w-[16%] border-l border-slate-150 bg-[#12629B] text-white">
                    <div className="py-6 px-4">
                      <h3 className="text-base font-black tracking-wider uppercase text-white">PROFESSIONAL</h3>
                      <p className="text-2xl font-black text-white mt-2">₹2,999<span className="text-[12px] text-white/80 font-bold"> / year</span></p>
                    </div>
                  </th>

                  {/* BUSINESS Plan */}
                  <th className="p-0 text-center w-[16%] border-l border-slate-150 bg-[#0FA958] text-white">
                    <div className="py-6 px-4">
                      <h3 className="text-base font-black tracking-wider uppercase text-white">BUSINESS</h3>
                      <p className="text-2xl font-black text-white mt-2">₹4,999<span className="text-[12px] text-white/80 font-bold"> / year</span></p>
                    </div>
                  </th>

                  {/* ENTERPRISE Plan */}
                  <th className="p-0 text-center w-[16%] border-l border-slate-150 bg-[#031427] text-white">
                    <div className="py-6 px-4">
                      <h3 className="text-base font-black tracking-wider uppercase text-white">ENTERPRISE</h3>
                      <p className="text-2xl font-black text-white mt-2">Custom</p>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Rows */}
              <tbody>
                {features.map((f, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/20 transition-colors">
                    {/* Feature Name */}
                    <td className="p-5 font-bold text-[14px] text-slate-700 flex items-center gap-3 bg-slate-50/40 min-h-[64px]">
                      <span className="text-slate-400 text-lg flex-shrink-0">{f.icon}</span>
                      <span className="leading-snug">{f.name}</span>
                      {f.tooltip && (
                        <div className="relative group ml-1.5 cursor-pointer inline-flex items-center">
                          <FiInfo className="text-slate-400 hover:text-slate-600 text-sm" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-800 text-white text-[11px] font-medium p-2.5 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg z-50 text-center leading-normal">
                            {f.tooltip}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
                          </div>
                        </div>
                      )}
                    </td>
                    
                    {/* Free val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-100 bg-slate-50/10">
                      {renderCell(f.free)}
                    </td>

                    {/* Starter val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-100">
                      {renderCell(f.starter)}
                    </td>

                    {/* Professional val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-100">
                      {renderCell(f.professional)}
                    </td>

                    {/* Business val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-100">
                      {renderCell(f.business)}
                    </td>

                    {/* Enterprise val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-100">
                      {renderCell(f.enterprise)}
                    </td>
                  </tr>
                ))}

                {/* Bottom Buttons Row */}
                <tr>
                  <td className="p-6 bg-slate-50/40" />
                  
                  {/* Free button */}
                  <td className="p-6 text-center border-l border-slate-100 bg-slate-50/10">
                    <button 
                      onClick={() => openOtpModal()}
                      className="w-full max-w-[130px] border-2 border-[#0FA958] text-[#0FA958] py-2 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-[#0FA958] hover:text-white"
                    >
                      Get Started
                    </button>
                  </td>

                  {/* Starter button */}
                  <td className="p-6 text-center border-l border-slate-100">
                    <button 
                      onClick={() => openOtpModal()}
                      className="w-full max-w-[130px] bg-[#0B3C5F] text-white py-2.5 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-[#12629B]"
                    >
                      Choose Plan
                    </button>
                  </td>

                  {/* Professional button */}
                  <td className="p-6 text-center border-l border-slate-100">
                    <button 
                      onClick={() => openOtpModal()}
                      className="w-full max-w-[130px] bg-[#12629B] text-white py-2.5 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-[#0B3C5F]"
                    >
                      Choose Plan
                    </button>
                  </td>

                  {/* Business button */}
                  <td className="p-6 text-center border-l border-slate-100">
                    <button 
                      onClick={() => openOtpModal()}
                      className="w-full max-w-[130px] bg-[#0FA958] text-white py-2.5 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-[#0c8a48]"
                    >
                      Choose Plan
                    </button>
                  </td>

                  {/* Enterprise button */}
                  <td className="p-6 text-center border-l border-slate-100">
                    <Link 
                      href="/contact-us"
                      className="inline-block w-full max-w-[130px] bg-[#031427] text-white py-2.5 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-[#0A2540] text-center"
                    >
                      Contact Us
                    </Link>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>

        {/* Misuse Disclaimer Banner */}
        <div className="mt-6 bg-slate-50 border border-slate-200 px-6 py-4.5 rounded-[20px] flex items-center gap-4.5 shadow-sm max-w-7xl mx-auto">
          <div className="w-10 h-10 rounded-full bg-blue-50/50 flex items-center justify-center text-[#0B3C5F] text-xl flex-shrink-0 border border-blue-100">
            <FiShield className="stroke-[2.5px]" />
          </div>
          <p className="text-[12px] font-bold text-slate-500 leading-relaxed">
            Any misuse of the platform by using Live Status through automated means shall be suspended from the platform. 
            Further repeated offences shall lead to permanent ban of the seller.
          </p>
        </div>
      </section>

      {/* Understand Seller Status Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white border border-slate-150 rounded-[28px] p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight text-center">
            Understand Seller Status
          </h2>
          <div className="h-[2px] w-10 bg-brand-green mt-3.5 mb-8 mx-auto rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "LIVE",
                badge: "Paid Members Only",
                dotColor: "bg-emerald-500 animate-pulse",
                textColor: "text-emerald-600",
                avatarRing: "ring-emerald-500/20",
                avatarBg: "bg-emerald-50 text-emerald-600",
                bullets: [
                  "Highest visibility",
                  "Online badge",
                  "Better enquiries",
                  "Builds trust"
                ],
                availableFor: "Starter, Professional, Business & Enterprise",
                availableBg: "bg-[#E8F8F0] text-emerald-800 border-emerald-100"
              },
              {
                name: "ACTIVE",
                badge: "All Sellers",
                dotColor: "bg-blue-600",
                textColor: "text-blue-600",
                avatarRing: "ring-blue-500/20",
                avatarBg: "bg-blue-50 text-blue-600",
                bullets: [
                  "Fully searchable",
                  "Normal ranking",
                  "Maintains presence"
                ],
                availableFor: "All sellers",
                availableBg: "bg-[#E6EFF5] text-blue-800 border-blue-100"
              },
              {
                name: "INACTIVE",
                badge: "All Sellers",
                dotColor: "bg-slate-400",
                textColor: "text-slate-500",
                avatarRing: "ring-slate-300",
                avatarBg: "bg-slate-100 text-slate-500",
                bullets: [
                  "Lower visibility",
                  "Ranked below ACTIVE sellers",
                  "Profile remains searchable"
                ],
                availableFor: "All sellers",
                availableBg: "bg-slate-100 text-slate-700 border-slate-200"
              },
              {
                name: "SUSPENDED",
                badge: "All Sellers",
                dotColor: "bg-red-500",
                textColor: "text-red-600",
                avatarRing: "ring-red-500/20",
                avatarBg: "bg-red-50 text-red-600",
                bullets: [
                  "Hidden from search results",
                  "Products hidden",
                  "Data is preserved"
                ],
                availableFor: "All sellers",
                availableBg: "bg-red-50 text-red-800 border-red-100"
              }
            ].map((status, i) => (
              <div key={i} className="flex flex-col justify-between border border-slate-100 rounded-2xl p-4 bg-slate-50/20 hover:shadow-md transition-all">
                <div>
                  {/* Dot + Name */}
                  <div className="flex items-center gap-1.5 mb-1 justify-center sm:justify-start">
                    <span className={`w-2.5 h-2.5 rounded-full ${status.dotColor}`} />
                    <span className={`text-[13px] font-black tracking-wide ${status.textColor} uppercase`}>
                      {status.name}
                    </span>
                  </div>
                  {/* Sub-badge */}
                  <span className="text-[9px] font-extrabold text-slate-400 block mb-3 uppercase tracking-wider text-center sm:text-left">
                    {status.badge}
                  </span>
                  
                  {/* Avatar Icon */}
                  <div className={`relative w-14 h-14 rounded-full border-2 border-slate-200 ${status.avatarBg} flex items-center justify-center text-xl mx-auto mb-4 ring-4 ${status.avatarRing}`}>
                    <FiUser className="stroke-[2.5px]" />
                    {status.name === "LIVE" && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                    )}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 list-none mb-4 pl-0">
                    {status.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-[11.5px] font-bold text-slate-600 flex items-start gap-1.5 justify-center sm:justify-start">
                        <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 bg-slate-400`} />
                        <span className="leading-snug text-center sm:text-left">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Available for pill */}
                <div className={`mt-2 p-2 rounded-xl text-[9px] font-black text-center border leading-snug uppercase tracking-wide ${status.availableBg}`}>
                  Available for: <br /> <span className="font-extrabold text-slate-800">{status.availableFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Lifecycle Section (Below Cards) */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white border border-slate-150 rounded-[28px] p-6 md:p-8 shadow-sm flex flex-col justify-between items-center text-center">
          <div className="w-full">
            <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight">
              Status Lifecycle
            </h2>
            <div className="h-[2px] w-10 bg-brand-green mt-3.5 mb-8 mx-auto rounded-full" />

            {/* Responsive lifecycle flow diagram */}
            <div className="w-full max-w-[760px] mx-auto py-2">
              <svg className="w-full h-auto" viewBox="0 0 600 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 2 L 10 5 L 0 8 z" fill="#10B981" />
                  </marker>
                  <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 2 L 10 5 L 0 8 z" fill="#3B82F6" />
                  </marker>
                  <marker id="arrow-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 2 L 10 5 L 0 8 z" fill="#9CA3AF" />
                  </marker>
                  <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 2 L 10 5 L 0 8 z" fill="#EF4444" />
                  </marker>
                </defs>

                {/* Connections / Paths */}
                {/* 1. Registration -> ACTIVE (left) */}
                <path d="M 100 132 L 145 132" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-green)" />

                {/* 2. ACTIVE (left) -> LIVE */}
                <path d="M 197 100 L 197 42 L 300 42" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-green)" />
                <text x="248" y="34" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#059669" textAnchor="middle">Logged In</text>

                {/* 3. LIVE -> ACTIVE (right) */}
                <path d="M 405 42 L 507 42 L 507 100" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-blue)" />
                <text x="456" y="26" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Logout /</text>
                <text x="456" y="36" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#1D4ED8" textAnchor="middle">Session End</text>

                {/* 4. ACTIVE (left) -> INACTIVE */}
                <path d="M 197 164 L 197 182 L 352 182 L 352 200" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-gray)" />

                {/* 5. INACTIVE -> ACTIVE (left) (Login) */}
                <path d="M 300 232 L 180 232 L 180 164" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-green)" />
                <text x="168" y="185" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#059669" textAnchor="middle">Login</text>

                {/* 6. INACTIVE -> SUSPENDED */}
                <path d="M 405 232 L 455 232" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-red)" />
                <text x="430" y="214" fontFamily="sans-serif" fontSize="7.5" fontWeight="bold" fill="#DC2626" textAnchor="middle">No login for</text>
                <text x="430" y="224" fontFamily="sans-serif" fontSize="7.5" fontWeight="bold" fill="#DC2626" textAnchor="middle">180 days</text>

                {/* 7. ACTIVE (right) <-> SUSPENDED */}
                {/* Downward */}
                <path d="M 502 164 L 502 200" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-blue)" />
                {/* Upward */}
                <path d="M 512 200 L 512 164" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-blue)" />

                {/* Nodes / Cards */}
                {/* Registration */}
                <g>
                  <rect x="15" y="110" width="85" height="44" rx="8" fill="white" stroke="#10B981" strokeWidth="1" />
                  <text x="57" y="136" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#059669" textAnchor="middle">Registration</text>
                </g>

                {/* ACTIVE Left */}
                <g>
                  <rect x="145" y="100" width="105" height="64" rx="10" fill="white" stroke="#3B82F6" stroke-width="1.5" />
                  <circle cx="177" cy="120" r="3" fill="#3B82F6" />
                  <text x="185" y="123" fontFamily="sans-serif" fontSize="10" fontWeight="black" fill="#1D4ED8" textAnchor="start">ACTIVE</text>
                  <text x="197" y="138" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">Visited within</text>
                  <text x="197" y="148" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">last 30 days</text>
                </g>

                {/* LIVE */}
                <g>
                  <rect x="300" y="10" width="105" height="64" rx="10" fill="white" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="332" cy="30" r="3" fill="#10B981" />
                  <text x="340" y="33" fontFamily="sans-serif" fontSize="10" fontWeight="black" fill="#059669" textAnchor="start">LIVE</text>
                  <text x="352" y="48" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">Paid Member</text>
                  <text x="352" y="58" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">+ Logged In</text>
                </g>

                {/* ACTIVE Right */}
                <g>
                  <rect x="455" y="100" width="105" height="64" rx="10" fill="white" stroke="#3B82F6" stroke-width="1.5" />
                  <circle cx="487" cy="120" r="3" fill="#3B82F6" />
                  <text x="495" y="123" fontFamily="sans-serif" fontSize="10" fontWeight="black" fill="#1D4ED8" textAnchor="start">ACTIVE</text>
                  <text x="507" y="138" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">Visited within</text>
                  <text x="507" y="148" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">last 30 days</text>
                </g>

                {/* INACTIVE */}
                <g>
                  <rect x="300" y="200" width="105" height="64" rx="10" fill="white" stroke="#9CA3AF" strokeDasharray="4 4" strokeWidth="1.5" />
                  <circle cx="328" cy="220" r="3" fill="#9CA3AF" />
                  <text x="336" y="223" fontFamily="sans-serif" fontSize="10" fontWeight="black" fill="#4B5563" textAnchor="start">INACTIVE</text>
                  <text x="352" y="238" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">No login for</text>
                  <text x="352" y="248" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">&gt; 30 days</text>
                </g>

                {/* SUSPENDED */}
                <g>
                  <rect x="455" y="200" width="105" height="64" rx="10" fill="white" stroke="#EF4444" strokeWidth="1.5" />
                  <circle cx="478" cy="220" r="3" fill="#EF4444" />
                  <text x="486" y="223" fontFamily="sans-serif" fontSize="10" fontWeight="black" fill="#DC2626" textAnchor="start">SUSPENDED</text>
                  <text x="507" y="238" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">No activity for</text>
                  <text x="507" y="248" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#6B7280" textAnchor="middle">&gt; 6 months</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Simply log in again to return to ACTIVE status banner */}
          <div className="mt-6 bg-[#E6EFF5] border border-blue-100 px-6 py-3.5 rounded-2xl flex items-center gap-3 w-full justify-center">
            <FiInfo className="text-blue-600 text-sm flex-shrink-0" />
            <p className="text-[11.5px] font-bold text-slate-650 leading-normal">
              Simply log in again to return to <span className="text-blue-600 font-black">ACTIVE</span> status.
            </p>
          </div>
        </div>
      </section>

      {/* Powerful Tools Section */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-black text-center text-brand-navy uppercase tracking-tight">
          Powerful Tools. Better Business.
        </h2>
        <div className="h-[3px] w-12 bg-brand-green mt-3.5 mb-14 mx-auto rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {[
            { title: "AI Credits", desc: "Create professional listings with the power of AI.", icon: <FiCpu /> },
            { title: "Cloud Storage", desc: "Store and manage all your business assets securely.", icon: <FiCloud /> },
            { title: "Verification Badge", desc: "Build trust and credibility with buyers.", icon: <FiShield /> },
            { title: "Team Collaboration", desc: "Add your team and grow together.", icon: <FiUsers /> },
            { title: "Priority Support", desc: "Get the help you need, when you need it.", icon: <FiHeadphones /> },
          ].map((tool, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-2xl border border-slate-150 bg-white flex items-center justify-center text-brand-green text-2xl shadow-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                {tool.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-wide leading-none">{tool.title}</h3>
                <p className="text-xs sm:text-[13px] font-bold text-slate-400 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="md:col-span-7">
            <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight">
              Our Promise
            </h2>
            <div className="h-[2px] w-8 bg-brand-green mt-3.5 mb-5 rounded-full" />
            <p className="text-[14.5px] font-bold text-slate-500 leading-relaxed">
              Unlike traditional B2B marketplaces, OpenMarket does not sell search rankings or visibility. 
              Every seller earns visibility through participation, responsiveness, and consistent activity.
            </p>
          </div>

          {/* Right Tagline */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="text-center md:text-right select-none leading-none">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#0B3C5F]">
                Be Active.
              </h3>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-brand-green mt-2">
                Be Visible.
              </h3>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
