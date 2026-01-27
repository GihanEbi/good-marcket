"use client";

import React from "react";

export default function ToolkitsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pb-12">
      {/* Page Header - Glassmorphic Sticky */}
      <div className="sticky top-0 z-20 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {/* Emerald Accent */}
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Admin CMS Toolkits
              </h1>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Manage and publish educational resources
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-10">
        {/* Filters and Actions */}
        <div className="mb-8 flex flex-col lg:flex-row items-end justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Active Filter - Green Gradient */}
            <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-transform hover:-translate-y-0.5">
              All Resources
            </button>
            <button className="px-5 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all uppercase tracking-wider">
              PDFs
            </button>
            <button className="px-5 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all uppercase tracking-wider">
              Videos
            </button>
            <button className="px-5 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all uppercase tracking-wider">
              Spreadsheets
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 px-1">
                Target User
              </label>
              {/* Focus Ring Emerald */}
              <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 px-4 py-3 min-w-[180px] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer appearance-none shadow-sm transition-all">
                <option>All Users</option>
                <option>Farmer</option>
                <option>SME</option>
                <option>Educator</option>
              </select>
            </div>

            <button className="flex items-center justify-center gap-2 px-6 py-3 mt-auto bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-black text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-emerald-600 transition-all uppercase tracking-widest w-full sm:w-auto h-[46px]">
              <span className="material-symbols-outlined text-lg">sort</span>
              Sort
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-white/[0.02] border-b border-slate-200 dark:border-white/5">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Toolkit Name
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Resource Type
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Target User
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Downloads
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Public Access
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {/* Row 1 */}
                <tr className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-all">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                        {/* Icon Emerald */}
                        <span className="material-symbols-outlined text-emerald-500">
                          menu_book
                        </span>
                      </div>
                      <div>
                        {/* Hover Text Emerald */}
                        <span className="font-bold text-sm text-slate-900 dark:text-white block group-hover:text-emerald-500 transition-colors">
                          Regenerative Soil Guide
                        </span>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                          Uploaded Oct 24, 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20 text-[10px] font-black uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">
                        picture_as_pdf
                      </span>{" "}
                      PDF
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      Farmer
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-1.5 text-xs font-black text-slate-500">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      1,245
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        {/* Toggle Checked Emerald */}
                        <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                      </label>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500">
                        Public
                      </span>
                    </div>
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

                {/* Row 2 */}
                <tr className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-all">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-emerald-500">
                          video_library
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-sm text-slate-900 dark:text-white block group-hover:text-emerald-500 transition-colors">
                          Circular Business Model
                        </span>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                          Uploaded Sep 12, 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 text-[10px] font-black uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">
                        play_circle
                      </span>{" "}
                      Video
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      SME
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-1.5 text-xs font-black text-slate-500">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      892
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                      </label>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Internal
                      </span>
                    </div>
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

                {/* Row 3 */}
                <tr className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-all">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-emerald-500">
                          table_chart
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-sm text-slate-900 dark:text-white block group-hover:text-emerald-500 transition-colors">
                          Impact Measurement
                        </span>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                          Uploaded Aug 05, 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">
                        description
                      </span>{" "}
                      XLSX
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      Educator
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-1.5 text-xs font-black text-slate-500">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      3,120
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                      </label>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500">
                        Public
                      </span>
                    </div>
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

                {/* Row 4 */}
                <tr className="group hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-all">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-emerald-500">
                          school
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-sm text-slate-900 dark:text-white block group-hover:text-emerald-500 transition-colors">
                          Sustainable Fabrics
                        </span>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1 block">
                          Uploaded July 18, 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20 text-[10px] font-black uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">
                        picture_as_pdf
                      </span>{" "}
                      PDF
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      SME
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-1.5 text-xs font-black text-slate-500">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      567
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                      </label>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500">
                        Public
                      </span>
                    </div>
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
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-6 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50/30 dark:bg-white/[0.01]">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
              Showing <span className="text-slate-900 dark:text-white">4</span>{" "}
              of 28 Resources
            </span>
            <div className="flex items-center gap-2">
              <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-400 hover:text-emerald-500 transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {/* Active Emerald */}
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
        </div>

        {/* Info Grid (Bottom Stats) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-slate-900/40 rounded-[1.5rem] border border-slate-200 dark:border-white/5 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-shadow">
            <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined text-2xl">
                visibility
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em]">
                Most Active User
              </p>
              <p className="text-lg font-black text-slate-900 dark:text-white mt-1">
                Farmers (42%)
              </p>
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900/40 rounded-[1.5rem] border border-slate-200 dark:border-white/5 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-shadow">
            <div className="size-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
              <span className="material-symbols-outlined text-2xl">
                storage
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em]">
                Storage Used
              </p>
              <p className="text-lg font-black text-slate-900 dark:text-white mt-1">
                1.2 GB / 5 GB
              </p>
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900/40 rounded-[1.5rem] border border-slate-200 dark:border-white/5 flex items-center gap-4 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-shadow">
            <div className="size-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
              <span className="material-symbols-outlined text-2xl">
                verified
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em]">
                Public Resources
              </p>
              <p className="text-lg font-black text-slate-900 dark:text-white mt-1">
                85% Live
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
