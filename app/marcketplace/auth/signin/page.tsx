"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [selectedRole, setSelectedRole] = useState<"farmer" | "vendor">(
    "farmer",
  );

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500">
      {/* Left Column: Hero Image (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay transition-opacity duration-700 hover:scale-105 transform"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2940&auto=format&fit=crop")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-end p-20 w-full">
          <div className="mb-8">
            <div className="size-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
              <svg
                className="size-7 text-white"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h1 className="text-5xl font-black text-white leading-[1.1] mb-4 tracking-tight">
              Welcome Back to the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Good Market
              </span>{" "}
              Community
            </h1>
            <p className="text-xl text-slate-300 max-w-lg font-medium">
              Connecting ethical producers, conscious consumers, and circular
              economy leaders across the world.
            </p>
          </div>

          <div className="flex items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-500">
                public
              </span>
              Global Network
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-500">
                verified_user
              </span>
              Secure Portal
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Sign In Form (Centered) */}
      <div className="flex flex-col lg:w-1/2 p-6 md:p-12 lg:p-24 justify-center items-center bg-white dark:bg-[#020617] relative">
        {/* Mobile Header */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center">
            <svg className="size-5 text-white" fill="none" viewBox="0 0 48 48">
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
            Good Market
          </span>
        </div>

        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-2 text-slate-900 dark:text-white tracking-tight">
              Sign In
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Manage your shop, track impact, and connect with the community.
            </p>
          </div>

          <form className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                Sign in as
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setSelectedRole("farmer")}
                  className={`flex flex-col items-center justify-center gap-2 p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                    selectedRole === "farmer"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-500"
                      : "border-slate-100 dark:border-white/10 hover:border-emerald-500/50"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${selectedRole === "farmer" ? "text-emerald-500" : "text-slate-400"}`}
                  >
                    potted_plant
                  </span>
                  <span
                    className={`text-sm font-bold ${selectedRole === "farmer" ? "text-emerald-700 dark:text-emerald-400" : "text-slate-500"}`}
                  >
                    Farmer
                  </span>
                </div>

                <div
                  onClick={() => setSelectedRole("vendor")}
                  className={`flex flex-col items-center justify-center gap-2 p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                    selectedRole === "vendor"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-500"
                      : "border-slate-100 dark:border-white/10 hover:border-emerald-500/50"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${selectedRole === "vendor" ? "text-emerald-500" : "text-slate-400"}`}
                  >
                    storefront
                  </span>
                  <span
                    className={`text-sm font-bold ${selectedRole === "vendor" ? "text-emerald-700 dark:text-emerald-400" : "text-slate-500"}`}
                  >
                    Vendor
                  </span>
                </div>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-2">
              <label
                className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]"
                htmlFor="identity"
              >
                Email or Phone Number
              </label>
              <input
                id="identity"
                type="text"
                required
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all placeholder:text-slate-400 dark:text-white"
                placeholder="e.g. name@example.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-bold text-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all placeholder:text-slate-400 dark:text-white"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    visibility
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="peer size-5 cursor-pointer appearance-none rounded-md border border-slate-300 dark:border-slate-600 checked:bg-emerald-500 checked:border-emerald-500 transition-all"
                />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <label
                htmlFor="remember"
                className="text-sm font-bold text-slate-500 cursor-pointer select-none"
              >
                Stay signed in for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-black py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              Sign In
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-white/10"></div>
              </div>
              <span className="relative bg-white dark:bg-[#020617] px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-sm font-bold text-slate-700 dark:text-slate-300">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="size-5"
                  alt="Google"
                />
                Google
              </button>
              <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-sm font-bold text-slate-700 dark:text-slate-300">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  className="size-5"
                  alt="Facebook"
                />
                Facebook
              </button>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500 font-medium">
              New to Good Market?
              <Link
                href="#"
                className="text-emerald-500 font-bold hover:underline hover:text-emerald-600 ml-1 transition-colors"
              >
                Join as a Vendor or Farmer
              </Link>
            </p>
          </div>

          <footer className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-widest">
            <Link href="#" className="hover:text-emerald-500 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-emerald-500 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-emerald-500 transition-colors">
              Help
            </Link>
            <span>© 2024 Good Market</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
