"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaUsers, FaArrowRight } from "react-icons/fa";
import { FiShield, FiTarget, FiUsers, FiAward, FiCheckCircle } from "react-icons/fi";

/**
 * Reusable Mission Card Component
 */
interface MissionCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}
function MissionCard({ title, desc, icon }: MissionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md hover:border-brand-green/30 hover:bg-brand-light-green transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-full bg-brand-light-green flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <h4 className="text-xl font-extrabold text-brand-navy mb-3">
        {title}
      </h4>
      <p className="text-sm font-semibold text-slate-500 leading-relaxed max-w-xs">
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
}
function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <span className="text-3xl md:text-4xl font-black text-brand-green mb-2 tracking-tight">
        {value}
      </span>
      <span className="text-xs md:text-sm font-bold text-slate-500 max-w-[180px] leading-snug">
        {label}
      </span>
    </div>
  );
}

/**
 * Why OpenMarket Page component
 */
export default function WhyOpenMarket() {
  const credentials = [
    "20+ Years B2B Experience",
    "Expert in Industrial Supply Chains",
    "Committed to fair, non-ad visibility",
    "Navi Mumbai based operations Hub",
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
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading and Introduction */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="self-start px-3 py-1 bg-brand-light-green border border-brand-green/20 text-brand-green text-xs font-black tracking-wider uppercase rounded-full">
                  WHY OPENMARKET?
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-navy">
                  We’re Not Building <br />
                  Another Marketplace. <br />
                  <span className="text-brand-green block mt-2">
                    We’re Building a Movement.
                  </span>
                </h1>
              </div>

              <div className="flex flex-col gap-4 text-slate-600 font-semibold text-base md:text-lg leading-relaxed max-w-2xl">
                <p className="text-brand-navy font-extrabold text-lg md:text-xl border-l-4 border-brand-green pl-4 my-2">
                  We believe there is a better way.
                </p>
                <p>
                  Today's leading B2B marketplaces have become auction houses. They sell visibility to the highest bidder, forcing genuine manufacturers, suppliers, and traders to buy fake leads and pay exorbitant advertising budgets just to stay relevant.
                </p>
                <p>
                  OpenMarket is designed to change this. We are building India’s first community-driven B2B platform where your visibility is earned through trust, activity, and contribution—not the size of your wallet.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="/#waitlist-banner"
                  className="inline-flex flex-col items-center justify-center bg-brand-green hover:bg-brand-dark-green text-white px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-102 active:scale-98 text-center group"
                >
                  <span className="text-lg font-black tracking-wide flex items-center gap-2">
                    Join the First 1000 Businesses
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-100 mt-1">
                    Be an Early Member of OpenMarket
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Founder Profile Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="max-w-[430px] w-full bg-white border border-slate-100 rounded-3xl p-6 shadow-xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light-green rounded-full blur-2xl opacity-80 pointer-events-none -mt-4 -mr-4" />

                {/* Profile Image & Detail */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-brand-green/20 shadow-md mb-4 bg-slate-50">
                    <Image
                      src="/founder.jpeg"
                      alt="Kiran Pailwan - Founder, OpenMarket"
                      fill
                      sizes="144px"
                      priority
                      className="object-cover"
                    />
                  </div>
                  
                  <span className="text-[11px] font-black text-brand-green tracking-widest uppercase mb-1">
                    MEET THE FOUNDER
                  </span>
                  <h3 className="text-2xl font-black text-brand-navy">
                    Kiran Pailwan
                  </h3>
                  <span className="text-xs font-bold text-slate-400 tracking-wide uppercase mt-0.5">
                    Founder, OpenMarket
                  </span>
                </div>

                {/* Credentials checklist */}
                <div className="py-6 flex flex-col gap-3">
                  {credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-light-green text-brand-green">
                        <FiCheckCircle size={14} className="stroke-[3]" />
                      </span>
                      <span className="text-sm font-bold text-brand-navy tracking-wide">
                        {cred}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Contact Links */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3.5">
                  <span className="text-xs font-black text-slate-400 text-center uppercase tracking-wider">
                    Connect with Kiran
                  </span>
                  
                  <div className="grid grid-cols-2 gap-3.5">
                    {/* LinkedIn Button */}
                    <a
                      href="https://www.linkedin.com/in/kiranpailwan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-[#0077B5] hover:bg-[#005a8a] text-white rounded-xl font-bold text-sm shadow-md transition-colors"
                    >
                      <FaLinkedin size={18} />
                      <span>Linkedin</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/918108359977"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold text-sm shadow-md transition-colors"
                    >
                      <FaWhatsapp size={18} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Mission Section (Rounded Card and Three Pillars) */}
        <section className="bg-slate-50 border-y border-slate-100 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm mb-12 flex flex-col items-center text-center">
              <span className="text-xs font-black text-brand-green tracking-widest uppercase mb-3">
                OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight max-w-2xl leading-tight mb-4">
                To build India’s most trusted B2B marketplace.
              </h2>
              <p className="text-sm md:text-base font-semibold text-slate-500 max-w-3xl leading-relaxed">
                A marketplace that is open. A marketplace that is fair. A marketplace built by its community.
              </p>
            </div>

            {/* Three Mission Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MissionCard
                title="Open"
                desc="Transparent and accessible for all businesses. No hidden ranking algorithms or backroom lead bidding."
                icon={<FiShield size={26} className="text-brand-green group-hover:text-brand-navy transition-colors duration-300" />}
              />
              <MissionCard
                title="Fair"
                desc="Success should not depend on advertising budgets. Visible space is allocated based on activity, contribution, and buyer feedback."
                icon={<FiTarget size={26} className="text-brand-green group-hover:text-brand-navy transition-colors duration-300" />}
              />
              <MissionCard
                title="Community Driven"
                desc="Built directly with and for sellers and buyers. You influence our platform roadmap and features."
                icon={<FiUsers size={26} className="text-brand-green group-hover:text-brand-navy transition-colors duration-300" />}
              />
            </div>
          </div>
        </section>

        {/* 3. Founding Member Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="bg-brand-light-green border border-emerald-100/60 rounded-3xl p-8 md:p-12 shadow-sm">
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
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-black text-brand-green tracking-widest uppercase">
                    BECOME A FOUNDING MEMBER
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-navy tracking-tight leading-snug">
                    Help shape the future of B2B trade.
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 max-w-xl leading-relaxed mt-1">
                    The first 1,000 businesses joining OpenMarket will enjoy lifetime privileges, direct roadmap feedback sessions, and first access to our mobile apps.
                  </p>
                </div>

                {/* Benefits checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-white text-brand-green shadow-sm border border-slate-100">
                        <FiCheckCircle size={14} className="stroke-[3]" />
                      </span>
                      <span className="text-xs md:text-sm font-bold text-brand-navy">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="/#waitlist-banner"
                    className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-dark-green text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors group"
                  >
                    <span>Join the First 1000 Businesses</span>
                    <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Stats Section */}
        <section className="bg-slate-50 border-t border-slate-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <StatItem
                value="300+"
                label="Industrial Customers Served"
              />
              <StatItem
                value="20+"
                label="Years of Industrial & B2B Experience"
              />
              <StatItem
                value="1000+"
                label="Products & Solutions Delivered"
              />
              <StatItem
                value="Nationwide"
                label="Network Across India"
              />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
