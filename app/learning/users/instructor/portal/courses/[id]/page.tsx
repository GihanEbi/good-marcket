"use client";

import React from "react";
import Link from "next/link";

export default function CourseManagementPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* --- Architect Terminal Navbar --- */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl border-b border-[#e7f3eb] dark:border-[#1e3a27] px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="size-1.5 rounded-full bg-[#13ec5b] animate-pulse shadow-[0_0_8px_#13ec5b]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                  Module: ARC-102
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#15291b] dark:text-white leading-tight tracking-tight">
                Full Stack Web <span className="text-[#13ec5b]">DNA</span>
              </h2>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[10px] text-[#5c7a67] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs font-black">
                    public
                  </span>
                  Synchronized
                </span>
                <button className="text-[10px] text-[#13ec5b] font-black uppercase tracking-widest hover:underline decoration-2">
                  Simulation View
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-[#15291b] text-[#5c7a67] dark:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b] transition-all">
              <span className="material-symbols-outlined text-sm font-black">
                share
              </span>
              Link
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-3 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined text-sm font-black">
                edit
              </span>
              Architect
            </button>
          </div>
        </div>
      </header>

      {/* --- Main Operations Content --- */}
      <main className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-12 gap-8">
        {/* --- Left Column: Analytics & Matrix --- */}
        <div className="col-span-12 xl:col-span-9 space-y-10">
          {/* Performance Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Active Nodes",
                val: "1,284",
                icon: "hub",
                trend: "+12%",
                color: "#13ec5b",
              },
              {
                label: "Asset Value",
                val: "$42,850",
                icon: "token",
                trend: "+8.2%",
                color: "#13ec5b",
              },
              {
                label: "Sync Rate",
                val: "76%",
                icon: "dataset",
                trend: "STABLE",
                color: "#5c7a67",
              },
              {
                label: "Global Rating",
                val: "4.8",
                icon: "star",
                trend: "TOP 2%",
                color: "#13ec5b",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#15291b] p-6 rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] shadow-sm group hover:border-[#13ec5b]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="size-11 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/10 group-hover:bg-[#13ec5b] group-hover:text-[#15291b] transition-all">
                    <span className="material-symbols-outlined font-black">
                      {stat.icon}
                    </span>
                  </div>
                  <span
                    className={`text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest ${stat.trend.includes("+") ? "bg-[#13ec5b]/10 text-[#13ec5b]" : "bg-[#5c7a67]/10 text-[#5c7a67]"}`}
                  >
                    {stat.trend}
                  </span>
                </div>
                <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
                <h4 className="text-3xl font-black tracking-tighter mt-1">
                  {stat.val}
                </h4>
              </div>
            ))}
          </div>

          {/* Engagement Visualization */}
          <div className="bg-white dark:bg-[#15291b] p-8 rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  Sync Velocity
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#5c7a67] mt-1">
                  Node engagement across 30-day temporal cycle
                </p>
              </div>
              <select className="bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-xl text-[10px] font-black uppercase tracking-widest text-[#5c7a67] px-4 py-2 focus:border-[#13ec5b] outline-none">
                <option>Active Cycle (30D)</option>
                <option>Long Range (6M)</option>
              </select>
            </div>

            {/* Tactical Chart Area */}
            <div className="h-64 w-full relative flex items-end justify-between gap-2 px-2">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[1, 2, 3, 4].map((_, i) => (
                  <div
                    key={i}
                    className="w-full border-t border-[#e7f3eb] dark:border-[#1e3a27] opacity-30"
                  ></div>
                ))}
              </div>
              {/* Bars with Neon Glow */}
              {[40, 55, 45, 70, 85, 60, 95, 80, 75, 65, 50, 90].map((h, i) => (
                <div
                  key={i}
                  className={`rounded-t-md w-full transition-all duration-700 ${i === 11 ? "bg-[#13ec5b] shadow-[0_0_15px_rgba(19,236,91,0.4)]" : "bg-[#13ec5b]/20 hover:bg-[#13ec5b]/40"}`}
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-6 px-2 text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.3em]">
              <span>Cycle Origin</span>
              <span className="hidden sm:inline">Node 10</span>
              <span className="hidden sm:inline">Node 20</span>
              <span className="text-[#13ec5b]">Current</span>
            </div>
          </div>

          {/* Lower Grid: Network Queries & High-Yield Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Queries */}
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden">
              <div className="p-6 border-b border-[#e7f3eb] dark:border-[#1e3a27] flex items-center justify-between bg-[#fcfdfc] dark:bg-[#0a0f0b]/30">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  Network Queries
                </h3>
                <button className="text-[10px] text-[#13ec5b] font-black uppercase tracking-widest hover:underline">
                  Full Feed
                </button>
              </div>
              <div className="divide-y divide-[#e7f3eb] dark:divide-[#1e3a27]">
                {[
                  {
                    name: "Alex Rivera",
                    time: "2H AGO",
                    lesson: "Logic Gate",
                    text: "Struggling to synchronize the recursive depth of the backprop node...",
                  },
                  {
                    name: "Jordan Smith",
                    name2: "JS",
                    time: "5H AGO",
                    lesson: "Env Config",
                    text: "Simulation command is throwing a parity error on kernel install...",
                  },
                ].map((q, i) => (
                  <div
                    key={i}
                    className="p-6 hover:bg-[#f0f7f2] dark:hover:bg-[#0a0f0b]/50 transition-all cursor-pointer group"
                  >
                    <div className="flex gap-4 mb-3">
                      <div className="size-9 rounded-xl bg-[#15291b] border border-[#13ec5b]/30 flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={`https://ui-avatars.com/api/?name=${q.name}&background=15291b&color=13ec5b&bold=true`}
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight group-hover:text-[#13ec5b] transition-colors">
                          {q.name}
                        </p>
                        <p className="text-[8px] font-black text-[#5c7a67] uppercase tracking-widest">
                          {q.time} • Node: {q.lesson}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-[#5c7a67] dark:text-[#a0c4ab] line-clamp-2 italic leading-relaxed">
                      &quot;{q.text}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Yield Nodes */}
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden">
              <div className="p-6 border-b border-[#e7f3eb] dark:border-[#1e3a27] flex items-center justify-between bg-[#fcfdfc] dark:bg-[#0a0f0b]/30">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  High-Yield Nodes
                </h3>
                <button className="text-[10px] text-[#13ec5b] font-black uppercase tracking-widest hover:underline">
                  Matrix
                </button>
              </div>
              <div className="p-6 space-y-6">
                {[
                  {
                    id: "01",
                    title: "Neural Logic with Tailwind",
                    views: "4.2K",
                    rate: "98%",
                    color: "#13ec5b",
                  },
                  {
                    id: "02",
                    title: "Async/Await Pipeline",
                    views: "3.8K",
                    rate: "92%",
                    color: "#5c7a67",
                  },
                  {
                    id: "03",
                    title: "Architecture Deployment",
                    views: "3.5K",
                    rate: "89%",
                    color: "#5c7a67",
                  },
                ].map((lesson, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="size-11 rounded-2xl bg-[#f0f7f2] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] flex items-center justify-center font-black text-xs shrink-0 group-hover:border-[#13ec5b]/30 transition-all">
                      {lesson.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight truncate group-hover:text-[#13ec5b] transition-colors">
                        {lesson.title}
                      </p>
                      <div className="flex items-center gap-4 mt-1.5">
                        <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[12px]">
                            visibility
                          </span>{" "}
                          {lesson.views}
                        </span>
                        <span className="text-[8px] font-black text-[#13ec5b] uppercase tracking-[0.2em]">
                          Sync {lesson.rate}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column: Command Sidebar --- */}
        <aside className="col-span-12 xl:col-span-3 space-y-8">
          <div className="xl:sticky xl:top-32 space-y-8">
            {/* System Protocols */}
            <div className="bg-white dark:bg-[#15291b] rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-6 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#13ec5b] text-base">
                  tune
                </span>
                System Protocols
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: "inventory_2", label: "Module Schema" },
                  { icon: "payments", label: "Token Pricing" },
                  { icon: "database", label: "Node Registry" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href="#"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b]/40 group transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#5c7a67] group-hover:text-[#13ec5b] transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-black text-[#5c7a67] dark:text-white uppercase tracking-widest">
                        {item.label}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[#5c7a67] text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Broadcast Terminal */}
            <div className="bg-[#15291b] p-8 rounded-[2rem] text-white shadow-2xl shadow-[#13ec5b]/5 relative overflow-hidden group border border-[#1e3a27]">
              <div className="absolute -right-6 -top-6 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <span className="material-symbols-outlined text-[120px] font-black">
                  campaign
                </span>
              </div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-3 relative z-10">
                Global Uplink
              </h4>
              <p className="text-[11px] text-[#a0c4ab] font-medium mb-8 leading-relaxed relative z-10">
                Transmit module updates to all{" "}
                <span className="text-white font-black underline decoration-[#13ec5b]">
                  1,284 nodes
                </span>{" "}
                in the network.
              </p>
              <button className="w-full py-4 bg-[#13ec5b] text-[#15291b] font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-[#13ec5b]/10 hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10">
                Initialize Broadcast
              </button>
            </div>

            {/* Temporal Sequence (Cohort) */}
            <div className="bg-white dark:bg-[#15291b] rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-6 shadow-sm">
              <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.3em] mb-4">
                Temporal Sequence
              </p>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center justify-center size-14 rounded-2xl bg-[#0a0f0b] border border-[#1e3a27] shrink-0 shadow-inner">
                  <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest mb-1">
                    DEC
                  </span>
                  <span className="text-2xl font-black text-[#13ec5b] leading-none">
                    15
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight truncate">
                    Simulation Cycle B
                  </p>
                  <p className="text-[9px] font-black text-[#5c7a67] mt-1 uppercase tracking-widest">
                    45 / 150 Slots synced
                  </p>
                </div>
              </div>
              <div className="mt-5 w-full h-1 bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-full overflow-hidden border border-[#e7f3eb] dark:border-[#1e3a27]">
                <div className="w-[30%] h-full bg-[#13ec5b] rounded-full shadow-[0_0_8px_#13ec5b]"></div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
