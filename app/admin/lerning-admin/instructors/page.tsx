"use client";

import React from "react";
import Link from "next/link";

export default function InstructorManagementPage() {
  return (
    <div className="flex-1 min-h-screen bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500">
      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* --- Section Title & Global Actions --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Instructor Management
              </h2>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-4">
              Manage and verify your global network of expert instructors
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex-1 md:flex-none px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-black text-slate-600 dark:text-slate-300 shadow-sm hover:text-emerald-500 hover:border-emerald-500/30 transition-all flex items-center justify-center gap-2 uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">
                payments
              </span>
              Payouts
            </button>
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl text-xs font-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              Verify Accounts
            </button>
          </div>
        </div>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              label: "Pending Apps",
              value: "24",
              status: "Action Needed",
              icon: "pending_actions",
              color: "amber",
            },
            {
              label: "Top Rated",
              value: "112",
              status: "Top 5%",
              icon: "star",
              color: "cyan",
            },
            {
              label: "Total Courses",
              value: "2,842",
              status: "Active",
              icon: "library_books",
              color: "indigo",
            },
            {
              label: "Monthly Payouts",
              value: "$128.4k",
              status: "+14%",
              icon: "account_balance",
              color: "emerald",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900/40 p-6 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/30 dark:shadow-none hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`size-12 rounded-2xl flex items-center justify-center border border-transparent
                  ${
                    stat.color === "amber"
                      ? "bg-amber-500/10 text-amber-500 border-amber-500/10"
                      : ""
                  }
                  ${
                    stat.color === "cyan"
                      ? "bg-cyan-500/10 text-cyan-500 border-cyan-500/10"
                      : ""
                  }
                  ${
                    stat.color === "indigo"
                      ? "bg-indigo-500/10 text-indigo-500 border-indigo-500/10"
                      : ""
                  }
                  ${
                    stat.color === "emerald"
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/10"
                      : ""
                  }
                `}
                >
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <span
                  className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider
                  ${
                    stat.color === "amber"
                      ? "text-amber-500 bg-amber-500/10"
                      : "text-emerald-500 bg-emerald-500/10"
                  }
                `}
                >
                  {stat.status}
                </span>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
              <p className="text-3xl font-black mt-2 text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* --- Instructor Table --- */}
        <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              Active Instructors
            </h3>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Filter Select with Emerald Focus */}
              <select className="flex-1 sm:w-40 bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-emerald-500/20 py-2.5 px-4 cursor-pointer outline-none">
                <option>All Expertise</option>
                <option>Data Science</option>
                <option>UI/UX Design</option>
              </select>
              <button className="size-9 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/5 hover:text-emerald-500 transition-colors">
                <span className="material-symbols-outlined text-[20px] text-slate-400 hover:text-emerald-500">
                  filter_list
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-white/[0.02] border-b border-slate-200 dark:border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  <th className="px-8 py-5">Instructor</th>
                  <th className="px-8 py-5">Expertise</th>
                  <th className="px-8 py-5 text-center">Courses</th>
                  <th className="px-8 py-5">Revenue</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {[
                  {
                    name: "Dr. Sarah Jenkins",
                    email: "sarah.j@edulearn.com",
                    exp: ["Data Science", "Python"],
                    courses: 12,
                    rev: "$42,500",
                    status: "Verified",
                  },
                  {
                    name: "Marcus Thorne",
                    email: "m.thorne@design.io",
                    exp: ["UI/UX", "Figma"],
                    courses: 8,
                    rev: "$31,200",
                    status: "Pending",
                  },
                  {
                    name: "Elena Rodriguez",
                    email: "elena.rod@growth.com",
                    exp: ["Marketing", "SEO"],
                    courses: 15,
                    rev: "$58,900",
                    status: "Verified",
                  },
                ].map((inst, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shrink-0 overflow-hidden">
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${inst.name}`}
                            alt={inst.name}
                            className="size-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                            {inst.name}
                          </p>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {inst.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-wrap gap-2">
                        {inst.exp.map((e) => (
                          <span
                            key={e}
                            className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-lg border border-transparent dark:border-white/5"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center text-sm font-black text-slate-900 dark:text-white">
                      {inst.courses}
                    </td>
                    <td className="px-8 py-6 text-sm font-black text-emerald-500">
                      {inst.rev}
                    </td>
                    <td className="px-8 py-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border
                        ${
                          inst.status === "Verified"
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${
                            inst.status === "Verified"
                              ? "bg-emerald-500"
                              : "bg-amber-500 animate-pulse"
                          }`}
                        ></span>
                        {inst.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-slate-400 hover:text-emerald-500 transition-colors">
                        <span className="material-symbols-outlined">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Bottom Widgets --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Distribution Chart */}
          <div className="bg-white dark:bg-slate-900/40 p-6 md:p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/30 dark:shadow-none">
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-8">
              Course Distribution
            </h3>
            <div className="space-y-6">
              {[
                {
                  label: "Technology",
                  val: "75%",
                  color:
                    "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]",
                },
                {
                  label: "Design",
                  val: "45%",
                  color: "bg-purple-500",
                },
                {
                  label: "Business",
                  val: "32%",
                  color: "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]",
                },
                {
                  label: "Health",
                  val: "18%",
                  color: "bg-indigo-500",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2 group">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <span className="text-slate-900 dark:text-white">
                      {item.val}
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                      style={{ width: item.val }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Requests */}
          <div className="bg-white dark:bg-slate-900/40 p-6 md:p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/30 dark:shadow-none">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Pending Verifications
              </h3>
              <button className="text-emerald-500 text-[10px] font-black hover:underline uppercase tracking-widest">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Liam Hudson", time: "2h ago", initials: "LH" },
                { name: "Sophia Chen", time: "5h ago", initials: "SC" },
                { name: "Daniel Kim", time: "Yesterday", initials: "DK" },
              ].map((req, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 group hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-black text-slate-500">
                      {req.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {req.name}
                      </p>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mt-0.5">
                        {req.time}
                      </p>
                    </div>
                  </div>
                  <button className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-[10px] font-black rounded-xl uppercase tracking-wider shadow-md shadow-emerald-500/20 hover:scale-105 transition-all">
                    Review
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
