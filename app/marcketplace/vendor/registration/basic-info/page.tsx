"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VendorRegistrationPage() {
  const router = useRouter();

  // function to next step
  const goToNextStep = () => {
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
              Already a vendor?
            </span>
            <Link
              href="#"
              className="text-sm font-black text-emerald-500 hover:text-emerald-600 transition-colors uppercase tracking-wider"
            >
              Log in
            </Link>
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
            {/* Active Progress Line (25% for Step 1) */}
            <div className="absolute top-1/2 left-0 w-[15%] h-0.5 bg-emerald-500 -translate-y-1/2 z-0 transition-all duration-500"></div>

            {/* Step 1: Basics (Active) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20">
                1
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Basics
              </span>
            </div>

            {/* Step 2: Story */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Story
              </span>
            </div>

            {/* Step 3: Impact */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
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
              <h1 className="text-3xl font-black mb-2 text-slate-900 dark:text-white tracking-tight">
                Vendor Basics
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium">
                Tell us the core details about your business to get started on
                the Good Market platform.
              </p>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      Company Name
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all placeholder:text-slate-400 dark:text-white"
                      placeholder="e.g. Green Threads Co."
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      Website / Portfolio
                    </label>
                    <input
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all placeholder:text-slate-400 dark:text-white"
                      placeholder="https://www.example.com"
                      type="url"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    Primary Category
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all appearance-none cursor-pointer text-slate-900 dark:text-white">
                      <option value="">Select a category</option>
                      <option value="fashion">Ethical Fashion</option>
                      <option value="home">Home & Living</option>
                      <option value="wellness">Natural Wellness</option>
                      <option value="food">Sustainable Food</option>
                      <option value="tech">Circular Tech</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 material-symbols-outlined">
                      expand_more
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-black pt-6 border-t border-slate-100 dark:border-white/5 text-slate-900 dark:text-white">
                    Business Registration
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Registration Number
                      </label>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all placeholder:text-slate-400 dark:text-white"
                        placeholder="Official ID"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Country of Registration
                      </label>
                      <div className="relative">
                        <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all appearance-none cursor-pointer text-slate-900 dark:text-white">
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="ca">Canada</option>
                          <option value="au">Australia</option>
                          <option value="de">Germany</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 material-symbols-outlined">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                   onClick={() => {
                      goToNextStep();
                    }}
                    className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-black text-sm hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                   
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
                Why Join Good Market?
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "groups",
                    title: "Large Ethical Community",
                    desc: "Connect with over 500,000 conscious consumers looking for sustainable brands.",
                  },
                  {
                    icon: "verified",
                    title: "Trust & Transparency",
                    desc: "Our verification badge signals your commitment to people and planet.",
                  },
                  {
                    icon: "recycling",
                    title: "Circular Economy Tools",
                    desc: "Access resources and B2B networks to improve your supply chain circularity.",
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

              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5">
                <p className="text-xs text-slate-500 italic leading-relaxed">
                  &quot;Good Market has helped us reach a community that truly
                  values our mission of zero-waste production.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                  <span className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Sarah J., Founder EarthFirst
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-900 dark:bg-slate-800 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-emerald-400">
                  help
                </span>
                <h4 className="font-bold text-sm">Need Help?</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Not sure about your registration details? Check our{" "}
                <Link
                  href="#"
                  className="text-emerald-400 underline decoration-emerald-400/30 hover:decoration-emerald-400 transition-all font-bold"
                >
                  Vendor Guide
                </Link>{" "}
                or contact our support team.
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
