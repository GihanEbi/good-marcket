"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function AssignmentsPage() {
  const router = useRouter();

  return (
    <div className="flex h-full bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* --- Left Filter Sidebar --- */}
      <aside className="w-72 border-r border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#0a0f0b] p-8 overflow-y-auto hidden lg:block shrink-0 h-[calc(100vh-80px)] sticky top-0">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-black text-xs uppercase tracking-[0.2em] text-[#5c7a67]">
            Filter Engine
          </h3>
          <button className="text-[10px] text-[#13ec5b] font-black uppercase tracking-widest hover:underline">
            Reset
          </button>
        </div>

        <div className="space-y-10">
          {/* Course Filter */}
          <div className="space-y-4">
            <p className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
              Knowledge Domain
            </p>
            <div className="space-y-3">
              {[
                "Neural Networks",
                "Ethics in AI",
                "Data Structures",
                "Global Systems",
              ].map((course, i) => (
                <label
                  key={course}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative flex items-center">
                    <input
                      defaultChecked={i < 2}
                      className="peer size-4 appearance-none rounded border-2 border-[#e7f3eb] dark:border-[#1e3a27] checked:bg-[#13ec5b] checked:border-[#13ec5b] transition-all cursor-pointer"
                      type="checkbox"
                    />
                    <span className="material-symbols-outlined absolute text-[#15291b] text-xs font-black opacity-0 peer-checked:opacity-100 pointer-events-none">
                      check
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#5c7a67] dark:text-[#a0c4ab] group-hover:text-[#13ec5b] transition-colors">
                    {course}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Due Date Filter */}
          <div className="space-y-4">
            <p className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
              Temporal Range
            </p>
            <select className="w-full bg-[#fcfdfc] dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-xl text-xs font-bold px-4 py-3 outline-none focus:border-[#13ec5b] transition-all">
              <option>Full Timeline</option>
              <option>Critical (72h)</option>
              <option>Next 7 Days</option>
              <option>Archive</option>
            </select>
          </div>

          {/* Points Range Filter */}
          <div className="space-y-5">
            <p className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
              Credit Weight
            </p>
            <input
              className="w-full h-1.5 bg-[#e7f3eb] dark:bg-[#1e3a27] rounded-lg appearance-none cursor-pointer accent-[#13ec5b]"
              type="range"
            />
            <div className="flex justify-between text-[10px] text-[#5c7a67] font-black uppercase tracking-tighter">
              <span>0 XP</span>
              <span>250 XP</span>
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="space-y-4">
            <p className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
              Complexity
            </p>
            <div className="flex flex-wrap gap-2">
              {["Easy", "Medium", "Hard"].map((lvl) => (
                <button
                  key={lvl}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                    lvl === "Medium"
                      ? "bg-[#13ec5b] border-[#13ec5b] text-[#15291b]"
                      : "bg-transparent border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] hover:border-[#13ec5b]"
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* --- Main List Area --- */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="size-2 rounded-full bg-[#13ec5b] animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                Inbound Tasks
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-none">
              Active <span className="text-[#13ec5b]">Assignments</span>
            </h2>
            <p className="text-[#5c7a67] dark:text-[#a0c4ab] mt-3 font-medium">
              You have{" "}
              <span className="text-[#15291b] dark:text-white font-black underline decoration-[#13ec5b]">
                4 pending
              </span>{" "}
              modules requiring analysis.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:border-[#13ec5b] transition-all">
            <span className="material-symbols-outlined text-sm font-black">
              sync
            </span>
            Synchronize
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#e7f3eb] dark:border-[#1e3a27] gap-10 mb-10 overflow-x-auto scrollbar-hide">
          {["All Tasks", "Pending", "Submitted", "Graded"].map((tab, i) => (
            <button
              key={tab}
              className={`pb-5 px-1 font-black text-[10px] uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                i === 0
                  ? "text-[#13ec5b]"
                  : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
              }`}
            >
              {tab}
              {i === 1 && <span className="ml-2 text-[#13ec5b]">/ 04</span>}
              {i === 0 && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Assignment List */}
        <div className="space-y-6">
          {/* Assignment Card 1 (Normal) */}
          <div className="group bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center gap-8 relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#13ec5b]/5 hover:border-[#13ec5b]/30">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-400"></div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black text-[#13ec5b] uppercase tracking-widest">
                  Philosophy DNA
                </span>
                <span className="size-1 rounded-full bg-[#5c7a67] opacity-30"></span>
                <span className="text-[9px] font-black text-[#5c7a67] uppercase tracking-tighter bg-[#f0f7f2] dark:bg-[#0a0f0b] px-2 py-0.5 rounded-full">
                  Medium Complexity
                </span>
              </div>
              <h3 className="text-xl font-black text-[#15291b] dark:text-white group-hover:text-[#13ec5b] transition-colors">
                Introduction to AI Ethics & Agency
              </h3>
              <div className="flex flex-wrap items-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-black text-[10px] uppercase tracking-tight">
                  <span className="material-symbols-outlined text-base">
                    timer
                  </span>
                  <span>72 Hours Remaining</span>
                </div>
                <div className="flex items-center gap-2 text-[#5c7a67] font-black text-[10px] uppercase tracking-tight">
                  <span className="material-symbols-outlined text-base">
                    token
                  </span>
                  <span>100 Credits</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="px-8 py-4 bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-[#13ec5b] dark:hover:bg-[#13ec5b] transition-all shadow-xl shadow-black/10 hover:shadow-[#13ec5b]/20"
                onClick={() =>
                  router.push(
                    "/learning/users/student/portal/assignments/submit-assginment/1",
                  )
                }
              >
                Initialize Task
              </button>
            </div>
          </div>

          {/* Assignment Card 2 (Overdue) */}
          <div className="group bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center gap-8 relative overflow-hidden transition-all hover:border-rose-500/30">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-rose-500"></div>
            <div className="flex-1 text-rose-500">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Logic Systems
                </span>
                <div className="px-2 py-0.5 bg-rose-500 text-white text-[8px] font-black rounded-full uppercase tracking-widest animate-pulse">
                  Overdue
                </div>
              </div>
              <h3 className="text-xl font-black text-[#15291b] dark:text-white">
                Neural Networks: Performance Lab
              </h3>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2 font-black text-[10px] uppercase">
                  <span className="material-symbols-outlined text-base">
                    warning
                  </span>
                  <span>Expired 3.5 Hours ago</span>
                </div>
              </div>
            </div>
            <button className="px-8 py-4 border-2 border-rose-500/20 text-rose-500 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-rose-500 hover:text-white transition-all">
              Bypass Lockdown
            </button>
          </div>

          {/* Assignment Card 3 (Graded/Success) */}
          <div className="group bg-[#fcfdfc] dark:bg-[#15291b]/40 border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center gap-8 relative overflow-hidden opacity-80">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#13ec5b]"></div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
                  Computer Science
                </span>
                <span className="px-2 py-0.5 bg-[#13ec5b]/10 text-[#13ec5b] text-[8px] font-black rounded-full uppercase">
                  Evaluated
                </span>
              </div>
              <h3 className="text-xl font-black text-[#15291b] dark:text-white">
                Complex Data Architectures
              </h3>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-[#13ec5b] font-black text-[10px] uppercase">
                  <span className="material-symbols-outlined text-base">
                    verified
                  </span>
                  <span>Grade: 95.8%</span>
                </div>
              </div>
            </div>
            <button className="px-8 py-4 bg-transparent border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] dark:text-[#a0c4ab] text-[10px] font-black uppercase tracking-widest rounded-2xl hover:border-[#13ec5b] hover:text-[#13ec5b] transition-all">
              Review Analysis
            </button>
          </div>
        </div>

        {/* Pagination/Load More */}
        <div className="mt-16 flex justify-center pb-20">
          <button className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.3em] hover:text-[#13ec5b] transition-all flex flex-col items-center gap-3 group">
            <span className="group-hover:translate-y-1 transition-transform">
              Expand History
            </span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </main>
    </div>
  );
}
