"use client";

import { useState, cloneElement } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaArrowRight,
  FaCheck,
  FaUsers,
  FaChartLine,
  FaStar,
  FaStore,
  FaShoppingCart,
} from "react-icons/fa";
import {
  FiMenu,
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
  FiCamera
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

// Logo Component using logo.png from the public folder
function Logo() {
  return (
    <div className="relative w-[180px] h-[40px] flex-shrink-0">
      <Image
        src="/logo.png"
        alt="OpenMarket Logo"
        fill
        sizes="180px"
        priority
        className="object-contain object-left"
      />
    </div>
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    setIsSuccess(true);
    reset();
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
                className="text-sm font-semibold text-red-200 px-1"
              >
                {errors.phone.message}
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
            className="flex flex-col items-center justify-center p-6 text-center bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-brand-green mb-3 shadow-md">
              <FaCheck size={20} />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">You're on the list!</h4>
            <p className="text-sm text-green-100 max-w-xs">
              Thank you for joining. We will notify you as soon as the OpenMarket app is ready.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-4 text-xs font-semibold text-white underline underline-offset-4 opacity-80 hover:opacity-100"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 antialiased font-sans">
      {/* 1. Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition-colors md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-brand-navy text-sm">
            <a href="#sellers" className="hover:text-brand-green transition-colors">For Sellers</a>
            <a href="#buyers" className="hover:text-brand-green transition-colors">For Buyers</a>
            <a href="#difference" className="hover:text-brand-green transition-colors">The Difference</a>
            <a href="#why-building" className="hover:text-brand-green transition-colors">Our Story</a>
            <a
              href="#waitlist-banner"
              className="px-5 py-2.5 bg-brand-green hover:bg-brand-dark-green text-white rounded-full transition-colors text-sm font-bold shadow-sm"
            >
              Join Waitlist
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden px-6 pb-6 pt-2"
            >
              <nav className="flex flex-col gap-4 font-semibold text-brand-navy text-base">
                <a
                  href="#sellers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-50 hover:text-brand-green transition-colors"
                >
                  For Sellers
                </a>
                <a
                  href="#buyers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-50 hover:text-brand-green transition-colors"
                >
                  For Buyers
                </a>
                <a
                  href="#difference"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-50 hover:text-brand-green transition-colors"
                >
                  The Difference
                </a>
                <a
                  href="#why-building"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-50 hover:text-brand-green transition-colors"
                >
                  Our Story
                </a>
                <a
                  href="#waitlist-banner"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 bg-brand-green hover:bg-brand-dark-green text-white rounded-xl text-center font-bold shadow-sm mt-2"
                >
                  Join Waitlist
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Page Layout */}
      <main className="flex-grow">

        {/* 2. Hero & Waitlist Box Container */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
                >
                  <span className="text-brand-navy block">FAIR TRADE</span>
                  <span className="text-brand-green block mt-1">IS BROKEN.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl font-medium text-slate-600 max-w-xl leading-relaxed"
              >
                The current system rewards who pays the most,
                <br />
                <span className="text-brand-green font-bold">not</span> who serves the best.
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
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-green text-white">
                      <FiX size={12} className="stroke-[3]" />
                    </span>
                    <span className="text-base font-bold text-brand-navy">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base font-semibold text-brand-green max-w-lg leading-relaxed mt-2"
              >
                OpenMarket is building a fair marketplace where visibility is earned through activity, engagement, trust and contribution.
              </motion.p>
            </div>

            {/* Right Hero Image (Broken Metal Chain) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
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
                className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"
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
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-brand-green text-white shadow-md">
                  <FaUsers size={28} />
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
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-semibold text-white/90 tracking-wide mt-2">
                  <div className="flex items-center gap-1.5">
                    <FiShield size={14} className="text-white" />
                    <span>No Spam</span>
                  </div>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <div className="flex items-center gap-1.5">
                    <FiSlash size={14} className="text-white rotate-90" />
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
                className="bg-brand-light-green border border-emerald-100/60 rounded-3xl p-8 md:p-10 flex flex-col gap-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green">
                    <FaStore size={22} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                    <span className="text-brand-green block">WHAT SELLERS</span>
                    <span className="text-brand-navy block">ARE FACING</span>
                  </h3>
                </div>

                 <ul className="flex flex-col gap-4 flex-grow">
                  {[
                    { text: "90% of enquiries are useless", icon: <FiMessageSquare size={20} className="text-brand-green flex-shrink-0 mt-0.5" /> },
                    { text: "Same enquiry to multiple sellers", icon: <FiCheckSquare size={20} className="text-brand-green flex-shrink-0 mt-0.5" /> },
                    { text: "Membership fees keep increasing", icon: <FiLayers size={20} className="text-brand-green flex-shrink-0 mt-0.5" /> },
                    { text: "Basic membership feels worthless", icon: <FiAward size={20} className="text-brand-green flex-shrink-0 mt-0.5" /> },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 group">
                      {item.icon}
                      <span className="text-base font-bold text-brand-navy/90 group-hover:translate-x-1 transition-transform">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist-banner"
                  className="flex items-center gap-2 text-brand-green font-bold hover:text-brand-dark-green transition-colors mt-4 self-start group"
                >
                  Learn more
                  <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Right Column: Buyers Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-brand-light-blue border border-blue-100/60 rounded-3xl p-8 md:p-10 flex flex-col gap-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-navy/10 text-brand-navy">
                    <FaShoppingCart size={22} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                    <span className="text-brand-navy block">WHAT BUYERS</span>
                    <span className="text-brand-navy block">ARE FACING</span>
                  </h3>
                </div>

                 <ul className="flex flex-col gap-4 flex-grow">
                  {[
                    { text: "Fraud sellers damage trust", icon: <FiCamera size={20} className="text-brand-navy flex-shrink-0 mt-0.5" /> },
                    { text: "Difficult to find genuine suppliers", icon: <FiActivity size={20} className="text-brand-navy flex-shrink-0 mt-0.5" /> },
                    { text: "Difficult to find active suppliers", icon: <FiSearch size={20} className="text-brand-navy flex-shrink-0 mt-0.5" /> },
                    { text: "Too many choices. Too little clarity.", icon: <FiBell size={20} className="text-brand-navy flex-shrink-0 mt-0.5" /> },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 group">
                      {item.icon}
                      <span className="text-base font-bold text-brand-navy/90 group-hover:translate-x-1 transition-transform">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist-banner"
                  className="flex items-center gap-2 text-brand-navy font-bold hover:text-slate-700 transition-colors mt-4 self-start group"
                >
                  Learn more
                  <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
                  desc: "Rankings based on activity, engagement and reputation.",
                  icon: <FiShield size={24} />,
                },
                {
                  title: "Leads Not Diverted to Highest Bidder",
                  desc: "Relevant businesses get fair visibility.",
                  icon: <FaUsers size={24} />,
                },
                {
                  title: "Reputation Over Advertising",
                  desc: "Trust and performance matter more than spending.",
                  icon: <FaStar size={24} />,
                },
                {
                  title: "Active Businesses Get Better Visibility",
                  desc: "Buyers find suppliers who are actually ready to serve.",
                  icon: <FaChartLine size={24} />,
                },
                {
                  title: "Built By The Community",
                  desc: "For businesses. By businesses.",
                  icon: <FaUsers size={24} />,
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
                  <p className="text-sm font-semibold text-slate-500 leading-relaxed">
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
                    src="/founder.png"
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
                  <p className="text-brand-navy">
                    This journey begins with the first 1,000 businesses who believe change is possible.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-200 mt-2">
                  <div className="flex flex-col">
                    <span className="text-brand-navy font-black tracking-wide text-base">KIRAN PAILWAN</span>
                    <span className="text-brand-green font-bold text-xs uppercase tracking-wider">Founder, OpenMarket</span>
                  </div>

                  <a
                    href="https://linkedin.com/in/kiranpailwan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0077B5] hover:bg-[#006295] text-white font-bold text-sm transition-colors self-start shadow-sm group"
                  >
                    <FaLinkedin size={18} />
                    <span>Connect on Linkedin</span>
                    <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 7. Bottom Waitlist CTA Banner (Navy Banner) */}
        <section id="waitlist-banner" className="bg-brand-deep-navy text-white py-12 md:py-16">
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
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#097B3E] text-white shadow-inner">
                  <FaUsers size={28} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    BE AMONG THE FIRST <span className="text-brand-green font-black">1,000</span> MEMBERS
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 font-semibold tracking-wide">
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

      {/* 8. Footer */}
      <footer className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & Tagline */}
          <Logo />

          {/* Contact & Copyright Info */}
          <div className="text-center text-xs font-semibold text-slate-500 leading-relaxed flex flex-col gap-1">
            <span>© 2026 Uneefy Infratech Pvt. Ltd.</span>
            <span>Vashi, Navi Mumbai | Hadapsar, Pune</span>
            <a
              href="mailto:hello@openmarket.co.in"
              className="text-brand-green hover:underline font-bold mt-1"
            >
              hello@openmarket.co.in
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-100 text-[#0077B5] hover:bg-slate-200 transition-colors flex items-center justify-center shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-100 text-[#FF0000] hover:bg-slate-200 transition-colors flex items-center justify-center shadow-sm"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
