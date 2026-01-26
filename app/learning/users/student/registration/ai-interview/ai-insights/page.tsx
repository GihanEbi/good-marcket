"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// --- Types ---
interface SkillBreakdown {
  logic: number;
  creative: number;
  collab: number;
  technical: number;
  focus: number;
}

interface Interest {
  label: string;
  percentage: number;
}

interface ProfileData {
  readinessScore: number;
  skillBreakdown: SkillBreakdown;
  interestsRanked: Interest[];
  recommendationSummary: string;
  recommendedCourseIds: string[];
}

// --- Mock Service ---
const generateLearningProfile = async (): Promise<ProfileData> => {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    readinessScore: 94,
    skillBreakdown: {
      logic: 85,
      creative: 70,
      collab: 65,
      technical: 90,
      focus: 80,
    },
    interestsRanked: [
      { label: "Artificial Intelligence", percentage: 92 },
      { label: "User Experience Design", percentage: 85 },
      { label: "Data Visualization", percentage: 78 },
    ],
    recommendationSummary:
      "Based on your high logical reasoning and interest in AI, we recommend focusing on Machine Learning Fundamentals. Your visual learning style suggests you'll benefit most from our interactive sandbox environments.",
    recommendedCourseIds: ["ml-basics", "data-viz-adv"],
  };
};

