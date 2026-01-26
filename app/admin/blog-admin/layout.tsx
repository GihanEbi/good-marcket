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
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-[#f6f8f6]">
      {/* Sidebar (Responsive) */}
      <BlogAdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header (Pass toggle function) */}
        <BlogAdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
