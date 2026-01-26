"use client";

import React from "react";

export default function UserManagementPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-earth-dark dark:text-[#f6f8f6] p-6 md:p-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 py-4 -mt-4 -mx-6 px-6 md:-mx-10 md:px-10 border-b border-[#e7f3eb] dark:border-[#1a2e21]">
        <div>
          <h1 className="text-2xl font-extrabold text-earth-dark dark:text-white">
            User Management
          </h1>
          <p className="text-xs text-earth-sage mt-1">
            Manage and oversee platform users
          </p>
        </div>
      </div>
      {/* Main Content Scroll Area */}
      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full overflow-y-auto">
        {/* Filters Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-xs font-bold text-text-green uppercase">
              Role
            </label>
            <select className="bg-white dark:bg-border-dark border border-border-light dark:border-[#263d2e] rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-white h-10 px-3">
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="farmer">Farmer</option>
              <option value="vendor">Vendor</option>
              <option value="learner">Learner</option>
              <option value="trainer">Trainer</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-xs font-bold text-text-green uppercase">
              Status
            </label>
            <select className="bg-white dark:bg-border-dark border border-border-light dark:border-[#263d2e] rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-white h-10 px-3">
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="px-6 py-2 border border-border-light dark:border-border-dark rounded-lg text-sm font-bold hover:bg-white dark:hover:bg-border-dark transition-all h-10 bg-transparent dark:text-white cursor-pointer">
              Reset Filters
            </button>
          </div>
        </div>

        {/* Users Table Card */}
        <div className="bg-white dark:bg-[#15291b] rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-background-light dark:bg-border-dark border-b border-border-light dark:border-[#263d2e]">
                  <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light dark:divide-[#263d2e]">
                {/* User Row 1 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover border border-border-light dark:border-[#263d2e]"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzANguBe4G0nAYHaKaWicaO_TtdVcxo2m5DPYrAmNcNZPhu5wRkn7eKX1xnUC4Dy47wE0ywUcgnwjkgfzk22pcxYDbGuZLK1TAyhQVeguYFyPGBTUIG2M404yWLtpUw9gp_YOgpMVR3QgLuKOTg924QXb_r0t-FPKFjSGF_qfc6QxY7utUwnp3TQI_3QgMTa8xLFI0AReXQNz_JKJSmyBvyI5CPi18LFs6v-HRqw1hf8i1ZaPVYfRZB74u0whVDgafTkNkzPl7w64")',
                        }}
                      ></div>
                      <span className="font-bold text-sm text-text-main dark:text-white">
                        Admin Team
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      admin@goodmarket.org
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-border-light dark:bg-border-dark text-text-main dark:text-white uppercase tracking-tight">
                      Admin
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-primary"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      2 hours ago
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>

                {/* User Row 2 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover border border-border-light dark:border-[#263d2e]"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXaBMFerDNKfbVcyhpRvu8Y2vjQgDU3QdgUG4K-ZQFJn3ydPA11aktDz--uOLev-zj3_kwzfucVEo_zQ_BVvkMZLabDbdBL3DxOke3w4CA2Ab8IY9J1xk2BuGUExz69FAWPwweJLlVfh2j58BkiyNwETBP31XXmp6lVH_yKGRT3f9LAFoTnves8KUdxte2kHuhX2syOz2w2pdpSQLjSXFcGO2R9gpSGdknG3PvyhIaHomMUrUhxtc7KLpnqStmMDut1UQ4wmGtDPg")',
                        }}
                      ></div>
                      <span className="font-bold text-sm text-text-main dark:text-white">
                        Elena Woods
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      elena.w@ecogrow.com
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-[#fef3c7] dark:bg-[#2d2514] text-[#d97706] uppercase tracking-tight">
                      Farmer
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-primary"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      Oct 24, 2023
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>

                {/* User Row 3 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover border border-border-light dark:border-[#263d2e]"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqSWDQKWy86cnTfjxKzAdTOdn39qv7auqpJtsrk2qvF8LCMGorhQjHM_l_tQ3wCZ_sKmrSyW0yyFOgwOgsvxtIknu4C8udsZpoXDYzvz9lzioTDFg1QJNcNf5Km5b3W0apqgvsxy8oMGdWr3ZlI274a-PExxiqOOncUeDClzDzVijKBEb-P6YQ6bi5NUZTyFLfnMN_AyYNrNRJAb4L7pY6TEfqNdPcntBLxEtmRgW9Ra1I22_RqBYg9eQUhKD3MzA2-XX10yfPziI")',
                        }}
                      ></div>
                      <span className="font-bold text-sm text-text-main dark:text-white">
                        Marcus Thorne
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      m.thorne@market.ly
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-[#e0f2fe] dark:bg-[#142631] text-[#0284c7] uppercase tracking-tight">
                      Vendor
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#fef3c7] dark:bg-[#2d2514] text-[#d97706] text-[10px] font-bold uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-[#d97706]"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      Never
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>

                {/* User Row 4 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover border border-border-light dark:border-[#263d2e]"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3VMGcNI4PhS2Oj67oo6aNqqdF6QQlz5cgeXATGz19Nd85vyuj9mr9p5JmYEALu9Uh33mSJUHA1iJ3wYs8a5n1xsQL4lA57Hc7Tym_AzS_Zr1b7O6asvayDB0FtdaiIZ2-kjD3WeWiLd0cOMybFvIjrGMN4LfAUGXLdD8ToRuqRdUuA2F4eJLIBU5y6Jgt7CDa_cxgj9CsZVuiseEPhBacXixJyaKjUFaGMx9VZ4kMmpmzYZCnF08LLeK5FzGFG3VHX9hZF5_-Sos")',
                        }}
                      ></div>
                      <span className="font-bold text-sm text-text-main dark:text-white">
                        Sarah Jenkins
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      sarah.j@edu.org
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-[#ede9fe] dark:bg-[#261c3c] text-[#7c3aed] uppercase tracking-tight">
                      Trainer
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#fee2e2] dark:bg-[#3b1c1c] text-[#ef4444] text-[10px] font-bold uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-[#ef4444]"></span>
                      Suspended
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      Sep 12, 2023
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>

                {/* User Row 5 */}
                <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="size-10 rounded-full bg-cover border border-border-light dark:border-[#263d2e]"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXaBMFerDNKfbVcyhpRvu8Y2vjQgDU3QdgUG4K-ZQFJn3ydPA11aktDz--uOLev-zj3_kwzfucVEo_zQ_BVvkMZLabDbdBL3DxOke3w4CA2Ab8IY9J1xk2BuGUExz69FAWPwweJLlVfh2j58BkiyNwETBP31XXmp6lVH_yKGRT3f9LAFoTnves8KUdxte2kHuhX2syOz2w2pdpSQLjSXFcGO2R9gpSGdknG3PvyhIaHomMUrUhxtc7KLpnqStmMDut1UQ4wmGtDPg")',
                        }}
                      ></div>
                      <span className="font-bold text-sm text-text-main dark:text-white">
                        Liam Patel
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      l.patel@student.com
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-[#dcfce7] dark:bg-[#1a2e21] text-text-green uppercase tracking-tight">
                      Learner
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      <span className="size-1.5 rounded-full bg-primary"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-green dark:text-text-green-light">
                      Yesterday
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-lg">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-border-light dark:border-border-dark flex items-center justify-between bg-[#fcfdfc] dark:bg-border-dark/50">
            <span className="text-xs text-text-green">
              Showing 5 of 1,240 users
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded border border-border-light dark:border-border-dark text-xs font-bold hover:bg-white dark:hover:bg-border-dark transition-colors cursor-pointer">
                Prev
              </button>
              <button className="px-3 py-1 rounded bg-primary text-text-main text-xs font-bold">
                1
              </button>
              <button className="px-3 py-1 rounded border border-border-light dark:border-border-dark text-xs font-bold hover:bg-white dark:hover:bg-border-dark transition-colors cursor-pointer">
                2
              </button>
              <button className="px-3 py-1 rounded border border-border-light dark:border-border-dark text-xs font-bold hover:bg-white dark:hover:bg-border-dark transition-colors cursor-pointer">
                3
              </button>
              <button className="px-3 py-1 rounded border border-border-light dark:border-border-dark text-xs font-bold hover:bg-white dark:hover:bg-border-dark transition-colors cursor-pointer">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
