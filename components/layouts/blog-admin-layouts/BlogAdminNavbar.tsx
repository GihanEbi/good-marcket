"use client";
import ThemeToggle from "@/components/ThemeToggle";

interface BlogAdminHeaderProps {
  onMenuClick: () => void;
}

export default function BlogAdminHeader({ onMenuClick }: BlogAdminHeaderProps) {
  return (
    <header
      className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 sticky top-0 z-40 
      bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl 
      border-b border-slate-200 dark:border-white/5 transition-colors duration-300"
    >
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button - Vibrant Accent */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 flex items-center justify-center rounded-xl
            bg-slate-100 dark:bg-white/5 
            text-slate-600 dark:text-slate-300 
            hover:text-emerald-500 dark:hover:text-emerald-400 
            transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-2xl">menu_open</span>
        </button>

     
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Modern Search Bar */}
        <div className="relative hidden md:block group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400 group-focus-within:text-emerald-500 transition-colors text-xl">
              search
            </span>
          </div>
          <input
            className="pl-10 pr-4 py-2.5 w-48 lg:w-72 text-sm font-medium
              bg-slate-100 dark:bg-slate-900/50 
              border border-transparent focus:border-emerald-500/50 
              dark:border-white/5 dark:focus:border-emerald-500/50
              rounded-2xl transition-all outline-none
              text-slate-900 dark:text-white
              placeholder:text-slate-400 dark:placeholder:text-slate-600"
            placeholder="Search console..."
            type="text"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          {/* Notifications Placeholder (Adding a splash of color) */}
          <button className="relative p-2 text-slate-400 hover:text-emerald-500 transition-colors">
            <span className="material-symbols-outlined text-2xl">
              notifications
            </span>
            <span className="absolute top-2 right-2 size-2 bg-rose-500 rounded-full border-2 border-white dark:border-[#0f172a]"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
