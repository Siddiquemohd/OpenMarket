"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneIcon } from "@/components/shared/PhoneIcon";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaUsers, 
  FaBuilding, 
  FaCheck, 
  FaArrowRight, 
  FaStar,
  FaMapMarkerAlt,
  FaEyeSlash,
  FaTag,
  FaPercent,
  FaRegMoneyBillAlt,
  FaUserTimes,
  FaUserPlus,
  FaChartLine,
  FaBalanceScale,
  FaHandshake,
  FaUser,
  FaBoxOpen,
  FaRocket,
  FaChevronRight,
  FaWhatsapp,
  FaRegEnvelope
} from "react-icons/fa";
import { FiCheckCircle, FiAlertCircle, FiMapPin, FiShield, FiTrendingUp } from "react-icons/fi";

// Reusable card for Section 3 (Problems Sellers Face)
interface ProblemCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}
function ProblemCard({ title, desc, icon }: ProblemCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4 shadow-sm flex-shrink-0">
        {icon}
      </div>
      <h4 className="text-base font-bold text-red-600 mb-2 leading-snug">
        {title}
      </h4>
      <p className="text-xs font-semibold text-slate-500 leading-relaxed max-w-[190px]">
        {desc}
      </p>
    </div>
  );
}

// Reusable card for Section 4 (Benefit Cards)
interface BenefitCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}
function BenefitCard({ title, desc, icon }: BenefitCardProps) {
  return (
    <div className="flex min-h-[190px] flex-col items-center justify-start rounded-2xl border border-slate-100 bg-white px-4 pt-6 pb-5 text-center shadow-[0_4px_16px_rgba(15,23,42,0.06)] h-full">
      <div className="w-11 h-11 rounded-full bg-brand-light-green flex items-center justify-center text-brand-green mb-4 flex-shrink-0">
        {icon}
      </div>
      <h4 className="text-[13px] font-black text-brand-green mb-1.5 leading-snug">
        {title}
      </h4>
      <p className="text-[11px] font-semibold text-slate-500 leading-normal whitespace-pre-line">
        {desc}
      </p>
    </div>
  );
}

// Reusable card for Section 5 (How It Works Steps)
interface StepCardProps {
  step: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
}
function StepCard({ step, title, desc, icon }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center relative z-10 px-2">
      {/* Number Badge and Icon */}
      <div className="relative mb-4">
        {/* Circle step number */}
        <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-brand-green text-white text-[11px] font-black flex items-center justify-center shadow-sm z-20">
          {step}
        </span>
        {/* Icon Circle */}
        <div className="w-16 h-16 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-brand-green z-10 relative">
          {icon}
        </div>
      </div>
      <h4 className="text-xs font-extrabold text-brand-navy mb-1 leading-snug min-h-[32px] flex items-center justify-center max-w-[150px]">
        {title}
      </h4>
      <p className="text-[10px] font-bold text-slate-400 leading-relaxed max-w-[130px]">
        {desc}
      </p>
    </div>
  );
}

import { useOtpModal } from "@/providers/OtpModalProvider";

