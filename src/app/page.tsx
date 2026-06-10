"use client";

import { useState, cloneElement } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useAxios } from "@/providers/AxiosProvider";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaArrowRight,
  FaCheck,
  FaUsers,
  FaChartLine,
  FaStar,
  FaStore,
  FaShoppingCart,
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
  FiCamera,
  FiCheckCircle,
  FiXCircle,
  FiUserMinus,
  FiUser,
  FiSliders,
  FiTarget,
  FiUsers,
  FiBriefcase
} from "react-icons/fi";

// Validation schema for the mobile number
const phoneSchema = z.object({
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be at most 15 digits" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Only numbers and standard symbols (+, -, parentheses) are allowed" }),
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
  const axios = useAxios();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmit = async (data: PhoneFormValues) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await axios.post("/web/wishlist", {
        number: data.phone,
      });
      setIsSuccess(true);
      reset();
    } catch (err: any) {
      console.error("Error submitting to waitlist:", err);
      const msg = err.response?.data?.message || err.message || "Something went wrong. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-brand-navy">
                <FaPhoneAlt size={16} className="rotate-90" />
              </span>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                {...register("phone")}
                suppressHydrationWarning
                className={`w-full py-3.5 pl-11 pr-4 rounded-xl text-slate-900 placeholder:text-slate-400 bg-white border ${errors.phone ? "border-red-500 ring-2 ring-red-200" : "border-slate-200"
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
            {errorMessage && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm font-semibold px-1 ${theme === "navy" ? "text-red-500" : "text-red-200"}`}
              >
                {errorMessage}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              type="submit"
              suppressHydrationWarning
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold tracking-wider text-sm md:text-base transition-colors shadow-md bg-brand-green hover:bg-brand-dark-green disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  JOIN THE WAITLIST
                  <FaArrowRight size={14} />
                </>
              )}
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex flex-col items-center justify-center p-6 text-center rounded-2xl border backdrop-blur-sm shadow-md ${
              theme === "navy"
                ? "bg-white border-slate-200 text-slate-800"
                : "bg-white/10 border-white/20 text-white"
            }`}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-brand-green mb-3 shadow-md border border-slate-100">
              <FaCheck size={20} />
            </div>
            <h4 className={`text-lg font-bold mb-1 ${theme === "navy" ? "text-brand-navy" : "text-white"}`}>
              You're on the list!
            </h4>
            <p className={`text-sm max-w-xs ${theme === "navy" ? "text-slate-500" : "text-green-100"}`}>
              Thank you for joining. We will notify you as soon as the OpenMarket app is ready.
            </p>
            <button
              onClick={() => {
                setErrorMessage(null);
                setIsSuccess(false);
              }}
              className={`mt-4 text-xs font-semibold underline underline-offset-4 opacity-80 hover:opacity-100 ${
                theme === "navy" ? "text-slate-600 hover:text-brand-green" : "text-white"
              }`}
            >
              Register another number
            </button>
          </motion.div>
        )}
      </AnimatePresence>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="self-start px-3 py-1 bg-brand-dark-green/10 rounded-full border border-brand-dark-green/20 text-brand-dark-green text-xs font-black tracking-wider uppercase">
                  A BETTER WAY FOR B2B TRADE
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] text-brand-navy"
                >
                  <span className="block">EXISTING B2B</span>
                  <span className="block mt-1">MARKETPLACES</span>
                  <span className="text-brand-green block mt-1">ARE UNFAIR</span>
                  <span className="text-brand-green block mt-1">AND BROKEN.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl font-bold text-brand-navy/80 max-w-xl leading-relaxed"
              >
                They reward who pays the most,
                <br />
                <span className="text-brand-green font-black">not</span> who serves the best.
              </motion.p>

              {/* Hero Pain Points Bullet List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2"
              >
                {[
                  "Useless Leads",
                  "High Membership Charges",
                  "Pay-To-Rank Visibility",
                  "Trust Deficit",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border-2 border-brand-green text-brand-green">
                      <FiX size={10} className="stroke-[3.5]" />
                    </span>
                    <span className="text-base font-bold text-brand-navy">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base font-medium text-slate-700 max-w-lg leading-relaxed mt-2"
              >
                <span className="text-brand-green font-extrabold">OpenMarket</span> is building a fair <span className="text-brand-navy font-extrabold">B2B marketplace</span> where visibility is earned through activity, engagement, trust and contribution.
              </motion.p>
            </div>

            {/* Right Hero Image & 4 Badges */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="flex flex-col items-center gap-6 w-full max-w-[450px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.8 },
                    scale: { duration: 0.8 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative w-full aspect-square flex items-center justify-center"
                >
                  <Image
                    src="/broken_chain_v2.png"
                    alt="Metal chain breaking apart, symbolic of broken fair trade"
                    width={450}
                    height={450}
                    priority
                    className="object-contain hover:scale-102 transition-transform duration-500"
                  />
                </motion.div>

                {/* 4 Badges Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full bg-white border border-slate-200 rounded-2xl shadow-md p-4 grid grid-cols-4 gap-2 text-center"
                >
                  {[
                    { text: "For Businesses.", icon: <FiBriefcase size={22} className="text-[#0FA958] flex-shrink-0" /> },
                    { text: "By Businesses.", icon: <FiUsers size={22} className="text-[#0FA958] flex-shrink-0" /> },
                    { text: "Built on Trust.", icon: <FiShield size={22} className="text-[#0FA958] flex-shrink-0" /> },
                    { text: "Designed for Growth.", icon: <FiTrendingUp size={22} className="text-[#0FA958] flex-shrink-0" /> },
                  ].map((badge, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 border-r last:border-r-0 border-slate-200 px-1 py-1">
                      {badge.icon}
                      <span className="text-[10px] sm:text-[11px] font-black text-brand-navy leading-tight">
                        {badge.text}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* 3. Top Waitlist Card ( Navy-to-Green gradient box ) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#002D62] to-[#007C44] text-white p-8 md:p-12 shadow-xl mt-12 border border-white/10"
          >
            {/* Background absolute decor circle */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Box Left Side */}
              <div className="lg:col-span-7 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
                  <LogoCheckmark size={32} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Join The <span className="text-brand-green">Movement</span>
                  </h3>
                  <p className="text-base md:text-lg text-emerald-50/90 max-w-xl font-medium leading-relaxed">
                    Be the first to receive the <span className="font-extrabold text-brand-green">FREE</span> OpenMarket App and help build a fair B2B marketplace.
                  </p>
                </div>
              </div>

              {/* Box Right Side (Waitlist input form) */}
              <div className="lg:col-span-5 flex flex-col gap-4 w-full">
                <WaitlistForm formId="waitlist-top" theme="green" />

                {/* Features tags below input */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-bold text-white/90 tracking-wide mt-2">
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle size={14} className="text-white" />
                    <span>No Spam</span>
                  </div>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <div className="flex items-center gap-1.5">
                    <FiXCircle size={14} className="text-white" />
                    <span>No Advertisements</span>
                  </div>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <div className="flex items-center gap-1.5">
                    <FiBell size={14} className="text-white" />
                    <span>Only Launch Updates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founding Members Note at the Bottom */}
            <div className="relative flex items-center justify-center gap-2 text-sm font-bold text-white/95 mt-8 pt-4 border-t border-white/10 w-full">
              <FaUsers size={18} className="text-white/80" />
              <span>
                Limited to the first <span className="text-brand-green font-black">1,000</span> founding members.
              </span>
            </div>
          </motion.div>
        </section>

        {/* 4. Pain Points Columns (Sellers vs Buyers Facing) */}
        <section id="sellers" className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Left Column: Sellers Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-brand-light-green border border-emerald-100/60 rounded-3xl p-10 md:p-14 lg:p-16 flex flex-col gap-10 shadow-sm hover:shadow-md transition-all duration-300"
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

                <a
                  href="#waitlist-banner"
                  className="flex items-center gap-2 text-brand-green font-bold hover:text-brand-dark-green transition-colors mt-4 self-start group text-sm"
                >
                  Learn more
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Right Column: Buyers Card */}
              <motion.div
                id="buyers"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-brand-light-blue border border-blue-100/60 rounded-3xl p-10 md:p-14 lg:p-16 flex flex-col gap-10 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-24"
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

                <a
                  href="#waitlist-banner"
                  className="flex items-center gap-2 text-brand-navy font-bold hover:text-slate-700 transition-colors mt-4 self-start group text-sm"
                >
                  Learn more
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 5. The OpenMarket Difference Grid */}
        <section id="difference" className="py-16 md:py-24 bg-white">
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
                    src="/founder.jpeg"
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
                  <span className="text-brand-navy">WHY I'M BUILDING </span>
                  <span className="text-brand-green">OPENMARKET</span>
                </h2>

                <div className="flex flex-col gap-4 text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
                  <p>
                    For more than two decades, I have worked with manufacturers, contractors, traders and suppliers.
                  </p>
                  <p>
                    I have personally experienced the frustrations of today's B2B marketplaces.
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

        {/* 7. Bottom Waitlist CTA Banner (Light Green Banner) */}
        <section id="waitlist-banner" className="bg-brand-light-green text-brand-navy border-t border-slate-100 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: CTA Headline */}
              <div className="lg:col-span-7 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
                  <LogoCheckmark size={32} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-navy">
                    BE AMONG THE FIRST <span className="text-brand-green font-black">1,000</span> MEMBERS
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-semibold tracking-wide">
                    Help shape the future of B2B trade.
                  </p>
                </div>
              </div>

              {/* Right Column: CTA Waitlist Form */}
              <div className="lg:col-span-5 flex flex-col gap-2 w-full">
                <WaitlistForm formId="waitlist-bottom" theme="navy" />
                <span className="text-xs font-semibold text-slate-400 text-center lg:text-left tracking-wide mt-1 pl-1">
                  Receive the OpenMarket App at launch.
                </span>
              </div>

            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}
