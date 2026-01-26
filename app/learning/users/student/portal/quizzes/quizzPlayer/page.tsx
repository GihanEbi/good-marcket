"use client";

import React, { useState } from "react";

export default function QuizPlayerPage() {
  // State for the flag toggle
  const [isFlagged, setIsFlagged] = useState(false);
  // State for selected option
  const [selectedOption, setSelectedOption] = useState("A");

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] text-[#15291b] dark:text-slate-50 font-sans flex flex-col transition-colors duration-300">
      {/* Sticky Neural Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#15291b] border-b border-[#e7f3eb] dark:border-[#1e3a27] px-6 md:px-12 py-4 flex items-center justify-between shadow-xl shadow-black/5">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
              Active Module
            </p>
            <p className="text-sm font-black uppercase tracking-tight">
              Python Core DNA
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-10">
          {/* Technical Timer */}
          <div className="flex items-center gap-3 bg-[#0a0f0b] border border-[#1e3a27] px-4 py-2 rounded-2xl shadow-inner group">
            <span className="material-symbols-outlined text-[#13ec5b] text-xl font-black group-hover:animate-pulse">
              timer
            </span>
            <div className="flex items-center gap-1 font-mono text-xl font-black text-[#13ec5b]">
              <span>23</span>
              <span className="animate-pulse">:</span>
              <span>45</span>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-2 text-[#5c7a67]">
              <span className="material-symbols-outlined text-sm font-black text-[#13ec5b] animate-pulse">
                sync
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                Neural Syncing...
              </span>
            </div>
            <p className="text-xs font-black text-[#13ec5b] uppercase tracking-tighter mt-0.5">
              Node 08 of 20
            </p>
          </div>
        </div>
      </header>

      {/* Main Tactical Area */}
      <main className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-6 md:p-10 gap-10 pb-20">
        {/* Left Sidebar: Progress Node */}
        <aside className="w-full lg:w-80 order-2 lg:order-1 flex flex-col gap-8">
          {/* Progress Ring Card */}
          <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] p-8 shadow-sm border border-[#e7f3eb] dark:border-[#1e3a27]">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#13ec5b] text-base">
                analytics
              </span>
              Knowledge Sync
            </h3>
            <div className="relative flex items-center justify-center py-2">
              <svg className="size-40 transform -rotate-90">
                <circle
                  className="text-[#f0f7f2] dark:text-[#0a0f0b]"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="10"
                ></circle>
                <circle
                  className="text-[#13ec5b] transition-all duration-1000 ease-out"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeDasharray="439.8"
                  strokeDashoffset={439.8 * (1 - 0.6)}
                  strokeLinecap="round"
                  strokeWidth="10"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(19, 236, 91, 0.3))",
                  }}
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black tracking-tighter">
                  60%
                </span>
                <span className="text-[9px] text-[#5c7a67] font-black uppercase tracking-[0.2em]">
                  Synchronized
                </span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#5c7a67]">
                <span>12 Answered</span>
                <span>8 Remaining</span>
              </div>
              <div className="w-full bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-full h-2 border border-[#e7f3eb] dark:border-[#1e3a27]">
                <div
                  className="bg-[#13ec5b] h-full rounded-full shadow-[0_0_10px_#13ec5b]"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Node Navigator Grid */}
          <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] p-8 shadow-sm border border-[#e7f3eb] dark:border-[#1e3a27] flex-1">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#13ec5b] text-base">
                grid_view
              </span>
              Node Navigator
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className="aspect-square flex items-center justify-center rounded-xl bg-[#13ec5b] text-[#15291b] text-xs font-black shadow-lg shadow-[#13ec5b]/10"
                >
                  {num.toString().padStart(2, "0")}
                </button>
              ))}

              {/* Flagged Node */}
              <button className="aspect-square flex items-center justify-center rounded-xl bg-amber-400 text-[#15291b] text-xs font-black relative">
                04
                <span className="absolute -top-1 -right-1 material-symbols-outlined text-[14px] text-amber-600 bg-white rounded-full">
                  flag
                </span>
              </button>

              {[5, 6, 7].map((num) => (
                <button
                  key={num}
                  className="aspect-square flex items-center justify-center rounded-xl bg-[#13ec5b] text-[#15291b] text-xs font-black"
                >
                  {num.toString().padStart(2, "0")}
                </button>
              ))}

              {/* Current Active Node */}
              <button className="aspect-square flex items-center justify-center rounded-xl border-2 border-[#13ec5b] text-[#13ec5b] text-xs font-black bg-[#13ec5b]/10 shadow-[0_0_15px_rgba(19,236,91,0.2)]">
                08
              </button>

              {/* Unprocessed Nodes */}
              {Array.from({ length: 12 }, (_, i) => i + 9).map((num) => (
                <button
                  key={num}
                  className="aspect-square flex items-center justify-center rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] text-[#5c7a67] text-xs font-black border border-[#e7f3eb] dark:border-[#1e3a27]"
                >
                  {num.toString().padStart(2, "0")}
                </button>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              {[
                { label: "Processed", color: "bg-[#13ec5b]" },
                {
                  label: "Unprocessed",
                  color:
                    "bg-[#f0f7f2] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27]",
                },
                { label: "Flagged", color: "bg-amber-400" },
              ].map((status) => (
                <div
                  key={status.label}
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#5c7a67]"
                >
                  <span className={`size-3 rounded ${status.color}`}></span>
                  <span>{status.label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Question Interface Area */}
        <section className="flex-1 order-1 lg:order-2 flex flex-col gap-8">
          <div className="bg-white dark:bg-[#15291b] rounded-[3rem] shadow-2xl border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden flex flex-col">
            <div className="p-10 md:p-14 flex flex-col gap-10">
              {/* Question Header */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#13ec5b]/10 text-[#13ec5b] rounded-full border border-[#13ec5b]/20">
                  <span className="material-symbols-outlined text-sm font-black">
                    terminal
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Logic & Comprehension
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
                  What is the output of the following list comprehension snippet
                  in Python?
                </h1>
              </div>

              {/* Technical Code Snippet */}
              <div className="bg-[#0a0f0b] rounded-[2rem] p-8 font-mono text-sm leading-relaxed overflow-x-auto border border-[#1e3a27] shadow-inner relative">
                <div className="absolute top-4 right-6 text-[#1e3a27] font-black select-none text-[10px] uppercase">
                  Python 3.12
                </div>
                <div className="flex gap-6">
                  <div className="text-[#1e3a27] select-none text-right w-6 font-bold">
                    01
                    <br />
                    02
                    <br />
                    03
                  </div>
                  <div className="text-slate-300">
                    <span className="text-[#5c7a67] italic">
                      # Logic Implementation
                    </span>
                    <br />
                    my_list = [x**<span className="text-[#13ec5b]">2</span>{" "}
                    <span className="text-[#13ec5b]">for</span> x{" "}
                    <span className="text-[#13ec5b]">in</span>{" "}
                    <span className="text-slate-100 underline decoration-[#13ec5b]">
                      range
                    </span>
                    (<span className="text-[#13ec5b]">5</span>){" "}
                    <span className="text-[#13ec5b]">if</span> x %{" "}
                    <span className="text-[#13ec5b]">2</span> =={" "}
                    <span className="text-[#13ec5b]">0</span>]<br />
                    <span className="text-slate-100">print</span>(my_list)
                  </div>
                </div>
              </div>

              {/* Tactical Options List */}
              <div className="space-y-4">
                <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.3em] mb-4">
                  Select Output Payload:
                </p>

                {/* Technical Radio Options */}
                {[
                  { id: "A", label: "[0, 4, 16]" },
                  { id: "B", label: "[0, 1, 4, 9, 16]" },
                  { id: "C", label: "[4, 16]" },
                  { id: "D", label: "[0, 2, 4]" },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`group flex items-center gap-6 rounded-2xl border-2 p-6 cursor-pointer transition-all ${
                      selectedOption === option.id
                        ? "border-[#13ec5b] bg-[#13ec5b]/5 shadow-lg shadow-[#13ec5b]/5"
                        : "border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b]/40 hover:bg-[#f0f7f2] dark:hover:bg-[#0a0f0b]"
                    }`}
                  >
                    <div className="relative flex items-center">
                      <input
                        type="radio"
                        name="quiz-options"
                        className="peer size-6 appearance-none rounded-full border-2 border-[#e7f3eb] dark:border-[#1e3a27] checked:border-[#13ec5b] transition-all cursor-pointer"
                        checked={selectedOption === option.id}
                        onChange={() => setSelectedOption(option.id)}
                      />
                      <div className="absolute inset-0 m-auto size-2.5 rounded-full bg-[#13ec5b] opacity-0 peer-checked:opacity-100 transition-opacity shadow-[0_0_8px_#13ec5b]"></div>
                    </div>

                    <div className="flex grow items-center justify-between">
                      <div className="flex flex-col">
                        <p
                          className={`text-base font-black tracking-tight ${selectedOption === option.id ? "text-[#15291b] dark:text-white" : "text-[#5c7a67]"}`}
                        >
                          {option.label}
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#5c7a67] mt-0.5">
                          Payload Option {option.id}
                        </p>
                      </div>
                      {selectedOption === option.id && (
                        <span className="material-symbols-outlined text-[#13ec5b] font-black animate-in zoom-in duration-300">
                          verified
                        </span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Tactical Control Bar */}
            <div className="bg-[#f0f7f2] dark:bg-[#0a0f0b] border-t border-[#e7f3eb] dark:border-[#1e3a27] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-8 w-full md:w-auto">
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isFlagged}
                      onChange={() => setIsFlagged(!isFlagged)}
                    />
                    <div
                      className={`w-12 h-6 rounded-full transition-colors border border-[#e7f3eb] dark:border-[#1e3a27] ${isFlagged ? "bg-amber-400" : "bg-[#fcfdfc] dark:bg-[#15291b]"}`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 bg-[#15291b] dark:bg-white size-4 rounded-full transition-transform duration-300 ${isFlagged ? "translate-x-6 bg-white" : ""}`}
                    ></div>
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#5c7a67] select-none">
                    <span
                      className={`material-symbols-outlined text-xl ${isFlagged ? "text-amber-500 fill-1" : ""}`}
                    >
                      flag
                    </span>
                    Review Required
                  </div>
                </label>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:border-[#13ec5b] transition-all">
                  <span className="material-symbols-outlined text-lg">
                    arrow_back
                  </span>
                  Previous
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.03] active:scale-[0.97] transition-all">
                  Next Node
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* AI Tactical Hint */}
          <div className="flex items-start gap-4 p-6 bg-[#13ec5b]/5 rounded-[2rem] border border-[#13ec5b]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-6xl font-black">
                lightbulb
              </span>
            </div>
            <span className="material-symbols-outlined text-[#13ec5b] fill-1">
              auto_awesome
            </span>
            <div className="relative z-10">
              <p className="text-xs font-black uppercase tracking-widest text-[#13ec5b] mb-2">
                Neural Insight:
              </p>
              <p className="text-sm text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed font-medium">
                Remember that{" "}
                <code className="bg-[#13ec5b]/10 px-1.5 py-0.5 rounded font-mono text-[#13ec5b]">
                  range(5)
                </code>{" "}
                generates a sequence from 0 to 4. The modular operator{" "}
                <code className="bg-[#13ec5b]/10 px-1.5 py-0.5 rounded font-mono text-[#13ec5b]">
                  x % 2 == 0
                </code>{" "}
                filters for even integers only.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Persistence Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 bg-[#fcfdfc] dark:bg-[#0a0f0b] z-[60] border-t border-[#e7f3eb] dark:border-[#1e3a27]">
        <div
          className="h-full bg-[#13ec5b] shadow-[0_0_10px_#13ec5b]"
          style={{ width: "40%" }}
        ></div>
      </div>
    </div>
  );
}
