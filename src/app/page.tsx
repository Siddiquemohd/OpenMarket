"use client";

import { useState, cloneElement, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
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
  FaChartLine,
  FaStar,
  FaStore,
  FaShoppingCart,
  FaWhatsapp,
  FaBullhorn,
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
  FiMessageSquare,
  FiCheckSquare,
  FiLayers,
  FiAward,
  FiCamera,
  FiCheckCircle,
  FiXCircle,
  FiUserMinus,
  FiUser,
  FiSliders,
  FiTarget,
  FiUsers,
  FiBriefcase,
  FiMail,
  FiFrown
} from "react-icons/fi";

// Validation schema for the mobile number
const phoneSchema = z.object({
  phone: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only numbers" }),
});

type PhoneFormValues = z.infer<typeof phoneSchema>;

// Reusable LogoCheckmark SVG component
function LogoCheckmark({
  className = "",
  size = 20,
  checkColor = "#0B3C5F",
  circleColor = "#0FA958",
}: {
  className?: string;
  size?: number;
  checkColor?: string;
  circleColor?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke={circleColor} strokeWidth="2" fill="none" />
      <path
        d="M8 12L11 15L16.5 9"
        stroke={checkColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


// Waitlist Form Component used in top and bottom banners
function WaitlistForm({
  formId,
  theme = "green",
}: {
  formId: string;
  theme?: "green" | "navy";
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
            suppressHydrationWarning
            className={`w-full py-3.5 pl-[84px] pr-4 rounded-xl text-slate-900 placeholder:text-slate-400 bg-white border ${errors.phone ? "border-red-500 ring-2 ring-red-200" : "border-slate-200"
              } focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-base font-medium shadow-sm transition-all`}
          />
        </div>
        {errors.phone && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm font-semibold px-1 ${theme === "navy" ? "text-red-500" : "text-red-200"}`}
          >
            {errors.phone.message}
          </motion.p>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          suppressHydrationWarning
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold tracking-wider text-sm md:text-base transition-colors shadow-md bg-brand-green hover:bg-brand-dark-green"
        >
          JOIN THE WAITLIST
          <FaArrowRight size={14} />
        </motion.button>
        <LegalConsentNotice tone={theme === "navy" ? "light" : "dark"} className="text-center px-1" />
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      {/* Main Page Layout */}
      <main className="flex-grow">

        {/* 2. Hero & Waitlist Box Container */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-24">
          {/* Mobile/Tablet Text Layout */}
          <div className="lg:hidden text-center mb-8 px-4 flex flex-col items-center gap-4 relative">
            {/* Soft Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-navy via-[#0B3C5F] to-[#164D73]">
                A marketplace built for genuine businesses.
              </span>
            </h1>
            <div className="mt-2 inline-block">
              <span className="inline-flex items-center bg-brand-green/10 border border-brand-green/20 text-brand-green font-extrabold text-xs sm:text-sm tracking-wider uppercase px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(15,169,88,0.06)] backdrop-blur-md select-none">
                Not for advertising budgets.
              </span>
            </div>
          </div>

          {/* Mobile/Tablet Cards Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            {[
              { title: "Machinery & Equipment", image: "/images/machinery_equipment.png", rotate: "-rotate-2" },
              { title: "Building & Construction", image: "/images/building_construction.png", rotate: "-rotate-1" },
              { title: "Logistics & Material Handling", image: "/images/logistics_material.png", rotate: "rotate-2" },
              { title: "Automobile & Auto Components", image: "/images/automobile_components.png", rotate: "-rotate-3" },
              { title: "Chemicals & Raw Materials", image: "/images/chemicals_raw.png", rotate: "rotate-1" },
              { title: "IT, Electronics & Automation", image: "/images/it_electronics.png", rotate: "rotate-3" },
              { title: "Healthcare & Pharma", image: "/images/healthcare_pharma.png", rotate: "-rotate-1" },
              { title: "Infrastructure & Govt. Projects", image: "/images/infrastructure_projects.png", rotate: "rotate-2" },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex flex-col items-center gap-2 text-center transition-all hover:shadow-md ${card.rotate}`}
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-brand-navy select-none px-1 py-1 leading-tight">
                  {card.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Desktop Circular Layout (lg and up) */}
          <div className="hidden lg:flex relative w-full max-w-6xl mx-auto h-[740px] items-center justify-center overflow-visible mb-0">

            {/* Centered Hero Text */}
            <div className="text-center z-20 max-w-3xl mx-auto pointer-events-auto relative py-6">
              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-brand-green/8 via-brand-blue/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl lg:text-[56px] font-black tracking-tight leading-[1.15]"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-navy via-[#0B3C5F] to-[#164D73]">
                  A marketplace built for<br />genuine businesses.
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 inline-block"
              >
                <span className="inline-flex items-center bg-brand-green/10 border border-brand-green/20 text-brand-green font-extrabold text-sm md:text-base tracking-wider uppercase px-6 py-3 rounded-full shadow-[0_4px_25px_rgba(15,169,88,0.08)] backdrop-blur-md select-none hover:bg-brand-green/15 transition-colors duration-300">
                  Not for advertising budgets.
                </span>
              </motion.div>
            </div>

            {/* Circular Scattered Cards */}
            {[
              {
                title: "Machinery & Equipment",
                image: "/images/machinery_equipment.png",
                style: { left: "15%", top: "2%" },
                rotate: -6,
                widthClass: "w-[150px]",
                aspectClass: "aspect-[1/1]",
                floatOffset: -8
              },
              {
                title: "Building & Construction",
                image: "/images/building_construction.png",
                style: { left: "43%", top: "-10%" },
                rotate: 4,
                widthClass: "w-[150px]",
                aspectClass: "aspect-[1/1]",
                floatOffset: -7
              },
              {
                title: "Logistics & Material Handling",
                image: "/images/logistics_material.png",
                style: { left: "71%", top: "2%" },
                rotate: -8,
                widthClass: "w-[150px]",
                aspectClass: "aspect-[1/1]",
                floatOffset: -10
              },
              {
                title: "Automobile & Auto Components",
                image: "/images/automobile_components.png",
                style: { left: "83%", top: "28%" },
                rotate: 6,
                widthClass: "w-[150px]",
                aspectClass: "aspect-[1/1]",
                floatOffset: -9
              },
              {
                title: "Chemicals & Raw Materials",
                image: "/images/chemicals_raw.png",
                style: { left: "71%", top: "64%" },
                rotate: -10,
                widthClass: "w-[150px]",
                aspectClass: "aspect-[1/1]",
                floatOffset: -11
              },
              {
                title: "IT, Electronics & Automation",
                image: "/images/it_electronics.png",
                style: { left: "43%", top: "70%" },
                rotate: 3,
                widthClass: "w-[150px]",
                aspectClass: "aspect-[1/1]",
                floatOffset: -8
              },
              {
                title: "Healthcare & Pharma",
                image: "/images/healthcare_pharma.png",
                style: { left: "15%", top: "64%" },
                rotate: -8,
                widthClass: "w-[150px]",
                aspectClass: "aspect-[1/1]",
                floatOffset: -10
              },
              {
                title: "Infrastructure & Govt. Projects",
                image: "/images/infrastructure_projects.png",
                style: { left: "3%", top: "28%" },
                rotate: -4,
                widthClass: "w-[150px]",
                aspectClass: "aspect-[1/1]",
                floatOffset: -9
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="absolute flex flex-col items-center gap-2 group cursor-pointer z-10 hover:z-30 transition-transform duration-300"
                style={{
                  ...card.style,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, card.floatOffset, 0]
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  transition: { duration: 0.2 }
                }}
                transition={{
                  opacity: { duration: 0.5, delay: idx * 0.05 },
                  scale: { duration: 0.2 },
                  y: {
                    duration: 3.5 + (idx % 3) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.1
                  }
                }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-md border border-slate-100 bg-white transition-shadow group-hover:shadow-xl duration-300 ${card.widthClass} ${card.aspectClass}`}
                  style={{ transform: `rotate(${card.rotate}deg)` }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
                <span className="text-xs md:text-sm font-black text-brand-navy select-none group-hover:text-brand-green transition-colors duration-200 text-center max-w-[140px] leading-tight mt-1">
                  {card.title}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. B2B Broken Marketplace Analysis */}
        <section className="bg-white py-8 md:py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">

              {/* Left Column: Heading */}
              <div className="lg:col-span-4 flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-black text-brand-navy leading-[1.2] tracking-tight uppercase">
                  The B2B<br />Marketplace<br />
                  <span className="text-brand-blue">is Broken.</span>
                </h2>
                <div className="h-[2px] w-10 bg-brand-green rounded-full" />
                <p className="text-slate-500 font-semibold text-[13.5px] md:text-[14.5px] mt-0.5 leading-relaxed">
                  And it's hurting honest businesses every single day.
                </p>
              </div>

              {/* Right Column: Step Flow */}
              <div className="lg:col-span-8 w-full">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 md:gap-2 relative">
                  {[
                    {
                      icon: <FaBullhorn size={18} />,
                      dotColor: "bg-brand-blue",
                      text: "Businesses spend lakhs on advertising."
                    },
                    {
                      icon: <FiMail size={18} />,
                      dotColor: "bg-brand-green",
                      text: "Over 90% enquiries are irrelevant."
                    },
                    {
                      icon: <FiUsers size={18} />,
                      dotColor: "bg-brand-blue",
                      text: "The same enquiry reaches multiple sellers."
                    },
                    {
                      icon: <span className="text-base font-bold font-sans">₹</span>,
                      dotColor: "bg-brand-green",
                      text: "The lowest price wins."
                    },
                    {
                      icon: <FiFrown size={18} />,
                      dotColor: "bg-brand-navy",
                      text: "Everyone loses."
                    }
                  ].map((step, idx) => (
                    <Fragment key={idx}>
                      <div className="flex flex-row md:flex-col items-center md:items-center flex-grow md:flex-1 md:max-w-[120px] gap-3 md:gap-0">
                        {/* Icon container */}
                        <div className="w-10 h-10 rounded-xl bg-brand-light-blue border border-slate-100 flex items-center justify-center text-brand-navy shadow-sm flex-shrink-0">
                          {step.icon}
                        </div>

                        {/* Connecting Line & Dot Container */}
                        <div className="flex flex-col items-center md:w-full">
                          <div className={`w-1.5 h-1.5 rounded-full ${step.dotColor} md:mt-2.5 md:mb-2`} />
                        </div>

                        {/* Text */}
                        <p className="text-[11.5px] font-bold text-slate-500 md:text-center leading-relaxed">
                          {step.text}
                        </p>
                      </div>

                      {/* Desktop arrow chevrons */}
                      {idx < 4 && (
                        <div className="hidden md:flex text-slate-300 self-center -mt-6 select-none">
                          <span className="text-base font-bold">›</span>
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* B2B Trade Question Section */}
        <section className="relative overflow-hidden py-16 md:py-20 bg-brand-deep-navy text-white border-t border-brand-navy/20">

          {/* Night Sky & Mountain Silhouette SVG Overlay - positioned in top half */}
          <div className="absolute right-0 top-0 w-full md:w-[600px] h-full pointer-events-none select-none opacity-40 md:opacity-90 z-0">
            <svg viewBox="0 0 600 320" className="w-full h-full object-cover object-right-bottom" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Stars */}
              <circle cx="100" cy="50" r="1" fill="#fff" opacity="0.6" />
              <circle cx="220" cy="90" r="1.5" fill="#fff" opacity="0.8" />
              <circle cx="340" cy="40" r="1" fill="#fff" opacity="0.5" />
              <circle cx="480" cy="110" r="1.2" fill="#fff" opacity="0.7" />
              <circle cx="550" cy="50" r="1.5" fill="#fff" opacity="0.9" />
              {/* Mountains */}
              <path d="M 180 320 L 320 200 L 460 320 Z" fill="#0B3C5F" opacity="0.3" />
              <path d="M 380 320 L 480 150 L 600 260 L 600 320 Z" fill="#081E3B" opacity="0.6" />
              <path d="M 440 320 L 520 120 L 600 220 L 600 320 Z" fill="#051427" />
              {/* Person standing on the peak */}
              <circle cx="520" cy="99" r="3.5" fill="#ffffff" />
              <path d="M 520 102.5 L 520 115 M 516 106 L 524 106 M 518.5 115 L 517 124 M 521.5 115 L 523 124" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Question Banner */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight uppercase select-none max-w-xl">
                Is this really how<br />
                <span className="text-brand-green">B2B trade</span> should work?
              </h3>
            </div>
          </div>
        </section>

        {/* Beliefs Section */}
        <section className="relative overflow-hidden py-16 md:py-20 bg-brand-navy text-white border-b border-brand-navy/20">

          {/* Subtle circular checkmark logo watermark in the background of belief part */}
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full border-[16px] border-white/5 pointer-events-none flex items-center justify-center select-none translate-x-1/4 translate-y-1/4 z-0">
            <div className="w-[300px] h-[300px] rounded-full border-[8px] border-white/5 flex items-center justify-center">
              <FaCheck size={140} className="text-white/5" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Bottom Half: Belief Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

              {/* Left Column: List of beliefs */}
              <div className="md:col-span-7 flex flex-col">
                <span className="text-xs md:text-sm text-slate-300 font-semibold tracking-widest uppercase mb-3 block select-none">
                  We believe...
                </span>

                <div className="flex flex-col gap-2.5">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-white select-none">
                    Trust should matter.
                  </h4>
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-white select-none">
                    Activity should matter.
                  </h4>
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-white select-none">
                    Transparency should matter.
                  </h4>
                  <h4 className="text-brand-green text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mt-1 select-none">
                    Not advertising budgets.
                  </h4>
                </div>
              </div>

              {/* Right Column: branding element */}
              <div className="md:col-span-5 flex justify-start md:justify-end items-center">
                <div className="bg-white px-8 py-6 rounded-2xl shadow-xl flex items-center justify-center w-full max-w-[280px] mx-auto md:mr-0 transition-transform hover:scale-[1.03] duration-300 border border-slate-100/50">
                  <img
                    src="/logo1_transparent.png"
                    alt="OpenMarket Logo"
                    className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Pain Points Columns (Sellers vs Buyers Facing) */}
        <section id="sellers" className="bg-white pt-8 pb-10 md:pt-12 md:pb-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Left Column: Sellers Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-white border border-slate-200/60 rounded-3xl p-10 md:p-14 lg:p-16 flex flex-col gap-10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-green/10 text-brand-green">
                    <FaStore size={26} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-navy">
                    WHAT <span className="text-brand-green font-black">SELLERS</span> ARE FACING
                  </h3>
                </div>

                <ul className="flex flex-col gap-8 flex-grow">
                  {[
                    {
                      title: "90% of enquiries are useless",
                      desc: "Most enquiries never become business.",
                      icon: <FiMessageSquare size={24} className="text-brand-green flex-shrink-0 mt-0.5" />
                    },
                    {
                      title: "Same enquiry to multiple sellers",
                      desc: "Leading to price wars instead of genuine opportunities.",
                      icon: <FiCheckCircle size={24} className="text-brand-green flex-shrink-0 mt-0.5" />
                    },
                    {
                      title: "Membership fees keep increasing",
                      desc: "Pay more every year for little additional value.",
                      icon: <FiCheckCircle size={24} className="text-brand-green flex-shrink-0 mt-0.5" />
                    },
                    {
                      title: "Basic membership feels worthless",
                      desc: "The best opportunities often go to the highest bidder.",
                      icon: <FiSliders size={24} className="text-brand-green flex-shrink-0 mt-0.5" />
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      {item.icon}
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-brand-navy">
                          {item.title}
                        </span>
                        <span className="text-[13.5px] font-semibold text-slate-500 mt-1 leading-relaxed">
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/for-sellers"
                  className="flex items-center gap-2 text-brand-green font-bold hover:text-brand-dark-green transition-colors mt-4 self-start group text-sm"
                >
                  Explore seller opportunities
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Right Column: Buyers Card */}
              <motion.div
                id="buyers"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-white border border-slate-200/60 rounded-3xl p-10 md:p-14 lg:p-16 flex flex-col gap-10 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-24"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-navy/10 text-brand-navy">
                    <FaShoppingCart size={26} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-navy">
                    WHAT <span className="text-brand-navy font-black">BUYERS</span> ARE FACING
                  </h3>
                </div>

                <ul className="flex flex-col gap-8 flex-grow">
                  {[
                    {
                      title: "Fraud sellers damage trust",
                      desc: "A few bad actors make it harder for.",
                      icon: <FiUserMinus size={24} className="text-brand-navy flex-shrink-0 mt-0.5" />
                    },
                    {
                      title: "Difficult to find genuine suppliers",
                      desc: "Trustworthy suppliers are difficult to identify.",
                      icon: <FiUser size={24} className="text-brand-navy flex-shrink-0 mt-0.5" />
                    },
                    {
                      title: "Difficult to find active suppliers",
                      desc: "Many listings are inactive or unresponsive.",
                      icon: <FiCheckCircle size={24} className="text-brand-navy flex-shrink-0 mt-0.5" />
                    },
                    {
                      title: "Too many choices. Too little clarity.",
                      desc: "Hundreds of suppliers. Very little transparency.",
                      icon: <FiShield size={24} className="text-brand-navy flex-shrink-0 mt-0.5" />
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      {item.icon}
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-brand-navy">
                          {item.title}
                        </span>
                        <span className="text-[13.5px] font-semibold text-slate-500 mt-1 leading-relaxed">
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/for-buyers"
                  className="flex items-center gap-2 text-brand-navy font-bold hover:text-slate-700 transition-colors mt-4 self-start group text-sm"
                >
                  Learn how OpenMarket works for buyers
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 5. The OpenMarket Difference Grid */}
        <section id="difference" className="pt-10 pb-16 md:pt-12 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight uppercase">
                THE <span className="text-brand-green">OPENMARKET</span> DIFFERENCE
              </h2>
              <div className="h-1 w-20 bg-brand-green mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {[
                {
                  title: "Visibility Cannot Be Bought",
                  desc: "Rankings based on activity,\nengagement, trust and\ncontribution. Not\nadvertising budgets.",
                  icon: <FiShield size={24} />,
                },
                {
                  title: "Leads Not Diverted to Highest Bidder",
                  desc: "Relevant businesses\nget fair visibility.",
                  icon: <FiTarget size={24} />,
                },
                {
                  title: "Reputation Over Advertising",
                  desc: "Trust and performance\nmatter more\nthan spending.",
                  icon: <FiAward size={24} />,
                },
                {
                  title: "Active Businesses Get Better Visibility",
                  desc: "Buyers find suppliers\nwho are actually\nready to serve.",
                  icon: <FiActivity size={24} />,
                },
                {
                  title: "Built By The Community",
                  desc: "For businesses.\nBy businesses.",
                  icon: <FiUsers size={24} />,
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-green/30 hover:bg-brand-light-green transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-light-green flex items-center justify-center mb-5 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    {cloneElement(benefit.icon, {
                      className: "text-brand-green group-hover:text-brand-navy transition-colors duration-300"
                    })}
                  </div>
                  <h4 className="text-base font-extrabold text-brand-navy leading-tight mb-2 min-h-[40px] flex items-center justify-center">
                    {benefit.title}
                  </h4>
                  <p className="text-sm font-semibold text-slate-500 leading-relaxed whitespace-pre-line">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* 6. Why I'm Building OpenMarket (Founder Story Section) */}
        <section id="why-building" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Left Column: Founder Photo Card */}
              <div className="lg:col-span-4 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative max-w-[280px] w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white"
                >
                  <Image
                    src="/founder2.png"
                    alt="Kiran Pailwan - Founder, OpenMarket"
                    fill
                    sizes="(max-w-768px) 100vw, 280px"
                    className="object-cover hover:scale-103 transition-transform duration-500"
                  />
                </motion.div>
              </div>

              {/* Right Column: Founder Story Bio */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-8 flex flex-col gap-6"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  <span className="text-brand-navy">WHY I&apos;M BUILDING </span>
                  <span className="text-brand-green">OPENMARKET</span>
                </h2>

                <div className="flex flex-col gap-4 text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
                  <p>
                    For more than two decades, I have worked with manufacturers, contractors, traders and suppliers.
                  </p>
                  <p>
                    I have personally experienced the frustrations of today&apos;s B2B marketplaces.
                  </p>
                  <p>
                    OpenMarket is my commitment to building a transparent, community-driven marketplace where businesses can connect with confidence and grow fairly.
                  </p>
                  <p>
                    This journey begins with the first 1,000 businesses who believe change is possible.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-200 mt-2">
                  <div className="flex flex-col">
                    <span className="text-brand-navy font-black tracking-wide text-base">— KIRAN PAILWAN</span>
                    <span className="text-brand-green font-black tracking-wider text-xs uppercase mt-0.5">FOUNDER, OPENMARKET</span>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/kiranpailwan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#0077B5] hover:text-[#005a8a] font-extrabold text-sm transition-colors group self-start sm:self-center"
                  >
                    <FaLinkedin size={18} className="text-[#0077B5]" />
                    <span>Connect on Linkedin</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>



      </main>
    </div>
  );
}
