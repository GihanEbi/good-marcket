"use client";

import React from "react";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pb-12">
      {/* Page Header - Glassmorphic Sticky */}
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Editorial Hub
              </h1>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Manage and publish regenerative commerce content
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl text-sm font-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all">
            <span className="material-symbols-outlined text-xl">add_box</span>
            NEW ARTICLE
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10">
        {/* Filters Section */}
        <div className="mb-8 flex flex-col lg:flex-row items-end justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 px-1">
                Category
              </label>
              <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 px-4 py-3 min-w-[200px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer appearance-none shadow-sm transition-all">
                <option>All Categories</option>
                <option>Agriculture</option>
                <option>Fashion</option>
                <option>Circular Economy</option>
                <option>Renewable Energy</option>
                <option>Policy</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 px-1">
                Publishing Status
              </label>
              <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 px-4 py-3 min-w-[160px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer appearance-none shadow-sm transition-all">
                <option>All Statuses</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Review</option>
              </select>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 text-xs font-black text-slate-400 hover:text-rose-500 transition-colors uppercase tracking-widest mb-1 group">
            <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-500">
              restart_alt
            </span>
            Clear All Filters
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-white/[0.02] border-b border-slate-200 dark:border-white/5">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Media
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Article Details
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Category
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Status
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {[
                  {
                    title: "Future of Regenerative Agriculture",
                    cat: "Agriculture",
                    author: "Elena Woods",
                    date: "Oct 12, 2023",
                    status: "Published",
                    color: "emerald",
                    img: "1",
                  },
                  {
                    title: "Circular Policy Frameworks 2024",
                    cat: "Policy",
                    author: "Marcus Thorne",
                    date: "—",
                    status: "Review",
                    color: "amber",
                    img: "2",
                  },
                  {
                    title: "The Impact of Sustainable Fashion",
                    cat: "Fashion",
                    author: "Sarah Jenkins",
                    date: "—",
                    status: "Draft",
                    color: "slate",
                    img: "3",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-all"
                  >
                    <td className="px-8 py-6">
                      <div className="size-14 rounded-2xl bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10 overflow-hidden group-hover:scale-105 transition-transform">
                        <img
                          src={`https://api.dicebear.com/7.x/shapes/svg?seed=${row.title}`}
                          alt="thumb"
                          className="size-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                          {row.title}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 mt-1 flex items-center gap-2">
                          By{" "}
                          <span className="text-slate-600 dark:text-slate-300">
                            {row.author}
                          </span>
                          <span className="size-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                          {row.date !== "—" ? row.date : "Not Set"}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-lg border border-transparent dark:border-white/5">
                        {row.cat}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border
                        ${
                          row.status === "Published"
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            : row.status === "Review"
                              ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                              : "bg-slate-500/10 text-slate-500 border-slate-500/20"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${row.status === "Published" ? "bg-emerald-500 animate-pulse" : "bg-current opacity-50"}`}
                        ></span>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-1">
                        <button className="size-10 rounded-xl hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-500 transition-all">
                          <span className="material-symbols-outlined text-xl">
                            visibility
                          </span>
                        </button>
                        <button className="size-10 rounded-xl hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-500 transition-all">
                          <span className="material-symbols-outlined text-xl">
                            edit_square
                          </span>
                        </button>
                        <button className="size-10 rounded-xl hover:bg-rose-500/10 text-slate-400 hover:text-rose-500 transition-all">
                          <span className="material-symbols-outlined text-xl">
                            delete_sweep
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Wrapper */}
          <div className="px-8 py-6 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50/30 dark:bg-white/[0.01]">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
              Showing{" "}
              <span className="text-slate-900 dark:text-white">1 - 3</span> of
              152 Articles
            </span>
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
              <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
