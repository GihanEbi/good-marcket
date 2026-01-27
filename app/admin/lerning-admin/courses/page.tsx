"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdminCourseCatalog() {
  const [activeTab, setActiveTab] = useState("All Courses");

  const courses = [
    {
      title: "Advanced React Frameworks",
      instructor: "Dr. Sarah Jenkins",
      category: "Development",
      duration: "12h 30m",
      rating: "4.9",
      reviews: "2.4k",
      enrollment: "12,482",
      status: "Published",
      color: "blue",
    },
    {
      title: "Machine Learning Basics",
      instructor: "Prof. David Chen",
      category: "AI & Data",
      duration: "18h 45m",
      rating: "--",
      reviews: "0",
      enrollment: "0",
      status: "Under Review",
      color: "purple",
    },
    {
      title: "Creative Typography",
      instructor: "Elena Rodriguez",
      category: "Design",
      duration: "4h 15m",
      rating: "4.7",
      reviews: "128",
      enrollment: "542",
      status: "Draft",
      color: "rose",
    },
    {
      title: "Digital Marketing Mastery",
      instructor: "Marcus Thorne",
      category: "Business",
      duration: "10h 00m",
      rating: "4.8",
      reviews: "4.1k",
      enrollment: "8,930",
      status: "Published",
      color: "emerald",
    },
  ];

  return (
    <div className="flex-1 min-h-screen bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500">
      <main className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* --- Page Title & Tabs --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Course Catalog
              </h2>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-4">
              Review, moderate, and organize all platform learning content
            </p>
          </div>

          <div className="flex bg-white dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm w-fit overflow-x-auto no-scrollbar">
            {["All Courses", "Active", "Review", "Drafts"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md shadow-emerald-500/20"
                    : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- Course Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-900/40 rounded-[2rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-xl shadow-slate-200/30 dark:shadow-none hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                {/* Placeholder for images with Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>

                {/* Simulated Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url('https://api.dicebear.com/7.x/shapes/svg?seed=${course.title}')`,
                  }}
                ></div>

                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm text-white border border-white/10 backdrop-blur-md
                    ${course.status === "Published" ? "bg-emerald-500/90" : ""}
                    ${course.status === "Under Review" ? "bg-amber-500/90" : ""}
                    ${course.status === "Draft" ? "bg-slate-500/90" : ""}
                  `}
                  >
                    {course.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider
                    ${
                      course.color === "blue"
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        : ""
                    }
                    ${
                      course.color === "purple"
                        ? "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
                        : ""
                    }
                    ${
                      course.color === "rose"
                        ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
                        : ""
                    }
                    ${
                      course.color === "emerald"
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : ""
                    }
                  `}
                  >
                    {course.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    • {course.duration}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight mb-2 group-hover:text-emerald-500 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-6">
                  <span className="material-symbols-outlined text-[16px] text-slate-400">
                    person
                  </span>
                  {course.instructor}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-amber-400 fill-[1]">
                      star
                    </span>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-200">
                      {course.rating}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider leading-none mb-1">
                      Students
                    </p>
                    <p className="text-sm font-black text-slate-900 dark:text-white">
                      {course.enrollment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Pagination --- */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-slate-200 dark:border-white/5 mt-8">
          <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
            Showing <span className="text-slate-900 dark:text-white">6</span> of{" "}
            <span className="text-slate-900 dark:text-white">842</span> courses
          </p>
          <div className="flex items-center gap-2">
            <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 rounded-xl bg-emerald-500 text-white text-xs font-black shadow-lg shadow-emerald-500/20">
              1
            </button>
            <button className="size-10 rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 text-xs font-black transition-all">
              2
            </button>
            <button className="size-10 rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 text-xs font-black transition-all">
              3
            </button>
            <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
