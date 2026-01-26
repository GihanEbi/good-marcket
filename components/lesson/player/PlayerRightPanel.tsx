"use client";

import React, { useState } from "react";

export function PlayerRightPanel() {
  const [activeTab, setActiveTab] = useState<"mentor" | "notes">("notes");

  // --- Chat State (For Mentor Tab) ---
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Neural Link established. I'm watching the stream with you. Ask for a synthesis or specific logic clarification.",
    },
    { role: "user", text: "What's the difference between Sigmoid and ReLU?" },
    {
      role: "ai",
      text: "Logic Analysis: Sigmoid maps values to (0,1), whereas ReLU maps negative values to zero and maintains positive values, allowing for faster neural training.",
    },
  ]);

  const handleChatSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: chatInput }]);
    setChatInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Processing node... Let me break down that architectural logic.",
        },
      ]);
    }, 1000);
  };

  return (
    <aside className="w-[400px] flex-shrink-0 border-l border-[#e7f3eb] dark:border-[#1e3a27] bg-[#fcfdfc] dark:bg-[#0a0f0b] flex flex-col h-full transition-colors duration-300">
      {/* --- Top Navigation Pipeline --- */}
      <div className="flex items-center justify-between border-b border-[#e7f3eb] dark:border-[#1e3a27] px-4 flex-shrink-0">
        <div className="flex">
          {[
            { id: "mentor", label: "Mentor", icon: "psychology" },
            { id: "notes", label: "Protocol", icon: "terminal" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-5 px-6 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-all relative ${
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
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full shadow-[0_0_10px_#13ec5b]"></div>
              )}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 rounded-xl bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] text-[9px] font-black uppercase tracking-widest hover:bg-[#13ec5b] dark:hover:bg-[#13ec5b] transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">sync</span> Sync
        </button>
      </div>

      {/* --- Main Neural Content Area --- */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* ======================= */}
        {/* VIEW: PROTOCOL NOTES    */}
        {/* ======================= */}
        {activeTab === "notes" && (
          <>
            {/* AI Status HUD */}
            <div className="p-4 bg-[#13ec5b]/5 border-b border-[#13ec5b]/10 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="size-2 bg-[#13ec5b] rounded-full animate-pulse shadow-[0_0_8px_#13ec5b]"></div>
                <span className="text-[9px] font-black text-[#13ec5b] uppercase tracking-[0.2em]">
                  Neural Link Active
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-black text-[#5c7a67] uppercase tracking-widest">
                  Auto-Synthesis
                </span>
                <button className="relative inline-flex h-4 w-8 items-center rounded-full bg-[#13ec5b]">
                  <span className="inline-block h-2.5 w-2.5 transform rounded-full bg-[#15291b] transition translate-x-4.5"></span>
                </button>
              </div>
            </div>

            {/* Scrollable Data Stream */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-6">
              {/* Note Card 1: AI Snippet */}
              <div className="bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] p-5 shadow-sm relative group hover:border-[#13ec5b]/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-black bg-[#13ec5b] text-[#15291b] px-2 py-0.5 rounded-full uppercase tracking-widest">
                      AI Capture
                    </span>
                    <button className="text-[9px] font-black text-[#13ec5b] font-mono">
                      [08:42]
                    </button>
                  </div>
                </div>
                <div className="bg-[#fcfdfc] dark:bg-[#0a0f0b] rounded-2xl p-4 border border-[#e7f3eb] dark:border-[#1e3a27]">
                  <p className="text-[9px] font-black text-[#5c7a67] mb-2 uppercase tracking-widest italic">
                    Core Definition
                  </p>
                  <p className="text-xs text-[#15291b] dark:text-[#a0c4ab] leading-relaxed font-medium">
                    <strong className="text-[#13ec5b]">ReLU Node:</strong> f(x)
                    = max(0, x). Designed to mitigate vanishing gradients in
                    high-density networks.
                  </p>
                </div>
              </div>

              {/* Note Card 2: User Protocol */}
              <div className="bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:shadow-[#13ec5b]/5 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-black px-2 py-1 rounded-lg bg-[#f0f7f2] dark:bg-[#0a0f0b] text-[#13ec5b] border border-[#13ec5b]/10 font-mono">
                    [04:15]
                  </span>
                  <span className="text-[9px] text-[#5c7a67] font-black uppercase tracking-widest">
                    Entry Stamped
                  </span>
                </div>
                <div className="text-xs font-medium text-[#15291b] dark:text-[#a0c4ab] leading-relaxed space-y-2">
                  <p>
                    Distinguish between{" "}
                    <strong className="text-[#13ec5b]">Sigmoid</strong> and{" "}
                    <strong className="text-[#13ec5b]">ReLU</strong> for
                    architectural layers.
                  </p>
                  <ul className="space-y-1 opacity-80">
                    <li className="flex gap-2">
                      <span className="text-[#13ec5b]">/</span> Sigmoid: (0, 1)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#13ec5b]">/</span> ReLU: [0, ∞)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Neural Console Input Area */}
            <div className="p-6 border-t border-[#e7f3eb] dark:border-[#1e3a27] bg-white dark:bg-[#0a0f0b] relative flex-shrink-0">
              {/* Technical Toolbar */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white dark:bg-[#15291b] px-3 py-2 rounded-2xl shadow-2xl border border-[#e7f3eb] dark:border-[#1e3a27] z-10">
                {["format_bold", "terminal", "link", "psychology"].map(
                  (icon) => (
                    <button
                      key={icon}
                      className="p-1.5 hover:text-[#13ec5b] text-[#5c7a67] transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">
                        {icon}
                      </span>
                    </button>
                  ),
                )}
              </div>

              <div className="relative group pt-4">
                <textarea
                  className="min-h-[120px] w-full rounded-[1.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] bg-[#f0f7f2] dark:bg-[#15291b] p-4 text-xs font-bold focus:border-[#13ec5b] transition-all outline-none resize-none placeholder-[#5c7a67] text-[#15291b] dark:text-white"
                  placeholder="Annotate learning protocol..."
                ></textarea>
                <button className="absolute bottom-4 right-4 bg-[#13ec5b] text-[#15291b] text-[10px] font-black uppercase tracking-widest py-2.5 px-5 rounded-xl shadow-lg shadow-[#13ec5b]/20 hover:scale-105 transition-all flex items-center gap-2">
                  Commit Note{" "}
                  <span className="material-symbols-outlined text-sm font-black">
                    save
                  </span>
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#13ec5b] text-base">
                    timer
                  </span>
                  <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                    Auto-Stamp: 08:42
                  </span>
                </div>
                <p className="text-[8px] font-black text-[#5c7a67] uppercase tracking-widest">
                  CMD + ENTER to Transmit
                </p>
              </div>
            </div>
          </>
        )}

        {/* ======================= */}
        {/* VIEW: NEURAL MENTOR      */}
        {/* ======================= */}
        {activeTab === "mentor" && (
          <>
            <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-8">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-4 ${m.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`size-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                      m.role === "ai"
                        ? "bg-[#15291b] border-[#13ec5b]/30 text-[#13ec5b]"
                        : "bg-[#0a0f0b] border-[#1e3a27] overflow-hidden"
                    }`}
                  >
                    {m.role === "ai" ? (
                      <span className="material-symbols-outlined text-sm font-black animate-pulse">
                        psychology
                      </span>
                    ) : (
                      <img
                        src="https://ui-avatars.com/api/?name=User&background=13ec5b&color=15291b&bold=true"
                        className="w-full h-full object-cover"
                        alt="User"
                      />
                    )}
                  </div>
                  <div
                    className={`p-4 rounded-[1.5rem] text-xs font-medium leading-relaxed shadow-sm ${
                      m.role === "ai"
                        ? "bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-tl-none text-[#15291b] dark:text-[#a0c4ab]"
                        : "bg-[#13ec5b] text-[#15291b] rounded-tr-none font-bold"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Logic Suggestions */}
            <div className="px-6 pb-2 flex-shrink-0">
              <div className="flex flex-wrap gap-2 py-4 border-t border-[#e7f3eb] dark:border-[#1e3a27]">
                {[
                  "Synthesize Stream",
                  "Explain Backprop",
                  "Test Knowledge",
                ].map((chip) => (
                  <button
                    key={chip}
                    className="text-[8px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] hover:border-[#13ec5b] hover:text-[#13ec5b] transition-all"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Engine */}
            <div className="p-6 border-t border-[#e7f3eb] dark:border-[#1e3a27] flex-shrink-0 bg-white dark:bg-[#0a0f0b]">
              <form onSubmit={handleChatSend} className="relative group">
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleChatSend();
                    }
                  }}
                  className="w-full rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27] bg-[#f0f7f2] dark:bg-[#15291b] text-xs font-bold pr-12 pl-4 py-4 focus:border-[#13ec5b] outline-none resize-none dark:text-white transition-all"
                  placeholder="Query Neural Mentor..."
                  rows={2}
                ></textarea>
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 size-8 bg-[#13ec5b] text-[#15291b] rounded-xl flex items-center justify-center shadow-lg shadow-[#13ec5b]/20"
                >
                  <span className="material-symbols-outlined text-sm font-black">
                    arrow_upward
                  </span>
                </button>
              </form>
              <p className="text-[8px] text-center text-[#5c7a67] font-black uppercase tracking-[0.3em] mt-4 opacity-60">
                Neural Insight Engine • Sync Active
              </p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
