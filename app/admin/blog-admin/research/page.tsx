"use client";

import React from "react";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-earth-dark dark:text-[#f6f8f6] p-6 md:p-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 py-4 -mt-4 -mx-6 px-6 md:-mx-10 md:px-10 border-b border-[#e7f3eb] dark:border-[#1a2e21]">
        <div>
          <h1 className="text-2xl font-extrabold text-earth-dark dark:text-white">
            Research
          </h1>
          <p className="text-xs text-earth-sage mt-1">
            Manage and review research publications
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 max-w-7xl mx-auto">
        {/* Filters Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1.5 w-full md:w-auto">
              <label className="text-[10px] font-bold uppercase text-earth-sage tracking-wider px-1">
                Research Area
              </label>
              <select className="bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-medium focus:ring-primary focus:border-primary py-2 px-4 min-w-[200px] outline-none cursor-pointer dark:text-white">
                <option>All Research Areas</option>
                <option>Circular Economy</option>
                <option>Regenerative Agriculture</option>
                <option>Waste Management</option>
                <option>Renewable Energy</option>
                <option>Social Impact</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button className="flex items-center gap-2 px-4 py-2 border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-all text-earth-dark dark:text-white">
              <span className="material-symbols-outlined text-lg">
                filter_list
              </span>
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-all text-earth-dark dark:text-white">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Export
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-[#15291b] rounded-xl border border-[#e7f3eb] dark:border-[#1a2e21] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-[#f6f8f6] dark:bg-[#1a2e21] border-b border-[#e7f3eb] dark:border-[#263d2e]">
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Research Title
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Lead Researcher
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider text-center">
                    Year
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider text-right">
                    Impact
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7f3eb] dark:divide-[#263d2e]">
                {/* Row 1 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-earth-sage/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-earth-sage">
                          description
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-earth-dark dark:text-white">
                          Soil Carbon Sequestration Patterns
                        </span>
                        <span className="text-xs text-earth-sage">
                          Regenerative Agriculture
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      Dr. Sarah Jenkins
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-xs">
                        verified
                      </span>
                      Verified
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-sm font-medium text-earth-sage">
                      2023
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-earth-dark dark:text-white">
                        1.2k
                      </span>
                      <span className="text-[10px] text-earth-sage uppercase font-bold tracking-tight">
                        Citations
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Manage"
                      >
                        <span className="material-symbols-outlined text-xl">
                          settings
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Download"
                      >
                        <span className="material-symbols-outlined text-xl">
                          download
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Archive"
                      >
                        <span className="material-symbols-outlined text-xl">
                          archive
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-earth-sage/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-earth-sage">
                          description
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-earth-dark dark:text-white">
                          Circular Plastics: Policy Analysis
                        </span>
                        <span className="text-xs text-earth-sage">
                          Waste Management
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      Marcus Thorne
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fef3c7] dark:bg-[#2d2514] text-[#d97706] text-[10px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-xs">
                        pending
                      </span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-sm font-medium text-earth-sage">
                      2024
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-earth-dark dark:text-white">
                        450
                      </span>
                      <span className="text-[10px] text-earth-sage uppercase font-bold tracking-tight">
                        Downloads
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Manage"
                      >
                        <span className="material-symbols-outlined text-xl">
                          settings
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Download"
                      >
                        <span className="material-symbols-outlined text-xl">
                          download
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Archive"
                      >
                        <span className="material-symbols-outlined text-xl">
                          archive
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-earth-sage/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-earth-sage">
                          description
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-earth-dark dark:text-white">
                          Renewable Grid Optimization Models
                        </span>
                        <span className="text-xs text-earth-sage">
                          Renewable Energy
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      Elena Woods
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-xs">
                        verified
                      </span>
                      Verified
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-sm font-medium text-earth-sage">
                      2022
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold text-earth-dark dark:text-white">
                        3.8k
                      </span>
                      <span className="text-[10px] text-earth-sage uppercase font-bold tracking-tight">
                        Citations
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Manage"
                      >
                        <span className="material-symbols-outlined text-xl">
                          settings
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Download"
                      >
                        <span className="material-symbols-outlined text-xl">
                          download
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Archive"
                      >
                        <span className="material-symbols-outlined text-xl">
                          archive
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-[#e7f3eb] dark:border-[#263d2e] flex flex-col sm:flex-row items-center justify-between bg-[#fcfdfc] dark:bg-[#1a2e21]/50 gap-4">
            <span className="text-xs text-earth-sage font-medium">
              Showing 3 of 84 research papers
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-all text-earth-sage hover:text-earth-dark dark:text-white">
                Prev
              </button>
              <button className="px-3 py-1.5 rounded bg-primary text-earth-dark text-xs font-bold shadow-sm">
                1
              </button>
              <button className="px-3 py-1.5 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-all text-earth-sage hover:text-earth-dark dark:text-white">
                2
              </button>
              <button className="px-3 py-1.5 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-all text-earth-sage hover:text-earth-dark dark:text-white">
                3
              </button>
              <button className="px-3 py-1.5 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-all text-earth-sage hover:text-earth-dark dark:text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
