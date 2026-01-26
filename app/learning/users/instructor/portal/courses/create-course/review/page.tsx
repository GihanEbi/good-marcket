"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CourseReviewPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 flex flex-col transition-colors duration-300">
      {/* --- Architect Terminal Header --- */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl border-b border-[#e7f3eb] dark:border-[#1e3a27]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-6">
            {/* Title & Back Link */}
            <div className="flex items-center gap-5">
              <Link
                href="/learning/users/instructor/portal/courses/create-course/pricing"
                className="size-10 flex items-center justify-center rounded-xl bg-[#f0f7f2] dark:bg-[#15291b] text-[#5c7a67] hover:text-[#13ec5b] border border-[#e7f3eb] dark:border-[#1e3a27] transition-all"
              >
                <span className="material-symbols-outlined font-black">
                  arrow_back
                </span>
              </Link>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="size-1.5 rounded-full bg-[#13ec5b] animate-pulse"></div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                    System Audit
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-[#15291b] dark:text-white leading-tight uppercase tracking-tight">
                  Validate <span className="text-[#13ec5b]">Blueprint</span>
                </h2>
              </div>
            </div>

            {/* Action Hub */}
            <div className="flex items-center gap-3">
              <button className="flex-1 md:flex-none px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#5c7a67] dark:text-[#a0c4ab] rounded-2xl hover:bg-[#f0f7f2] dark:hover:bg-[#15291b] transition-all">
                Stage Draft
              </button>
              <button
                className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                onClick={() =>
                  router.push("/learning/users/instructor/portal/courses")
                }
              >
                Deploy Node
                <span className="material-symbols-outlined text-base font-black">
                  rocket_launch
                </span>
              </button>
            </div>
          </div>

          {/* Technical Stepper (All Complete) */}
          <div className="flex items-center justify-between pb-6 max-w-2xl mx-auto">
            {[
              { label: "Schema", active: true },
              { label: "Curriculum", active: true },
              { label: "Pricing", active: true },
              { label: "Validation", active: true },
            ].map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="h-1 w-full rounded-full bg-[#13ec5b] shadow-[0_0_8px_#13ec5b]"></div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#13ec5b]">
                    {step.label}
                  </span>
                </div>
                {idx < 3 && (
                  <div className="w-4 sm:w-8 h-px bg-transparent"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </header>

      {/* --- Main Audit Content --- */}
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-16 flex-1 w-full">
        <div className="grid grid-cols-12 gap-10">
          {/* Left Column: Data Modules */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Module 1: Metadata Details */}
            <details
              className="group bg-white dark:bg-[#15291b] rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden shadow-sm"
              open
            >
              <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-[#f0f7f2] dark:hover:bg-[#0a0f0b]/30 transition-all list-none">
                <div className="flex items-center gap-5">
                  <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                    <span className="material-symbols-outlined font-black">
                      terminal
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest">
                      Node Metadata
                    </h3>
                    <p className="text-[10px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-tighter mt-1">
                      Schema & Visualization Assets
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="hidden sm:flex items-center gap-2 text-[10px] font-black text-[#13ec5b] uppercase tracking-widest hover:underline decoration-2">
                    <span className="material-symbols-outlined !text-sm">
                      edit
                    </span>{" "}
                    Re-Map
                  </button>
                  <span className="material-symbols-outlined text-[#5c7a67] group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </div>
              </summary>
              <div className="px-8 pb-8 pt-4 border-t border-[#e7f3eb] dark:border-[#1e3a27] space-y-8 bg-[#fcfdfc] dark:bg-[#0a0f0b]/20">
                <div>
                  <h4 className="text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.3em] mb-2">
                    Synchronized Title
                  </h4>
                  <p className="text-lg font-black text-[#15291b] dark:text-white uppercase tracking-tight">
                    Advanced React Masterclass: Built for Scale
                  </p>
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.3em] mb-2">
                    Protocol Brief
                  </h4>
                  <p className="text-sm font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                    Examine deep-cycle React internals including concurrent mode
                    logic, server components, and enterprise-grade state
                    synchronization architectures.
                  </p>
                </div>
                <div className="aspect-video w-full max-w-sm rounded-[1.5rem] overflow-hidden bg-[#0a0f0b] border border-[#1e3a27] relative group">
                  <img
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800"
                    alt="Preview"
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-[#13ec5b] opacity-50 font-black">
                      image
                    </span>
                  </div>
                </div>
              </div>
            </details>

            {/* Module 2: Curriculum Pipeline */}
            <details className="group bg-white dark:bg-[#15291b] rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden shadow-sm">
              <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-[#f0f7f2] dark:hover:bg-[#0a0f0b]/30 transition-all list-none">
                <div className="flex items-center gap-5">
                  <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                    <span className="material-symbols-outlined font-black">
                      account_tree
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest">
                      Pipeline Structure
                    </h3>
                    <p className="text-[10px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-tighter mt-1">
                      12 Segments • 48 Nodes • 14.5 Cycles
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#5c7a67] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="px-8 pb-8 pt-6 border-t border-[#e7f3eb] dark:border-[#1e3a27] space-y-3 bg-[#fcfdfc] dark:bg-[#0a0f0b]/20">
                {[
                  { id: "01", title: "Architecture Initialization", units: 4 },
                  { id: "02", title: "State Sync Protocols", units: 8 },
                  { id: "03", title: "Performance Profiling", units: 12 },
                ].map((sec) => (
                  <div
                    key={sec.id}
                    className="flex items-center justify-between p-4 bg-white dark:bg-[#0a0f0b] rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-[#13ec5b] font-mono">
                        {sec.id}
                      </span>
                      <span className="text-xs font-black uppercase tracking-tight text-[#15291b] dark:text-white">
                        {sec.title}
                      </span>
                    </div>
                    <span className="text-[9px] font-black text-[#5c7a67] uppercase tracking-widest">
                      {sec.units} Units
                    </span>
                  </div>
                ))}
              </div>
            </details>

            {/* Module 3: Fiscal Configuration */}
            <details className="group bg-white dark:bg-[#15291b] rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden shadow-sm">
              <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer hover:bg-[#f0f7f2] dark:hover:bg-[#0a0f0b]/30 transition-all list-none">
                <div className="flex items-center gap-5">
                  <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                    <span className="material-symbols-outlined font-black">
                      payments
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest">
                      Fiscal Config
                    </h3>
                    <p className="text-[10px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-tighter mt-1">
                      Tier: Premium • Credits: $89.99
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#5c7a67] group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="px-8 pb-8 pt-6 border-t border-[#e7f3eb] dark:border-[#1e3a27] grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#fcfdfc] dark:bg-[#0a0f0b]/20">
                <div className="p-6 rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#0a0f0b]">
                  <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-2">
                    Network Credit value
                  </p>
                  <p className="text-2xl font-black text-[#13ec5b]">
                    $89.99 <span className="text-xs text-[#5c7a67]">USD</span>
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#0a0f0b]">
                  <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-2">
                    Sync Voucher Code
                  </p>
                  <span className="text-xs font-black text-[#13ec5b] bg-[#13ec5b]/10 px-3 py-1.5 rounded-lg border border-[#13ec5b]/20 uppercase tracking-widest">
                    EARLY_BIRD_50
                  </span>
                </div>
              </div>
            </details>
          </div>

          {/* Right Column: AI Audit Matrix */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-48 space-y-8">
              {/* AI Audit Terminal */}
              <div className="bg-[#15291b] rounded-[2.5rem] border border-[#1e3a27] overflow-hidden shadow-2xl relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#13ec5b]/5 blur-[40px] group-hover:bg-[#13ec5b]/10 transition-all"></div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="size-10 rounded-xl bg-[#13ec5b] flex items-center justify-center text-[#15291b] shadow-lg shadow-[#13ec5b]/20">
                      <span className="material-symbols-outlined font-black">
                        auto_awesome
                      </span>
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">
                      AI Sync Audit
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <p className="text-4xl font-black text-[#13ec5b] tracking-tighter">
                        94<span className="text-sm">/100</span>
                      </p>
                      <p className="text-[9px] font-black text-[#a0c4ab] uppercase tracking-widest mt-1">
                        Sync Integrity Score
                      </p>
                    </div>
                    <div className="size-20 rounded-full border-4 border-[#13ec5b]/20 border-t-[#13ec5b] flex flex-col items-center justify-center shadow-[inset_0_0_15px_rgba(19,236,91,0.1)]">
                      <span className="text-[8px] font-black text-[#13ec5b] uppercase tracking-tighter">
                        OPTIMAL
                      </span>
                      <span className="text-[8px] font-black text-[#13ec5b] uppercase tracking-tighter">
                        SYNC
                      </span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[9px] font-black text-[#13ec5b] uppercase tracking-[0.3em] mb-4">
                        Neural Strengths
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "High audio frequency clarity",
                          "Structural pacing is optimized",
                        ].map((s) => (
                          <li
                            key={s}
                            className="flex items-center gap-3 text-[11px] font-medium text-[#a0c4ab]"
                          >
                            <span className="material-symbols-outlined text-[#13ec5b] text-sm font-black">
                              verified
                            </span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <h4 className="text-[9px] font-black text-amber-500 uppercase tracking-[0.3em] mb-4">
                        Optimization Cues
                      </h4>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-[11px] font-medium text-[#a0c4ab]">
                          <span className="material-symbols-outlined text-amber-500 text-sm font-black">
                            warning
                          </span>
                          Inject logic check nodes to Segment 3
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a0f0b] p-5 text-center border-t border-white/5">
                  <p className="text-[9px] text-[#5c7a67] italic uppercase font-black tracking-[0.3em]">
                    Blueprint cleared for network uplink
                  </p>
                </div>
              </div>

              {/* Final Instructions */}
              <div className="bg-white dark:bg-[#15291b] rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 shadow-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67] mb-4">
                  Deployment Protocol
                </h4>
                <p className="text-xs font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                  Verify the welcome payload is high-fidelity. Blueprints can be
                  recalibrated post-deployment if network metrics require
                  optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- Global Action Footer --- */}
      <footer className="sticky bottom-0 z-50 bg-white/90 dark:bg-[#0a0f0b]/90 backdrop-blur-xl border-t border-[#e7f3eb] dark:border-[#1e3a27] px-6 sm:px-10 py-6 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-3">
          <div className="size-2 rounded-full bg-[#13ec5b]"></div>
          <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
            Audit Complete: 0 Critical Errors Detected
          </p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            className="flex-1 md:flex-none px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[#5c7a67] hover:text-[#13ec5b] transition-all"
            onClick={() =>
              router.push(
                "/learning/users/instructor/portal/courses/create-course/basic-info",
              )
            }
          >
            Abort & Re-Map
          </button>
          <button className="flex-1 md:flex-none px-12 py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.03] active:scale-[0.97] transition-all">
            INITIALIZE DEPLOYMENT
          </button>
        </div>
      </footer>
    </div>
  );
}
