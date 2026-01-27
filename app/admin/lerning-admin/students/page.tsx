"use client";

import React from "react";

export default function StudentManagementPage() {
  return (
    <div className="flex-1 min-h-screen bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* --- Page Header & Search --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Student Management
              </h2>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-4">
              Manage, monitor, and support your global student community
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:min-w-[300px]">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                search
              </span>
              {/* Updated Focus Ring to Emerald */}
              <input
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all placeholder:font-medium placeholder:text-slate-400"
                placeholder="Search by name, email or ID..."
                type="text"
              />
            </div>
            {/* Primary Action Button - Gradient */}
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl text-sm font-black hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all">
              <span className="material-symbols-outlined text-[20px]">
                person_add
              </span>
              Add Student
            </button>
          </div>
        </div>

        {/* --- Action Cards --- */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-black text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500/30 transition-all uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-black text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/30 transition-all uppercase tracking-wider">
            <span className="material-symbols-outlined text-[18px]">
              campaign
            </span>
            Send Announcement
          </button>
        </div>

        {/* --- Quick Stats Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Active Students",
              value: "8,432",
              icon: "group",
              color: "emerald",
            },
            {
              label: "Avg. Completion",
              value: "76.4%",
              icon: "trending_up",
              color: "cyan",
            },
            {
              label: "New Enrolled",
              value: "124",
              icon: "history",
              color: "amber",
            },
            {
              label: "Suspended",
              value: "12",
              icon: "block",
              color: "rose",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900/40 p-5 rounded-[1.5rem] border border-slate-200 dark:border-white/5 flex items-center gap-4 shadow-xl shadow-slate-200/30 dark:shadow-none hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className={`size-12 rounded-xl flex items-center justify-center shrink-0 border border-transparent
                ${
                  stat.color === "emerald"
                    ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/10"
                    : ""
                }
                ${
                  stat.color === "cyan"
                    ? "bg-cyan-500/10 text-cyan-500 border-cyan-500/10"
                    : ""
                }
                ${
                  stat.color === "amber"
                    ? "bg-amber-500/10 text-amber-500 border-amber-500/10"
                    : ""
                }
                ${
                  stat.color === "rose"
                    ? "bg-rose-500/10 text-rose-500 border-rose-500/10"
                    : ""
                }
              `}
              >
                <span className="material-symbols-outlined text-2xl">
                  {stat.icon}
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
                <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Main Table Section --- */}
        <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
          {/* Table Filters */}
          <div className="p-6 border-b border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-white/5 rounded-xl w-full md:w-fit">
              <button className="flex-1 md:flex-none px-5 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm">
                All Students
              </button>
              <button className="flex-1 md:flex-none px-5 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                Recently Active
              </button>
              <button className="flex-1 md:flex-none px-5 py-2 text-[10px] font-black uppercase tracking-wider rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                At Risk
              </button>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-emerald-500 transition-colors uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">
                  filter_list
                </span>{" "}
                Filter
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-emerald-500 transition-colors uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">
                  sort
                </span>{" "}
                Sort
              </button>
            </div>
          </div>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-white/[0.02] border-b border-slate-200 dark:border-white/5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                  <th className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <input
                        className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 dark:bg-white/5 dark:border-white/10"
                        type="checkbox"
                      />
                      Profile
                    </div>
                  </th>
                  <th className="px-8 py-5">Enrollment Date</th>
                  <th className="px-8 py-5">Active Courses</th>
                  <th className="px-8 py-5">Progress</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {[
                  {
                    name: "Emma Thompson",
                    email: "emma.t@example.com",
                    date: "Sep 12, 2023",
                    progress: 85,
                    status: "Active",
                    color: "bg-emerald-500",
                  },
                  {
                    name: "Marcus Chen",
                    email: "m.chen@example.com",
                    date: "Aug 28, 2023",
                    progress: 42,
                    status: "Pending",
                    color: "bg-amber-500",
                  },
                  {
                    name: "Sophia Rodriguez",
                    email: "sophia.r@example.com",
                    date: "Oct 05, 2023",
                    progress: 12,
                    status: "Suspended",
                    color: "bg-rose-500",
                  },
                  {
                    name: "James Wilson",
                    email: "j.wilson@example.com",
                    date: "Sep 20, 2023",
                    progress: 92,
                    status: "Active",
                    color: "bg-emerald-500",
                  },
                ].map((student, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <input
                          className="rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 dark:bg-white/5 dark:border-white/10"
                          type="checkbox"
                        />
                        <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shrink-0 overflow-hidden">
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                            alt={student.name}
                            className="size-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                            {student.name}
                          </p>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {student.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xs font-bold text-slate-500 dark:text-slate-400">
                      {student.date}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex -space-x-2">
                        {["AI", "UI", "+2"].map((tag, idx) => (
                          <div
                            key={idx}
                            className={`size-8 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[9px] font-black uppercase
                            ${
                              tag === "AI"
                                ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400"
                                : tag === "UI"
                                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                  : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                            }`}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="w-32">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-black text-slate-400">
                            {student.progress}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${student.color} transition-all duration-1000`}
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border
                        ${
                          student.status === "Active"
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            : student.status === "Pending"
                              ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                              : "bg-rose-500/10 text-rose-500 border-rose-500/20"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${
                            student.status === "Active"
                              ? "bg-emerald-500 animate-pulse"
                              : student.status === "Pending"
                                ? "bg-amber-500"
                                : "bg-rose-500"
                          }`}
                        ></span>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="size-8 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-emerald-500 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-6 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50/30 dark:bg-white/[0.01]">
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
              Showing <span className="text-slate-900 dark:text-white">1</span>{" "}
              to <span className="text-slate-900 dark:text-white">10</span> of{" "}
              <span className="text-slate-900 dark:text-white">8,432</span>{" "}
              students
            </p>
            <div className="flex items-center gap-2">
              <button
                className="size-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all disabled:opacity-30 disabled:hover:text-slate-400"
                disabled
              >
                <span className="material-symbols-outlined text-[18px]">
                  chevron_left
                </span>
              </button>
              <button className="size-9 flex items-center justify-center rounded-xl bg-emerald-500 text-white text-xs font-black shadow-lg shadow-emerald-500/20">
                1
              </button>
              <button className="size-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all text-xs font-black">
                2
              </button>
              <button className="size-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all text-xs font-black">
                3
              </button>
              <span className="px-2 text-slate-400 font-black text-xs">
                ...
              </span>
              <button className="size-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
