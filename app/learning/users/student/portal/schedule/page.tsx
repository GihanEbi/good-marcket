"use client";

import React, { useState } from "react";

export default function SchedulePage() {
  const [mobileView, setMobileView] = useState<
    "calendar" | "timeline" | "filters"
  >("calendar");

  return (
    <div className="flex h-full bg-[#fcfdfc] dark:bg-[#0a0f0b] overflow-hidden font-sans text-[#15291b] dark:text-slate-50 relative transition-colors duration-300">
      {/* 
        --- LEFT DIRECTORY SIDEBAR (FILTERS) --- 
      */}
      <aside
        className={`
          flex-col gap-8 overflow-y-auto shrink-0 bg-white dark:bg-[#0a0f0b] p-8 border-r border-[#e7f3eb] dark:border-[#1e3a27]
          transition-all duration-300
          ${mobileView === "filters" ? "flex absolute inset-0 z-30 w-full" : "hidden"}
          xl:flex xl:static xl:w-80 xl:z-0
        `}
      >
        <div className="flex items-center justify-between xl:hidden">
          <h2 className="text-xl font-black uppercase tracking-widest">
            Filters
          </h2>
          <button
            onClick={() => setMobileView("calendar")}
            className="p-2 bg-[#f0f7f2] dark:bg-[#15291b] rounded-full text-[#13ec5b]"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.3em] mb-6">
              Knowledge Nodes
            </h3>
            <div className="space-y-4">
              {[
                { label: "Neural Networks", color: "#13ec5b" },
                { label: "Data Structures", color: "#a0c4ab" },
                { label: "Logic & Ethics", color: "#13ec5b" },
                { label: "System Design", color: "#5c7a67" },
              ].map((course, i) => (
                <label
                  key={course.label}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="size-2 rounded-full shadow-[0_0_8px_currentColor]"
                      style={{
                        color: course.color,
                        backgroundColor: course.color,
                      }}
                    ></div>
                    <span className="text-sm font-bold text-[#5c7a67] group-hover:text-[#13ec5b] transition-colors">
                      {course.label}
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      defaultChecked={i < 3}
                      type="checkbox"
                      className="peer w-10 h-5 bg-[#f0f7f2] dark:bg-[#15291b] rounded-full appearance-none checked:bg-[#13ec5b] relative transition-all cursor-pointer border border-[#e7f3eb] dark:border-[#1e3a27]"
                    />
                    <div className="absolute left-1 size-3 bg-[#15291b] dark:bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-10">
            <div className="bg-[#13ec5b]/5 rounded-[2rem] p-6 border border-[#13ec5b]/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#13ec5b] text-xl font-black">
                  calendar_add_on
                </span>
                <h4 className="text-[10px] font-black text-[#13ec5b] uppercase tracking-widest">
                  External Sync
                </h4>
              </div>
              <p className="text-[11px] text-[#5c7a67] font-medium leading-relaxed mb-5">
                Integrate with your primary neural calendar (Google/Outlook).
              </p>
              <button className="w-full py-3 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-[#13ec5b] transition-all">
                Synchronize
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* 
        --- MAIN ASSESSMENT CALENDAR --- 
      */}
      <section
        className={`
          flex-1 p-6 md:p-10 flex flex-col gap-8 overflow-y-auto pb-32 xl:pb-10
          ${mobileView === "calendar" ? "flex" : "hidden xl:flex"}
        `}
      >
        {/* Header Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#13ec5b] animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                  Active Cycle
                </span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#15291b] dark:text-white">
                October <span className="text-[#13ec5b]">2024</span>
              </h2>
            </div>

            <div className="flex bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl p-1.5 shadow-sm">
              <button className="size-10 flex items-center justify-center hover:text-[#13ec5b] transition-colors">
                <span className="material-symbols-outlined font-black">
                  chevron_left
                </span>
              </button>
              <button className="px-5 text-[10px] font-black uppercase tracking-widest hover:text-[#13ec5b] transition-colors">
                Today
              </button>
              <button className="size-10 flex items-center justify-center hover:text-[#13ec5b] transition-colors">
                <span className="material-symbols-outlined font-black">
                  chevron_right
                </span>
              </button>
            </div>
          </div>

          <div className="flex bg-[#f0f7f2] dark:bg-[#15291b] rounded-2xl p-1.5 w-full md:w-auto border border-[#e7f3eb] dark:border-[#1e3a27]">
            {["Month", "Week", "Day"].map((view, i) => (
              <button
                key={view}
                className={`flex-1 md:flex-none px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  i === 0
                    ? "bg-[#13ec5b] text-[#15291b] shadow-lg shadow-[#13ec5b]/10"
                    : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* Tactical Calendar Grid */}
        <div className="flex-1 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2.5rem] overflow-hidden flex flex-col min-h-[650px] shadow-2xl shadow-black/5 relative">
          <div className="overflow-x-auto h-full flex flex-col">
            <div className="min-w-[800px] flex-1 flex flex-col h-full">
              {/* Days Header */}
              <div className="grid grid-cols-7 border-b border-[#e7f3eb] dark:border-[#1e3a27] bg-[#fcfdfc] dark:bg-[#0a0f0b]">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="py-4 text-center text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.3em]"
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

              {/* Day Matrix */}
              <div className="grid grid-cols-7 flex-1 auto-rows-fr">
                {/* Placeholder Days */}
                {[29, 30].map((d) => (
                  <div
                    key={d}
                    className="p-4 border-r border-b border-[#e7f3eb] dark:border-[#1e3a27] bg-[#f0f7f2]/20 dark:bg-[#0a0f0b]/20 opacity-30"
                  >
                    <span className="text-[10px] font-black">{d}</span>
                  </div>
                ))}

                {/* Active Calendar Logic */}
                {Array.from({ length: 29 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`p-4 border-r border-b border-[#e7f3eb] dark:border-[#1e3a27] min-h-[110px] relative group transition-all hover:bg-[#13ec5b]/5 ${
                      day === 9 ? "bg-[#13ec5b]/10 dark:bg-[#13ec5b]/5" : ""
                    }`}
                  >
                    <span
                      className={`text-xs font-black ${day === 9 ? "text-[#13ec5b]" : ""}`}
                    >
                      {day.toString().padStart(2, "0")}
                    </span>

                    {/* Event Payloads */}
                    <div className="mt-3 space-y-2">
                      {day === 3 && (
                        <div className="px-2 py-1.5 bg-[#15291b] border-l-4 border-[#13ec5b] text-[9px] text-[#13ec5b] font-black uppercase tracking-tighter rounded-md truncate">
                          Neural Lab
                        </div>
                      )}
                      {day === 7 && (
                        <>
                          <div className="px-2 py-1.5 bg-[#13ec5b] text-[#15291b] text-[9px] font-black uppercase tracking-tighter rounded-md truncate">
                            Final Due
                          </div>
                          <div className="px-2 py-1.5 bg-[#15291b] border border-[#13ec5b]/20 text-[9px] text-[#a0c4ab] font-black uppercase tracking-tighter rounded-md truncate">
                            Sync Point
                          </div>
                        </>
                      )}
                      {day === 9 && (
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#13ec5b] shadow-[0_0_12px_#13ec5b]"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        --- RIGHT TEMPORAL SIDEBAR (TIMELINE) --- 
      */}
      <aside
        className={`
          flex-col gap-10 overflow-y-auto shrink-0 bg-white dark:bg-[#0a0f0b] p-8 border-l border-[#e7f3eb] dark:border-[#1e3a27]
          transition-all duration-300
          ${mobileView === "timeline" ? "flex absolute inset-0 z-30 w-full" : "hidden"}
          2xl:flex 2xl:static 2xl:w-96
        `}
      >
        <div className="flex items-center justify-between xl:hidden">
          <h2 className="text-xl font-black uppercase tracking-widest">
            Timeline
          </h2>
          <button
            onClick={() => setMobileView("calendar")}
            className="p-2 bg-[#f0f7f2] dark:bg-[#15291b] rounded-full text-[#13ec5b]"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.3em]">
              Temporal Flow
            </h3>
            <span className="text-[10px] font-black text-[#13ec5b] uppercase tracking-widest">
              Oct 09
            </span>
          </div>

          <div className="space-y-10 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-[#e7f3eb] dark:before:bg-[#1e3a27]">
            {[
              {
                time: "10:00 — 11:30",
                title: "Neural Architecture",
                sub: "Core Module",
                color: "#13ec5b",
              },
              {
                time: "13:00 — 14:30",
                title: "Data Logic Sync",
                sub: "Library Node",
                color: "#a0c4ab",
              },
              {
                time: "23:59",
                title: "History Submission",
                sub: "Archive Upload",
                color: "#5c7a67",
              },
            ].map((event) => (
              <div key={event.title} className="relative pl-8 group">
                <div className="absolute left-0 top-1.5 size-4 rounded-full border-2 border-[#1e3a27] bg-white dark:bg-[#0a0f0b] z-10 group-hover:border-[#13ec5b] transition-colors">
                  <div className="absolute inset-1 rounded-full bg-[#13ec5b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-[#13ec5b] mb-1 tracking-widest">
                    {event.time}
                  </span>
                  <h4 className="text-sm font-black text-[#15291b] dark:text-white uppercase tracking-tight">
                    {event.title}
                  </h4>
                  <p className="text-[10px] text-[#5c7a67] font-bold uppercase mt-1">
                    {event.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Scheduler Engine */}
        <div className="mt-auto">
          <div className="bg-gradient-to-br from-[#15291b] to-[#0a0f0b] rounded-[2.5rem] p-8 text-white relative overflow-hidden border border-[#1e3a27] group shadow-2xl">
            <div className="absolute -top-10 -right-10 size-40 bg-[#13ec5b] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#13ec5b] text-xl fill-1">
                  auto_awesome
                </span>
                <h4 className="text-[10px] font-black text-[#13ec5b] uppercase tracking-[0.3em]">
                  Smart Scheduler
                </h4>
              </div>
              <p className="text-xs text-[#a0c4ab] leading-relaxed mb-8 font-medium">
                Analysis indicates a{" "}
                <span className="text-white font-black">Neural Lab Exam</span>{" "}
                in 96 hours. Should I dedicate{" "}
                <span className="text-[#13ec5b] font-black">
                  2 hours tomorrow
                </span>{" "}
                to logic focus?
              </p>
              <div className="space-y-3">
                <button className="w-full py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-[#13ec5b]/10 hover:scale-[1.03] transition-all">
                  Sync Suggestion
                </button>
                <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                  Modify Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Floating Action Node */}
      <button className="fixed bottom-28 xl:bottom-12 right-8 size-16 bg-[#13ec5b] text-[#15291b] rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <div className="absolute inset-0 rounded-2xl bg-[#13ec5b] blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
        <span className="material-symbols-outlined text-4xl font-black relative z-10">
          add
        </span>
      </button>

      {/* MOBILE HUD NAVIGATION */}
      <div className="xl:hidden fixed bottom-0 w-full bg-white dark:bg-[#15291b] border-t border-[#e7f3eb] dark:border-[#1e3a27] flex justify-around p-5 z-50 backdrop-blur-xl">
        {[
          { id: "filters", icon: "tune", label: "Directory" },
          { id: "calendar", icon: "calendar_month", label: "Timeline" },
          { id: "timeline", icon: "view_timeline", label: "Events" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setMobileView(tab.id as any)}
            className={`flex flex-col items-center gap-1.5 transition-all ${mobileView === tab.id ? "text-[#13ec5b]" : "text-[#5c7a67]"}`}
          >
            <span className="material-symbols-outlined font-black">
              {tab.icon}
            </span>
            <span className="text-[9px] font-black uppercase tracking-widest">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
