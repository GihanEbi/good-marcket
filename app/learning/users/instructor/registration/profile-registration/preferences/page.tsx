"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InstructorRegistrationStep2() {
  const router = useRouter();
  const [studentCapacity, setStudentCapacity] = useState(50);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      "/learning/users/instructor/registration/profile-registration/verification",
    );
  };

  const handleBack = () => {
    router.push(
      "/learning/users/instructor/registration/profile-registration/personal_info",
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {/* --- Progress Pipeline --- */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-4 left-0 w-full h-[2px] bg-[#e7f3eb] dark:bg-[#1e3a27] z-0"></div>

            {[
              { step: 1, label: "Identity", status: "complete" },
              { step: 2, label: "DNA Protocol", status: "active" },
              { step: 3, label: "Verification", status: "pending" },
              { step: 4, label: "Sync Review", status: "pending" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center gap-3 relative z-10 flex-1"
              >
                <div
                  className={`size-9 rounded-xl flex items-center justify-center font-black text-xs transition-all duration-500 border-2 ${
                    item.status === "active"
                      ? "bg-[#13ec5b] border-[#13ec5b] text-[#15291b] shadow-lg shadow-[#13ec5b]/20 scale-110"
                      : item.status === "complete"
                        ? "bg-[#15291b] border-[#13ec5b] text-[#13ec5b]"
                        : "bg-white dark:bg-[#15291b] border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67]"
                  }`}
                >
                  {item.status === "complete" ? (
                    <span className="material-symbols-outlined text-sm font-black">
                      check
                    </span>
                  ) : (
                    item.step.toString().padStart(2, "0")
                  )}
                </div>
                <span
                  className={`text-[9px] font-black uppercase tracking-[0.2em] ${item.status === "active" ? "text-[#13ec5b]" : "text-[#5c7a67]"}`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* --- Main Preferences Form --- */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-12 shadow-sm relative">
              <form className="space-y-12" onSubmit={handleNext}>
                {/* Areas of Expertise */}
                <section className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#13ec5b] font-black">
                        psychology
                      </span>
                      Knowledge Domains
                    </h3>
                    <p className="text-sm font-medium text-[#5c7a67] dark:text-[#a0c4ab]">
                      Identify the technical nodes you are qualified to
                      architect.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5c7a67] group-focus-within:text-[#13ec5b] transition-colors">
                        search
                      </span>
                      <input
                        className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl pl-12 pr-4 py-4 text-xs font-bold focus:border-[#13ec5b] outline-none transition-all"
                        placeholder="Filter subject nodes (e.g. Neural Networks, Architecture...)"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Computer Science",
                        "Data Logic",
                        "Neural Training",
                      ].map((subject) => (
                        <span
                          key={subject}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#13ec5b]/10 text-[#13ec5b] rounded-xl text-[10px] font-black uppercase tracking-widest border border-[#13ec5b]/20"
                        >
                          {subject}
                          <button
                            type="button"
                            className="material-symbols-outlined text-sm hover:text-white transition-colors"
                          >
                            close
                          </button>
                        </span>
                      ))}
                      <button
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0f7f2] dark:bg-[#0a0f0b] text-[#5c7a67] dark:text-[#a0c4ab] rounded-xl text-[10px] font-black uppercase tracking-widest border border-[#e7f3eb] dark:border-[#1e3a27] hover:border-[#13ec5b] transition-all"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                        Inject Node
                      </button>
                    </div>
                  </div>
                </section>

                {/* Pedagogical Protocol */}
                <section className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#13ec5b] font-black">
                        history_edu
                      </span>
                      Pedagogical Protocol
                    </h3>
                    <p className="text-sm font-medium text-[#5c7a67] dark:text-[#a0c4ab]">
                      Define your architectural approach to knowledge transfer.
                    </p>
                  </div>
                  <div className="border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] overflow-hidden bg-[#fcfdfc] dark:bg-[#0a0f0b]">
                    <div className="bg-white dark:bg-[#15291b] border-b border-[#e7f3eb] dark:border-[#1e3a27] p-3 flex gap-2">
                      {[
                        "format_bold",
                        "terminal",
                        "format_list_bulleted",
                        "link",
                      ].map((icon) => (
                        <button
                          key={icon}
                          type="button"
                          className="p-2 hover:text-[#13ec5b] text-[#5c7a67] transition-all"
                        >
                          <span className="material-symbols-outlined text-lg">
                            {icon}
                          </span>
                        </button>
                      ))}
                    </div>
                    <textarea
                      className="w-full bg-transparent border-none px-6 py-6 text-xs font-bold leading-relaxed focus:ring-0 min-h-[180px] outline-none text-[#15291b] dark:text-white resize-none"
                      placeholder="I utilize a project-driven logic loop where student nodes apply theory to real-world datasets..."
                    ></textarea>
                  </div>
                </section>

                {/* Temporal Sync Matrix (Availability) */}
                <section className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#13ec5b] font-black">
                        calendar_month
                      </span>
                      Temporal Matrix
                    </h3>
                    <span className="text-[9px] font-black text-[#5c7a67] bg-[#f0f7f2] dark:bg-[#0a0f0b] px-3 py-1 rounded-full uppercase tracking-widest border border-[#e7f3eb] dark:border-[#1e3a27]">
                      Sync Time: UTC -05:00
                    </span>
                  </div>

                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="min-w-[600px] bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] p-6">
                      <div className="grid grid-cols-8 gap-1">
                        <div className="p-2"></div>
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                          (day, i) => (
                            <div
                              key={day}
                              className={`p-2 text-center text-[9px] font-black uppercase tracking-widest ${i >= 5 ? "text-[#13ec5b]" : "text-[#5c7a67]"}`}
                            >
                              {day}
                            </div>
                          ),
                        )}

                        {["09:00 AM", "12:00 PM", "03:00 PM"].map(
                          (time, rowIdx) => (
                            <React.Fragment key={time}>
                              <div className="p-2 text-[8px] font-black text-[#5c7a67] flex items-center justify-end uppercase">
                                {time}
                              </div>
                              {Array.from({ length: 7 }).map((_, colIdx) => {
                                const isActive =
                                  (rowIdx === 0 && colIdx < 5) ||
                                  (rowIdx === 1 && colIdx >= 5) ||
                                  (rowIdx === 2 && colIdx < 5);
                                return (
                                  <div
                                    key={colIdx}
                                    className={`h-10 rounded-lg border transition-all cursor-pointer ${
                                      isActive
                                        ? "bg-[#13ec5b]/20 border-[#13ec5b]/40 shadow-[inset_0_0_8px_rgba(19,236,91,0.1)]"
                                        : "bg-transparent border-[#e7f3eb] dark:border-[#1e3a27] hover:bg-[#13ec5b]/5"
                                    }`}
                                  ></div>
                                );
                              })}
                            </React.Fragment>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Deployment Capacity */}
                <section className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#13ec5b] font-black">
                        group
                      </span>
                      Deployment Capacity
                    </h3>
                    <div className="px-5 py-2 bg-[#13ec5b] text-[#15291b] rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#13ec5b]/10">
                      Limit: {studentCapacity} Nodes
                    </div>
                  </div>
                  <div className="relative pt-4">
                    <input
                      type="range"
                      min="5"
                      max="200"
                      step="5"
                      value={studentCapacity}
                      onChange={(e) =>
                        setStudentCapacity(Number(e.target.value))
                      }
                      className="w-full h-1.5 bg-[#e7f3eb] dark:bg-[#1e3a27] rounded-lg appearance-none cursor-pointer accent-[#13ec5b]"
                    />
                    <div className="flex justify-between mt-4 text-[9px] font-black text-[#5c7a67] uppercase tracking-[0.2em]">
                      <span>Nano (5)</span>
                      <span>Mid-Range (100)</span>
                      <span>Mass Deployment (200+)</span>
                    </div>
                  </div>
                </section>

                {/* Neural Links */}
                <section className="space-y-8">
                  <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#13ec5b] font-black">
                      share
                    </span>
                    Professional Uplinks
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
                        LinkedIn Identifier
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c7a67] text-[10px] font-black uppercase opacity-60">
                          in/
                        </span>
                        <input
                          className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl pl-12 pr-4 py-3.5 text-xs font-bold focus:border-[#13ec5b] outline-none transition-all"
                          placeholder="username"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
                        Global Portfolio Hub
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5c7a67] text-lg">
                          language
                        </span>
                        <input
                          className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl pl-12 pr-4 py-3.5 text-xs font-bold focus:border-[#13ec5b] outline-none transition-all"
                          placeholder="https://dna-hub.com/profile"
                          type="url"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </form>
            </div>

            {/* Navigation Interface */}
            <div className="flex justify-between pt-6">
              <button
                onClick={handleBack}
                className="bg-white dark:bg-[#15291b] border-2 border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] dark:text-slate-300 font-black py-4 px-10 rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:border-[#13ec5b] transition-all flex items-center gap-4"
              >
                <span className="material-symbols-outlined font-black">
                  arrow_back
                </span>
                Previous Node
              </button>
              <button
                onClick={handleNext}
                className="bg-[#13ec5b] text-[#15291b] font-black py-4 px-12 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
              >
                Next: Verification
                <span className="material-symbols-outlined font-black">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* --- Right Column: Sidebar Protocol --- */}
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 space-y-10 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                Technical Briefing
              </h3>
              <div className="space-y-10">
                {[
                  {
                    icon: "tips_and_updates",
                    title: "Domain Density",
                    desc: "Selecting 3+ core domains increases course resonance by 40%.",
                  },
                  {
                    icon: "video_camera_front",
                    title: "Sync engagement",
                    desc: "Optimal engaged deployment ranges between 25-50 nodes.",
                  },
                  {
                    icon: "forum",
                    title: "Methodology Logic",
                    desc: "Active-learning approach yields 2x higher synchronization rates.",
                  },
                ].map((tip) => (
                  <div key={tip.title} className="flex gap-5 group">
                    <div className="size-11 rounded-xl bg-[#13ec5b]/10 text-[#13ec5b] flex items-center justify-center shrink-0 border border-[#13ec5b]/20 group-hover:bg-[#13ec5b] group-hover:text-[#15291b] transition-all">
                      <span className="material-symbols-outlined text-xl font-black">
                        {tip.icon}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-tight group-hover:text-[#13ec5b] transition-colors">
                        {tip.title}
                      </h4>
                      <p className="text-[11px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-[#13ec5b]/5 rounded-[1.5rem] border border-[#13ec5b]/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-[#13ec5b] text-base font-black">
                    groups
                  </span>
                  <span className="text-[10px] font-black uppercase text-[#5c7a67] tracking-widest">
                    Community Sync
                  </span>
                </div>
                <p className="text-[11px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                  Join the{" "}
                  <span className="text-[#13ec5b] font-black">
                    Instructor Guild
                  </span>{" "}
                  to access advanced AI pedagogical assets.
                </p>
                <button className="mt-4 text-[#13ec5b] text-[10px] font-black uppercase tracking-widest hover:underline">
                  Join Network →
                </button>
              </div>
            </div>

            {/* Professional Validation */}
            <div className="bg-[#15291b] dark:bg-[#13ec5b]/5 rounded-[2.5rem] border border-[#1e3a27] p-8 relative overflow-hidden group">
              <div className="absolute -bottom-10 -left-10 size-40 bg-[#13ec5b] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <p className="text-xs font-medium italic text-[#a0c4ab] leading-relaxed relative z-10">
                "The Temporal Matrix allowed me to synchronize global office
                hours across 14 timezones instantly. Pure logic."
              </p>
              <div className="mt-6 flex items-center gap-4 relative z-10">
                <div className="size-10 rounded-xl bg-[#0a0f0b] border border-[#13ec5b]/30 overflow-hidden">
                  <img
                    src="https://ui-avatars.com/api/?name=Aris+Thorne&background=15291b&color=13ec5b&bold=true"
                    alt="Architect"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-white tracking-tight">
                    Dr. Aris Thorne
                  </p>
                  <p className="text-[8px] font-black uppercase text-[#13ec5b] tracking-widest">
                    Quantum Logic Lead
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* --- HUD Footer --- */}
      <footer className="max-w-7xl mx-auto px-10 py-12 border-t border-[#e7f3eb] dark:border-[#1e3a27] flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
          © {new Date().getFullYear()} EduDNA Neural Network • Protocol 3.12
        </p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
          <Link href="#" className="hover:text-[#13ec5b] transition-colors">
            Privacy Node
          </Link>
          <Link href="#" className="hover:text-[#13ec5b] transition-colors">
            Legal Terms
          </Link>
        </div>
      </footer>
    </div>
  );
}
