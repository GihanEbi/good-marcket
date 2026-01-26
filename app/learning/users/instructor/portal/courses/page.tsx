"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function InstructorCoursesPage() {
  const router = useRouter();

  const navigate = () => {
    router.push("/learning/users/instructor/portal/courses/1");
  };

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development DNA",
      students: "1,284",
      rating: "4.8",
      status: "Published",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      trend: "+12% SYNC",
      bars: [40, 60, 45, 70, 55, 90, 80],
      active: true,
    },
    {
      id: 2,
      title: "Advanced Neural React Patterns",
      students: "856",
      rating: "4.9",
      status: "Published",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
      trend: "+5% SYNC",
      bars: [80, 70, 75, 85, 60, 70, 75],
      active: true,
    },
    {
      id: 3,
      title: "Interface Logic Fundamentals",
      students: "0",
      rating: "--",
      status: "Draft",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop",
      trend: "NO DATA",
      bars: [10, 10, 10, 10, 10, 10, 10],
      active: false,
    },
    {
      id: 4,
      title: "Node.js Micro-Architectures",
      students: "0",
      rating: "--",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      trend: "AUDITING...",
      bars: [10, 10, 10, 10, 10, 10, 10],
      active: false,
    },
    {
      id: 5,
      title: "Python for Neural Synthesis",
      students: "2,105",
      rating: "4.7",
      status: "Published",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      trend: "+18% SYNC",
      bars: [30, 40, 50, 65, 80, 95, 100],
      active: true,
    },
  ];

  return (
    <div className="flex-1 min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      
      {/* --- Tactical Registry Header --- */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl border-b border-[#e7f3eb] dark:border-[#1e3a27] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="size-2 rounded-full bg-[#13ec5b] animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">System Registry</span>
          </div>
          <h2 className="text-3xl font-black text-[#15291b] dark:text-white tracking-tight leading-none">
            Module <span className="text-[#13ec5b]">Inventory</span>
          </h2>
        </div>

        <div className="flex w-full md:w-auto items-center gap-4 flex-1 justify-end">
          {/* HUD Search */}
          <div className="relative w-full md:max-w-xs group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5c7a67] group-focus-within:text-[#13ec5b] transition-colors">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-3 bg-[#f0f7f2] dark:bg-[#15291b] border border-transparent rounded-2xl text-xs font-bold focus:border-[#13ec5b]/40 outline-none transition-all placeholder-[#5c7a67]"
              placeholder="Filter nodes..."
              type="text"
            />
          </div>
          
          <button
            className="hidden md:flex items-center gap-3 px-6 py-3 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            onClick={() => router.push("/learning/users/instructor/portal/courses/create-course/basic-info")}
          >
            <span className="material-symbols-outlined text-lg font-black">add_box</span>
            Initialize Node
          </button>
        </div>
      </header>

      {/* --- Main Operations Area --- */}
      <div className="p-6 md:p-10 max-w-7xl mx-auto">
        
        {/* Pipeline Filter Tabs */}
        <div className="flex items-center gap-10 mb-10 border-b border-[#e7f3eb] dark:border-[#1e3a27] overflow-x-auto scrollbar-hide">
          {["All Modules (12)", "Deployed (8)", "Draft Nodes (3)", "Archived (1)"].map((tab, i) => (
            <button key={tab} className={`pb-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
              i === 0 ? "text-[#13ec5b]" : "text-[#5c7a67] hover:text-[#15291b] dark:hover:text-white"
            }`}>
              {tab}
              {i === 0 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#13ec5b] rounded-t-full shadow-[0_0_10px_#13ec5b]"></div>}
            </button>
          ))}
        </div>

        {/* Module Inventory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 pb-24">
          
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-[#13ec5b]/5 hover:border-[#13ec5b]/30"
            >
              {/* Node Visual Header */}
              <div className="relative h-44 bg-[#0a0f0b] overflow-hidden shrink-0">
                <img
                  alt={course.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  src={course.image}
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-lg shadow-xl border ${
                      course.status === "Published"
                        ? "bg-[#13ec5b] text-[#15291b] border-[#13ec5b]"
                        : course.status === "Pending"
                          ? "bg-amber-400 text-[#15291b] border-amber-400"
                          : "bg-[#0a0f0b] text-[#5c7a67] border-[#1e3a27]"
                    }`}
                  >
                    {course.status === "Published" ? "Synchronized" : course.status === "Pending" ? "Auditing" : "Staged"}
                  </span>
                </div>
              </div>

              {/* Node Metadata Body */}
              <div className="p-8 flex flex-col flex-1 space-y-8">
                <h3 className="text-lg font-black leading-tight text-[#15291b] dark:text-white group-hover:text-[#13ec5b] transition-colors line-clamp-2 h-12">
                  {course.title}
                </h3>

                {/* Performance Matrix */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] flex items-center justify-center text-[#13ec5b] border border-[#13ec5b]/10">
                      <span className="material-symbols-outlined text-base font-black">hub</span>
                    </div>
                    <div>
                      <p className="text-xs font-black tracking-tighter">{course.students}</p>
                      <p className="text-[8px] font-black text-[#5c7a67] uppercase tracking-widest">Nodes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] flex items-center justify-center text-amber-500 border border-amber-500/10">
                      <span className="material-symbols-outlined text-base font-black">star</span>
                    </div>
                    <div>
                      <p className="text-xs font-black tracking-tighter">{course.rating}</p>
                      <p className="text-[8px] font-black text-[#5c7a67] uppercase tracking-widest">Mastery</p>
                    </div>
                  </div>
                </div>

                {/* Neural Trend Analysis */}
                <div className={`space-y-4 ${!course.active && "opacity-30 grayscale"}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">Sync Velocity</p>
                    <span className={`text-[8px] font-black uppercase ${course.active ? "text-[#13ec5b]" : "text-[#5c7a67]"}`}>
                      {course.trend}
                    </span>
                  </div>
                  <div className="flex items-end gap-1.5 h-10">
                    {course.bars.map((height, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-md transition-all duration-700 ${course.active ? "bg-[#13ec5b] shadow-[0_0_8px_rgba(19,236,91,0.4)]" : "bg-[#e7f3eb] dark:bg-[#1e3a27]"}`}
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  className={`w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all ${
                    course.status === "Published"
                      ? "bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] hover:bg-[#13ec5b] dark:hover:bg-[#13ec5b]"
                      : "bg-transparent border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] hover:border-[#13ec5b] hover:text-[#13ec5b]"
                  }`}
                  onClick={() => navigate()}
                >
                  {course.status === "Published" ? "Manage Node" : "Edit Blueprint"}
                </button>
              </div>
            </div>
          ))}

          {/* New Node Constructor Placeholder */}
          <div 
            className="bg-[#f0f7f2] dark:bg-[#15291b]/20 rounded-[2.5rem] border-2 border-dashed border-[#e7f3eb] dark:border-[#1e3a27] flex flex-col items-center justify-center p-10 group hover:border-[#13ec5b]/50 transition-all cursor-pointer min-h-[450px]"
            onClick={() => router.push("/users/instructor/portal/courses/create-course/basic-info")}
          >
            <div className="size-16 rounded-[1.5rem] bg-white dark:bg-[#15291b] flex items-center justify-center text-[#5c7a67] group-hover:text-[#13ec5b] group-hover:scale-110 transition-all shadow-xl shadow-black/5 mb-6 border border-[#e7f3eb] dark:border-[#1e3a27]">
              <span className="material-symbols-outlined text-4xl font-black">add</span>
            </div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#15291b] dark:text-white">Construct New Node</h4>
            <p className="text-[10px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] text-center mt-3 max-w-[180px] uppercase tracking-tighter">
              Initialize a fresh instructional roadmap for the network
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}