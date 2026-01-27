"use client";

import React, { useState } from "react";

export default function SchedulePage() {
  // State to manage mobile view switching
  const [mobileView, setMobileView] = useState<
    "calendar" | "timeline" | "filters"
  >("calendar");

  return (
    <div className="flex h-full bg-slate-50 dark:bg-[#020617] overflow-hidden font-sans text-slate-900 dark:text-white relative transition-colors duration-500">
      {/* --- LEFT FILTER SIDEBAR ---
       */}
      <aside
        className={`
          flex-col gap-6 overflow-y-auto shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 border-r border-slate-200 dark:border-white/5
          transition-all duration-300
          ${
            mobileView === "filters"
              ? "flex absolute inset-0 z-30 w-full"
              : "hidden"
          }
          xl:flex xl:static xl:w-72 xl:z-0
        `}
      >
        <div className="flex items-center justify-between xl:hidden mb-2">
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            Filters
          </h2>
          <button
            onClick={() => setMobileView("calendar")}
            className="size-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div>
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
            Course Filters
          </h3>
          <div className="space-y-4">
            {/* Filter Item: Math */}
            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                  Mathematics 101
                </span>
              </div>
              <input
                defaultChecked
                className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none checked:bg-emerald-500 relative transition-all cursor-pointer before:content-[''] before:absolute before:size-3.5 before:bg-white before:rounded-full before:top-[3px] before:left-[3px] checked:before:translate-x-5 before:transition-all before:shadow-sm"
                type="checkbox"
              />
            </label>

            {/* Filter Item: CS */}
            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                  Computer Science
                </span>
              </div>
              <input
                defaultChecked
                className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none checked:bg-emerald-500 relative transition-all cursor-pointer before:content-[''] before:absolute before:size-3.5 before:bg-white before:rounded-full before:top-[3px] before:left-[3px] checked:before:translate-x-5 before:transition-all before:shadow-sm"
                type="checkbox"
              />
            </label>

            {/* Filter Item: Chemistry */}
            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                  Organic Chemistry
                </span>
              </div>
              <input
                defaultChecked
                className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none checked:bg-emerald-500 relative transition-all cursor-pointer before:content-[''] before:absolute before:size-3.5 before:bg-white before:rounded-full before:top-[3px] before:left-[3px] checked:before:translate-x-5 before:transition-all before:shadow-sm"
                type="checkbox"
              />
            </label>

            {/* Filter Item: Art */}
            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                  Art History
                </span>
              </div>
              <input
                className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none checked:bg-emerald-500 relative transition-all cursor-pointer before:content-[''] before:absolute before:size-3.5 before:bg-white before:rounded-full before:top-[3px] before:left-[3px] checked:before:translate-x-5 before:transition-all before:shadow-sm"
                type="checkbox"
              />
            </label>
          </div>
        </div>

        <div className="mt-auto">
          <div className="bg-emerald-500/5 rounded-2xl p-5 border border-emerald-500/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-emerald-500 text-xl">
                calendar_add_on
              </span>
              <h4 className="text-sm font-black text-emerald-500 uppercase tracking-wide">
                Quick Add
              </h4>
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
              Sync with your personal Google or Outlook calendar to manage time
              better.
            </p>
            <button className="w-full py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 rounded-xl text-xs font-black hover:text-emerald-500 hover:border-emerald-500/30 transition-all uppercase tracking-wider">
              Integrate Calendars
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CALENDAR SECTION ---
       */}
      <section
        className={`
          flex-1 p-4 sm:p-6 flex-col gap-6 overflow-y-auto pb-24 xl:pb-6 custom-scrollbar
          ${mobileView === "calendar" ? "flex" : "hidden xl:flex"}
        `}
      >
        {/* Calendar Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              October 2024
            </h2>
            <div className="flex bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-xl p-1 shadow-sm">
              <button className="size-8 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors text-slate-500 hover:text-emerald-500">
                <span className="material-symbols-outlined text-xl">
                  chevron_left
                </span>
              </button>
              <button className="px-3 text-xs font-black uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors text-slate-700 dark:text-slate-300">
                Today
              </button>
              <button className="size-8 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors text-slate-500 hover:text-emerald-500">
                <span className="material-symbols-outlined text-xl">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-900 rounded-xl p-1 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-[10px] font-black uppercase tracking-wider text-slate-900 dark:text-white">
              Month
            </button>
            <button className="flex-1 sm:flex-none px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              Week
            </button>
            <button className="flex-1 sm:flex-none px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              Day
            </button>
          </div>
        </div>

        {/* Calendar Grid Container */}
        <div className="flex-1 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-[2rem] overflow-hidden flex flex-col min-h-[600px] shadow-xl shadow-slate-200/50 dark:shadow-none relative">
          <div className="overflow-x-auto h-full flex flex-col">
            <div className="min-w-[700px] flex-1 flex flex-col h-full">
              {/* Days Header */}
              <div className="grid grid-cols-7 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="py-4 text-center text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]"
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 flex-1 auto-rows-fr">
                {/* Previous Month */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] min-h-[100px] text-slate-400 dark:text-slate-600 text-xs font-bold">
                  29
                </div>
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] min-h-[100px] text-slate-400 dark:text-slate-600 text-xs font-bold">
                  30
                </div>

                {/* Day 1 */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  1
                </div>

                {/* Day 2 */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  2
                </div>

                {/* Day 3 (Event) */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  3
                  <div className="mt-2 space-y-1">
                    <div className="px-2 py-1 bg-blue-500/10 border-l-2 border-blue-500 text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-wider rounded-sm truncate">
                      Math Lecture
                    </div>
                  </div>
                </div>

                {/* Day 4-6 */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  4
                </div>
                <div className="p-3 border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  5
                </div>
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  6
                </div>

                {/* Day 7 (Multiple Events) */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  7
                  <div className="mt-2 space-y-1">
                    <div className="px-2 py-1 bg-amber-500/10 border-l-2 border-amber-500 text-[9px] text-amber-600 dark:text-amber-400 font-black uppercase tracking-wider rounded-sm truncate">
                      CS Project
                    </div>
                    <div className="px-2 py-1 bg-purple-500/10 border-l-2 border-purple-500 text-[9px] text-purple-600 dark:text-purple-400 font-black uppercase tracking-wider rounded-sm truncate">
                      Study Session
                    </div>
                  </div>
                </div>

                {/* Day 8 */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  8
                </div>

                {/* Day 9 (Current Day) */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-emerald-600 dark:text-emerald-400 text-xs font-black bg-emerald-500/5 ring-1 ring-inset ring-emerald-500/20">
                  9
                  <div className="mt-2 space-y-1">
                    <div className="px-2 py-1 bg-blue-500/10 border-l-2 border-blue-500 text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-wider rounded-sm truncate">
                      Bio Seminar
                    </div>
                    <div className="px-2 py-1 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-wider rounded-sm truncate shadow-sm">
                      Current Time
                    </div>
                  </div>
                </div>

                {/* Day 10-15 */}
                {[10, 11, 12, 13, 14, 15].map((day) => (
                  <div
                    key={day}
                    className={`p-3 ${
                      day % 7 === 0 ? "border-b" : "border-r border-b"
                    } border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold`}
                  >
                    {day}
                  </div>
                ))}

                {/* Day 16 (Event) */}
                <div className="p-3 border-r border-b border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold">
                  16
                  <div className="mt-2 space-y-1">
                    <div className="px-2 py-1 bg-blue-500/10 border-l-2 border-blue-500 text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-wider rounded-sm truncate">
                      Ethics Workshop
                    </div>
                  </div>
                </div>

                {/* Rest of the month */}
                {Array.from({ length: 10 }, (_, i) => i + 17).map((day) => (
                  <div
                    key={day}
                    className={`p-3 ${
                      day === 19 || day === 26
                        ? "border-b"
                        : "border-r border-b"
                    } border-slate-100 dark:border-white/5 min-h-[100px] text-slate-700 dark:text-slate-300 text-xs font-bold`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RIGHT TIMELINE SIDEBAR ---
       */}
      <aside
        className={`
          flex-col gap-8 overflow-y-auto shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 border-l border-slate-200 dark:border-white/5
          transition-all duration-300
          ${
            mobileView === "timeline"
              ? "flex absolute inset-0 z-30 w-full"
              : "hidden"
          }
          2xl:flex 2xl:static 2xl:w-80
        `}
      >
        <div className="flex items-center justify-between xl:hidden mb-2">
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            Timeline
          </h2>
          <button
            onClick={() => setMobileView("calendar")}
            className="size-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-500"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-black text-slate-900 dark:text-white">
              Upcoming Today
            </h3>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-lg">
              Oct 9
            </span>
          </div>

          <div className="space-y-6">
            {/* Timeline Item 1 */}
            <div className="relative pl-6 before:content-[''] before:absolute before:left-[7px] before:top-[24px] before:bottom-[-24px] before:w-[2px] before:bg-slate-100 dark:before:bg-white/5">
              <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-[3px] border-blue-500 bg-white dark:bg-slate-900 z-10 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-wide mb-1">
                  10:00 AM — 11:30 AM
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Organic Chemistry
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Hall B • Prof. Simmons
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-6 before:content-[''] before:absolute before:left-[7px] before:top-[24px] before:bottom-[-24px] before:w-[2px] before:bg-slate-100 dark:before:bg-white/5">
              <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-[3px] border-purple-500 bg-white dark:bg-slate-900 z-10 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-purple-500 uppercase tracking-wide mb-1">
                  01:00 PM — 02:30 PM
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Math Lab Study
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Library 2nd Floor
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-[3px] border-amber-500 bg-white dark:bg-slate-900 z-10 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-wide mb-1">
                  11:59 PM
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  History Essay
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Digital Submission
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-[1.5rem] p-6 text-white relative overflow-hidden shadow-2xl border border-white/10">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-emerald-400 text-xl">
                  auto_awesome
                </span>
                <h4 className="text-sm font-black uppercase tracking-wider">
                  AI Smart Scheduler
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-medium">
                I&apos;ve noticed you have a{" "}
                <span className="text-white font-bold">CS Final</span> in 4
                days. Would you like me to block out{" "}
                <span className="text-emerald-400 font-bold">
                  2 hours tomorrow
                </span>{" "}
                for deep focus?
              </p>
              <div className="space-y-3">
                <button className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl text-[10px] font-black hover:shadow-lg hover:shadow-emerald-500/20 transition-all uppercase tracking-wider">
                  Accept Suggestion
                </button>
                <button className="w-full py-2.5 bg-white/5 text-white border border-white/10 rounded-xl text-[10px] font-black hover:bg-white/10 transition-all uppercase tracking-wider">
                  Adjust Time
                </button>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 size-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </aside>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 xl:bottom-8 right-6 size-14 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      {/* --- MOBILE BOTTOM NAVIGATION ---
       */}
      <div className="xl:hidden fixed bottom-0 w-full bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 flex justify-around p-3 z-50">
        <button
          onClick={() => setMobileView("filters")}
          className={`flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${
            mobileView === "filters"
              ? "text-emerald-500"
              : "text-slate-400 dark:text-slate-500"
          }`}
        >
          <span className="material-symbols-outlined">filter_list</span>
          Filters
        </button>
        <button
          onClick={() => setMobileView("calendar")}
          className={`flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${
            mobileView === "calendar"
              ? "text-emerald-500"
              : "text-slate-400 dark:text-slate-500"
          }`}
        >
          <span className="material-symbols-outlined">calendar_month</span>
          Calendar
        </button>
        <button
          onClick={() => setMobileView("timeline")}
          className={`flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${
            mobileView === "timeline"
              ? "text-emerald-500"
              : "text-slate-400 dark:text-slate-500"
          }`}
        >
          <span className="material-symbols-outlined">view_timeline</span>
          Timeline
        </button>
      </div>
    </div>
  );
}
