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
  FaMapMarkerAlt,
  FaCompass
} from "react-icons/fa";

/**
 * Reusable Mission Card Component
 */
interface MissionCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBgClass: string;
  titleColorClass: string;
}
function MissionCard({ title, desc, icon, iconBgClass, titleColorClass }: MissionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300 group"
    >
      <div className={`w-16 h-16 rounded-full ${iconBgClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
        {icon}
      </div>
      <h4 className={`text-xl font-extrabold ${titleColorClass} mb-2`}>
        {title}
      </h4>
      <p className="text-sm font-semibold text-slate-500 leading-relaxed max-w-[240px]">
        {desc}
      </p>
    </motion.div>
  );
}

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
    { text: "Electrical Engineer, VJTI Mumbai (2003)", icon: <FaGraduationCap className="text-brand-navy" size={16} /> },
    { text: "Founder & Director, Uneefy Intratech Pvt. Ltd.", icon: <FaBriefcase className="text-brand-navy" size={15} /> },
    { text: "20+ Years in Industrial Products, Projects & B2B Business", icon: <FaStar className="text-brand-navy" size={15} /> },
    { text: "Worked with L&T, Bajaj Electricals, Valmont and other industry leaders", icon: <FaUsers className="text-brand-navy" size={15} /> },
    { text: "Served 300+ Industrial Customers", icon: <FaUsers className="text-brand-navy" size={15} /> },
    { text: "Passionate about building a fair and transparent marketplace for Indian businesses", icon: <FaCompass className="text-brand-navy" size={16} /> },
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
              <div className="max-w-[430px] w-full bg-white border border-slate-100 rounded-[32px] shadow-xl p-4 relative flex flex-col gap-0">
                
                {/* Portrait Area Container */}
                <div className="relative h-[340px] w-full overflow-hidden bg-slate-50/60 rounded-[24px] flex justify-center">
                  {/* Dotted Grid Pattern SVG */}
                  <div className="absolute top-4 right-4 w-36 h-36 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0FA958 1.5px, transparent 1.5px)', backgroundSize: '10px 10px' }} />

                  {/* Pale Green Semi-Circle (Arch) Background behind Portrait */}
                  <div className="absolute left-1/2 bottom-0 w-[340px] h-[170px] -translate-x-1/2 rounded-t-full bg-brand-light-green pointer-events-none" />

                  {/* Profile Image - Normal Portrait with bottom crop */}
                  <div className="absolute z-10 bottom-[-10px] w-[340px] h-[272px] left-1/2 -translate-x-1/2">
                    <Image
                      src="/founder2.png"
                      alt="Kiran Pailwan - Founder, OpenMarket"
                      fill
                      sizes="340px"
                      priority
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>

                {/* Overlapping Attached Info Card below */}
                <div className="relative z-20 -mt-12 mx-2 bg-white border border-slate-100 p-6 rounded-[24px] shadow-lg">
                  <div className="text-left pb-4">
                    <span className="text-[10px] font-black text-brand-green tracking-widest uppercase block mb-1">
                      MEET THE FOUNDER
                    </span>
                    <h3 className="text-[24px] font-black text-brand-navy leading-snug">
                      Kiran Pailwan
                    </h3>
                    <span className="text-sm font-bold text-brand-green tracking-wide block mt-0.5">
                      Founder, OpenMarket
                    </span>
                    {/* Green underline below subtitle */}
                    <div className="w-10 h-[2px] bg-brand-green mt-3 mb-2" />
                  </div>

                  {/* Credentials checklist */}
                  <div className="py-4 flex flex-col gap-4">
                    {credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <span className="flex-shrink-0 text-brand-navy mt-1">
                          {cred.icon}
                        </span>
                        <span className="text-[14px] font-medium text-slate-700 leading-normal">
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
                        className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-sm shadow-sm transition-all"
                      >
                        <FaLinkedin size={18} className="text-[#0077B5]" />
                        <span>LinkedIn</span>
                      </a>

                      {/* WhatsApp Button */}
                      <a
                        href="https://wa.me/918108359977"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-sm shadow-sm transition-all"
                      >
                        <FaWhatsapp size={18} className="text-[#25D366]" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                    
                    <span className="text-[11px] font-semibold text-slate-400 italic text-center mt-2 block">
                      I personally read every message from our founding members.
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 2. Mission Section (Rounded Card and Three Pillars) */}
        <section className="bg-slate-50 border-y border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm mb-10 flex flex-col items-center text-center">
              
              {/* Centered label with horizontal lines */}
              <div className="flex items-center gap-4 w-full max-w-xl mb-4">
                <div className="flex-grow h-[1.5px] bg-brand-green/30" />
                <span className="text-xs font-black text-brand-green tracking-widest uppercase">
                  OUR MISSION
                </span>
                <div className="flex-grow h-[1.5px] bg-brand-green/30" />
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight max-w-2xl leading-tight mb-4">
                To build India’s most trusted B2B marketplace.
              </h2>
              <p className="text-xs md:text-sm font-semibold text-slate-500 max-w-3xl leading-relaxed">
                A marketplace that is open. A marketplace that is fair. A marketplace built by its community.
              </p>
            </div>

            {/* Three Mission Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MissionCard
                title="Open"
                desc="Transparent and accessible for all businesses."
                icon={<FaLock size={20} className="text-brand-green" />}
                iconBgClass="bg-brand-light-green text-brand-green"
                titleColorClass="text-brand-green"
              />
              <MissionCard
                title="Fair"
                desc="Success should not depend on advertising budgets."
                icon={<FaBalanceScale size={20} className="text-[#0B3C5F]" />}
                iconBgClass="bg-brand-light-blue text-[#0B3C5F]"
                titleColorClass="text-brand-navy"
              />
              <MissionCard
                title="Community Driven"
                desc="Built with sellers and buyers, not for them."
                icon={<FaHandshake size={24} className="text-brand-green" />}
                iconBgClass="bg-brand-light-green text-brand-green"
                titleColorClass="text-brand-green"
              />
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
