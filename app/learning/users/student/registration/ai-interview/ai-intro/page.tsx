"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function AIIntroPage() {
  const router = useRouter();

  const handleStart = () => {
    // Navigate to the actual chat/interview page
    router.push("/learning/users/student/registration/ai-interview/interview");
  };

  const handleSkip = () => {
    // Navigate to dashboard
    router.push("/learning/portal/users/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-earth-dark dark:text-white flex flex-col font-display transition-colors duration-200">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-6">
        <div className="max-w-[800px] w-full flex flex-col items-center gap-12 text-center">
          {/* Hero Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="size-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-white dark:border-[#1a2e21] shadow-xl p-2">
                <div className="size-full rounded-full bg-white dark:bg-[#15291b] flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-6xl">
                    smart_toy
                  </span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-white dark:bg-[#1a2e21] px-3 py-1 rounded-full shadow-sm border border-[#e7f3eb] dark:border-[#263d2e] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-earth-sage">
                  Online
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-earth-dark dark:text-white">
                Meet Your AI Learning Partner
              </h1>
              <p className="text-earth-sage text-lg max-w-xl mx-auto leading-relaxed font-medium">
                Let&apos;s personalize your learning experience to match your
                goals, schedule, and preferred style.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
            {[
              {
                label: "Conversation",
                icon: "chat_bubble",
                desc: "A quick chat about your academic background and goals.",
                colorClass: "text-primary bg-primary/10",
              },
              {
                label: "Analysis",
                icon: "psychology",
                desc: "AI identifies your learning gaps and strengths instantly.",
                colorClass:
                  "text-earth-dark dark:text-white bg-earth-sage/20 dark:bg-earth-sage/10",
              },
              {
                label: "Personal Plan",
                icon: "auto_awesome",
                desc: "Receive a tailor-made roadmap designed for your success.",
                colorClass:
                  "text-[#d97706] dark:text-[#fbbf24] bg-[#fef3c7] dark:bg-[#451a03]/30",
              },
            ].map((step) => (
              <div
                key={step.label}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white dark:bg-[#15291b] border border-[#e7f3eb] dark:border-[#1a2e21] shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div
                  className={`size-14 rounded-xl flex items-center justify-center ${step.colorClass}`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {step.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-earth-dark dark:text-white">
                    {step.label}
                  </h3>
                  <p className="text-sm text-earth-sage leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col items-center gap-6 pt-4">
            <button
              onClick={handleStart}
              className="w-full max-w-[340px] flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-primary text-earth-dark text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              Start the Interview
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>

            <button
              onClick={handleSkip}
              className="text-earth-sage font-bold hover:text-earth-dark dark:hover:text-white transition-colors text-sm"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 flex justify-center text-center bg-background-light dark:bg-background-dark">
        <p className="text-xs text-earth-sage max-w-md leading-relaxed">
          The interview takes about 3-5 minutes. Your privacy is protected and
          data is used only for personalization.
        </p>
      </footer>
    </div>
  );
}
