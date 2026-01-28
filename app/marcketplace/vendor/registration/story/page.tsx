"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VendorStoryPage() {
  const router = useRouter();

  // function to next step
  const goToNextStep = () => {
    router.push("/marcketplace/vendor/registration/enviorment-impact");
  };
  //   function to go back
  const goToPreviousStep = () => {
    router.push("/marcketplace/vendor/registration/basic-info");
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
            {/* Active Progress Line (40% for Step 2) */}
            <div className="absolute top-1/2 left-0 w-[40%] h-0.5 bg-emerald-500 -translate-y-1/2 z-0 transition-all duration-500"></div>

            {/* Step 1: Basics (Completed) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-lg">check</span>
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Basics
              </span>
            </div>

            {/* Step 2: Story (Active) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20 ring-4 ring-emerald-500/10">
                2
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
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
                Your Brand Story
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium">
                Connect with the community by sharing the &quot;why&quot; behind
                your business and what makes it unique.
              </p>

              <div className="space-y-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    Your Mission & Story
                    <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium outline-none transition-all placeholder:text-slate-400 dark:text-white resize-none"
                    placeholder="Describe your brand's journey, your values, and the impact you hope to make..."
                    rows={6}
                  ></textarea>
                  <p className="text-[10px] font-bold text-slate-400">
                    Aim for 200-500 words for the best engagement.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Profile / Producer Photo
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl cursor-pointer bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50/50 dark:hover:bg-slate-800/50 hover:border-emerald-500/50 transition-colors group">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <div className="size-12 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 group-hover:text-emerald-500 group-hover:scale-110 transition-all">
                          <span className="material-symbols-outlined text-2xl">
                            add_a_photo
                          </span>
                        </div>
                        <p className="mb-2 text-sm text-slate-600 dark:text-slate-300 font-bold">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                          PNG, JPG or WEBP (MAX. 5MB)
                        </p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      Community Focus
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Select the values that best represent your brand&apos;s
                      commitment.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Local Sourcing",
                      "Woman Owned",
                      "Handmade",
                      "Zero Waste",
                      "Organic",
                      "Fair Trade",
                    ].map((tag) => (
                      <label
                        key={tag}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 cursor-pointer border border-transparent hover:border-emerald-500/30 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5 transition-all group"
                      >
                        <input
                          type="checkbox"
                          className="size-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 dark:bg-slate-800 dark:border-slate-600"
                        />
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {tag}
                        </span>
                      </label>
                    ))}
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
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                    Back
                  </button>
                  <button
                    onClick={() => {
                      goToNextStep();
                    }}
                    className="w-full md:flex-1 px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-black text-sm hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
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
                Writing Your Story
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "history_edu",
                    title: "Be Authentic",
                    desc: "Don't be afraid to share the challenges you've overcome. Honesty builds trust with ethical consumers.",
                  },
                  {
                    icon: "target",
                    title: "Focus on Mission",
                    desc: "Explain the specific problem you are solving and why your approach is better for the planet.",
                  },
                  {
                    icon: "visibility",
                    title: "Show, Don't Just Tell",
                    desc: "Upload photos of the real people and processes behind your products. Faces create connection.",
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
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                <div className="bg-emerald-50 dark:bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10">
                  <p className="text-xs font-black text-emerald-600 dark:text-emerald-400 mb-1 uppercase tracking-wider">
                    Pro Tip:
                  </p>
                  <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                    Vendors with a compelling mission statement see 3x higher
                    community engagement in their first month.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-900 dark:bg-slate-800 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-emerald-400">
                  auto_awesome
                </span>
                <h4 className="font-bold text-sm">Need Inspiration?</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Check out our{" "}
                <Link
                  href="#"
                  className="text-emerald-400 underline decoration-emerald-400/30 hover:decoration-emerald-400 transition-all font-bold"
                >
                  Best Brand Stories
                </Link>{" "}
                gallery to see how other successful vendors describe their
                mission.
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
