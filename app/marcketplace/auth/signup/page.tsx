"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [role, setRole] = useState<"student" | "instructor">("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add your registration API logic here (e.g., create user in DB)
    console.log(`Registering as ${role}`);

    // Conditional Routing based on Role
    if (role === "student") {
      router.push(
        "/learning/users/student/registration/profile-registration/profile-info",
      );
    } else {
      router.push(
        "/learning/users/instructor/registration/profile-registration/personal_info",
      );
    }
  };

  return (
    // 1. Outer Wrapper: Full screen background, centers the content
    <div className="min-h-screen w-full flex items-center justify-center bg-background-light dark:bg-background-dark p-4 lg:p-8 font-display">
      {/* 2. The Card: Fixed max-width, rounded corners, shadow */}
      <div className="w-full max-w-6xl bg-white dark:bg-[#15291b] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-[#e7f3eb] dark:border-[#1a2e21]">
        {/* --- Left Side: Hero Section --- */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center px-12 py-12 text-white overflow-hidden bg-[#0d1b12]">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b12] to-[#1a2e21] opacity-90"></div>

          {/* Floating Icons */}
          <span className="material-symbols-outlined absolute text-[80px] text-earth-sage/10 top-10 left-10 select-none">
            school
          </span>
          <span className="material-symbols-outlined absolute text-[100px] text-earth-sage/10 bottom-10 right-10 select-none">
            menu_book
          </span>
          <span className="material-symbols-outlined absolute text-[60px] text-earth-sage/10 top-1/2 right-10 select-none">
            lightbulb
          </span>

          <div className="relative z-10">
            {/* Logo area */}
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-primary/20 rounded-lg p-2 text-primary shadow-lg border border-primary/20">
                <span className="material-symbols-outlined text-3xl">
                  auto_stories
                </span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Good Market LMS
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-[#f6f8f6]">
              Master your future with sustainable learning
            </h1>

            <p className="text-lg text-[#a0c4ab] max-w-md mb-10">
              Join thousands of students and instructors in the most
              eco-conscious learning community. Accelerate your impact with
              personalized paths.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="size-10 rounded-full border-2 border-primary bg-[#e7f3eb] overflow-hidden relative"
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=User+${i}&background=random`}
                      alt="user"
                      className="object-cover w-full h-full opacity-80"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-[#a0c4ab]">
                Join 50k+ active learners
              </span>
            </div>
          </div>
        </div>

        {/* --- Right Side: Form Section --- */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 md:px-16 xl:px-20 bg-white dark:bg-[#15291b]">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-earth-dark dark:text-white text-3xl font-black tracking-tight">
              Create an Account
            </h2>
            <p className="text-earth-sage">
              Already have an account?{" "}
              <Link
                href="/learning/auth/signin"
                className="text-earth-dark dark:text-white font-bold hover:text-primary transition-colors underline decoration-2 decoration-primary/30 hover:decoration-primary"
              >
                Log in
              </Link>
            </p>
          </div>

          {/* Role Selection */}
          <div className="mb-8">
            <h3 className="text-earth-dark dark:text-white text-sm font-bold uppercase tracking-wider mb-4">
              I am a...
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => setRole("student")}
                type="button"
                className={`flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  role === "student"
                    ? "border-primary bg-primary/10"
                    : "border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] hover:border-primary/50"
                }`}
              >
                <span
                  className={`material-symbols-outlined ${role === "student" ? "text-primary" : "text-earth-sage"}`}
                >
                  person
                </span>
                <span className="text-sm font-bold text-earth-dark dark:text-white">
                  Student
                </span>
              </button>

              <button
                onClick={() => setRole("instructor")}
                type="button"
                className={`flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  role === "instructor"
                    ? "border-primary bg-primary/10"
                    : "border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] hover:border-primary/50"
                }`}
              >
                <span
                  className={`material-symbols-outlined ${role === "instructor" ? "text-primary" : "text-earth-sage"}`}
                >
                  co_present
                </span>
                <span className="text-sm font-bold text-earth-dark dark:text-white">
                  Instructor
                </span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-earth-dark dark:text-white">
                Full Name
              </label>
              <input
                className="w-full rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-[#fcfdfc] dark:bg-[#1a2e21] px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-earth-dark dark:text-white transition-all placeholder-earth-sage/50"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-earth-dark dark:text-white">
                Email Address
              </label>
              <input
                className="w-full rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-[#fcfdfc] dark:bg-[#1a2e21] px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-earth-dark dark:text-white transition-all placeholder-earth-sage/50"
                placeholder="example@goodmarket.org"
                type="email"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-bold text-earth-dark dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-[#fcfdfc] dark:bg-[#1a2e21] px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-earth-dark dark:text-white transition-all placeholder-earth-sage/50"
                  placeholder="Create a strong password"
                  type="password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    visibility
                  </span>
                </button>
              </div>
              {/* Strength Indicator */}
              <div className="mt-2 flex gap-1 h-1.5 w-full">
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-[#e7f3eb] dark:bg-[#263d2e] rounded-full"></div>
              </div>
              <p className="text-[11px] text-earth-sage font-medium">
                Strength: <span className="text-primary font-bold">Strong</span>
              </p>
            </div>

            <button
              className="w-full bg-primary text-earth-dark rounded-lg px-6 py-4 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-[#0fd650] hover:scale-[1.01] active:scale-[0.99] transition-all mt-2"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <div className="mt-auto pt-8 text-center text-earth-sage text-xs font-medium">
            © 2024 Good Market LMS. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
