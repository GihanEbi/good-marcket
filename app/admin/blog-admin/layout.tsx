"use client";

import { useState } from "react";
import BlogAdminSidebar from "@/components/layouts/blog-admin-layouts/BlogAdminSidebar";
import BlogAdminHeader from "@/components/layouts/blog-admin-layouts/BlogAdminNavbar";

export default function AdminLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    /* CORE LAYOUT: 
       Light: slate-50 (Very light gray/blue)
       Dark: slate-950 (#020617 - The Deep Obsidian we established)
    */
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* Sidebar (Responsive) */}
      <BlogAdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full relative">
        {/* Decorative Background Glows (Fixed to the layout so they don't scroll) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/[0.03] blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-blue-600/[0.02] blur-[120px] pointer-events-none z-0"></div>

        {/* Header */}
        <BlogAdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto relative z-10 custom-scrollbar">
          {/* Padding Wrapper: 
             Ensures content doesn't hug the edges and has room to breathe 
          */}
          <div className="min-h-full">{children}</div>
        </main>
      </div>

      {/* Optional: Global Styles for a thinner, modern scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
      `}</style>
    </div>
  );
}
