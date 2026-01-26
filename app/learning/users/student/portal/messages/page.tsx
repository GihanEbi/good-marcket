"use client";

import React, { useState } from "react";

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "instructors" | "groups">(
    "all",
  );
  const [input, setInput] = useState("");
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const handleChatSelect = () => setIsMobileChatOpen(true);
  const handleBackToList = () => setIsMobileChatOpen(false);

  return (
    <div className="flex h-[calc(100vh-64px)] bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 overflow-hidden relative transition-colors duration-300">
      {/* LEFT COLUMN: Node Directory */}
      <aside
        className={`
          flex-col border-r border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#0a0f0b] flex-shrink-0 transition-all
          ${isMobileChatOpen ? "hidden md:flex" : "flex w-full"} 
          md:w-[360px]
        `}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-black uppercase tracking-widest text-[#5c7a67]">
              Directory
            </h1>
            <button className="flex items-center justify-center size-10 rounded-xl bg-[#13ec5b]/10 text-[#13ec5b] hover:bg-[#13ec5b] hover:text-[#15291b] transition-all">
              <span className="material-symbols-outlined font-black">
                edit_square
              </span>
            </button>
          </div>

          {/* Search Engine */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5c7a67] text-lg">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-3 bg-[#f0f7f2] dark:bg-[#15291b] border-none rounded-2xl text-xs font-bold placeholder-[#5c7a67] focus:ring-1 focus:ring-[#13ec5b] outline-none transition-all"
              placeholder="Filter communication nodes..."
            />
          </div>

          {/* Filter Pipeline */}
          <div className="flex border-b border-[#e7f3eb] dark:border-[#1e3a27]">
            {["all", "instructors", "groups"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 py-3 text-[10px] uppercase font-black tracking-widest transition-all ${
                  activeTab === tab
                    ? "text-[#13ec5b] border-b-2 border-[#13ec5b]"
                    : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-10 scrollbar-hide">
          {/* Active Node */}
          <div
            onClick={handleChatSelect}
            className="flex items-center gap-4 p-4 rounded-[1.5rem] bg-[#13ec5b]/10 border border-[#13ec5b]/20 cursor-pointer group"
          >
            <div className="relative shrink-0">
              <div className="size-12 rounded-2xl bg-[#0a0f0b] border border-[#13ec5b]/30 flex items-center justify-center overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Emily+Chen&background=15291b&color=13ec5b"
                  alt="Emily"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-[#13ec5b] border-2 border-white dark:border-[#0a0f0b] shadow-[0_0_8px_#13ec5b]"></div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-xs font-black text-[#15291b] dark:text-white truncate uppercase tracking-tight">
                  Dr. Emily Chen
                </p>
                <span className="text-[9px] text-[#13ec5b] font-black uppercase tracking-tighter">
                  10:24 AM
                </span>
              </div>
              <p className="text-[11px] text-[#5c7a67] dark:text-[#a0c4ab] truncate font-medium">
                The lecture notes are attached...
              </p>
            </div>
          </div>

          {/* Unread Node */}
          <div
            onClick={handleChatSelect}
            className="flex items-center gap-4 p-4 rounded-[1.5rem] hover:bg-[#f0f7f2] dark:hover:bg-[#15291b]/50 cursor-pointer transition-all group"
          >
            <div className="relative shrink-0">
              <div className="size-12 rounded-2xl bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden group-hover:border-[#13ec5b]/40">
                <img
                  src="https://ui-avatars.com/api/?name=Marcus+Wright&background=0a0f0b&color=13ec5b"
                  alt="Marcus"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <p className="text-xs font-black text-[#15291b] dark:text-white truncate uppercase tracking-tight">
                  Marcus Wright
                </p>
                <span className="text-[9px] text-[#5c7a67] font-black uppercase tracking-tighter">
                  9:45 AM
                </span>
              </div>
              <p className="text-[11px] text-[#15291b] dark:text-white font-black truncate">
                Hey, did you see the new assignment?
              </p>
            </div>
            <div className="size-5 rounded-lg bg-[#13ec5b] text-[9px] text-[#15291b] flex items-center justify-center font-black shadow-lg shadow-[#13ec5b]/20">
              2
            </div>
          </div>
        </div>
      </aside>

      {/* CENTER COLUMN: Main Neural Link (Chat) */}
      <section
        className={`
          flex-1 flex-col bg-[#fcfdfc] dark:bg-[#0a0f0b] relative min-w-0
          ${isMobileChatOpen ? "flex w-full absolute inset-0 z-20" : "hidden md:flex md:static"}
        `}
      >
        {/* Connection Header */}
        <header className="h-20 shrink-0 border-b border-[#e7f3eb] dark:border-[#1e3a27] bg-white/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToList}
              className="md:hidden p-1 mr-1 text-[#5c7a67] hover:text-[#13ec5b]"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black text-[#15291b] dark:text-white uppercase tracking-tight">
                  Dr. Emily Chen
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#13ec5b]/10 text-[#13ec5b] text-[8px] font-black uppercase tracking-widest border border-[#13ec5b]/20">
                  Instructor
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="size-1.5 rounded-full bg-[#13ec5b] animate-pulse shadow-[0_0_8px_#13ec5b]"></div>
                <p className="text-[10px] text-[#5c7a67] font-black uppercase tracking-tighter">
                  Advanced Biology •{" "}
                  <span className="italic">Neural Link Active</span>
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Message Pipeline */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 scrollbar-hide">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 rounded-full bg-[#f0f7f2] dark:bg-[#15291b] text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em] border border-[#e7f3eb] dark:border-[#1e3a27]">
              Transmission Date: Oct 24
            </span>
          </div>

          {/* Received Payload */}
          <div className="flex items-start gap-4 max-w-[90%] md:max-w-[80%]">
            <div className="size-9 rounded-xl bg-[#15291b] border border-[#13ec5b]/20 shrink-0 overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?name=Emily+Chen&background=15291b&color=13ec5b"
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white dark:bg-[#15291b] p-5 rounded-[2rem] rounded-tl-none shadow-sm border border-[#e7f3eb] dark:border-[#1e3a27]">
                <p className="text-xs leading-relaxed font-medium text-[#15291b] dark:text-[#a0c4ab]">
                  Hello! I've reviewed your latest submission. The methodology
                  looks solid, but I've added some notes on the data
                  visualization part.
                </p>
              </div>
              <span className="text-[9px] font-black text-[#5c7a67] uppercase tracking-tighter ml-2">
                10:15 AM
              </span>
            </div>
          </div>

          {/* Sent Payload */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-start gap-4 max-w-[90%] md:max-w-[80%] flex-row-reverse">
              <div className="flex flex-col gap-2 items-end">
                <div className="bg-[#15291b] text-white p-5 rounded-[2rem] rounded-tr-none shadow-xl shadow-black/5 border border-[#13ec5b]/20">
                  <p className="text-xs leading-relaxed font-medium">
                    Thank you, Dr. Chen! I'll take a look right away. Are the
                    notes in the PDF you mentioned?
                  </p>
                </div>
                <div className="flex items-center gap-2 mr-2">
                  <span className="text-[9px] font-black text-[#5c7a67] uppercase tracking-tighter">
                    10:20 AM
                  </span>
                  <span className="material-symbols-outlined text-[#13ec5b] text-base font-black">
                    done_all
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Attachment Node */}
          <div className="flex items-start gap-4 max-w-[90%] md:max-w-[80%]">
            <div className="size-9 rounded-xl bg-[#15291b] border border-[#13ec5b]/20 shrink-0 overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?name=Emily+Chen&background=15291b&color=13ec5b"
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white dark:bg-[#15291b] p-5 rounded-[2rem] rounded-tl-none shadow-sm border border-[#e7f3eb] dark:border-[#1e3a27] space-y-4">
                <div className="border-l-4 border-[#13ec5b] bg-[#13ec5b]/5 p-3 rounded-r-2xl">
                  <p className="text-[9px] text-[#13ec5b] font-black uppercase tracking-widest mb-1">
                    Reply Ref
                  </p>
                  <p className="text-[11px] text-[#5c7a67] italic truncate">
                    "Are the notes in the PDF...?"
                  </p>
                </div>
                <p className="text-xs leading-relaxed font-medium text-[#15291b] dark:text-[#a0c4ab]">
                  Yes, exactly. I've attached the marked-up PDF below for
                  reference.
                </p>

                {/* Data Object Card */}
                <div className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27] p-4 flex items-center gap-4 hover:border-[#13ec5b]/40 transition-all cursor-pointer group">
                  <div className="size-11 rounded-xl bg-[#13ec5b]/10 text-[#13ec5b] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined font-black">
                      picture_as_pdf
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-black text-[#15291b] dark:text-white truncate uppercase tracking-tight">
                      Feedback_v2.pdf
                    </p>
                    <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-widest mt-0.5">
                      2.4 MB • PAYLOAD
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-[#5c7a67] group-hover:text-[#13ec5b] transition-all">
                    download
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-black text-[#5c7a67] uppercase tracking-tighter ml-2">
                10:24 AM
              </span>
            </div>
          </div>
        </div>

        {/* Console Input Area */}
        <div className="p-6 md:p-8 bg-white dark:bg-[#0a0f0b] border-t border-[#e7f3eb] dark:border-[#1e3a27]">
          <div className="flex flex-col gap-3 bg-[#f0f7f2] dark:bg-[#15291b] rounded-[2rem] p-3 border border-transparent focus-within:border-[#13ec5b]/30 transition-all">
            <div className="flex items-center gap-2 px-3 pb-2 border-b border-[#e7f3eb] dark:border-[#1e3a27]">
              {["format_bold", "link", "code", "attach_file"].map((icon) => (
                <button
                  key={icon}
                  className="p-2 hover:text-[#13ec5b] text-[#5c7a67] transition-all"
                >
                  <span className="material-symbols-outlined text-lg">
                    {icon}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-end gap-3 px-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 text-xs font-bold py-2 max-h-32 min-h-[40px] placeholder-[#5c7a67] dark:text-white outline-none"
                placeholder="Initialize message transmission..."
              />
              <button className="bg-[#13ec5b] hover:scale-105 text-[#15291b] size-12 flex items-center justify-center rounded-2xl shadow-xl shadow-[#13ec5b]/20 transition-all active:scale-95 mb-1">
                <span className="material-symbols-outlined font-black">
                  send
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT COLUMN: Profile Analytics */}
      <aside className="hidden xl:flex w-[340px] flex-col border-l border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#0a0f0b] overflow-y-auto scrollbar-hide flex-shrink-0 p-8 space-y-10">
        <div className="flex flex-col items-center text-center">
          <div className="size-28 rounded-[2.5rem] border-4 border-[#f0f7f2] dark:border-[#15291b] shadow-2xl overflow-hidden mb-6">
            <img
              src="https://ui-avatars.com/api/?name=Emily+Chen&background=15291b&color=13ec5b"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          <h4 className="text-lg font-black text-[#15291b] dark:text-white uppercase tracking-tight">
            Dr. Emily Chen
          </h4>
          <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mt-1">
            Lead AI Instructor
          </p>
          <div className="mt-4 px-3 py-1 bg-[#13ec5b]/10 text-[#13ec5b] text-[8px] font-black rounded-full uppercase tracking-widest border border-[#13ec5b]/20">
            Node: Verified Faculty
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h5 className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.3em]">
              Module Context
            </h5>
            <div className="bg-[#f0f7f2] dark:bg-[#15291b] p-4 rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27]">
              <p className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight">
                Advanced Biology 101
              </p>
              <p className="text-[9px] font-black text-[#13ec5b] mt-1 uppercase tracking-widest">
                Active Connection
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.3em]">
                Shared DNA
              </h5>
              <button className="text-[9px] font-black text-[#13ec5b] uppercase hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-[#15291b] border border-[#1e3a27] overflow-hidden group cursor-pointer"
                >
                  <img
                    src={`https://picsum.photos/200/200?random=${i}`}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all"
                    alt="Media"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#e7f3eb] dark:border-[#1e3a27] space-y-4">
            {["Mute Channel", "Pin Conversation"].map((label, i) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-[11px] font-black text-[#5c7a67] uppercase tracking-tight">
                  {label}
                </span>
                <div
                  className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-all ${i === 1 ? "bg-[#13ec5b]" : "bg-[#e7f3eb] dark:bg-[#1e3a27]"}`}
                >
                  <div
                    className={`size-3 rounded-full bg-white transition-all ${i === 1 ? "translate-x-5" : "translate-x-0"}`}
                  ></div>
                </div>
              </div>
            ))}
            <button className="w-full flex items-center gap-3 text-rose-500 font-black text-[10px] uppercase tracking-widest pt-4 hover:text-rose-400 transition-all">
              <span className="material-symbols-outlined text-lg">block</span>
              Restrict Access
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
