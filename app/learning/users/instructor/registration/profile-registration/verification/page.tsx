"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InstructorRegistrationStep3() {
  const router = useRouter();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      "/learning/users/instructor/registration/profile-registration/review",
    );
  };

  const handleBack = () => {
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
            <div className="absolute top-4 left-0 w-full h-[2px] bg-[#13ec5b] z-0"></div>

            {[
              { step: 1, label: "Identity", status: "complete" },
              { step: 2, label: "DNA Protocol", status: "complete" },
              { step: 3, label: "Network Trust", status: "active" },
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
          {/* --- Main Verification Form --- */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 md:p-12 shadow-sm relative">
              <form className="space-y-12" onSubmit={handleNext}>
                {/* Identity Verification */}
                <section className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-black tracking-tight flex items-center gap-3 text-[#15291b] dark:text-white">
                      <span className="material-symbols-outlined text-[#13ec5b] font-black">
                        badge
                      </span>
                      Government Metadata
                    </h3>
                    <p className="text-sm font-medium text-[#5c7a67] dark:text-[#a0c4ab]">
                      Uplink government-issued identification to authorize
                      secure instructor fiscal transfers.
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-[#e7f3eb] dark:border-[#1e3a27] rounded-[2rem] p-10 text-center transition-all hover:border-[#13ec5b]/50 hover:bg-[#13ec5b]/5 cursor-pointer group bg-[#fcfdfc] dark:bg-[#0a0f0b]">
                    <span className="material-symbols-outlined text-[#13ec5b] text-5xl mb-4 group-hover:scale-110 transition-transform font-black">
                      cloud_upload
                    </span>
                    <p className="text-sm font-black uppercase tracking-tight text-[#15291b] dark:text-white">
                      Transmit ID Payload
                    </p>
                    <p className="text-[9px] font-black text-[#5c7a67] mt-2 uppercase tracking-[0.2em]">
                      Passport, Driver License, or National ID
                    </p>
                    <div className="mt-6 pt-6 border-t border-[#e7f3eb] dark:border-[#1e3a27]">
                      <p className="text-[10px] font-black text-[#13ec5b] uppercase tracking-widest">
                        Supported: JPG, PNG, PDF (Max 5MB)
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credential Verification */}
                <section className="space-y-8">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-black tracking-tight flex items-center gap-3 text-[#15291b] dark:text-white">
                      <span className="material-symbols-outlined text-[#13ec5b] font-black">
                        workspace_premium
                      </span>
                      Certification Pulse
                    </h3>
                    <p className="text-sm font-medium text-[#5c7a67] dark:text-[#a0c4ab]">
                      Provide digital proof of your instructional background and
                      professional domain expertise.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="border-2 border-dashed border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl p-6 text-center hover:border-[#13ec5b]/40 transition-all cursor-pointer bg-[#fcfdfc] dark:bg-[#0a0f0b]">
                      <div className="flex items-center justify-center gap-5">
                        <span className="material-symbols-outlined text-3xl text-[#5c7a67] font-black">
                          upload_file
                        </span>
                        <div className="text-left">
                          <p className="text-xs font-black uppercase tracking-tight text-[#15291b] dark:text-white">
                            Uplink Diploma or License
                          </p>
                          <p className="text-[10px] font-medium text-[#5c7a67] mt-1">
                            Verification of academic status
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                        Global License Identifier (Optional)
                      </label>
                      <input
                        className="w-full bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl px-5 py-3.5 text-sm font-bold text-[#15291b] dark:text-white focus:border-[#13ec5b] outline-none transition-all"
                        placeholder="e.g. LIC-NODE-123456"
                        type="text"
                      />
                    </div>
                  </div>
                </section>

                {/* Background Check Authorization */}
                <section className="bg-[#f0f7f2] dark:bg-[#13ec5b]/5 p-8 rounded-[2rem] border border-[#13ec5b]/20">
                  <div className="flex flex-col gap-1 mb-8">
                    <h3 className="text-xl font-black tracking-tight flex items-center gap-3 text-[#15291b] dark:text-white">
                      <span className="material-symbols-outlined text-[#13ec5b] font-black">
                        fact_check
                      </span>
                      Network Integrity Audit
                    </h3>
                    <p className="text-sm font-medium text-[#5c7a67] dark:text-[#a0c4ab]">
                      To maintain ecosystem safety, all architects must pass a
                      standard background sync.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center mt-1">
                        <input
                          type="checkbox"
                          className="peer size-5 appearance-none rounded border-2 border-[#13ec5b]/30 checked:bg-[#13ec5b] checked:border-[#13ec5b] transition-all cursor-pointer"
                        />
                        <span className="material-symbols-outlined absolute text-[#15291b] text-xs font-black opacity-0 peer-checked:opacity-100 pointer-events-none">
                          check
                        </span>
                      </div>
                      <span className="text-xs font-bold leading-relaxed text-[#5c7a67] dark:text-slate-300 group-hover:text-[#15291b] dark:group-hover:text-white transition-colors">
                        I authorize EduDNA to execute a secure integrity audit.
                        I acknowledge that all metadata will be encrypted in
                        accordance with Protocol SOC2.
                      </span>
                    </label>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#5c7a67] dark:text-[#a0c4ab] uppercase tracking-widest">
                        Cryptographic Signature
                      </label>
                      <div className="relative group">
                        <input
                          className="w-full bg-white dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl px-6 py-5 text-xl italic font-serif text-[#15291b] dark:text-white focus:border-[#13ec5b] outline-none transition-all"
                          placeholder="Initialize full legal name"
                          type="text"
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-end">
                          <span className="text-[8px] font-black text-[#13ec5b] uppercase tracking-widest">
                            E-Signature
                          </span>
                          <div className="w-12 h-px bg-[#13ec5b]/30 mt-1"></div>
                        </div>
                      </div>
                      <p className="text-[9px] font-black text-[#5c7a67] uppercase tracking-tighter">
                        Inputting your identity name constitutes a binding legal
                        verification.
                      </p>
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
                Next: Final Sync Review
                <span className="material-symbols-outlined font-black">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* --- Right Column: Sidebar Briefing --- */}
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 space-y-10 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#5c7a67]">
                Security Briefing
              </h3>

              <div className="space-y-8">
                {[
                  {
                    title: "Node Trust",
                    desc: "Verification maintains the high-fidelity standard of our network and ensures architect qualification.",
                  },
                  {
                    title: "Sync Timeline",
                    desc: "Compliance nodes typically complete the audit phase within 24-48 solar hours.",
                  },
                  {
                    title: "Data Encryption",
                    desc: "All payloads are hashed and stored in SOC2-compliant decentralized nodes.",
                  },
                ].map((item) => (
                  <div key={item.title} className="space-y-2 group">
                    <h4 className="text-xs font-black uppercase tracking-tight text-[#15291b] dark:text-white group-hover:text-[#13ec5b] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-[#f0f7f2] dark:bg-[#0a0f0b] rounded-[1.5rem] border border-[#13ec5b]/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#13ec5b] text-base font-black">
                    support_agent
                  </span>
                  <span className="text-[10px] font-black uppercase text-[#5c7a67] tracking-widest">
                    Audit Support
                  </span>
                </div>
                <p className="text-[11px] font-medium text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed">
                  Struggling with payload uplinks? Contact our onboarding
                  concierge.
                </p>
                <button className="mt-4 text-[#13ec5b] text-[10px] font-black uppercase tracking-widest hover:underline">
                  Initialize Sync
                </button>
              </div>
            </div>

            {/* Network Trust Badge */}
            <div className="bg-gradient-to-br from-[#15291b] to-[#0a0f0b] rounded-[2.5rem] p-8 text-white relative overflow-hidden border border-[#1e3a27] group shadow-2xl">
              <div className="absolute -top-10 -right-10 size-40 bg-[#13ec5b] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[#13ec5b] text-4xl mb-4 fill-1">
                  verified_user
                </span>
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">
                  Global System Verified
                </h4>
                <p className="text-[10px] text-[#a0c4ab] font-medium leading-relaxed uppercase tracking-tighter">
                  Fully compliant with ISO/IEC 27001 and GDPR metadata
                  protocols.
                </p>
              </div>
              <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-white/5 text-9xl font-black rotate-12">
                shield
              </span>
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
