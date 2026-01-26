"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function QuizzesPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      <div className="p-6 md:p-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-[#13ec5b] animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                Evaluation Engine
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-none text-[#15291b] dark:text-white">
              Assessment <span className="text-[#13ec5b]">Nodes</span>
            </h2>
            <p className="text-[#5c7a67] dark:text-[#a0c4ab] font-medium">
              You have{" "}
              <span className="text-[#15291b] dark:text-white font-black underline decoration-[#13ec5b] decoration-2">
                4 active
              </span>{" "}
              assessments required for sync.
            </p>
          </div>

          {/* Status Pipeline Tabs */}
          <div className="flex border-b border-[#e7f3eb] dark:border-[#1e3a27] gap-10 overflow-x-auto scrollbar-hide">
            {["Available", "Synchronized", "Upcoming"].map((tab, i) => (
              <button
                key={tab}
                className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                  i === 0
                    ? "text-[#13ec5b]"
                    : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
                }`}
              >
                {tab}
                {i === 0 && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full shadow-[0_0_8px_#13ec5b]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Info Banner */}
        <div className="mb-12 p-6 rounded-[2rem] bg-[#15291b] border border-[#1e3a27] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden group shadow-xl">
          <div className="absolute -top-10 -right-10 size-32 bg-[#13ec5b] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="size-14 flex items-center justify-center rounded-2xl bg-[#13ec5b]/10 text-[#13ec5b] border border-[#13ec5b]/20 shrink-0">
              <span className="material-symbols-outlined text-3xl font-black">
                psychology
              </span>
            </div>
            <div>
              <p className="font-black text-white uppercase tracking-tight">
                Optimize Mastery with Practice Mode
              </p>
              <p className="text-sm text-[#a0c4ab] font-medium leading-relaxed max-w-xl">
                Non-graded simulations are active. Utilize these to calibrate
                your knowledge DNA before the final evaluation phase.
              </p>
            </div>
          </div>
          <button className="bg-[#13ec5b] text-[#15291b] px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#13ec5b]/10 hover:scale-105 transition-all relative z-10">
            Learn More
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar: Filter Directory */}
          <aside className="w-full lg:w-64 shrink-0 space-y-10">
            {["Knowledge Domain", "Module Type"].map((section, idx) => (
              <div key={section}>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-6">
                  {section}
                </h3>
                <div className="space-y-4">
                  {(idx === 0
                    ? [
                        "All Domains",
                        "Intro to AI",
                        "Data Structures",
                        "HCI Systems",
                      ]
                    : ["Graded Node", "Practice Node", "Final Phase"]
                  ).map((item, i) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked={i === 0}
                          className="peer size-4 appearance-none rounded border-2 border-[#e7f3eb] dark:border-[#1e3a27] checked:bg-[#13ec5b] checked:border-[#13ec5b] transition-all cursor-pointer"
                        />
                        <span className="material-symbols-outlined absolute text-[#15291b] text-xs font-black opacity-0 peer-checked:opacity-100 pointer-events-none">
                          check
                        </span>
                      </div>
                      <span className="text-sm font-bold text-[#5c7a67] dark:text-[#a0c4ab] group-hover:text-[#13ec5b] transition-colors">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-4">
                Due Schedule
              </h3>
              <select className="w-full bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-xl text-xs font-bold px-4 py-3 outline-none focus:border-[#13ec5b] transition-all">
                <option>Full Timeline</option>
                <option>Critical (This Week)</option>
                <option>Expired</option>
              </select>
            </div>
          </aside>

          {/* Assessment Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {/* Card 1: Final Exam (Alert State) */}
            <div className="flex flex-col rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#15291b] hover:border-[#13ec5b]/30 transition-all p-8 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-[40px]"></div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/20">
                  Final Phase
                </span>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#13ec5b]">
                  <span className="h-2 w-2 bg-[#13ec5b] rounded-full animate-pulse"></span>
                  Ready
                </div>
              </div>
              <h3 className="text-xl font-black leading-tight text-[#15291b] dark:text-white group-hover:text-[#13ec5b] transition-colors">
                Intro to Neural Networks Final
              </h3>
              <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest mt-2 mb-8">
                Ref: CS402 • Artificial Intelligence
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: "timer", text: "90 MINS" },
                  { icon: "quiz", text: "45 UNITS" },
                  { icon: "history_edu", text: "1 ATTEMPT" },
                  { icon: "calendar_month", text: "OCT 24" },
                ].map((stat) => (
                  <div
                    key={stat.icon}
                    className="flex items-center gap-3 text-[#5c7a67]"
                  >
                    <span className="material-symbols-outlined text-lg text-[#13ec5b] font-bold">
                      {stat.icon}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      {stat.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98]"
                onClick={() =>
                  router.push("/learning/users/student/portal/quizzes/quizzPlayer")
                }
              >
                Initialize Phase
              </button>
            </div>

            {/* Card 2: In-Progress (Sync State) */}
            <div className="flex flex-col rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#15291b] p-8 group hover:border-[#13ec5b]/20 transition-all">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg bg-[#13ec5b]/10 text-[#13ec5b] border border-[#13ec5b]/20">
                  Graded Node
                </span>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-amber-500">
                  <span className="material-symbols-outlined text-sm font-black animate-spin">
                    sync
                  </span>
                  In Progress
                </div>
              </div>
              <h3 className="text-xl font-black leading-tight text-[#15291b] dark:text-white">
                Binary Search Trees & Graphs
              </h3>
              <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest mt-2 mb-6">
                Ref: CS201 • Data Structures
              </p>

              <div className="mb-8">
                <div className="flex justify-between text-[10px] font-black text-[#5c7a67] uppercase tracking-widest mb-3">
                  <span>Sync Progress</span>
                  <span className="text-[#13ec5b]">75%</span>
                </div>
                <div className="w-full bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-full h-2 overflow-hidden border border-[#e7f3eb] dark:border-[#1e3a27]">
                  <div
                    className="bg-[#13ec5b] h-full rounded-full shadow-[0_0_8px_#13ec5b]"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <button className="w-full py-4 border-2 border-[#13ec5b]/30 text-[#13ec5b] hover:bg-[#13ec5b] hover:text-[#15291b] rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all">
                Resume Sync
              </button>
            </div>

            {/* Card 3: Completed (Archive State) */}
            <div className="flex flex-col rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] bg-[#f0f7f2] dark:bg-[#15291b]/40 p-8 opacity-80">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg bg-[#5c7a67]/10 text-[#5c7a67] border border-[#5c7a67]/20">
                  Practice
                </span>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#13ec5b]">
                  <span className="material-symbols-outlined text-sm font-black">
                    verified
                  </span>
                  Completed
                </div>
              </div>
              <h3 className="text-xl font-black leading-tight text-[#15291b] dark:text-white">
                Week 2: Heuristics & Logic
              </h3>

              <div className="bg-white dark:bg-[#0a0f0b] rounded-3xl p-6 my-8 flex items-center justify-between border border-[#e7f3eb] dark:border-[#1e3a27]">
                <div>
                  <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-1">
                    Final Score
                  </p>
                  <p className="text-3xl font-black text-[#15291b] dark:text-white">
                    92
                    <span className="text-sm font-black text-[#13ec5b]">
                      /100
                    </span>
                  </p>
                </div>
                <div className="size-12 flex items-center justify-center rounded-2xl bg-[#13ec5b] text-[#15291b] shadow-lg shadow-[#13ec5b]/20">
                  <span className="material-symbols-outlined font-black">
                    emoji_events
                  </span>
                </div>
              </div>

              <button className="w-full py-4 bg-transparent border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] dark:text-[#a0c4ab] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:border-[#13ec5b] hover:text-[#13ec5b] transition-all">
                Review Metadata
              </button>
            </div>

            {/* Card 4: Another Active Card */}
            <div className="flex flex-col rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#15291b] hover:border-[#13ec5b]/30 transition-all p-8 group">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg bg-[#13ec5b]/10 text-[#13ec5b] border border-[#13ec5b]/20">
                  Graded Node
                </span>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#13ec5b]">
                  <span className="h-2 w-2 bg-[#13ec5b] rounded-full inline-block"></span>
                  Available
                </div>
              </div>
              <h3 className="text-xl font-black leading-tight text-[#15291b] dark:text-white group-hover:text-[#13ec5b] transition-colors">
                Module 4: Usability Testing
              </h3>
              <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest mt-2 mb-8">
                Ref: HCI305 • Human Factors
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3 text-[#5c7a67]">
                  <span className="material-symbols-outlined text-lg text-[#13ec5b]">
                    timer
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    30 MINS
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#5c7a67]">
                  <span className="material-symbols-outlined text-lg text-[#13ec5b]">
                    quiz
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    15 UNITS
                  </span>
                </div>
              </div>

              <button
                className="w-full py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#13ec5b]/20"
                onClick={() =>
                  router.push("/users/student/portal/quizzes/quizzPlayer")
                }
              >
                Initialize Node
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