export default function AIInsightsPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await generateLearningProfile();
        setProfile(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleDashboard = () => {
    router.push("/learning/users/student/portal/dashboard");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark font-display">
        <div className="flex flex-col items-center gap-6">
          <div className="size-20 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <h2 className="text-2xl font-bold animate-pulse text-earth-dark dark:text-white">
            Analyzing your interview...
          </h2>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-earth-dark dark:text-white flex flex-col font-display transition-colors duration-200">
      {/* --- Top Action Bar (Minimal, No Logo Header) --- */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            auto_awesome
          </span>
          <span className="text-sm font-bold text-earth-sage uppercase tracking-wider">
            AI Insight Report
          </span>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-sm font-semibold text-earth-sage hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">share</span>{" "}
            Share
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold text-earth-sage hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>{" "}
            PDF
          </button>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 space-y-12">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                ASSESSMENT COMPLETE
              </span>
              <span className="text-earth-sage text-sm">
                • {new Date().toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-earth-dark dark:text-white">
              Your AI Learning Profile
            </h1>
            <p className="mt-2 text-earth-sage dark:text-[#a0c4ab] text-lg max-w-2xl">
              We&apos;ve analyzed your interview responses and academic history.
              Here is your personalized learning roadmap.
            </p>
          </div>

          <div className="bg-white dark:bg-[#15291b] p-4 rounded-2xl border border-[#e7f3eb] dark:border-[#1a2e21] shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                psychology
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-earth-sage uppercase tracking-wider">
                AI Readiness Score
              </p>
              <p className="text-2xl font-bold text-primary">
                {profile.readinessScore}{" "}
                <span className="text-sm text-earth-sage font-normal">
                  / 100
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Radar Chart Section */}
          <div className="lg:col-span-5 bg-white dark:bg-[#15291b] p-8 rounded-3xl border border-[#e7f3eb] dark:border-[#1a2e21] shadow-sm">
            <h3 className="text-xl font-bold mb-8 text-earth-dark dark:text-white">
              Skill Proficiency
            </h3>
            <div className="aspect-square relative flex items-center justify-center border border-[#e7f3eb] dark:border-[#1a2e21] rounded-full p-10">
              {/* SVG Radar Chart */}
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-[#e7f3eb] dark:text-[#263d2e]"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-[#e7f3eb] dark:text-[#263d2e]"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-[#e7f3eb] dark:text-[#263d2e]"
                  strokeDasharray="4 4"
                />
                <polygon
                  points={`
                    100,${100 - profile.skillBreakdown.logic * 0.8}
                    ${100 + profile.skillBreakdown.creative * 0.8},${100 - profile.skillBreakdown.creative * 0.3}
                    ${100 + profile.skillBreakdown.collab * 0.5},${100 + profile.skillBreakdown.collab * 0.7}
                    ${100 - profile.skillBreakdown.technical * 0.5},${100 + profile.skillBreakdown.technical * 0.7}
                    ${100 - profile.skillBreakdown.focus * 0.8},${100 - profile.skillBreakdown.focus * 0.3}
                  `}
                  fill="rgba(19, 236, 91, 0.2)"
                  stroke="#13ec5b"
                  strokeWidth="2"
                />
              </svg>

              {/* Labels */}
              <div className="absolute top-4 font-bold text-[10px] uppercase text-earth-sage">
                Logic
              </div>
              <div className="absolute right-4 top-1/3 font-bold text-[10px] uppercase text-earth-sage">
                Creative
              </div>
              <div className="absolute bottom-10 right-10 font-bold text-[10px] uppercase text-earth-sage">
                Collab
              </div>
              <div className="absolute bottom-10 left-10 font-bold text-[10px] uppercase text-earth-sage">
                Technical
              </div>
              <div className="absolute left-4 top-1/3 font-bold text-[10px] uppercase text-earth-sage">
                Focus
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold text-earth-dark dark:text-white">
                  Current Level
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full border border-primary/40"></span>
                <span className="text-xs font-semibold text-earth-dark dark:text-white">
                  Global Avg
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interests & AI Note */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-[#15291b] p-8 rounded-3xl border border-[#e7f3eb] dark:border-[#1a2e21] shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-earth-dark dark:text-white">
                Learning Interests
              </h3>
              <div className="space-y-6">
                {profile.interestsRanked.map((interest) => (
                  <div key={interest.label} className="space-y-2">
                    <div className="flex justify-between text-sm font-semibold text-earth-dark dark:text-white">
                      <span>{interest.label}</span>
                      <span className="text-primary">
                        {interest.percentage}%
                      </span>
                    </div>
                    <div className="h-3 bg-[#e7f3eb] dark:bg-[#263d2e] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000"
                        style={{ width: `${interest.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Summary Box */}
            <div className="bg-gradient-to-br from-primary to-earth-sage p-[1px] rounded-3xl">
              <div className="bg-white dark:bg-[#15291b] rounded-[calc(1.5rem-1px)] p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="size-20 rounded-2xl bg-gradient-to-br from-primary to-earth-sage flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-white text-4xl">
                    auto_awesome
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-earth-dark dark:text-white">
                    AI Recommendation
                  </h4>
                  <p className="text-earth-sage text-sm leading-relaxed">
                    {profile.recommendationSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Courses */}
        <section className="mt-16 pb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-earth-dark dark:text-white">
              Recommended Courses
            </h2>
            <div className="flex gap-2">
              <button className="size-10 rounded-full border border-[#e7f3eb] dark:border-[#263d2e] flex items-center justify-center hover:bg-[#e7f3eb] dark:hover:bg-[#1a2e21] text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-10 rounded-full border border-[#e7f3eb] dark:border-[#263d2e] flex items-center justify-center hover:bg-[#e7f3eb] dark:hover:bg-[#1a2e21] text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#15291b] rounded-3xl border border-[#e7f3eb] dark:border-[#1a2e21] shadow-sm overflow-hidden group hover:border-primary/30 transition-all"
              >
                <div className="h-44 bg-[#e7f3eb] dark:bg-[#1a2e21] relative overflow-hidden">
                  {/* Using UI Avatars for placeholder images */}
                  <img
                    src={`https://ui-avatars.com/api/?name=Course+${i}&background=random&size=400`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="course"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur rounded-full text-[10px] font-bold text-primary">
                    9{i}% AI Match
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase text-earth-sage mb-2">
                    Intermediate • 24 Hours
                  </p>
                  <h4 className="font-bold mb-4 line-clamp-1 text-earth-dark dark:text-white">
                    Creative Course Title {i}
                  </h4>
                  <button className="w-full py-2 bg-earth-dark dark:bg-white text-white dark:text-earth-dark rounded-xl font-bold hover:bg-primary dark:hover:bg-primary dark:hover:text-earth-dark transition-all shadow-md hover:shadow-lg">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Bottom Action Bar */}
      <footer className="fixed bottom-0 w-full bg-white/80 dark:bg-[#15291b]/80 backdrop-blur-md border-t border-[#e7f3eb] dark:border-[#1a2e21] px-8 py-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm text-earth-sage font-medium hidden md:block">
            This report is dynamic and updates as you complete lessons.
          </p>
          <div className="flex gap-4 w-full md:w-auto">
            <button
              onClick={handleDashboard}
              className="flex-1 md:flex-none px-8 py-3 rounded-full border border-[#e7f3eb] dark:border-[#263d2e] text-sm font-bold text-earth-dark dark:text-white hover:bg-[#e7f3eb] dark:hover:bg-[#1a2e21] transition-colors"
            >
              Go to Dashboard
            </button>
            <button
              onClick={handleDashboard}
              className="flex-1 md:flex-none px-10 py-3 rounded-full bg-primary text-earth-dark text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Roadmap
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
