"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CourseDetailsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* --- Hero Section (Technical Header) --- */}
      <div className="bg-[#15291b] text-white pt-20 pb-16 px-8 lg:px-16 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#13ec5b 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute -top-24 -right-24 size-96 bg-[#13ec5b] blur-[120px] opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#13ec5b] text-[#15291b] text-[10px] font-black rounded-full uppercase tracking-tighter shadow-lg shadow-[#13ec5b]/20">
                  Top Performance Match
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a0c4ab]">
                  Module: ARC-402
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-none">
                Full Stack Web <span className="text-[#13ec5b]">DNA</span>: Zero
                to Mastery
              </h1>

              <p className="text-lg text-[#a0c4ab] max-w-2xl leading-relaxed font-medium">
                Engineered for technical excellence. Master the architectural
                stack: HTML5, CSS3, JavaScript, React, and Node.js through an
                optimized AI-assisted roadmap.
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      alt="Instructor"
                      className="size-14 rounded-2xl object-cover border-2 border-[#13ec5b]/30"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                    />
                    <div className="absolute -bottom-1 -right-1 size-4 bg-[#13ec5b] rounded-full border-2 border-[#15291b] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-[#15291b] font-black">
                        verified
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-[#5c7a67] font-black uppercase tracking-widest">
                      Lead Architect
                    </p>
                    <p className="font-black text-white">
                      Prof. Jonathan Miles
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#0a0f0b]/40 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/5">
                  <div className="flex text-[#13ec5b]">
                    {[1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-lg fill-1"
                      >
                        star
                      </span>
                    ))}
                    <span className="material-symbols-outlined text-lg">
                      star_half
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-black text-white">4.8</span>
                    <span className="text-[#5c7a67] text-[10px] font-black uppercase tracking-tighter">
                      / 12k Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content Grid --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-16 relative">
          {/* Left Column: Documentation */}
          <div className="lg:col-span-2 space-y-12">
            {/* Technical Tabs */}
            <div className="flex border-b border-[#e7f3eb] dark:border-[#1e3a27] sticky top-0 bg-[#fcfdfc]/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl z-30 overflow-x-auto scrollbar-hide">
              {["overview", "curriculum", "instructor", "reviews"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                      activeTab === tab
                        ? "text-[#13ec5b]"
                        : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full"></div>
                    )}
                  </button>
                ),
              )}
            </div>

            {/* Description */}
            <section className="space-y-8 animate-in fade-in duration-700">
              <h2 className="text-3xl font-black tracking-tight">
                System <span className="text-[#13ec5b]">Brief</span>
              </h2>
              <p className="text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed font-medium text-lg">
                This comprehensive module is designed for senior-track growth.
                We analyze the architectural layers of the modern web, from
                localized component state to global cloud deployments.
              </p>

              <div className="bg-white dark:bg-[#15291b] p-10 rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] shadow-sm">
                <h3 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-[#5c7a67]">
                  Module KPIs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Architect 15+ Enterprise Portfolios",
                    "Master Neural Context & Redux Sync",
                    "Deploy RESTful Core Infrastructures",
                    "Execute Secure Auth Protocols",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] group hover:border-[#13ec5b]/30 transition-all"
                    >
                      <span className="material-symbols-outlined text-[#13ec5b] font-black">
                        verified
                      </span>
                      <span className="text-sm font-bold text-[#5c7a67] dark:text-slate-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AI Personalization DNA Widget */}
            <section className="bg-gradient-to-br from-[#15291b] to-[#0a0f0b] rounded-[3rem] p-10 border border-[#1e3a27] relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 size-64 bg-[#13ec5b] blur-[100px] opacity-5 group-hover:opacity-10 transition-opacity"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#13ec5b] fill-1">
                      auto_awesome
                    </span>
                    <span className="text-[10px] font-black text-[#13ec5b] uppercase tracking-[0.2em]">
                      Neural Path Optimization
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-white leading-tight">
                    Your Smart Learning Roadmap
                  </h2>
                  <p className="text-[#a0c4ab] text-sm leading-relaxed font-medium">
                    Based on your 94% score in{" "}
                    <span className="text-white font-bold underline decoration-[#13ec5b]">
                      JS Fundamentals
                    </span>
                    , we've accelerated Section 1 and injected an Advanced
                    Data-Modeling lab into your curriculum.
                  </p>
                  <button className="bg-[#13ec5b] text-[#15291b] px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-[#13ec5b]/20 hover:scale-105 transition-all">
                    Initialize Path
                  </button>
                </div>

                <div className="w-full md:w-72 space-y-4">
                  {[
                    {
                      label: "Intro HTML",
                      status: "Bypassed",
                      icon: "fast_forward",
                      active: false,
                    },
                    {
                      label: "DB Modeling Lab",
                      status: "Priority Inject",
                      icon: "psychology",
                      active: true,
                    },
                    {
                      label: "Auth Deployment",
                      status: "Locked",
                      icon: "lock",
                      active: false,
                    },
                  ].map((node) => (
                    <div
                      key={node.label}
                      className={`p-4 rounded-2xl border flex items-center gap-4 transition-all ${
                        node.active
                          ? "bg-[#13ec5b]/10 border-[#13ec5b]/30"
                          : "bg-black/20 border-white/5 opacity-40"
                      }`}
                    >
                      <div
                        className={`size-10 rounded-xl flex items-center justify-center ${node.active ? "bg-[#13ec5b] text-[#15291b]" : "bg-white/5 text-[#5c7a67]"}`}
                      >
                        <span className="material-symbols-outlined text-sm font-black">
                          {node.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-white tracking-tight">
                          {node.label}
                        </p>
                        <p
                          className={`text-[8px] font-black uppercase tracking-widest ${node.active ? "text-[#13ec5b]" : "text-[#5c7a67]"}`}
                        >
                          {node.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Curriculum Pipeline */}
            <section className="space-y-8">
              <div className="flex items-center justify-between px-2">
                <h2 className="text-3xl font-black tracking-tight">
                  Curriculum <span className="text-[#13ec5b]">Pipeline</span>
                </h2>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#5c7a67]">
                  12 Sections • 62h Length
                </span>
              </div>

              <div className="space-y-4">
                {/* Accordion Item */}
                <div className="border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] overflow-hidden bg-white dark:bg-[#15291b] group hover:border-[#13ec5b]/20 transition-all">
                  <button className="w-full p-8 flex items-center justify-between transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="size-10 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] flex items-center justify-center text-[#13ec5b]">
                        <span className="material-symbols-outlined font-black">
                          expand_more
                        </span>
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-widest mb-1">
                          Section 01
                        </p>
                        <span className="font-black text-[#15291b] dark:text-white">
                          The Modern Web Ecosystem
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-[#5c7a67] uppercase tracking-tighter">
                      4 Units • 45m
                    </span>
                  </button>
                  <div className="px-8 pb-8 space-y-2">
                    {[
                      {
                        title: "Welcome to DNA Core",
                        type: "Preview",
                        duration: "04:20",
                      },
                      {
                        title: "Network Architecture Protocols",
                        type: "Video",
                        duration: "12:45",
                      },
                    ].map((lecture) => (
                      <div
                        key={lecture.title}
                        className="flex items-center justify-between p-4 rounded-xl bg-[#fcfdfc] dark:bg-[#0a0f0b] group/item cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <span className="material-symbols-outlined text-[#5c7a67] group-hover/item:text-[#13ec5b] transition-colors">
                            play_circle
                          </span>
                          <span className="text-sm font-bold text-[#5c7a67] dark:text-slate-300 group-hover/item:text-white transition-colors">
                            {lecture.title}
                          </span>
                        </div>
                        <span
                          className={`text-[9px] font-black uppercase tracking-widest ${lecture.type === "Preview" ? "text-[#13ec5b]" : "text-[#5c7a67]"}`}
                        >
                          {lecture.type === "Preview"
                            ? "Preview"
                            : lecture.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Unit Interface */}
          <div className="lg:col-span-1">
            <div className="sticky top-12 space-y-8">
              <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] shadow-2xl overflow-hidden">
                <div className="aspect-video relative group cursor-pointer bg-[#0a0f0b]">
                  <img
                    alt="Thumbnail"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-20 rounded-3xl bg-[#13ec5b] flex items-center justify-center shadow-2xl shadow-[#13ec5b]/40 scale-90 group-hover:scale-100 transition-transform">
                      <span className="material-symbols-outlined text-[#15291b] text-5xl fill-1">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-black text-[#13ec5b] uppercase tracking-tighter border border-[#13ec5b]/20">
                    Syllabus Preview
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-[#15291b] dark:text-white">
                      $89.99
                    </span>
                    <span className="text-[#5c7a67] line-through text-sm font-bold">
                      $149.99
                    </span>
                    <span className="px-2 py-1 bg-[#13ec5b]/10 text-[#13ec5b] text-[10px] font-black rounded-lg">
                      40% OFF
                    </span>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full py-5 bg-[#13ec5b] text-[#15291b] rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                      Enroll Module
                    </button>
                    <button className="w-full py-4 border-2 border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl font-black text-[10px] uppercase tracking-widest text-[#5c7a67] dark:text-white hover:border-[#13ec5b] transition-all">
                      Add to Wishlist
                    </button>
                  </div>

                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                      Package Manifest:
                    </p>
                    <ul className="space-y-4">
                      {[
                        { icon: "videocam", text: "62 Hours HQ Video DNA" },
                        { icon: "description", text: "15 Technical Assets" },
                        { icon: "assignment", text: "8 Neural Coding Labs" },
                        {
                          icon: "workspace_premium",
                          text: "NFT Course Certificate",
                        },
                      ].map((feature) => (
                        <li
                          key={feature.text}
                          className="flex items-center gap-4"
                        >
                          <span className="material-symbols-outlined text-[#13ec5b] text-xl">
                            {feature.icon}
                          </span>
                          <span className="text-xs font-bold text-[#5c7a67] dark:text-slate-300">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Business Widget */}
              <div className="bg-[#13ec5b] p-8 rounded-[2.5rem] text-[#15291b] shadow-xl shadow-[#13ec5b]/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined font-black">
                    corporate_fare
                  </span>
                  <h4 className="font-black text-xs uppercase tracking-widest">
                    Enterprise Sync
                  </h4>
                </div>
                <p className="text-[11px] font-black leading-relaxed mb-6 opacity-80 uppercase tracking-tight">
                  Upskill your engineering fleet. Get 50% discount for
                  deployments of 5+ seats.
                </p>
                <button className="text-[10px] font-black uppercase tracking-widest underline decoration-2 underline-offset-4">
                  Request Quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
