"use client";

import React from "react";
import { useSidebar } from "@/client/context/SidebarContext";

export function Navbar() {
  const { toggle } = useSidebar(); // Get toggle function

  return (
    <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e7f3eb] dark:border-[#1a2e21] px-6 py-4 flex items-center justify-between gap-4 md:gap-8 transition-colors font-display">
      {/* Mobile Menu Button - Triggers Toggle */}
      <button
        onClick={toggle}
        className="md:hidden p-2 -ml-2 text-earth-dark dark:text-white hover:bg-[#e7f3eb] dark:hover:bg-[#1a2e21] rounded-lg transition-colors"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Search Bar */}
      <div className="flex-1 max-w-md relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-earth-sage">
          search
        </span>
        <input
          className="w-full bg-white dark:bg-[#1a2e21] border border-[#e7f3eb] dark:border-[#263d2e] rounded-lg pl-11 pr-4 py-2 text-sm text-earth-dark dark:text-white placeholder-earth-sage/70 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="Search courses..."
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 md:gap-4">
        <button className="p-2 rounded-lg bg-white dark:bg-[#1a2e21] border border-[#e7f3eb] dark:border-[#263d2e] text-earth-sage hover:text-primary hover:border-primary/30 transition-all relative group">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2e21]"></span>
        </button>
        <button className="p-2 rounded-lg bg-white dark:bg-[#1a2e21] border border-[#e7f3eb] dark:border-[#263d2e] text-earth-sage hover:text-primary hover:border-primary/30 transition-all">
          <span className="material-symbols-outlined">chat</span>
        </button>
      </div>
    </header>
  );
}
