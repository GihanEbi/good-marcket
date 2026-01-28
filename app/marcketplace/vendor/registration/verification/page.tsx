"use client";

import React from "react";
import Link from "next/link";

export default function VendorVerificationPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5">
        <div className="px-6 lg:px-20 flex items-center justify-between py-4">
          <div className="flex items-center gap-8 flex-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="size-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <svg
                  className="size-6 text-white"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                Good Market
              </h2>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-500 hidden sm:block">
              Registration in progress
            </span>
            <div className="px-3 py-1 bg-slate-100 dark:bg-white/10 rounded-lg text-xs font-black text-slate-500 dark:text-slate-300 uppercase tracking-wider">
              Step 4 of 4
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 lg:px-20 py-12 w-full flex-grow">
        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto relative">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-white/10 -translate-y-1/2 z-0"></div>
            {/* Active Progress Line (100% for Step 4) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500 -translate-y-1/2 z-0 transition-all duration-500"></div>

            {/* Step 1: Basics (Completed) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Basics
              </span>
            </div>

            {/* Step 2: Story (Completed) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Story
              </span>
            </div>

            {/* Step 3: Impact (Completed) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Impact
              </span>
            </div>

            {/* Step 4: Verification (Active) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20 ring-4 ring-emerald-500/10">
                4
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Verify
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form Section */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h1 className="text-3xl font-black mb-2 text-slate-900 dark:text-white tracking-tight">
                Identity Verification
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">
                Please provide the necessary documents to verify your business
                and identity.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    ID Verification
                  </label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5 transition-all cursor-pointer group">
                    <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-emerald-500 mb-2 transition-colors">
                      fingerprint
                    </span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 text-center">
                      Passport or ID Card
                    </span>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wide">
                      PDF, JPG or PNG (Max 5MB)
                    </p>
                    <button className="mt-4 px-4 py-2 bg-white dark:bg-slate-800 text-[10px] font-black rounded-xl border border-slate-200 dark:border-white/10 shadow-sm uppercase tracking-wider hover:text-emerald-500 transition-colors">
                      Upload File
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Proof of Business Address
                  </label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50 hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5 transition-all cursor-pointer group">
                    <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-emerald-500 mb-2 transition-colors">
                      home_pin
                    </span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 text-center">
                      Utility bill or Bank statement
                    </span>
                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wide">
                      Issued within last 3 months
                    </p>
                    <button className="mt-4 px-4 py-2 bg-white dark:bg-slate-800 text-[10px] font-black rounded-xl border border-slate-200 dark:border-white/10 shadow-sm uppercase tracking-wider hover:text-emerald-500 transition-colors">
                      Upload File
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Info Card */}
            <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-xl shadow-slate-200/30 dark:shadow-none">
              <div className="bg-slate-50 dark:bg-white/5 px-8 py-5 border-b border-slate-200 dark:border-white/5 flex justify-between items-center">
                <h3 className="font-black text-lg text-slate-900 dark:text-white">
                  Review Your Information
                </h3>
                <button className="text-[10px] font-black uppercase tracking-wider text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>{" "}
                  Edit Profile
                </button>
              </div>
              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                    Basic Info
                  </h4>
                  <div className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">
                      Green Threads Co.
                    </p>
                    <p>Ethical Fashion</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                    Your Story
                  </h4>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <p className="italic font-medium leading-relaxed line-clamp-3">
                      &quot;We believe in creating high-quality garments using
                      100% recycled materials and fair-trade labor...&quot;
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                    Impact Metrics
                  </h4>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        Circular Sourcing
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500"></span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        Fair Wages Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white dark:bg-slate-900/40 p-6 rounded-[2rem] border border-slate-200 dark:border-white/5">
                <input
                  id="conduct"
                  type="checkbox"
                  className="mt-1 size-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 dark:bg-slate-800 dark:border-slate-600"
                />
                <label
                  htmlFor="conduct"
                  className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
                >
                  I have read and agree to the{" "}
                  <a
                    href="#"
                    className="text-emerald-500 font-bold hover:underline decoration-emerald-500/30"
                  >
                    Good Market Code of Conduct
                  </a>
                  . I certify that all information provided is accurate and
                  represents our commitment to ethical and sustainable
                  practices.
                </label>
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-black text-sm hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  Submit for Review
                  <span className="material-symbols-outlined text-lg">
                    send
                  </span>
                </button>
                <button
                  type="button"
                  className="px-8 py-4 text-slate-400 font-bold hover:text-slate-600 dark:hover:text-slate-200 transition-colors uppercase tracking-wider text-xs"
                >
                  Save Draft
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900/40 rounded-[2rem] border border-slate-200 dark:border-white/5 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-lg font-black mb-8 text-slate-900 dark:text-white">
                What Happens Next?
              </h3>
              <div className="relative space-y-8">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-2 w-[2px] h-[calc(100%-40px)] bg-slate-100 dark:bg-white/5"></div>

                {[
                  {
                    icon: "assignment_turned_in",
                    title: "Submission Received",
                    desc: "Our curators receive your application and begin the initial screening.",
                    active: true,
                  },
                  {
                    icon: "policy",
                    title: "Review Process (3-5 days)",
                    desc: "We verify your business registration and impact claims against our standards.",
                    active: false,
                  },
                  {
                    icon: "handshake",
                    title: "Onboarding Call",
                    desc: "A short 15-minute intro to the community tools and circular economy resources.",
                    active: false,
                  },
                  {
                    icon: "rocket_launch",
                    title: "Shop Goes Live",
                    desc: "Your profile is published to the network and you can start accepting orders.",
                    active: false,
                  },
                ].map((step, i) => (
                  <div key={i} className="relative flex gap-4">
                    <div
                      className={`size-10 shrink-0 rounded-full flex items-center justify-center z-10 border-4 border-white dark:border-[#020617] 
                      ${
                        step.active
                          ? "bg-emerald-500/20 text-emerald-500"
                          : "bg-slate-100 dark:bg-white/5 text-slate-400"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {step.icon}
                      </span>
                    </div>
                    <div>
                      <h4
                        className={`font-bold text-sm ${step.active ? "text-slate-900 dark:text-white" : "text-slate-400"}`}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-900 dark:bg-slate-800 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-emerald-400">
                  security
                </span>
                <h4 className="font-bold text-sm">Data Privacy</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-medium">
                Your verification documents are stored in an encrypted vault and
                are only accessible by our compliance team. They will never be
                shared publicly.
              </p>
              <Link
                href="#"
                className="text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:underline flex items-center gap-1 transition-all group"
              >
                Read Privacy Policy
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 px-6 lg:px-20 py-10 mt-auto">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white">
            <div className="size-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-md">
              <svg
                className="size-5 text-white"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-sm font-black uppercase tracking-wider">
              Good Market
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            © 2024 Good Market. Built for a better world.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <Link href="#" className="hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-emerald-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-emerald-500 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
