"use client";

import React from "react";

export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
      {/* Stats Overview */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Content Overview
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Real-time performance of your knowledge hub.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-lg">add</span>
            New Article
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Published */}
          <div className="group relative bg-white dark:bg-slate-900/50 p-6 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all hover:border-emerald-500/30">
            <div className="absolute top-0 right-0 size-24 bg-emerald-500/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="size-12 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                +12.5%
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px]">
              Published Articles
            </p>
            <h3 className="text-4xl font-black mt-1 text-slate-900 dark:text-white tracking-tighter">
              1,284
            </h3>
          </div>

          {/* Card 2: Pending */}
          <div className="group relative bg-white dark:bg-slate-900/50 p-6 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all hover:border-amber-500/30">
            <div className="absolute top-0 right-0 size-24 bg-amber-500/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="size-12 bg-amber-100 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                <span className="material-symbols-outlined">
                  pending_actions
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-amber-500/10 rounded-full">
                <span className="size-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase">
                  Attention
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px]">
              Pending Reviews
            </p>
            <h3 className="text-4xl font-black mt-1 text-slate-900 dark:text-white tracking-tighter">
              42
            </h3>
          </div>

          {/* Card 3: Downloads */}
          <div className="group relative bg-white dark:bg-slate-900/50 p-6 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all hover:border-cyan-500/30">
            <div className="absolute top-0 right-0 size-24 bg-cyan-500/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="size-12 bg-cyan-100 dark:bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <span className="material-symbols-outlined">
                  cloud_download
                </span>
              </div>
              <span className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 px-3 py-1 rounded-full uppercase tracking-widest">
                Live Stats
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[10px]">
              Total Downloads
            </p>
            <h3 className="text-4xl font-black mt-1 text-slate-900 dark:text-white tracking-tighter">
              45.2k
            </h3>
          </div>
        </div>
      </section>

      {/* Recent Content Table */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
            Recent Content Hub
          </h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-sm">
                filter_list
              </span>
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-sm">
                swap_vert
              </span>
              Sort
            </button>
          </div>
        </div>

        <div className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-white/[0.02] border-b border-slate-200 dark:border-white/5">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Title
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Category
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                    Author
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
                    status: "Published",
                    color: "emerald",
                    img: "1",
                  },
                  {
                    title: "Circular Policy Frameworks 2024",
                    cat: "Policy",
                    author: "Marcus Thorne",
                    status: "Review",
                    color: "amber",
                    img: "2",
                  },
                  {
                    title: "Mapping Supply Chain Transparency",
                    cat: "Research",
                    author: "Sarah Jenkins",
                    status: "Draft",
                    color: "slate",
                    img: "3",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-slate-200 dark:bg-slate-800 shrink-0 overflow-hidden border border-slate-200 dark:border-white/10">
                          <img
                            src={`https://api.dicebear.com/7.x/shapes/svg?seed=${row.title}`}
                            alt="cover"
                            className="size-full object-cover"
                          />
                        </div>
                        <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                          {row.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-lg">
                        {row.cat}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div
                          className="size-6 rounded-full bg-slate-300 bg-cover"
                          style={{
                            backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${row.author})`,
                          }}
                        ></div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {row.author}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                        ${
                          row.status === "Published"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : row.status === "Review"
                              ? "bg-amber-500/10 text-amber-500"
                              : "bg-slate-500/10 text-slate-500"
                        }`}
                      >
                        <span
                          className={`size-1.5 rounded-full animate-pulse ${row.status === "Published" ? "bg-emerald-500" : row.status === "Review" ? "bg-amber-500" : "bg-slate-500"}`}
                        ></span>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end gap-1">
                        <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-all">
                          <span className="material-symbols-outlined text-lg">
                            visibility
                          </span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-cyan-500 hover:bg-cyan-500/10 rounded-lg transition-all">
                          <span className="material-symbols-outlined text-lg">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all">
                          <span className="material-symbols-outlined text-lg">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-6 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/30 dark:bg-white/[0.01]">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Showing 3 of 152 items
            </span>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-white dark:hover:bg-white/5 transition-all">
                Prev
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`size-9 rounded-xl text-xs font-black transition-all ${n === 1 ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
                >
                  {n}
                </button>
              ))}
              <button className="px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-white dark:hover:bg-white/5 transition-all">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
