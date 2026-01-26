"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [role, setRole] = useState<"student" | "instructor">("student");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "instructor") {
      router.push("/learning/users/instructor/portal/dashboard");
      return;
    }
    router.push("/learning/users/student/portal/dashboard");
  };

  return (
    // 1. Outer Wrapper: Centers the card on the screen
    <div className="min-h-screen w-full flex items-center justify-center bg-background-light dark:bg-background-dark p-4 lg:p-8 font-display">
      {/* 2. The Card */}
      <div className="w-full max-w-6xl bg-white dark:bg-[#15291b] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[650px] border border-[#e7f3eb] dark:border-[#1a2e21]">
        {/* --- Left Side: Visual/Hero Section --- */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-center items-center text-white p-12 bg-[#0d1b12]">
          {/* Background Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b12] to-[#1a2e21] opacity-90"></div>

          {/* Floating Background Icons */}
          <div className="absolute top-10 left-10 opacity-10 transform -rotate-12 select-none pointer-events-none text-earth-sage">
            <span className="material-symbols-outlined text-[80px]">
              school
            </span>
          </div>
          <div className="absolute bottom-20 right-10 opacity-10 transform rotate-12 select-none pointer-events-none text-earth-sage">
            <span className="material-symbols-outlined text-[100px]">
              psychology
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-md">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-primary/20 p-2.5 rounded-lg text-primary shadow-lg border border-primary/20">
                <span className="material-symbols-outlined text-3xl">
                  auto_stories
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                Good Market LMS
              </h1>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-[#f6f8f6]">
              Empower your learning journey naturally.
            </h2>
            <p className="text-lg text-[#a0c4ab]">
              Join thousands of students and instructors in the most sustainable
              learning ecosystem.
            </p>

            {/* Features Box */}
            <div className="mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 min-w-[2.5rem] rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-sm">
                    verified
                  </span>
                </div>
                <div>
                  <p className="font-bold text-white">Smart Insights</p>
                  <p className="text-[#a0c4ab] text-xs">
                    Personalized paths for every learner.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 min-w-[2.5rem] rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-sm">hub</span>
                </div>
                <div>
                  <p className="font-bold text-white">Instructor Hub</p>
                  <p className="text-[#a0c4ab] text-xs">
                    Tools to manage and scale your impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Side: Login Form --- */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 md:px-12 bg-white dark:bg-[#15291b]">
          <div className="w-full max-w-[440px]">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl font-black text-earth-dark dark:text-white mb-2 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-earth-sage">
                Please enter your details to sign in.
              </p>
            </div>

            {/* Role Toggle */}
            <div className="mb-8 border-b border-[#e7f3eb] dark:border-[#263d2e]">
              <div className="flex w-full">
                <button
                  onClick={() => setRole("student")}
                  className={`flex-1 border-b-[3px] pb-3 font-bold text-sm transition-all ${
                    role === "student"
                      ? "border-primary text-earth-dark dark:text-white"
                      : "border-transparent text-earth-sage hover:text-earth-dark dark:hover:text-[#a0c4ab]"
                  }`}
                >
                  Student
                </button>
                <button
                  onClick={() => setRole("instructor")}
                  className={`flex-1 border-b-[3px] pb-3 font-bold text-sm transition-all ${
                    role === "instructor"
                      ? "border-primary text-earth-dark dark:text-white"
                      : "border-transparent text-earth-sage hover:text-earth-dark dark:hover:text-[#a0c4ab]"
                  }`}
                >
                  Instructor
                </button>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div className="flex flex-col gap-2">
                <label className="text-earth-dark dark:text-white text-sm font-bold">
                  Email Address
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-[#fcfdfc] dark:bg-[#1a2e21] text-earth-dark dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-earth-sage/50"
                  placeholder="name@goodmarket.org"
                  type="email"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-earth-dark dark:text-white text-sm font-bold">
                    Password
                  </label>
                  <Link
                    href="/learning/auth/forgot-password"
                    className="text-primary text-sm font-bold hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 pr-12 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-[#fcfdfc] dark:bg-[#1a2e21] text-earth-dark dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-earth-sage/50"
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-earth-sage cursor-pointer hover:text-earth-dark dark:hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 py-1">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#e7f3eb] dark:border-[#263d2e] text-primary focus:ring-primary bg-white dark:bg-[#1a2e21]"
                />
                <label
                  className="text-sm text-earth-sage cursor-pointer select-none"
                  htmlFor="remember"
                >
                  Remember me for 30 days
                </label>
              </div>

              <button
                className="w-full h-12 rounded-lg bg-primary text-earth-dark font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-[#0fd650] active:scale-[0.99] transition-all"
                type="submit"
              >
                Sign In
              </button>

              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-[#e7f3eb] dark:border-[#263d2e]"></div>
                <span className="mx-4 text-earth-sage text-sm font-medium">
                  or continue with
                </span>
                <div className="flex-grow border-t border-[#e7f3eb] dark:border-[#263d2e]"></div>
              </div>

              <button
                type="button"
                className="w-full h-12 rounded-lg border border-[#e7f3eb] dark:border-[#263d2e] bg-white dark:bg-[#1a2e21] text-earth-dark dark:text-white font-bold text-sm hover:bg-[#f6f8f6] dark:hover:bg-[#1f3526] transition-all flex items-center justify-center gap-3"
              >
                <img
                  className="w-5 h-5"
                  src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                  alt="Google"
                />
                Sign in with Google
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-earth-sage font-medium">
              New to Good Market LMS?{" "}
              <Link
                href="/learning/auth/signup"
                className="text-earth-dark dark:text-white font-bold hover:text-primary transition-colors underline decoration-2 decoration-primary/30 hover:decoration-primary"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
