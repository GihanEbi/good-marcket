"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function MyLearningPage() {
  const router = useRouter();

  const activeCourses = [
    {
      id: 1,
      title: "The Complete Python Masterclass: From Beginner to Pro",
      instructor: "Dr. Sarah Jenkins",
      progress: 65,
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      code: "PY-502",
    },
    {
      id: 2,
      title: "Modern UX/UI Design Systems with Figma",
      instructor: "Marc Arlow",
      progress: 32,
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop",
      code: "DSGN-101",
    },
    {
      id: 3,
      title: "Full-Stack Web Development Bootcamp 2024",
      instructor: "Angela Wright",
      progress: 88,
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      code: "WEB-ARC",
    },
  ];

  return (
    <div className="flex-1 h-full overflow-y-auto bg-[#fcfdfc] dark:bg-[#0a0f0b] p-6 lg:p-10 font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* --- High Performance Stats --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            label: "Active Nodes",
            val: "6",
            icon: "terminal",
            color: "#13ec5b",
          },
          {
            label: "Modules Completed",
            val: "2",
            icon: "verified",
            color: "#13ec5b",
          },
          {
            label: "DNA Certificates",
            val: "12",
            icon: "workspace_premium",
            color: "#13ec5b",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[#15291b] p-8 rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] shadow-sm flex items-center gap-6 group hover:border-[#13ec5b]/30 transition-all"
          >
            <div className="size-14 rounded-2xl bg-[#f0f7f2] dark:bg-[#0a0f0b] flex items-center justify-center text-[#13ec5b] shadow-inner group-hover:bg-[#13ec5b] group-hover:text-[#15291b] transition-all">
              <span className="material-symbols-outlined text-3xl font-black">
                {stat.icon}
              </span>
            </div>
            <div>
              <p className="text-3xl font-black tracking-tight">{stat.val}</p>
              <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* --- Main Pipeline Column --- */}
        <div className="flex-1 space-y-10">
          {/* Navigation Filter Engine */}
          <div className="flex items-center gap-2 bg-[#f0f7f2] dark:bg-[#15291b] p-1.5 rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27] w-fit mb-4 overflow-x-auto scrollbar-hide">
            {["All Modules", "In Progress", "Completed", "Archived"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    i === 0
                      ? "bg-[#13ec5b] text-[#15291b] shadow-lg shadow-[#13ec5b]/20"
                      : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>

          {/* Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-[#13ec5b]/5 hover:border-[#13ec5b]/30 group"
              >
                <div className="relative h-48 overflow-hidden bg-[#0a0f0b]">
                  <img
                    alt={course.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    src={course.image}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#0a0f0b]/60 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-[#13ec5b] uppercase tracking-tighter border border-[#13ec5b]/30">
                      {course.code}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-black text-[#15291b] dark:text-white mb-2 line-clamp-1 group-hover:text-[#13ec5b] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
                      Architect: {course.instructor}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
                        Sync Progress
                      </span>
                      <span className="text-[10px] font-black text-[#13ec5b] uppercase tracking-tighter">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-full overflow-hidden border border-[#e7f3eb] dark:border-[#1e3a27]">
                      <div
                        className="h-full bg-[#13ec5b] rounded-full transition-all duration-1000 shadow-[0_0_8px_#13ec5b]"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    className="w-full py-4 bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-black/5 hover:bg-[#13ec5b] dark:hover:bg-[#13ec5b] transition-all flex items-center justify-center gap-3"
                    onClick={() =>
                      router.push("/learning/lessons/my-courses/lesson/1")
                    }
                  >
                    <span className="material-symbols-outlined text-base font-black">
                      bolt
                    </span>
                    Initialize Module
                  </button>
                </div>
              </div>
            ))}

            {/* Completed Course (High Contrast Variant) */}
            <div className="bg-[#f0f7f2] dark:bg-[#15291b]/40 rounded-[2.5rem] border border-[#13ec5b]/20 overflow-hidden flex flex-col relative group">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#13ec5b] px-3 py-1 rounded-full text-[9px] font-black text-[#15291b] uppercase tracking-tighter shadow-lg shadow-[#13ec5b]/20">
                  Sync Complete
                </span>
              </div>
              <div className="relative h-48 overflow-hidden bg-[#0a0f0b]">
                <img
                  alt="Completed"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop"
                />
              </div>
              <div className="p-8">
                <h3 className="text-lg font-black text-[#15291b] dark:text-white mb-2 line-clamp-1 opacity-70">
                  Practical Machine Learning DNA
                </h3>
                <div className="mb-8 mt-4">
                  <div className="h-1.5 w-full bg-[#13ec5b]/10 rounded-full overflow-hidden border border-[#13ec5b]/20">
                    <div className="h-full bg-[#13ec5b] w-full"></div>
                  </div>
                </div>
                <button
                  className="w-full py-4 border-2 border-[#13ec5b]/30 text-[#13ec5b] hover:bg-[#13ec5b] hover:text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
                  onClick={() =>
                    router.push(
                      "/learning/users/student/portal/my_learning/certificates",
                    )
                  }
                >
                  <span className="material-symbols-outlined text-base font-black">
                    workspace_premium
                  </span>
                  Access Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Technical Sidebar --- */}
        <aside className="w-full lg:w-96 shrink-0 space-y-8">
          {/* AI Path Optimization Widget */}
          <div className="bg-gradient-to-br from-[#15291b] to-[#0a0f0b] rounded-[2.5rem] p-8 border border-[#1e3a27] relative overflow-hidden group shadow-2xl">
            <div className="absolute -top-12 -right-12 size-40 bg-[#13ec5b] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-xl bg-[#13ec5b]/10 border border-[#13ec5b]/30 flex items-center justify-center text-[#13ec5b]">
                  <span className="material-symbols-outlined fill-1">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-black text-xs uppercase tracking-widest text-white">
                  AI Path Assistant
                </h3>
              </div>

              <div className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/5 mb-8">
                <p className="text-[9px] font-black text-[#13ec5b] uppercase tracking-[0.2em] mb-2">
                  Priority Selection
                </p>
                <h4 className="text-sm font-black text-white mb-2">
                  Advanced Neural Hooks
                </h4>
                <p className="text-xs text-[#a0c4ab] leading-relaxed font-medium mb-5">
                  Your Python logic scores suggest you should initialize this
                  module next to optimize your development DNA.
                </p>
                <button className="w-full py-3 bg-[#13ec5b] text-[#15291b] rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#13ec5b]/10 hover:scale-[1.02] transition-all">
                  Initialize Priority
                </button>
              </div>

              <div className="space-y-5">
                <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.3em]">
                  Critical Deadlines
                </p>
                {[
                  {
                    label: "Figma Prototypes Lab",
                    time: "24h Remaining",
                    color: "#f59e0b",
                  },
                  {
                    label: "React Architecture Sync",
                    time: "4.5h Remaining",
                    color: "#ef4444",
                  },
                ].map((task) => (
                  <div
                    key={task.label}
                    className="flex items-center gap-4 group/item"
                  >
                    <div
                      className="size-2 rounded-full shadow-[0_0_8px_currentColor]"
                      style={{ color: task.color, backgroundColor: task.color }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-xs font-black text-white group-hover/item:text-[#13ec5b] transition-colors">
                        {task.label}
                      </p>
                      <p className="text-[9px] font-black uppercase tracking-tighter text-[#5c7a67]">
                        {task.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Pulse Engine */}
          <div className="bg-[#13ec5b] rounded-[2.5rem] p-8 text-[#15291b] shadow-xl shadow-[#13ec5b]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <span className="material-symbols-outlined text-6xl font-black">
                analytics
              </span>
            </div>
            <div className="relative z-10">
              <h4 className="font-black text-xs uppercase tracking-widest mb-2">
                Weekly Performance Goal
              </h4>
              <p className="text-[11px] font-black leading-tight mb-6 opacity-80 uppercase tracking-tight">
                You are at{" "}
                <span className="underline decoration-2">75% capacity</span>.
                Complete 1.5 more units to synchronize your target.
              </p>
              <div className="h-2 w-full bg-[#15291b]/10 rounded-full mb-8 border border-[#15291b]/10">
                <div
                  className="h-full bg-[#15291b] rounded-full shadow-[0_0_12px_rgba(21,41,27,0.3)]"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <button className="w-full py-3 border-2 border-[#15291b]/20 text-[#15291b] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#15291b] hover:text-[#13ec5b] transition-all">
                Optimize Goal
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
