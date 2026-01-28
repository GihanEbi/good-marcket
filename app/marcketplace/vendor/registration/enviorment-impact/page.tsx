"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VendorImpactPage() {
  const router = useRouter();

  // function to next step
  const goToNextStep = () => {
    router.push("/marcketplace/vendor/registration/verification");
  };
  //   function to go back
  const goToPreviousStep = () => {
    router.push("/marcketplace/vendor/registration/story");
  };
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
              Step 3 of 4
            </span>
            <div className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined">person</span>
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
            {/* Active Progress Line (75% for Step 3) */}
            <div className="absolute top-1/2 left-0 w-[65%] h-0.5 bg-emerald-500 -translate-y-1/2 z-0 transition-all duration-500"></div>

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

            {/* Step 3: Impact (Active) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20 ring-4 ring-emerald-500/10">
                3
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Impact
              </span>
            </div>

            {/* Step 4: Verification */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center font-bold">
                4
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Verify
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form Section */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  Environmental Impact
                </h1>
                {/* Impact Gauge */}
                <div className="hidden md:flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/5">
                  <div className="relative size-16">
                    <svg
                      className="size-full transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <circle
                        className="text-slate-200 dark:text-slate-700 stroke-current"
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        strokeWidth="3"
                      ></circle>
                      <circle
                        className="text-emerald-500 stroke-current"
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        strokeWidth="3"
                        strokeDasharray="75, 100"
                        strokeLinecap="round"
                      ></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-black text-emerald-500">
                        75%
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider mt-2 text-slate-500">
                    Impact Score
                  </span>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium max-w-xl">
                We measure circularity and sustainability through your material
                choices and waste management processes.
              </p>

              <div className="space-y-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    Primary Materials Used
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all appearance-none cursor-pointer text-slate-900 dark:text-white">
                      <option value="">Select primary material source</option>
                      <option value="recycled">
                        100% Recycled Post-Consumer
                      </option>
                      <option value="upcycled">
                        Upcycled / Deadstock Fabric
                      </option>
                      <option value="organic">Organic Natural Fibers</option>
                      <option value="biodegradable">
                        Certified Biodegradable
                      </option>
                      <option value="renewable">
                        Regenerative / Renewable
                      </option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 material-symbols-outlined">
                      expand_more
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 mt-1">
                    Select the material that makes up at least 60% of your
                    product line.
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Waste Management Practices
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Zero Waste Manufacturing",
                      "Compostable Packaging",
                      "Take-back Program",
                      "Chemical-Free Processing",
                    ].map((practice, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 cursor-pointer border border-transparent hover:border-emerald-500/30 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5 transition-all group"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={idx < 2}
                          className="size-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 dark:bg-slate-800 dark:border-slate-600"
                        />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {practice}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Certifications & Standards
                  </label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-white/10 rounded-2xl p-8 text-center bg-slate-50 dark:bg-slate-900 hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-all cursor-pointer group">
                    <span className="material-symbols-outlined text-4xl text-slate-400 mb-2 group-hover:text-emerald-500 transition-colors">
                      cloud_upload
                    </span>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">
                      Upload Certifications
                    </p>
                    <p className="text-xs text-slate-400 font-medium mb-4">
                      PDF, JPG or PNG (Organic, Fair Trade, B-Corp, etc.)
                    </p>
                    <button
                      type="button"
                      className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold hover:text-emerald-500 transition-colors"
                    >
                      Browse Files
                    </button>
                  </div>

                  {/* Uploaded File Chip */}
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-lg text-[10px] font-black border border-emerald-500/20 uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">
                        verified
                      </span>
                      FairTrade_Cert_2024.pdf
                      <button className="hover:text-rose-500 transition-colors ml-1">
                        <span className="material-symbols-outlined text-sm">
                          close
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      goToPreviousStep();
                    }}
                    className="w-full md:w-auto px-8 py-4 border-2 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded-xl font-black text-sm hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    Previous Step
                  </button>
                  <button
                    onClick={() => {
                      goToNextStep();
                    }}
                    className="w-full md:flex-1 px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-black text-sm hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                  >
                    Save & Continue
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900/40 rounded-[2rem] border border-slate-200 dark:border-white/5 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-lg font-black mb-6 text-slate-900 dark:text-white">
                Circular Transparency
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "visibility",
                    title: "Full Disclosure",
                    desc: "Customers on Good Market value knowing where their products come from and how they're made.",
                  },
                  {
                    icon: "eco",
                    title: "Better Exposure",
                    desc: "Vendors with verified impact data receive 3x more profile visits and search prominence.",
                  },
                  {
                    icon: "hub",
                    title: "Resource Loop",
                    desc: "Sharing your waste streams helps us connect you with upcycling partners in our network.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="size-10 shrink-0 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-sm">
                      info
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Did you know?
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic font-medium">
                    &quot;82% of Good Market users filter their searches by
                    specific impact certifications like GOTS or B-Corp.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-900 dark:bg-slate-800 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-emerald-400">
                  verified_user
                </span>
                <h4 className="font-bold text-sm">Impact Verification</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our team reviews all impact claims and certifications to
                maintain the integrity of our circular economy ecosystem.
                Transparency builds trust.
              </p>
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
            <h2 className="text-sm font-bold">Good Market</h2>
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
