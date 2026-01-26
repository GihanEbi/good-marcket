"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PricingSettingsPage() {
  const router = useRouter();
  const [pricingTier, setPricingTier] = useState("paid");

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* --- Architect Terminal Header --- */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl border-b border-[#e7f3eb] dark:border-[#1e3a27]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-6">
            {/* Title & Back Link */}
            <div className="flex items-center gap-5">
              <Link
                href="/learning/users/instructor/portal/courses/create-course/curriculum"
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
                    Fiscal Configuration
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-[#15291b] dark:text-white leading-tight uppercase tracking-tight">
                  Deployment <span className="text-[#13ec5b]">Metrics</span>
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
                onClick={() => {
                  router.push(
                    "/learning/users/instructor/portal/courses/create-course/review",
                  );
                }}
              >
                Sync & Next
                <span className="material-symbols-outlined text-base font-black">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Technical Stepper */}
          <div className="flex items-center justify-between pb-6 max-w-2xl mx-auto">
            {[
              { label: "Schema", active: true },
              { label: "Curriculum", active: true },
              { label: "Pricing", active: true },
              { label: "Validation", active: false },
            ].map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className={`h-1 w-full rounded-full transition-all duration-700 ${
                      step.active
                        ? "bg-[#13ec5b] shadow-[0_0_8px_#13ec5b]"
                        : "bg-[#e7f3eb] dark:bg-[#1e3a27]"
                    }`}
                  ></div>
                  <span
                    className={`text-[9px] font-black uppercase tracking-[0.2em] ${
                      step.active ? "text-[#13ec5b]" : "text-[#5c7a67]"
                    }`}
                  >
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

      {/* --- Main Configuration Area --- */}
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-12 gap-10">
          {/* Form Column (Left) */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            {/* 1. Pricing Tier Selection */}
            <section className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                  <span className="material-symbols-outlined font-black">
                    payments
                  </span>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  Monetization Logic
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    id: "paid",
                    label: "Premium Node",
                    desc: "Generate network revenue via global uplinks.",
                  },
                  {
                    id: "free",
                    label: "Open Access",
                    desc: "Maximize node reach via public distribution.",
                  },
                ].map((tier) => (
                  <label
                    key={tier.id}
                    onClick={() => setPricingTier(tier.id)}
                    className={`relative cursor-pointer p-6 border-2 rounded-[1.5rem] transition-all group ${
                      pricingTier === tier.id
                        ? "border-[#13ec5b] bg-[#13ec5b]/5 shadow-lg shadow-[#13ec5b]/5"
                        : "border-[#e7f3eb] dark:border-[#1e3a27] bg-[#fcfdfc] dark:bg-[#0a0f0b] hover:border-[#13ec5b]/40"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className={`text-xs font-black uppercase tracking-widest ${pricingTier === tier.id ? "text-[#13ec5b]" : "text-[#5c7a67]"}`}
                      >
                        {tier.label}
                      </span>
                      <div
                        className={`size-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          pricingTier === tier.id
                            ? "border-[#13ec5b]"
                            : "border-[#e7f3eb] dark:border-[#1e3a27]"
                        }`}
                      >
                        {pricingTier === tier.id && (
                          <div className="size-2.5 rounded-full bg-[#13ec5b] shadow-[0_0_8px_#13ec5b]"></div>
                        )}
                      </div>
                    </div>
                    <p className="text-[11px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                      {tier.desc}
                    </p>
                  </label>
                ))}
              </div>

              {pricingTier === "paid" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#e7f3eb] dark:border-[#1e3a27] animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                      Base Currency
                    </label>
                    <select className="w-full px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-xs font-black uppercase tracking-widest appearance-none transition-all">
                      <option>USD - Terminal Credits</option>
                      <option>EUR - Euro Nodes</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                      Price Payload
                    </label>
                    <div className="relative group">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#13ec5b] font-black">
                        $
                      </span>
                      <input
                        type="number"
                        className="w-full pl-10 pr-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-sm font-bold transition-all"
                        placeholder="89.99"
                      />
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* 2. Voucher Generation */}
            <section className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                  <span className="material-symbols-outlined font-black">
                    sell
                  </span>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  Voucher Synthesis
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  className="flex-1 px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-xs font-bold uppercase tracking-widest transition-all"
                  placeholder="CODE_EARLY_BIRD"
                />
                <select className="w-full sm:w-48 px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-xs font-black uppercase tracking-widest appearance-none">
                  <option>20% SYNC</option>
                  <option>50% SYNC</option>
                  <option>FULL BYPASS</option>
                </select>
                <button className="px-8 py-4 bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#13ec5b] dark:hover:bg-[#13ec5b] transition-all">
                  Generate
                </button>
              </div>
            </section>

            {/* 3. Operational Protocols */}
            <section className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="size-12 rounded-2xl bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/20">
                  <span className="material-symbols-outlined font-black">
                    settings_applications
                  </span>
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                  Node Protocols
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                    Primary Language Node
                  </label>
                  <select className="w-full px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-xs font-black uppercase tracking-widest appearance-none">
                    <option>English (Global Core)</option>
                    <option>Spanish (Regional)</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                    Difficulty Matrix
                  </label>
                  <select className="w-full px-5 py-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl focus:border-[#13ec5b] outline-none text-xs font-black uppercase tracking-widest appearance-none">
                    <option>Novice</option>
                    <option>Intermediate</option>
                    <option selected>Advanced Architect</option>
                  </select>
                </div>
              </div>

              <div className="p-6 bg-[#fcfdfc] dark:bg-[#0a0f0b] rounded-[1.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] flex items-center justify-between group hover:border-[#13ec5b]/20 transition-all">
                <div className="space-y-1">
                  <p className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight">
                    Issue DNA Credential
                  </p>
                  <p className="text-[10px] font-medium text-[#5c7a67] dark:text-[#a0c4ab]">
                    Allow students to earn a blockchain-verified certificate.
                  </p>
                </div>

                {/* Technical Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-12 h-6 bg-[#e7f3eb] dark:bg-[#1e3a27] rounded-full peer peer-checked:bg-[#13ec5b] transition-all relative border border-transparent peer-checked:border-[#13ec5b]/20">
                    <div className="absolute top-1 left-1 size-4 rounded-full bg-[#15291b] dark:bg-white transition-all peer-checked:translate-x-6"></div>
                  </div>
                </label>
              </div>
            </section>
          </div>

          {/* Right Column: Validation Registry */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-48 space-y-8">
              <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden shadow-sm">
                <div className="p-8">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-8">
                    Validation Registry
                  </h3>

                  <div className="space-y-6 mb-10">
                    {[
                      {
                        label: "Curriculum Map",
                        status: "complete",
                        desc: "48 Knowledge Nodes mapped",
                      },
                      {
                        label: "Interface Design",
                        status: "complete",
                        desc: "Thumbnail visual synchronized",
                      },
                      {
                        label: "Fiscal Policy",
                        status: "info",
                        desc: "Review marketplace protocol",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <span
                          className={`material-symbols-outlined text-lg font-black transition-colors ${
                            item.status === "complete"
                              ? "text-[#13ec5b]"
                              : "text-amber-500"
                          }`}
                        >
                          {item.status === "complete" ? "verified" : "info"}
                        </span>
                        <div className="flex-1">
                          <p className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight">
                            {item.label}
                          </p>
                          <p className="text-[10px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <button className="w-full py-5 bg-[#13ec5b] text-[#15291b] rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                      INITIALIZE DEPLOYMENT
                    </button>
                    <button className="w-full py-4 border-2 border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] dark:text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:border-[#13ec5b] transition-all">
                      Stage Node
                    </button>
                  </div>
                </div>
              </div>

              {/* AI Yield Tip */}
              <div className="bg-[#13ec5b]/5 rounded-[2rem] border border-[#13ec5b]/20 p-6 flex gap-5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-5xl font-black">
                    insights
                  </span>
                </div>
                <span className="material-symbols-outlined text-[#13ec5b] fill-1">
                  auto_awesome
                </span>
                <p className="text-[11px] text-[#5c7a67] dark:text-[#a0c4ab] font-medium leading-relaxed relative z-10">
                  <span className="text-[#13ec5b] font-black">
                    Yield Insight:
                  </span>{" "}
                  Nodes priced between{" "}
                  <span className="text-[#15291b] dark:text-white font-black">
                    $49 — $99
                  </span>{" "}
                  maintain the highest synchronization velocity in this sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
