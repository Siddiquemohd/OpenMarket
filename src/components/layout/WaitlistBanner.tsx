"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useOtpModal } from "@/providers/OtpModalProvider";
import { usePathname } from "next/navigation";
import { LegalConsentNotice } from "@/components/shared/LegalConsentNotice";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import { FiCheckCircle, FiXCircle, FiBell } from "react-icons/fi";

const phoneSchema = z.object({
  phone: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only numbers" }),
});

type PhoneFormValues = z.infer<typeof phoneSchema>;

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

export function WaitlistBanner() {
  const pathname = usePathname();
  const { openOtpModal } = useOtpModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
  });

  if (pathname === "/founding-members") {
    return null;
  }

  const onSubmit = (data: PhoneFormValues) => {
    openOtpModal(data.phone);
    reset();
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-0 md:pt-16 md:pb-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#002D62] to-[#007C44] text-white p-8 md:p-12 shadow-xl border border-white/10"
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
                  className={`w-full py-3.5 pl-[84px] pr-4 rounded-xl text-slate-900 placeholder:text-slate-400 bg-white border ${
                    errors.phone ? "border-red-500 ring-2 ring-red-200" : "border-slate-200"
                  } focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-base font-medium shadow-sm transition-all`}
                />
              </div>
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-semibold px-1 text-red-200"
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
              <LegalConsentNotice tone="dark" className="text-center px-1" />
            </form>

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
  );
}
