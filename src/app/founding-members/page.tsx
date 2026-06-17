"use client";

import React from "react";
import Image from "next/image";
import { useOtpModal } from "@/providers/OtpModalProvider";
import {
  FaArrowRight,
  FaAward,
  FaCheckCircle,
  FaCrown,
  FaMobileAlt,
  FaRocket,
  FaStar,
  FaUsers,
  FaLightbulb,
  FaWhatsapp,
} from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const earlyBenefits = [
  {
    title: "Founding Member Recognition",
    desc: "Get a permanent Founding Member badge on your business profile.",
    icon: <FaAward />,
    tone: "green",
  },
  {
    title: "Early Access",
    desc: "Get access to new features before public launch.",
    icon: <FaRocket />,
    tone: "blue",
  },
  {
    title: "Shape The Platform",
    desc: "Your feedback will influence future features and roadmap.",
    icon: <FaLightbulb />,
    tone: "greenLine",
  },
  {
    title: "Direct Founder Access",
    desc: "Connect directly with the founder and team.",
    icon: <FaUsers />,
    tone: "blue",
  },
  {
    title: "Exclusive WhatsApp Group Invitation",
    desc: "Receive an invitation to the Founding Members WhatsApp Group.",
    icon: <FaWhatsapp />,
    tone: "greenLine",
  },
  {
    title: "Lifetime Benefits",
    desc: "Enjoy special plan benefits and privileges reserved for Founding Members.",
    icon: <FaCrown />,
    tone: "green",
  },
];

function PhoneUserIcon() {
  return (
    <svg viewBox="0 0 72 72" className="h-[62px] w-[62px]" aria-hidden="true">
      <rect x="22" y="8" width="28" height="52" rx="5" fill="white" stroke="#0B3C5F" strokeWidth="2.4" />
      <rect x="29" y="13" width="14" height="2.5" rx="1.25" fill="#E5EAF0" />
      <circle cx="36" cy="31" r="5" fill="#0B3C5F" />
      <path d="M27.5 48c1.4-6 5.2-9 8.5-9s7.1 3 8.5 9" fill="#0B3C5F" />
    </svg>
  );
}

function PhoneCheckIcon() {
  return (
    <svg viewBox="0 0 72 72" className="h-[62px] w-[62px]" aria-hidden="true">
      <rect x="22" y="8" width="28" height="52" rx="5" fill="white" stroke="#0B3C5F" strokeWidth="2.4" />
      <rect x="29" y="13" width="14" height="2.5" rx="1.25" fill="#E5EAF0" />
      <circle cx="36" cy="35" r="11" fill="white" stroke="#0FA958" strokeWidth="2.5" />
      <path d="M30.5 35.2l4 4.2 7.5-9" fill="none" stroke="#0FA958" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InviteSellerIcon() {
  return (
    <svg viewBox="0 0 72 72" className="h-[62px] w-[62px]" aria-hidden="true">
      <circle cx="36" cy="19" r="6.2" fill="#0FA958" />
      <path d="M25.5 31c2-6.4 6.4-9.2 10.5-9.2S44.5 24.6 46.5 31" fill="#0FA958" />
      <rect x="17" y="32" width="38" height="25" rx="1" fill="#0B3C5F" />
      <path d="M17 32l19 15 19-15v25H17z" fill="#12629B" />
      <path d="M17 57l16-13.4 3 2.5 3-2.5L55 57z" fill="#08396B" />
      <path d="M27 32h18v7H27z" fill="white" opacity=".96" />
    </svg>
  );
}

function MemberBadgeIcon() {
  return (
    <svg viewBox="0 0 72 72" className="h-[64px] w-[64px]" aria-hidden="true">
      <path d="M27.5 46.5l-4 13.5 12.5-7 12.5 7-4-13.5z" fill="#0FA958" />
      <path d="M36 8.5l5 4 6.3-.9 2.6 5.8 5.8 2.6-.9 6.3 4 5-4 5 .9 6.3-5.8 2.6-2.6 5.8-6.3-.9-5 4-5-4-6.3.9-2.6-5.8-5.8-2.6.9-6.3-4-5 4-5-.9-6.3 5.8-2.6 2.6-5.8 6.3.9z" fill="#0FA958" />
      <path d="M36 15.5l4 3.1 5-.7 2 4.6 4.6 2-.7 5 3.1 4-3.1 4 .7 5-4.6 2-2 4.6-5-.7-4 3.1-4-3.1-5 .7-2-4.6-4.6-2 .7-5-3.1-4 3.1-4-.7-5 4.6-2 2-4.6 5 .7z" fill="none" stroke="white" strokeWidth="2.6" />
      <path d="M36 23l3.2 6.4 7.1 1-5.2 5 1.2 7-6.3-3.3-6.3 3.3 1.2-7-5.2-5 7.1-1z" fill="white" />
    </svg>
  );
}

function FutureFlagIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-[100px] w-[100px]"
      aria-hidden="true"
    >
      {/* Decorative dots */}
      <circle cx="28" cy="33" r="1.6" fill="#198754" />
      <circle cx="72" cy="33" r="1.6" fill="#198754" />

      {/* Mountain - Larger */}
      <path
        d="
          M15 74
          Q28 60 36 48
          Q44 58 52 40
          Q60 54 68 42
          Q76 54 85 74
          Z
        "
        fill="#198754"
      />

      {/* Flag Pole */}
      <rect
        x="57"
        y="18"
        width="2.5"
        height="24"
        fill="#198754"
      />

      {/* Flag */}
      <path
        d="
          M59 18
          L76 22
          L69 29
          L76 36
          L59 33
          Z
        "
        fill="#198754"
      />

      {/* Left Person */}
      <g fill="#198754">
        <circle cx="32" cy="58" r="2.2" />
        <path d="M31 60 L28 70 L31 70 L32 64 L34 77 L37 77 L36 64 L40 70 L43 70 L35 60 Z" />
      </g>

      {/* Center Left Person */}
      <g fill="#198754">
        <circle cx="45" cy="50" r="2.2" />
        <path d="M44 52 L41 62 L44 62 L45 56 L47 69 L50 69 L49 56 L53 62 L56 62 L48 52 Z" />
      </g>

      {/* Summit Person */}
      <g fill="#198754">
        <circle cx="57" cy="34" r="2.4" />
        <path d="M56 36 L53 49 L56 49 L57 42 L59 58 L62 58 L61 42 L65 49 L68 49 L60 36 Z" />
      </g>

      {/* Right Person */}
      <g fill="#198754">
        <circle cx="73" cy="57" r="2.2" />
        <path d="M72 59 L69 69 L72 69 L73 63 L75 76 L78 76 L77 63 L81 69 L84 69 L76 59 Z" />
      </g>
    </svg>
  );
}

