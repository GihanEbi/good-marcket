"use client";

import React from "react";

export default function InstructorDashboardPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* --- Main Command Center Content --- */}
      <div className="p-6 md:p-10 max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="size-2 rounded-full bg-[#13ec5b] animate-pulse shadow-[0_0_8px_#13ec5b]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                Architect Command
              </span>
            </div>
            <h2 className="text-4xl font-black text-[#15291b] dark:text-white tracking-tight leading-none">
              Welcome back, <span className="text-[#13ec5b]">Dr. Sarah</span>
            </h2>
            <p className="text-[#5c7a67] dark:text-[#a0c4ab] font-medium mt-3">
              Cycle Oct 24 •{" "}
              <span className="text-[#15291b] dark:text-white font-black underline decoration-[#13ec5b] decoration-2">
                3 protocol reviews
              </span>{" "}
              required for synchronization.
            </p>
          </div>

          <div className="flex bg-[#f0f7f2] dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl p-1.5 shadow-sm">
            <button className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-[#13ec5b] text-[#15291b] shadow-lg shadow-[#13ec5b]/10">
              Analytics
            </button>
            <button className="px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#5c7a67] hover:text-[#13ec5b] transition-all">
              Reports
            </button>
          </div>
        </div>

        {/* Stats Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            {
              label: "Active Modules",
              val: "05",
              trend: "0% STABLE",
              icon: "terminal",
              color: "#13ec5b",
            },
            {
              label: "Neural Nodes (Students)",
              val: "347",
              trend: "+12.5% SYNC",
              icon: "hub",
              color: "#13ec5b",
            },
            {
              label: "Pending Audits",
              val: "23",
              trend: "CRITICAL",
              icon: "fact_check",
              color: "#f59e0b",
            },
            {
              label: "Ecosystem Rating",
              val: "4.8",
              trend: "+0.2 GROWTH",
              icon: "star",
              color: "#13ec5b",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-[#15291b] p-8 rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] shadow-sm group hover:border-[#13ec5b]/30 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="size-12 rounded-2xl bg-[#f0f7f2] dark:bg-[#0a0f0b] flex items-center justify-center text-[#13ec5b] group-hover:bg-[#13ec5b] group-hover:text-[#15291b] transition-all border border-[#13ec5b]/10">
                  <span className="material-symbols-outlined font-black">
                    {stat.icon}
                  </span>
                </div>
                <span
                  className={`text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest ${
                    stat.color === "#13ec5b"
                      ? "bg-[#13ec5b]/10 text-[#13ec5b]"
                      : "bg-rose-500/10 text-rose-500"
                  }`}
                >
                  {stat.trend}
                </span>
              </div>
              <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </p>
              <h3 className="text-3xl font-black tracking-tighter">
                {stat.val}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* --- Left Column (Main Data) --- */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            {/* AI Audit Banner */}
            <div className="bg-rose-500/5 border border-rose-500/20 rounded-[2rem] p-6 flex items-center gap-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-[40px] group-hover:bg-rose-500/10 transition-all"></div>
              <div className="size-14 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 border border-rose-500/20 shrink-0">
                <span className="material-symbols-outlined font-black">
                  warning
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-rose-500 font-black text-xs uppercase tracking-widest">
                  AI Audit: Anomaly Detected
                </h4>
                <p className="text-[#5c7a67] dark:text-[#a0c4ab] text-sm font-medium mt-1">
                  4 students in &apos;Neural Logic&apos; show high latency in
                  engagement.
                </p>
              </div>
              <button className="px-6 py-3 bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20 relative z-10">
                Audit Now
              </button>
            </div>

            {/* Course Registry Section */}
            <div>
              <div className="flex justify-between items-center mb-8 px-2">
                <h3 className="text-xl font-black tracking-tight text-[#15291b] dark:text-white uppercase">
                  Module Pipeline
                </h3>
                <button className="text-[10px] font-black text-[#13ec5b] uppercase tracking-widest hover:underline decoration-2">
                  View Full Registry
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Course Card 1 */}
                <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden group hover:border-[#13ec5b]/30 transition-all duration-500">
                  <div className="h-40 bg-[#0a0f0b] relative overflow-hidden">
                    <img
                      alt="Course"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#13ec5b] text-[#15291b] text-[9px] font-black uppercase rounded-full shadow-xl">
                      Live
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-lg font-black text-[#15291b] dark:text-white mb-4 group-hover:text-[#13ec5b] transition-colors leading-tight">
                      Applied Neural Architectures
                    </h4>
                    <div className="flex items-center gap-6 text-[#5c7a67] text-[10px] font-black uppercase tracking-tighter mb-8">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">
                          hub
                        </span>{" "}
                        128 NODES
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">
                          sync
                        </span>{" "}
                        2H AGO
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-[#5c7a67]">
                          Engagement Vector
                        </span>
                        <span className="text-[#13ec5b]">+14%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-full overflow-hidden border border-[#e7f3eb] dark:border-[#1e3a27]">
                        <div className="h-full bg-[#13ec5b] w-[70%] rounded-full shadow-[0_0_10px_#13ec5b]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden group hover:border-[#13ec5b]/30 transition-all duration-500">
                  <div className="h-40 bg-[#0a0f0b] relative overflow-hidden">
                    <img
                      alt="Course"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#13ec5b] text-[#15291b] text-[9px] font-black uppercase rounded-full shadow-xl">
                      Live
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-lg font-black text-[#15291b] dark:text-white mb-4 group-hover:text-[#13ec5b] transition-colors leading-tight">
                      Quantum Logic & Ethics
                    </h4>
                    <div className="flex items-center gap-6 text-[#5c7a67] text-[10px] font-black uppercase tracking-tighter mb-8">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">
                          hub
                        </span>{" "}
                        84 NODES
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">
                          sync
                        </span>{" "}
                        5H AGO
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-[#5c7a67]">
                          Engagement Vector
                        </span>
                        <span className="text-amber-500">-2%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-full overflow-hidden border border-[#e7f3eb] dark:border-[#1e3a27]">
                        <div className="h-full bg-[#13ec5b] w-[45%] rounded-full shadow-[0_0_10px_#13ec5b]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column (Sidebar Interface) --- */}
          <div className="col-span-12 lg:col-span-4 space-y-10">
            {/* Quick Actions Panel */}
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-8">
                System Actions
              </h3>
              <div className="flex flex-col gap-4">
                <button className="w-full py-5 px-6 bg-[#13ec5b] text-[#15291b] text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-between shadow-xl shadow-[#13ec5b]/10 hover:scale-[1.02] transition-all group">
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined font-black">
                      add_box
                    </span>
                    Initialize Module
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <button className="w-full py-5 px-6 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] dark:text-white text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-between hover:border-[#13ec5b] transition-all group">
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined font-black">
                      grading
                    </span>
                    Sync Assessments
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <button className="w-full py-5 px-6 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] dark:text-white text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-between hover:border-[#13ec5b] transition-all group">
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined font-black">
                      broadcast_on_personal
                    </span>
                    Global Broadcast
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Neural Activity Timeline */}
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-10">
                Neural Activity
              </h3>
              <div className="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:h-full before:w-[1px] before:bg-[#e7f3eb] dark:before:bg-[#1e3a27]">
                {[
                  {
                    title: "Node Uplink",
                    sub: "Marco Silva joined Neural Basics",
                    time: "12M AGO",
                    color: "#13ec5b",
                  },
                  {
                    title: "Protocol Submit",
                    sub: "John Doe • Data Science Hub",
                    time: "1H AGO",
                    color: "#13ec5b",
                  },
                  {
                    title: "Query Logged",
                    sub: "Unit 04: Cognitive Distortion",
                    time: "3H AGO",
                    color: "#f59e0b",
                  },
                  {
                    title: "Node Uplink",
                    sub: "Sarah Wei joined Logic 101",
                    time: "5H AGO",
                    color: "#13ec5b",
                  },
                ].map((act, i) => (
                  <div key={i} className="relative pl-10 group">
                    <div className="absolute left-0 top-1.5 size-6 rounded-xl bg-white dark:bg-[#0a0f0b] border-2 border-[#1e3a27] flex items-center justify-center z-10 group-hover:border-[#13ec5b] transition-colors">
                      <div
                        className="size-1.5 rounded-full shadow-[0_0_8px_currentColor]"
                        style={{ color: act.color, backgroundColor: act.color }}
                      ></div>
                    </div>
                    <p className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight group-hover:text-[#13ec5b] transition-colors">
                      {act.title}
                    </p>
                    <p className="text-[11px] text-[#5c7a67] dark:text-[#a0c4ab] font-medium mt-1">
                      {act.sub}
                    </p>
                    <p className="text-[8px] font-black text-[#5c7a67] mt-2 tracking-widest">
                      {act.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
