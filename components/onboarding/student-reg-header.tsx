"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function StudentRegHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-[#e7f3eb] dark:border-[#1a2e21] bg-white dark:bg-[#15291b] px-6 lg:px-10 py-3 sticky top-0 z-50 transition-colors duration-200">
      {/* Logo Section */}
      <div className="flex items-center gap-4 text-earth-dark dark:text-white">
        <span className="material-symbols-outlined text-primary text-2xl font-bold">
          auto_stories
        </span>
        <h2 className="text-xl font-extrabold tracking-tight">EduLearn</h2>
      </div>

      {/* Actions Section */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg text-earth-sage hover:bg-[#f6f8f6] dark:text-[#a0c4ab] dark:hover:bg-[#1a2e21] transition-all"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <span className="material-symbols-outlined text-xl">
                light_mode
              </span>
            ) : (
              <span className="material-symbols-outlined text-xl">
                dark_mode
              </span>
            )}
          </button>
        )}

        {/* Help Button */}
        <button className="hidden sm:block px-4 py-2 bg-primary/10 text-earth-dark dark:text-white text-sm font-bold rounded-lg hover:bg-primary/20 transition-all">
          Help Center
        </button>

        {/* User Avatar */}
        <div
          className="size-10 rounded-full border-2 border-primary/20 bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage:
              'url("https://ui-avatars.com/api/?name=User&background=random")',
          }}
        ></div>
      </div>
    </header>
  );
}
