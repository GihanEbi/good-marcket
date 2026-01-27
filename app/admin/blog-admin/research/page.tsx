"use client";

import React from "react";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pb-12">
      {/* Page Header - Glassmorphic Sticky */}
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {/* Changed from Blue to Emerald */}
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Research Archive
              </h1>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Manage and review scientific publications
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Secondary Button - kept neutral but sharpened borders to match Article theme */}
            <button className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-2xl text-sm font-black border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-xl">
                download
              </span>
              EXPORT CSV
            </button>
            {/* Primary Button - Updated to Emerald/Cyan Gradient */}
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl text-sm font-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all">
              <span className="material-symbols-outlined text-xl">
                upload_file
              </span>
              NEW PAPER
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10">
        {/* Filters Section */}
        <div className="mb-8 flex flex-col lg:flex-row items-end justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 px-1">
                Research Area
              </label>
              {/* Updated Focus Ring to Emerald */}
              <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 px-4 py-3 min-w-[240px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer appearance-none shadow-sm transition-all">
                <option>All Research Areas</option>
                <option>Circular Economy</option>
                <option>Regenerative Agriculture</option>
                <option>Waste Management</option>
                <option>Renewable Energy</option>
                <option>Social Impact</option>
              </select>
            </div>
          </div>

          {/* Updated Hover color to Emerald */}
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-black text-slate-400 hover:text-emerald-500 transition-colors uppercase tracking-widest mb-1 group">
            <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-500">
              filter_list
            </span>
            Advanced Filters
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-white/[0.02] border-b border-slate-200 dark:border-white/5">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Publication
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Lead Researcher
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] text-center">
                    Year
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
                    title: "Soil Carbon Sequestration Patterns",
                    area: "Regenerative Agriculture",
                    lead: "Dr. Sarah Jenkins",
                    year: "2023",
                    status: "Verified",
                  },
                  {
                    title: "Circular Plastics: Policy Analysis",
                    area: "Waste Management",
                    lead: "Marcus Thorne",
                    year: "2024",
                    status: "Pending",
                  },
                  {
                    title: "Renewable Grid Optimization Models",
                    area: "Renewable Energy",
                    lead: "Elena Woods",
                    year: "2022",
                    status: "Verified",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-all"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        {/* Icon Container - Style matched to Article Image container, Icon color to Emerald */}
                        <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-emerald-500">
                            description
                          </span>
                        </div>
                        <div className="flex flex-col">
                          {/* Hover Text Color -> Emerald */}
                          <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                            {row.title}
                          </span>
                          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">
                            {row.area}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        {row.lead}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center text-sm font-black text-slate-400">
                      {row.year}
                    </td>
                    <td className="px-8 py-6">
                      {/* Status Badge - Updated Colors to Emerald for Verified */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border
                        ${
                          row.status === "Verified"
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${
                            row.status === "Verified"
                              ? "bg-emerald-500"
                              : "bg-amber-500 animate-pulse"
                          }`}
                        ></span>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      {/* Actions - Updated Hover Colors to match Article Actions (Emerald/Cyan/Rose) */}
                      <div className="flex justify-end gap-1">
                        <button className="size-10 rounded-xl hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-500 transition-all">
                          <span className="material-symbols-outlined text-xl">
                            settings
                          </span>
                        </button>
                        <button className="size-10 rounded-xl hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-500 transition-all">
                          <span className="material-symbols-outlined text-xl">
                            cloud_download
                          </span>
                        </button>
                        <button className="size-10 rounded-xl hover:bg-rose-500/10 text-slate-400 hover:text-rose-500 transition-all">
                          <span className="material-symbols-outlined text-xl">
                            archive
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Wrapper - Updated Active State to Emerald */}
          <div className="px-8 py-6 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50/30 dark:bg-white/[0.01]">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
              Showing{" "}
              <span className="text-slate-900 dark:text-white">1 - 3</span> of
              84 Papers
            </span>
            <div className="flex items-center gap-2">
              <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {/* Active Page: Blue -> Emerald */}
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