const journey = [
  {
    title: "Register Today",
    desc: "Join with your mobile number.",
    icon: <PhoneUserIcon />,
  },
  {
    title: "Create FREE Profile",
    desc: "Get the app link and showcase your business.",
    icon: <PhoneCheckIcon />,
  },
  {
    title: "Invite Fellow Sellers",
    desc: "Grow the movement by inviting others.",
    icon: <InviteSellerIcon />,
  },
  {
    title: "Become a Founding Member",
    desc: "Earn your Founding Member badge, WhatsApp group invitation, early access and lifetime benefits.",
    icon: <MemberBadgeIcon />,
  },
  {
    title: "Build the Future Together",
    desc: "Help create India's most trusted B2B marketplace.",
    icon: <FutureFlagIcon />,
  },
];

const todayBenefits = [
  "Free Registration",
  "Business Profile Creation",
  "Product & Service Listings",
  "Founding Member Status",
];

const futureBenefits = [
  "Priority Access to New Features",
  "Community Recognition",
  "Founder Networking Opportunities",
  "Exclusive Founding Members WhatsApp Group",
  "Early Marketplace Benefits",
  "Lifetime Benefits on Plans",
];

const gettingStarted = [
  {
    title: "Register with your mobile number",
    icon: <FaMobileAlt />,
  },
  {
    title: "Get the app link and create your FREE profile",
    icon: <FiLink />,
  },
  {
    title: "Invite others and be part of the change",
    icon: <FaUsers />,
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-5 my-8 md:my-10">
      <div className="h-px w-16 bg-brand-green/50" />
      <h2 className="text-xl md:text-2xl font-black text-brand-navy text-center">
        {children}
      </h2>
      <div className="h-px w-16 bg-brand-green/50" />
    </div>
  );
}

