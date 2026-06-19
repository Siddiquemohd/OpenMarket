"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useOtpModal } from "@/providers/OtpModalProvider";
import { PhoneIcon } from "@/components/shared/PhoneIcon";
import { LegalConsentNotice } from "@/components/shared/LegalConsentNotice";
import {
  FaLinkedin,
  FaArrowRight,
  FaCheck,
  FaUsers,
  FaStar,
  FaBuilding,
  FaHandshake,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiX,
  FiShield,
  FiAlertTriangle,
  FiSearch,
  FiActivity,
  FiBell,
  FiAlertOctagon,
  FiAlertCircle,
  FiTrendingUp,
  FiSlash,
  FiMessageSquare,
  FiCheckSquare,
  FiLayers,
  FiAward,
  FiCheckCircle,
  FiXCircle,
  FiUserMinus,
  FiUser,
  FiSliders,
  FiTarget,
  FiBriefcase,
  FiClock,
  FiUserCheck,
  FiMapPin
} from "react-icons/fi";

// Validation schema for waitlist form
const phoneSchema = z.object({
  phone: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only numbers" }),
});

type PhoneFormValues = z.infer<typeof phoneSchema>;

// Shared Waitlist Form component
function WaitlistForm({
  formId,
  theme = "navy",
  onSuccessCallback,
}: {
  formId: string;
  theme?: "green" | "navy";
  onSuccessCallback?: () => void;
}) {
  const { openOtpModal } = useOtpModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmit = (data: PhoneFormValues) => {
    openOtpModal(data.phone);
    reset();
    if (onSuccessCallback) {
      onSuccessCallback();
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none select-none gap-1.5">
            <img src="/indian_flag.webp" alt="India Flag" className="w-6 h-4 object-cover rounded-sm" />
            <span className="text-brand-navy font-bold text-sm">+91</span>
            <span className="text-slate-300">|</span>
          </div>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            {...register("phone", {
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
              }
            })}
            className="w-full py-3.5 pl-[84px] pr-4 rounded-xl text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-base font-medium shadow-sm transition-all"
          />
        </div>
        {errors.phone && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold px-1 text-red-500"
          >
            {errors.phone.message}
          </motion.p>
        )}

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold tracking-wider text-sm md:text-base transition-colors shadow-md bg-brand-green hover:bg-brand-dark-green"
        >
          JOIN THE WAITLIST
          <FaArrowRight size={14} />
        </motion.button>
        <LegalConsentNotice className="text-center px-1" />
      </form>
    </div>
  );
}

// Floating badge helper component
function FloatingBadge({
  text,
  icon,
  className,
}: {
  text: string;
  icon: React.ReactNode;
  className: string;
}) {
  return (
    <div className={`absolute bg-white/95 backdrop-blur-sm border border-[#e2eae5]/80 rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-md z-20 hover:scale-103 transition-transform ${className}`}>
      <span className="text-brand-green flex-shrink-0">{icon}</span>
      <span className="text-xs font-bold text-brand-navy whitespace-nowrap">{text}</span>
    </div>
  );
}

// Problem card helper component
function ProblemCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4 shadow-sm flex-shrink-0">
        {icon}
      </div>
      <h4 className="text-sm font-extrabold text-red-600 mb-2 leading-snug">
        {title}
      </h4>
      <p className="text-xs font-semibold text-slate-500 leading-relaxed max-w-[190px]">
        {desc}
      </p>
    </div>
  );
}

// Solution card helper component
function SolutionCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-brand-green mb-4 shadow-sm flex-shrink-0">
        {icon}
      </div>
      <h4 className="text-sm font-extrabold text-brand-green mb-2 leading-snug">
        {title}
      </h4>
      <p className="text-xs font-semibold text-slate-500 leading-relaxed max-w-[190px]">
        {desc}
      </p>
    </div>
  );
}

