"use client";

import React, { useState, useRef, useEffect } from "react";

// --- Types ---
interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  timestamp: Date;
}

// --- Mock AI Service ---
const simulateAiResponse = async (userText: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        "That's a great question about your learning roadmap.",
        "I can help you break down the logic behind this module.",
        "I've updated your readiness score based on our conversation.",
        "Based on your profile, I recommend focusing on the technical labs.",
        "I'm your AI Learning Assistant. How can I optimize your path today?",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      resolve(randomResponse);
    }, 1500);
  });
};

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      text: "Hello! 👋 I'm your AI Tutor. Ready to dive into your personalized learning DNA?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const responseText = await simulateAiResponse(userMsg.text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI Error", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 font-sans">
      {/* --- Chat Window --- */}
      {isOpen && (
        <div className="w-[360px] h-[550px] bg-white dark:bg-[#0a0f0b] rounded-[2rem] shadow-2xl border border-[#e7f3eb] dark:border-[#1e3a27] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="h-20 bg-[#15291b] p-5 flex items-center justify-between shrink-0 border-b border-[#1e3a27]">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-[#13ec5b]/10 rounded-xl flex items-center justify-center border border-[#13ec5b]/20">
                <span className="material-symbols-outlined text-[#13ec5b] fill-1">
                  auto_awesome
                </span>
              </div>
              <div>
                <h3 className="font-black text-sm text-white tracking-tight">
                  AI Tutor
                </h3>
                <p className="text-[9px] font-black text-[#13ec5b] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="size-1.5 bg-[#13ec5b] rounded-full animate-pulse shadow-[0_0_8px_#13ec5b]"></span>
                  Active Neural Link
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#5c7a67] hover:text-[#13ec5b] transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-[#fcfdfc] dark:bg-[#0a0f0b]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-[1.5rem] text-xs font-medium leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-[#15291b] text-white rounded-br-none border border-[#1e3a27]"
                      : "bg-white dark:bg-[#15291b] text-[#15291b] dark:text-[#a0c4ab] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] p-4 rounded-[1.5rem] rounded-bl-none flex items-center gap-1.5">
                  <span className="size-1.5 bg-[#13ec5b] rounded-full animate-bounce"></span>
                  <span className="size-1.5 bg-[#13ec5b] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="size-1.5 bg-[#13ec5b] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white dark:bg-[#0a0f0b] border-t border-[#e7f3eb] dark:border-[#1e3a27] shrink-0">
            <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-2 bg-[#f0f7f2] dark:bg-[#15291b] rounded-2xl px-4 py-1.5 border border-transparent focus-within:border-[#13ec5b]/50 transition-all"
            >
              <input
                className="flex-1 bg-transparent border-none outline-none text-xs font-bold text-[#15291b] dark:text-white placeholder-[#5c7a67]"
                placeholder="Ask about your roadmap..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="size-8 rounded-xl bg-[#13ec5b] text-[#15291b] flex items-center justify-center disabled:opacity-30 disabled:grayscale transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#13ec5b]/20"
              >
                <span className="material-symbols-outlined text-sm font-black">
                  arrow_upward
                </span>
              </button>
            </form>
            <p className="text-[9px] text-[#5c7a67] font-black uppercase tracking-tighter text-center mt-3 opacity-60">
              AI Insight Engine • Ver 2.0
            </p>
          </div>
        </div>
      )}

      {/* --- Toggle Button (FAB) --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`size-16 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90 group relative ${
          isOpen
            ? "bg-[#15291b] text-white border border-[#1e3a27]"
            : "bg-[#13ec5b] text-[#15291b] shadow-[#13ec5b]/20"
        }`}
      >
        {/* Glow Effect for Neon Mode */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-2xl bg-[#13ec5b] blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
        )}

        <div className="relative z-10">
          {isOpen ? (
            <span className="material-symbols-outlined text-2xl font-black">
              close
            </span>
          ) : (
            <span className="material-symbols-outlined text-3xl font-black fill-1">
              auto_awesome
            </span>
          )}
        </div>
      </button>
    </div>
  );
}
