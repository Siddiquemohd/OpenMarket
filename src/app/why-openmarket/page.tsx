"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaLinkedin, 
  FaWhatsapp, 
  FaUsers, 
  FaArrowRight, 
  FaGraduationCap, 
  FaBriefcase, 
  FaStar, 
  FaBuilding, 
  FaLock, 
  FaBalanceScale, 
  FaHandshake,
  FaCheck,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";



/**
 * Reusable Stat Item Component
 */
interface StatItemProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}
function StatItem({ value, label, icon }: StatItemProps) {
  return (
    <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-2xl md:text-3xl font-black text-brand-navy leading-none mb-1 tracking-tight">
          {value}
        </span>
        <span className="text-[11px] sm:text-xs font-bold text-slate-500 leading-snug">
          {label}
        </span>
      </div>
    </div>
  );
}

/**
 * Why OpenMarket Page component
 */
export default function WhyOpenMarket() {
  const credentials = [
    { text: "Electrical Engineer, VJTI Mumbai (2003)", icon: <FaGraduationCap className="text-brand-navy" size={15} /> },
    { text: "Founder & Director, Uneefy Intratech Pvt. Ltd.", icon: <FaBriefcase className="text-brand-navy" size={14} /> },
    { text: "20+ Years in Industrial Products, Projects & B2B Business", icon: <FaStar className="text-brand-navy" size={14} /> },
    { text: "Worked with L&T, Bajaj Electricals, Valmont and other industry leaders", icon: <FaUsers className="text-brand-navy" size={14} /> },
    { text: "Served 300+ Industrial Customers", icon: <FaUsers className="text-brand-navy" size={14} /> },
    { text: "Passionate about building a fair and transparent marketplace for Indian businesses", icon: <FiCheckCircle className="text-brand-navy" size={15} /> },
  ];

  const benefits = [
    "Create your business profile",
    "Showcase your products & services",
    "Invite your network",
    "Influence the future roadmap",
  ];

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">
        
        {/* 1. Hero & Founder Profile Card */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading and Introduction */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col self-start">
                  <span className="text-brand-green text-sm font-black tracking-widest uppercase">
                    WHY OPENMARKET?
                  </span>
                  <div className="h-[2.5px] w-12 bg-brand-green mt-1.5" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-brand-navy mt-4">
                  We’re Not Building <br />
                  Another Marketplace. <br />
                  <span className="text-brand-green block mt-1.5">
                    We’re Building <br />
                    a Movement.
                  </span>
                </h1>
                <div className="h-[2.5px] w-16 bg-brand-green mt-3 mb-1" />
              </div>

              {/* Body Text Matching Screenshot */}
              <div className="flex flex-col gap-5 text-slate-600 font-semibold text-sm md:text-[15px] leading-relaxed max-w-2xl">
                <p>
                  For years, businesses have been told that success on B2B marketplaces depends on spending more money for visibility.
                </p>
                <p className="text-brand-navy font-black text-[16px] md:text-[17px]">
                  We believe there is a better way.
                </p>
                <p>
                  OpenMarket is being built to create a fair, transparent, and trusted marketplace where every seller gets an opportunity to grow and every buyer gets access to genuine suppliers.
                </p>
                <p>
                  This is not just about technology. It is about empowering manufacturers, traders, service providers, startups, and entrepreneurs who believe business should be built on trust, quality, and relationships—not on who pays the most.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="/#waitlist-banner"
                  className="inline-flex items-center gap-4 bg-brand-green hover:bg-brand-dark-green text-white pl-6 pr-8 py-3.5 rounded-2xl shadow-md transition-all duration-300 hover:scale-102 active:scale-98 text-left group"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-white">
                    <FaUsers size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-black tracking-wide flex items-center gap-1.5">
                      Join the First 1000 Businesses
                      <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-100 mt-0.5">
                      Be an Early Member of OpenMarket
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Founder Profile Card matching the portrait styling */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="max-w-[430px] w-full bg-white border border-slate-100 rounded-[32px] shadow-xl relative overflow-hidden">
                
                {/* Portrait Area Container */}
                <div className="relative h-[328px] w-full overflow-hidden flex justify-center">
                  {/* Pale Green Semi-Circle (Arch) Background behind Portrait */}
                  <div className="absolute left-1/2 bottom-0 h-[210px] w-[420px] -translate-x-1/2 rounded-t-full bg-brand-light-green pointer-events-none" />

                  {/* Dotted Grid Pattern SVG behind portrait but on top of arch */}
                  <div 
                    className="absolute top-12 right-6 w-64 h-64 opacity-40 pointer-events-none" 
                    style={{ 
                      backgroundImage: 'radial-gradient(#0FA958 1.5px, transparent 1.5px)', 
                      backgroundSize: '10px 10px',
                      WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 65%)',
                      maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 65%)'
                    }} 
                  />

                  {/* Profile Image - Normal Portrait with bottom crop */}
                  <div className="absolute z-10 bottom-0 w-[400px] h-[328px] overflow-hidden left-1/2 -translate-x-1/2">
                    <div className="absolute w-[400px] h-[340px] -bottom-[12px] left-0">
                      <Image
                        src="/founder2.png"
                        alt="Kiran Pailwan - Founder, OpenMarket"
                        fill
                        sizes="400px"
                        priority
                        className="object-contain object-bottom"
                      />
                    </div>
                  </div>
                </div>

                {/* Overlapping Attached Info Card below */}
                <div className="relative z-20 bg-white -mt-6 p-6 rounded-[32px] shadow-[-5px_-5px_15px_-5px_rgba(0,0,0,0.02)]">
                  <div className="text-left pb-4 border-b border-slate-100">
                    <span className="text-[10px] font-black text-brand-green tracking-widest uppercase block mb-1">
                      MEET THE FOUNDER
                    </span>
                    <h3 className="text-[22px] font-black text-brand-navy leading-snug">
                      Kiran Pailwan
                    </h3>
                    <span className="text-xs font-bold text-brand-green tracking-wide block mt-0.5">
                      Founder, OpenMarket
                    </span>
                  </div>

                  {/* Credentials checklist */}
                  <div className="py-4 flex flex-col gap-3.5">
                    {credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <span className="flex-shrink-0 flex items-center justify-center w-[22px] h-[22px] rounded-full bg-brand-light-green text-brand-navy mt-0.5 shadow-sm">
                          {cred.icon}
                        </span>
                        <span className="text-[13.5px] font-bold text-brand-navy leading-normal">
                          {cred.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Links */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-center gap-3 w-full my-1">
                      <div className="flex-grow h-[1px] bg-slate-200" />
                      <span className="text-[11px] font-black text-brand-green text-center uppercase tracking-widest whitespace-nowrap">
                        Connect with Kiran
                      </span>
                      <div className="flex-grow h-[1px] bg-slate-200" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3.5">
                      {/* LinkedIn Button */}
                      <a
                        href="https://www.linkedin.com/in/kiranpailwan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 border border-[#0077B5] hover:bg-[#0077B5]/5 text-[#0077B5] rounded-xl font-bold text-xs shadow-sm transition-all"
                      >
                        <FaLinkedin size={16} />
                        <span>LinkedIn</span>
                      </a>

                      {/* WhatsApp Button */}
                      <a
                        href="https://wa.me/918108359977"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 border border-[#25D366] hover:bg-[#25D366]/5 text-[#25D366] rounded-xl font-bold text-xs shadow-sm transition-all"
                      >
                        <FaWhatsapp size={16} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                    
                    <span className="text-[10px] font-semibold text-slate-400 italic text-center mt-1.5 block">
                      I personally read every message from our founding members.
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 2. Mission Section (Single Large Card containing Header and Pillars) */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-12 lg:p-14 shadow-sm w-full">
              
              {/* Centered Mission Header */}
              <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
                <div className="flex items-center gap-4 w-full max-w-xl mb-4">
                  <div className="flex-grow h-[1.5px] bg-brand-green/30" />
                  <span className="text-xs font-black text-brand-green tracking-widest uppercase">
                    OUR MISSION
                  </span>
                  <div className="flex-grow h-[1.5px] bg-brand-green/30" />
                </div>
                
                <h2 className="text-2xl md:text-[32px] lg:text-[38px] font-extrabold text-brand-navy tracking-tight leading-none mb-4 md:whitespace-nowrap">
                  To build India’s most trusted B2B marketplace.
                </h2>
                <p className="text-xs md:text-[14px] font-semibold text-slate-500 max-w-3xl leading-relaxed">
                  A marketplace that is open. A marketplace that is fair. A marketplace built by its community.
                </p>
              </div>

              {/* Three Mission Items Grid with Vertical Dividers */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 md:gap-0 items-center w-full">
                
                {/* Item 1: Open */}
                <div className="flex items-center gap-5 md:pr-6 lg:pr-8">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-brand-light-green flex items-center justify-center shadow-sm">
                    <FaLock className="text-brand-green text-[22px] lg:text-[26px]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg lg:text-[21px] font-extrabold text-brand-green mb-1">
                      Open
                    </h4>
                    <p className="text-xs lg:text-[14px] font-semibold text-slate-500 leading-relaxed max-w-[190px] lg:max-w-[210px]">
                      Transparent and accessible for all businesses.
                    </p>
                  </div>
                </div>

                {/* Vertical Divider 1 */}
                <div className="hidden md:block h-16 w-[1px] bg-slate-200" />

                {/* Item 2: Fair */}
                <div className="flex items-center gap-5 md:px-6 lg:px-8">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-brand-light-blue flex items-center justify-center shadow-sm">
                    <FaBalanceScale className="text-brand-navy text-[22px] lg:text-[26px]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg lg:text-[21px] font-extrabold text-brand-navy mb-1">
                      Fair
                    </h4>
                    <p className="text-xs lg:text-[14px] font-semibold text-slate-500 leading-relaxed max-w-[190px] lg:max-w-[210px]">
                      Success should not depend on advertising budgets.
                    </p>
                  </div>
                </div>

                {/* Vertical Divider 2 */}
                <div className="hidden md:block h-16 w-[1px] bg-slate-200" />

                {/* Item 3: Community Driven */}
                <div className="flex items-center gap-5 md:pl-6 lg:pl-8">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-brand-light-green flex items-center justify-center shadow-sm">
                    <FaHandshake className="text-brand-green text-[26px] lg:text-[32px]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg lg:text-[21px] font-extrabold text-brand-green mb-1">
                      Community Driven
                    </h4>
                    <p className="text-xs lg:text-[14px] font-semibold text-slate-500 leading-relaxed max-w-[190px] lg:max-w-[210px]">
                      Built with sellers and buyers, not for them.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. Founding Member Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-brand-light-green border border-emerald-100/60 rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Business Handshake/Illustration Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-white border border-slate-100">
                  <Image
                    src="/broken_chain_v2.png"
                    alt="Handshake B2B Illustration"
                    fill
                    sizes="(max-w-768px) 100vw, 380px"
                    className="object-contain p-4"
                  />
                </div>
              </div>

              {/* Right Column: Content and CTA */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl md:text-3xl font-black text-brand-navy tracking-tight leading-snug">
                    Become a Founding Member
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 max-w-xl leading-relaxed">
                    The first 1,000 businesses joining OpenMarket will help shape the future of the platform.
                  </p>
                </div>

                {/* Benefits checklist 2-column layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-[22px] h-[22px] rounded-full border-2 border-brand-green text-brand-green bg-white">
                        <FaCheck size={9} className="stroke-[2.5]" />
                      </span>
                      <span className="text-[13.5px] font-bold text-brand-navy">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="/#waitlist-banner"
                    className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-dark-green text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all group"
                  >
                    <FaUsers size={16} />
                    <span>Join the First 1000 Businesses</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Stats Section */}
        <section className="bg-slate-50 border-t border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <StatItem
                value="300+"
                label="Industrial Customers Served"
                icon={<FaUsers size={20} className="text-brand-green" />}
              />
              <StatItem
                value="20+"
                label="Years of Industrial & B2B Experience"
                icon={<FaBriefcase size={18} className="text-[#0B3C5F]" />}
              />
              <StatItem
                value="1000+"
                label="Products & Solutions Delivered"
                icon={<FaBuilding size={18} className="text-brand-green" />}
              />
              <StatItem
                value="Nationwide"
                label="Network Across India"
                icon={<FaMapMarkerAlt size={18} className="text-[#0B3C5F]" />}
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
