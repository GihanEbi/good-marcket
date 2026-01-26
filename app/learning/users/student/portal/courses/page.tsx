"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();
  const courses = [
    {
      id: 1,
      title: "The Complete Python Masterclass: From Beginner to Pro",
      instructor: "Dr. Sarah Jenkins",
      category: "Programming",
      lessons: 12,
      rating: 4.9,
      reviews: "12.4k",
      students: "45k",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      match: "98%",
    },
    {
      id: 2,
      title: "Modern UX/UI Design Systems with Figma",
      instructor: "Marc Arlow",
      category: "Design",
      lessons: 8,
      rating: 4.7,
      reviews: "5.8k",
      students: "18k",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop",
      match: "92%",
    },
    {
      id: 3,
      title: "Practical Machine Learning for Data Scientists",
      instructor: "Prof. Emily Chen",
      category: "Data Science",
      lessons: 15,
      rating: 4.8,
      reviews: "8.2k",
      students: "32k",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      match: "85%",
    },
    {
      id: 4,
      title: "Digital Marketing Strategy: Content & SEO",
      instructor: "Liam O'Connell",
      category: "Marketing",
      lessons: 10,
      rating: 4.5,
      reviews: "4.1k",
      students: "12k",
      price: "$39.99",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      match: "76%",
    },
    {
      id: 5,
      title: "Full-Stack Web Development Bootcamp 2024",
      instructor: "Angela Wright",
      category: "Programming",
      lessons: 22,
      rating: 4.9,
      reviews: "22.4k",
      students: "89k",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      match: "95%",
    },
    {
      id: 6,
      title: "Graphic Design Masterclass: Theory & Practice",
      instructor: "David Miller",
      category: "Design",
      lessons: 6,
      rating: 4.6,
      reviews: "3.2k",
      students: "9k",
      price: "$19.99",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      match: "81%",
    },
  ];

  return (
    <div className="flex-1 h-full overflow-y-auto bg-[#fcfdfc] dark:bg-[#0a0f0b] p-6 md:p-10 font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      {/* Top Header & Navigation */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          <button className="px-6 py-2.5 rounded-full bg-[#13ec5b] text-[#15291b] text-xs font-black uppercase tracking-widest shadow-lg shadow-[#13ec5b]/20">
            Trending
          </button>
          {["Newest", "Top Rated", "Skill Match"].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2.5 rounded-full bg-white dark:bg-[#15291b] text-[#5c7a67] text-xs font-black uppercase tracking-widest border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b] transition-all whitespace-nowrap"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-[#13ec5b] animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
            148 Modules Available
          </span>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        {/* Left Sidebar: Filters */}
        <aside className="w-full xl:w-72 shrink-0 space-y-8">
          <div className="bg-white dark:bg-[#15291b] rounded-[2rem] p-8 border border-[#e7f3eb] dark:border-[#1e3a27] shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-black text-xs uppercase tracking-widest text-[#5c7a67]">
                Refine DNA
              </h3>
              <button className="text-[10px] text-[#13ec5b] font-black uppercase hover:underline">
                Reset
              </button>
            </div>

            <div className="space-y-10">
              {/* Filter Group */}
              {["Knowledge Domain", "Difficulty Level", "Time Range"].map(
                (group, idx) => (
                  <div key={group}>
                    <p className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest mb-4">
                      {group}
                    </p>
                    <div className="space-y-3">
                      {(idx === 0
                        ? ["Programming", "Design", "Data Science", "Marketing"]
                        : idx === 1
                          ? ["Beginner", "Intermediate", "Advanced"]
                          : ["0-2 Hours", "3-6 Hours", "6+ Hours"]
                      ).map((item, i) => (
                        <label
                          key={item}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <div className="relative flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked={idx === 0 && i === 0}
                              className="peer size-4 appearance-none rounded border-2 border-[#e7f3eb] dark:border-[#1e3a27] checked:bg-[#13ec5b] checked:border-[#13ec5b] transition-all cursor-pointer"
                            />
                            <span className="material-symbols-outlined absolute text-[#15291b] text-xs font-black opacity-0 peer-checked:opacity-100 pointer-events-none">
                              check
                            </span>
                          </div>
                          <span className="text-sm font-bold text-[#5c7a67] dark:text-[#a0c4ab] group-hover:text-[#13ec5b] transition-colors">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* AI Optimization Card */}
          <div className="bg-gradient-to-br from-[#15291b] to-[#0a0f0b] rounded-[2rem] p-8 text-white border border-[#1e3a27] relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 size-32 bg-[#13ec5b] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#13ec5b] text-xl fill-1">
                  auto_awesome
                </span>
                <h4 className="font-black text-xs uppercase tracking-widest text-[#13ec5b]">
                  AI Sync Match
                </h4>
              </div>
              <p className="text-xs text-[#a0c4ab] leading-relaxed font-medium">
                We've analyzed your performance DNA and found 4 ideal growth
                paths for your career.
              </p>
              <button className="mt-6 w-full py-3 bg-[#13ec5b] text-[#15291b] rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#13ec5b]/10 hover:scale-[1.02] transition-all">
                Sync Recommendations
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content: Course Grid */}
        <div className="flex-1 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white dark:bg-[#15291b] rounded-[2rem] border border-[#e7f3eb] dark:border-[#1e3a27] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-[#13ec5b]/5 hover:border-[#13ec5b]/30 cursor-pointer"
                onClick={() =>
                  router.push(
                    `/learning/users/student/portal/courses/${course.id}`,
                  )
                }
              >
                {/* Course Header Image */}
                <div className="relative h-48 overflow-hidden bg-[#0a0f0b]">
                  <img
                    alt={course.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    src={course.image}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#13ec5b] px-3 py-1 rounded-full text-[9px] font-black text-[#15291b] uppercase tracking-tighter flex items-center gap-1.5 shadow-xl">
                      <span className="material-symbols-outlined text-xs font-black">
                        auto_awesome
                      </span>
                      {course.match} Match
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 size-10 rounded-2xl bg-[#0a0f0b]/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#13ec5b] hover:text-[#15291b] transition-all border border-white/10">
                    <span className="material-symbols-outlined text-xl">
                      bookmark
                    </span>
                  </button>
                </div>

                {/* Course Body */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-[#f0f7f2] dark:bg-[#0a0f0b] text-[#13ec5b] text-[9px] font-black uppercase tracking-widest border border-[#13ec5b]/10">
                      {course.category}
                    </span>
                    <span className="text-[10px] text-[#5c7a67] font-black uppercase tracking-tight">
                      {course.lessons} Units
                    </span>
                  </div>

                  <h3 className="text-lg font-black leading-tight text-[#15291b] dark:text-white mb-3 group-hover:text-[#13ec5b] transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#5c7a67] mb-6 font-bold uppercase tracking-tight">
                    {course.instructor}
                  </p>

                  <div className="flex items-center gap-6 mb-8 mt-auto">
                    <div className="flex items-center gap-1.5 text-amber-500">
                      <span className="material-symbols-outlined text-lg fill-1">
                        star
                      </span>
                      <span className="text-xs font-black text-[#15291b] dark:text-slate-200">
                        {course.rating}
                      </span>
                      <span className="text-[10px] font-bold text-[#5c7a67]">
                        ({course.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#5c7a67]">
                      <span className="material-symbols-outlined text-lg">
                        group
                      </span>
                      <span className="text-[10px] font-black uppercase">
                        {course.students}
                      </span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#e7f3eb] dark:border-[#1e3a27] flex items-center justify-between gap-4">
                    <span
                      className={`text-xl font-black ${course.price === "Free" ? "text-[#13ec5b]" : "text-[#15291b] dark:text-white"}`}
                    >
                      {course.price}
                    </span>
                    <button className="px-6 py-3 bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#13ec5b] dark:hover:bg-[#13ec5b] transition-all">
                      Enroll Module
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Engine */}
          <div className="mt-16 flex items-center justify-center gap-3 pb-20">
            <button className="size-12 flex items-center justify-center rounded-2xl bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] hover:border-[#13ec5b] hover:text-[#13ec5b] transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-12 rounded-2xl bg-[#13ec5b] text-[#15291b] font-black text-xs">
              1
            </button>
            {[2, 3].map((n) => (
              <button
                key={n}
                className="size-12 rounded-2xl bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] font-black text-xs hover:border-[#13ec5b] transition-all"
              >
                {n}
              </button>
            ))}
            <span className="px-2 text-[#5c7a67] font-black">...</span>
            <button className="size-12 rounded-2xl bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] font-black text-xs hover:border-[#13ec5b] transition-all">
              12
            </button>
            <button className="size-12 flex items-center justify-center rounded-2xl bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] hover:border-[#13ec5b] hover:text-[#13ec5b] transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
