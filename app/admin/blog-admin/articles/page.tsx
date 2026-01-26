"use client";

import React from "react";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-earth-dark dark:text-[#f6f8f6] p-6 md:p-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 py-4 -mt-4 -mx-6 px-6 md:-mx-10 md:px-10 border-b border-[#e7f3eb] dark:border-[#1a2e21]">
        <div>
          <h1 className="text-2xl font-extrabold text-earth-dark dark:text-white">
            Articles
          </h1>
          <p className="text-xs text-earth-sage mt-1">
            Manage and publish editorial content
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Filters Section */}
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-earth-sage px-1">
                Category
              </label>
              <select className="bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-medium text-earth-dark dark:text-white px-4 py-2 min-w-[160px] focus:ring-primary focus:outline-none cursor-pointer">
                <option>All Categories</option>
                <option>Agriculture</option>
                <option>Fashion</option>
                <option>Circular Economy</option>
                <option>Renewable Energy</option>
                <option>Policy</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-earth-sage px-1">
                Status
              </label>
              <select className="bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] rounded-lg text-sm font-medium text-earth-dark dark:text-white px-4 py-2 min-w-[140px] focus:ring-primary focus:outline-none cursor-pointer">
                <option>All Statuses</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Review</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Moved 'Reset' here and you can place the 'Create' button here if needed later */}
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg">
                restart_alt
              </span>
              Reset Filters
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
                    Thumbnail
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Published Date
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-earth-sage uppercase tracking-wider">
                    Status
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
                    <div
                      className="size-12 rounded bg-cover bg-center border border-[#e7f3eb] dark:border-[#263d2e]"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXaBMFerDNKfbVcyhpRvu8Y2vjQgDU3QdgUG4K-ZQFJn3ydPA11aktDz--uOLev-zj3_kwzfucVEo_zQ_BVvkMZLabDbdBL3DxOke3w4CA2Ab8IY9J1xk2BuGUExz69FAWPwweJLlVfh2j58BkiyNwETBP31XXmp6lVH_yKGRT3f9LAFoTnves8KUdxte2kHuhX2syOz2w2pdpSQLjSXFcGO2R9gpSGdknG3PvyhIaHomMUrUhxtc7KLpnqStmMDut1UQ4wmGtDPg")',
                      }}
                    ></div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-sm text-earth-dark dark:text-white block max-w-xs truncate">
                      Future of Regenerative Agriculture
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-earth-sage dark:text-[#a0c4ab]">
                      Agriculture
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      Elena Woods
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-earth-sage">
                      Oct 12, 2023
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-primary"></span>
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined text-xl">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-xl">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div
                      className="size-12 rounded bg-cover bg-center border border-[#e7f3eb] dark:border-[#263d2e]"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqSWDQKWy86cnTfjxKzAdTOdn39qv7auqpJtsrk2qvF8LCMGorhQjHM_l_tQ3wCZ_sKmrSyW0yyFOgwOgsvxtIknu4C8udsZpoXDYzvz9lzioTDFg1QJNcNf5Km5b3W0apqgvsxy8oMGdWr3ZlI274a-PExxiqOOncUeDClzDzVijKBEb-P6YQ6bi5NUZTyFLfnMN_AyYNrNRJAb4L7pY6TEfqNdPcntBLxEtmRgW9Ra1I22_RqBYg9eQUhKD3MzA2-XX10yfPziI")',
                      }}
                    ></div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-sm text-earth-dark dark:text-white block max-w-xs truncate">
                      Circular Policy Frameworks 2024
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-earth-sage dark:text-[#a0c4ab]">
                      Policy
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      Marcus Thorne
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-earth-sage">—</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fef3c7] dark:bg-[#2d2514] text-[#d97706] text-[10px] font-bold uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-[#d97706]"></span>
                      Review
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined text-xl">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-xl">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div
                      className="size-12 rounded bg-cover bg-center border border-[#e7f3eb] dark:border-[#263d2e]"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3VMGcNI4PhS2Oj67oo6aNqqdF6QQlz5cgeXATGz19Nd85vyuj9mr9p5JmYEALu9Uh33mSJUHA1iJ3wYs8a5n1xsQL4lA57Hc7Tym_AzS_Zr1b7O6asvayDB0FtdaiIZ2-kjD3WeWiLd0cOMybFvIjrGMN4LfAUGXLdD8ToRuqRdUuA2F4eJLIBU5y6Jgt7CDa_cxgj9CsZVuiseEPhBacXixJyaKjUFaGMx9VZ4kMmpmzYZCnF08LLeK5FzGFG3VHX9hZF5_-Sos")',
                      }}
                    ></div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-sm text-earth-dark dark:text-white block max-w-xs truncate">
                      The Impact of Sustainable Fashion
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-earth-sage dark:text-[#a0c4ab]">
                      Fashion
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-earth-dark dark:text-white">
                      Sarah Jenkins
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-earth-sage">—</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e7f3eb] dark:bg-[#1a2e21] text-earth-sage text-[10px] font-bold uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-earth-sage"></span>
                      Draft
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Preview"
                      >
                        <span className="material-symbols-outlined text-xl">
                          visibility
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-primary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-xl">
                          edit
                        </span>
                      </button>
                      <button
                        className="p-2 text-earth-sage hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-xl">
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
          <div className="px-6 py-5 border-t border-[#e7f3eb] dark:border-[#263d2e] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#fcfdfc] dark:bg-[#1a2e21]/50">
            <span className="text-xs font-medium text-earth-sage">
              Showing{" "}
              <span className="text-earth-dark dark:text-white">1 - 3</span> of{" "}
              <span className="text-earth-dark dark:text-white">152</span>{" "}
              articles
            </span>
            <div className="flex items-center gap-2">
              <button className="size-8 flex items-center justify-center rounded border border-[#e7f3eb] dark:border-[#263d2e] text-earth-sage hover:bg-white dark:hover:bg-[#1d3324] transition-colors">
                <span className="material-symbols-outlined text-lg">
                  chevron_left
                </span>
              </button>
              <button className="size-8 rounded bg-primary text-earth-dark text-xs font-bold shadow-sm shadow-primary/20">
                1
              </button>
              <button className="size-8 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1d3324] text-earth-sage transition-colors">
                2
              </button>
              <button className="size-8 rounded border border-[#e7f3eb] dark:border-[#263d2e] text-xs font-bold hover:bg-white dark:hover:bg-[#1d3324] text-earth-sage transition-colors">
                3
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-[#e7f3eb] dark:border-[#263d2e] text-earth-sage hover:bg-white dark:hover:bg-[#1d3324] transition-colors">
                <span className="material-symbols-outlined text-lg">
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
