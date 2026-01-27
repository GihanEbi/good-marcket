"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
});

export default function AdminSignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/admin");
  };

  return (
    <main
      className={`flex min-h-screen font-display antialiased bg-slate-50 text-slate-900 ${manrope.variable}`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* --- Left Side: Colorful Hero Section --- */}
      <div className="hidden lg:flex w-1/2 relative bg-[#0f172a] overflow-hidden items-center justify-center p-12">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"></div>

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #334155 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="relative z-10 w-full max-w-lg">
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              {/* Vibrant Icon Box 1 */}
              <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px] rounded-3xl rotate-12 shadow-2xl shadow-emerald-500/20">
                <div className="bg-slate-900/90 backdrop-blur-xl w-24 h-24 rounded-[23px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-emerald-400">
                    spa
                  </span>
                </div>
              </div>
              {/* Vibrant Icon Box 2 */}
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-[1px] rounded-2xl -rotate-12 shadow-2xl shadow-blue-500/20 mt-12">
                <div className="bg-slate-900/90 backdrop-blur-xl w-16 h-16 rounded-[15px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-blue-400">
                    verified_user
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              {/* Accent Line with Gradient */}
              <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-6"></div>

              <h2 className="text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                Master the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                  Digital Harvest
                </span>
              </h2>
              <p className="text-slate-300/80 text-lg font-medium leading-relaxed mt-4">
                The ultimate command center for your sustainable ecosystem.
                Secure, vibrant, and powerful.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Right Side: Modern Login Form --- */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white relative overflow-hidden">
        {/* Subtle Background Accent for Mobile */}
        <div className="lg:hidden absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600"></div>

        <div className="w-full max-w-md relative z-10">
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-8 group">
              <div className="size-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                <svg
                  className="size-7 text-white"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-800">
                Good Market <span className="text-emerald-500">Admin</span>
              </span>
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-slate-500 mt-2 font-medium">
              Please enter your admin credentials
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleAdminLogin}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                placeholder="admin@goodmarket.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Password
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-500 transition-colors"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-md border-slate-300 text-emerald-500 focus:ring-emerald-500 transition-all"
                />
                <span className="text-sm text-slate-600 font-medium">
                  Keep me logged in
                </span>
              </label>
              <Link
                href="#"
                className="text-sm font-bold text-emerald-600 hover:text-emerald-700 underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full group relative py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:shadow-emerald-200 hover:bg-emerald-600 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Enter Dashboard
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </button>
          </form>

          {/* Footer Card */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-600">
                shield
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                End-to-End Encryption
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Your session is secured with 256-bit SSL encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
