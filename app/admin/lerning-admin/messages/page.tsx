"use client";

import React, { useState } from "react";

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "instructors" | "groups">(
    "all",
  );
  const [input, setInput] = useState("");

  // State to handle mobile view switching
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  // Helper to open chat on mobile
  const handleChatSelect = () => {
    setIsMobileChatOpen(true);
  };

  // Helper to go back to list on mobile
  const handleBackToList = () => {
    setIsMobileChatOpen(false);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500">
      {/* LEFT COLUMN: Conversation List
       */}
      <aside
        className={`
          flex-col border-r border-slate-200 dark:border-white/5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex-shrink-0 transition-all
          ${isMobileChatOpen ? "hidden md:flex" : "flex w-full"} 
          md:w-[340px]
        `}
      >
        <div className="p-5 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              Messages
            </h1>
            <button className="size-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
              <span className="material-symbols-outlined text-[20px]">
                edit_square
              </span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-white/5 border border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-emerald-500/50 rounded-xl text-sm font-bold placeholder:text-slate-400 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
              placeholder="Search conversations..."
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex p-1 bg-slate-100 dark:bg-white/5 rounded-xl">
            {["all", "instructors", "groups"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-white dark:bg-slate-800 text-emerald-500 shadow-sm"
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto px-3 pb-3 custom-scrollbar space-y-1">
          {/* Active Item */}
          <div
            onClick={handleChatSelect}
            className="group flex items-center gap-3 p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 cursor-pointer transition-all hover:bg-emerald-500/10"
          >
            <div className="relative shrink-0">
              <div
                className="size-12 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://ui-avatars.com/api/?name=Emily+Chen&background=10b981&color=fff")',
                }}
              ></div>
              <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-emerald-500 border-[3px] border-white dark:border-[#020617]"></div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  Dr. Emily Chen
                </p>
                <span className="text-[10px] text-emerald-500 font-bold">
                  10:24 AM
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                The lecture notes are attached...
              </p>
            </div>
          </div>

          {/* Other Item */}
          <div
            onClick={handleChatSelect}
            className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent cursor-pointer transition-all"
          >
            <div className="relative shrink-0">
              <div
                className="size-12 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://ui-avatars.com/api/?name=Marcus+Wright&background=random")',
                }}
              ></div>
              <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-slate-300 border-[3px] border-white dark:border-[#020617]"></div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  Marcus Wright
                </p>
                <span className="text-[10px] text-slate-400 font-bold">
                  9:45 AM
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 truncate">
                Hey, did you see the new assignment?
              </p>
            </div>
            <div className="shrink-0">
              <div className="size-5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-[10px] text-white flex items-center justify-center font-black shadow-lg shadow-emerald-500/20">
                2
              </div>
            </div>
          </div>

          {/* Group Item */}
          <div
            onClick={handleChatSelect}
            className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent cursor-pointer transition-all"
          >
            <div className="relative shrink-0">
              <div className="size-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <span className="material-symbols-outlined">groups</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  Bio Study Group
                </p>
                <span className="text-[10px] text-slate-400 font-bold">
                  Yesterday
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 truncate">
                Sarah: Let&apos;s meet at 5PM
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* CENTER COLUMN: Main Chat Window
       */}
      <section
        className={`
          flex-1 flex-col bg-slate-50 dark:bg-[#020617] relative min-w-0
          ${
            isMobileChatOpen
              ? "flex w-full absolute inset-0 z-20"
              : "hidden md:flex md:static"
          }
        `}
      >
        {/* Chat Header */}
        <header className="h-20 shrink-0 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
            {/* Back Button (Mobile Only) */}
            <button
              onClick={handleBackToList}
              className="md:hidden p-2 -ml-2 text-slate-500 hover:text-emerald-500"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  Dr. Emily Chen
                </h3>
                <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest">
                  Instructor
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-xs font-bold text-slate-400">
                  Advanced Biology 101 •{" "}
                  <span className="text-emerald-500 italic">typing...</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="size-10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 hover:text-emerald-500 transition-colors">
              <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="size-10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 hover:text-emerald-500 transition-colors">
              <span className="material-symbols-outlined">call</span>
            </button>
            <button className="size-10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 hover:text-emerald-500 transition-colors xl:hidden">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 custom-scrollbar">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 rounded-full bg-slate-200 dark:bg-white/10 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Today, Oct 24
            </span>
          </div>

          {/* Received Message */}
          <div className="flex items-start gap-4 max-w-[90%] md:max-w-[80%]">
            <div
              className="size-10 rounded-2xl bg-cover bg-center shrink-0 shadow-sm"
              style={{
                backgroundImage:
                  'url("https://ui-avatars.com/api/?name=Emily+Chen&background=10b981&color=fff")',
              }}
            ></div>
            <div className="flex flex-col gap-1">
              <div className="bg-white dark:bg-[#0f172a] p-5 rounded-[1.5rem] rounded-tl-none shadow-sm border border-slate-100 dark:border-white/5">
                <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                  Hello! I&apos;ve reviewed your latest submission. The
                  methodology looks solid, but I&apos;ve added some notes on the
                  data visualization part.
                </p>
              </div>
              <span className="text-[10px] font-bold text-slate-400 ml-2">
                10:15 AM
              </span>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-start gap-4 max-w-[90%] md:max-w-[80%] flex-row-reverse">
              <div className="flex flex-col gap-1 items-end">
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white p-5 rounded-[1.5rem] rounded-tr-none shadow-lg shadow-emerald-500/20">
                  <p className="text-sm font-medium leading-relaxed">
                    Thank you, Dr. Chen! I&apos;ll take a look right away. Are
                    the notes in the PDF you mentioned?
                  </p>
                </div>
                <div className="flex items-center gap-1 mr-2">
                  <span className="text-[10px] font-bold text-slate-400">
                    10:20 AM
                  </span>
                  <span className="material-symbols-outlined text-emerald-500 text-[16px]">
                    done_all
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Thread Reply (Received) */}
          <div className="flex items-start gap-4 max-w-[90%] md:max-w-[80%]">
            <div
              className="size-10 rounded-2xl bg-cover bg-center shrink-0 shadow-sm"
              style={{
                backgroundImage:
                  'url("https://ui-avatars.com/api/?name=Emily+Chen&background=10b981&color=fff")',
              }}
            ></div>
            <div className="flex flex-col gap-1">
              <div className="bg-white dark:bg-[#0f172a] p-5 rounded-[1.5rem] rounded-tl-none shadow-sm border border-slate-100 dark:border-white/5">
                {/* Reply Context */}
                <div className="border-l-[3px] border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 p-3 mb-4 rounded-r-lg">
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-wider mb-1">
                    You replied
                  </p>
                  <p className="text-xs font-medium text-slate-500 truncate italic">
                    &quot;Are the notes in the PDF you mentioned?&quot;
                  </p>
                </div>
                <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                  Yes, exactly. I&apos;ve attached the marked-up PDF below for
                  your reference. Let me know if you have questions about the
                  revised Chart 3.
                </p>
              </div>

              {/* Attachment Card */}
              <div className="mt-2 w-full sm:w-80 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-4 flex items-center gap-4 shadow-sm hover:border-emerald-500/30 hover:shadow-md transition-all cursor-pointer group">
                <div className="size-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">
                    picture_as_pdf
                  </span>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-500 transition-colors">
                    Feedback_Methods_v2.pdf
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    2.4 MB • PDF Document
                  </p>
                </div>
                <button className="size-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                </button>
              </div>
              <span className="text-[10px] font-bold text-slate-400 ml-2">
                10:24 AM
              </span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5">
          <div className="flex flex-col gap-2 bg-slate-50 dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-white/5 p-2 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
            {/* Toolbar */}
            <div className="flex items-center gap-1 px-3 border-b border-slate-200 dark:border-white/5 pb-2 mb-1 overflow-x-auto no-scrollbar">
              {["format_bold", "format_italic", "link"].map((icon) => (
                <button
                  key={icon}
                  className="p-1.5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg text-slate-400 hover:text-emerald-500 transition-colors shrink-0"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {icon}
                  </span>
                </button>
              ))}
              <div className="w-px h-4 bg-slate-300 dark:bg-white/10 mx-2 shrink-0"></div>
              {["format_list_bulleted", "code"].map((icon) => (
                <button
                  key={icon}
                  className="p-1.5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg text-slate-400 hover:text-emerald-500 transition-colors shrink-0"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {icon}
                  </span>
                </button>
              ))}
            </div>

            {/* Text Input */}
            <div className="flex items-end gap-2 md:gap-3 px-2 pb-1">
              <button className="mb-2 p-2 text-slate-400 hover:text-emerald-500 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-xl">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium resize-none py-2.5 max-h-32 min-h-[44px] placeholder:text-slate-400 dark:text-white outline-none"
                placeholder="Write a message..."
              ></textarea>
              <div className="flex items-center gap-2 mb-1.5">
                <button className="p-2 text-slate-400 hover:text-emerald-500 transition-colors hidden sm:block hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-xl">
                  <span className="material-symbols-outlined">
                    sentiment_satisfied
                  </span>
                </button>
                <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white size-10 flex items-center justify-center rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Info Panel
       */}
      <aside className="hidden xl:flex w-[340px] flex-col border-l border-slate-200 dark:border-white/5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl overflow-y-auto custom-scrollbar flex-shrink-0">
        <div className="p-8 flex flex-col items-center text-center">
          <div
            className="size-28 rounded-[2rem] border-4 border-slate-100 dark:border-slate-800 shadow-2xl bg-cover bg-center mb-5"
            style={{
              backgroundImage:
                'url("https://ui-avatars.com/api/?name=Emily+Chen&background=10b981&color=fff")',
            }}
          ></div>
          <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
            Dr. Emily Chen
          </h4>
          <p className="text-sm text-slate-500 font-medium mb-3">
            Senior Lecturer, Biology Dept.
          </p>
          <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
            Faculty Member
          </span>
        </div>

        <div className="px-6 space-y-8">
          {/* About/Context */}
          <div className="space-y-3">
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Course Information
            </h5>
            <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Advanced Biology 101
              </p>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Status: Active Participant
              </p>
            </div>
          </div>

          {/* Shared Media */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Shared Photos
              </h5>
              <button className="text-[10px] text-emerald-500 font-black hover:underline uppercase tracking-wider">
                View All
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-square rounded-xl bg-cover bg-center bg-slate-200 dark:bg-slate-800 relative group cursor-pointer overflow-hidden"
                  style={{
                    backgroundImage: `url("https://picsum.photos/200/200?random=${item}")`,
                  }}
                >
                  {item === 3 && (
                    <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-white text-xs font-black backdrop-blur-sm group-hover:bg-slate-900/40 transition-colors">
                      +12
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Files */}
          <div className="space-y-4">
            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Files & Documents
            </h5>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-white/10 group">
                <div className="size-10 bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    description
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    Syllabus_2024.pdf
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    1.2 MB
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-white/10 group">
                <div className="size-10 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    table_chart
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    Grade_Rubric.xlsx
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    45 KB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="pt-6 space-y-4 border-t border-slate-200 dark:border-white/5">
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  notifications_off
                </span>
                <span className="text-xs font-bold">Mute notifications</span>
              </div>
              <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 dark:bg-slate-700">
                <span className="inline-block h-3 w-3 transform rounded-full bg-white transition translate-x-1" />
              </div>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  push_pin
                </span>
                <span className="text-xs font-bold">Pin conversation</span>
              </div>
              <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500">
                <span className="inline-block h-3 w-3 transform rounded-full bg-white transition translate-x-5" />
              </div>
            </div>
            <button className="w-full flex items-center gap-3 text-rose-500 hover:text-rose-600 transition-colors py-2 group">
              <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform">
                block
              </span>
              <span className="text-xs font-black uppercase tracking-wider">
                Block Participant
              </span>
            </button>
          </div>
        </div>
        <div className="h-12 shrink-0"></div>
      </aside>
    </div>
  );
}
