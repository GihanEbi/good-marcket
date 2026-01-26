"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

// --- Types for Web Speech API ---
interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

// --- MOCK SERVICE ---
const generateInterviewResponse = async (message: string, history: any[]) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return "That's excellent context. Given your schedule, would you prefer shorter, intensive modules or longer, deep-dive sessions?";
};

interface Message {
  role: "model" | "user";
  text: string;
}

export default function AIInterviewPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // State
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hello! I am your Good Market AI Tutor. To build your perfect curriculum, tell me a bit about your current learning goals.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isAiThinking]);

  // --- Voice Logic ---
  const startListening = () => {
    const { webkitSpeechRecognition, SpeechRecognition } =
      window as unknown as IWindow;
    const Recognition = SpeechRecognition || webkitSpeechRecognition;

    if (!Recognition) {
      alert("Browser doesn't support speech recognition.");
      return;
    }

    const recognition = new Recognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event: any) =>
      setInput(event.results[0][0].transcript);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  // --- TTS Logic ---
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isAiThinking) return;

    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsAiThinking(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));
      const aiResponse = await generateInterviewResponse(userMessage, history);

      const newMsg = { role: "model" as const, text: aiResponse || "Got it." };
      setMessages((prev) => [...prev, newMsg]);
      speakText(newMsg.text);

      const newProgress = Math.min(progress + 25, 100);
      setProgress(newProgress);

      if (newProgress >= 100)
        setTimeout(
          () =>
            router.push("/learning/users/student/registration/ai-interview/ai-insights"),
          4000,
        );
    } catch (error) {
      console.error(error);
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    // Use 100dvh for better mobile browser support (handles address bar resizing)
    <div className="relative h-[100dvh] w-full bg-background-light dark:bg-background-dark text-earth-dark dark:text-white font-display flex flex-col items-center transition-colors duration-500 overflow-hidden">
      {/* --- Ambient Background Effects --- */}
      <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-10 dark:opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-earth-sage rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-10 dark:opacity-10 pointer-events-none"></div>

      {/* --- Header / Top Bar --- */}
      {/* Fixed height, shrink-0 ensures it doesn't compress */}
      <div className="z-20 w-full max-w-5xl px-4 md:px-6 py-4 flex items-center justify-between shrink-0 bg-transparent">
        <div className="flex items-center gap-3">
          <div className="size-8 md:size-10 bg-white dark:bg-white/5 backdrop-blur-md border border-[#e7f3eb] dark:border-white/10 rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-primary dark:text-white text-lg md:text-2xl">
              auto_stories
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wide text-earth-dark dark:text-white">
              Good Market AI
            </span>
            <span className="text-[10px] text-earth-sage dark:text-white/50 uppercase tracking-widest hidden sm:block">
              Personalization Mode
            </span>
          </div>
        </div>

        {/* Progress Pill */}
        <div className="flex items-center gap-3 bg-white/60 dark:bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#e7f3eb] dark:border-white/10 shadow-sm">
          <span className="text-[10px] md:text-xs font-mono text-primary dark:text-[#a5a1f5]">
            {progress}%
          </span>
          <div className="w-12 md:w-20 h-1.5 bg-[#e7f3eb] dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* --- Main Scrollable Content (Avatar + Chat) --- */}
      {/* flex-1 allows it to take remaining space. overflow-y-auto enables internal scrolling */}
      <div
        className="flex-1 w-full max-w-4xl flex flex-col items-center relative z-10 overflow-y-auto scrollbar-hide px-4"
        ref={scrollRef}
      >
        {/* Avatar Section - Part of the scroll flow so it moves up when chat gets long */}
        <div className="shrink-0 py-6 md:py-10 flex flex-col items-center justify-center">
          <div
            className={`relative size-20 md:size-28 rounded-full flex items-center justify-center transition-all duration-500 ${
              isAiThinking
                ? "scale-110 shadow-[0_0_40px_rgba(19,236,91,0.4)]"
                : "shadow-[0_0_20px_rgba(19,236,91,0.1)]"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-earth-sage opacity-90"></div>
            {/* Pulse Rings */}
            {(isSpeaking || isAiThinking) && (
              <>
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[ping_1.5s_ease-in-out_infinite]"></div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[ping_2s_ease-in-out_infinite] delay-150"></div>
              </>
            )}
            <span className="material-symbols-outlined text-white text-3xl md:text-5xl relative z-10">
              smart_toy
            </span>

            {/* Status Indicator Dot */}
            <div
              className={`absolute bottom-1 right-1 size-3 md:size-4 rounded-full border-2 border-white dark:border-[#0a0a0c] transition-colors ${
                isListening ? "bg-red-500" : "bg-green-400"
              }`}
            ></div>
          </div>

          {/* Status Text */}
          <div className="mt-4 h-6">
            {isAiThinking ? (
              <span className="text-primary dark:text-[#a5a1f5] text-xs md:text-sm font-medium animate-pulse flex items-center gap-2">
                <span className="material-symbols-outlined text-sm animate-spin">
                  sync
                </span>{" "}
                Analyzing...
              </span>
            ) : isSpeaking ? (
              <span className="text-primary dark:text-[#a5a1f5] text-xs md:text-sm font-medium animate-pulse">
                Speaking...
              </span>
            ) : isListening ? (
              <span className="text-red-500 dark:text-red-400 text-xs md:text-sm font-medium animate-pulse">
                Listening...
              </span>
            ) : null}
          </div>
        </div>

        {/* Messages List */}
        <div className="w-full flex flex-col gap-4 pb-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex w-full ${
                m.role === "user" ? "justify-end" : "justify-start"
              } animate-in fade-in slide-in-from-bottom-4 duration-500`}
            >
              <div
                className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 md:p-6 shadow-sm border text-sm md:text-lg leading-relaxed ${
                  m.role === "model"
                    ? "bg-white dark:bg-white/5 border-[#e7f3eb] dark:border-white/10 text-earth-dark dark:text-white backdrop-blur-sm"
                    : "bg-primary border-primary text-earth-dark font-medium shadow-lg shadow-primary/20"
                }`}
              >
                <p>{m.text}</p>
              </div>
            </div>
          ))}

          {isAiThinking && (
            <div className="flex w-full justify-start animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-white dark:bg-white/5 border border-[#e7f3eb] dark:border-white/10 rounded-2xl p-4 flex gap-2 items-center shadow-sm">
                <span className="size-2 rounded-full bg-earth-sage dark:bg-slate-500 animate-bounce"></span>
                <span className="size-2 rounded-full bg-earth-sage dark:bg-slate-500 animate-bounce delay-100"></span>
                <span className="size-2 rounded-full bg-earth-sage dark:bg-slate-500 animate-bounce delay-200"></span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- Sticky Input Bar Area --- */}
      {/* shrink-0 prevents it from squashing. Backdrop blur for overlay effect. */}
      <div className="w-full z-30 p-4 md:p-6 shrink-0 bg-gradient-to-t from-background-light via-background-light/90 to-transparent dark:from-background-dark dark:via-background-dark/90">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-3">
          <form
            onSubmit={handleSubmit}
            className={`relative w-full bg-white dark:bg-white/5 backdrop-blur-xl border border-[#e7f3eb] dark:border-white/10 rounded-full p-1.5 md:p-2 flex items-center gap-2 shadow-xl transition-all duration-300 ${
              isListening
                ? "ring-2 ring-red-500/50 bg-red-50/50 dark:bg-red-500/10"
                : "hover:border-primary/30 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20"
            }`}
          >
            {/* Voice Button */}
            <button
              type="button"
              onClick={startListening}
              className={`size-10 md:size-12 rounded-full flex items-center justify-center transition-all shrink-0 ${
                isListening
                  ? "bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/30"
                  : "bg-[#e7f3eb] dark:bg-white/10 text-earth-sage dark:text-white/70 hover:bg-[#d0e6d6] dark:hover:bg-white/20 hover:text-primary dark:hover:text-white"
              }`}
              title="Speak your answer"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">
                {isListening ? "mic_off" : "mic"}
              </span>
            </button>

            {/* Text Input */}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isListening ? "Listening..." : "Type your answer..."}
              className="flex-1 bg-transparent border-none outline-none text-earth-dark dark:text-white placeholder-earth-sage dark:placeholder-white/30 h-10 md:h-12 px-2 text-base"
              disabled={isAiThinking}
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={!input.trim() || isAiThinking}
              className="size-10 md:size-12 rounded-full bg-primary text-earth-dark flex items-center justify-center hover:bg-[#0fd650] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20 shrink-0 active:scale-95"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">
                arrow_upward
              </span>
            </button>
          </form>

          {/* Skip Button */}
          <button
            onClick={() =>
              router.push(
                "/learning/users/student/registration/ai-interview/ai-insights",
              )
            }
            className="text-earth-sage dark:text-slate-500 text-xs font-medium hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 group pb-2"
          >
            Skip for now{" "}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
