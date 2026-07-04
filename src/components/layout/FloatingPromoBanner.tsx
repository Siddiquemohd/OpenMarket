"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useAxios } from "@/providers/AxiosProvider";

// A single digit card designed to look like a premium flip counter/split-flap display
interface DigitProps {
  val: string;
}

function Digit({ val }: DigitProps) {
  return (
    <div className="relative w-[18px] h-[24px] md:w-[22px] md:h-[30px] bg-gradient-to-b from-[#1a2d3e] to-[#0b1724] border border-white/10 rounded-md flex items-center justify-center shadow-[inset_0_-1px_3px_rgba(0,0,0,0.6),0_1px_2px_rgba(0,0,0,0.4)] overflow-hidden select-none">
      {/* Top half shadow overlay */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/[0.03] pointer-events-none" />
      {/* Split flap horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/50 shadow-[0_1px_0_rgba(255,255,255,0.07)] pointer-events-none" />
      <span className="font-mono font-black text-white text-xs md:text-sm tracking-tighter leading-none">
        {val}
      </span>
    </div>
  );
}

export function FloatingPromoBanner() {
  const pathname = usePathname();
  const axios = useAxios();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [joinedCount, setJoinedCount] = useState(428); // Default fallback

  // Fetch dynamic count from API
  useEffect(() => {
    let active = true;
    const fetchCount = async () => {
      try {
        const res = await axios.get("/web/total/wishlist");
        if (res.data?.success && typeof res.data.data?.total === "number") {
          if (active) {
            setJoinedCount(res.data.data.total);
          }
        }
      } catch (err) {
        console.error("Error fetching wishlist count in banner:", err);
      }
    };
    fetchCount();
    return () => {
      active = false;
    };
  }, [axios]);

  // Check if banner is dismissed on client load
  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      try {
        const params = new URLSearchParams(window.location.search);
        if (params.has("reset") || params.has("reset_banner")) {
          localStorage.removeItem("openmarket_promo_dismissed");
          sessionStorage.removeItem("openmarket_promo_dismissed");
        }
      } catch (err) {
        console.warn("Storage reset via URL parameters failed:", err);
      }
    }

    let dismissed = false;
    try {
      // In development mode, we bypass the dismissed state from storage so that
      // refreshing the page always brings the banner back for easy testing.
      if (process.env.NODE_ENV !== "development") {
        dismissed =
          localStorage.getItem("openmarket_promo_dismissed") === "true" ||
          sessionStorage.getItem("openmarket_promo_dismissed") === "true";
      }
    } catch (err) {
      console.warn("Storage access is blocked/restricted (e.g. in VS Code webview). Defaulting banner to visible.", err);
      dismissed = false;
    }

    if (!dismissed) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [pathname]);

  const slides = [
    {
      id: 0,
      badge: "LIMITED TIME OFFER",
      title: "Join the First 1,000 Founding Sellers",
      subtitle: "Be part of building a fairer B2B marketplace for businesses.",
      ctaText: "Become a Founding Seller",
      ctaHref: "/founding-members",
      isWhatsApp: false,
      renderExtra: () => {
        const spotsLeft = Math.max(0, 1000 - joinedCount);
        return (
          <div className="flex flex-col items-center justify-center min-w-[110px] md:border-l md:border-white/10 md:pl-5 select-none">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {String(joinedCount)
                  .padStart(3, "0")
                  .split("")
                  .map((char, index) => (
                    <Digit key={index} val={char} />
                  ))}
              </div>
              <span className="text-white font-extrabold text-xs md:text-sm">/ 1000</span>
            </div>
            <div className="text-[8px] text-[#A5C0D6] mt-0.5 font-bold uppercase tracking-wider">
              Joined So Far
            </div>
            <div className="w-full h-px bg-white/10 my-0.5 md:my-1" />
            <div className="text-[9px] md:text-[10px] text-[#FF5A5A] font-extrabold tracking-wide animate-pulse">
              {spotsLeft} Spots Left
            </div>
          </div>
        );
      },
    },
  ];

  const handleNext = useCallback(() => {
    if (slides.length <= 1) return;
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    if (slides.length <= 1) return;
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleClose = () => {
    // Save in both session and local storage to prevent reappearing
    try {
      sessionStorage.setItem("openmarket_promo_dismissed", "true");
      localStorage.setItem("openmarket_promo_dismissed", "true");
    } catch (err) {
      console.warn("Writing to storage failed in handleClose:", err);
    }
    setIsVisible(false);
  };

  // Auto-play interval for slides
  useEffect(() => {
    if (!isVisible || slides.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // Rotate every 8 seconds

    return () => clearInterval(timer);
  }, [isVisible, handleNext, slides.length]);

  // Prevent server side hydration issues
  if (!isMounted || !isVisible) {
    return null;
  }

  const slide = slides[currentSlide];

  // Motion variants for slide transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-5xl px-4 md:px-6">
      {/* Outer Banner Wrapper */}
      <div className="relative bg-gradient-to-r from-[#031427] via-[#041a31] to-[#020f1f] border border-white/10 rounded-[20px] md:rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.7)] py-3 px-4 md:py-3.5 md:px-6 select-none">

        {/* Inside Rocket Asset */}
        <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 pointer-events-none select-none z-20 animate-[float_4s_ease-in-out_infinite]">
          <img
            src="/rocket.png?v=5"
            alt="Rocket"
            width={56}
            height={56}
            className="w-full h-full object-contain mix-blend-screen"
          />
        </div>

        {/* CSS Keyframes for Rocket Floating Animation */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(2deg); }
          }
        `}</style>

        {/* Slide Carousel Navigation Controls */}
        {slides.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous Offer"
              className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#0d1c2b] border border-white/10 text-white/70 hover:text-white hover:bg-[#152a3f] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
            >
              <FaChevronLeft size={12} className="md:size-[14px]" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Offer"
              className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#0d1c2b] border border-white/10 text-white/70 hover:text-white hover:bg-[#152a3f] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
            >
              <FaChevronRight size={12} className="md:size-[14px]" />
            </button>
          </>
        )}

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close promotion"
          className="absolute top-1/2 -translate-y-1/2 right-3 md:right-5 text-white/40 hover:text-white/80 p-1 md:p-1.5 rounded-full hover:bg-white/5 transition-all duration-200 z-30 cursor-pointer"
        >
          <FiX size={14} className="md:size-[16px]" />
        </button>

        {/* Active Content Container */}
        <div className="relative overflow-hidden pl-14 pr-8 sm:pl-18 md:pl-22 md:pr-10 min-h-[50px] md:min-h-[56px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={slide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 350, damping: 30 },
                opacity: { duration: 0.15 },
              }}
              className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6"
            >

              {/* Left Section: Badge, Title & Description */}
              <div className="flex-1 min-w-0 pr-2">
                <span className="bg-[#FFC72C] text-[#031427] font-black uppercase text-[7px] md:text-[8px] tracking-wider px-1.5 py-0.5 rounded-md inline-block mb-0.5 shadow-sm select-none">
                  {slide.badge}
                </span>
                <h3 className="text-white font-black text-[11px] sm:text-xs md:text-[16px] tracking-tight leading-tight select-none">
                  {slide.title}
                </h3>
                <p className="text-[#A5C0D6] font-semibold text-[9px] md:text-[11px] mt-0.5 leading-snug select-none">
                  {slide.subtitle}
                </p>
              </div>

              {/* Middle Section: Flip Counter (hidden on mobile/narrow viewports to prevent overflow) */}
              <div className="hidden sm:flex items-center justify-center">
                {slide.renderExtra()}
              </div>

              {/* Right Section: CTA Button */}
              <div className="flex-shrink-0 self-stretch md:self-auto flex items-center">
                <Link
                  href={slide.ctaHref}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-1.2 bg-[#FFC72C] hover:bg-[#ebd545] text-black font-extrabold py-1.5 px-3 md:py-2 md:px-4.5 rounded-lg md:rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_15px_rgba(255,199,44,0.3)] text-[10px] md:text-xs shadow-md"
                >
                  <span>{slide.ctaText}</span>
                  <FaChevronRight size={8} className="stroke-[2px] mt-0.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default FloatingPromoBanner;
