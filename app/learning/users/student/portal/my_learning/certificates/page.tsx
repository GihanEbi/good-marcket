"use client";

import React from "react";
import { Inter, Cinzel, Great_Vibes } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export default function CertificatePage() {
  return (
    <div
      className={`min-h-screen bg-[#fcfdfc] dark:bg-[#0a0f0b] font-sans text-[#15291b] dark:text-slate-50 p-6 lg:p-10 overflow-y-auto transition-colors duration-300 ${inter.variable} ${cinzel.variable} ${greatVibes.variable}`}
    >
      {/* Top Action Bar */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="size-2 rounded-full bg-[#13ec5b] animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67]">
              Credential Storage
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight leading-none">
            Learning <span className="text-[#13ec5b]">DNA</span> Verification
          </h2>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:border-[#13ec5b] transition-all">
            <span className="material-symbols-outlined text-lg">print</span>{" "}
            Print Asset
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* --- Left Column: The Certificate --- */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="bg-white dark:bg-[#15291b] rounded-[3rem] p-4 sm:p-8 border border-[#e7f3eb] dark:border-[#1e3a27] shadow-2xl relative overflow-hidden group">
            {/* Certificate Visual Container */}
            <div
              className="w-full aspect-[1.414/1] flex flex-col items-center justify-center p-6 sm:p-16 text-center relative rounded-[2rem] overflow-hidden"
              style={{
                backgroundColor: "#fcfdfc",
                backgroundImage:
                  "radial-gradient(#13ec5b 0.5px, transparent 0.5px)",
                backgroundSize: "30px 30px",
                border: "12px solid #15291b",
              }}
            >
              {/* Technical Overlay */}
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

              {/* Header */}
              <div className="mb-8 relative z-10">
                <div className="size-20 bg-[#15291b] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#13ec5b]/10">
                  <span className="material-symbols-outlined text-4xl text-[#13ec5b] fill-1">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-black tracking-[0.2em] text-[#15291b] uppercase leading-none">
                  Certificate of Mastery
                </h3>
                <div className="h-1 w-32 bg-[#13ec5b] mx-auto mt-4 rounded-full"></div>
                <p className="text-[10px] font-black tracking-[0.4em] text-[#5c7a67] mt-6 uppercase">
                  Node Authentication Verified
                </p>
              </div>

              {/* Name */}
              <div className="mb-8 w-full relative z-10">
                <p className="text-xs font-bold text-[#5c7a67] mb-4">
                  THIS CERTIFIES THAT THE LEARNING DNA OF
                </p>
                <h2 className="font-serif text-4xl sm:text-6xl font-black text-[#15291b] italic px-4">
                  Alex Johnson
                </h2>
                <div className="w-2/3 h-px bg-[#15291b]/10 mx-auto mt-6"></div>
              </div>

              {/* Course Title */}
              <div className="mb-12 relative z-10">
                <p className="text-xs font-bold text-[#5c7a67] mb-4">
                  HAS SUCCESSFULLY SYNCHRONIZED THE CURRICULUM
                </p>
                <h4 className="text-xl sm:text-2xl font-black text-[#15291b] uppercase tracking-tight">
                  Practical Machine Learning{" "}
                  <span className="text-[#13ec5b]">for Data Science</span>
                </h4>
                <p className="text-[9px] font-black text-[#5c7a67] mt-3 uppercase tracking-[0.2em] bg-[#15291b]/5 py-1 px-4 rounded-full inline-block">
                  Verified Professional Track • 48 Instructional Hours
                </p>
              </div>

              {/* Footer Signatures */}
              <div className="w-full flex justify-between items-end px-4 sm:px-12 mt-4 relative z-10">
                <div className="text-center">
                  <div className="font-signature text-2xl sm:text-4xl text-[#15291b] border-b border-[#15291b]/20 pb-1 mb-2">
                    Emily Chen
                  </div>
                  <p className="text-[9px] font-black text-[#15291b] uppercase tracking-widest">
                    Prof. Emily Chen
                  </p>
                  <p className="text-[8px] font-bold text-[#5c7a67] uppercase tracking-tighter">
                    Lead AI Architect
                  </p>
                </div>

                <div className="relative hidden sm:block">
                  <div className="size-24 rounded-full border-4 border-[#13ec5b] flex items-center justify-center relative shadow-lg shadow-[#13ec5b]/20 bg-white">
                    <div className="absolute inset-0 animate-ping bg-[#13ec5b]/10 rounded-full"></div>
                    <div className="text-center">
                      <span className="material-symbols-outlined text-4xl text-[#15291b] font-black">
                        verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-black text-lg sm:text-xl text-[#15291b] border-b border-[#15291b]/20 pb-1 mb-2">
                    DNA-992-04X
                  </div>
                  <p className="text-[9px] font-black text-[#15291b] uppercase tracking-widest">
                    Payload ID
                  </p>
                  <p className="text-[8px] font-bold text-[#5c7a67] uppercase tracking-tighter">
                    Blockchain Authenticated
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button className="flex items-center gap-3 px-10 py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#13ec5b]/20 hover:scale-[1.03] transition-all">
              <span className="material-symbols-outlined text-lg font-black">
                download
              </span>{" "}
              Download PDF
            </button>
            <button className="flex items-center gap-3 px-10 py-4 bg-[#15291b] dark:bg-white text-white dark:text-[#15291b] rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-black/10 hover:scale-[1.03] transition-all">
              <span className="material-symbols-outlined text-lg font-black">
                share
              </span>{" "}
              Share to Network
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#e7f3eb] dark:border-[#1e3a27] text-[#5c7a67] dark:text-[#a0c4ab] rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-[#13ec5b] hover:text-[#13ec5b] transition-all">
              <span className="material-symbols-outlined text-lg font-black">
                verified
              </span>{" "}
              Public URL
            </button>
          </div>
        </div>

        {/* --- Right Column: Insights & Recommendations --- */}
        <aside className="w-full lg:w-96 shrink-0 space-y-8">
          {/* AI Performance Insights */}
          <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#13ec5b]/10 text-[#13ec5b] flex items-center justify-center">
                <span className="material-symbols-outlined fill-1">
                  analytics
                </span>
              </div>
              <h3 className="font-black text-xs uppercase tracking-widest">
                Performance Matrix
              </h3>
            </div>

            <div className="space-y-6">
              <div className="p-5 bg-[#fcfdfc] dark:bg-[#0a0f0b] rounded-[1.5rem] border border-[#e7f3eb] dark:border-[#1e3a27]">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[10px] font-black text-[#5c7a67] uppercase tracking-widest">
                    Overall Mastery
                  </p>
                  <span className="text-xs font-black text-[#13ec5b]">94%</span>
                </div>
                <div className="h-2 w-full bg-[#e7f3eb] dark:bg-[#1e3a27] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#13ec5b] rounded-full transition-all duration-1000 shadow-[0_0_10px_#13ec5b]"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[1.5rem] text-center">
                  <p className="text-[8px] text-[#5c7a67] uppercase font-black tracking-widest mb-2">
                    Global Rank
                  </p>
                  <p className="text-xl font-black text-[#15291b] dark:text-white">
                    TOP 3%
                  </p>
                </div>
                <div className="p-5 bg-[#fcfdfc] dark:bg-[#0a0f0b] border border-[#e7f3eb] dark:border-[#1e3a27] rounded-[1.5rem] text-center">
                  <p className="text-[8px] text-[#5c7a67] uppercase font-black tracking-widest mb-2">
                    Practical
                  </p>
                  <p className="text-xl font-black text-[#13ec5b]">ELITE</p>
                </div>
              </div>

              <p className="text-xs text-[#5c7a67] dark:text-[#a0c4ab] leading-relaxed font-medium italic border-l-4 border-[#13ec5b] pl-5 bg-[#13ec5b]/5 py-4 rounded-r-2xl">
                "Alex demonstrated exceptional proficiency in neural network
                optimization, particularly in the module on Transformer
                architectures."
              </p>
            </div>
          </div>

          {/* Next Path Recommendations */}
          <div className="bg-white dark:bg-[#15291b] rounded-[2.5rem] border border-[#e7f3eb] dark:border-[#1e3a27] p-8 space-y-6">
            <h3 className="font-black text-xs uppercase tracking-widest text-[#5c7a67]">
              Next Path Pipeline
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: "Advanced Deep Learning",
                  time: "24h Module",
                  status: "Recommended",
                  img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=200&auto=format&fit=crop",
                },
                {
                  title: "MLOps Architecture",
                  time: "18h Module",
                  status: "Intermediate",
                  img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=200&auto=format&fit=crop",
                },
              ].map((course) => (
                <div key={course.title} className="group cursor-pointer">
                  <div className="relative h-28 rounded-[1.5rem] overflow-hidden mb-3 border border-[#e7f3eb] dark:border-[#1e3a27] bg-[#0a0f0b]">
                    <img
                      alt="Recommended"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                      src={course.img}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[8px] font-black text-[#15291b] px-2 py-1 bg-[#13ec5b] rounded-full uppercase tracking-widest">
                        {course.status}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xs font-black text-[#15291b] dark:text-white uppercase tracking-tight group-hover:text-[#13ec5b] transition-colors leading-tight">
                    {course.title}
                  </h4>
                  <p className="text-[9px] font-black text-[#5c7a67] mt-1 uppercase tracking-widest">
                    {course.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sync Logic (Mentor) */}
          <div className="bg-gradient-to-br from-[#15291b] to-[#0a0f0b] rounded-[2.5rem] p-8 text-white relative overflow-hidden border border-[#1e3a27] group shadow-2xl">
            <div className="absolute -top-10 -right-10 size-32 bg-[#13ec5b] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative z-10">
              <h4 className="font-black text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#13ec5b] text-base">
                  rocket_launch
                </span>
                Sync with Architect
              </h4>
              <p className="text-[11px] text-[#a0c4ab] font-medium leading-relaxed mb-6">
                Connect with an industry lead to discuss the deployment of your
                new skills into production environments.
              </p>
              <button className="w-full py-4 bg-[#13ec5b] text-[#15291b] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition-all">
                Book Connection
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
