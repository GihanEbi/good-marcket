"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [selectedRole, setSelectedRole] = useState<"farmer" | "vendor">(
    "farmer",
  );

  return (
    // 1. Outer Page Wrapper: Centers the card
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8 bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500">
      {/* 2. The Card Container */}
      <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px] border border-slate-200 dark:border-white/5">
        {/* Left Column: Hero Image (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2940&auto=format&fit=crop")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

          <div className="relative z-10 flex flex-col justify-end p-12 xl:p-16 w-full h-full">
            <div className="mb-auto">
              {/* Optional Top Logo for Desktop Side */}
              <div className="flex items-center gap-2 opacity-50">
                <span className="material-symbols-outlined text-white">
                  eco
                </span>
                <span className="text-white font-bold tracking-widest text-xs uppercase">
                  Good Market
                </span>
              </div>
            </div>

            <div className="mb-8">
              <div className="size-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6">
                <svg
                  className="size-6 text-white"
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
              <h1 className="text-4xl xl:text-5xl font-black text-white leading-[1.1] mb-4 tracking-tight">
                Welcome Back to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Good Market
                </span>
              </h1>
              <p className="text-lg xl:text-xl text-slate-300 max-w-md font-medium leading-relaxed">
                Connecting ethical producers and conscious consumers across the
                world.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-500 text-lg">
                  public
                </span>
                Global Network
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-500 text-lg">
                  verified_user
                </span>
                Secure Portal
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Sign In Form */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16 relative">
          {/* Mobile Header Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="size-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center">
              <svg
                className="size-5 text-white"
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
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              Good Market
            </span>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-black mb-2 text-slate-900 dark:text-white tracking-tight">
                Sign In
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Manage your shop, track impact, and connect.
              </p>
            </div>

            <form className="space-y-5">
              {/* Role Selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block text-center mb-2">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setSelectedRole("farmer")}
                    className={`flex flex-col items-center justify-center gap-2 p-3 border-2 rounded-2xl cursor-pointer transition-all ${
                      selectedRole === "farmer"
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-500"
                        : "border-slate-100 dark:border-white/5 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-2xl ${
                        selectedRole === "farmer"
                          ? "text-emerald-500"
                          : "text-slate-400"
                      }`}
                    >
                      potted_plant
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${
                        selectedRole === "farmer"
                          ? "text-emerald-700 dark:text-emerald-400"
                          : "text-slate-500"
                      }`}
                    >
                      Farmer
                    </span>
                  </div>

                  <div
                    onClick={() => setSelectedRole("vendor")}
                    className={`flex flex-col items-center justify-center gap-2 p-3 border-2 rounded-2xl cursor-pointer transition-all ${
                      selectedRole === "vendor"
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-500"
                        : "border-slate-100 dark:border-white/5 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-2xl ${
                        selectedRole === "vendor"
                          ? "text-emerald-500"
                          : "text-slate-400"
                      }`}
                    >
                      storefront
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${
                        selectedRole === "vendor"
                          ? "text-emerald-700 dark:text-emerald-400"
                          : "text-slate-500"
                      }`}
                    >
                      Vendor
                    </span>
                  </div>
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1"
                    htmlFor="identity"
                  >
                    Email
                  </label>
                  <input
                    id="identity"
                    type="text"
                    required
                    className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all placeholder:text-slate-400 dark:text-white"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label
                      className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Link
                      href="#"
                      className="text-[10px] font-bold text-emerald-500 hover:text-emerald-600 transition-colors uppercase tracking-wider"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      required
                      className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-bold outline-none transition-all placeholder:text-slate-400 dark:text-white"
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
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-black py-4 rounded-xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest mt-2"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-white/10"></div>
                </div>
                <span className="relative bg-white dark:bg-slate-900 px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-xs font-bold text-slate-600 dark:text-slate-300">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="size-4"
                    alt="Google"
                  />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-xs font-bold text-slate-600 dark:text-slate-300">
                  <img
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    className="size-4"
                    alt="Facebook"
                  />
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-8 text-center border-t border-slate-100 dark:border-white/5 pt-6">
              <p className="text-xs text-slate-500 font-medium">
                New to Good Market?
                <Link
                  href="/marcketplace/auth/signup"
                  className="text-emerald-500 font-black hover:underline hover:text-emerald-600 ml-1 transition-colors uppercase tracking-wide text-[10px]"
                >
                  Join Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
