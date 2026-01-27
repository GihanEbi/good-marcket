"use client";

import React from "react";
import { Manrope } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
});

const dashboardItems = [
  {
    title: "Knowledge Hub",
    icon: "menu_book",
    color: "from-emerald-400 to-cyan-500",
    description:
      "Manage central content, research articles, case studies, and toolkits for the community CMS.",
    action: "Manage CMS",
    path: "/admin/blog-admin/dashboard",
  },
  {
    title: "Learning Management",
    icon: "school",
    color: "from-blue-400 to-indigo-500",
    description:
      "Oversee educational courses, certification programs, and regenerative economy curriculum.",
    action: "Manage LMS",
    path: "/admin/lerning-admin/dashboard",
  },
  {
    title: "Ethical Marketplace",
    icon: "storefront",
    color: "from-amber-400 to-orange-500",
    description:
      "Moderation of vendors, product listings, and circular economy trade transactions.",
    action: "Manage Marketplace",
    path: "/admin/marketplace-admin/dashboard",
  },
  {
    title: "Traceability (Blockchain)",
    icon: "token",
    color: "from-purple-400 to-pink-500",
    description:
      "Monitor supply chain verification logs, blockchain ledgers, and proof-of-impact data.",
    action: "Manage Traceability",
    path: "/admin/traceability-admin/dashboard",
  },
  {
    title: "User Management",
    icon: "group_work",
    color: "from-rose-400 to-red-500",
    description:
      "Handle global accounts, contributor profiles, regional leads, and stakeholder verification.",
    action: "Manage Users",
    path: "/admin/user-admin/dashboard",
  },
];

export default function MasterAdminPortal() {
  const router = useRouter();

  return (
    <div
      className={`min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 ${manrope.variable} font-display relative overflow-hidden transition-colors duration-500`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* --- Background Mesh Gradients --- */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-emerald-500/10 dark:bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-600/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="w-full bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200 dark:border-white/5 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="size-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
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
            <span className="text-slate-900 dark:text-white text-xl font-black tracking-tight">
              Good Market{" "}
              <span className="text-emerald-500 dark:text-emerald-400">
                Admin
              </span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 pr-6 border-r border-slate-200 dark:border-white/10">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  Master Admin
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  master@goodmarket.org
                </p>
              </div>
              <div className="size-10 rounded-full border-2 border-emerald-500/30 p-0.5">
                <div
                  className="size-full rounded-full bg-slate-200 dark:bg-slate-800 bg-cover"
                  style={{
                    backgroundImage:
                      'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Admin")',
                  }}
                ></div>
              </div>
            </div>
            <button
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-rose-500 font-bold text-sm transition-colors group"
              onClick={() => router.push("/")}
            >
              <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">
                logout
              </span>
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              System Operational
            </span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            Ecosystem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              Control Center
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl font-medium leading-relaxed">
            Welcome back, Admin. Monitor and manage the global regenerative
            economy through your central command modules.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboardItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              {/* FIXED: Added pointer-events-none to prevent blocking clicks */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
              ></div>

              <div
                className={`size-14 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] mb-8 group-hover:rotate-6 transition-transform duration-500`}
              >
                <div className="size-full bg-white dark:bg-slate-900 rounded-[15px] flex items-center justify-center">
                  <span
                    className={`material-symbols-outlined text-3xl text-transparent bg-clip-text bg-gradient-to-br ${item.color}`}
                  >
                    {item.icon}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                {item.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium">
                {item.description}
              </p>

              {/* FIXED: Added relative z-10 to ensure the button layer is on top */}
              <div className="mt-auto relative z-10">
                <Link
                  href={item.path}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all duration-300 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-gradient-to-r ${item.color} group-hover:text-white group-hover:shadow-lg`}
                >
                  {item.action}
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-white/5 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-500 font-medium">
          © 2026 Good Market Intelligence Unit.{" "}
          <span className="text-slate-400 dark:text-slate-700">
            All Systems Nominal.
          </span>
        </p>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-emerald-500 transition-colors uppercase tracking-widest"
          >
            Security Logs
          </a>
          <a
            href="#"
            className="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-emerald-500 transition-colors uppercase tracking-widest"
          >
            System Health
          </a>
        </div>
      </footer>
    </div>
  );
}
