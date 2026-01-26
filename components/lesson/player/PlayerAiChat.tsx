"use client";

import React, { useState } from "react";

export function PlayerAiChat() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Neural Link established. I'm analyzing the stream with you. Feel free to ask for a synthesis of the current module or deep logic clarification.",
    },
    { role: "user", text: "What's the difference between Sigmoid and ReLU?" },
    {
      role: "ai",
      text: "Logic Analysis: Sigmoid maps values to (0,1) which can cause 'vanishing gradients.' ReLU maps all negative values to zero and keeps positive values, allowing for faster neural training in deep architectures.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    // Mock AI response delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Processing query... Let me break down the architectural logic for you.",
        },
      ]);
    }, 1000);
  };

  return (
    <aside className="w-[380px] flex-shrink-0 border-l border-[#e7f3eb] dark:border-[#1e3a27] bg-[#fcfdfc] dark:bg-[#0a0f0b] flex flex-col h-full transition-colors duration-300">
      {/* Neural Interface Tabs */}
      <div className="flex border-b border-[#e7f3eb] dark:border-[#1e3a27] flex-shrink-0">
        <button className="flex-1 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#13ec5b] border-b-2 border-[#13ec5b] flex items-center justify-center gap-2 shadow-[inset_0_-10px_10px_-10px_rgba(19,236,91,0.2)]">
          <span className="material-symbols-outlined text-lg fill-1">
            auto_awesome
          </span>
          AI Mentor
        </button>
        <button className="flex-1 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white flex items-center justify-center gap-2 transition-all">
          <span className="material-symbols-outlined text-lg">terminal</span>
          Protocol Notes
        </button>
      </div>

      {/* Message Stream Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 p-6 overflow-y-auto scrollbar-hide space-y-8">
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
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div
                className={`p-4 rounded-[1.5rem] text-xs font-medium leading-relaxed shadow-sm ${
                  m.role === "ai"
                    ? "bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-tl-none text-[#15291b] dark:text-[#a0c4ab]"
                    : "bg-[#13ec5b] text-[#15291b] rounded-tr-none font-bold shadow-lg shadow-[#13ec5b]/10"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Suggestion Nodes */}
        <div className="px-6 pb-2 flex-shrink-0">
          <div className="flex flex-wrap gap-2 py-3 border-t border-[#e7f3eb] dark:border-[#1e3a27]">
            {["Synthesize lesson", "Explain Logic", "Knowledge Check"].map(
              (chip) => (
                <button
                  key={chip}
                  className="text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-xl border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] hover:border-[#13ec5b] hover:text-[#13ec5b] bg-white dark:bg-[#0a0f0b] transition-all"
                >
                  {chip}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Console Input Area */}
        <div className="p-6 bg-white dark:bg-[#0a0f0b] border-t border-[#e7f3eb] dark:border-[#1e3a27] flex-shrink-0">
          <form onSubmit={handleSend} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#13ec5b] to-[#5c7a67] rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="w-full rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27] bg-[#f0f7f2] dark:bg-[#15291b] text-xs font-bold pr-12 pl-4 py-4 focus:border-[#13ec5b] dark:text-white outline-none resize-none transition-all"
                placeholder="Initialize Mentor query..."
                rows={2}
              ></textarea>
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 size-8 bg-[#13ec5b] text-[#15291b] rounded-xl flex items-center justify-center shadow-lg shadow-[#13ec5b]/20 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:grayscale transition-all"
              >
                <span className="material-symbols-outlined text-sm font-black">
                  arrow_upward
                </span>
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-2 mt-4 opacity-60">
            <div className="size-1 rounded-full bg-[#13ec5b]"></div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
              Neural Logic Engine • Ver 2.4
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
