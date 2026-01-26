"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface AcademicData {
  educationLevel: string;
  institution: string;
  fieldOfStudy: string;
  graduationYear: string;
}

export default function Step2AcademicPage() {
  const router = useRouter();

  const [academicData, setAcademicData] = useState<AcademicData>({
    educationLevel: "Undergraduate",
    institution: "",
    fieldOfStudy: "",
    graduationYear: "",
  });

  const handleUpdate = (updates: Partial<AcademicData>) => {
    setAcademicData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    console.log("Saving academic data:", academicData);
    router.push("/learning/users/student/registration/profile-registration/preferences");
  };

  const handleBack = () => {
    router.push(
      "/learning/users/student/registration/profile-registration/profile-info",
    );
  };

  const steps = [
    { label: "Profile Info", status: "completed", icon: "check_circle" },
    { label: "Academic", status: "active", icon: "radio_button_checked" },
    { label: "Preferences", status: "pending", icon: "circle" },
    { label: "Complete", status: "pending", icon: "circle" },
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
                    step.status === "active" || step.status === "completed"
                      ? "text-primary font-bold"
                      : "text-earth-sage/30 dark:text-[#a0c4ab]/30"
                  }`}
                >
                  {step.icon}
                </span>

                {/* 
                   Responsiveness Logic: 
                   - Always show the label if it's the ACTIVE step.
                   - Hide labels for inactive steps on mobile.
                   - Show all labels on small screens and up.
                */}
                <p
                  className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${
                    step.status === "active"
                      ? "text-primary block"
                      : step.status === "completed"
                        ? "text-primary hidden sm:block"
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
              Academic Background
            </h1>
            <p className="text-earth-sage dark:text-[#a0c4ab] text-sm sm:text-base max-w-lg mx-auto">
              Help our AI customize your learning path by telling us about your
              current education status.
            </p>
          </div>

          {/* Education Level Selection (Visual Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {["High School", "Undergraduate", "Graduate"].map((level) => (
              <div
                key={level}
                onClick={() => handleUpdate({ educationLevel: level })}
                className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-3 transition-all ${
                  academicData.educationLevel === level
                    ? "border-primary bg-primary/5"
                    : "border-[#e7f3eb] dark:border-[#263d2e] hover:border-primary/30 bg-white dark:bg-[#1a2e21]"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${
                    academicData.educationLevel === level
                      ? "text-primary"
                      : "text-earth-sage"
                  }`}
                >
                  {level === "High School"
                    ? "backpack"
                    : level === "Undergraduate"
                      ? "school"
                      : "history_edu"}
                </span>
                <span
                  className={`font-bold text-sm ${
                    academicData.educationLevel === level
                      ? "text-primary"
                      : "text-earth-dark dark:text-white"
                  }`}
                >
                  {level}
                </span>
              </div>
            ))}
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 sm:pt-6">
            {/* Institution */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-bold text-earth-dark dark:text-white">
                School / University Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-earth-sage">
                  account_balance
                </span>
                <input
                  value={academicData.institution}
                  onChange={(e) =>
                    handleUpdate({ institution: e.target.value })
                  }
                  placeholder="e.g. Harvard University"
                  className="w-full h-12 pl-12 pr-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white text-sm placeholder-earth-sage/50 text-earth-dark"
                />
              </div>
            </div>

            {/* Field of Study */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-earth-dark dark:text-white">
                Major / Field of Study
              </label>
              <input
                value={academicData.fieldOfStudy}
                onChange={(e) => handleUpdate({ fieldOfStudy: e.target.value })}
                placeholder="e.g. Computer Science"
                className="w-full h-12 px-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white text-sm placeholder-earth-sage/50 text-earth-dark"
              />
            </div>

            {/* Graduation Year */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-earth-dark dark:text-white">
                Graduation Year (Expected)
              </label>
              <input
                type="number"
                min="1990"
                max="2030"
                value={academicData.graduationYear}
                onChange={(e) =>
                  handleUpdate({ graduationYear: e.target.value })
                }
                placeholder="2025"
                className="w-full h-12 px-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white text-sm placeholder-earth-sage/50 text-earth-dark"
              />
            </div>
          </div>

          {/* AI Insight Box */}
          <div className="mt-8 flex items-start gap-3 bg-[#e7f3eb] dark:bg-[#1a2e21] p-4 rounded-xl border border-primary/10">
            <span className="material-symbols-outlined text-primary shrink-0">
              insights
            </span>
            <div>
              <p className="text-sm font-bold text-earth-dark dark:text-white">
                AI Recommendation
              </p>
              <p className="text-xs text-earth-sage mt-1 leading-relaxed">
                Based on your major in{" "}
                <strong>{academicData.fieldOfStudy || "..."}</strong>, we will
                curate courses featuring Python, Data Structures, and Machine
                Learning algorithms.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Action Footer */}
      <footer className="bg-white dark:bg-[#15291b] border-t border-[#e7f3eb] dark:border-[#1a2e21] px-4 sm:px-6 lg:px-10 py-4 sm:py-6 sticky bottom-0 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20 font-display">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-earth-sage font-bold hover:text-earth-dark dark:hover:text-white transition-colors px-3 sm:px-4 py-2 rounded-lg hover:bg-[#f6f8f6] dark:hover:bg-[#1a2e21] text-sm"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            Back
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-2 h-12 px-6 sm:px-8 rounded-lg bg-primary text-earth-dark font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:scale-[0.99] transition-all text-sm"
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