// For Sellers Page Component
export default function ForSellers() {
  const { openOtpModal } = useOtpModal();
  const problems = [
    {
      title: "Pay To Get Seen",
      desc: "Visibility goes to the highest payer, not the most deserving. Small businesses remain invisible.",
      icon: <FiAlertCircle size={28} />
    },
    {
      title: "Low Quality Leads",
      desc: "Get enquiries that are not relevant or are time-wasters. High efforts, low conversion.",
      icon: <FaUserTimes size={26} />
    },
    {
      title: "High Membership Fees",
      desc: "Pay recurring fees with no guarantee of real business or returns.",
      icon: <FaRegMoneyBillAlt size={28} />
    },
    {
      title: "Price Wars",
      desc: "Unhealthy competition driven by discounts and promotions. Margins suffer.",
      icon: <FaTag size={26} />
    },
    {
      title: "Low Visibility",
      desc: "Even good sellers struggle to get noticed among thousands of paid listings.",
      icon: <FaEyeSlash size={26} />
    }
  ];

  const benefits = [
    {
      title: "Equal Opportunity",
      desc: "No pay-to-rank.\nEvery seller gets\na fair chance.",
      icon: <FaBalanceScale size={24} />
    },
    {
      title: "Activity Based Visibility",
      desc: "The more active and\nengaged you are,\nthe more visible\nyou become.",
      icon: <FiTrendingUp size={24} />
    },
    {
      title: "Genuine Enquiries",
      desc: "Buyers connect with\nrelevant sellers.\nBetter leads, higher\nconversion.",
      icon: <FaUsers size={24} />
    },
    {
      title: "Build Reputation",
      desc: "Ratings, reviews and\nresponse time help you\nbuild trust and credibility.",
      icon: <FaStar size={22} />
    },
    {
      title: "Long Term Growth",
      desc: "Better visibility leads\nto more enquiries,\nrepeat business and\nsustainable growth.",
      icon: <FaChartLine size={24} />
    }
  ];

  const visibilityTips = [
    "Complete and updated profile",
    "Add quality products & services",
    "Post regularly",
    "Respond to enquiries quickly",
    "Receive positive reviews",
    "Maintain good performance"
  ];

  const steps = [
    {
      title: "Create Your Profile",
      desc: "Add your business details, certifications, and tell buyers about you.",
      icon: <FaUserPlus size={22} />
    },
    {
      title: "Showcase Products & Services",
      desc: "Upload products, services, images, videos and documents.",
      icon: <FaBoxOpen size={24} />
    },
    {
      title: "Stay Active",
      desc: "Post updates, respond to enquiries and keep your profile fresh.",
      icon: <FiCheckCircle size={22} />
    },
    {
      title: "Get Discovered",
      desc: "Your visibility increases based on your activity and engagement.",
      icon: <FaStar size={20} />
    },
    {
      title: "Grow Your Business",
      desc: "Receive quality enquiries, build relationships and grow sustainably.",
      icon: <FaHandshake size={26} />
    }
  ];

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">

        {/* SECTION 1: Hero & Founder Testimonial */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-3">
                <span className="text-brand-green text-sm font-black tracking-widest uppercase self-start">
                  FOR SELLERS
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15] text-brand-navy mt-1">
                  Grow Your Business <br />
                  Without Paying <br />
                  <span className="text-brand-green block mt-1">For Visibility.</span>
                </h1>
              </div>

              <p className="text-sm md:text-[14.5px] font-bold text-slate-500 leading-relaxed max-w-sm">
                Unlike other marketplaces, we don’t sell visibility. Your visibility on OpenMarket is based on your{" "}
                <Link href="/why-openmarket" className="text-brand-navy font-extrabold underline decoration-brand-green/40 underline-offset-4 transition-colors hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40">
                  activity and engagement
                </Link>{" "}
                on the platform.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openOtpModal()}
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-dark-green text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all duration-300 hover:scale-102 cursor-pointer focus:outline-none"
                >
                  <span>Register Your Business</span>
                  <FaArrowRight size={12} />
                </button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 px-5 py-3 rounded-xl font-bold text-sm transition-all"
                >
                  <span>How It Works</span>
                </a>
              </div>
            </div>

            {/* Hero Center Image */}
            <div className="lg:col-span-4 flex justify-center relative min-h-[340px]">
              {/* Green Circle Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-brand-light-green z-0" />
              {/* Portrait Image Container */}
              <div className="relative w-[340px] h-[340px] z-10">
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

            {/* Hero Right Testimonial Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="max-w-[340px] w-full bg-white border border-slate-100 rounded-3xl p-6 shadow-md relative text-left">
                {/* Quote Icon */}
                <div className="text-brand-green mb-4 opacity-40">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.7143C0 6.13605 5.56846 0 12.4357 0V4.8C7.59751 4.8 5.14523 7.82857 5.14523 11.2V13.7143H11.1452V24H0V13.7143ZM18.8548 13.7143C18.8548 6.13605 24.4232 0 31.2905 0V4.8C26.4523 4.8 24 7.82857 24 11.2V13.7143H30V24H18.8548V13.7143Z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-slate-500 leading-relaxed mb-6">
                  Our goal is not to sell visibility. Our goal is to help businesses get discovered, build trust and grow — the fair way.
                </p>

                {/* Signature Cursive Line */}
                <div className="font-serif italic text-2xl text-brand-navy/60 leading-none mb-1">
                  K. Pailwan
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-black text-brand-navy">Kiran Pailwan</span>
                  <span className="text-xs font-bold text-slate-400">Founder, OpenMarket</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: Compact stats/info bar */}
        <section className="max-w-7xl mx-auto px-6 py-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* Item 1 */}
              <div className="flex items-center gap-3.5 px-2 md:px-4 py-2 md:py-0 text-left">
                <div className="text-brand-navy flex-shrink-0">
                  <FaGraduationCap size={22} className="opacity-80" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-black text-brand-navy leading-snug">VJTI Engineer</span>
                  <span className="text-[10.5px] font-bold text-slate-400">Founder</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3.5 px-4 md:px-6 py-2 md:py-0 text-left pt-4 md:pt-0">
                <div className="text-brand-green flex-shrink-0">
                  <FiShield size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-black text-brand-navy leading-snug">20+ Years</span>
                  <span className="text-[10.5px] font-bold text-slate-400">Industrial Experience</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3.5 px-4 md:px-6 py-2 md:py-0 text-left pt-4 md:pt-0">
                <div className="text-brand-navy flex-shrink-0">
                  <FaUsers size={20} className="opacity-80" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-black text-brand-navy leading-snug">300+ Industrial</span>
                  <span className="text-[10.5px] font-bold text-slate-400">Customers Served</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-3.5 px-4 md:px-6 py-2 md:py-0 text-left pt-4 md:pt-0">
                <div className="text-brand-green flex-shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12.5px] font-black text-brand-navy leading-snug">Based in</span>
                  <span className="text-[10.5px] font-bold text-slate-400">Navi Mumbai, India</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: Problems sellers face */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header with Divider Lines */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center gap-4 w-full max-w-3xl mb-4">
                <div className="flex-grow h-[1.5px] bg-slate-200" />
                <h2 className="text-xl md:text-2xl font-extrabold text-brand-navy tracking-tight text-center uppercase whitespace-nowrap px-2">
                  The Real Problems Sellers Face On Other Marketplaces
                </h2>
                <div className="flex-grow h-[1.5px] bg-slate-200" />
              </div>
            </div>

            {/* 5-Column Grid */}
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

        {/* SECTION 4: OpenMarket value section */}
        <section className="bg-white pt-10 pb-8 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Two Column Layout: Left (Heading + 5 Cards), Right (Checklist Panel) */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
              
              {/* Left Column: Heading & 5 Benefit Cards */}
              <div className="flex flex-col justify-start gap-4">
                
                {/* Header Content */}
                <div className="mb-2">
                  <h2 className="text-center text-xl md:text-2xl font-black text-brand-navy tracking-tight mb-1">
                    On OpenMarket, Visibility is Earned - Not Bought
                  </h2>
                  <p className="text-center text-xs md:text-sm font-semibold text-slate-500 max-w-xl leading-relaxed mx-auto mb-6">
                    We reward sellers who are active, responsive and engaged.
                  </p>
               

                {/* 5 Benefit Cards in one row on desktop */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
              </div>

              {/* Right Column: Visibility Checklist Panel */}
              <div className="bg-brand-light-green border border-emerald-100/60 rounded-2xl p-4 shadow-sm text-left relative overflow-hidden flex flex-col h-full justify-between">
                
                <div>
                  <h3 className="text-[12.5px] font-black text-brand-navy mb-2.5 flex items-center gap-1.5">
                    <FiTrendingUp className="text-brand-green flex-shrink-0" size={15} />
                    <span>What Improves Your Visibility?</span>
                  </h3>

                  {/* Checklist */}
                  <div className="flex flex-col gap-2 mb-3.5">
                    {visibilityTips.map((tip, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-white border border-brand-green text-brand-green flex items-center justify-center flex-shrink-0 shadow-sm">
                          <FaCheck size={5} />
                        </span>
                        <span className="text-[11px] font-semibold text-brand-navy">
                          {tip}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Text Panel */}
                <div className="border-t border-emerald-100/60 pt-3 flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10.5px] font-bold text-brand-green leading-tight">Your engagement.</span>
                    <span className="text-[11.5px] font-black text-brand-navy mt-0.5 leading-tight">
                      Your visibility.<br />
                      Your growth.
                    </span>
                  </div>
                  {/* Tiny green chart graphic */}
                  <div className="text-brand-green opacity-80 flex-shrink-0 mb-0.5">
                    <FiTrendingUp size={28} />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SECTION 5: How it works */}
        <section id="how-it-works" className="bg-white py-16 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header with Divider Lines */}
            <div className="flex flex-col items-center mb-14">
              <div className="flex items-center gap-4 w-full max-w-2xl mb-4">
                <div className="flex-grow h-[1.5px] bg-slate-200" />
                <h2 className="text-xl md:text-2xl font-extrabold text-brand-navy tracking-tight text-center uppercase whitespace-nowrap px-2">
                  How It Works For Sellers
                </h2>
                <div className="flex-grow h-[1.5px] bg-slate-200" />
              </div>
            </div>

            {/* 5 steps Horizontal Line container */}
            <div className="relative max-w-5xl mx-auto">
              
              {/* Horizontal Connector Line for Desktop */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1.5px] bg-slate-200 border-dashed border-t border-slate-300 z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-2">
                {steps.map((s, idx) => (
                  <StepCard
                    key={idx}
                    step={idx + 1}
                    title={s.title}
                    desc={s.desc}
                    icon={s.icon}
                  />
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 6: Professional profile / contact info */}
        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="rounded-2xl bg-[#f8fbf9] border border-[#e2eae5]/60 px-8 py-7 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#e2eae5] items-stretch">
              
              {/* Left Column: Bullets */}
              <div className="lg:col-span-5 pb-6 lg:pb-0 lg:pr-8 flex flex-col text-left">
                <h3 className="text-[17px] md:text-[19px] font-extrabold text-brand-green tracking-tight mb-4">
                  Built By An Industrial Professional
                </h3>
                
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-2.5">
                    <FiCheckCircle size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] font-bold text-brand-navy leading-snug">
                      Electrical Engineer, VJTI Mumbai (2003)
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <FiCheckCircle size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] font-bold text-brand-navy leading-snug">
                      20+ Years of Industrial & B2B Business Experience
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <FiCheckCircle size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] font-bold text-brand-navy leading-snug">
                      Founder, Uneefy Intratech Pvt. Ltd.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <FiCheckCircle size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] font-bold text-brand-navy leading-snug">
                      Served 300+ Industrial Customers
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <FiCheckCircle size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] font-bold text-brand-navy leading-snug">
                      Based in Navi Mumbai, Maharashtra
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Column: Shield Block */}
              <div className="lg:col-span-3 py-6 lg:py-0 lg:px-8 flex items-center justify-center">
                <div className="flex items-center gap-3.5 text-left">
                  <Image
                    src="/Trust.svg"
                    alt="Trust Shield"
                    width={108}
                    height={108}
                    className="flex-shrink-0"
                  />
                  <div className="flex flex-col text-[14.5px] font-extrabold text-brand-navy leading-tight">
                    <span>Real People.</span>
                    <span>Real Address.</span>
                    <Link href="/our-mission" className="underline decoration-brand-green/40 underline-offset-4 transition-colors hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40">
                      Real Mission.
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Office info */}
              <div className="lg:col-span-4 pt-6 lg:pt-0 lg:pl-8 flex flex-col text-left gap-3">
                <div className="flex items-start gap-2.5">
                  <FiMapPin className="text-brand-green mt-0.5 flex-shrink-0" size={17} />
                  <div className="flex flex-col leading-snug">
                    <span className="text-[13.5px] font-extrabold text-brand-navy">Our Office</span>
                    <span className="text-[12.5px] font-bold text-brand-navy mt-0.5">
                      Vashi, Navi Mumbai,<br />
                      Maharashtra - 400703, India
                    </span>
                  </div>
                </div>

                <p className="text-[11.5px] font-semibold text-slate-400 mt-1">
                  We are just a call or WhatsApp away.
                </p>

                <div className="flex flex-col gap-2 mt-0.5">
                  <a
                    href="tel:+919320012345"
                    className="inline-flex items-center gap-2.5 text-[13px] font-bold text-brand-navy hover:text-brand-green transition-colors"
                  >
                    <PhoneIcon size={15} className="text-brand-green flex-shrink-0" />
                    <span>+91 93200 12345</span>
                  </a>
                  
                  <a
                    href="https://wa.me/919320012345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[13px] font-bold text-brand-navy hover:text-brand-green transition-colors"
                  >
                    <FaWhatsapp size={15} className="text-brand-green flex-shrink-0" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>



      </main>
    </div>
  );
}
