"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InstructorRegistrationStep1() {
  const router = useRouter();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      "/learning/users/instructor/registration/profile-registration/preferences",
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
              { step: 1, label: "Identity", active: true },
              { step: 2, label: "Preferences", active: false },
              { step: 3, label: "Verification", active: false },
              { step: 4, label: "Sync Review", active: false },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center gap-3 relative z-10 flex-1"
              >
                <div
                  className={`size-9 rounded-xl flex items-center justify-center font-black text-xs transition-all duration-500 border-2 ${
                    item.active
                      ? "bg-[#13ec5b] border-[#13ec5b] text-[#15291b] shadow-lg shadow-[#13ec5b]/20 scale-110"
                      : "bg-white dark:bg-[#15291b] border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67]"
                  }`}
                >
                  {item.step.toString().padStart(2, "0")}
                </div>
                <span
                  className={`text-[9px] font-black uppercase tracking-[0.2em] ${item.active ? "text-[#13ec5b]" : "text-[#5c7a67]"}`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* --- Main Registration Form --- */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-12 shadow-sm relative overflow-hidden">
              {/* Profile Avatar Uplink */}
              <div className="flex flex-col sm:flex-row items-center gap-10 mb-12 pb-12 border-b border-[#e7f3eb] dark:border-[#1e3a27]">
                <div className="relative group cursor-pointer">
                  <div className="size-28 rounded-[2rem] bg-[#f0f7f2] dark:bg-[#0a0f0b] border-2 border-dashed border-[#13ec5b]/30 flex items-center justify-center overflow-hidden group-hover:border-[#13ec5b] transition-all">
                    <span className="material-symbols-outlined text-[#13ec5b] text-4xl group-hover:scale-110 transition-transform">
                      add_a_photo
                    </span>
                    <div className="absolute inset-0 bg-[#13ec5b]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <h3 className="text-xl font-black tracking-tight">
                    Identity Visual
                  </h3>
                  <p className="text-sm text-[#5c7a67] dark:text-[#a0c4ab] max-w-sm font-medium leading-relaxed">
                    A high-fidelity professional photo improves student node
                    connections. JPG or PNG payload (Max 5MB).
                  </p>
                </div>
              </div>

              <form className="space-y-12" onSubmit={handleNext}>
                {/* Personal Section */}
                <section className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#13ec5b] font-black">
                      person
                    </span>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                      Personal Metadata
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        label: "Full Identity Name",
                        placeholder: "e.g. Prof. Alan Turing",
                      },
                      {
                        label: "Neural Email Node",
                        placeholder: "architect@university.edu",
                        type: "email",
                      },
                      {
                        label: "Communication Link",
                        placeholder: "+1 (555) 000-0000",
                        type: "tel",
                      },
                      { label: "Date of Origin", type: "date" },
                    ].map((field) => (
                      <div key={field.label} className="space-y-3">
                        <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                          {field.label}
                        </label>
                        <input
                          className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl px-5 py-3.5 text-sm font-bold text-[#15291b] dark:text-white focus:border-[#13ec5b] outline-none transition-all"
                          placeholder={field.placeholder}
                          type={field.type || "text"}
                        />
                      </div>
                    ))}
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                        Physical Residency Node
                      </label>
                      <textarea
                        className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl px-5 py-3.5 text-sm font-bold text-[#15291b] dark:text-white focus:border-[#13ec5b] outline-none transition-all resize-none"
                        placeholder="Street, City, Sector, ZIP Code"
                        rows={2}
                      ></textarea>
                    </div>
                  </div>
                </section>

                {/* Professional Credentials Section */}
                <section className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#13ec5b] font-black">
                      workspace_premium
                    </span>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                      Academic Credentials
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                        Highest Certification
                      </label>
                      <select className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl px-5 py-3.5 text-sm font-bold text-[#15291b] dark:text-white focus:border-[#13ec5b] outline-none transition-all appearance-none">
                        <option>Select Tier</option>
                        <option>PhD / Doctorate</option>
                        <option>Master's Node</option>
                        <option>Professional Certificate</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                        Instructional Cycles (Years)
                      </label>
                      <input
                        className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl px-5 py-3.5 text-sm font-bold text-[#15291b] dark:text-white focus:border-[#13ec5b] outline-none transition-all"
                        placeholder="e.g. 05"
                        type="number"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                        Manifest / CV Payload
                      </label>
                      <div className="border-2 border-dashed border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] p-10 text-center hover:border-[#13ec5b]/50 hover:bg-[#13ec5b]/5 transition-all cursor-pointer group bg-[#fcfdfc] dark:bg-[#0a0f0b]">
                        <span className="material-symbols-outlined text-[#13ec5b] text-5xl mb-4 group-hover:scale-110 transition-transform font-black">
                          cloud_upload
                        </span>
                        <p className="text-sm font-black uppercase tracking-tight text-[#15291b] dark:text-white">
                          Transmit CV Payload
                        </p>
                        <p className="text-[9px] font-black text-[#5c7a67] mt-2 uppercase tracking-[0.2em]">
                          PDF, DOCX up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </form>
            </div>

            {/* Navigation Interface */}
            <div className="flex justify-end pt-6">
              <button
                onClick={handleNext}
                className="bg-[#13ec5b] text-[#15291b] font-black py-4 px-10 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
              >
                Proceed: Teaching Preferences
                <span className="material-symbols-outlined font-black">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* --- Technical Side Panel --- */}
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 space-y-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-7xl font-black">
                  shield
                </span>
              </div>

              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                Instructor Protocol
              </h3>

              <div className="space-y-10">
                {[
                  {
                    icon: "auto_awesome",
                    title: "AI-Augmented Creation",
                    desc: "Our engine crafts baseline curricula and adaptive quiz nodes.",
                  },
                  {
                    icon: "public",
                    title: "Global Sync Reach",
                    desc: "Connect your knowledge DNA with learners in 120+ countries.",
                  },
                  {
                    icon: "bolt",
                    title: "Elite Revenue Sync",
                    desc: "Industry-leading 85% revenue share for verified architects.",
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-5 group">
                    <div className="size-11 rounded-xl bg-[#13ec5b]/10 text-[#13ec5b] flex items-center justify-center shrink-0 border border-[#13ec5b]/20 group-hover:bg-[#13ec5b] group-hover:text-[#15291b] transition-all">
                      <span className="material-symbols-outlined text-xl font-black">
                        {benefit.icon}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-tight group-hover:text-[#13ec5b] transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-[11px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-[1.5rem] border border-[#13ec5b]/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-amber-500 text-base font-black">
                    support_agent
                  </span>
                  <span className="text-[10px] font-black uppercase text-[#5c7a67] tracking-widest">
                    Architect Support
                  </span>
                </div>
                <p className="text-[11px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                  Experiencing deployment lag? Synchronize with our Success
                  Team.
                </p>
                <button className="mt-4 text-[#13ec5b] text-[10px] font-black uppercase tracking-widest hover:underline">
                  Initialize Chat
                </button>
              </div>
            </div>

            {/* Architect Testimonial */}
            <div className="bg-[#13ec5b]/5 rounded-[2rem] border border-[#13ec5b]/10 p-8 relative">
              <span className="material-symbols-outlined absolute top-4 right-6 text-[#13ec5b] opacity-20 text-4xl">
                format_quote
              </span>
              <p className="text-xs font-medium italic text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed relative z-10">
                "EduDNA's AI synchronization protocol saved me 40+ instructional
                hours. It's the most advanced knowledge deployment platform
                currently active."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="size-10 rounded-xl bg-[#15291b] border border-[#13ec5b]/30 overflow-hidden">
                  <img
                    src="https://ui-avatars.com/api/?name=Michael+Chen&background=15291b&color=13ec5b&bold=true"
                    alt="Architect"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-[#15291b] dark:text-white tracking-tight">
                    Prof. Michael Chen
                  </p>
                  <p className="text-[8px] font-black uppercase text-[#13ec5b] tracking-widest">
                    Logic & Systems Architect
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
          <Link href="#" className="hover:text-[#13ec5b] transition-colors">
            Instructor Pact
          </Link>
        </div>
      </footer>
    </div>
  );
}
