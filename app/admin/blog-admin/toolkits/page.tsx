"use client";

import React from "react";

export default function ToolkitsPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-earth-dark dark:text-[#f6f8f6] p-6 md:p-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 py-4 -mt-4 -mx-6 px-6 md:-mx-10 md:px-10 border-b border-[#e7f3eb] dark:border-[#1a2e21]">
        <div>
          <h1 className="text-2xl font-extrabold text-earth-dark dark:text-white">
            Admin CMS Toolkits List
          </h1>
          <p className="text-xs text-earth-sage mt-1">
            Manage and publish educational resources for the community
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Filters and Actions */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-bold text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors">
              All Resources
            </button>
            <button className="px-4 py-2 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-medium text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors">
              PDFs
            </button>
            <button className="px-4 py-2 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-medium text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors">
              Videos
            </button>
            <button className="px-4 py-2 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-medium text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors">
              Spreadsheets
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <select className="text-sm bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg px-3 py-2 text-earth-sage focus:ring-primary focus:outline-none w-full lg:w-auto cursor-pointer">
              <option>Target User: All</option>
              <option>Farmer</option>
              <option>SME</option>
              <option>Educator</option>
            </select>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-medium bg-white dark:bg-[#15291b] hover:bg-[#fcfdfc] dark:hover:bg-[#1d3324] w-full lg:w-auto transition-colors">
              <span className="material-symbols-outlined text-lg">sort</span>
              Sort
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
                    Toolkit Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Resource Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Target User
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Downloads
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Public Access
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7f3eb] dark:divide-[#263d2e]">
                {/* Row 1 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded bg-[#e7f3eb] dark:bg-[#1a2e21] flex items-center justify-center text-earth-sage">
                        <span className="material-symbols-outlined">
                          menu_book
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-sm text-earth-dark dark:text-white block">
                          Regenerative Soil Guide
                        </span>
                        <span className="text-[10px] text-earth-sage">
                          Uploaded Oct 24, 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">
                        picture_as_pdf
                      </span>{" "}
                      PDF
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      Farmer
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-earth-sage font-medium">
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      1,245
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                      <span className="text-xs font-medium text-earth-sage">
                        Public
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Download"
                      >
                        <span className="material-symbols-outlined text-lg">
                          download
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded bg-[#e7f3eb] dark:bg-[#1a2e21] flex items-center justify-center text-earth-sage">
                        <span className="material-symbols-outlined">
                          video_library
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-sm text-earth-dark dark:text-white block">
                          Circular Business Model Canvas
                        </span>
                        <span className="text-[10px] text-earth-sage">
                          Uploaded Sep 12, 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">
                        play_circle
                      </span>{" "}
                      Video
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      SME
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-earth-sage font-medium">
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      892
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                      <span className="text-xs font-medium text-earth-sage">
                        Internal
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Download"
                      >
                        <span className="material-symbols-outlined text-lg">
                          download
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded bg-[#e7f3eb] dark:bg-[#1a2e21] flex items-center justify-center text-earth-sage">
                        <span className="material-symbols-outlined">
                          table_chart
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-sm text-earth-dark dark:text-white block">
                          Impact Measurement Spreadsheet
                        </span>
                        <span className="text-[10px] text-earth-sage">
                          Uploaded Aug 05, 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">
                        description
                      </span>{" "}
                      XLSX
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      Educator
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-earth-sage font-medium">
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      3,120
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                      <span className="text-xs font-medium text-earth-sage">
                        Public
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Download"
                      >
                        <span className="material-symbols-outlined text-lg">
                          download
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded bg-[#e7f3eb] dark:bg-[#1a2e21] flex items-center justify-center text-earth-sage">
                        <span className="material-symbols-outlined">
                          school
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-sm text-earth-dark dark:text-white block">
                          Sustainable Fabric Guide
                        </span>
                        <span className="text-[10px] text-earth-sage">
                          Uploaded July 18, 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">
                        picture_as_pdf
                      </span>{" "}
                      PDF
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      SME
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-earth-sage font-medium">
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      567
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                      <span className="text-xs font-medium text-earth-sage">
                        Public
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Download"
                      >
                        <span className="material-symbols-outlined text-lg">
                          download
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
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
              Showing 4 of 28 toolkit resources
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-colors text-earth-sage dark:text-[#a0c4ab]">
                Prev
              </button>
              <button className="px-3.5 py-1.5 rounded bg-primary text-earth-dark text-xs font-extrabold shadow-sm">
                1
              </button>
              <button className="px-3.5 py-1.5 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-colors text-earth-sage dark:text-[#a0c4ab]">
                2
              </button>
              <button className="px-3.5 py-1.5 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-colors text-earth-sage dark:text-[#a0c4ab]">
                3
              </button>
              <button className="px-3 py-1.5 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1a2e21] transition-colors text-earth-sage dark:text-[#a0c4ab]">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Info Grid (Bottom Stats) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-[#15291b] rounded-xl border border-[#e7f3eb] dark:border-[#1a2e21] flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-earth-sage tracking-wider">
                Most Active User
              </p>
              <p className="text-sm font-bold text-earth-dark dark:text-white">
                Farmers (42%)
              </p>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-[#15291b] rounded-xl border border-[#e7f3eb] dark:border-[#1a2e21] flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <span className="material-symbols-outlined">storage</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-earth-sage tracking-wider">
                Storage Used
              </p>
              <p className="text-sm font-bold text-earth-dark dark:text-white">
                1.2 GB / 5 GB
              </p>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-[#15291b] rounded-xl border border-[#e7f3eb] dark:border-[#1a2e21] flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-earth-sage tracking-wider">
                Public Resource Ratio
              </p>
              <p className="text-sm font-bold text-earth-dark dark:text-white">
                85% Live
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
