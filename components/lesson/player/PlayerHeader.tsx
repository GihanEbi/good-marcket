"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export function PlayerHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7f3eb] dark:border-[#1e3a27] bg-white/80 dark:bg-[#0a0f0b]/80 backdrop-blur-xl px-6 md:px-10 py-3 sticky top-0 z-50 h-[72px] transition-colors duration-300">
      <div className="flex items-center gap-10">
        {/* Brand/Logo Node */}
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="size-9 bg-[#13ec5b] rounded-xl flex items-center justify-center text-[#15291b] shadow-lg shadow-[#13ec5b]/20 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl font-black fill-1">
              auto_awesome
            </span>
          </div>
          <h2 className="text-[#15291b] dark:text-white text-xl font-black leading-tight tracking-tighter">
            Edu<span className="text-[#13ec5b]">DNA</span>
          </h2>
        </Link>

        {/* Neural Navigation Pipeline */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/learning/users/student/portal/dashboard"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67] hover:text-[#13ec5b] transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/learning/users/student/portal/my_learning"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5c7a67] hover:text-[#13ec5b] transition-colors"
          >
            Knowledge Base
          </Link>
          <div className="relative px-1">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#13ec5b] cursor-default">
              Neural Player
            </span>
            <div className="absolute -bottom-[21px] left-0 w-full h-1 bg-[#13ec5b] rounded-t-full shadow-[0_0_10px_#13ec5b]"></div>
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        {/* Search Engine Interface */}
        <label className="hidden md:flex items-center min-w-48 h-11 max-w-72 relative group">
          <span className="material-symbols-outlined absolute left-4 text-[#5c7a67] text-lg group-focus-within:text-[#13ec5b] transition-colors">
            search
          </span>
          <input
            className="w-full rounded-2xl text-xs font-bold border border-transparent bg-[#f0f7f2] dark:bg-[#15291b] pl-12 pr-4 h-full focus:border-[#13ec5b]/40 focus:ring-0 outline-none text-[#15291b] dark:text-white placeholder-[#5c7a67] transition-all"
            placeholder="Search DNA nodes..."
          />
        </label>

        <div className="flex items-center gap-2">
          {/* Theme Logic Switch */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="size-10 flex items-center justify-center text-[#5c7a67] hover:text-[#13ec5b] hover:bg-[#13ec5b]/10 rounded-xl transition-all"
          >
            <span className="material-symbols-outlined text-xl font-bold">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* User Profile Node */}
          <div className="flex items-center gap-3 pl-2 border-l border-[#e7f3eb] dark:border-[#1e3a27]">
            <div className="hidden sm:block text-right">
              <p className="text-[10px] font-black text-[#15291b] dark:text-white uppercase tracking-tight">
                Alex Johnson
              </p>
              <p className="text-[8px] font-black text-[#13ec5b] uppercase tracking-widest">
                Level 12 Sync
              </p>
            </div>
            <div className="size-10 rounded-xl border-2 border-[#13ec5b]/20 bg-[#15291b] overflow-hidden shadow-md shadow-black/5 cursor-pointer hover:border-[#13ec5b] transition-all">
              <img
                src="https://ui-avatars.com/api/?name=Alex+Johnson&background=15291b&color=13ec5b&bold=true"
                alt="User"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
