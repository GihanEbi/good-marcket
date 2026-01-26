"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AssignmentSubmissionPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "instructions" | "resources" | "rubric" | "discussion"
  >("instructions");
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 12, mins: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59 };
        if (prev.days > 0)
          return { ...prev, days: prev.days - 1, hours: 23, mins: 59 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      <main className="max-w-7xl mx-auto w-full px-6 py-12">
        {/* Header & Countdown */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#13ec5b] animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                Module Assessment
              </span>
            </div>
            <h1 className="text-5xl font-black tracking-tight leading-none">
              Data Analysis <span className="text-[#13ec5b]">DNA</span>
            </h1>
            <p className="text-[#5c7a67] dark:text-[#a0c4ab] max-w-xl font-medium text-lg leading-relaxed">
              Final technical evaluation for Advanced Statistics. Ensure all
              datasets are normalized before submission.
            </p>
          </div>

          {/* Technical Countdown Widget */}
          <div className="flex gap-4 bg-white dark:bg-[#15291b] p-5 rounded-[2rem] shadow-xl shadow-black/5 border border-[#e7f3eb] dark:border-[#1e3a27]">
            {[
              { label: "Days", val: timeLeft.days },
              { label: "Hrs", val: timeLeft.hours },
              { label: "Min", val: timeLeft.mins },
            ].map((t) => (
              <div key={t.label} className="text-center w-16">
                <div className="bg-[#0a0f0b] text-[#13ec5b] font-black text-2xl py-3 rounded-2xl border border-[#1e3a27] shadow-inner">
                  {t.val.toString().padStart(2, "0")}
                </div>
                <span className="text-[9px] uppercase tracking-widest font-black text-[#5c7a67] mt-2 block">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Documentation */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] shadow-sm border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-[#e7f3eb] dark:border-[#1e3a27] px-4 overflow-x-auto scrollbar-hide">
                {[
                  { id: "instructions", label: "Protocol", icon: "terminal" },
                  { id: "resources", label: "Assets", icon: "database" },
                  { id: "rubric", label: "KPIs", icon: "analytics" },
                  {
                    id: "discussion",
                    label: "Comms",
                    icon: "shuttle_dispatch",
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-8 py-5 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all whitespace-nowrap relative ${
                      activeTab === tab.id
                        ? "text-[#13ec5b]"
                        : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {tab.icon}
                    </span>
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Documentation Content */}
              <div className="p-10 space-y-8 min-h-[500px]">
                {activeTab === "instructions" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <section className="space-y-4">
                      <h3 className="text-2xl font-black tracking-tight">
                        Project Architecture
                      </h3>
                      <p className="text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed font-medium">
                        Apply algorithmic techniques learned in Module 4 to a
                        real-world metadata cluster. Focus on predictive
                        accuracy and feature scaling.
                      </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      {[
                        "Technique: 3x Data Sanitization",
                        "Matrix: Feature Importance",
                        "Library: Scikit-Learn Engine",
                        "Output: Matplotlib Render",
                      ].map((req) => (
                        <div
                          key={req}
                          className="flex items-center gap-3 p-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27]"
                        >
                          <span className="material-symbols-outlined text-[#13ec5b] text-sm font-black">
                            check_circle
                          </span>
                          <span className="text-xs font-bold uppercase tracking-tight text-[#5c7a67] dark:text-slate-300">
                            {req}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#0a0f0b] p-6 rounded-3xl border border-[#1e3a27] font-mono shadow-2xl">
                      <div className="flex gap-2 mb-4">
                        <div className="size-2 rounded-full bg-rose-500/50"></div>
                        <div className="size-2 rounded-full bg-amber-500/50"></div>
                        <div className="size-2 rounded-full bg-[#13ec5b]/50"></div>
                      </div>
                      <pre className="text-xs text-[#13ec5b]/90 overflow-x-auto leading-relaxed">
                        {`# Initialize Analysis Logic
import pandas as pd
engine = pd.read_csv('metadata_core.csv')
print(engine.describe()) # Generate Profile`}
                      </pre>
                    </div>
                  </div>
                )}

                {activeTab === "resources" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-500">
                    {["metadata_2024.csv", "protocol_v2.pdf"].map((file, i) => (
                      <div
                        key={file}
                        className="p-5 border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[1.5rem] flex items-center gap-4 hover:border-[#13ec5b]/40 transition-all cursor-pointer group bg-white dark:bg-[#0a0f0b]"
                      >
                        <div className="size-12 bg-[#13ec5b]/10 text-[#13ec5b] flex items-center justify-center rounded-xl group-hover:bg-[#13ec5b] group-hover:text-[#15291b] transition-all">
                          <span className="material-symbols-outlined">
                            {i === 0 ? "database" : "description"}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-black truncate">{file}</p>
                          <p className="text-[9px] font-black text-[#5c7a67] uppercase mt-1 tracking-widest">
                            {i === 0 ? "4.2 MB" : "1.8 MB"}
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-[#5c7a67] group-hover:text-[#13ec5b]">
                          download
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Submission Deck */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] shadow-2xl border border-[#e7f3eb] dark:border-[#1e3a27] p-8 space-y-8 sticky top-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black uppercase tracking-widest">
                  Submit Deck
                </h3>
                <span className="px-3 py-1 bg-[#13ec5b]/10 text-[#13ec5b] text-[9px] font-black rounded-full border border-[#13ec5b]/20">
                  PROCESSING
                </span>
              </div>

              {/* Technical Upload Zone */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-[2rem] p-10 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer relative overflow-hidden group ${
                  dragActive || file
                    ? "border-[#13ec5b] bg-[#13ec5b]/5"
                    : "border-[#e7f3eb] dark:border-[#1e3a27] bg-[#fcfdfc] dark:bg-[#0a0f0b] hover:border-[#13ec5b]/40"
                }`}
              >
                <div
                  className={`size-14 rounded-2xl flex items-center justify-center transition-all ${file ? "bg-[#13ec5b] text-[#15291b]" : "bg-[#13ec5b]/10 text-[#13ec5b]"}`}
                >
                  <span className="material-symbols-outlined text-2xl font-black">
                    {file ? "check_circle" : "cloud_upload"}
                  </span>
                </div>
                <div className="text-center relative z-10">
                  <p className="text-xs font-black uppercase tracking-tight">
                    {file ? file.name : "Drop System Payload"}
                  </p>
                  {!file && (
                    <p className="text-[10px] font-bold text-[#5c7a67] mt-2">
                      Maximum file weight: 50MB
                    </p>
                  )}
                </div>
                {dragActive && (
                  <div className="absolute inset-0 bg-[#13ec5b]/5 animate-pulse"></div>
                )}
              </div>

              {/* Metadata/Comments */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                  Deployment Notes
                </label>
                <textarea
                  className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl text-xs font-bold p-4 focus:border-[#13ec5b] outline-none min-h-[120px] transition-all"
                  placeholder="Annotate your submission..."
                />
              </div>

              <button className="w-full py-5 bg-[#13ec5b] text-[#15291b] text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Transmit Final
                <span className="material-symbols-outlined text-sm font-black">
                  send
                </span>
              </button>

              {/* AI Insight Widget */}
              <div className="p-6 bg-[#13ec5b]/5 rounded-3xl border border-[#13ec5b]/10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#13ec5b] text-lg fill-1">
                    auto_awesome
                  </span>
                  <span className="text-[9px] font-black text-[#13ec5b] uppercase tracking-widest">
                    AI Audit Tip
                  </span>
                </div>
                <p className="text-[11px] font-medium italic text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                  "Ensure your methodology section includes the specific{" "}
                  <strong>random_state</strong> used for your train-test split
                  for reproducibility."
                </p>
              </div>
            </div>

            {/* KPI Progress Tracker */}
            <div className="bg-white dark:bg-[#15291b] rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 space-y-6">
              <h4 className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
                Rubric Compliance
              </h4>
              <div className="space-y-5">
                {[
                  { label: "Data Integrity", val: 85 },
                  { label: "Logic Accuracy", val: 40 },
                  { label: "Documentation", val: 100 },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase">
                      <span>{stat.label}</span>
                      <span className="text-[#13ec5b]">{stat.val}%</span>
                    </div>
                    <div className="h-1.5 bg-[#fcfdfc] dark:bg-[#0a0f0b] rounded-full overflow-hidden border border-[#e7f3eb] dark:border-[#1e3a27]">
                      <div
                        className="h-full bg-[#13ec5b] transition-all duration-1000"
                        style={{ width: `${stat.val}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-[#e7f3eb] dark:border-[#1e3a27] text-center opacity-50">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#5c7a67]">
          AI Learning Ecosystem • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
