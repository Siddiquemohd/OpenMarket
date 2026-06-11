"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAxios } from "@/providers/AxiosProvider";
import { FaPhoneAlt, FaCheck, FaArrowRight } from "react-icons/fa";
import { FiX, FiShield, FiAlertCircle, FiLock } from "react-icons/fi";

interface PhoneOTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhone?: string;
}

export function PhoneOTPModal({ isOpen, onClose, initialPhone = "" }: PhoneOTPModalProps) {
  const axios = useAxios();
  const [step, setStep] = useState<"phone" | "otp" | "success">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const otpInputRef = useRef<HTMLInputElement>(null);

  // Clear or prepopulate state when modal opens
  useEffect(() => {
    if (isOpen) {
      setError(null);
      setSuccessMessage(null);
      setIsLoading(false);
      setOtp("");
      
      if (initialPhone) {
        const cleaned = initialPhone.trim();
        setPhone(cleaned);
        setStep("phone");
        // Trigger auto-send if a phone is provided inline
        autoSendOtp(cleaned);
      } else {
        setPhone("");
        setStep("phone");
      }
    }
  }, [isOpen, initialPhone]);

  // Focus OTP input when step changes to otp
  useEffect(() => {
    if (step === "otp" && otpInputRef.current) {
      otpInputRef.current.focus();
    }
  }, [step]);

  const formatPhoneNumber = (num: string) => {
    const cleaned = num.trim().replace(/[\s()-]/g, "");
    const phoneWithPlus = cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
    const phoneWithoutPlus = phoneWithPlus.replace("+", "");
    return { phoneWithPlus, phoneWithoutPlus };
  };

  const autoSendOtp = async (phoneNumber: string) => {
    if (!phoneNumber) return;
    setIsLoading(true);
    setError(null);
    try {
      const { phoneWithPlus } = formatPhoneNumber(phoneNumber);
      await axios.post("/web/wishlist/send-otp", {
        number: phoneWithPlus,
      });
      setStep("otp");
    } catch (err: any) {
      console.error("Error sending OTP:", err);
      const msg = err.response?.data?.message || err.response?.data?.error || err.message || "Failed to send OTP. Please try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      setError("Please enter your mobile number");
      return;
    }
    const cleaned = phone.replace(/[\s()-]/g, "");
    if (cleaned.length < 10) {
      setError("Phone number must be at least 10 digits");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const { phoneWithPlus } = formatPhoneNumber(phone);
      await axios.post("/web/wishlist/send-otp", {
        number: phoneWithPlus,
      });
      setStep("otp");
    } catch (err: any) {
      console.error("Error sending OTP:", err);
      const msg = err.response?.data?.message || err.response?.data?.error || err.message || "Failed to send OTP. Please try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter the OTP");
      return;
    }
    if (otp.length < 4) {
      setError("OTP must be at least 4 digits");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const { phoneWithoutPlus } = formatPhoneNumber(phone);
      await axios.post("/web/wishlist/verify-otp", {
        number: phoneWithoutPlus,
        otp: otp,
      });
      setSuccessMessage("OTP verified successfully! You are now on the waitlist.");
      setStep("success");
    } catch (err: any) {
      console.error("Error verifying OTP:", err);
      const msg = err.response?.data?.message || err.response?.data?.error || err.message || "Invalid OTP. Please try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative border border-slate-100 z-50 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <FiX size={18} />
        </button>

        <div className="text-center flex flex-col items-center gap-4 mt-2">
          {/* Circular Badge Icon */}
          <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-inner ${
            step === "success" 
              ? "bg-emerald-50 text-brand-green" 
              : "bg-slate-50 text-brand-navy"
          }`}>
            {step === "phone" && <FaPhoneAlt size={20} className="rotate-90" />}
            {step === "otp" && <FiLock size={22} />}
            {step === "success" && <FaCheck size={20} />}
          </div>

          <AnimatePresence mode="wait">
            {step === "phone" && (
              <motion.div
                key="phone-step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="w-full flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-extrabold text-brand-navy tracking-tight">
                    Join the Waitlist
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Enter your mobile number to receive a verification OTP and join the movement.
                  </p>
                </div>

                <form onSubmit={handleSendOtpSubmit} className="flex flex-col gap-3 w-full text-left mt-2">
                  <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-brand-navy">
                      <FaPhoneAlt size={16} className="rotate-90" />
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={isLoading}
                      className="w-full py-3.5 pl-11 pr-4 rounded-xl text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-base font-medium shadow-sm transition-all"
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-red-500 px-1"
                    >
                      <FiAlertCircle size={14} className="flex-shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isLoading}
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold tracking-wider text-sm md:text-base transition-colors shadow-md bg-brand-green hover:bg-brand-dark-green disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        SEND VERIFICATION CODE
                        <FaArrowRight size={14} />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            )}

            {step === "otp" && (
              <motion.div
                key="otp-step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="w-full flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-extrabold text-brand-navy tracking-tight">
                    Verify Your Mobile Number
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 max-w-xs mx-auto leading-relaxed">
                    We've sent a 4-digit OTP to your number <span className="font-bold text-brand-navy">{phone}</span>.
                  </p>
                </div>

                <form onSubmit={handleVerifyOtpSubmit} className="flex flex-col gap-3 w-full text-left mt-2">
                  <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-brand-navy">
                      <FiShield size={16} />
                    </span>
                    <input
                      ref={otpInputRef}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      placeholder="Enter verification code"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      disabled={isLoading}
                      className="w-full py-3.5 pl-11 pr-4 rounded-xl text-slate-900 placeholder:text-slate-400 bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-base font-medium shadow-sm transition-all text-center tracking-[0.2em] font-mono"
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-red-500 px-1"
                    >
                      <FiAlertCircle size={14} className="flex-shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isLoading}
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold tracking-wider text-sm md:text-base transition-colors shadow-md bg-brand-green hover:bg-brand-dark-green disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        VERIFY & JOIN
                        <FaArrowRight size={14} />
                      </>
                    )}
                  </motion.button>

                  <div className="flex justify-between items-center px-1 mt-1 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setStep("phone");
                        setError(null);
                      }}
                      className="text-slate-500 hover:text-brand-navy font-semibold transition-colors underline underline-offset-2"
                    >
                      Change number
                    </button>
                    <button
                      type="button"
                      onClick={() => autoSendOtp(phone)}
                      disabled={isLoading}
                      className="text-brand-green hover:text-brand-dark-green font-bold transition-colors disabled:opacity-50"
                    >
                      Resend code
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div
                key="success-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full flex flex-col gap-4 py-2"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-extrabold text-brand-navy tracking-tight">
                    You're on the list!
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 max-w-xs mx-auto leading-relaxed">
                    {successMessage || "Thank you for joining. We will notify you as soon as the OpenMarket app is ready."}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={onClose}
                  className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold tracking-wider text-sm md:text-base transition-colors shadow-md bg-brand-green hover:bg-brand-dark-green"
                >
                  DISMISS
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <span className="text-[10px] font-semibold text-slate-400 tracking-wide mt-2">
            Only launch updates • No ads • Cancel anytime
          </span>
        </div>
      </motion.div>
    </div>
  );
}
