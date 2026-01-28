"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function JoinMovementPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"farmer" | "vendor">(
    "farmer",
  );
  const handleSubmit = () => {
    // Conditional Routing based on Role
    if (selectedRole === "vendor") {
      router.push(
        "/marcketplace/vendor/registration/basic-info",
      );
    }
  };

  return (
    // 1. Outer Page Wrapper: Centers the card
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8 bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white transition-colors duration-500">
      {/* 2. The Card Container */}
      <div className="w-full max-w-7xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[750px] border border-slate-200 dark:border-white/5">
        {/* Left Column: Hero Image (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden bg-slate-900">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

          <div className="relative z-10 flex flex-col justify-end p-12 xl:p-16 w-full h-full">
            <div className="mb-auto">
              <div className="flex items-center gap-2 opacity-50">
                <span className="material-symbols-outlined text-white text-xl">
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
              <h1 className="text-4xl xl:text-5xl font-black text-white leading-[1.1] mb-4 tracking-tight">
                Join the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Good Market
                </span>{" "}
                Movement
              </h1>
              <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-sm">
                Start your journey towards a more sustainable and ethical future
                today.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  <span className="material-symbols-outlined text-sm font-bold block">
                    public
                  </span>
                </div>
                Global Impact
              </span>
              <span className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  <span className="material-symbols-outlined text-sm font-bold block">
                    volunteer_activism
                  </span>
                </div>
                Community Driven
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Join Form */}
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

          <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black mb-3 text-slate-900 dark:text-white tracking-tight">
                Create Account
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md mx-auto">
                Select how you&apos;d like to contribute to the ethical
                marketplace ecosystem.
              </p>
            </div>

            {/* Selection Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Farmer Option */}
              <div
                onClick={() => setSelectedRole("farmer")}
                className={`p-6 md:p-8 rounded-[2rem] border-2 cursor-pointer transition-all relative overflow-hidden group ${
                  selectedRole === "farmer"
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-500"
                    : "border-slate-200 dark:border-white/10 hover:border-emerald-500/50 bg-white dark:bg-slate-900/50"
                }`}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`size-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                      selectedRole === "farmer"
                        ? "bg-emerald-500 text-white shadow-xl shadow-emerald-500/30"
                        : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <span className="material-symbols-outlined text-4xl">
                      potted_plant
                    </span>
                  </div>
                  <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">
                    Join as a Farmer
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    For producers focusing on natural agriculture and
                    regenerative farming.
                  </p>
                  <ul className="space-y-2 text-left w-full pl-2">
                    {[
                      "Traceability Tools",
                      "Soil Health Resources",
                      "Direct Sales",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-xs font-bold"
                      >
                        <span className="material-symbols-outlined text-emerald-500 text-sm mt-0.5">
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedRole === "farmer" && (
                  <div className="absolute top-5 right-5 text-emerald-500 animate-in fade-in zoom-in duration-300">
                    <span className="material-symbols-outlined text-2xl">
                      verified
                    </span>
                  </div>
                )}
              </div>

              {/* Vendor Option */}
              <div
                onClick={() => setSelectedRole("vendor")}
                className={`p-6 md:p-8 rounded-[2rem] border-2 cursor-pointer transition-all relative overflow-hidden group ${
                  selectedRole === "vendor"
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 ring-1 ring-emerald-500"
                    : "border-slate-200 dark:border-white/10 hover:border-emerald-500/50 bg-white dark:bg-slate-900/50"
                }`}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`size-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                      selectedRole === "vendor"
                        ? "bg-emerald-500 text-white shadow-xl shadow-emerald-500/30"
                        : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <span className="material-symbols-outlined text-4xl">
                      storefront
                    </span>
                  </div>
                  <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white">
                    Join as a Vendor
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    For ethical makers and brands committed to people and
                    planet.
                  </p>
                  <ul className="space-y-2 text-left w-full pl-2">
                    {[
                      "Marketplace Access",
                      "Community Endorsements",
                      "Circular Support",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-xs font-bold"
                      >
                        <span className="material-symbols-outlined text-emerald-500 text-sm mt-0.5">
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedRole === "vendor" && (
                  <div className="absolute top-5 right-5 text-emerald-500 animate-in fade-in zoom-in duration-300">
                    <span className="material-symbols-outlined text-2xl">
                      verified
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button
                className="w-full md:w-80 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-black text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Sign Up
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
              <p className="text-[10px] text-slate-400 font-medium text-center max-w-sm leading-relaxed">
                By clicking "Sign Up", you agree to our{" "}
                <Link
                  href="#"
                  className="text-emerald-500 font-bold hover:underline hover:text-emerald-600"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-emerald-500 font-bold hover:underline hover:text-emerald-600"
                >
                  Ethical Standards
                </Link>
                .
              </p>
            </div>

            <div className="mt-8 text-center border-t border-slate-100 dark:border-white/5 pt-6">
              <p className="text-xs text-slate-500 font-medium">
                Already have an account?
                <Link
                  href="/marcketplace/auth/signin"
                  className="text-emerald-500 font-black hover:underline hover:text-emerald-600 ml-1 transition-colors uppercase tracking-wide text-[10px]"
                >
                  Log In
                </Link>
              </p>
            </div>

            <footer className="mt-8 flex flex-wrap justify-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-widest">
              <Link
                href="#"
                className="hover:text-emerald-500 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-500 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-500 transition-colors"
              >
                Help
              </Link>
              <span>© 2024 Good Market</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
