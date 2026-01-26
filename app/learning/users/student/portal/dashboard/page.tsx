"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="p-6 md:p-10 space-y-10 bg-[#fcfdfc] dark:bg-[#0a0f0b] min-h-screen font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="size-2 rounded-full bg-[#13ec5b] animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
              Student Portal
            </span>
          </div>
          <h1 className="text-4xl font-black tracking-tight leading-none">
            Welcome back, <span className="text-[#13ec5b]">Alex!</span> 👋
          </h1>
          <p className="text-[#5c7a67] dark:text-[#a0c4ab] mt-2 font-medium">
            You&apos;re on a{" "}
            <span className="text-[#15291b] dark:text-white font-bold underline decoration-[#13ec5b] decoration-2">
              5-day streak
            </span>
            . Keep it up!
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl text-xs font-black uppercase tracking-widest shadow-sm hover:border-[#13ec5b] transition-all">
          <span className="material-symbols-outlined text-sm">
            calendar_today
          </span>
          Schedule
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Enrolled Courses",
            value: "12",
            change: "+2",
            icon: "school",
            accent: "#13ec5b",
          },
          {
            label: "Pending Tasks",
            value: "3",
            change: null,
            icon: "pending_actions",
            accent: "#5c7a67",
          },
          {
            label: "Completed",
            value: "24",
            change: "85%",
            icon: "task_alt",
            accent: "#13ec5b",
          },
          {
            label: "Skill Score",
            value: "740",
            change: "+120",
            icon: "trending_up",
            accent: "#13ec5b",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[#15291b] p-6 rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] shadow-sm flex flex-col gap-4 group hover:border-[#13ec5b]/30 transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="size-10 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] flex items-center justify-center transition-colors group-hover:bg-[#13ec5b]/10">
                <span className="material-symbols-outlined text-[#13ec5b] font-bold">
                  {stat.icon}
                </span>
              </div>
              {stat.change && (
                <span className="text-[10px] font-black px-2 py-1 rounded-full bg-[#13ec5b]/10 text-[#13ec5b]">
                  {stat.change}
                </span>
              )}
            </div>
            <div>
              <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="text-3xl font-black">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Learning */}
      <section>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-2xl font-black tracking-tight">Active Path</h2>
          <button className="text-xs font-black uppercase tracking-widest text-[#5c7a67] hover:text-[#13ec5b] transition-colors">
            View Journey
          </button>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-none w-80 bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-[#13ec5b]/5 transition-all duration-500 cursor-pointer"
            >
              <div className="h-36 bg-[#0a0f0b] relative overflow-hidden">
                <img
                  src={`https://ui-avatars.com/api/?name=C+${i}&background=15291b&color=13ec5b&bold=true&size=400`}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  alt="course"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b] to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#13ec5b] text-[#15291b] text-[9px] font-black rounded-full uppercase tracking-tighter">
                  In Progress
                </div>
              </div>
              <div className="p-6 space-y-5">
                <h3 className="font-black text-lg leading-tight line-clamp-1 group-hover:text-[#13ec5b] transition-colors">
                  Applied Neural Networks {i}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-[#5c7a67] uppercase">
                    <span>Mastery</span>
                    <span>{30 + i * 20}%</span>
                  </div>
                  <div className="h-1.5 bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#13ec5b] rounded-full transition-all duration-1000"
                      style={{ width: `${30 + i * 20}%` }}
                    ></div>
                  </div>
                </div>
                <button
                  className="w-full py-3.5 bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-[#13ec5b] dark:hover:bg-[#13ec5b] transition-all"
                  onClick={() => router.push("/learning/lessons/my-courses/lesson/1")}
                >
                  Resume Lesson
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lower Section: Recommendations & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recommended Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-2xl font-black tracking-tight">AI Insights</h2>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#13ec5b]/10 rounded-full">
              <span className="material-symbols-outlined text-sm text-[#13ec5b] fill-1">
                auto_awesome
              </span>
              <span className="text-[9px] font-black uppercase tracking-tighter text-[#13ec5b]">
                Personalized
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#15291b] p-5 rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] flex gap-5 hover:border-[#13ec5b]/40 transition-all cursor-pointer group"
              >
                <div className="size-20 rounded-2xl bg-[#0a0f0b] shrink-0 overflow-hidden relative">
                  <img
                    src={`https://ui-avatars.com/api/?name=S+${i}&background=0a0f0b&color=13ec5b`}
                    alt="rec"
                  />
                  <div className="absolute inset-0 bg-[#13ec5b]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-[9px] font-black text-[#13ec5b] uppercase tracking-widest mb-1">
                    9{i}% Match
                  </p>
                  <h4 className="text-sm font-black line-clamp-1 group-hover:text-[#13ec5b] transition-colors">
                    Advanced Logic Workshop
                  </h4>
                  <p className="text-[10px] text-[#5c7a67] mt-1 font-bold uppercase tracking-tight">
                    4.5 Hours • Lab Based
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-8">
          {/* Streak Card */}
          <div className="bg-gradient-to-br from-[#15291b] to-[#0a0f0b] p-8 rounded-[2.5rem] text-white shadow-xl shadow-[#13ec5b]/5 border border-[#1e3a27] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 size-32 bg-[#13ec5b] blur-[80px] opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-black text-lg">Daily Pulse</h3>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#13ec5b] rounded-full text-[#15291b]">
                  <span className="material-symbols-outlined text-sm font-black">
                    local_fire_department
                  </span>
                  <span className="text-[10px] font-black">5 DAYS</span>
                </div>
              </div>
              <div className="flex justify-between">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div
                    key={day + i}
                    className="flex flex-col items-center gap-3"
                  >
                    <span className="text-[10px] text-[#5c7a67] font-black">
                      {day}
                    </span>
                    <div
                      className={`size-8 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        i < 5
                          ? "bg-[#13ec5b] text-[#15291b] shadow-lg shadow-[#13ec5b]/20"
                          : "bg-[#1e3a27] text-[#5c7a67]"
                      }`}
                    >
                      {i < 5 ? (
                        <span className="material-symbols-outlined text-sm font-black">
                          check
                        </span>
                      ) : (
                        <div className="size-1 bg-[#5c7a67] rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            <h3 className="font-black text-lg px-2">Activity</h3>
            <div className="space-y-4">
              {[
                {
                  label: "Logic Quiz Passed",
                  time: "2h ago",
                  icon: "verified",
                },
                {
                  label: "Assignment Submitted",
                  time: "Yesterday",
                  icon: "cloud_upload",
                },
              ].map((act, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b]/20 transition-all"
                >
                  <div className="size-10 rounded-full bg-[#13ec5b]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#13ec5b] text-lg font-bold">
                      {act.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#15291b] dark:text-white leading-tight">
                      {act.label}
                    </p>
                    <p className="text-[10px] text-[#5c7a67] font-bold mt-1 uppercase tracking-tighter">
                      {act.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
