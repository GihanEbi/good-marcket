"use client";

import React from "react";

export default function AdminDashboardPage() {
  return (
    <div className="flex-1 min-h-screen bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500">
      <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
        {/* --- Executive Overview Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Executive Overview
              </h2>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-4">
              Platform growth and instructor performance analytics
            </p>
          </div>
          <div className="flex items-center gap-1 bg-white dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm w-fit">
            <button className="px-5 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md shadow-emerald-500/20">
              30 Days
            </button>
            <button className="px-5 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              90 Days
            </button>
            <button className="px-5 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              1 Year
            </button>
          </div>
        </div>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              label: "Total Students",
              value: "12,482",
              trend: "+5.2%",
              color: "emerald",
              icon: "group",
            },
            {
              label: "Instructors",
              value: "1,204",
              trend: "+1.8%",
              color: "cyan",
              icon: "badge",
            },
            {
              label: "Total Courses",
              value: "842",
              trend: "Stable",
              color: "amber",
              icon: "menu_book",
            },
            {
              label: "Revenue",
              value: "$45,210",
              trend: "+12%",
              color: "indigo",
              icon: "payments",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900/40 p-6 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/40 dark:shadow-none hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`size-12 rounded-2xl flex items-center justify-center border border-transparent 
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
                    stat.color === "indigo"
                      ? "bg-indigo-500/10 text-indigo-500 border-indigo-500/10"
                      : ""
                  }
                `}
                >
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <span
                  className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-lg 
                  ${
                    stat.trend.includes("+")
                      ? "text-emerald-500 bg-emerald-500/10"
                      : stat.trend === "Stable"
                        ? "text-amber-500 bg-amber-500/10"
                        : "text-slate-400 bg-slate-100 dark:bg-white/5"
                  }
                `}
                >
                  {stat.trend}
                </span>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
              <p className="text-3xl font-black mt-2 text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </p>

              {/* Mini Charts */}
              <div className="mt-4 h-10 w-full opacity-60">
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 30"
                >
                  {/* Gradient Defs included locally for isolation */}
                  <defs>
                    <linearGradient
                      id={`grad-${i}`}
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        stopOpacity="0.2"
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 25 Q10 20, 20 22 T40 15 T60 18 T80 5 T100 10 V30 H0 Z"
                    fill={`url(#grad-${i})`}
                    className={
                      stat.color === "emerald"
                        ? "text-emerald-500"
                        : stat.color === "cyan"
                          ? "text-cyan-500"
                          : stat.color === "amber"
                            ? "text-amber-500"
                            : "text-indigo-500"
                    }
                  />
                  <path
                    d="M0 25 Q10 20, 20 22 T40 15 T60 18 T80 5 T100 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={
                      stat.color === "emerald"
                        ? "text-emerald-500"
                        : stat.color === "cyan"
                          ? "text-cyan-500"
                          : stat.color === "amber"
                            ? "text-amber-500"
                            : "text-indigo-500"
                    }
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* --- User Acquisition Trend Chart --- */}
        <div className="bg-white dark:bg-slate-900/40 p-5 md:p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                User Acquisition Trends
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Total Users
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Active Daily
                  </span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-white/10 rounded-xl text-[10px] font-black hover:bg-slate-50 dark:hover:bg-white/5 hover:text-emerald-500 transition-colors uppercase tracking-widest">
              Export Data{" "}
              <span className="material-symbols-outlined text-base">
                download
              </span>
            </button>
          </div>

          <div className="h-[250px] md:h-[320px] w-full relative">
            {/* Chart SVG */}
            <svg
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1000 300"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Fill Area */}
              <path
                d="M0 250 L0 180 Q100 160 200 190 T400 140 T600 160 T800 100 T1000 120 L1000 300 L0 300 Z"
                fill="url(#chartGradient)"
              />
              {/* Main Line (Emerald) */}
              <path
                d="M0 180 Q100 160 200 190 T400 140 T600 160 T800 100 T1000 120"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_4px_6px_rgba(16,185,129,0.3)]"
              />
              {/* Secondary Line (Slate - Dashed) */}
              <path
                d="M0 220 Q100 210 200 230 T400 190 T600 210 T800 160 T1000 180"
                fill="none"
                stroke="currentColor"
                strokeDasharray="8 8"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-slate-300 dark:text-slate-700"
              />
            </svg>

            {/* X-Axis Labels */}
            <div className="flex justify-between mt-6 px-2 text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
              <span>SEP 01</span>
              <span className="hidden md:block">SEP 10</span>
              <span className="hidden md:block">SEP 20</span>
              <span>Today</span>
            </div>
          </div>
        </div>

        {/* --- Bottom Grid: Courses & Activity --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Top Performing Courses */}
          <div className="bg-white dark:bg-slate-900/40 p-6 md:p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/30 dark:shadow-none">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Top Performing Courses
              </h3>
              <button className="text-emerald-500 text-[10px] font-black hover:text-emerald-600 hover:underline uppercase tracking-widest">
                View Detailed List
              </button>
            </div>
            <div className="space-y-7">
              {[
                {
                  name: "AI Fundamentals",
                  count: "2.4k",
                  progress: 85,
                  color:
                    "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]",
                },
                {
                  name: "Modern UI Design",
                  count: "1.8k",
                  progress: 65,
                  color: "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]",
                },
                {
                  name: "Data Science 101",
                  count: "1.2k",
                  progress: 45,
                  color: "bg-indigo-500",
                },
                {
                  name: "React Patterns",
                  count: "940",
                  progress: 35,
                  color: "bg-slate-400 dark:bg-slate-600",
                },
              ].map((course, i) => (
                <div key={i} className="space-y-2 group">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-emerald-500 transition-colors">
                      {course.name}
                    </span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                      {course.count} Enrolled
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${course.color} transition-all duration-1000 relative`}
                      style={{ width: `${course.progress}%` }}
                    >
                      {/* Shine effect on progress bar */}
                      <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white dark:bg-slate-900/40 p-6 md:p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/30 dark:shadow-none">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Platform Activity
              </h3>
              <button className="size-8 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  filter_list
                </span>
              </button>
            </div>

            {/* Timeline Container */}
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-slate-100 before:via-slate-100 before:to-transparent dark:before:from-slate-800 dark:before:via-slate-800">
              {[
                {
                  title: "New Instructor Onboarded",
                  time: "2 mins ago",
                  icon: "person_add",
                  color:
                    "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
                },
                {
                  title: "Course 'Python 101' Approved",
                  time: "45 mins ago",
                  icon: "verified",
                  color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
                },
                {
                  title: "Revenue Milestone Reached",
                  time: "3 hours ago",
                  icon: "stars",
                  color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
                },
                {
                  title: "Student Support Ticket #234",
                  time: "5 hours ago",
                  icon: "report",
                  color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
                },
              ].map((activity, i) => (
                <div key={i} className="relative flex items-center gap-5 group">
                  <div
                    className={`size-10 rounded-xl flex items-center justify-center shrink-0 z-10 border-2 shadow-sm ${activity.color} transition-transform group-hover:scale-110`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {activity.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                    <p className="text-sm font-bold truncate text-slate-700 dark:text-slate-200">
                      {activity.title}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-black uppercase tracking-wider">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
