"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Dashboard",
    icon: "dashboard",
    href: "/admin/lerning-admin/dashboard",
  },
  { name: "Courses", icon: "book", href: "/admin/lerning-admin/courses" },
  {
    name: "Students",
    icon: "school",
    href: "/admin/lerning-admin/students",
  },
  {
    name: "Instructors",
    icon: "group",
    href: "/admin/lerning-admin/instructors",
  },
  {
    name: "Messages",
    icon: "message",
    href: "/admin/lerning-admin/messages",
  },
  {
    name: "Schedule",
    icon: "calendar_today",
    href: "/admin/lerning-admin/schedule",
  },
  {
    name: "Settings",
    icon: "settings",
    href: "/admin/lerning-admin/settings",
  },
];

interface LearningAdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LearningAdminSidebar({
  isOpen,
  onClose,
}: LearningAdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 
          bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl
          border-r border-slate-200 dark:border-white/10 
          flex flex-col transition-all duration-300 ease-in-out lg:static lg:translate-x-0 ${
            isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
          }`}
      >
        {/* Sidebar Header */}
        <div className="p-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo with Dynamic Gradient */}
            <div className="size-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-6 transition-transform">
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
            <div className="flex flex-col">
              <span className="text-slate-900 dark:text-white text-lg font-black tracking-tight leading-none">
                Good Market
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                Admin Console
              </span>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="lg:hidden text-slate-500 dark:text-slate-400 p-1"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">
          <p className="px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-2">
            Management
          </p>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 relative ${
                  isActive
                    ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {/* Active Indicator Gaps */}
                {isActive && (
                  <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-emerald-500 rounded-r-full shadow-[4px_0_12px_rgba(16,185,129,0.4)]" />
                )}

                <span
                  className={`material-symbols-outlined text-2xl transition-all ${
                    isActive
                      ? "scale-110"
                      : "opacity-70 group-hover:opacity-100"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="font-bold tracking-tight text-sm">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Profile Card */}
        <div className="p-4 mt-auto">
          <div className="p-4 rounded-[2rem] bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full border-2 border-emerald-500/30 p-0.5 shrink-0">
                <div
                  className="size-full rounded-full bg-slate-200 dark:bg-slate-800 bg-cover"
                  style={{
                    backgroundImage:
                      'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Admin")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  Master Admin
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Live
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/admin/auth"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl 
                bg-white dark:bg-slate-900 
                text-slate-600 dark:text-slate-400 
                hover:text-rose-600 dark:hover:text-rose-400 
                border border-slate-200 dark:border-white/5
                hover:border-rose-200 dark:hover:border-rose-500/20
                shadow-sm hover:shadow-rose-500/10 transition-all font-bold text-xs group"
            >
              <span className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition-transform">
                power_settings_new
              </span>
              Logout
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
