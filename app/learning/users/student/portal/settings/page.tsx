"use client";

import React from "react";

export default function SettingsPage() {
  return (
    <div className="flex h-full flex-col bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 overflow-hidden relative transition-colors duration-300">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-2 rounded-full bg-[#13ec5b] animate-pulse shadow-[0_0_8px_#13ec5b]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
                System Configuration
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-none text-[#15291b] dark:text-white">
              User <span className="text-[#13ec5b]">Preferences</span>
            </h2>
            <p className="text-[#5c7a67] dark:text-[#a0c4ab] mt-3 font-medium">
              Calibrate your learning DNA, security protocols, and AI
              synchronization.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#e7f3eb] dark:border-[#1e3a27] mb-12 overflow-x-auto scrollbar-hide">
            {["Profile", "Security", "Notifications", "AI Sync"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                    i === 0
                      ? "text-[#13ec5b]"
                      : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
                  }`}
                >
                  {tab}
                  {i === 0 && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full shadow-[0_0_8px_#13ec5b]"></div>
                  )}
                </button>
              ),
            )}
          </div>

          <div className="space-y-16">
            {/* Public Profile Section */}
            <section className="space-y-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-black uppercase tracking-tight text-[#15291b] dark:text-white">
                  Node Identity
                </h3>
                <p className="text-sm font-medium text-[#5c7a67] dark:text-[#a0c4ab]">
                  Visible metadata across the learning network.
                </p>
              </div>

              <div className="space-y-10">
                {/* Avatar Uplink */}
                <div className="flex items-center gap-8">
                  <div className="relative group">
                    <div className="size-28 rounded-[2rem] overflow-hidden border-2 border-[#13ec5b]/20 bg-[#15291b]">
                      <img
                        className="w-full h-full object-cover opacity-80"
                        src="https://ui-avatars.com/api/?name=Alex+Johnson&background=15291b&color=13ec5b&bold=true"
                        alt="Avatar"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 size-10 bg-[#13ec5b] text-[#15291b] rounded-xl shadow-xl flex items-center justify-center hover:scale-110 transition-all border-4 border-[#fcfdfc] dark:border-[#0a0f0b]">
                      <span className="material-symbols-outlined text-lg font-black">
                        edit
                      </span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black uppercase tracking-widest text-[#15291b] dark:text-white">
                      Profile Visual
                    </p>
                    <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-tighter opacity-70">
                      PNG, JPG • Max Payload 2MB
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <button className="px-5 py-2 bg-[#13ec5b] text-[#15291b] text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
                        Uplink New
                      </button>
                      <button className="px-5 py-2 bg-[#f0f7f2] dark:bg-[#15291b] text-[#5c7a67] text-[10px] font-black uppercase tracking-widest rounded-xl border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-rose-500/50 hover:text-rose-500 transition-all">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Alex Johnson"
                      className="w-full bg-[#f0f7f2] dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[1.25rem] px-5 py-3.5 text-sm font-bold text-[#15291b] dark:text-white focus:border-[#13ec5b] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                      Primary Email Node
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        defaultValue="alex.johnson@edulearn.dna"
                        disabled
                        className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[1.25rem] px-5 py-3.5 text-sm font-bold text-[#5c7a67] opacity-60 cursor-not-allowed outline-none"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm text-[#5c7a67]">
                        lock
                      </span>
                    </div>
                    <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-tighter">
                      Institutional nodes are locked by the administrator.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                      Academic Brief (Bio)
                    </label>
                    <textarea
                      rows={4}
                      defaultValue="Sophomore Computer Science student with a focus on Neural Networks and Ethical AI deployment."
                      className="w-full bg-[#f0f7f2] dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[1.5rem] px-5 py-3.5 text-sm font-bold text-[#15291b] dark:text-white focus:border-[#13ec5b] outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* AI Preferences Section */}
            <section className="space-y-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-3 text-[#15291b] dark:text-white">
                  <span className="material-symbols-outlined text-[#13ec5b] fill-1">
                    auto_awesome
                  </span>
                  Neural Sync Calibration
                </h3>
                <p className="text-sm font-medium text-[#5c7a67] dark:text-[#a0c4ab]">
                  Define how the AI Engine interacts with your learning path.
                </p>
              </div>

              <div className="bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2.5rem] overflow-hidden divide-y divide-[#e7f3eb] dark:divide-[#1e3a27] shadow-sm">
                {[
                  {
                    title: "Personalized Roadmap Generation",
                    desc: "Enable real-time performance analysis to restructure course curriculum based on mastery levels.",
                    active: true,
                  },
                  {
                    title: "Predictive Deadline Nudges",
                    desc: "Allow AI to calculate historical study velocity and suggest optimal completion windows.",
                    active: true,
                  },
                  {
                    title: "Automated Neural Summaries",
                    desc: "Generate high-density knowledge abstracts from video lectures using Large Language Models.",
                    active: false,
                  },
                ].map((pref) => (
                  <div
                    key={pref.title}
                    className="p-8 flex items-start justify-between gap-8 group"
                  >
                    <div className="space-y-1.5">
                      <p className="text-sm font-black text-[#15291b] dark:text-white group-hover:text-[#13ec5b] transition-colors">
                        {pref.title}
                      </p>
                      <p className="text-xs font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed max-w-md">
                        {pref.desc}
                      </p>
                    </div>

                    {/* Technical Switch */}
                    <label className="relative inline-flex items-center cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        defaultChecked={pref.active}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-[#e7f3eb] dark:bg-[#0a0f0b] rounded-full peer peer-checked:bg-[#13ec5b] transition-all relative border border-transparent peer-checked:border-[#13ec5b]/20">
                        <div className="absolute top-1 left-1 size-4 rounded-full bg-[#15291b] dark:bg-white transition-all peer-checked:translate-x-6 peer-checked:bg-[#15291b]"></div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </section>

            {/* Critical Access Zone */}
            <section className="space-y-6 pt-4">
              <h3 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">
                Critical Lockdown Zone
              </h3>
              <div className="bg-rose-500/5 border border-rose-500/20 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-black text-rose-500 uppercase tracking-tight">
                    Purge Node Data
                  </p>
                  <p className="text-xs font-medium text-rose-500/70 mt-1">
                    Irreversibly delete your academic history and neural
                    profile.
                  </p>
                </div>
                <button className="px-8 py-3 bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20">
                  Delete Node
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions Hub */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/70 dark:bg-[#0a0f0b]/70 backdrop-blur-xl border-t border-[#e7f3eb] dark:border-[#1e3a27] p-5 z-40">
        <div className="max-w-3xl w-full mx-auto flex justify-end items-center gap-6">
          <button className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest hover:text-[#15291b] dark:hover:text-white transition-all">
            Discard
          </button>
          <button className="px-10 py-4 bg-[#13ec5b] text-[#15291b] text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-[#13ec5b]/20 hover:scale-105 active:scale-95 transition-all">
            Commit Changes
          </button>
        </div>
      </div>
    </div>
  );
}
