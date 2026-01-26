"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface UserData {
  fullName: string;
  email: string;
  dob: string;
  phone: string;
}

export default function Step1ProfilePage() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>({
    fullName: "John Doe",
    email: "john.doe@example.com",
    dob: "",
    phone: "",
  });

  const handleUpdate = (updates: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    console.log("Saving profile data:", userData);
    router.push("/learning/users/student/registration/profile-registration/academic");
  };

  const steps = [
    { label: "Profile Info", active: true, icon: "radio_button_checked" },
    { label: "Academic", active: false, icon: "circle" },
    { label: "Preferences", active: false, icon: "circle" },
    { label: "Complete", active: false, icon: "circle" },
  ];

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-6 md:py-10 px-4 w-full bg-background-light dark:bg-background-dark font-display">
        <div className="max-w-[1000px] w-full bg-white dark:bg-[#15291b] rounded-xl shadow-sm border border-[#e7f3eb] dark:border-[#1a2e21] p-6 md:p-8">
          {/* Responsive Progress Bar */}
          <div className="flex items-start justify-between w-full mb-8 sm:mb-12 relative px-2">
            {/* Connector Line (Visual only) */}
            <div className="absolute top-3 left-4 right-4 h-0.5 bg-[#e7f3eb] dark:bg-[#263d2e] -z-10 hidden sm:block" />

            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1.5 z-10 bg-white dark:bg-[#15291b] px-1"
              >
                <span
                  className={`material-symbols-outlined text-2xl ${
                    step.active
                      ? "text-primary font-bold"
                      : "text-earth-sage/30 dark:text-[#a0c4ab]/30"
                  }`}
                >
                  {step.icon}
                </span>
                {/* 
                   Responsiveness Logic: 
                   - Always show the label if it's the ACTIVE step.
                   - Hide labels for inactive steps on mobile (hidden).
                   - Show all labels on small screens and up (sm:block).
                */}
                <p
                  className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${
                    step.active
                      ? "text-primary block"
                      : "text-earth-sage dark:text-[#a0c4ab] hidden sm:block"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          {/* Title Section */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-earth-dark dark:text-white text-2xl sm:text-3xl font-black pb-2">
              Tell us about yourself
            </h1>
            <p className="text-earth-sage dark:text-[#a0c4ab] text-sm sm:text-base max-w-lg mx-auto">
              Choose how you&apos;d like to set up your profile to get started
              with your learning journey.
            </p>
          </div>

          {/* Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* AI Upload Card */}
            <div className="group p-5 sm:p-6 rounded-xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <p className="text-earth-dark dark:text-white text-base sm:text-lg font-bold">
                    Upload CV
                  </p>
                  <p className="text-primary text-xs sm:text-sm font-medium">
                    AI-Powered Parsing
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary bg-white dark:bg-[#1a2e21] rounded-full p-2 shadow-sm">
                  auto_awesome
                </span>
              </div>
              <div className="flex flex-col items-center justify-center py-8 sm:py-10 border-2 border-dashed border-primary/20 rounded-xl bg-white/50 dark:bg-[#1a2e21]/50">
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary mb-3">
                  cloud_upload
                </span>
                <p className="text-earth-dark dark:text-white text-sm font-medium">
                  Drag & drop your CV here
                </p>
                <p className="text-earth-sage dark:text-[#a0c4ab] text-xs mt-1">
                  PDF, DOCX up to 10MB
                </p>
                <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <span className="material-symbols-outlined text-xs animate-pulse text-primary">
                    psychology
                  </span>
                  <span className="text-[10px] font-bold text-primary uppercase">
                    AI Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Manual Entry Card */}
            <div className="group p-5 sm:p-6 rounded-xl border border-[#e7f3eb] dark:border-[#263d2e] hover:border-primary/50 transition-all cursor-pointer bg-[#fcfdfc] dark:bg-[#1a2e21]/30">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <p className="text-earth-dark dark:text-white text-base sm:text-lg font-bold">
                    Fill Manually
                  </p>
                  <p className="text-earth-sage dark:text-[#a0c4ab] text-xs sm:text-sm font-normal">
                    Step-by-step entry
                  </p>
                </div>
                <span className="material-symbols-outlined text-earth-sage group-hover:text-primary transition-colors">
                  edit_note
                </span>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-2 border-b border-[#e7f3eb] dark:border-[#263d2e]"
                  >
                    <div className="w-8 h-8 rounded bg-[#e7f3eb] dark:bg-[#263d2e] flex items-center justify-center">
                      <span className="material-symbols-outlined text-earth-sage text-sm">
                        person
                      </span>
                    </div>
                    <div className="flex-1 h-2 bg-[#e7f3eb] dark:bg-[#263d2e] rounded-full"></div>
                  </div>
                ))}
                <p className="text-primary text-xs font-bold flex items-center gap-1 pt-2">
                  Start Manual Entry{" "}
                  <span className="material-symbols-outlined text-xs">
                    arrow_forward
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#e7f3eb] dark:border-[#263d2e] pt-8 sm:pt-12">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-earth-dark dark:text-white">
                Full Name
              </label>
              <input
                value={userData.fullName}
                onChange={(e) => handleUpdate({ fullName: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white text-sm placeholder-earth-sage/50 text-earth-dark"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-earth-dark dark:text-white">
                Date of Birth
              </label>
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => handleUpdate({ dob: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white text-sm placeholder-earth-sage/50 text-earth-dark"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-earth-dark dark:text-white">
                Phone Number
              </label>
              <input
                value={userData.phone}
                onChange={(e) => handleUpdate({ phone: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white text-sm placeholder-earth-sage/50 text-earth-dark"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-earth-dark dark:text-white">
                Email Address
              </label>
              <input
                value={userData.email}
                readOnly
                className="w-full h-12 px-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-[#fcfdfc] dark:bg-[#1a2e21]/50 text-earth-sage outline-none cursor-not-allowed text-sm"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Action Footer */}
      <footer className="bg-white dark:bg-[#15291b] border-t border-[#e7f3eb] dark:border-[#1a2e21] px-4 sm:px-6 lg:px-10 py-4 sm:py-6 sticky bottom-0 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20 font-display">
        <div className="max-w-[1000px] mx-auto flex items-center justify-end">
          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-earth-dark font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:scale-[0.99] transition-all text-sm w-full sm:w-auto"
          >
            Next Step{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
        </div>
      </footer>
    </>
  );
}
