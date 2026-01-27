"use client";

import React from "react";

export default function SettingsPage() {
  return (
    <div className="flex h-full flex-col bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500">
      {/* Main Content Scrollable Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-3xl mx-auto px-6 py-10 pb-28">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                Account Settings
              </h2>
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-4">
              Manage your profile, preferences, and account security
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-white/5 mb-10 overflow-x-auto whitespace-nowrap no-scrollbar">
            <button className="px-6 py-3 text-sm font-black text-emerald-500 border-b-2 border-emerald-500 uppercase tracking-wider">
              Profile
            </button>
            <button className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider">
              Account Security
            </button>
            <button className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider">
              Notifications
            </button>
            <button className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider">
              AI Preferences
            </button>
          </div>

          <div className="space-y-12">
            {/* Profile Section */}
            <section className="space-y-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  Public Profile
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  This information will be visible to your instructors and
                  classmates.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="size-28 rounded-[2rem] overflow-hidden border-4 border-slate-100 dark:border-white/5 shadow-xl">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://ui-avatars.com/api/?name=Alex+Johnson&background=10b981&color=fff")',
                        }}
                      ></div>
                    </div>
                    <button className="absolute -bottom-2 -right-2 size-10 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-white/10 flex items-center justify-center text-emerald-500 hover:text-emerald-600 hover:scale-110 transition-all">
                      <span className="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-black mb-1 text-slate-900 dark:text-white uppercase tracking-wide">
                      Profile Picture
                    </p>
                    <p className="text-xs text-slate-500 mb-4 font-medium">
                      JPG, GIF or PNG. Max size of 2MB.
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-[10px] font-black rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all uppercase tracking-wider">
                        Upload New
                      </button>
                      <button className="px-5 py-2 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-[10px] font-black rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 transition-colors uppercase tracking-wider">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="full-name"
                      className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1"
                    >
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      defaultValue="Alex Johnson"
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      defaultValue="alex.johnson@edulearn.edu"
                      readOnly
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-bold text-slate-500 cursor-not-allowed outline-none shadow-inner"
                    />
                    <p className="text-[10px] font-bold text-slate-400 px-1">
                      Institutional email addresses cannot be changed.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="bio"
                      className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1"
                    >
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      defaultValue="Sophomore Computer Science student with a focus on AI and ethics. Passionate about leveraging technology for social impact."
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm resize-none"
                      placeholder="Tell us about your academic interests..."
                    ></textarea>
                    <p className="text-[10px] font-bold text-slate-400 px-1">
                      Brief description for your profile. 200 characters max.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-200 dark:border-white/5" />

            {/* AI Preferences Section */}
            <section className="space-y-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-black flex items-center gap-2 text-slate-900 dark:text-white tracking-tight">
                  <span className="material-symbols-outlined text-emerald-500">
                    auto_awesome
                  </span>
                  AI Preferences
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Customize how our AI tutor helps you learn.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-[2rem] overflow-hidden divide-y divide-slate-100 dark:divide-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none">
                {/* Preference Item 1 */}
                <div className="p-6 flex items-start justify-between gap-6 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Personalized Learning Recommendations
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-md">
                      The AI analyzes your performance to suggest specific study
                      materials and practice problems tailored to your needs.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="w-12 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                {/* Preference Item 2 */}
                <div className="p-6 flex items-start justify-between gap-6 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Smart Study Reminders
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-md">
                      Receive AI-generated nudges based on upcoming deadlines
                      and your historical study patterns.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="w-12 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                {/* Preference Item 3 */}
                <div className="p-6 flex items-start justify-between gap-6 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Automatic Transcription
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-md">
                      Automatically transcribe and summarize your recorded
                      lectures for easier review and keyword searching.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-12 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              </div>
            </section>

            {/* Danger Zone */}
            <section className="space-y-4 pt-4">
              <h3 className="text-lg font-black text-rose-500 uppercase tracking-widest">
                Danger Zone
              </h3>
              <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-500/20 rounded-[2rem] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black text-rose-600 dark:text-rose-400">
                    Delete Account
                  </p>
                  <p className="text-xs font-medium text-rose-600/70 dark:text-rose-400/70 mt-1">
                    Permanently remove your account and all associated data.
                    This action cannot be undone.
                  </p>
                </div>
                <button className="px-5 py-2.5 bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider rounded-xl hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/20 transition-all shrink-0">
                  Delete Account
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 p-4 flex justify-end z-10">
        <div className="max-w-3xl w-full mx-auto flex justify-end gap-3 px-2">
          <button className="px-6 py-3 text-xs font-black text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider rounded-xl hover:bg-slate-100 dark:hover:bg-white/5">
            Cancel
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-black rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all uppercase tracking-wider">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
