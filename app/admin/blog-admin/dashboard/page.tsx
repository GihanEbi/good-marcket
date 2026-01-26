export default function AdminDashboard() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Stats Overview */}
      <section className="mb-10">
        <h2 className="text-lg font-bold mb-6 text-text-main dark:text-white">
          Content Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#15291b] p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-border-light dark:bg-border-dark rounded-lg text-text-green">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                +12%
              </span>
            </div>
            <p className="text-sm text-text-green dark:text-text-green-light font-medium">
              Published Articles
            </p>
            <h3 className="text-3xl font-extrabold mt-1 text-text-main dark:text-white">
              1,284
            </h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#15291b] p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-[#fef3c7] dark:bg-[#2d2514] rounded-lg text-[#d97706]">
                <span className="material-symbols-outlined">
                  pending_actions
                </span>
              </div>
              <span className="text-xs font-bold text-[#d97706] bg-[#fef3c7]/50 px-2 py-1 rounded">
                Action Required
              </span>
            </div>
            <p className="text-sm text-text-green dark:text-text-green-light font-medium">
              Pending Reviews
            </p>
            <h3 className="text-3xl font-extrabold mt-1 text-text-main dark:text-white">
              42
            </h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-[#15291b] p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-[#e0f2fe] dark:bg-[#142631] rounded-lg text-[#0284c7]">
                <span className="material-symbols-outlined">
                  download_for_offline
                </span>
              </div>
              <span className="text-xs font-bold text-[#0284c7] bg-[#e0f2fe]/50 px-2 py-1 rounded">
                Live stats
              </span>
            </div>
            <p className="text-sm text-text-green dark:text-text-green-light font-medium">
              Total Downloads
            </p>
            <h3 className="text-3xl font-extrabold mt-1 text-text-main dark:text-white">
              45.2k
            </h3>
          </div>
        </div>
      </section>

      {/* Recent Content Table */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-text-main dark:text-white">
            Recent Content
          </h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-border-dark transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">
                filter_list
              </span>
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-border-dark transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">sort</span>
              Sort
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#15291b] rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background-light dark:bg-border-dark border-b border-border-light dark:border-[#263d2e]">
                <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-text-green uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-[#263d2e]">
              {/* Row 1 */}
              <tr className="hover:bg-[#f8faf8] dark:hover:bg-[#1d3324] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 rounded bg-cover"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXaBMFerDNKfbVcyhpRvu8Y2vjQgDU3QdgUG4K-ZQFJn3ydPA11aktDz--uOLev-zj3_kwzfucVEo_zQ_BVvkMZLabDbdBL3DxOke3w4CA2Ab8IY9J1xk2BuGUExz69FAWPwweJLlVfh2j58BkiyNwETBP31XXmp6lVH_yKGRT3f9LAFoTnves8KUdxte2kHuhX2syOz2w2pdpSQLjSXFcGO2R9gpSGdknG3PvyhIaHomMUrUhxtc7KLpnqStmMDut1UQ4wmGtDPg")',
                      }}
                    ></div>
                    <span className="font-bold text-sm text-text-main dark:text-white">
                      Future of Regenerative Agriculture
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-text-green dark:text-text-green-light">
                    Agriculture
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-text-main dark:text-white">
                    Elena Woods
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-primary"></span>
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer"
                      title="Preview"
                    >
                      <span className="material-symbols-outlined text-lg">
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-lg">
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 text-text-green hover:text-red-500 transition-colors cursor-pointer"
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
                    <div
                      className="size-10 rounded bg-cover"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqSWDQKWy86cnTfjxKzAdTOdn39qv7auqpJtsrk2qvF8LCMGorhQjHM_l_tQ3wCZ_sKmrSyW0yyFOgwOgsvxtIknu4C8udsZpoXDYzvz9lzioTDFg1QJNcNf5Km5b3W0apqgvsxy8oMGdWr3ZlI274a-PExxiqOOncUeDClzDzVijKBEb-P6YQ6bi5NUZTyFLfnMN_AyYNrNRJAb4L7pY6TEfqNdPcntBLxEtmRgW9Ra1I22_RqBYg9eQUhKD3MzA2-XX10yfPziI")',
                      }}
                    ></div>
                    <span className="font-bold text-sm text-text-main dark:text-white">
                      Circular Policy Frameworks 2024
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-text-green dark:text-text-green-light">
                    Policy
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-text-main dark:text-white">
                    Marcus Thorne
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#fef3c7] dark:bg-[#2d2514] text-[#d97706] text-[10px] font-bold uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-[#d97706]"></span>
                    Review
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer"
                      title="Preview"
                    >
                      <span className="material-symbols-outlined text-lg">
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-lg">
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 text-text-green hover:text-red-500 transition-colors cursor-pointer"
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
                    <div
                      className="size-10 rounded bg-cover"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3VMGcNI4PhS2Oj67oo6aNqqdF6QQlz5cgeXATGz19Nd85vyuj9mr9p5JmYEALu9Uh33mSJUHA1iJ3wYs8a5n1xsQL4lA57Hc7Tym_AzS_Zr1b7O6asvayDB0FtdaiIZ2-kjD3WeWiLd0cOMybFvIjrGMN4LfAUGXLdD8ToRuqRdUuA2F4eJLIBU5y6Jgt7CDa_cxgj9CsZVuiseEPhBacXixJyaKjUFaGMx9VZ4kMmpmzYZCnF08LLeK5FzGFG3VHX9hZF5_-Sos")',
                      }}
                    ></div>
                    <span className="font-bold text-sm text-text-main dark:text-white">
                      Mapping Supply Chain Transparency
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-text-green dark:text-text-green-light">
                    Research
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-text-main dark:text-white">
                    Sarah Jenkins
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-border-light dark:bg-border-dark text-text-green text-[10px] font-bold uppercase tracking-wider">
                    <span className="size-1.5 rounded-full bg-text-green"></span>
                    Draft
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer"
                      title="Preview"
                    >
                      <span className="material-symbols-outlined text-lg">
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-2 text-text-green hover:text-primary transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <span className="material-symbols-outlined text-lg">
                        edit
                      </span>
                    </button>
                    <button
                      className="p-2 text-text-green hover:text-red-500 transition-colors cursor-pointer"
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

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-border-light dark:border-border-dark flex items-center justify-between bg-[#fcfdfc] dark:bg-border-dark/50">
            <span className="text-xs text-text-green">
              Showing 3 of 152 items
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
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
