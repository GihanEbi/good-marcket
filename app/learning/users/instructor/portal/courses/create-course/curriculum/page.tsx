"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CurriculumBuilderPage() {
  const router = useRouter();
  const [sections, setSections] = useState([
    { id: 1, title: "Neural Architecture Basics" },
    { id: 2, title: "Kernel Configuration" },
  ]);

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* --- Architect Terminal Header --- */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl border-b border-[#e7f3eb] dark:border-[#1e3a27]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-6">
            {/* Title & Back Link */}
            <div className="flex items-center gap-5">
              <Link
                href="/learning/users/instructor/portal/courses/create-course/basic-info"
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
                    Pipeline Mapping
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-[#15291b] dark:text-white leading-tight uppercase tracking-tight">
                  Map <span className="text-[#13ec5b]">Curriculum</span>
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
                    "/learning/users/instructor/portal/courses/create-course/pricing",
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
              { label: "Schema", active: true, complete: true },
              { label: "Curriculum", active: true, complete: false },
              { label: "Pricing", active: false, complete: false },
              { label: "Validation", active: false, complete: false },
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
          {/* Form Column (Left) */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                  <span className="material-symbols-outlined font-black">
                    account_tree
                  </span>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  Module Segments
                </h3>
              </div>
              <button className="flex items-center justify-center gap-3 px-6 py-3 bg-[#15291b] dark:bg-[#13ec5b]/5 text-white dark:text-[#13ec5b] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition-all border border-[#13ec5b]/20">
                <span className="material-symbols-outlined text-base font-black">
                  auto_awesome
                </span>
                Synthesize with AI
              </button>
            </div>

            {/* Knowledge Map Builder */}
            <div className="space-y-8">
              {sections.map((section, idx) => (
                <div
                  key={section.id}
                  className="bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2.5rem] overflow-hidden shadow-sm group hover:border-[#13ec5b]/20 transition-all"
                >
                  {/* Section Header (HUD Style) */}
                  <div className="bg-[#f0f7f2] dark:bg-[#0a0f0b] px-6 py-5 flex items-center gap-4 border-b border-[#e7f3eb] dark:border-[#1e3a27]">
                    <span className="material-symbols-outlined text-[#5c7a67] cursor-grab hover:text-[#13ec5b]">
                      drag_indicator
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center flex-1 gap-2">
                      <span className="text-[10px] font-black text-[#13ec5b] uppercase tracking-[0.2em]">
                        Segment {String(idx + 1).padStart(2, "0")}:
                      </span>
                      <input
                        className="flex-1 bg-transparent border-none p-0 text-sm font-black uppercase tracking-tight focus:ring-0 text-[#15291b] dark:text-white"
                        defaultValue={section.title}
                      />
                    </div>
                    <button className="text-[#5c7a67] hover:text-rose-500 transition-colors">
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>

                  {/* Nodes (Lessons) List */}
                  <div className="p-6 space-y-4">
                    {/* Active Node Row */}
                    <div className="flex items-center gap-4 p-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl hover:border-[#13ec5b]/30 transition-all group/node">
                      <div className="size-10 rounded-xl bg-[#13ec5b]/10 text-[#13ec5b] flex items-center justify-center shrink-0 border border-[#13ec5b]/10">
                        <span className="material-symbols-outlined font-black">
                          play_circle
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <input
                          className="w-full bg-transparent border-none p-0 text-xs font-bold focus:ring-0 truncate text-[#15291b] dark:text-slate-300"
                          defaultValue="Introduction to Neural Flow"
                        />
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#f0f7f2] dark:bg-[#15291b] rounded-lg border border-[#e7f3eb] dark:border-[#1e3a27]">
                        <span className="material-symbols-outlined text-xs text-[#13ec5b]">
                          timer
                        </span>
                        <span className="text-[9px] font-black text-[#5c7a67]">
                          05:00
                        </span>
                      </div>
                      <button className="p-2 text-[#5c7a67] hover:text-[#13ec5b]">
                        <span className="material-symbols-outlined text-lg">
                          settings
                        </span>
                      </button>
                    </div>

                    {/* Payload Type Selector */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                      {[
                        {
                          icon: "videocam",
                          label: "STREAM",
                          hover: "hover:border-[#13ec5b] hover:text-[#13ec5b]",
                        },
                        {
                          icon: "terminal",
                          label: "DATA",
                          hover: "hover:border-[#13ec5b] hover:text-[#13ec5b]",
                        },
                        {
                          icon: "analytics",
                          label: "QUIZ",
                          hover: "hover:border-[#13ec5b] hover:text-[#13ec5b]",
                        },
                        {
                          icon: "hub",
                          label: "LAB",
                          hover: "hover:border-[#13ec5b] hover:text-[#13ec5b]",
                        },
                      ].map((type) => (
                        <button
                          key={type.label}
                          className={`flex items-center justify-center gap-3 py-3 border border-dashed border-[#e7f3eb] dark:border-[#1e3a27] rounded-xl text-[#5c7a67] transition-all text-[9px] font-black uppercase tracking-widest bg-white dark:bg-[#15291b] ${type.hover}`}
                        >
                          <span className="material-symbols-outlined text-sm font-black">
                            {type.icon}
                          </span>
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full py-12 border-2 border-dashed border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2.5rem] flex flex-col items-center justify-center text-[#5c7a67] hover:text-[#13ec5b] hover:border-[#13ec5b]/40 transition-all group bg-white dark:bg-transparent">
                <span className="material-symbols-outlined text-4xl mb-3 font-black group-hover:scale-110 transition-transform">
                  add_box
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Initialize Segment
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: System Preview */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-48 space-y-8">
              {/* Neural Simulation Preview */}
              <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden shadow-sm">
                <div className="p-6 border-b border-[#e7f3eb] dark:border-[#1e3a27] flex justify-between items-center bg-[#fcfdfc] dark:bg-[#0a0f0b]/30">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[#5c7a67]">
                    Neural Preview
                  </h4>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#13ec5b]/10 text-[#13ec5b] text-[8px] font-black uppercase rounded-full">
                    <span className="size-1 rounded-full bg-[#13ec5b] animate-ping"></span>
                    Live Sync
                  </div>
                </div>

                <div className="p-6 space-y-5 max-h-[450px] overflow-y-auto scrollbar-hide">
                  <div className="space-y-3">
                    <p className="text-[9px] font-black text-[#13ec5b] uppercase tracking-[0.2em]">
                      Node 01: Foundations
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27]">
                      <span className="material-symbols-outlined text-[#13ec5b] text-base font-black">
                        stream
                      </span>
                      <span className="text-[10px] font-bold text-[#15291b] dark:text-slate-300 truncate uppercase">
                        Intro to Neural Flow
                      </span>
                    </div>
                  </div>

                  <div className="h-24 border-2 border-dashed border-[#e7f3eb] dark:border-[#1e3a27] rounded-3xl flex items-center justify-center">
                    <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest opacity-50">
                      Staging Area...
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#f0f7f2] dark:bg-[#0a0f0b]/50 border-t border-[#e7f3eb] dark:border-[#1e3a27]">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest mb-6">
                    <span className="text-[#5c7a67]">Node Aggregation</span>
                    <span className="text-[#13ec5b]">01 Node • 5m</span>
                  </div>
                  <button className="w-full py-4 bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#13ec5b] dark:hover:bg-[#13ec5b] transition-all">
                    <span className="material-symbols-outlined text-lg">
                      visibility
                    </span>
                    Initialize Simulation
                  </button>
                </div>
              </div>

              {/* AI Optimization Tip */}
              <div className="bg-[#13ec5b]/5 rounded-[2rem] border border-[#13ec5b]/20 p-6 flex gap-5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-5xl font-black">
                    lightbulb
                  </span>
                </div>
                <span className="material-symbols-outlined text-[#13ec5b] fill-1">
                  auto_awesome
                </span>
                <p className="text-[11px] text-[#5c7a67] dark:text-[#a0c4ab] font-medium leading-relaxed relative z-10">
                  <span className="text-[#13ec5b] font-black">Neural Tip:</span>{" "}
                  Segments structured into{" "}
                  <span className="text-[#15291b] dark:text-white font-black">
                    5-10 minute
                  </span>{" "}
                  cycles maintain a synchronization rate 35% higher than
                  long-form modules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- HUD Footer (Mobile Only) --- */}
      <div className="flex md:hidden justify-between items-center p-6 bg-white dark:bg-[#0a0f0b] border-t border-[#e7f3eb] dark:border-[#1e3a27] sticky bottom-0 z-50">
        <button className="text-[10px] font-black uppercase tracking-widest text-[#5c7a67]">
          Abort
        </button>
        <button className="px-10 py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-[#13ec5b]/20">
          Sync & Next
        </button>
      </div>
    </div>
  );
}
