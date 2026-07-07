"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useOtpModal } from "@/providers/OtpModalProvider";
import { useAxios } from "@/providers/AxiosProvider";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaChevronRight,
  FaUsers,
  FaCoffee,
  FaHandshake,
  FaPaperPlane,
  FaCalendarAlt,
  FaLock,
  FaGlobe,
  FaCheckCircle,
  FaBuilding
} from "react-icons/fa";
import { FiMapPin, FiPlus, FiMinus, FiPhone, FiUser, FiMessageSquare, FiCalendar, FiCoffee } from "react-icons/fi";

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  mobile: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits" })
    .max(15, { message: "Mobile number must be at most 15 digits" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Only numbers and standard symbols are allowed" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactUs() {
  const api = useAxios();
  const { openOtpModal } = useOtpModal();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "How can we help you?",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || result.error || "Failed to send message");
      }

      setFormSubmitted(true);
      reset();
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col flex-grow bg-white text-slate-800 antialiased font-sans">
      <main className="flex-grow">

        {/* Section 1: Hero ("Let's Connect In Person!") with Desktop Split-Screen Blend */}
        <section className="relative w-full overflow-hidden bg-white border-b border-slate-100">

          {/* Desktop Right Side Full-Height Background Image (Contains chairs, mugs, text, and teacup sketch) */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[55%] bg-[url('/cozy_office.png')] bg-cover bg-right hidden lg:block"
          >
            {/* Left Edge Gradient Fade Mask (blends image into the white left panel) */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

              {/* Left Column: Heading, description and inline icons */}
              <div className="lg:col-span-6 flex flex-col justify-between py-4 gap-8">
                <div className="flex flex-col gap-6">
                  <h1 className="text-hero-title leading-[1.1] text-brand-navy">
                    Let’s Connect <br />
                    <span className="text-brand-green">In Person!</span>
                  </h1>

                  <p className="text-slate-600 font-medium text-sm md:text-[16px] leading-relaxed max-w-xl">
                    We would love to meet you, have a cup of tea ☕, and chat about how we can build a fairer marketplace together.
                  </p>
                </div>

                {/* Three Features Columns without cards/borders */}
                <div className="grid grid-cols-3 gap-6 mt-4">
                  {[
                    {
                      title: "Real Conversations",
                      desc: "Better Understanding",
                      icon: <FaUsers size={22} className="text-brand-green" />,
                    },
                    {
                      title: "A Cup of Tea",
                      desc: "Great Ideas",
                      icon: <FaCoffee size={22} className="text-brand-green" />,
                    },
                    {
                      title: "Stronger Relationships",
                      desc: "Lasting Impact",
                      icon: <FaHandshake size={22} className="text-brand-green" />,
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                      <div className="w-14 h-14 rounded-full bg-brand-light-green flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[13px] font-black text-brand-navy leading-snug">
                          {item.title}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Only shown on mobile/tablet as fallback card */}
              <div className="lg:col-span-6 flex lg:hidden justify-center min-h-[350px]">
                <div
                  className="relative w-full rounded-[32px] overflow-hidden shadow-lg bg-cover bg-right p-6 md:p-8"
                  style={{ backgroundImage: "url('/cozy_office.png')" }}
                >
                  <div className="h-[300px] md:h-[350px] w-full pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Our Office Location wrapped in one unified card */}
        <section className="bg-white border-b border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-6">

            {/* White card wrapper for the whole section */}
            <div className="bg-white border border-slate-200/60 rounded-[32px] p-8 md:p-12 shadow-lg w-full">

              {/* Heading */}
              <div className="flex flex-col self-start mb-8">
                <h2 className="text-h2 text-brand-green tracking-tight">
                  Our Office Location
                </h2>
                <div className="h-[2.5px] w-12 bg-brand-green mt-1.5" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                {/* Left Column: Address Details */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-brand-light-green text-brand-green shadow-sm">
                        <FiMapPin size={22} />
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-lg font-black text-brand-navy">OpenMarket</span>
                        <p className="text-[15px] font-semibold text-slate-500 leading-relaxed mt-2">
                          S-33/46, 2nd Floor<br />
                          Fantasia Business Park Premises Co-op Soc Ltd.<br />
                          Sector 30A, Vashi<br />
                          Navi Mumbai – 400703<br />
                          Maharashtra, India
                        </p>
                        <a
                          href="https://maps.google.com/?q=Fantasia+Business+Park+Vashi+Navi+Mumbai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center justify-center gap-2 py-3.5 px-6 border-2 border-brand-green hover:bg-brand-light-green text-brand-green rounded-[4px] font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-green/30 w-full md:w-auto self-start"
                        >
                          <FiMapPin size={16} />
                          <span>View on Google Maps</span>
                        </a>
                      </div>
                    </div>
                  </div>


                </div>

                {/* Right Column: Map with interactive pin and details tooltip */}
                <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm min-h-[380px] bg-slate-100">

                  <iframe
                    src="https://maps.google.com/maps?q=Fantasia%20Business%20Park%20Vashi%20Navi%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[380px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                  {/* Google Maps Pin Tooltip Overlay matching the screenshot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[135px] z-10 flex flex-col items-center select-none pointer-events-none">
                    {/* Tooltip Popup */}
                    <div className="bg-white border border-slate-200/80 shadow-2xl rounded-xl p-3.5 max-w-[240px] text-left relative">
                      <span className="text-xs font-black text-brand-navy block">OpenMarket</span>
                      <p className="text-[9.5px] font-bold text-slate-500 leading-normal mt-1">
                        S-33/46, 2nd Floor, Fantasia Business Park Premises Co-op Soc Ltd., Sector 30A, Vashi, Navi Mumbai - 400703
                      </p>
                      {/* Triangle Pointer */}
                      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-slate-200/80 rotate-45" />
                    </div>

                    {/* Red Map Pin Icon */}
                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg border-2 border-white mt-3.5 animate-bounce">
                      <FiMapPin size={16} className="fill-white" />
                    </div>
                  </div>

                  {/* Floating Map Zoom buttons */}
                  <div className="absolute right-4 bottom-4 flex flex-col gap-1 bg-white shadow-md rounded-lg p-1 border border-slate-200/60 z-10">
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100 text-slate-600 transition-colors focus:outline-none">
                      <FiPlus size={16} />
                    </button>
                    <div className="h-[1px] bg-slate-200 mx-1" />
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100 text-slate-600 transition-colors focus:outline-none">
                      <FiMinus size={16} />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Connect With Us & Send Us a Message */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Column: Direct Links Connect wrapped in rounded card */}
              <div className="lg:col-span-5 bg-white rounded-[32px] p-8 md:p-10 shadow-lg flex flex-col justify-between">
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex flex-col self-start">
                    <h2 className="text-h2 text-brand-green tracking-tight">
                      Connect With Us
                    </h2>
                    <div className="h-[2.5px] w-12 bg-brand-green mt-1.5" />
                  </div>
                </div>

                <div className="flex flex-col gap-4 flex-grow justify-center">
                  {[
                    {
                      title: "WhatsApp",
                      desc: "Chat with us instantly",
                      href: "https://wa.me/918108359977",
                      icon: <FaWhatsapp size={20} />,
                      bgColor: "bg-white border border-slate-200 hover:bg-slate-50 shadow-sm",
                      iconBg: "bg-[#0FA958]"
                    },
                    {
                      title: "LinkedIn",
                      desc: "Connect with us on LinkedIn",
                      href: "https://www.linkedin.com/in/kiranpailwan/",
                      icon: <FaLinkedin size={20} />,
                      bgColor: "bg-white border border-slate-200 hover:bg-slate-50 shadow-sm",
                      iconBg: "bg-[#0077B5]"
                    },
                    {
                      title: "Email",
                      desc: "info@openmarketco.in",
                      href: "mailto:info@openmarketco.in",
                      icon: <FaEnvelope size={18} />,
                      bgColor: "bg-white border border-slate-200 hover:bg-slate-50 shadow-sm",
                      iconBg: "bg-[#0FA958]"
                    },
                    {
                      title: "Call Us",
                      desc: "+91 81083 59977",
                      href: "tel:+918108359977",
                      icon: <FiPhone size={18} />,
                      bgColor: "bg-white border border-slate-200 hover:bg-slate-50 shadow-sm",
                      iconBg: "bg-[#0FA958]"
                    },
                    {
                      title: "Website",
                      desc: "www.openmarketco.in",
                      href: "https://www.openmarketco.in",
                      icon: <FaGlobe size={18} />,
                      bgColor: "bg-white border border-slate-200 hover:bg-slate-50 shadow-sm",
                      iconBg: "bg-[#0FA958]"
                    },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center justify-between p-4 ${item.bgColor} rounded-2xl transition-all group focus:outline-none`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-105`}>
                          {item.icon}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[15px] font-black text-brand-navy">{item.title}</span>
                          <span className="text-xs font-semibold text-slate-500 mt-0.5">{item.desc}</span>
                        </div>
                      </div>
                      <FaChevronRight size={12} className="text-slate-400 group-hover:text-brand-green group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Message Form wrapped in rounded card */}
              <div className="lg:col-span-7 bg-white rounded-[32px] p-8 md:p-10 shadow-lg relative flex flex-col justify-between">
                <div>
                  <div className="flex flex-col gap-3 mb-8">
                    <div className="flex flex-col self-start">
                      <h3 className="text-h3 text-brand-green">
                        Send Us a Message
                      </h3>
                      <div className="h-[2.5px] w-12 bg-brand-green mt-1.5" />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center text-center py-12 px-6"
                      >
                        <div className="w-16 h-16 rounded-full bg-brand-light-green text-brand-green flex items-center justify-center mb-6 shadow-sm">
                          <FaCheckCircle size={36} />
                        </div>
                        <h4 className="text-2xl font-black text-brand-navy mb-3">Message Sent!</h4>
                        <p className="text-slate-500 font-semibold leading-relaxed max-w-md">
                          Thank you for reaching out. We have received your message and our team will get back to you shortly.
                        </p>
                        <button
                          onClick={() => setFormSubmitted(false)}
                          className="mt-8 px-6 py-2.5 bg-brand-green hover:bg-brand-dark-green text-white font-bold rounded-xl shadow-sm text-sm transition-colors focus:outline-none"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-5"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* Name */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-brand-navy pl-1">
                              Your Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                                <FiUser size={18} />
                              </span>
                              <input
                                type="text"
                                placeholder="Enter your full name"
                                {...register("name")}
                                className={`w-full py-3.5 pl-11 pr-4 rounded-xl border ${errors.name ? "border-red-500 ring-2 ring-red-100" : "border-slate-200"
                                  } focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-sm font-semibold transition-all`}
                              />
                            </div>
                            {errors.name && <span className="text-xs text-red-500 font-bold px-1">{errors.name.message}</span>}
                          </div>

                          {/* Company */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-brand-navy pl-1">
                              Company / Business Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                                <FaBuilding size={16} />
                              </span>
                              <input
                                type="text"
                                placeholder="Enter your company name"
                                {...register("company")}
                                className={`w-full py-3.5 pl-11 pr-4 rounded-xl border ${errors.company ? "border-red-500 ring-2 ring-red-100" : "border-slate-200"
                                  } focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-sm font-semibold transition-all`}
                              />
                            </div>
                            {errors.company && <span className="text-xs text-red-500 font-bold px-1">{errors.company.message}</span>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {/* Mobile */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-brand-navy pl-1">
                              Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                                <FiPhone size={18} />
                              </span>
                              <input
                                type="tel"
                                placeholder="Enter your mobile number"
                                {...register("mobile")}
                                className={`w-full py-3.5 pl-11 pr-4 rounded-xl border ${errors.mobile ? "border-red-500 ring-2 ring-red-100" : "border-slate-200"
                                  } focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-sm font-semibold transition-all`}
                              />
                            </div>
                            {errors.mobile && <span className="text-xs text-red-500 font-bold px-1">{errors.mobile.message}</span>}
                          </div>

                          {/* Email */}
                          <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-brand-navy pl-1">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                                <FaEnvelope size={16} />
                              </span>
                              <input
                                type="email"
                                placeholder="Enter your email address"
                                {...register("email")}
                                className={`w-full py-3.5 pl-11 pr-4 rounded-xl border ${errors.email ? "border-red-500 ring-2 ring-red-100" : "border-slate-200"
                                  } focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-sm font-semibold transition-all`}
                              />
                            </div>
                            {errors.email && <span className="text-xs text-red-500 font-bold px-1">{errors.email.message}</span>}
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-bold text-brand-navy pl-1">
                            Subject
                          </label>
                          <select
                            {...register("subject")}
                            className="w-full py-3.5 px-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-sm font-semibold text-slate-700 transition-all cursor-pointer"
                          >
                            <option>How can we help you?</option>
                            <option>Become a Founding Seller</option>
                            <option>Buyer Support & Security</option>
                            <option>Partnership & Integration</option>
                            <option>Feedback & General Inquiry</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-bold text-brand-navy pl-1">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-3.5 text-slate-400">
                              <FiMessageSquare size={18} />
                            </span>
                            <textarea
                              rows={4}
                              placeholder="Write your message here..."
                              {...register("message")}
                              className={`w-full py-3.5 pl-11 pr-4 rounded-xl border ${errors.message ? "border-red-500 ring-2 ring-red-100" : "border-slate-200"
                                } focus:outline-none focus:ring-2 focus:ring-brand-green/30 text-sm font-semibold transition-all resize-none`}
                            />
                          </div>
                          {errors.message && <span className="text-xs text-red-500 font-bold px-1">{errors.message.message}</span>}
                        </div>

                        {/* Submit Button */}
                        {submitError && (
                          <div className="text-sm text-red-600 font-bold px-4 py-3 bg-red-50 rounded-xl border border-red-200 text-center">
                            {submitError}
                          </div>
                        )}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="mt-2 w-full py-4 bg-[#097B3E] hover:bg-brand-dark-green disabled:bg-slate-300 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-md text-base tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/30"
                        >
                          <FaPaperPlane size={15} />
                          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                        </button>

                        {/* Security Notice */}
                        <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 mt-2">
                          <FaLock size={10} className="text-brand-green" />
                          <span>We respect your privacy. Your information is secure and will never be shared.</span>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: We'd Love to Meet You! & Founder info */}
        <section className="bg-white border-b border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

              {/* Meet us card */}
              <div className="flex flex-col justify-between p-8 md:p-10 bg-white border border-slate-200/60 rounded-[32px] shadow-sm">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col self-start">
                    <h3 className="text-h3 text-brand-green tracking-tight">
                      We'd Love to Meet You!
                    </h3>
                    <div className="h-[2.5px] w-12 bg-brand-green mt-1.5" />
                  </div>

                  <div className="text-[15px] font-semibold text-slate-500 leading-relaxed flex flex-col gap-4">
                    <p>
                      Whether you're a manufacturer, trader, contractor, service provider, or buyer - come over for a tea ☕, share your thoughts, and be a part of building India's fairest B2B marketplace.
                    </p>
                    <p className="text-brand-navy font-black text-base">
                      Walk in. Let's talk. Let's build together.
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => openOtpModal()}
                    className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-dark-green text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all focus:outline-none w-full md:w-auto justify-center cursor-pointer"
                  >
                    <FiCalendar size={16} />
                    <span>Schedule a Visit</span>
                  </button>
                </div>
              </div>

              {/* Office Entrance Image Column */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-[32px] border border-slate-200/60 shadow-sm">
                <Image
                  src="/office_entrance.png"
                  alt="Office Entrance"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover rounded-[15px]"
                />
              </div>

              {/* Founder Profile quote */}
              <div className="flex flex-col p-8 md:p-10 bg-white border border-slate-200/60 rounded-[32px] shadow-sm">
                <div className="flex flex-col self-start mb-6">
                  <h3 className="text-2xl font-black text-brand-green tracking-tight">
                    Founder
                  </h3>
                  <div className="h-[2.5px] w-12 bg-brand-green mt-1.5" />
                </div>

                <div className="flex items-start gap-5">
                  {/* Left: Avatar */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-slate-100 flex-shrink-0 bg-slate-50 shadow-inner">
                    <Image
                      src="/founder2.png"
                      alt="Kiran Pailwan"
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Right: Info + Quote */}
                  <div className="flex flex-col gap-1 flex-grow">
                    <span className="text-lg font-black text-brand-navy leading-tight">Kiran Pailwan</span>
                    <span className="text-[13px] font-bold text-brand-green">Founder, OpenMarket</span>

                    <div className="mt-2 text-left leading-relaxed text-[14px] font-bold text-slate-600">
                      <span className="text-brand-green font-serif font-black text-xl mr-1 select-none">“</span>
                      <span className="italic font-medium">
                        OpenMarket was created to make business visibility fair, transparent, and earned through activity and trust.
                      </span>
                      <span className="text-brand-green font-serif font-black text-xl ml-1 select-none">”</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Bottom Strip ("A Cup of Tea Can Start a Great Partnership") */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6">

            <div className="bg-[#F8FAF9] border border-slate-200/60 rounded-[32px] p-6 md:py-8 md:px-10 shadow-sm w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

              {/* Left: Illustration */}
              <div className="relative w-full max-w-[240px] aspect-[1012/837] flex-shrink-0">
                <Image
                  src="/images/teamm.png"
                  alt="Team chat drinking tea"
                  fill
                  sizes="240px"
                  className="object-contain"
                />
              </div>

              {/* Middle Content Wrapper (Title + Divider + Checklist) */}
              <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 flex-grow justify-center lg:justify-start">

                {/* Title + Cup */}
                <div className="flex items-center gap-4">
                  <h3 className="text-xl md:text-2xl font-black text-brand-green leading-snug text-left">
                    A Cup of Tea Can Start <br />
                    a Great Partnership
                  </h3>
                  <FiCoffee size={35} className="text-brand-green flex-shrink-0" />
                </div>

                {/* Divider */}
                <div className="hidden md:block w-[1.5px] h-12 bg-slate-200" />

                {/* Checklist */}
                <div className="flex flex-col gap-2.5 font-bold text-slate-500 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-green font-black">✓</span>
                    <span>Share your ideas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-green font-black">✓</span>
                    <span>Explore opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-green font-black">✓</span>
                    <span>Build meaningful connections</span>
                  </div>
                </div>

              </div>

              {/* Right: Signature */}
              <div className="relative w-[130px] h-[95px] flex-shrink-0">
                <Image
                  src="/see_you_soon.png"
                  alt="See you soon!"
                  fill
                  sizes="130px"
                  className="object-contain"
                />
              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