function BenefitIcon({ children, tone }: { children: React.ReactNode; tone: string }) {
  const isBlue = tone === "blue";
  const isLine = tone === "greenLine";
  return (
    <div
      className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl flex-shrink-0 ${isBlue ? "bg-blue-50 text-brand-navy" : "bg-emerald-50 text-brand-green"
        }`}
    >
      <span className={isLine ? "text-[44px]" : ""}>{children}</span>
    </div>
  );
}

function FoundingShield() {
  return (
    <div className="relative mx-auto -mt-6 w-full max-w-[650px] lg:-mx-8">
      <Image
        src="/founding-members-hero-illustration.png"
        alt="Founding Members badge with four business people"
        width={1254}
        height={978}
        priority
        className="mx-auto h-auto w-full object-contain"
      />
    </div>
  );
}

export default function FoundingMembersPage() {
  const { openOtpModal } = useOtpModal();
  const joined = 387;
  const goal = 1000;
  const remaining = goal - joined;
  const progress = `${(joined / goal) * 100}%`;

  return (
    <main className="flex-grow bg-white text-brand-navy">
      <section className="mx-auto max-w-7xl px-6 pt-10 md:pt-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <span className="text-sm font-black uppercase tracking-wide text-brand-green">
              Founding Members
            </span>
            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-[54px]">
              Become One of the First{" "}
              <span className="text-brand-green">1,000</span> Businesses
            </h1>
            <h2 className="max-w-lg text-xl font-black leading-snug md:text-2xl">
              Help Build India&apos;s Most Trusted B2B Marketplace
            </h2>
            <p className="max-w-lg text-lg font-semibold leading-relaxed text-brand-navy/90">
              The first businesses joining OpenMarket will not just be users. They will be the founding community that helps shape the future of the platform.
            </p>
            <button
              onClick={() => openOtpModal()}
              suppressHydrationWarning
              className="mt-2 inline-flex items-center gap-4 rounded-xl bg-brand-green px-8 py-4 text-lg font-bold text-white shadow-md transition-colors hover:bg-brand-dark-green"
            >
              Join as a Founding Member
              <FaArrowRight />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <FoundingShield />
            <p className="mt-4 text-center text-xl font-black md:text-2xl">
              Be Early. Be Part of the <span className="text-brand-green">Change.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <SectionHeading>Why Join Early?</SectionHeading>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {earlyBenefits.map((benefit) => (
            <div key={benefit.title} className="flex min-h-[180px] gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <BenefitIcon tone={benefit.tone}>{benefit.icon}</BenefitIcon>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-black leading-snug text-brand-green">
                  {benefit.title}
                </h3>
                <p className="text-sm font-semibold leading-relaxed text-brand-navy">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="mt-9 mb-5 flex items-center justify-center gap-7">
          <div className="h-px w-20 bg-brand-green/50" />
          <h2 className="text-center text-[26px] font-black leading-none text-brand-navy">
            Founding Members Journey
          </h2>
          <div className="h-px w-20 bg-brand-green/50" />
        </div>
        <div className="mx-auto grid max-w-[1110px] grid-cols-1 gap-8 md:grid-cols-5 md:gap-0">
          {journey.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative flex w-full justify-center">
                <div className="relative flex h-[124px] w-[124px] items-center justify-center rounded-full border border-[#e2e8ee] bg-[#fbfcfd] text-brand-green shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
                  <div className="absolute -left-2 top-0 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-green text-[16px] font-black text-white shadow-sm">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
              </div>
              {index < journey.length - 1 && (
                <FaArrowRight className="absolute right-[-13px] top-[45px] hidden text-[31px] text-brand-green md:block" />
              )}
              <h3 className="mt-4 min-h-[42px] max-w-[170px] text-[16px] font-black leading-[1.15] text-brand-green">
                {step.title}
              </h3>
              <p className="mt-1 max-w-[158px] text-[15px] font-bold leading-[1.45] text-brand-navy">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center gap-5 rounded-xl border border-slate-200 bg-emerald-50/40 px-8 py-5 shadow-sm">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-brand-green text-3xl text-white">
            <FaStar />
          </div>
          <p className="text-xl font-semibold leading-relaxed text-brand-green">
            Founding Members receive an invitation to the exclusive{" "}
            <span className="font-black">OpenMarket WhatsApp Group</span> for networking, updates and collaboration.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 pb-8 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black text-brand-navy">Founding Member Benefits</h3>
          <h4 className="mt-5 text-sm font-black text-brand-green">Today</h4>
          <ul className="mt-2 space-y-2">
            {todayBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm font-semibold">
                <FaCheckCircle className="text-brand-green" />
                {benefit}
              </li>
            ))}
          </ul>
          <h4 className="mt-5 text-sm font-black text-brand-green">Future Benefits</h4>
          <ul className="mt-2 space-y-2">
            {futureBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm font-semibold">
                <FaCheckCircle className="mt-0.5 flex-shrink-0 text-brand-green" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h3 className="text-xl font-black text-brand-navy">Founding Members Goal</h3>
          <div className="mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-full bg-brand-green text-5xl text-white">
            <FaUsers />
          </div>
          <div className="mt-6 flex items-end justify-center gap-3">
            <span className="text-5xl font-black text-brand-green">{joined}</span>
            <span className="pb-2 text-3xl font-black text-brand-navy">/ {goal}</span>
          </div>
          <p className="mt-2 text-sm font-semibold">Businesses Joined</p>
          <div className="mx-auto mt-8 h-4 w-full max-w-[260px] rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-brand-green" style={{ width: progress }} />
          </div>
          <p className="mt-5 text-sm font-black text-brand-green">{remaining} spots remaining</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-black text-brand-navy">Get Started Today</h3>
          <div className="mt-4 divide-y divide-dashed divide-slate-200">
            {gettingStarted.map((item) => (
              <div key={item.title} className="flex items-center gap-5 py-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-brand-green/50 text-3xl text-brand-green">
                  {item.icon}
                </div>
                <p className="text-base font-semibold leading-snug text-brand-navy">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand-navy px-8 py-7 text-white shadow-lg md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-white text-5xl text-brand-green">
              <FaUsers />
            </div>
            <div>
              <h2 className="text-3xl font-black">Join The Movement.</h2>
              <p className="mt-2 max-w-xl text-base font-semibold leading-relaxed text-white/90">
                Help build a marketplace where visibility is earned through activity and engagement, not advertising budgets.
              </p>
            </div>
          </div>
          <button
            onClick={() => openOtpModal()}
            suppressHydrationWarning
            className="inline-flex min-w-[310px] items-center justify-center gap-4 rounded-xl bg-brand-green px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-dark-green"
          >
            Become a Founding Member
            <FaArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
}
