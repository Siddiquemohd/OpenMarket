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
  FiCheck
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
    { name: "Products / Services", icon: <FiLayers />, free: "25", starter: "50", professional: "75", business: "100", enterprise: "Custom" },
    { name: "Images per Product / Service", icon: <FiImage />, free: "3", starter: "5", professional: "10", business: "15", enterprise: "15" },
    { name: "30-Sec Videos per Product", icon: <FiVideo />, free: "1", starter: "2", professional: "3", business: "5", enterprise: "5" },
    { name: "1-Min Videos per Product", icon: <FiPlay />, free: "0", starter: "0", professional: "1", business: "2", enterprise: "2" },
    { name: "AI Credits", icon: <FiCpu />, free: "100", starter: "1,000", professional: "2,500", business: "5,000", enterprise: "Custom" },
    { name: "Cloud Storage", icon: <FiCloud />, free: "500 MB", starter: "1 GB", professional: "5 GB", business: "10 GB", enterprise: "Custom" },
    { name: "Login to Maintain LIVE Status", icon: <FiClock />, free: "Daily", starter: "Every 4 Days", professional: "Every 5 Days", business: "Every 7 Days", enterprise: "Every 15 Days" },
    { name: "Max LIVE Days per Month", icon: <FiCalendar />, free: "8", starter: "15", professional: "20", business: "30", enterprise: "30" },
    { name: "Team Members", icon: <FiUsers />, free: "1", starter: "2", professional: "3", business: "5", enterprise: "Unlimited" },
    { name: "Company Verification Badge", icon: <FiShield />, free: "Optional", starter: "Optional", professional: "Optional", business: "Optional", enterprise: "Optional" },
    { name: "Customer Support", icon: <FiHeadphones />, free: "Community", starter: "Email", professional: "Email", business: "Email & Phone", enterprise: "Dedicated" },
  ];

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
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative bg-white border border-slate-100 p-8 rounded-3xl shadow-md w-full max-w-[280px] flex flex-col items-center text-center group transition-all duration-300 hover:shadow-lg">
              {/* Shield Circle */}
              <div className="w-20 h-20 rounded-full border-4 border-slate-100 bg-[#0B3C5F]/5 flex items-center justify-center text-brand-green text-4xl mb-4 relative">
                <FiShield className="text-[#0B3C5F]" />
                <FiCheck className="absolute text-brand-green text-2xl mt-0.5" />
              </div>
              <p className="text-xs font-black tracking-widest text-[#0FA958] uppercase">Visibility is</p>
              <h3 className="text-xl font-black text-[#0B3C5F] tracking-tight mt-1">EARNED,</h3>
              <p className="text-xs font-black tracking-widest text-red-500 uppercase mt-2">NEVER</p>
              <h3 className="text-xl font-black text-red-500 tracking-tight mt-1">PURCHASED.</h3>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
          
          {/* Scrollable table container */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              
              {/* Header */}
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="p-6 text-lg font-black text-brand-navy w-1/4 bg-slate-50/50">
                    FEATURES
                  </th>
                  
                  {/* FREE Plan */}
                  <th className="p-0 text-center w-[15%] border-l border-slate-100">
                    <div className="h-2 bg-brand-green w-full" />
                    <div className="p-6">
                      <h3 className="text-base font-black text-brand-green tracking-wider uppercase">FREE</h3>
                      <p className="text-2xl font-black text-brand-navy mt-2">₹0</p>
                    </div>
                  </th>

                  {/* STARTER Plan */}
                  <th className="p-0 text-center w-[15%] border-l border-slate-100">
                    <div className="h-2 bg-[#0B3C5F] w-full" />
                    <div className="p-6">
                      <h3 className="text-base font-black text-[#0B3C5F] tracking-wider uppercase">STARTER</h3>
                      <p className="text-2xl font-black text-brand-navy mt-2">₹999<span className="text-[12px] text-slate-400 font-semibold">/yr</span></p>
                    </div>
                  </th>

                  {/* PROFESSIONAL Plan */}
                  <th className="p-0 text-center w-[15%] border-l border-slate-100">
                    <div className="h-2 bg-[#12629B] w-full" />
                    <div className="p-6">
                      <h3 className="text-base font-black text-[#12629B] tracking-wider uppercase">PROFESSIONAL</h3>
                      <p className="text-2xl font-black text-brand-navy mt-2">₹2,999<span className="text-[12px] text-slate-400 font-semibold">/yr</span></p>
                    </div>
                  </th>

                  {/* BUSINESS Plan */}
                  <th className="p-0 text-center w-[15%] border-l border-slate-100">
                    <div className="h-2 bg-[#0FA958] w-full" />
                    <div className="p-6">
                      <h3 className="text-base font-black text-[#0FA958] tracking-wider uppercase text-brand-green">BUSINESS</h3>
                      <p className="text-2xl font-black text-brand-navy mt-2">₹4,999<span className="text-[12px] text-slate-400 font-semibold">/yr</span></p>
                    </div>
                  </th>

                  {/* ENTERPRISE Plan */}
                  <th className="p-0 text-center w-[15%] border-l border-slate-100">
                    <div className="h-2 bg-brand-navy w-full" />
                    <div className="p-6">
                      <h3 className="text-base font-black text-brand-navy tracking-wider uppercase">ENTERPRISE</h3>
                      <p className="text-2xl font-black text-brand-navy mt-2">Custom</p>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Rows */}
              <tbody>
                {features.map((f, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/20 transition-colors">
                    {/* Feature Name */}
                    <td className="p-5 font-bold text-[14.5px] text-slate-600 flex items-center gap-3 bg-slate-50/30">
                      <span className="text-slate-400 text-lg flex-shrink-0">{f.icon}</span>
                      <span className="leading-snug">{f.name}</span>
                    </td>
                    
                    {/* Free val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-50">
                      {f.free}
                    </td>

                    {/* Starter val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-50">
                      {f.starter}
                    </td>

                    {/* Professional val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-50">
                      {f.professional}
                    </td>

                    {/* Business val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-50">
                      {f.business}
                    </td>

                    {/* Enterprise val */}
                    <td className="p-5 text-center font-bold text-[14px] text-slate-600 border-l border-slate-50">
                      {f.enterprise}
                    </td>
                  </tr>
                ))}

                {/* Bottom Buttons Row */}
                <tr>
                  <td className="p-6 bg-slate-50/30" />
                  
                  {/* Free button */}
                  <td className="p-6 text-center border-l border-slate-50">
                    <button 
                      onClick={() => openOtpModal()}
                      className="w-full max-w-[130px] border-2 border-brand-green text-brand-green py-2 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-brand-green hover:text-white"
                    >
                      Get Started
                    </button>
                  </td>

                  {/* Starter button */}
                  <td className="p-6 text-center border-l border-slate-50">
                    <button 
                      onClick={() => openOtpModal()}
                      className="w-full max-w-[130px] bg-[#0B3C5F] text-white py-2.5 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-[#12629B]"
                    >
                      Choose Plan
                    </button>
                  </td>

                  {/* Professional button */}
                  <td className="p-6 text-center border-l border-slate-50">
                    <button 
                      onClick={() => openOtpModal()}
                      className="w-full max-w-[130px] bg-[#12629B] text-white py-2.5 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-[#0B3C5F]"
                    >
                      Choose Plan
                    </button>
                  </td>

                  {/* Business button */}
                  <td className="p-6 text-center border-l border-slate-50">
                    <button 
                      onClick={() => openOtpModal()}
                      className="w-full max-w-[130px] bg-[#0FA958] text-white py-2.5 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-[#0c8a48]"
                    >
                      Choose Plan
                    </button>
                  </td>

                  {/* Enterprise button */}
                  <td className="p-6 text-center border-l border-slate-50">
                    <Link 
                      href="/contact-us"
                      className="inline-block w-full max-w-[130px] bg-brand-navy text-white py-2.5 px-3 rounded-xl font-extrabold text-sm transition-all hover:bg-brand-deep-navy text-center"
                    >
                      Contact Us
                    </Link>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>
      </section>

      {/* Understand Seller Status Section */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-black text-center text-brand-navy uppercase tracking-tight">
          Understand Seller Status
        </h2>
        <div className="h-[3px] w-12 bg-brand-green mt-3.5 mb-12 mx-auto rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: LIVE */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            
            <div className="flex gap-5">
              {/* Left Column: Large Circular Logo */}
              <div className="flex-shrink-0">
                <div className="w-[72px] h-[72px] rounded-full border-4 border-emerald-50 bg-brand-green flex items-center justify-center text-white text-3xl shadow-inner">
                  <FaChartLine />
                </div>
              </div>
              
              {/* Right Column: Title & Text */}
              <div className="flex-grow flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                  <h3 className="text-base font-black text-brand-navy tracking-wide uppercase leading-none">LIVE</h3>
                </div>
                <p className="text-[12px] font-semibold text-slate-400 mt-1 leading-snug">You recently logged in.</p>
                
                <ul className="mt-4 flex flex-col gap-2.5 list-disc pl-4 text-slate-600">
                  {[
                    "Highest search visibility",
                    "Ranked above all sellers",
                    "More buyer enquiries",
                    "Shows buyers you're available now"
                  ].map((item, i) => (
                    <li key={i} className="text-[12.5px] font-bold leading-tight">
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Bottom green notification banner */}
            <div className="mt-6 bg-[#E8F8F0] border border-brand-green/10 px-4 py-3 rounded-2xl flex items-center justify-between gap-4">
              <p className="text-[11px] font-extrabold text-brand-green leading-normal max-w-[200px]">
                LIVE status remains as per your plan. Once it expires, you move to ACTIVE status.
              </p>
              <FaRocket className="text-brand-green text-lg flex-shrink-0 -rotate-45" />
            </div>

          </div>

          {/* Card 2: ACTIVE */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            
            <div className="flex gap-5">
              {/* Left Column: Large Circular Logo */}
              <div className="flex-shrink-0">
                <div className="w-[72px] h-[72px] rounded-full border-4 border-[#E6EFF5] bg-[#0B3C5F] flex items-center justify-center text-white text-3xl shadow-inner">
                  <FaUsers />
                </div>
              </div>
              
              {/* Right Column: Title & Text */}
              <div className="flex-grow flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B3C5F]" />
                  <h3 className="text-base font-black text-brand-navy tracking-wide uppercase leading-none">ACTIVE</h3>
                </div>
                <p className="text-[12px] font-semibold text-slate-400 mt-1 leading-snug">Your LIVE days are used up or expired.</p>
                
                <ul className="mt-4 flex flex-col gap-2.5 list-disc pl-4 text-slate-600">
                  {[
                    "Ranked above inactive sellers",
                    "Indicates an actively participating seller",
                    "Better visibility than inactive businesses"
                  ].map((item, i) => (
                    <li key={i} className="text-[12.5px] font-bold leading-tight">
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Card 3: INACTIVE */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            
            <div className="flex gap-5">
              {/* Left Column: Large Circular Logo */}
              <div className="flex-shrink-0">
                <div className="w-[72px] h-[72px] rounded-full border-4 border-[#F0F2F5] bg-slate-400 flex items-center justify-center text-white text-3xl shadow-inner">
                  <FaEyeSlash />
                </div>
              </div>
              
              {/* Right Column: Title & Text */}
              <div className="flex-grow flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <h3 className="text-base font-black text-brand-navy tracking-wide uppercase leading-none">INACTIVE</h3>
                </div>
                <p className="text-[12px] font-semibold text-slate-400 mt-1 leading-snug">You haven't logged in recently.</p>
                
                <ul className="mt-4 flex flex-col gap-2.5 list-disc pl-4 text-slate-600">
                  {[
                    "Business remains searchable",
                    "Lower visibility compared to LIVE & ACTIVE businesses"
                  ].map((item, i) => (
                    <li key={i} className="text-[12.5px] font-bold leading-tight">
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Powerful Tools Section */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-black text-center text-brand-navy uppercase tracking-tight">
          Powerful Tools. Better Business.
        </h2>
        <div className="h-[2px] w-10 bg-brand-green mt-3.5 mb-12 mx-auto rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {[
            { title: "AI Credits", desc: "Create professional listings with the power of AI.", icon: <FiCpu /> },
            { title: "Cloud Storage", desc: "Store and manage all your business assets securely.", icon: <FiCloud /> },
            { title: "Verification Badge", desc: "Build trust and credibility with buyers.", icon: <FiShield /> },
            { title: "Team Collaboration", desc: "Add your team and grow together.", icon: <FiUsers /> },
            { title: "Priority Support", desc: "Get the help you need, when you need it.", icon: <FiHeadphones /> },
          ].map((tool, idx) => (
            <div key={idx} className="flex items-start gap-3 group">
              <div className="w-11 h-11 rounded-xl border border-slate-150 bg-white flex items-center justify-center text-brand-green text-xl shadow-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                {tool.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[13px] font-black text-brand-navy uppercase tracking-wide leading-none">{tool.title}</h3>
                <p className="text-[11px] font-semibold text-slate-400 leading-relaxed">
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
                Be Visible. !!
              </h3>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
