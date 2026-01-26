"use client";

import React from "react";

export function PlayerSidebar() {
  return (
    <aside className="w-80 flex-shrink-0 border-r border-[#e7f3eb] dark:border-[#1e3a27] bg-[#fcfdfc] dark:bg-[#15291b] flex flex-col h-full overflow-hidden transition-colors duration-300">
      {/* --- Course Registry Header --- */}
      <div className="p-6 border-b border-[#e7f3eb] dark:border-[#1e3a27] flex-shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <div className="size-1.5 rounded-full bg-[#13ec5b] animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
            Active Sync Path
          </span>
        </div>
        <h1 className="text-[#15291b] dark:text-white text-base font-black tracking-tight mb-4 truncate">
          Deep Learning <span className="text-[#13ec5b]">Foundations</span>
        </h1>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[#5c7a67] dark:text-[#a0c4ab] text-[10px] font-black uppercase tracking-widest">
              DNA Coverage
            </p>
            <span className="text-[10px] font-black text-[#13ec5b] tracking-tighter">
              08 / 12 NODES
            </span>
          </div>
          <div className="w-full bg-[#f0f7f2] dark:bg-[#0a0f0b] h-1.5 rounded-full overflow-hidden border border-[#e7f3eb] dark:border-[#1e3a27]">
            <div className="bg-[#13ec5b] h-full w-[65%] shadow-[0_0_8px_#13ec5b]"></div>
          </div>
        </div>
      </div>

      {/* --- Neural Module Pipeline --- */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-3 space-y-1">
        {/* Module 01 */}
        <div className="px-4 py-4 text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
          Phase 01: Initialization
        </div>

        {/* Completed Lesson */}
        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-[#5c7a67] hover:bg-[#f0f7f2] dark:hover:bg-[#0a0f0b] cursor-pointer group transition-all">
          <span className="material-symbols-outlined text-[#13ec5b] text-lg font-black">
            check_circle
          </span>
          <p className="text-xs font-bold tracking-tight group-hover:text-[#15291b] dark:group-hover:text-white transition-colors">
            01. What is Deep Learning?
          </p>
        </div>

        {/* Module 02 */}
        <div className="px-4 py-4 text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mt-4">
          Phase 02: Core Logic
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-[#5c7a67] hover:bg-[#f0f7f2] dark:hover:bg-[#0a0f0b] cursor-pointer group transition-all">
          <span className="material-symbols-outlined text-[#13ec5b] text-lg font-black">
            check_circle
          </span>
          <p className="text-xs font-bold tracking-tight group-hover:text-[#15291b] dark:group-hover:text-white transition-colors">
            02. Linear Regression Recap
          </p>
        </div>

        {/* Active Node (Current Lesson) */}
        <div className="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-[#13ec5b]/10 border border-[#13ec5b]/20 text-[#13ec5b] cursor-pointer shadow-[inset_0_0_12px_rgba(19,236,91,0.05)] relative group">
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#13ec5b] rounded-r-full"></div>
          <span className="material-symbols-outlined text-lg font-black fill-1">
            play_circle
          </span>
          <p className="text-xs font-black tracking-tight">
            03. Neural Architectures
          </p>
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-[#15291b] dark:text-[#a0c4ab] hover:bg-[#f0f7f2] dark:hover:bg-[#0a0f0b] cursor-pointer group transition-all">
          <span className="material-symbols-outlined text-lg font-bold opacity-60">
            analytics
          </span>
          <p className="text-xs font-bold tracking-tight">
            04. Quiz: Layer Foundations
          </p>
        </div>

        {/* Module 03 (Locked) */}
        <div className="px-4 py-4 text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mt-4 opacity-50">
          Phase 03: Optimization
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-[#5c7a67] opacity-40 cursor-not-allowed grayscale">
          <span className="material-symbols-outlined text-lg">lock</span>
          <p className="text-xs font-bold tracking-tight line-clamp-1">
            05. Backpropagation Theory
          </p>
        </div>

        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-[#5c7a67] opacity-40 cursor-not-allowed grayscale">
          <span className="material-symbols-outlined text-lg">lock</span>
          <p className="text-xs font-bold tracking-tight line-clamp-1">
            06. Stochastic Gradient Descent
          </p>
        </div>
      </div>

      {/* --- Footer Controls --- */}
      <div className="p-4 border-t border-[#e7f3eb] dark:border-[#1e3a27] bg-[#fcfdfc] dark:bg-[#15291b] flex-shrink-0">
        <button className="w-full flex items-center justify-center gap-3 py-3 rounded-[1.25rem] bg-white dark:bg-[#0a0f0b] text-[#15291b] dark:text-white text-[10px] font-black uppercase tracking-[0.2em] border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b] transition-all group">
          <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-500">
            expand_circle_down
          </span>
          Expand Index
        </button>
      </div>
    </aside>
  );
}
