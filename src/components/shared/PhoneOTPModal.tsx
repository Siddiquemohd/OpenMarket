"use client";

import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAxios } from "@/providers/AxiosProvider";
import { FaPhoneAlt, FaCheck, FaArrowRight } from "react-icons/fa";
import { FiX, FiAlertCircle, FiLock } from "react-icons/fi";

interface PhoneOTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhone?: string;
}

type ApiErrorBody = {
  message?: string;
  error?: string;
};

function getErrorMessage(error: unknown, fallback: string) {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof error.response === "object" &&
    error.response !== null &&
    "data" in error.response
  ) {
    const data = error.response.data as ApiErrorBody;
    return data.message || data.error || fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}

export function PhoneOTPModal({ isOpen, onClose, initialPhone = "" }: PhoneOTPModalProps) {
  const api = useAxios();
  const [step, setStep] = useState<"phone" | "otp" | "success">("phone");
  const [phone, setPhone] = useState(initialPhone.trim());
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const formatPhoneNumber = (num: string) => {
    const cleaned = num.trim().replace(/[\s()-]/g, "");
    const phoneWithPlus = cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
    const phoneWithoutPlus = phoneWithPlus.replace("+", "");
    return { phoneWithPlus, phoneWithoutPlus };
  };

  const autoSendOtp = useCallback(async (phoneNumber: string) => {
    if (!phoneNumber) return;
    setIsLoading(true);
    setError(null);
    try {
      const { phoneWithPlus } = formatPhoneNumber(phoneNumber);
      const res = await api.post("/web/wishlist/send-otp", {
        number: phoneWithPlus,
      });
      // Check if number already exists in wishlist
      if (res.data?.data?.alreadyExists) {
        setError(res.data.msg || "Number is already in the wishlist");
        return;
      }
      setStep("otp");
    } catch (err: unknown) {
      console.error("Error sending OTP:", err);
      setError(getErrorMessage(err, "Failed to send OTP. Please try again."));
    } finally {
      setIsLoading(false);
    }
  }, [api]);

  useEffect(() => {
    if (!initialPhone) return;

    const timeoutId = window.setTimeout(() => {
      void autoSendOtp(initialPhone);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [autoSendOtp, initialPhone]);

  // Focus first OTP input when step changes to otp
  useEffect(() => {
    if (step === "otp" && otpRefs.current[0]) {
      setTimeout(() => {
        otpRefs.current[0]?.focus();
      }, 50);
    }
  }, [step]);

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
      const res = await api.post("/web/wishlist/send-otp", {
        number: phoneWithPlus,
      });
      // Check if number already exists in wishlist
      if (res.data?.data?.alreadyExists) {
        setError(res.data.msg || "Number is already in the wishlist");
        return;
      }
      setStep("otp");
    } catch (err: unknown) {
      console.error("Error sending OTP:", err);
      setError(getErrorMessage(err, "Failed to send OTP. Please try again."));
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otpValues.join("");
    if (otpString.length < 4) {
      setError("Please enter all 4 digits of the OTP");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const { phoneWithoutPlus } = formatPhoneNumber(phone);
      await api.post("/web/wishlist/verify-otp", {
        number: phoneWithoutPlus,
        otp: otpString,
      });
      setSuccessMessage("OTP verified successfully! You are now on the waitlist.");
      setStep("success");
    } catch (err: unknown) {
      console.error("Error verifying OTP:", err);
      setError(getErrorMessage(err, "Invalid OTP. Please try again."));
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (val: string, index: number) => {
    const cleanVal = val.replace(/[^0-9]/g, "");
    if (!cleanVal) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = "";
      setOtpValues(newOtpValues);
      return;
    }

    const digit = cleanVal[cleanVal.length - 1]; // take the last character entered
    const newOtpValues = [...otpValues];
    newOtpValues[index] = digit;
    setOtpValues(newOtpValues);

    // Auto-focus next input
    if (index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!otpValues[index] && index > 0) {
        // Current input is empty, focus previous and clear it
        const newOtpValues = [...otpValues];
        newOtpValues[index - 1] = "";
        setOtpValues(newOtpValues);
        otpRefs.current[index - 1]?.focus();
      } else {
        // Just clear current input
        const newOtpValues = [...otpValues];
        newOtpValues[index] = "";
        setOtpValues(newOtpValues);
      }
      e.preventDefault();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 4);
    if (pastedData.length > 0) {
      const newOtpValues = [...otpValues];
      for (let i = 0; i < 4; i++) {
        newOtpValues[i] = pastedData[i] || "";
      }
      setOtpValues(newOtpValues);
      
      // Focus the last filled input or the 4th input
      const focusIndex = Math.min(pastedData.length - 1, 3);
      otpRefs.current[focusIndex]?.focus();
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
                    We&apos;ve sent a 4-digit OTP to your number <span className="font-bold text-brand-navy">{phone}</span>.
                  </p>
                </div>

                <form onSubmit={handleVerifyOtpSubmit} className="flex flex-col gap-3 w-full text-left mt-2">
                  <div className="flex justify-center gap-3 sm:gap-4 my-2">
                    {otpValues.map((value, index) => (
                      <input
                        key={index}
                        ref={(el) => { otpRefs.current[index] = el; }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                        onPaste={handleOtpPaste}
                        disabled={isLoading}
                        className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-extrabold border border-slate-200 rounded-xl focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 focus:outline-none transition-all text-slate-900 bg-white shadow-sm"
                      />
                    ))}
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
                    You&apos;re on the list!
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
