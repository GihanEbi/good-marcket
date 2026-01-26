"use client";

import React, { useState } from "react";
import { PlayerHeader } from "@/components/lesson/player/PlayerHeader";
import { PlayerSidebar } from "@/components/lesson/player/PlayerSidebar";
import { PlayerRightPanel } from "@/components/lesson/player/PlayerRightPanel";

type MobileTab = "lesson" | "course" | "ai";

export default function CoursePlayerPage() {
  const [mobileTab, setMobileTab] = useState<MobileTab>("lesson");

  return (
    <div className="flex flex-col h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans overflow-hidden text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* 1. Technical Header */}
      <PlayerHeader />

      {/* 2. Mobile Tab Navigation (HUD Style) */}
      <div className="lg:hidden flex items-center border-b border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#15291b] shrink-0">
        {[
          { id: "lesson", label: "Module" },
          { id: "course", label: "Index" },
          { id: "ai", label: "Neural Link" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setMobileTab(tab.id as MobileTab)}
            className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
              mobileTab === tab.id
                ? "text-[#13ec5b]"
                : "text-[#5c7a67] dark:text-[#a0c4ab]"
            }`}
          >
            {tab.label}
            {mobileTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full shadow-[0_0_10px_#13ec5b]"></div>
            )}
          </button>
        ))}
      </div>

      {/* 3. Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* --- LEFT SIDEBAR (Registry) --- */}
        <div
          className={`
            bg-white dark:bg-[#15291b] border-r border-[#e7f3eb] dark:border-[#1e3a27]
            transition-all duration-300
            ${mobileTab === "course" ? "flex w-full absolute inset-0 z-20" : "hidden lg:block lg:w-80 lg:relative"}
          `}
        >
          <div className="w-full h-full">
            <PlayerSidebar />
          </div>
        </div>

        {/* --- CENTER CONTENT (Stream & Documentation) --- */}
        <section
          className={`
            flex-1 flex-col bg-[#fcfdfc] dark:bg-[#0a0f0b] overflow-y-auto scrollbar-hide relative
            ${mobileTab === "lesson" ? "flex" : "hidden lg:flex"}
          `}
        >
          {/* Neural Stream Player */}
          <div className="p-6 md:p-10">
            <div className="relative group bg-[#0a0f0b] aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#e7f3eb] dark:border-[#1e3a27]">
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1280&auto=format&fit=crop")',
                }}
              >
                <button className="size-20 md:size-24 rounded-3xl bg-[#13ec5b] text-[#15291b] flex items-center justify-center shadow-2xl shadow-[#13ec5b]/40 transform group-hover:scale-110 transition-all active:scale-95">
                  <span className="material-symbols-outlined text-4xl font-black fill-1">
                    play_arrow
                  </span>
                </button>
              </div>

              {/* HUD Controls Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0a0f0b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex h-1.5 w-full items-center mb-6 cursor-pointer bg-white/20 rounded-full">
                  <div className="h-full bg-[#13ec5b] w-1/3 rounded-full relative shadow-[0_0_10px_#13ec5b]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 size-4 bg-white rounded-full shadow-xl"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[#13ec5b]">
                  <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined cursor-pointer font-black">
                      pause
                    </span>
                    <span className="material-symbols-outlined cursor-pointer font-black">
                      skip_next
                    </span>
                    <span className="material-symbols-outlined cursor-pointer font-black">
                      volume_up
                    </span>
                    <span className="text-[10px] font-mono font-black tracking-widest bg-[#0a0f0b] px-3 py-1 rounded-lg border border-[#1e3a27]">
                      08:42 / 24:15
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-black px-3 py-1 border border-[#13ec5b]/30 rounded-lg hidden sm:block uppercase tracking-widest bg-[#0a0f0b]">
                      1.25x Speed
                    </span>
                    <span className="material-symbols-outlined cursor-pointer font-black">
                      fullscreen
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module Documentation */}
          <div className="px-6 md:px-10 pb-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-1.5 rounded-full bg-[#13ec5b] animate-pulse shadow-[0_0_8px_#13ec5b]"></div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                    Transmission 03
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-[#15291b] dark:text-white leading-tight">
                  Neural Network{" "}
                  <span className="text-[#13ec5b]">Architectures</span>
                </h2>
                <div className="flex items-center gap-4 mt-3">
                  <div className="size-8 rounded-xl bg-[#15291b] border border-[#13ec5b]/20 overflow-hidden">
                    <img
                      src="https://ui-avatars.com/api/?name=Sarah+Chen&background=15291b&color=13ec5b&bold=true"
                      alt="Instructor"
                    />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5c7a67] dark:text-[#a0c4ab]">
                    Lead Architect:{" "}
                    <span className="text-[#15291b] dark:text-white">
                      Dr. Sarah Chen
                    </span>{" "}
                    • Dec 2023
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-[#15291b] text-[10px] font-black uppercase tracking-widest border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b] transition-all">
                  <span className="material-symbols-outlined text-lg">
                    database
                  </span>{" "}
                  Assets
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-[#15291b] text-[10px] font-black uppercase tracking-widest border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b] transition-all">
                  <span className="material-symbols-outlined text-lg">
                    share
                  </span>
                </button>
              </div>
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="border-b border-[#e7f3eb] dark:border-[#1e3a27] flex gap-10 mb-10 overflow-x-auto scrollbar-hide">
              {["Overview", "Transcript", "Sync Discussion", "Metadata"].map(
                (tab, i) => (
                  <button
                    key={tab}
                    className={`pb-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                      i === 0
                        ? "text-[#13ec5b]"
                        : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
                    }`}
                  >
                    {tab}
                    {i === 0 && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full shadow-[0_0_10px_#13ec5b]"></div>
                    )}
                  </button>
                ),
              )}
            </div>

            {/* Protocol Content */}
            <div className="prose dark:prose-invert max-w-none space-y-6">
              <p className="text-[#5c7a67] dark:text-[#a0c4ab] font-medium leading-relaxed text-lg">
                Examine the algorithmic foundations of multi-layer
                architectures. This unit analyzes the transition from simple
                perceptrons to deep neural frameworks, establishing the
                mathematical protocols for layer interaction.
              </p>

              <div className="bg-[#f0f7f2] dark:bg-[#15291b] p-8 rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] mt-8">
                <h4 className="text-[#15291b] dark:text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#13ec5b] text-lg">
                    terminal
                  </span>{" "}
                  Protocol Requirements:
                </h4>
                <ul className="space-y-4 m-0 p-0 list-none">
                  {[
                    "Knowledge of Weight Matrices & Biases",
                    "Implementation of ReLU & Sigmoid Nodes",
                    "Forward Propagation Performance Tuning",
                  ].map((req) => (
                    <li
                      key={req}
                      className="flex items-center gap-4 text-sm font-bold text-[#5c7a67] dark:text-slate-300"
                    >
                      <span className="size-1.5 rounded-full bg-[#13ec5b]"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- RIGHT PANEL (AI & Protocol) --- */}
        <div
          className={`
            bg-white dark:bg-[#15291b] border-l border-[#e7f3eb] dark:border-[#1e3a27]
            transition-all duration-300
            ${mobileTab === "ai" ? "flex w-full absolute inset-0 z-20" : "hidden xl:block xl:w-[400px] xl:relative"}
          `}
        >
          <div className="w-full h-full">
            <PlayerRightPanel />
          </div>
        </div>
      </div>

      {/* 4. Global Navigation Controller (Fixed Bottom) */}
      <footer className="h-20 bg-white/90 dark:bg-[#0a0f0b]/90 backdrop-blur-xl border-t border-[#e7f3eb] dark:border-[#1e3a27] fixed bottom-0 left-0 right-0 z-50 flex items-center px-6 md:px-10 justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#5c7a67] dark:text-[#a0c4ab] hover:bg-[#f0f7f2] dark:hover:bg-[#15291b] transition-all">
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>{" "}
            Previous
          </button>
          <div className="h-10 w-px bg-[#e7f3eb] dark:border-[#1e3a27]"></div>
          <button className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-[#13ec5b] text-[#15291b] text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-105 active:scale-95 transition-all">
            Next Module{" "}
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Central Sync Progress Indicator */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-24">
          <div className="w-full max-w-lg space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                DNA Coverage: 08/12
              </span>
              <span className="text-[9px] font-black text-[#13ec5b] uppercase tracking-widest">
                Active Link
              </span>
            </div>
            <div className="h-1.5 w-full bg-[#f0f7f2] dark:bg-[#15291b] rounded-full overflow-hidden border border-[#e7f3eb] dark:border-[#1e3a27]">
              <div className="bg-[#13ec5b] h-full w-[66%] rounded-full shadow-[0_0_10px_#13ec5b]"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-3 text-[#5c7a67] hover:text-[#13ec5b] transition-all hidden sm:block">
            <span className="material-symbols-outlined font-black">
              playlist_add
            </span>
          </button>
          <button className="size-12 flex items-center justify-center text-[#15291b] bg-[#13ec5b] rounded-2xl shadow-lg shadow-[#13ec5b]/20">
            <span className="material-symbols-outlined font-black fill-1">
              bookmark
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
}
