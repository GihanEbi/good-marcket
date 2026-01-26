"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CourseCreationPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* --- Architect Terminal Header --- */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl border-b border-[#e7f3eb] dark:border-[#1e3a27]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-6">
            {/* Title & Back Link */}
            <div className="flex items-center gap-5">
              <Link
                href="/users/instructor/portal/courses"
                className="size-10 flex items-center justify-center rounded-xl bg-[#f0f7f2] dark:bg-[#15291b] text-[#5c7a67] hover:text-[#13ec5b] border border-[#e7f3eb] dark:border-[#1e3a27] transition-all"
              >
                <span className="material-symbols-outlined font-black">
                  arrow_back
                </span>
              </Link>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="size-1.5 rounded-full bg-[#13ec5b] animate-pulse"></div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                    Module Initialization
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-[#15291b] dark:text-white leading-tight uppercase tracking-tight">
                  Construct New <span className="text-[#13ec5b]">Node</span>
                </h2>
              </div>
            </div>

            {/* Action Hub */}
            <div className="flex items-center gap-3">
              <button className="flex-1 md:flex-none px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#5c7a67] dark:text-[#a0c4ab] rounded-2xl hover:bg-[#f0f7f2] dark:hover:bg-[#15291b] transition-all">
                Stage Draft
              </button>
              <button
                className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                onClick={() => {
                  router.push(
                    "/learning/users/instructor/portal/courses/create-course/curriculum",
                  );
                }}
              >
                Sync & Next
                <span className="material-symbols-outlined text-base font-black">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Technical Stepper */}
          <div className="flex items-center justify-between pb-6 max-w-2xl mx-auto">
            {[
              { label: "Schema", active: true },
              { label: "Curriculum", active: false },
              { label: "Pricing", active: false },
              { label: "Validation", active: false },
            ].map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className={`h-1 w-full rounded-full transition-all duration-700 ${
                      step.active
                        ? "bg-[#13ec5b] shadow-[0_0_8px_#13ec5b]"
                        : "bg-[#e7f3eb] dark:bg-[#1e3a27]"
                    }`}
                  ></div>
                  <span
                    className={`text-[9px] font-black uppercase tracking-[0.2em] ${
                      step.active ? "text-[#13ec5b]" : "text-[#5c7a67]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {idx < 3 && (
                  <div className="w-4 sm:w-8 h-px bg-transparent"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      {/* --- Main Construction Area --- */}
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-12 gap-10">
          {/* Left Column: Documentation Input */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            {/* 1. Basic Metadata */}
            <section className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="size-12 rounded-2xl bg-[#13ec5b]/10 dark:bg-[#13ec5b]/5 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                  <span className="material-symbols-outlined font-black">
                    terminal
                  </span>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  Module Metadata
                </h3>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                    Node Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none transition-all text-sm font-bold"
                    placeholder="e.g. Applied Neural Architectures"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                    Protocol Brief (Subtitle)
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none transition-all text-sm font-bold"
                    placeholder="Brief architectural summary of knowledge transfer"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                      Domain Category
                    </label>
                    <select className="w-full px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-xs font-black uppercase tracking-widest cursor-pointer appearance-none transition-all">
                      <option>Engineering</option>
                      <option>Logic Systems</option>
                      <option>Data Synthesis</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                      Complexity Level
                    </label>
                    <select className="w-full px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-xs font-black uppercase tracking-widest cursor-pointer appearance-none transition-all">
                      <option>Novice</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Logic Description */}
            <section className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                  <span className="material-symbols-outlined font-black">
                    subject
                  </span>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  Module Protocol
                </h3>
              </div>

              <div className="border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] overflow-hidden focus-within:border-[#13ec5b]/40 transition-all bg-[#fcfdfc] dark:bg-[#0a0f0b]">
                <div className="bg-white dark:bg-[#15291b] p-3 border-b border-[#e7f3eb] dark:border-[#1e3a27] flex flex-wrap gap-2">
                  {[
                    "format_bold",
                    "terminal",
                    "format_list_bulleted",
                    "link",
                    "undo",
                    "redo",
                  ].map((icon) => (
                    <button
                      key={icon}
                      className="p-2 hover:text-[#13ec5b] text-[#5c7a67] transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">
                        {icon}
                      </span>
                    </button>
                  ))}
                </div>
                <textarea
                  rows={8}
                  className="w-full px-6 py-6 bg-transparent border-none focus:ring-0 text-xs font-bold leading-relaxed outline-none text-[#15291b] dark:text-slate-300 resize-none"
                  placeholder="Define the primary learning outcomes and technical methodologies..."
                ></textarea>
              </div>
            </section>

            {/* 3. Visualization Assets */}
            <section className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                  <span className="material-symbols-outlined font-black">
                    palette
                  </span>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  Interface Visualization
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5c7a67]">
                    Module Thumbnail
                  </p>
                  <div className="aspect-video w-full border-2 border-dashed border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] flex flex-col items-center justify-center bg-[#fcfdfc] dark:bg-[#0a0f0b] hover:border-[#13ec5b]/40 transition-all cursor-pointer group">
                    <span className="material-symbols-outlined text-4xl text-[#5c7a67] group-hover:text-[#13ec5b] group-hover:scale-110 mb-3 transition-all font-black">
                      cloud_upload
                    </span>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#15291b] dark:text-white">
                      Transmit Payload
                    </p>
                    <p className="text-[8px] font-black text-[#5c7a67] mt-1 uppercase tracking-widest opacity-60">
                      1280x720 (PNG, JPG)
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#5c7a67]">
                      Protocol Video URL
                    </p>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5c7a67] text-lg group-focus-within:text-[#13ec5b] transition-colors">
                        link
                      </span>
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-xs font-bold transition-all"
                        placeholder="Youtube or Vimeo link"
                      />
                    </div>
                  </div>
                  <div className="p-6 bg-[#13ec5b]/5 rounded-3xl border border-[#13ec5b]/10 flex gap-4">
                    <span className="material-symbols-outlined text-[#13ec5b] fill-1">
                      auto_awesome
                    </span>
                    <p className="text-[10px] text-[#5c7a67] dark:text-[#a0c4ab] font-bold uppercase leading-relaxed tracking-tight">
                      Architect Tip: Modules with high-fidelity visualization
                      assets see{" "}
                      <span className="text-[#13ec5b]">
                        80% higher synchronization
                      </span>{" "}
                      across the network.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Neural Sync & Protocol */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-44 space-y-8">
              {/* Neural Optimizer Card */}
              <div className="bg-[#15291b] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden border border-[#1e3a27] group">
                <div className="absolute -right-10 -top-10 size-40 bg-[#13ec5b] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>

                <div className="flex items-center gap-3 mb-8">
                  <div className="size-10 rounded-xl bg-[#13ec5b] flex items-center justify-center text-[#15291b] shadow-lg shadow-[#13ec5b]/20">
                    <span className="material-symbols-outlined font-black">
                      auto_awesome
                    </span>
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#13ec5b]">
                    Neural Optimization
                  </h4>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                        Schema Sync Score
                      </p>
                      <span className="text-xs font-black text-[#13ec5b]">
                        42%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-[#0a0f0b] rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-[#13ec5b] w-[42%] transition-all duration-1000 shadow-[0_0_10px_#13ec5b]"></div>
                    </div>
                  </div>

                  <div className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                    <p className="text-[11px] text-[#a0c4ab] leading-relaxed font-medium italic">
                      &quot;Inject keywords such as{" "}
                      <span className="text-white font-black underline decoration-[#13ec5b]">
                        Infrastructure
                      </span>{" "}
                      or{" "}
                      <span className="text-white font-black underline decoration-[#13ec5b]">
                        Scalability
                      </span>{" "}
                      into your schema to increase network reach.&quot;
                    </p>
                  </div>
                </div>

                <button className="w-full mt-10 py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#13ec5b]/10 hover:scale-[1.02]">
                  Calibrate Metadata
                </button>
              </div>

              {/* Protocol Standards Card */}
              <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 shadow-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-8">
                  Architect Standards
                </h4>
                <ul className="space-y-6">
                  {[
                    "Title must identify primary knowledge outcome",
                    "Brief should be constrained to 120 characters",
                    "Domain categorization must match curriculum",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#13ec5b] text-lg font-black">
                        check_circle
                      </span>
                      <p className="text-[11px] font-bold text-[#5c7a67] dark:text-[#a0c4ab] leading-tight uppercase tracking-tight">
                        {tip}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-[#e7f3eb] dark:bg-[#1e3a27] my-8" />
                <Link
                  href="#"
                  className="flex items-center justify-center gap-3 text-[10px] font-black text-[#13ec5b] uppercase tracking-widest hover:underline decoration-2"
                >
                  Quality Protocol Docs
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
