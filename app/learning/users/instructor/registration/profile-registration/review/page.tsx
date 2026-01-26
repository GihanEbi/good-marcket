"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InstructorRegistrationStep4() {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Neural Protocol Initialized!");
    router.push("/learning/users/instructor/portal/dashboard");
  };

  const handleBack = () => {
    router.push(
      "/learning/users/instructor/registration/profile-registration/verification",
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 transition-colors duration-300">
      <main className="max-w-4xl mx-auto p-6 md:p-12">
        {/* --- Progress Pipeline --- */}
        <div className="mb-16">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-4 left-0 w-full h-[2px] bg-[#13ec5b] z-0"></div>

            {[
              { step: 1, label: "Identity", status: "complete" },
              { step: 2, label: "DNA Protocol", status: "complete" },
              { step: 3, label: "Network Trust", status: "complete" },
              { step: 4, label: "Final Sync", status: "active" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center gap-3 relative z-10 flex-1"
              >
                <div
                  className={`size-9 rounded-xl flex items-center justify-center font-black text-xs transition-all duration-500 border-2 ${
                    item.status === "active"
                      ? "bg-[#13ec5b] border-[#13ec5b] text-[#15291b] shadow-lg shadow-[#13ec5b]/20 scale-110"
                      : "bg-[#15291b] border-[#13ec5b] text-[#13ec5b]"
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

        {/* --- Header Section --- */}
        <div className="mb-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[#13ec5b] fill-1">
              auto_awesome
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
              Final Protocol Validation
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight leading-none text-[#15291b] dark:text-white">
            Sync <span className="text-[#13ec5b]">Review</span>
          </h2>
          <p className="text-[#5c7a67] dark:text-[#a0c4ab] max-w-lg mx-auto font-medium leading-relaxed">
            Perform a final audit of your neural metadata before committing your
            architect profile to the global network.
          </p>
        </div>

        <div className="space-y-8">
          {/* Card 1: Identity Metadata */}
          <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 shadow-sm relative group">
            <button className="absolute top-8 right-8 size-10 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] text-[#5c7a67] hover:text-[#13ec5b] transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-lg font-black">
                edit
              </span>
            </button>

            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#13ec5b] text-base font-black">
                person
              </span>
              Identity Metadata
            </h3>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
              <div className="relative">
                <div className="size-28 rounded-[2rem] overflow-hidden border-2 border-[#13ec5b]/30 bg-[#0a0f0b]">
                  <img
                    alt="Profile"
                    className="w-full h-full object-cover opacity-80"
                    src="https://ui-avatars.com/api/?name=Alexander+Mitchell&background=15291b&color=13ec5b&bold=true"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#13ec5b] text-[#15291b] p-1.5 rounded-xl border-4 border-white dark:border-[#15291b] shadow-lg">
                  <span className="material-symbols-outlined text-sm font-black block">
                    verified
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 flex-1 w-full">
                {[
                  { label: "Full Identity", val: "Alexander Mitchell" },
                  { label: "Neural Email", val: "a.mitchell@dna-hub.io" },
                  { label: "Comms Link", val: "+1 (555) 0123-4567" },
                  { label: "Sector Location", val: "San Francisco, CA" },
                ].map((field) => (
                  <div key={field.label}>
                    <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-1 block opacity-70">
                      {field.label}
                    </span>
                    <p className="text-sm font-bold text-[#15291b] dark:text-white truncate">
                      {field.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Professional Manifest */}
          <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 shadow-sm relative">
            <button className="absolute top-8 right-8 size-10 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] text-[#5c7a67] hover:text-[#13ec5b] transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-lg font-black">
                edit
              </span>
            </button>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#13ec5b] text-base font-black">
                work
              </span>
              Professional Manifest
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-1 block opacity-70">
                    Core Expertise Domain
                  </span>
                  <p className="text-sm font-bold text-[#15291b] dark:text-white">
                    Machine Learning & Neural Architectures
                  </p>
                </div>
                <div>
                  <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-1 block opacity-70">
                    Instructional Cycles
                  </span>
                  <p className="text-sm font-bold text-[#15291b] dark:text-white">
                    08 Technical Years
                  </p>
                </div>
              </div>
              <div>
                <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-2 block opacity-70">
                  Synchronized CV Payload
                </span>
                <div className="flex items-center gap-4 bg-[#fcfdfc] dark:bg-[#0a0f0b] p-4 rounded-2xl border border-[#e7f3eb] dark:border-[#1e3a27]">
                  <div className="size-10 bg-[#13ec5b]/10 text-[#13ec5b] flex items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined font-black">
                      terminal
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-[#15291b] dark:text-white truncate uppercase tracking-tight">
                      mitchell_sync_v3.pdf
                    </p>
                    <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-widest mt-1">
                      1.2MB • ENCRYPTED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: DNA Protocol Preferences */}
          <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 shadow-sm relative">
            <button className="absolute top-8 right-8 size-10 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] text-[#5c7a67] hover:text-[#13ec5b] transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-lg font-black">
                edit
              </span>
            </button>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#13ec5b] text-base font-black">
                menu_book
              </span>
              DNA Protocol
            </h3>

            <div className="space-y-8">
              <div>
                <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-4 block opacity-70">
                  Active Subject Nodes
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python Core",
                    "Neural Nets",
                    "Data Logic",
                    "NLP Synthesis",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#13ec5b]/10 text-[#13ec5b] text-[9px] font-black uppercase tracking-widest rounded-xl border border-[#13ec5b]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4 border-t border-[#e7f3eb] dark:border-[#1e3a27]">
                <div>
                  <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-4 block opacity-70">
                    Temporal Sync Matrix
                  </span>
                  <div className="grid grid-cols-7 gap-1.5">
                    {[1, 1, 0, 1, 1, 0, 0].map((active, i) => (
                      <div
                        key={i}
                        className={`h-8 rounded-lg border ${active ? "bg-[#13ec5b] border-[#13ec5b] shadow-lg shadow-[#13ec5b]/20" : "bg-[#fcfdfc] dark:bg-[#0a0f0b] border-[#e7f3eb] dark:border-[#1e3a27]"}`}
                      ></div>
                    ))}
                  </div>
                  <p className="text-[9px] font-black text-[#5c7a67] mt-3 uppercase tracking-widest italic">
                    Est. Capacity: 24h / Cycles
                  </p>
                </div>
                <div>
                  <span className="text-[8px] font-black text-[#5c7a67] uppercase tracking-[0.2em] mb-4 block opacity-70">
                    Deployment Node Limit
                  </span>
                  <p className="text-xl font-black text-[#15291b] dark:text-white tracking-tighter">
                    25 STUDENT NODES{" "}
                    <span className="text-[#13ec5b]">/ SESSION</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Trust Verification */}
          <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 shadow-sm relative">
            <button className="absolute top-8 right-8 size-10 rounded-xl bg-[#f0f7f2] dark:bg-[#0a0f0b] text-[#5c7a67] hover:text-[#13ec5b] transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-lg font-black">
                edit
              </span>
            </button>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67] mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#13ec5b] text-base font-black">
                verified_user
              </span>
              Trust Verification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  file: "government_id_ Mitchell.jpg",
                  type: "Identity Protocol",
                  icon: "badge",
                },
                {
                  file: "phd_credentials.pdf",
                  type: "Academic Node",
                  icon: "workspace_premium",
                },
              ].map((doc) => (
                <div
                  key={doc.file}
                  className="flex items-center gap-5 p-5 rounded-[1.5rem] bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] group hover:border-[#13ec5b]/30 transition-all"
                >
                  <div className="size-11 bg-[#15291b] dark:bg-[#13ec5b]/10 rounded-xl flex items-center justify-center border border-[#13ec5b]/20">
                    <span className="material-symbols-outlined text-[#13ec5b] font-black">
                      {doc.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-[#15291b] dark:text-white truncate uppercase tracking-tight">
                      {doc.file}
                    </p>
                    <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-widest mt-1">
                      {doc.type}
                    </p>
                  </div>
                  <button className="text-[10px] font-black text-[#13ec5b] uppercase tracking-widest hover:underline">
                    View
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-[1.5rem] bg-[#13ec5b]/5 border border-[#13ec5b]/20 flex items-start gap-4">
              <span className="material-symbols-outlined text-[#13ec5b] font-black">
                check_circle
              </span>
              <div>
                <p className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight">
                  Integrity Audit Authorized
                </p>
                <p className="text-[10px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] mt-1 italic leading-relaxed">
                  Cryptographically signed by Alexander Mitchell on Protocol
                  Cycle: Oct 14, 2023
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Action Buttons Hub --- */}
        <div className="mt-16 space-y-6">
          <button
            onClick={handleSubmit}
            className="w-full bg-[#13ec5b] text-[#15291b] font-black py-5 px-10 rounded-[2rem] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-[#13ec5b]/20 text-xs uppercase tracking-[0.3em] group hover:scale-[1.02] active:scale-[0.98]"
          >
            Finalize Profile Sync
            <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">
              send
            </span>
          </button>

          <button
            onClick={handleBack}
            className="w-full bg-transparent text-[#5c7a67] font-black py-4 px-10 rounded-[2rem] transition-all flex items-center justify-center gap-3 hover:bg-[#f0f7f2] dark:hover:bg-[#15291b] text-[10px] uppercase tracking-[0.2em]"
          >
            <span className="material-symbols-outlined text-sm font-black">
              arrow_back
            </span>
            Return to Verification
          </button>
        </div>

        <div className="mt-16 p-8 text-center border-t border-[#e7f3eb] dark:border-[#1e3a27]">
          <p className="text-[10px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed uppercase tracking-[0.2em]">
            By finalizing sync, you authorize the EduDNA Instructor Covenant.
            Application processing latency: 48 solar hours.
          </p>
        </div>
      </main>

      {/* --- HUD Footer --- */}
      <footer className="max-w-7xl mx-auto px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
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
