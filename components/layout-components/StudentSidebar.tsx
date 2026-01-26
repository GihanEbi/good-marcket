"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/client/context/SidebarContext";

export function Sidebar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const { isOpen, close } = useSidebar(); // Get state

  const navItems = [
    {
      label: "Dashboard",
      icon: "dashboard",
      href: "/learning/users/student/portal/dashboard",
    },
    { label: "Courses", icon: "book", href: "/learning/users/student/portal/courses" },
    {
      label: "My Learning",
      icon: "school",
      href: "/learning/users/student/portal/my_learning",
    },
    {
      label: "Assignments",
      icon: "assignment",
      href: "/learning/users/student/portal/assignments",
    },
    {
      label: "Quizzes",
      icon: "quiz",
      href: "/learning/users/student/portal/quizzes",
    },
    {
      label: "Messages",
      icon: "message",
      href: "/learning/users/student/portal/messages",
    },
    {
      label: "Schedule",
      icon: "calendar_today",
      href: "/learning/users/student/portal/schedule",
    },
    {
      label: "Settings",
      icon: "settings",
      href: "/learning/users/student/portal/settings",
    },
  ];

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Sidebar Container */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#15291b] border-r border-[#e7f3eb] dark:border-[#1a2e21] 
          flex flex-col h-full p-4 transition-transform duration-300 ease-in-out font-display
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        {/* Header / Logo */}
        <div className="flex items-center justify-between px-2 mb-8">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">
              auto_stories
            </span>
            <h2 className="text-xl font-black tracking-tight text-earth-dark dark:text-white">
              EduLearn
            </h2>
          </div>
          {/* Close button (Mobile only) */}
          <button
            onClick={close}
            className="md:hidden text-earth-sage hover:text-earth-dark dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* User Profile Mini */}
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="relative">
            <div
              className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://ui-avatars.com/api/?name=Alex+Johnson&background=random")',
              }}
            ></div>
            <span className="absolute bottom-0 right-0 size-3 bg-primary border-2 border-white dark:border-[#15291b] rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight text-earth-dark dark:text-white">
              Alex Johnson
            </span>
            <span className="text-[10px] text-earth-sage font-bold uppercase">
              Online
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary/10 text-earth-dark dark:text-white font-bold"
                    : "text-earth-sage dark:text-[#a0c4ab] hover:bg-[#e7f3eb] dark:hover:bg-[#1a2e21]"
                }`}
              >
                <span
                  className={`material-symbols-outlined ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="mt-auto border-t border-[#e7f3eb] dark:border-[#1a2e21] pt-4 flex flex-col gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-earth-sage dark:text-[#a0c4ab] hover:bg-[#e7f3eb] dark:hover:bg-[#1a2e21] w-full text-left transition-colors"
          >
            <span className="material-symbols-outlined">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
            <span className="text-sm font-bold">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>

          <Link
            href="/learning/auth/signin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 w-full text-left transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-bold">Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