// Benefit card helper component (horizontal)
function BenefitCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0 shadow-sm">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <h4 className="text-[14px] font-extrabold text-brand-green mb-0.5 leading-snug">
          {title}
        </h4>
        <p className="text-[11.5px] font-bold text-slate-500 leading-normal">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function ForBuyers() {
  const { openOtpModal } = useOtpModal();

  const problems = [
    {
      title: "Too Many Suppliers",
      desc: "Thousands of listings make it difficult to identify the right supplier.",
      icon: <FaUsers size={22} />
    },
    {
      title: "Inactive Companies",
      desc: "Many listed suppliers no longer respond to enquiries.",
      icon: <FiUserMinus size={22} />
    },
    {
      title: "Fake Claims",
      desc: "Buyers struggle to verify capabilities and credentials.",
      icon: <FiAlertOctagon size={22} />
    },
    {
      title: "Information Overload",
      desc: "Too much data, too little trust.",
      icon: <FiLayers size={22} />
    },
    {
      title: "Poor Response Rates",
      desc: "Enquiries often go unanswered.",
      icon: <FiMessageSquare size={22} />
    }
  ];

  const solutions = [
    {
      title: "Verified Business Profiles",
      desc: "Business details, credentials, products and services in one place.",
      icon: <FiCheckCircle size={22} />
    },
    {
      title: "Activity-Based Visibility",
      desc: "Active and responsive businesses get better visibility.",
      icon: <FiTrendingUp size={22} />
    },
    {
      title: "Engagement Signals",
      desc: "See which suppliers regularly update and interact.",
      icon: <FiActivity size={22} />
    },
    {
      title: "Trust & Reputation",
      desc: "Visibility is earned through performance and engagement.",
      icon: <FiAward size={22} />
    },
    {
      title: "Better Discovery",
      desc: "Find relevant suppliers faster.",
      icon: <FiSearch size={22} />
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      desc: "Spend less time searching and more time buying.",
      icon: <FiClock size={20} />
    },
    {
      title: "Discover Active Suppliers",
      desc: "Connect with businesses that are engaged and responsive.",
      icon: <FiUserCheck size={20} />
    },
    {
      title: "Make Better Decisions",
      desc: "Access complete supplier profiles and credibility signals.",
      icon: <FiCheckSquare size={20} />
    },
    {
      title: "Build Long-Term Partnerships",
      desc: "Find suppliers focused on quality and relationships.",
      icon: <FaHandshake size={20} />
    }
  ];

  const checklistItems = [
    "Keep profiles updated",
    "Respond to enquiries quickly",
    "Share products and services regularly",
    "Engage with buyers",
    "Build trust through consistency"
  ];

  const trustStripBlocks = [
    {
      title: "Operated by",
      highlight: "Uneefy Intratech Pvt. Ltd.",
      icon: <FaBuilding size={16} className="text-brand-green" />
    },
    {
      title: "20+ Years of",
      highlight: "Industrial Business Experience",
      icon: <FiAward size={18} className="text-brand-navy" />
    },
    {
      title: "Based in",
      highlight: "Navi Mumbai, Maharashtra",
      icon: <FiMapPin size={17} className="text-brand-green" />
    },
    {
      title: "Real Founder.",
      highlight: "Real Office. Real Support.",
      icon: <FiShield size={17} className="text-brand-navy" />
    }
  ];

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">

        {/* SECTION 1: Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-3.5">
                <span className="text-brand-green text-sm font-black tracking-widest uppercase self-start">
                  FOR BUYERS
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[45px] font-extrabold tracking-tight leading-[1.15] text-brand-navy mt-1">
                  Find Genuine Suppliers Faster. <br />
                  <span className="text-brand-green block mt-1.5">
                    Not More Suppliers. <br />
                    Better Suppliers.
                  </span>
                </h1>
              </div>

              <p className="text-sm md:text-[14.5px] font-bold text-slate-500 leading-relaxed max-w-lg">
                OpenMarket helps buyers discover active, trusted, and relevant suppliers based on credibility, responsiveness, and{" "}
                <Link href="/why-openmarket" className="text-brand-navy underline decoration-brand-green/40 underline-offset-4 transition-colors hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40">
                  engagement, not advertising spend
                </Link>
                .
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openOtpModal()}
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-dark-green text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all duration-300 hover:scale-102 active:scale-98"
                >
                  <span>Join Waitlist</span>
                  <FaArrowRight size={12} />
                </button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
                >
                  <span>How It Works</span>
                </a>
              </div>
            </div>

            {/* Right Content: Portrait Image & Floating badges */}
            <div className="lg:col-span-6 flex justify-center relative min-h-[400px]">
              {/* Pale Green Circle backdrop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-brand-light-green/90 z-0" />
              
              {/* Buyer Image Container */}
              <div className="relative w-[380px] h-[380px] z-10">
                <Image
                  src="/buyer_hero.png"
                  alt="OpenMarket Buyer looking at laptop"
                  fill
                  sizes="380px"
                  priority
                  className="object-contain object-bottom"
                />
              </div>

              {/* Floating Badge Cards */}
              <FloatingBadge
                text="Verified Businesses"
                icon={<FiShield size={14} />}
                className="top-[12%] left-[-8%] md:left-[2%]"
              />
              <FloatingBadge
                text="Activity Based Visibility"
                icon={<FiTrendingUp size={14} />}
                className="top-[22%] right-[-8%] md:right-[2%]"
              />
              <FloatingBadge
                text="Faster Discovery"
                icon={<FiClock size={14} />}
                className="bottom-[32%] left-[-10%] md:left-[0%]"
              />
              <FloatingBadge
                text="Better Relationships"
                icon={<FaHandshake size={14} />}
                className="bottom-[18%] right-[-10%] md:right-[0%]"
              />
            </div>

          </div>
        </section>

        {/* SECTION 2: The Problems Buyers Face Today */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Centered header with side lines */}
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-4 w-full max-w-2xl mb-4">
                <div className="flex-grow h-[1.5px] bg-slate-200" />
                <h2 className="text-lg md:text-xl font-extrabold text-brand-navy tracking-tight text-center uppercase whitespace-nowrap px-2">
                  The Problems Buyers Face Today
                </h2>
                <div className="flex-grow h-[1.5px] bg-slate-200" />
              </div>
            </div>

            {/* Grid of 5 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {problems.map((prob, idx) => (
                <ProblemCard
                  key={idx}
                  title={prob.title}
                  desc={prob.desc}
                  icon={prob.icon}
                />
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: How OpenMarket Solves This */}
        <section id="how-it-works" className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Centered header with side lines */}
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-4 w-full max-w-2xl mb-4">
                <div className="flex-grow h-[1.5px] bg-slate-200" />
                <h2 className="text-lg md:text-xl font-extrabold text-brand-navy tracking-tight text-center uppercase whitespace-nowrap px-2">
                  How OpenMarket Solves This
                </h2>
                <div className="flex-grow h-[1.5px] bg-slate-200" />
              </div>
            </div>

            {/* Grid of 5 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {solutions.map((sol, idx) => (
                <SolutionCard
                  key={idx}
                  title={sol.title}
                  desc={sol.desc}
                  icon={sol.icon}
                />
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 4: Why Buyers Will Love OpenMarket */}
        <section className="bg-slate-50/50 py-16 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-12">
              <h2 className="text-2xl font-black text-brand-navy tracking-tight">
                Why Buyers Will Love OpenMarket
              </h2>
            </div>

            {/* Grid of 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b, idx) => (
                <BenefitCard
                  key={idx}
                  title={b.title}
                  desc={b.desc}
                  icon={b.icon}
                />
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 5: What Makes OpenMarket Different? */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="rounded-3xl bg-[#f8fbf9] border border-[#e2eae5]/60 p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Part */}
              <div className="lg:col-span-5 flex flex-col text-left">
                <h3 className="text-xl md:text-2xl font-extrabold text-brand-navy tracking-tight mb-1">
                  What Makes OpenMarket Different?
                </h3>
                <span className="text-lg font-black text-brand-green mt-1">
                  Visibility Is Earned.
                </span>
                <p className="text-slate-500 font-semibold text-xs leading-relaxed mt-4 max-w-sm">
                  Unlike traditional marketplaces where visibility can be bought, OpenMarket rewards businesses that:
                </p>
              </div>

              {/* Middle Part: Checklist */}
              <div className="lg:col-span-4 flex flex-col gap-3 py-4 lg:py-0 text-left">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <FiCheckCircle size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] font-bold text-brand-navy leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Part: White Quote Block */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="w-full bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-start gap-3.5 text-left">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0 shadow-sm">
                    <FaUsers size={16} />
                  </div>
                  <p className="text-[11.5px] font-bold text-brand-navy leading-relaxed mt-0.5">
                    &quot;This means buyers see suppliers who are active, relevant, and serious about doing business.&quot;
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: Founder quote section */}
        <section className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-[#f8fbf9] border border-[#e2eae5]/60 rounded-3xl p-6 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Founder image with background */}
              <div className="lg:col-span-3 flex justify-center items-end">
                <div className="relative flex h-[190px] w-[250px] items-end justify-center overflow-hidden lg:-mb-6">
                  {/* Pale green semicircle background */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[120px] w-[240px] rounded-t-full bg-brand-green/20" />
                  <div className="relative z-10 h-[215px] w-[215px]">
                    <Image
                      src="/founder2.png"
                      alt="Kiran Pailwan"
                      fill
                      sizes="185px"
                      priority
                      className="object-contain object-bottom imagestyle"
                    />
                  </div>
                </div>
              </div>

              {/* Center Quote block */}
              <div className="lg:col-span-6 flex flex-col justify-center text-left py-4 lg:py-0">
                <span className="text-[52px] font-serif text-brand-green leading-none -mb-6 mt-2 opacity-50">
                  “
                </span>
                <p className="text-[13px] font-semibold text-slate-600 leading-relaxed pl-1">
                  As a supplier myself, I have seen how difficult it is for buyers to identify genuine businesses. OpenMarket is being built to create a more transparent and trusted environment for both buyers and{" "}
                  <Link href="/for-sellers" className="text-brand-green underline decoration-brand-green/40 underline-offset-4 transition-colors hover:text-brand-dark-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40">
                    sellers
                  </Link>
                  .
                </p>
              </div>

              {/* Right Profile details and signature */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center text-center lg:text-right lg:border-l border-slate-200/60 lg:pl-6 py-2">
                <div className="flex flex-col">
                  <span className="text-sm font-black text-brand-navy">Kiran Pailwan</span>
                  <span className="text-xs font-bold text-slate-400 mt-0.5">Founder, OpenMarket</span>
                </div>
                
                {/* Signature cursive graphic */}
                <div className="font-serif italic text-2xl text-brand-navy/60 leading-none mt-2">
                  K. Pailwan
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: Trust/contact strip */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-[#f8fbf9] border border-[#e2eae5]/60 rounded-3xl p-6 shadow-sm flex flex-col gap-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-y sm:divide-y-0 lg:divide-x divide-slate-200/60">
              {trustStripBlocks.map((block, idx) => (
                <div key={idx} className={`flex items-center gap-3 px-3 py-2 sm:py-0 text-left ${idx > 1 ? 'pt-4 sm:pt-0' : ''}`}>
                  <div className="w-9 h-9 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm flex-shrink-0">
                    {block.icon}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                      {block.title}
                    </span>
                    <span className="text-[12px] font-extrabold text-brand-navy mt-0.5 leading-snug">
                      {block.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Address line below grid */}
            <div className="border-t border-[#e2eae5]/60 pt-4 flex items-center justify-center gap-2 text-center text-slate-500 font-semibold text-[11px] sm:text-xs">
              <FiMapPin className="text-brand-green mt-0.5 flex-shrink-0" size={14} />
              <span>S-33, 2nd Floor, Fantasia Business Park Premises, Vashi, Navi Mumbai - 400703, Maharashtra, India</span>
            </div>
          </div>
        </section>

        {/* SECTION 8: Blue CTA waitlist strip */}
        <section className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            {/* Background decor circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0 shadow-inner">
                  <FiSearch size={22} className="text-brand-green" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-xl font-extrabold tracking-tight leading-snug">
                    Join the Movement Towards Better B2B Buying
                  </h3>
                  <p className="text-[12px] font-semibold text-emerald-100/80 max-w-md leading-relaxed">
                    Find suppliers based on trust, activity, and engagement—not advertising budgets.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={() => openOtpModal()}
                  className="bg-brand-green hover:bg-brand-dark-green text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all duration-300 hover:scale-102 flex items-center gap-2"
                >
                  <span>Join the Waitlist</span>
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
